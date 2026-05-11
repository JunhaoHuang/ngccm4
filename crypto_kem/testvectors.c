#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#include "drng.h"
#include "hal.h"
#include "KEM_AlgorithmInstance.h"
#ifdef USE_KECCAK
#include "randombytes.h"
#else
#include "drng.h"
DRNG_ctx drng_algorithm;
#endif
unsigned char tv_seed[] = {
    3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3,
    2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5
};

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
    int i;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");
#ifndef USE_KECCAK
    if (init_random_number(&drng_algorithm, tv_seed, sizeof(tv_seed)) != 0) {
        hal_send_str("drng_init_failed");
        return -1;
    }
#endif
    if (pk == NULL || sk == NULL || ct == NULL || ss_a == NULL || ss_b == NULL) {
        hal_send_str("alloc_failed");
        return -1;
    }

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        kem_keygen(pk, &ignored_len, sk, &ignored_len);
        kem_enc(pk, pk_len, ss_a, &ignored_len, ct, &ignored_len);
        kem_dec(sk, sk_len, ct, ct_len, ss_b, &ignored_len);
        if (memcmp(ss_a, ss_b, ss_len) != 0) {
            hal_send_str("ERROR");
            // hal_send_str("#");
            // return -1;
        }

        printbytes(pk, pk_len);
        printbytes(sk, sk_len);
        printbytes(ct, ct_len);
        printbytes(ss_a, ss_len);
        printbytes(ss_b, ss_len);
        hal_send_str("+");
    }

    hal_send_str("#");
    free(pk);
    free(sk);
    free(ct);
    free(ss_a);
    free(ss_b);

    return 0;
}
