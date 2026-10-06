#include <string.h>
#include <stdint.h>
#include <stdlib.h>

#include "drng.h"
#include "hal.h"
#include "sendfn.h"
#include "kex_common.h"

#ifndef MAX_STACK_SIZE
#define MAX_STACK_SIZE hal_get_stack_size()
#endif

#ifndef STACK_SIZE_INCR
#define STACK_SIZE_INCR 0x1000
#endif

DRNG_ctx drng_algorithm;

static unsigned char stack_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x6b,
    0x65, 0x78, 0x2d, 0x73, 0x74, 0x61, 0x63, 0x6b,
    0x2d, 0x73, 0x65, 0x65, 0x64
};

static unsigned int canary_size;
static volatile unsigned char *p;
static unsigned int c;
static unsigned char canary = 0x42;

static unsigned int stack_usage[KEX_STEP_COUNT];

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

static __attribute__((noinline)) int test_exchange(kex_session *s)
{
    char label[32];
    int step;

    kex_session_reset(s);
    for (step = 0; step < KEX_STEP_COUNT; step++) {
        int rc;

        if (!kex_step_active(s, step)) {
            continue;
        }
        FILL_STACK()
        rc = kex_step(s, step);
        if (rc != 0) {
            hal_send_str(kex_label(label, sizeof(label), step, " failed"));
            return -1;
        }
        CHECK_STACK()
        if (c >= canary_size) {
            return -1;
        }
        stack_usage[step] = c;
    }
    if (!kex_shared_secrets_match(s)) {
        hal_send_str("shared secret mismatch");
        return -1;
    }

    for (step = 0; step < KEX_STEP_COUNT; step++) {
        if (!kex_step_active(s, step)) {
            continue;
        }
        send_unsigned(kex_label(label, sizeof(label), step, " stack usage:"), stack_usage[step]);
    }
    hal_send_str("OK KEYS");
    return 0;
}

int main(void)
{
    kex_session session;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

    canary_size = STACK_SIZE_INCR;
    if (kex_session_alloc(&session) != 0) {
        hal_send_str("alloc failed");
        return -1;
    }
    if (init_random_number(&drng_algorithm, stack_seed, sizeof(stack_seed)) != 0) {
        hal_send_str("drng_init_failed");
        return -1;
    }

    while (test_exchange(&session) != 0) {
        if (canary_size == MAX_STACK_SIZE) {
            hal_send_str("failed to measure stack usage.");
            break;
        }
        canary_size += STACK_SIZE_INCR;
        if (canary_size >= MAX_STACK_SIZE) {
            canary_size = MAX_STACK_SIZE;
        }
    }
    kex_session_free(&session);
    hal_send_str("#");
    return hal_main_done();
}
