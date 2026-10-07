#include <string.h>
#include <stdint.h>
#include <stdlib.h>

#include "hal.h"
#include "sendfn.h"
#include "SIG_AlgorithmInstance.h"
#ifdef USE_KECCAK
#include "randombytes.h"
#else
#include "drng.h"
DRNG_ctx drng_algorithm;
#endif

#ifndef NGCC_SIG_MLEN
#define NGCC_SIG_MLEN 59
#endif

static const unsigned char test_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x73,
    0x69, 0x67, 0x2d, 0x74, 0x65, 0x73, 0x74, 0x2d,
    0x73, 0x65, 0x65, 0x64
};

static void fail_and_halt(const char *reason) {
    hal_send_str(reason);
#ifdef MPS2_AN386
    __builtin_trap();
#endif
    while (1) {
    }
}

static void fill_random(unsigned char *buf, unsigned long long len) {
#ifdef USE_KECCAK
    randombytes(buf, (size_t)len);
#else
    get_random_number(&drng_algorithm, buf, len * 8);
#endif
}

static int test_sign_verify(unsigned char *pk, unsigned char *sk, unsigned char *m, unsigned char *sn) {
    unsigned long long pk_len = sig_get_pk_len_bytes();
    unsigned long long sk_len = sig_get_sk_len_bytes();
    unsigned long long sn_len = sig_get_sn_len_bytes();
    unsigned long long m_len = NGCC_SIG_MLEN;

    if (sig_keygen(pk, &pk_len, sk, &sk_len) != 0) {
        hal_send_str("sig_keygen failed");
        return -1;
    }
    fill_random(m, m_len);
    if (sig_sign(sk, sk_len, m, m_len, sn, &sn_len) != 0) {
        hal_send_str("sig_sign failed");
        return -1;
    }
    if (sn_len > sig_get_sn_len_bytes()) {
        hal_send_str("sig_sign returned oversized signature");
        return -1;
    }
    if (sig_verify(pk, pk_len, sn, sn_len, m, m_len) != 0) {
        hal_send_str("sig_verify rejected valid signature");
        return -1;
    }
    hal_send_str("OK KEYS");

    /* Corrupt one byte of the signature; verification must now fail. */
    if (sn_len > 0) {
        sn[sn_len / 2] ^= 0x01;
        if (sig_verify(pk, pk_len, sn, sn_len, m, m_len) == 0) {
            hal_send_str("sig_verify accepted forged signature");
            return -1;
        }
        sn[sn_len / 2] ^= 0x01;
    }
    /* Corrupt one byte of the message; verification must fail too. */
    m[0] ^= 0x01;
    if (sig_verify(pk, pk_len, sn, sn_len, m, m_len) == 0) {
        hal_send_str("sig_verify accepted forged message");
        return -1;
    }
    m[0] ^= 0x01;
    hal_send_str("OK FORGERY");
    return 0;
}

int main(void) {
    unsigned long long pk_len_max = sig_get_pk_len_bytes();
    unsigned long long sk_len_max = sig_get_sk_len_bytes();
    unsigned long long sn_len_max = sig_get_sn_len_bytes();
    unsigned char *pk;
    unsigned char *sk;
    unsigned char *m;
    unsigned char *sn;
    int i;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

#ifndef USE_KECCAK
    if (init_random_number(&drng_algorithm, test_seed, sizeof(test_seed)) != 0) {
        fail_and_halt("drng_init_failed");
    }
#endif

    pk = malloc((size_t)pk_len_max);
    sk = malloc((size_t)sk_len_max);
    m = malloc(NGCC_SIG_MLEN);
    sn = malloc((size_t)sn_len_max);
    if (pk == NULL || sk == NULL || m == NULL || sn == NULL) {
        fail_and_halt("alloc_failed");
    }

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        if (test_sign_verify(pk, sk, m, sn) != 0) {
            hal_send_str("ERROR KEYS");
            hal_send_str("#");
            return -1;
        }
        hal_send_str("+");
    }

    free(pk);
    free(sk);
    free(m);
    free(sn);
    hal_send_str("#");
    return hal_main_done();
}
