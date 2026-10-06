#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#include "drng.h"
#include "hal.h"
#include "sendfn.h"
#include "kex_common.h"

DRNG_ctx drng_algorithm;

static const unsigned char test_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x6b,
    0x65, 0x78, 0x2d, 0x74, 0x65, 0x73, 0x74, 0x2d,
    0x73, 0x65, 0x65, 0x64
};

static void fail_and_halt(const char *reason)
{
    hal_send_str(reason);
#ifdef MPS2_AN386
    __builtin_trap();
#endif
    while (1) {
    }
}

static int test_exchange(kex_session *s)
{
    char label[32];
    int step;

    kex_session_reset(s);
    for (step = 0; step < KEX_STEP_COUNT; step++) {
        if (!kex_step_active(s, step)) {
            continue;
        }
        if (kex_step(s, step) != 0) {
            hal_send_str(kex_label(label, sizeof(label), step, " failed"));
            return -1;
        }
    }
    if (!kex_shared_secrets_match(s)) {
        hal_send_str("shared secret mismatch");
        return -1;
    }
    return 0;
}

int main(void)
{
    kex_session session;
    int i;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

    if (init_random_number(&drng_algorithm, test_seed, sizeof(test_seed)) != 0) {
        fail_and_halt("drng_init_failed");
    }
    if (kex_session_alloc(&session) != 0) {
        fail_and_halt("alloc_failed");
    }

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        if (test_exchange(&session) != 0) {
            hal_send_str("ERROR KEYS");
            hal_send_str("#");
            return -1;
        }
        hal_send_str("OK KEYS");
        hal_send_str("+");
    }

    kex_session_free(&session);
    hal_send_str("#");
    return hal_main_done();
}
