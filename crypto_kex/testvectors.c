/*
 * Reproduces the ICCS KAT_KEX.c sequence so the output can be compared with
 * Test_Vectors/KAT_KEX_<instance>.txt: drng_seed is seeded with "seed" x 16,
 * each count draws a 64-byte seed and re-seeds drng_algorithm. Output per
 * count (one hex line each): seed, pka, ska, init sta, pkb, skb, init stb,
 * then for every pass the updated state and the message, then ssa, ssb.
 */
#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#include "drng.h"
#include "hal.h"
#include "sendfn.h"
#include "kex_common.h"

#define SEED_LEN_BYTES 64

DRNG_ctx drng_algorithm;
unsigned char tv_seed[SEED_LEN_BYTES];

static void printbytes(const unsigned char *x, unsigned long long xlen)
{
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

static int run_vector(kex_session *s, const unsigned char seed[SEED_LEN_BYTES])
{
    char label[32];
    int step;

    if (init_random_number(&drng_algorithm, seed, SEED_LEN_BYTES) != 0) {
        hal_send_str("drng_init_failed");
        return -1;
    }
    printbytes(seed, SEED_LEN_BYTES);
    send_unsignedll("Pass_Num = ", s->passes);

    kex_session_reset(s);
    for (step = 0; step < KEX_STEP_COUNT; step++) {
        const unsigned char *buf;
        unsigned long long len;

        if (!kex_step_active(s, step)) {
            continue;
        }
        if (kex_step(s, step) != 0) {
            hal_send_str(kex_label(label, sizeof(label), step, " failed"));
            return -1;
        }
        switch (step) {
        case KEX_STEP_INIT_A:
            printbytes(s->pka, s->pka_len);
            printbytes(s->ska, s->ska_len);
            break;
        case KEX_STEP_INIT_B:
            printbytes(s->pkb, s->pkb_len);
            printbytes(s->skb, s->skb_len);
            break;
        default:
            break;
        }
        buf = kex_step_state(s, step, &len);
        if (buf != NULL) {
            printbytes(buf, len);
        }
        buf = kex_step_message(s, step, &len);
        if (buf != NULL) {
            printbytes(buf, len);
        }
    }
    if (!kex_shared_secrets_match(s)) {
        hal_send_str("ERROR");
    }
    printbytes(s->ssa, s->ssa_len);
    printbytes(s->ssb, s->ssb_len);
    return 0;
}

int main(void)
{
    kex_session session;
    unsigned char seed[SEED_LEN_BYTES];
    DRNG_ctx drng_seed;
    int i;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");

    for (i = 0; i < SEED_LEN_BYTES / 4; i++) {
        memcpy(tv_seed + 4 * i, "seed", 4);
    }
    if (init_random_number(&drng_seed, tv_seed, sizeof(tv_seed)) != 0) {
        hal_send_str("drng_init_failed");
        return -1;
    }
    if (kex_session_alloc(&session) != 0) {
        hal_send_str("alloc_failed");
        return -1;
    }

    for (i = 0; i < NGCC_ITERATIONS; i++) {
        get_random_number(&drng_seed, seed, SEED_LEN_BYTES * 8);
        if (run_vector(&session, seed) != 0) {
            hal_send_str("#");
            return -1;
        }
        hal_send_str("+");
    }

    kex_session_free(&session);
    hal_send_str("#");
    return 0;
}
