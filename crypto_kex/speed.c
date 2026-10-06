#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#include "drng.h"
#include "hal.h"
#include "sendfn.h"
#include "kex_common.h"

DRNG_ctx drng_algorithm;

static const unsigned char speed_seed[] = {
    0x6e, 0x67, 0x63, 0x63, 0x6d, 0x34, 0x2d, 0x6b,
    0x65, 0x78, 0x2d, 0x73, 0x70, 0x65, 0x65, 0x64,
    0x2d, 0x73, 0x65, 0x65, 0x64
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

int main(void)
{
    kex_session session;
    char label[32];
    unsigned int i;
    int step;

    hal_setup(CLOCK_BENCHMARK);
    hal_send_str("==========================");

    if (init_random_number(&drng_algorithm, speed_seed, sizeof(speed_seed)) != 0) {
        fail_and_halt("drng_init_failed");
    }
    if (kex_session_alloc(&session) != 0) {
        fail_and_halt("alloc_failed");
    }

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        kex_session_reset(&session);
        for (step = 0; step < KEX_STEP_COUNT; step++) {
            uint64_t t0;
            uint64_t t1;
            int rtn;

            if (!kex_step_active(&session, step)) {
                continue;
            }
            t0 = hal_get_time();
            rtn = kex_step(&session, step);
            t1 = hal_get_time();
            if (rtn != 0) {
                fail_and_halt(kex_label(label, sizeof(label), step, " failed"));
            }
            send_unsignedll(kex_label(label, sizeof(label), step, " cycles:"),
                            (unsigned long long)(t1 - t0));
        }
        if (!kex_shared_secrets_match(&session)) {
            fail_and_halt("ERROR KEYS");
        }
        hal_send_str("OK KEYS");
        hal_send_str("+");
    }

    kex_session_free(&session);
    hal_send_str("#");
    return hal_main_done();
}
