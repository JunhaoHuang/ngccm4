#ifndef RADIX16_R2_H
#define RADIX16_R2_H

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

#define R2_RADIX16_COEFFS_PER_WORD 8u
#define R2_RADIX16_WORDS(n) (((n) + R2_RADIX16_COEFFS_PER_WORD - 1u) / R2_RADIX16_COEFFS_PER_WORD)
#define R2_RADIX16_LANE_MASK 0x11111111u

size_t r2_radix16_words(size_t n);
void r2_radix16_pack(uint32_t *out, const int16_t *in, size_t n);
void r2_radix16_unpack(int16_t *out, const uint32_t *in, size_t n);
void r2_radix16_frombytes(uint32_t *out, const uint8_t *in, size_t n);
void r2_radix16_tobytes(uint8_t *out, const uint32_t *in, size_t n);

void r2_radix16_xor(uint32_t *dst, const uint32_t *src, size_t n);
void r2_radix16_xor_mask(uint32_t *dst,
                         const uint32_t *src,
                         size_t n,
                         uint32_t bit);
uint32_t r2_radix16_parity(const uint32_t *a, size_t n);
void r2_radix16_prefix_xor(uint32_t *out, const uint32_t *in, size_t n);
void r2_radix16_fold(uint32_t *out,
                     const uint32_t *in,
                     size_t in_n,
                     size_t out_n);
void r2_radix16_div_xn_plus1(uint32_t *a, size_t n, size_t step);
void r2_radix16_xor_shifted(uint32_t *dst,
                            const uint32_t *src,
                            size_t src_n,
                            size_t shift);

void r2_radix16_mul(uint32_t *res,
                    const uint32_t *a,
                    const uint32_t *b,
                    size_t n);

void r2_radix16_mul_i16(int16_t *res,
                        const int16_t *a,
                        const int16_t *b,
                        size_t n);

#ifdef __cplusplus
}
#endif

#endif
