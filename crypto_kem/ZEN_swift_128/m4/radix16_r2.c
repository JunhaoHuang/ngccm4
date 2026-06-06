#include "radix16_r2.h"

#include <string.h>

size_t r2_radix16_words(size_t n)
{
    return R2_RADIX16_WORDS(n);
}

static uint32_t r2_radix16_get_coeff(const uint32_t *a, size_t idx)
{
    return (a[idx >> 3] >> (4u * (idx & 7u))) & 1u;
}

static void r2_radix16_set_coeff(uint32_t *a, size_t idx, uint32_t bit)
{
    uint32_t shift = 4u * (idx & 7u);
    uint32_t mask = 0xfu << shift;

    a[idx >> 3] = (a[idx >> 3] & ~mask) | ((bit & 1u) << shift);
}

static void r2_radix16_xor_coeff(uint32_t *a, size_t idx, uint32_t bit)
{
    a[idx >> 3] ^= (bit & 1u) << (4u * (idx & 7u));
}

static void r2_radix16_clear_unused_lanes(uint32_t *a, size_t n)
{
    size_t rem = n & 7u;
    size_t words = R2_RADIX16_WORDS(n);
    uint32_t mask = 0;
    size_t i;

    if (words == 0 || rem == 0) {
        return;
    }

    for (i = 0; i < rem; i++) {
        mask |= 1u << (4u * i);
    }
    a[words - 1u] &= mask;
}

void r2_radix16_pack(uint32_t *out, const int16_t *in, size_t n)
{
    size_t words = R2_RADIX16_WORDS(n);
    size_t i;

    memset(out, 0, words * sizeof(uint32_t));
    for (i = 0; i < n; i++) {
        out[i >> 3] |= ((uint32_t)in[i] & 1u) << (4u * (i & 7u));
    }
}

void r2_radix16_unpack(int16_t *out, const uint32_t *in, size_t n)
{
    size_t i;

    for (i = 0; i < n; i++) {
        out[i] = (int16_t)r2_radix16_get_coeff(in, i);
    }
}

void r2_radix16_frombytes(uint32_t *out, const uint8_t *in, size_t n)
{
    size_t words = R2_RADIX16_WORDS(n);
    size_t i;

    memset(out, 0, words * sizeof(uint32_t));
    for (i = 0; i < n; i++) {
        uint32_t bit = ((uint32_t)in[i >> 3] >> (i & 7u)) & 1u;

        out[i >> 3] |= bit << (4u * (i & 7u));
    }
}

void r2_radix16_tobytes(uint8_t *out, const uint32_t *in, size_t n)
{
    size_t bytes = (n + 7u) >> 3;
    size_t i, j;

    memset(out, 0, bytes);
    for (i = 0; i < bytes; i++) {
        uint32_t word = in[i] & R2_RADIX16_LANE_MASK;
        uint8_t byte = 0;

        for (j = 0; j < 8u && (8u * i + j) < n; j++) {
            byte |= (uint8_t)(((word >> (4u * j)) & 1u) << j);
        }
        out[i] = byte;
    }
}

void r2_radix16_xor(uint32_t *dst, const uint32_t *src, size_t n)
{
    size_t words = R2_RADIX16_WORDS(n);
    size_t i;

    for (i = 0; i < words; i++) {
        dst[i] ^= src[i] & R2_RADIX16_LANE_MASK;
    }
    r2_radix16_clear_unused_lanes(dst, n);
}

void r2_radix16_xor_mask(uint32_t *dst,
                         const uint32_t *src,
                         size_t n,
                         uint32_t bit)
{
    size_t words = R2_RADIX16_WORDS(n);
    uint32_t mask = 0u - (bit & 1u);
    size_t i;

    for (i = 0; i < words; i++) {
        dst[i] ^= src[i] & R2_RADIX16_LANE_MASK & mask;
    }
    r2_radix16_clear_unused_lanes(dst, n);
}

uint32_t r2_radix16_parity(const uint32_t *a, size_t n)
{
    uint32_t acc = 0;
    size_t i;

    for (i = 0; i < n; i++) {
        acc ^= r2_radix16_get_coeff(a, i);
    }
    return acc & 1u;
}

void r2_radix16_prefix_xor(uint32_t *out, const uint32_t *in, size_t n)
{
    uint32_t acc = 0;
    size_t i;

    if (out != in) {
        memset(out, 0, R2_RADIX16_WORDS(n) * sizeof(uint32_t));
    }

    for (i = 0; i < n; i++) {
        acc ^= r2_radix16_get_coeff(in, i);
        r2_radix16_set_coeff(out, i, acc);
    }
    r2_radix16_clear_unused_lanes(out, n);
}

void r2_radix16_fold(uint32_t *out,
                     const uint32_t *in,
                     size_t in_n,
                     size_t out_n)
{
    size_t i;

    memset(out, 0, R2_RADIX16_WORDS(out_n) * sizeof(uint32_t));
    if (out_n == 0) {
        return;
    }

    for (i = 0; i < in_n; i++) {
        r2_radix16_xor_coeff(out, i % out_n, r2_radix16_get_coeff(in, i));
    }
    r2_radix16_clear_unused_lanes(out, out_n);
}

void r2_radix16_div_xn_plus1(uint32_t *a, size_t n, size_t step)
{
    size_t i;

    for (i = step; i < n; i++) {
        r2_radix16_xor_coeff(a, i, r2_radix16_get_coeff(a, i - step));
    }
    r2_radix16_clear_unused_lanes(a, n);
}

void r2_radix16_xor_shifted(uint32_t *dst,
                            const uint32_t *src,
                            size_t src_n,
                            size_t shift)
{
    size_t i;

    for (i = 0; i < src_n; i++) {
        r2_radix16_xor_coeff(dst, shift + i, r2_radix16_get_coeff(src, i));
    }
}

static void r2_radix16_mul_generic(uint32_t *res,
                                   const uint32_t *a,
                                   const uint32_t *b,
                                   size_t n)
{
    size_t words = R2_RADIX16_WORDS(n);
    size_t i, j;

    memset(res, 0, words * sizeof(uint32_t));

    for (i = 0; i < n; i++) {
        uint32_t mask = 0u - r2_radix16_get_coeff(a, i);

        for (j = 0; j < n; j++) {
            size_t idx = i + j;
            uint32_t bit = r2_radix16_get_coeff(b, j) & mask;

            if (idx >= n) {
                idx -= n;
            }
            r2_radix16_xor_coeff(res, idx, bit);
        }
    }
    r2_radix16_clear_unused_lanes(res, n);
}

static void r2_radix16_mul_block8(uint32_t *res,
                                  const uint32_t *a,
                                  const uint32_t *b,
                                  size_t n)
{
    size_t words = n >> 3;
    size_t i, j;

    memset(res, 0, words * sizeof(uint32_t));

    for (i = 0; i < words; i++) {
        uint32_t ai = a[i] & R2_RADIX16_LANE_MASK;

        for (j = 0; j < words; j++) {
            uint32_t bj = b[j] & R2_RADIX16_LANE_MASK;
            uint64_t prod = (uint64_t)ai * (uint64_t)bj;
            uint32_t lo = (uint32_t)prod & R2_RADIX16_LANE_MASK;
            uint32_t hi = (uint32_t)(prod >> 32) & R2_RADIX16_LANE_MASK;
            size_t lo_idx = i + j;
            size_t hi_idx;

            if (lo_idx >= words) {
                lo_idx -= words;
            }

            hi_idx = lo_idx + 1u;
            if (hi_idx == words) {
                hi_idx = 0;
            }

            res[lo_idx] ^= lo;
            res[hi_idx] ^= hi;
        }
    }
}

void r2_radix16_mul(uint32_t *res,
                    const uint32_t *a,
                    const uint32_t *b,
                    size_t n)
{
    if (n == 0) {
        return;
    }

    if ((n & 7u) == 0) {
        r2_radix16_mul_block8(res, a, b, n);
    } else {
        r2_radix16_mul_generic(res, a, b, n);
    }
}

void r2_radix16_mul_i16(int16_t *res,
                        const int16_t *a,
                        const int16_t *b,
                        size_t n)
{
    uint32_t ap[R2_RADIX16_WORDS(n)];
    uint32_t bp[R2_RADIX16_WORDS(n)];
    uint32_t rp[R2_RADIX16_WORDS(n)];

    r2_radix16_pack(ap, a, n);
    r2_radix16_pack(bp, b, n);
    r2_radix16_mul(rp, ap, bp, n);
    r2_radix16_unpack(res, rp, n);
}
