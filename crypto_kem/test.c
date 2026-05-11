#include <string.h>
#include <stdint.h>
#include <stdlib.h>

#include "hal.h"
#include "sendfn.h"
#include "KEM_AlgorithmInstance.h"
#if defined(__has_include)
#if __has_include("parameters.h")
#include "parameters.h"
#endif
#if __has_include("ntt.h")
#include "ntt.h"
#endif
#endif
#ifdef USE_KECCAK
#include "randombytes.h"
#else
#include "drng.h"
DRNG_ctx drng_algorithm;
#endif
static const unsigned char test_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x74,
    0x65, 0x73, 0x74, 0x2d, 0x73, 0x65, 0x65, 0x64
};

static void fail_and_halt(const char *reason) {
    hal_send_str(reason);
#ifdef MPS2_AN386
    __builtin_trap();
#endif
    while (1) {
    }
}

static int test_roundtrip(void) {
    unsigned long long pk_len = kem_get_pk_len_bytes();
    unsigned long long sk_len = kem_get_sk_len_bytes();
    unsigned long long ss_len = kem_get_ss_len_bytes();
    unsigned long long ct_len = kem_get_ct_len_bytes();
    unsigned long long ignored_len = 0;
    unsigned char *pk = malloc(pk_len);
    unsigned char *sk = malloc(sk_len);
    unsigned char *ct = malloc(ct_len);
    unsigned char *ss_a = malloc(ss_len);
    unsigned char *ss_b = malloc(ss_len);

    if (pk == NULL || sk == NULL || ct == NULL || ss_a == NULL || ss_b == NULL) {
        return -1;
    }
    if (kem_keygen(pk, &ignored_len, sk, &ignored_len) != 0) {
        return -1;
    }
    if (kem_enc(pk, pk_len, ss_a, &ignored_len, ct, &ignored_len) != 0) {
        return -1;
    }
    if (kem_dec(sk, sk_len, ct, ct_len, ss_b, &ignored_len) != 0) {
        return -1;
    }
    free(pk);
    free(sk);
    free(ct);
    free(ss_a);
    free(ss_b);
    return memcmp(ss_a, ss_b, ss_len);
}

#if defined(DKE1_N) && defined(DKE1_Q)
static int16_t dke128_ref_montgomery_reduce(int32_t a) {
    const int16_t qinv = -3327;
    int16_t t = (int16_t)a * qinv;

    return (int16_t)((a - (int32_t)t * DKE1_Q) >> 16);
}

static int16_t dke128_ref_barrett_reduce(int16_t a) {
    const int16_t v = ((1 << 26) + DKE1_Q / 2) / DKE1_Q;
    int16_t t = (int16_t)(((int32_t)v * a + (1 << 25)) >> 26);

    t = (int16_t)(t * DKE1_Q);
    return (int16_t)(a - t);
}

static int16_t dke128_ref_fqmul(int16_t a, int16_t b) {
    return dke128_ref_montgomery_reduce((int32_t)a * b);
}

static const int16_t dke128_ref_zetas[128] = {
    -1044,  -758,  -359, -1517,  1493,  1422,   287,   202,
    -171,   622,  1577,   182,   962, -1202, -1474,  1468,
    573, -1325,   264,   383,  -829,  1458, -1602,  -130,
    -681,  1017,   732,   608, -1542,   411,  -205, -1571,
    1223,   652,  -552,  1015, -1293,  1491,  -282, -1544,
    516,    -8,  -320,  -666, -1618, -1162,   126,  1469,
    -853,   -90,  -271,   830,   107, -1421,  -247,  -951,
    -398,   961, -1508,  -725,   448, -1065,   677, -1275,
    -1103,   430,   555,   843, -1251,   871,  1550,   105,
    422,   587,   177,  -235,  -291,  -460,  1574,  1653,
    -246,   778,  1159,  -147,  -777,  1483,  -602,  1119,
    -1590,   644,  -872,   349,   418,   329,  -156,   -75,
    817,  1097,   603,   610,  1322, -1285, -1465,   384,
    -1215,  -136,  1218, -1335,  -874,   220, -1187, -1659,
    -1185, -1530, -1278,   794, -1510,  -854,  -870,   478,
    -108,  -308,   996,   991,   958, -1460,  1522,  1628
};

static void dke128_ref_ntt(int16_t r[DKE1_N]) {
    unsigned int len, start, j, k;
    int16_t t, zeta;

    k = 1;
    for (len = 128; len >= 2; len >>= 1) {
        for (start = 0; start < DKE1_N; start = j + len) {
            zeta = dke128_ref_zetas[k++];
            for (j = start; j < start + len; j++) {
                t = dke128_ref_fqmul(zeta, r[j + len]);
                r[j + len] = (int16_t)(r[j] - t);
                r[j] = (int16_t)(r[j] + t);
            }
        }
    }
}

static void dke128_ref_invntt(int16_t r[DKE1_N]) {
    unsigned int start, len, j, k;
    int16_t t, zeta;
    const int16_t f = 1441;

    k = 127;
    for (len = 2; len <= 128; len <<= 1) {
        for (start = 0; start < DKE1_N; start = j + len) {
            zeta = dke128_ref_zetas[k--];
            for (j = start; j < start + len; j++) {
                t = r[j];
                r[j] = dke128_ref_barrett_reduce((int16_t)(t + r[j + len]));
                r[j + len] = (int16_t)(r[j + len] - t);
                r[j + len] = dke128_ref_fqmul(zeta, r[j + len]);
            }
        }
    }

    for (j = 0; j < DKE1_N; j++) {
        r[j] = dke128_ref_fqmul(r[j], f);
    }
}

static void dke128_ref_basemul_pair(int16_t r[2], const int16_t a[2], const int16_t b[2], int16_t zeta) {
    r[0]  = dke128_ref_fqmul(a[1], b[1]);
    r[0]  = dke128_ref_fqmul(r[0], zeta);
    r[0]  = (int16_t)(r[0] + dke128_ref_fqmul(a[0], b[0]));
    r[1]  = dke128_ref_fqmul(a[0], b[1]);
    r[1]  = (int16_t)(r[1] + dke128_ref_fqmul(a[1], b[0]));
}

static void dke128_ref_basemul(int16_t r[DKE1_N], const int16_t a[DKE1_N], const int16_t b[DKE1_N]) {
    unsigned int i;

    for (i = 0; i < DKE1_N / 4; i++) {
        dke128_ref_basemul_pair(&r[4 * i], &a[4 * i], &b[4 * i], dke128_ref_zetas[64 + i]);
        dke128_ref_basemul_pair(&r[4 * i + 2], &a[4 * i + 2], &b[4 * i + 2], (int16_t)-dke128_ref_zetas[64 + i]);
    }
}

static void dke128_fill_test_poly(int16_t r[DKE1_N], unsigned int case_id) {
    unsigned int i;

    for (i = 0; i < DKE1_N; i++) {
        uint32_t x = (uint32_t)(i * 257u + case_id * 811u + ((i ^ case_id) * 17u));
        int32_t centered = (int32_t)(x % (2u * DKE1_Q + 1u)) - DKE1_Q;

        if ((case_id & 1u) != 0u) {
            centered /= 2;
        }
        if ((case_id & 2u) != 0u && (i & 7u) == 0u) {
            centered = (i & 8u) == 0u ? (DKE1_Q - 1) : -(DKE1_Q - 1);
        }
        r[i] = (int16_t)centered;
    }
}

static int test_dke128_ntt(unsigned int case_id) {
    int16_t a_opt[DKE1_N];
    int16_t b_opt[DKE1_N];
    int16_t a_ref[DKE1_N];
    int16_t b_ref[DKE1_N];
    int16_t r_opt[DKE1_N];
    int16_t r_ref[DKE1_N];
    unsigned int i;

    dke128_fill_test_poly(a_opt, case_id);
    dke128_fill_test_poly(b_opt, case_id + 17u);
    memcpy(a_ref, a_opt, sizeof(a_ref));
    memcpy(b_ref, b_opt, sizeof(b_ref));

    DKE1_ntt(a_opt);
    DKE1_ntt(b_opt);
    DKE1_basemul(r_opt, a_opt, b_opt);
    DKE1_invntt(r_opt);

    dke128_ref_ntt(a_ref);
    dke128_ref_ntt(b_ref);
    dke128_ref_basemul(r_ref, a_ref, b_ref);
    dke128_ref_invntt(r_ref);

    for (i = 0; i < DKE1_N; i++) {
        r_opt[i] = dke128_ref_barrett_reduce(r_opt[i]);
        r_ref[i] = dke128_ref_barrett_reduce(r_ref[i]);
    }

    return memcmp(r_opt, r_ref, sizeof(r_ref));
}
#endif

int main(void) {
    int i;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

#ifndef USE_KECCAK
    if (init_random_number(&drng_algorithm, test_seed, sizeof(test_seed)) != 0) {
        fail_and_halt("drng_init_failed");
    }
#endif

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        if (test_roundtrip() != 0) {
            hal_send_str("ERROR KEYS");
            // return -1;
        }
        else{
            hal_send_str("OK KEYS");
        }        
#if defined(DKE1_N) && defined(DKE1_Q)
        if (test_dke128_ntt((unsigned int)i) != 0) {
            hal_send_str("ERROR NTT");
            // return -1;
        }
        else{
            hal_send_str("OK NTT");
        }
#endif
        hal_send_str("+");
    }

    hal_send_str("#");
    return 0;
}
