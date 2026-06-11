#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include "params.h"
#include "auxfunc.h"
#include "sample.h"
#include "symmetric.h"

static const uint64_t pack_table[] = 
{
    1, 769, 591361, 454756609, 349707832321
};

int check_poly_inv_Zq(int16_t *a)
{
	unsigned int i;
    int32_t flag;
    uint32_t acc = 0;
    for(i = 0; i < ZEN_SWIFT_N; i += 4)
	{
		flag = a[i] + a[i + 1] + a[i + 2] + a[i + 3];
		acc |= (((flag | (0u - flag)) >> 31) ^ 1u);
	}
	return (int)(acc & 1u);
}

int check_poly_inv_Z2(int16_t *a)
{
	unsigned int i;
    uint32_t acc = 0;
    for(i = 0; i < ZEN_SWIFT_N4; i++)
    {
        acc ^= a[i];
    }
	return (int)((((acc | (0u - acc)) >> 31) ^ 1u) & 1u);
}

void mul_in_R2_n(int16_t *a, int16_t *b, int16_t n, int16_t *res)
{
    int16_t i, j;
    int16_t tmp_b[2 * n];
    int16_t *v;
    uint16_t mask;
    const size_t coeff_bytes = (size_t)n * sizeof(int16_t);

    memset(res, 0, n * sizeof(int16_t));
    memcpy(tmp_b, b, coeff_bytes);
    memcpy(tmp_b + n, b, coeff_bytes);
    
    for(i = 0; i < n; i++)
    {
        mask = (uint16_t)(0u - (uint16_t)(a[i] & 1));
        v = tmp_b + n - i;
        for(j = 0; j < n; j++)
        {
            res[j] ^= (v[j] & mask);
        }
    }
}


/// @brief Multiply two binary polynomials in R2 of degree less than ZEN_SWIFT_N4 using a constant-time cyclic shift-and-XOR method
/// @param[in] a Base address of first input polynomial coefficient array of length ZEN_SWIFT_N4
/// @param[in] b Base address of second input polynomial coefficient array of length 2*ZEN_SWIFT_N4, arranged as a duplicated array for cyclic access
/// @param[out] res Base address of output polynomial coefficient array of length ZEN_SWIFT_N4
/// @return None
static void mulf_in_R2_N4(int16_t *a, int16_t *b, int16_t *res)
{
    unsigned int i, j;
    int16_t *v;
    uint16_t mask;

    memset(res, 0, ZEN_SWIFT_N4 * sizeof(int16_t));
    
    for(i = 0; i < ZEN_SWIFT_N4; i++)
    {
        mask = (uint16_t)(0u - (uint16_t)(a[i] & 1));
        v = b + ZEN_SWIFT_N4 - i;
        for(j = 0; j < ZEN_SWIFT_N4; j++)
        {
            res[j] ^= (v[j] & mask);
        }
    }
}

void FastInversion(int16_t *f_inv, int16_t *f)
{
    unsigned int l, i, j, n;
    int16_t k[ZEN_SWIFT_N4], b[ZEN_SWIFT_N4] = {0}, tmp_f[2 * ZEN_SWIFT_N4], tmp[ZEN_SWIFT_N4];
    const size_t coeff_bytes = ZEN_SWIFT_N4 * sizeof(int16_t);

    memcpy(tmp_f, f, coeff_bytes);
    memcpy(tmp_f + ZEN_SWIFT_N4, f, coeff_bytes);

    k[0] = f[0];
    for(i = 1; i < ZEN_SWIFT_N4; i++)
    {
        k[i] = f[i] ^ k[i - 1];
    }

    //level 0
    memset(f_inv, 0, ZEN_SWIFT_N4 * sizeof(int16_t));
    f_inv[0] = 1;
    for(i = 0; i < ZEN_SWIFT_N4; i++)
    {
        b[0] ^= k[i];//finv=1;b=k mod <x+1,2>;
    }

    for(i = 0; i < ZEN_SWIFT_N4; i++)
    {
        k[i] ^= (b[0] * f[i]);//k=k+f*k*finv mod <x^n4+1,2>;
    }
    
    for(i = 1; i < ZEN_SWIFT_N4; i++)
    {
        k[i] = k[i] ^ k[i-1];
    }
    f_inv[0] = !b[0];
    f_inv[1] = b[0];

    //level 1 - l-1
    n = 1;
    for(l = 1; l < ZEN_SWIFT_N4_LOG2; l++)
    {
        n = 2 * n;
        memset(tmp, 0, n * sizeof(int16_t));
        for(i = 0; i < n; i++)
        {
            for(j = i; j < ZEN_SWIFT_N4; j += n)
            {
                tmp[i] ^= k[j];//tmp[0-n+1]=k mod <x^n+1,2>;
            }
        }
        mul_in_R2_n(f_inv, tmp, n, b);//b=k*finv mod <x^n+1,2>;

        mulf_in_R2_N4(b, tmp_f, tmp);//tmp=b*finv mod <x^n4+1,2>;

        for(j = 0; j < ZEN_SWIFT_N4; j++)
        {
            k[j] = k[j] ^ tmp[j];//k=k+f*k*finv mod <x^n4+1,2>;
        }

        for(i = n; i < ZEN_SWIFT_N4; i += n)
        {
            for(j = i; j < i + n; j++)
            {
                k[j] = k[j] ^ k[j - n];//k/x^n+1
            }
        }

        for(i = 0; i < n; i++)
        {
            tmp[i] = tmp[i + n] = b[i];
        }
        for(i = 0; i < 2 * n; i++)
        {
            f_inv[i] ^= tmp[i];
        }
    }    
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
    uint32_t underflow = r >> 31;

    q -= underflow;
    r += underflow * 769u;

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
