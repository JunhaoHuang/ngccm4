#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include "params.h"
#include "auxfunc.h"
#include "sample.h"
#include "symmetric.h"
#include "radix16_r2.h"
#ifdef HASHING_PROFILE
#include "hal.h"
extern unsigned long long func_cycles;
#endif
static const uint64_t pack_table[] = 
{
    1, 769, 591361, 454756609, 349707832321
};

extern void mul_in_R2_n_asm(int16_t *a, int16_t *b, int16_t n, int16_t *res);
extern void mulf_in_R2_N4_asm(int16_t *a, int16_t *b, int16_t *res);
void mul_in_R2_n(int16_t *a, int16_t *b, int16_t n, int16_t *res){
#ifdef HASHING_PROFILE
    uint64_t t0 = hal_get_time();
#endif
    mul_in_R2_n_asm(a, b, n, res);
#ifdef HASHING_PROFILE
    uint64_t t1 = hal_get_time();
    func_cycles += (t1 - t0);
#endif
}
void mulf_in_R2_N4(int16_t *a, int16_t *b, int16_t *res){
#ifdef HASHING_PROFILE
    uint64_t t0 = hal_get_time();
#endif
    mulf_in_R2_N4_asm(a, b, res);
#ifdef HASHING_PROFILE
    uint64_t t1 = hal_get_time();
    func_cycles += (t1 - t0);
#endif
}

void FastInversion_Radix16(uint32_t *f_inv, const int16_t *f)
{
    unsigned int l, n;
    uint32_t f_rad[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];
    uint32_t k[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];
    uint32_t b[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];
    uint32_t b_full[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];
    uint32_t tmp[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];
    uint32_t tmp_full[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];
    uint32_t b0;

    r2_radix16_pack(f_rad, f, ZEN_SWIFT_N4);
    r2_radix16_prefix_xor(k, f_rad, ZEN_SWIFT_N4);

    b0 = r2_radix16_parity(k, ZEN_SWIFT_N4);
    r2_radix16_xor_mask(k, f_rad, ZEN_SWIFT_N4, b0);
    r2_radix16_prefix_xor(k, k, ZEN_SWIFT_N4);

    memset(f_inv, 0, R2_RADIX16_WORDS(ZEN_SWIFT_N4) * sizeof(uint32_t));
    f_inv[0] = (!b0) | (b0 << 4);

    n = 1;
    for(l = 1; l < ZEN_SWIFT_N4_LOG2; l++)
    {
        n = 2 * n;
        r2_radix16_fold(tmp, k, ZEN_SWIFT_N4, n);
        r2_radix16_mul(b, f_inv, tmp, n);

        memset(b_full, 0, sizeof(b_full));
        memcpy(b_full, b, R2_RADIX16_WORDS(n) * sizeof(uint32_t));
        r2_radix16_mul(tmp_full, b_full, f_rad, ZEN_SWIFT_N4);
        r2_radix16_xor(k, tmp_full, ZEN_SWIFT_N4);

        r2_radix16_div_xn_plus1(k, ZEN_SWIFT_N4, n);
        r2_radix16_xor_shifted(f_inv, b, n, 0);
        r2_radix16_xor_shifted(f_inv, b, n, n);
    }
}

void FastInversion(int16_t *f_inv, int16_t *f)
{
    uint32_t f_inv_rad[R2_RADIX16_WORDS(ZEN_SWIFT_N4)];

    FastInversion_Radix16(f_inv_rad, f);
    r2_radix16_unpack(f_inv, f_inv_rad, ZEN_SWIFT_N4);
}

void poly_generate_g(int16_t *a, const uint8_t *seed, uint8_t nonce)
{
    unsigned int i;
    uint8_t buf[ZEN_SWIFT_N_LEN_BYTES*5];
    int16_t t[ZEN_SWIFT_N*2];
    zen_swift_pseudoXOF(ZEN_SWIFT_N*5, seed, SEED_LEN_BYTES*8, buf, nonce);
    cbd1(t, buf);
    tenary1_8(t+ZEN_SWIFT_N, buf+ZEN_SWIFT_N_LEN_BYTES*2);
    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        a[i] = t[i] + t[i+ZEN_SWIFT_N];
    }
}

void poly_generate_f(int16_t *a, const uint8_t *seed, uint8_t nonce)
{
    unsigned int i;
    uint8_t buf[ZEN_SWIFT_N_LEN_BYTES*2];

    zen_swift_pseudoXOF(ZEN_SWIFT_N*2, seed, SEED_LEN_BYTES*8, buf, nonce);
    cbd1(a, buf);
}

void poly_generate_s(int16_t *a, const uint8_t *seed, uint8_t nonce)
{
    unsigned int i;
    uint8_t buf[ZEN_SWIFT_N_LEN_BYTES*7];
    int16_t t[ZEN_SWIFT_N*2];
    zen_swift_pseudoXOF(ZEN_SWIFT_N*7, seed, SEED_LEN_BYTES*8, buf, nonce);
    cbd1(t, buf);
    tenary3_32(t+ZEN_SWIFT_N, buf+ZEN_SWIFT_N_LEN_BYTES*2);
    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        a[i] = t[i] + t[i+ZEN_SWIFT_N];
    }
}

void poly_generate_e(int16_t *a, const uint8_t *seed, uint8_t nonce)
{
    unsigned int i;
    uint8_t buf[ZEN_SWIFT_N_LEN_BYTES*4];

    zen_swift_pseudoXOF(ZEN_SWIFT_N*4, seed, SEED_LEN_BYTES*8, buf, nonce);
    cbd2(a, buf);
}



void poly_bit2byte_pack(uint8_t *pa, const int16_t *a, const unsigned int n)
{
    unsigned int i;
    const int16_t *src = a;
    for(i = 0; i < n/8; i++)
    {
        pa[i] = (uint8_t)(
              (src[0] & 1)
            | ((src[1] & 1) << 1)
            | ((src[2] & 1) << 2)
            | ((src[3] & 1) << 3)
            | ((src[4] & 1) << 4)
            | ((src[5] & 1) << 5)
            | ((src[6] & 1) << 6)
            | ((src[7] & 1) << 7));
        src += 8;
    }
}

void poly_byte2bit_unpack(int16_t *a, const uint8_t *pa, const unsigned int n)
{
    unsigned int i;
    int16_t *dst = a;

    for(i = 0; i < n / 8; i++)
    {
        uint8_t byte = pa[i];
        dst[0] = (int16_t)(byte & 1u);
        dst[1] = (int16_t)((byte >> 1) & 1u);
        dst[2] = (int16_t)((byte >> 2) & 1u);
        dst[3] = (int16_t)((byte >> 3) & 1u);
        dst[4] = (int16_t)((byte >> 4) & 1u);
        dst[5] = (int16_t)((byte >> 5) & 1u);
        dst[6] = (int16_t)((byte >> 6) & 1u);
        dst[7] = (int16_t)((byte >> 7) & 1u);
        dst += 8;
    }
}

void poly_secretkey_pack(uint8_t *ss, const int16_t *a)
{
    unsigned int i;
    uint16_t t0, t1, t2, t3;

    for(i = 0; i < ZEN_SWIFT_N / 4; i++)
    {
        t0 = ((uint16_t)a[4*i + 0]) & 0x03FF;
        t1 = ((uint16_t)a[4*i + 1]) & 0x03FF;
        t2 = ((uint16_t)a[4*i + 2]) & 0x03FF;
        t3 = ((uint16_t)a[4*i + 3]) & 0x03FF;

        ss[5*i + 0] = (uint8_t)( t0        & 0xFF);
        ss[5*i + 1] = (uint8_t)((t0 >> 8)  | (t1 << 2));
        ss[5*i + 2] = (uint8_t)((t1 >> 6)  | (t2 << 4));
        ss[5*i + 3] = (uint8_t)((t2 >> 4)  | (t3 << 6));
        ss[5*i + 4] = (uint8_t)( t3 >> 2);
    }
}

void poly_secretkey_unpack(int16_t *a, const uint8_t *ss)
{
    unsigned int i;

    for(i = 0; i < ZEN_SWIFT_N / 4; i++)
    {
        a[4*i + 0] = (int16_t)(
              ((uint16_t)ss[5*i + 0] >> 0)
            | ((uint16_t)ss[5*i + 1] << 8)
        ) & 0x03FF;

        a[4*i + 1] = (int16_t)(
              ((uint16_t)ss[5*i + 1] >> 2)
            | ((uint16_t)ss[5*i + 2] << 6)
        ) & 0x03FF;

        a[4*i + 2] = (int16_t)(
              ((uint16_t)ss[5*i + 2] >> 4)
            | ((uint16_t)ss[5*i + 3] << 4)
        ) & 0x03FF;

        a[4*i + 3] = (int16_t)(
              ((uint16_t)ss[5*i + 3] >> 6)
            | ((uint16_t)ss[5*i + 4] << 2)
        ) & 0x03FF;
    }
}

void poly_publickey_pack(uint8_t *pa, const int16_t *a)
{
    int i, idx;
    uint64_t tmp[103] = {0};
    uint64_t res[77]  = {0};

    idx = 0;
    for(i = 0; i < ZEN_SWIFT_N - 2; i += 5)
    {
        tmp[idx] =
              (uint64_t)(uint16_t)a[i]
            + (uint64_t)(uint16_t)a[i + 1] * pack_table[1]
            + (uint64_t)(uint16_t)a[i + 2] * pack_table[2]
            + (uint64_t)(uint16_t)a[i + 3] * pack_table[3]
            + (uint64_t)(uint16_t)a[i + 4] * pack_table[4];
        idx++;
    }

    tmp[102] =
          (uint64_t)(uint16_t)a[ZEN_SWIFT_N - 2]
        + (uint64_t)(uint16_t)a[ZEN_SWIFT_N - 1] * pack_table[1];

    idx = 0;
    for(i = 0; i < 100; i += 4)
    {
        uint64_t x0 = tmp[i];
        uint64_t x1 = tmp[i + 1];
        uint64_t x2 = tmp[i + 2];
        uint64_t x3 = tmp[i + 3];

        res[idx++] = x0 | ((x3 & 0xFFFFULL) << 48);
        res[idx++] = x1 | (((x3 >> 16) & 0xFFFFULL) << 48);
        res[idx++] = x2 | (((x3 >> 32) & 0xFFFFULL) << 48);
    }

    res[idx++] = tmp[100] | ((tmp[102] & 0xFFFFULL) << 48);
    res[idx++] = tmp[101] | (((tmp[102] >> 16) & 0xFULL) << 48);

    memcpy(pa, (const uint8_t *)res, ZEN_SWIFT_INDCPA_PUBLICKEY_LEN_BYTES);
}

static inline uint16_t divmod769_tail(uint64_t *x)
{
    uint32_t v = (uint32_t)*x;
    uint32_t q = ((uint64_t)v * 349071u) >> 28;
    uint32_t r = v - q * 769u;

    *x = q;
    return (uint16_t)r;
}

static inline uint32_t div769_u26(uint32_t x, uint32_t *r)
{
    uint32_t q = ((uint64_t)x * 44681065u) >> 35;

    *r = x - q * 769u;
    return q;
}

static inline uint16_t divmod769_u48(uint64_t *x)
{
    uint64_t v = *x;
    uint32_t r = 0;
    uint32_t q2, q1, q0;

    q2 = div769_u26((uint32_t)(v >> 32), &r);
    q1 = div769_u26((r << 16) | ((uint32_t)(v >> 16) & 0xffffu), &r);
    q0 = div769_u26((r << 16) | ((uint32_t)v & 0xffffu), &r);

    *x = ((uint64_t)q2 << 32) | ((uint64_t)q1 << 16) | q0;
    return (uint16_t)r;
}

void poly_publickey_unpack(int16_t *a, const uint8_t *pa)
{
    int i, idx;
    uint64_t res[77]  = {0};
    uint64_t tmp[103] = {0};
    const uint64_t MASK48   = 0x0000FFFFFFFFFFFFULL;
    const uint64_t MASK16   = 0xFFFFULL;

    memcpy((uint8_t *)res, pa, ZEN_SWIFT_INDCPA_PUBLICKEY_LEN_BYTES);

    idx = 76;

    tmp[101] = res[idx] & MASK48;
    tmp[102] = ((res[idx--] >> 48) & 0xFULL) << 16;

    tmp[100] = res[idx] & MASK48;
    tmp[102] |= ((res[idx--] >> 48) & 0xFFFFULL);

    for(i = 99; i > 0; i -= 4)
    {
        tmp[i - 1] = res[idx] & MASK48;
        tmp[i]     = ((res[idx--] >> 48) & 0xFFFFULL) << 32;

        tmp[i - 2] = res[idx] & MASK48;
        tmp[i]    |= ((res[idx--] >> 48) & 0xFFFFULL) << 16;

        tmp[i - 3] = res[idx] & MASK48;
        tmp[i]    |= ((res[idx--] >> 48) & 0xFFFFULL);
    }

    for(i = 0; i < 2; i++)
    {
        a[ZEN_SWIFT_N - 2 + i] = divmod769_tail(&tmp[102]);
    }

    idx = 0;
    for(i = 0; i < ZEN_SWIFT_N - 2; i += 5)
    {
        for (int j = 0; j < 5; j++)
        {
            a[i + j] = divmod769_u48(&tmp[idx]);
        }

        idx++;
    }
}

void poly_ciphertext_pack(uint8_t *pa, const int16_t *a)
{
    unsigned int i;

    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        pa[i] = (uint8_t)(a[i] & 0xFF);
    }
}

void poly_ciphertext_unpack(int16_t *a, const uint8_t *pa)
{
    unsigned int i;

    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        a[i] = (int16_t)pa[i];
    }
}

void poly_compress(int16_t *a)
{
    unsigned int i;
    uint32_t d;
    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        // a[i] = ((((uint32_t)a[i] << 8) + ZEN_SWIFT_Q/2) / ZEN_SWIFT_Q) & 255;
        d = a[i] << 8;
        d += 384;
        d *= 10908;
        d >>= 23;
        a[i] = d & 255;
    }
}

void poly_decompress(int16_t *a)
{
    unsigned int i;
    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        a[i] = ((((uint32_t)a[i] * ZEN_SWIFT_Q) + 128) >> 8);
    }
}
