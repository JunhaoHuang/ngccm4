#include <stdint.h>
#include "hal.h"
#include "sendfn.h"
#include "params.h"
#include "ntt.h"
#include "poly.h"

extern void basemul16_karatsuba_block_c(int16_t *r, int16_t *a, int16_t *b, int16_t zeta);
extern void basemul16_karatsuba_block_mq_c(int16_t *r, int16_t *a, int16_t *b, int16_t zeta);
extern void poly_baseinv_ntt_c(int16_t *r, int16_t *a);

static int16_t a[ZEN_SWIFT_N];
static int16_t b[ZEN_SWIFT_N];
static int16_t ref[ZEN_SWIFT_N];
static int16_t got[ZEN_SWIFT_N];
static int16_t invbuf[ZEN_SWIFT_N];

static int16_t freeze_q32(int32_t x)
{
    int32_t r = x;

    r %= ZEN_SWIFT_Q;
    if (r < 0) {
        r += ZEN_SWIFT_Q;
    }
    return (int16_t)r;
}

static int16_t freeze_q(int16_t x)
{
    return freeze_q32(x);
}

static void send_signed(const char *s, int v)
{
    if (v < 0) {
        hal_send_str(s);
        hal_send_str("-");
        send_unsigned("", (unsigned int)(-v));
    } else {
        send_unsigned(s, (unsigned int)v);
    }
}

static void fill_inputs(unsigned int seed, int lazy)
{
    unsigned int i;
    for (i = 0; i < ZEN_SWIFT_N; i++) {
        int x = (int)((seed * 113u + i * 37u + (i >> 4) * 19u) % ZEN_SWIFT_Q);
        int y = (int)((seed * 251u + i * 91u + (i >> 3) * 7u) % ZEN_SWIFT_Q);
        if (lazy) {
            x -= (int)(ZEN_SWIFT_Q / 2);
            y -= (int)(ZEN_SWIFT_Q / 2);
            if ((i & 3u) == 0u) x *= 3;
            if ((i & 5u) == 0u) y *= -2;
        }
        a[i] = (int16_t)x;
        b[i] = (int16_t)y;
    }
}

static int compare_all(unsigned int seed, int lazy, int mq)
{
    unsigned int i;

    fill_inputs(seed, lazy);
    if (mq) {
        basemul16_karatsuba_mq_asm(got, a, b, zetas_769);
    } else {
        basemul16_karatsuba_asm(got, a, b, zetas_769);
    }

    for (i = 0; i < ZEN_SWIFT_N / 32; i++) {
        if (mq) {
            basemul16_karatsuba_block_mq_c(ref + 32 * i, a + 32 * i, b + 32 * i, f[64 + i]);
            basemul16_karatsuba_block_mq_c(ref + 32 * i + 16, a + 32 * i + 16, b + 32 * i + 16, -f[64 + i]);
        } else {
            basemul16_karatsuba_block_c(ref + 32 * i, a + 32 * i, b + 32 * i, f[64 + i]);
            basemul16_karatsuba_block_c(ref + 32 * i + 16, a + 32 * i + 16, b + 32 * i + 16, -f[64 + i]);
        }
    }

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        /* Raw m4 basemul preserves the high-half Plantard scale consumed by
         * poly_intt: -9 times the C Montgomery-domain block result modulo q.
         */
        int mismatch = mq ? (ref[i] != got[i]) : (freeze_q32(-9 * (int32_t)ref[i]) != freeze_q(got[i]));

        if (mismatch) {
            send_unsigned("seed:", seed);
            send_unsigned(" lazy:", (unsigned int)lazy);
            send_unsigned(" mq:", (unsigned int)mq);
            send_unsigned(" idx:", i);
            send_signed(" ref:", ref[i]);
            send_signed(" got:", got[i]);
            hal_send_str("\n");
            return -1;
        }
    }
    return 0;
}


static int compare_ntt_inputs(unsigned int seed, int mq)
{
    unsigned int i;

    fill_inputs(seed, 0);
    poly_ntt(a);
    poly_ntt(b);

    if (mq) {
        basemul16_karatsuba_mq_asm(got, a, b, zetas_769);
    } else {
        basemul16_karatsuba_asm(got, a, b, zetas_769);
    }

    for (i = 0; i < ZEN_SWIFT_N / 32; i++) {
        if (mq) {
            basemul16_karatsuba_block_mq_c(ref + 32 * i, a + 32 * i, b + 32 * i, f[64 + i]);
            basemul16_karatsuba_block_mq_c(ref + 32 * i + 16, a + 32 * i + 16, b + 32 * i + 16, -f[64 + i]);
        } else {
            basemul16_karatsuba_block_c(ref + 32 * i, a + 32 * i, b + 32 * i, f[64 + i]);
            basemul16_karatsuba_block_c(ref + 32 * i + 16, a + 32 * i + 16, b + 32 * i + 16, -f[64 + i]);
        }
    }

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        /* Raw m4 basemul preserves the high-half Plantard scale consumed by
         * poly_intt: -9 times the C Montgomery-domain block result modulo q.
         */
        int mismatch = mq ? (ref[i] != got[i]) : (freeze_q32(-9 * (int32_t)ref[i]) != freeze_q(got[i]));

        if (mismatch) {
            send_unsigned("nttcmp seed:", seed);
            send_unsigned(" mq:", (unsigned int)mq);
            send_unsigned(" idx:", i);
            send_signed(" ref:", ref[i]);
            send_signed(" got:", got[i]);
            hal_send_str("\n");
            return -1;
        }
    }
    return 0;
}



static int compare_mixed_inputs(unsigned int seed, int mq)
{
    unsigned int i;

    fill_inputs(seed, 0);
    poly_ntt(b);

    if (mq) {
        basemul16_karatsuba_mq_asm(got, a, b, zetas_769);
    } else {
        basemul16_karatsuba_asm(got, a, b, zetas_769);
    }

    for (i = 0; i < ZEN_SWIFT_N / 32; i++) {
        if (mq) {
            basemul16_karatsuba_block_mq_c(ref + 32 * i, a + 32 * i, b + 32 * i, f[64 + i]);
            basemul16_karatsuba_block_mq_c(ref + 32 * i + 16, a + 32 * i + 16, b + 32 * i + 16, -f[64 + i]);
        } else {
            basemul16_karatsuba_block_c(ref + 32 * i, a + 32 * i, b + 32 * i, f[64 + i]);
            basemul16_karatsuba_block_c(ref + 32 * i + 16, a + 32 * i + 16, b + 32 * i + 16, -f[64 + i]);
        }
    }

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        /* Raw m4 basemul preserves the high-half Plantard scale consumed by
         * poly_intt: -9 times the C Montgomery-domain block result modulo q.
         */
        int mismatch = mq ? (ref[i] != got[i]) : (freeze_q32(-9 * (int32_t)ref[i]) != freeze_q(got[i]));

        if (mismatch) {
            send_unsigned("mixed seed:", seed);
            send_unsigned(" mq:", (unsigned int)mq);
            send_unsigned(" idx:", i);
            send_signed(" ref:", ref[i]);
            send_signed(" got:", got[i]);
            hal_send_str("\n");
            return -1;
        }
    }
    return 0;
}

static int compare_baseinv_ntt(unsigned int seed)
{
    unsigned int i;

    fill_inputs(seed, 0);
    poly_ntt_mq(a);
    if (check_poly_inv_Zq(a)) {
        return 0;
    }

    poly_baseinv_ntt_c(ref, a);
    poly_baseinv_ntt(got, a);

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        if (freeze_q(ref[i]) != freeze_q(got[i])) {
            send_unsigned("baseinv seed:", seed);
            send_unsigned(" idx:", i);
            send_signed(" ref:", ref[i]);
            send_signed(" got:", got[i]);
            hal_send_str("\n");
            return -1;
        }
    }

    basemul16_karatsuba_mq_asm(invbuf, a, got, zetas_769);
    for (i = 0; i < ZEN_SWIFT_N; i++) {
        b[i] = 0;
    }
    b[0] = 1;
    poly_ntt_mq(b);

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        if (freeze_q(invbuf[i]) != freeze_q(b[i])) {
            send_unsigned("baseprod seed:", seed);
            send_unsigned(" idx:", i);
            send_signed(" ref:", b[i]);
            send_signed(" got:", invbuf[i]);
            hal_send_str("\n");
            return -1;
        }
    }
    return 0;
}


static int compare_keygen_shape(unsigned int seed_id)
{
    unsigned int i;
    uint8_t seed[SEED_LEN_BYTES];
    uint8_t nonce = 0;

    for (i = 0; i < SEED_LEN_BYTES; i++) {
        seed[i] = (uint8_t)(seed_id * 29u + i * 17u + 3u);
    }

    for (;;) {
        poly_generate_gf(a, seed, nonce++);
        poly_ntt_mq(a);
        if (check_poly_inv_Zq(a)) {
            continue;
        }
        poly_baseinv_ntt(invbuf, a);
        break;
    }

    for (;;) {
        poly_generate_gf(b, seed, nonce++);
        poly_ntt_mq(b);
        if (check_poly_inv_Zq(b)) {
            continue;
        }
        break;
    }

    basemul16_karatsuba_mq_asm(got, b, invbuf, zetas_769);

    for (i = 0; i < ZEN_SWIFT_N / 32; i++) {
        basemul16_karatsuba_block_mq_c(ref + 32 * i, b + 32 * i, invbuf + 32 * i, f[64 + i]);
        basemul16_karatsuba_block_mq_c(ref + 32 * i + 16, b + 32 * i + 16, invbuf + 32 * i + 16, -f[64 + i]);
    }

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        if (ref[i] != got[i]) {
            send_unsigned("keycmp seed:", seed_id);
            send_unsigned(" idx:", i);
            send_signed(" ref:", ref[i]);
            send_signed(" got:", got[i]);
            hal_send_str("\n");
            return -1;
        }
    }
    return 0;
}

static int test_ntt_identity(unsigned int seed)
{
    unsigned int i;

    fill_inputs(seed, 0);
    for (i = 0; i < ZEN_SWIFT_N; i++) {
        ref[i] = a[i];
        b[i] = 0;
    }
    b[0] = 1;

    poly_ntt(a);
    poly_ntt(b);
    poly_basemul_ntt(got, a, b);
    poly_intt(got);

    for (i = 0; i < ZEN_SWIFT_N; i++) {
        if (freeze_q(ref[i]) != freeze_q(got[i])) {
            send_unsigned("ntt seed:", seed);
            send_unsigned(" idx:", i);
            send_signed(" ref:", ref[i]);
            send_signed(" got:", got[i]);
            hal_send_str("\n");
            return -1;
        }
    }
    return 0;
}

int main(void)
{
    unsigned int seed;

    hal_setup(CLOCK_FAST);
    hal_send_str("==========================");
    for (seed = 0; seed < 8*100; seed++) {
        if (compare_all(seed, 0, 0) != 0) return -1;
        if (compare_all(seed, 0, 1) != 0) return -1;
        if (compare_all(seed, 1, 0) != 0) return -1;
        if (compare_all(seed, 1, 1) != 0) return -1;
        if (compare_ntt_inputs(seed, 0) != 0) return -1;
        if (compare_ntt_inputs(seed, 1) != 0) return -1;
        if (compare_mixed_inputs(seed, 0) != 0) return -1;
        if (compare_mixed_inputs(seed, 1) != 0) return -1;
        if (compare_keygen_shape(seed) != 0) return -1;
        if (compare_baseinv_ntt(seed) != 0) return -1;
        if (test_ntt_identity(seed) != 0) return -1;
        hal_send_str("OK+");
    }
    hal_send_str("#");
    return 0;
}
