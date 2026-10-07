/*
 * Reproduces the ICCS KAT_SIG.c sequence so the output can be compared with
 * the official Test_Vectors/KAT_SIG_<instance>.txt files:
 *   - drng_seed is seeded with "seed" x 16 (64 bytes)
 *   - drng_msg  is seeded with "msg" x 21 + "m" (64 bytes)
 *   - message length starts at 56 bytes and grows by 8 per count
 * Output per count (one hex line each): seed, pk, sk, m, sn, preceded by a
 * decimal "M_Len" line so a parser can split the fields.
 */
#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#include "drng.h"
#include "hal.h"
#include "sendfn.h"
#include "SIG_AlgorithmInstance.h"
#ifdef USE_KECCAK
#include "randombytes.h"
#else
DRNG_ctx drng_algorithm;
#endif
#define SEED_LEN_BYTES 64
#define KAT_MLEN_START 56
#define KAT_MLEN_STEP 8
unsigned char tv_seed[SEED_LEN_BYTES];
unsigned char tv_msg_nonce[SEED_LEN_BYTES];

static void printbytes(const unsigned char *x, unsigned long long xlen) {
    static const char hex[] = "0123456789abcdef";
    char *outs = malloc((size_t)(2 * xlen + 1));
    unsigned long long i;

    if (outs == NULL) {
        hal_send_str("alloc_failed");
        return;
    }
    for (i = 0; i < xlen; i++) {
        outs[2 * i] = hex[(x[i] >> 4) & 0xF];
        outs[2 * i + 1] = hex[x[i] & 0xF];
    }
    outs[2 * xlen] = 0;
    hal_send_str(outs);
    free(outs);
}

int main(void) {
    unsigned long long pk_len_max = sig_get_pk_len_bytes();
    unsigned long long sk_len_max = sig_get_sk_len_bytes();
    unsigned long long sn_len_max = sig_get_sn_len_bytes();
    unsigned long long m_len_max = KAT_MLEN_START + (unsigned long long)KAT_MLEN_STEP * NGCC_ITERATIONS;
    unsigned long long m_len = KAT_MLEN_START;
    unsigned char *pk = malloc((size_t)pk_len_max);
    unsigned char *sk = malloc((size_t)sk_len_max);
    unsigned char *sn = malloc((size_t)sn_len_max);
    unsigned char *m = malloc((size_t)m_len_max);
    unsigned char seed[SEED_LEN_BYTES];
    int i;
#ifndef USE_KECCAK
    // DRNG_ctx for generating seed
    DRNG_ctx drng_seed;
    // DRNG_ctx for generating message
    DRNG_ctx drng_msg;
#endif

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");
#ifndef USE_KECCAK
    for (i = 0; i < SEED_LEN_BYTES / 4; i++)
    {
        memcpy(tv_seed + 4 * i, "seed", 4);
    }
    if (init_random_number(&drng_seed, tv_seed, sizeof(tv_seed)) != 0)
    {
        hal_send_str("drng_init_failed");
        return -1;
    }
    for (i = 0; i < SEED_LEN_BYTES / 3; i++)
    {
        memcpy(tv_msg_nonce + 3 * i, "msg", 3);
    }
    memcpy(tv_msg_nonce + SEED_LEN_BYTES - 1, "m", 1);
    if (init_random_number(&drng_msg, tv_msg_nonce, sizeof(tv_msg_nonce)) != 0)
    {
        hal_send_str("drng_init_failed");
        return -1;
    }
#endif
    if (pk == NULL || sk == NULL || sn == NULL || m == NULL) {
        hal_send_str("alloc_failed");
        return -1;
    }

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        unsigned long long pk_len = sig_get_pk_len_bytes();
        unsigned long long sk_len = sig_get_sk_len_bytes();
        unsigned long long sn_len = sig_get_sn_len_bytes();
#ifdef USE_KECCAK
        randombytes(seed, SEED_LEN_BYTES);
        randombytes(m, (size_t)m_len);
#else
        get_random_number(&drng_seed, seed, SEED_LEN_BYTES * 8);
        get_random_number(&drng_msg, m, m_len * 8);
        init_random_number(&drng_algorithm, seed, SEED_LEN_BYTES);
#endif
        printbytes(seed, SEED_LEN_BYTES);

        if (sig_keygen(pk, &pk_len, sk, &sk_len) != 0) {
            hal_send_str("ERROR keygen");
        }
        printbytes(pk, pk_len);
        printbytes(sk, sk_len);
        send_unsignedll("M_Len = ", m_len);
        printbytes(m, m_len);
        if (sig_sign(sk, sk_len, m, m_len, sn, &sn_len) != 0) {
            hal_send_str("ERROR sign");
            sn_len = 0;
        }
        printbytes(sn, sn_len);
        if (sig_verify(pk, pk_len, sn, sn_len, m, m_len) != 0) {
            hal_send_str("ERROR");
        }
        hal_send_str("+");
        m_len += KAT_MLEN_STEP;
    }

    hal_send_str("#");
    free(pk);
    free(sk);
    free(sn);
    free(m);

    return 0;
}
