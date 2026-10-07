#include <string.h>
#include <stdint.h>
#include <stdlib.h>

#include "hal.h"
#include "sendfn.h"
#include "SIG_AlgorithmInstance.h"

#ifndef MAX_STACK_SIZE
#define MAX_STACK_SIZE hal_get_stack_size()
#endif

#ifndef STACK_SIZE_INCR
#define STACK_SIZE_INCR 0x1000
#endif

#ifndef NGCC_SIG_MLEN
#define NGCC_SIG_MLEN 59
#endif

#ifdef USE_KECCAK
#include "randombytes.h"
#else
#include "drng.h"
DRNG_ctx drng_algorithm;
#endif

static unsigned char stack_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x73,
    0x69, 0x67, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b,
    0x2d, 0x73, 0x65, 0x65, 0x64
};

static unsigned int canary_size;
static volatile unsigned char *p;
static unsigned int c;
static unsigned char canary = 0x42;

static unsigned int stack_key_gen;
static unsigned int stack_sign;
static unsigned int stack_verify;

static inline uintptr_t current_stack_pointer(void)
{
  uintptr_t sp;
  __asm__ volatile ("mov %0, sp" : "=r" (sp));
  return sp;
}

#define FILL_STACK() \
  p = (volatile unsigned char *)current_stack_pointer(); \
  while (p > (volatile unsigned char *)(current_stack_pointer() - canary_size)) *(--p) = canary;

#define CHECK_STACK() \
  p = (volatile unsigned char *)(current_stack_pointer() - canary_size); \
  c = canary_size; \
  while (p < (volatile unsigned char *)current_stack_pointer() && *p == canary) { p++; c--; }

static void fill_random(unsigned char *buf, unsigned long long len) {
#ifdef USE_KECCAK
    randombytes(buf, (size_t)len);
#else
    get_random_number(&drng_algorithm, buf, len * 8);
#endif
}

static __attribute__((noinline)) int test_keys(unsigned char* pk, unsigned char* sk, unsigned char* m, unsigned char* sn) {
    int rc;
    unsigned long long pk_len = sig_get_pk_len_bytes();
    unsigned long long sk_len = sig_get_sk_len_bytes();
    unsigned long long sn_len = sig_get_sn_len_bytes();
    unsigned long long m_len = NGCC_SIG_MLEN;

    FILL_STACK()
    rc = sig_keygen(pk, &pk_len, sk, &sk_len);
    if (rc != 0) {
        hal_send_str("keypair failed");
        return -1;
    }
    CHECK_STACK()
    if (c >= canary_size)
    {
        return -1;
    }
    stack_key_gen = c;

    fill_random(m, m_len);

    FILL_STACK()
    rc = sig_sign(sk, sk_len, m, m_len, sn, &sn_len);
    if (rc != 0) {
        hal_send_str("sign failed");
        return -1;
    }
    CHECK_STACK()
    if (c >= canary_size)
    {
        return -1;
    }
    stack_sign = c;

    FILL_STACK()
    rc = sig_verify(pk, pk_len, sn, sn_len, m, m_len);
    if (rc != 0) {
        hal_send_str("verify failed");
        return -1;
    }
    CHECK_STACK()
    if (c >= canary_size)
    {
        return -1;
    }
    stack_verify = c;

    send_unsigned("keypair stack usage:", stack_key_gen);
    send_unsigned("sign stack usage:", stack_sign);
    send_unsigned("verify stack usage:", stack_verify);
    hal_send_str("OK KEYS");
    return 0;
}

int main(void) {
    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

    unsigned long long pk_len = sig_get_pk_len_bytes();
    unsigned long long sk_len = sig_get_sk_len_bytes();
    unsigned long long sn_len = sig_get_sn_len_bytes();

    canary_size = STACK_SIZE_INCR;
    unsigned char *pk = malloc((size_t)pk_len);
    unsigned char *sk = malloc((size_t)sk_len);
    unsigned char *m = malloc(NGCC_SIG_MLEN);
    unsigned char *sn = malloc((size_t)sn_len);

    if (pk == NULL || sk == NULL || m == NULL || sn == NULL)
    {
        hal_send_str("alloc failed");
        free(pk);
        free(sk);
        free(m);
        free(sn);
        return -1;
    }

#ifndef USE_KECCAK
    if (init_random_number(&drng_algorithm, stack_seed, sizeof(stack_seed)) != 0) {
        hal_send_str("drng_init_failed");
        return -1;
    }
#endif

    while (test_keys(pk, sk, m, sn) != 0) {
        if (canary_size == MAX_STACK_SIZE) {
            hal_send_str("failed to measure stack usage.");
            break;
        }
        canary_size += STACK_SIZE_INCR;
        if (canary_size >= MAX_STACK_SIZE) {
            canary_size = MAX_STACK_SIZE;
        }
    }
    free(pk);
    free(sk);
    free(m);
    free(sn);
    hal_send_str("#");
    return hal_main_done();
}
