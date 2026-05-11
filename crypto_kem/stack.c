#include <string.h>
#include <stdint.h>
#include <stdlib.h>

#include "hal.h"
#include "sendfn.h"
#include "KEM_AlgorithmInstance.h"

#ifndef MAX_STACK_SIZE
#define MAX_STACK_SIZE hal_get_stack_size()
#endif

#ifndef STACK_SIZE_INCR
#define STACK_SIZE_INCR 0x1000
#endif

#ifdef USE_KECCAK
#include "randombytes.h"
#else
#include "drng.h"
DRNG_ctx drng_algorithm;
#endif

static const unsigned char stack_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x73,
    0x74, 0x61, 0x63, 0x6b, 0x2d, 0x73, 0x65, 0x65, 0x64
};

static unsigned int canary_size;
static volatile unsigned char *p;
static unsigned int c;
static const unsigned char canary = 0x42;

static unsigned int stack_key_gen;
static unsigned int stack_encaps;
static unsigned int stack_decaps;

#define FILL_STACK() \
  p = &a; \
  while (p > &a - canary_size) *(p--) = canary;

#define CHECK_STACK() \
  c = canary_size; \
  p = &a - canary_size + 1; \
  while (*p == canary && p < &a) { p++; c--; }

static int test_keys(void) {
    volatile unsigned char a;
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

    FILL_STACK()
    if (kem_keygen(pk, &ignored_len, sk, &ignored_len) != 0) return -1;
    CHECK_STACK()
    if (c >= canary_size) return -1;
    stack_key_gen = c;

    FILL_STACK()
    if (kem_enc(pk, pk_len, ss_a, &ignored_len, ct, &ignored_len) != 0) return -1;
    CHECK_STACK()
    if (c >= canary_size) return -1;
    stack_encaps = c;

    FILL_STACK()
    if (kem_dec(sk, sk_len, ct, ct_len, ss_b, &ignored_len) != 0) return -1;
    CHECK_STACK()
    if (c >= canary_size) return -1;
    stack_decaps = c;

    if (memcmp(ss_a, ss_b, ss_len) != 0) return -1;

    send_unsigned("keypair stack usage:", stack_key_gen);
    send_unsigned("encaps stack usage:", stack_encaps);
    send_unsigned("decaps stack usage:", stack_decaps);
    hal_send_str("OK KEYS");
    free(pk);
    free(sk);
    free(ct);
    free(ss_a);
    free(ss_b);
    return 0;
}

int main(void) {
    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

#ifndef USE_KECCAK
    if (init_random_number(&drng_algorithm, stack_seed, sizeof(stack_seed)) != 0) {
        hal_send_str("drng_init_failed");
        return -1;
    }
#endif

    canary_size = STACK_SIZE_INCR;
    while (test_keys() != 0) {
        if (canary_size == MAX_STACK_SIZE) {
            hal_send_str("failed to measure stack usage.");
            break;
        }
        canary_size += STACK_SIZE_INCR;
        if (canary_size >= MAX_STACK_SIZE) {
            canary_size = MAX_STACK_SIZE;
        }
    }

    hal_send_str("#");
    return 0;
}
