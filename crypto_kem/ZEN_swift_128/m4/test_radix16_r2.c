#include "radix16_r2.h"

#include <stdint.h>
#include <stdio.h>
#include <string.h>

#define TEST_MAX_N 512u
#define TEST_RANDOM_CASES 2000u

static uint32_t rng_state = 1u;

static uint32_t xorshift32(void)
{
    uint32_t x = rng_state;

    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    rng_state = x;
    return x;
}

static void ref_mul_in_R2_n(const int16_t *a,
                            const int16_t *b,
                            size_t n,
                            int16_t *res)
{
    size_t i, j;

    memset(res, 0, n * sizeof(int16_t));

    for (i = 0; i < n; i++) {
        uint16_t mask = (uint16_t)(0u - ((uint16_t)a[i] & 1u));

        for (j = 0; j < n; j++) {
            size_t idx = i + j;

            if (idx >= n) {
                idx -= n;
            }
            res[idx] ^= (int16_t)(b[j] & (int16_t)mask);
        }
    }
}

static int compare_poly(const int16_t *a, const int16_t *b, size_t n)
{
    size_t i;

    for (i = 0; i < n; i++) {
        if ((a[i] & 1) != (b[i] & 1)) {
            printf("mismatch at coeff %zu: ref=%d radix16=%d\n", i, a[i], b[i]);
            return 0;
        }
    }
    return 1;
}

static int test_length(size_t n)
{
    int16_t a[TEST_MAX_N];
    int16_t b[TEST_MAX_N];
    int16_t ref[TEST_MAX_N];
    int16_t got[TEST_MAX_N];
    uint32_t ap[R2_RADIX16_WORDS(TEST_MAX_N)];
    uint32_t bp[R2_RADIX16_WORDS(TEST_MAX_N)];
    uint32_t rp[R2_RADIX16_WORDS(TEST_MAX_N)];
    unsigned int t;
    size_t i;

    memset(a, 0, sizeof(a));
    memset(b, 0, sizeof(b));
    memset(ref, 0, sizeof(ref));
    memset(got, 0, sizeof(got));

    for (t = 0; t < TEST_RANDOM_CASES; t++) {
        for (i = 0; i < n; i++) {
            a[i] = (int16_t)(xorshift32() & 1u);
            b[i] = (int16_t)(xorshift32() & 1u);
        }

        ref_mul_in_R2_n(a, b, n, ref);
        r2_radix16_mul_i16(got, a, b, n);

        if (!compare_poly(ref, got, n)) {
            printf("failed i16 wrapper, n=%zu, case=%u\n", n, t);
            return 0;
        }

        r2_radix16_pack(ap, a, n);
        r2_radix16_pack(bp, b, n);
        r2_radix16_mul(rp, ap, bp, n);
        r2_radix16_unpack(got, rp, n);

        if (!compare_poly(ref, got, n)) {
            printf("failed packed API, n=%zu, case=%u\n", n, t);
            return 0;
        }
    }

    return 1;
}

int main(void)
{
    static const size_t lengths[] = {1u, 2u, 3u, 4u, 5u, 7u, 8u,
                                     16u, 32u, 64u, 128u, 256u, 512u};
    size_t i;

    for (i = 0; i < sizeof(lengths) / sizeof(lengths[0]); i++) {
        if (!test_length(lengths[i])) {
            return 1;
        }
        printf("n=%zu passed\n", lengths[i]);
    }

    printf("radix-16 R2/(x^n+1) multiplication matches reference\n");
    return 0;
}
