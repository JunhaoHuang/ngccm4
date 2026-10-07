#include <stdint.h>
#include <stdlib.h>
#include <string.h>

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

unsigned long long hash_cycles;
unsigned long long func_cycles;

static const unsigned char hashing_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x73,
    0x69, 0x67, 0x2d, 0x68, 0x61, 0x73, 0x68, 0x69,
    0x6e, 0x67, 0x2d, 0x73, 0x65, 0x65, 0x64
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

int main(void) {
    unsigned long long pk_len_max = sig_get_pk_len_bytes();
    unsigned long long sk_len_max = sig_get_sk_len_bytes();
    unsigned long long sn_len_max = sig_get_sn_len_bytes();
    unsigned long long m_len = NGCC_SIG_MLEN;
    uint64_t t0;
    uint64_t t1;
    unsigned char *pk;
    unsigned char *sk;
    unsigned char *m;
    unsigned char *sn;
    int i;

    hal_setup(CLOCK_BENCHMARK);
    hal_send_str("==========================");

#ifndef USE_KECCAK
    if (init_random_number(&drng_algorithm, hashing_seed, sizeof(hashing_seed)) != 0) {
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
        unsigned long long pk_len = sig_get_pk_len_bytes();
        unsigned long long sk_len = sig_get_sk_len_bytes();
        unsigned long long sn_len = sig_get_sn_len_bytes();

        hash_cycles = 0;
        func_cycles = 0;
        t0 = hal_get_time();
        if (sig_keygen(pk, &pk_len, sk, &sk_len) != 0) fail_and_halt("sig_keygen_failed");
        t1 = hal_get_time();
        send_unsignedll("keypair cycles:", (unsigned long long)(t1 - t0));
        send_unsignedll("keypair hash cycles:", hash_cycles);
        send_unsignedll("keypair func cycles:", func_cycles);

        fill_random(m, m_len);

        hash_cycles = 0;
        func_cycles = 0;
        t0 = hal_get_time();
        if (sig_sign(sk, sk_len, m, m_len, sn, &sn_len) != 0) fail_and_halt("sig_sign_failed");
        t1 = hal_get_time();
        send_unsignedll("sign cycles:", (unsigned long long)(t1 - t0));
        send_unsignedll("sign hash cycles:", hash_cycles);
        send_unsignedll("sign func cycles:", func_cycles);

        hash_cycles = 0;
        func_cycles = 0;
        t0 = hal_get_time();
        if (sig_verify(pk, pk_len, sn, sn_len, m, m_len) != 0) fail_and_halt("ERROR KEYS");
        t1 = hal_get_time();
        send_unsignedll("verify cycles:", (unsigned long long)(t1 - t0));
        send_unsignedll("verify hash cycles:", hash_cycles);
        send_unsignedll("verify func cycles:", func_cycles);

        hal_send_str("OK KEYS");
        hal_send_str("+");
    }

    hal_send_str("#");
    free(pk);
    free(sk);
    free(m);
    free(sn);
    return hal_main_done();
}
