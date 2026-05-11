#include "random_sampling.h"
#include "auxfunc.h"
#ifdef USE_KECCAK
#include "fips202.h"
#endif
#include <stdint.h>
#include <stdio.h>
#include <string.h> // for mempcy

#include <limits.h>
#include <stdlib.h>


// Derived from https://github.com/PQClean/PQClean/blob/master/crypto_kem/ml-kem-512/clean/cbd.c


/// @brief load 4 bytes into a 32-bit integer
///        in little-endian order.
///
/// @param[in]  x pointer to input byte array
/// @return     r 32-bit unsigned integer loaded from x (most significant byte is zero)
static uint32_t load32_littleendian(const uint8_t x[4]) {
    uint32_t r;
    r  = (uint32_t)x[0];
    r |= (uint32_t)x[1] << 8;
    r |= (uint32_t)x[2] << 16;
    r |= (uint32_t)x[3] << 24;
    return r;
}


void centered_binomial2(poly* pol, const unsigned char coins[CBD2_BYTES]) {
    // Preliminar implmentation (PQClean: https://github.com/PQClean/PQClean/blob/master/crypto_kem/ml-kem-1024/clean/cbd.c)
    unsigned int i, j;
    uint32_t t, d;
    int16_t a, b;

    for (i = 0; i < DKE2_N / 8; i++) {
        t  = load32_littleendian(coins + 4 * i);
        d  = t & 0x55555555;
        d += (t >> 1) & 0x55555555;

        for (j = 0; j < 8; j++) {
            a = (d >> (4 * j + 0)) & 0x3;
            b = (d >> (4 * j + 2)) & 0x3;
            pol->coeffs[8 * i + j] = a - b;
        }
    }
}

void DKE2_cbdA(poly* pol, const unsigned char coins[CBD2_BYTES]) {
    centered_binomial2(pol, coins);
}
void DKE2_cbdB(poly* pol, const unsigned char coins[CBD2_BYTES]) {
    centered_binomial2(pol, coins);
}


void DKE2_getsecretA(poly* pol, const unsigned char rand[DKE2_SEEDBYTES], const uint8_t nonce) {
    // msg will be (rand | nonce)
    uint8_t msg[DKE2_SEEDBYTES + 1];
    uint8_t coins[CBD2_BYTES];
    memcpy(msg, rand, DKE2_SEEDBYTES);
    msg[DKE2_SEEDBYTES] = nonce;
#ifdef USE_KECCAK
    shake256(coins, CBD2_BYTES, msg, DKE2_SEEDBYTES + 1);
#else
    pseudoXOF(CBD2_BYTES*8, msg,(DKE2_SEEDBYTES + 1)*8, coins); // bytes*8 = bits
#endif
    centered_binomial2(pol, coins);
}
void DKE2_geterrorA(poly* pol, const unsigned char rand[DKE2_SEEDBYTES], const uint8_t nonce) {
    DKE2_getsecretA(pol, rand, nonce);
}
void DKE2_getsecretB(poly* pol, const unsigned char rand[DKE2_SEEDBYTES], const uint8_t nonce) {
    DKE2_getsecretA(pol, rand, nonce);
}
void DKE2_geterrorB(poly* pol, const unsigned char rand[DKE2_SEEDBYTES], const uint8_t nonce) {
    DKE2_getsecretA(pol, rand, nonce);
}




unsigned int rej_uniform(int16_t *res,
                         unsigned int len,
                         const unsigned char *buf,
                         unsigned int buflen) {
    unsigned int ctr, pos;
    uint16_t val0, val1;
    ctr = pos = 0;
    while (ctr < len && pos + 3 <= buflen) {
        val0 = ((buf[pos + 0] >> 0) | ((uint16_t)buf[pos + 1] << 8)) & 0xFFF;
        val1 = ((buf[pos + 1] >> 4) | ((uint16_t)buf[pos + 2] << 4)) & 0xFFF;
        pos += 3;

        if (val0 < DKE2_Q) {
            res[ctr++] = val0;
        }
        if (ctr < len && val1 < DKE2_Q) {
            res[ctr++] = val1;
        }
    }
    return ctr;
}
#define POLY_UNIFORM_BUF_BYTES      1024 //TODO: optimize (or optimize DKE2_gen_matrix directly).
// big POLY_UNIFORM_BUF_BYTES ----> small number of rounds

void poly_uniform(poly* pol,
                  const uint8_t seed[DKE2_SEEDBYTES],
                  const uint8_t i,
                  const uint8_t j){
    uint32_t round = 0;
    unsigned int ctr = 0;
    uint8_t input[DKE2_SEEDBYTES + 2 + 4]; // will be input = seed || i(1 byte) || j(1 byte) || round(4 bytes)
    uint8_t buf[POLY_UNIFORM_BUF_BYTES];
    while (ctr < DKE2_N) {
        memcpy(input, seed, DKE2_SEEDBYTES);
        input[DKE2_SEEDBYTES] = i;
        input[DKE2_SEEDBYTES + 1] = j;
        memcpy(input + DKE2_SEEDBYTES + 2, &round, 4);

#ifdef USE_KECCAK
        shake128(buf, sizeof(buf), input, sizeof(input));
#else
        pseudoXOF(sizeof(buf)*8,
                  input,
                  sizeof(input)*8,
                  buf);
#endif
        ctr += rej_uniform(
            pol -> coeffs + ctr,
            DKE2_N - ctr,
            buf,
            sizeof(buf)
        );
        round++;
    }
}

//
/* This was a preliminar implementation, using XOF directly. Highly inefficient.
void DKE2_gen_matrix(polyvec *res,
                     const uint8_t seed[DKE2_SEEDBYTES],
                     const int transposed) {
    for (unsigned int i = 0; i < DKE2_K; i++) {
        for (unsigned int j = 0; j < DKE2_K; j++) {
            if (transposed) {
                poly_uniform(&res[i].vec[j], seed, i, j);
            } else {
                poly_uniform(&res[i].vec[j], seed, j, i);
            }
        }
    }
}
*/

// Improving XOF utilities: --------------------------------------------------------------------------------------

#define DKE2_XOF_BLOCKBYTES 168
#define DKE2_GEN_MATRIX_NBLOCKS ((12 * DKE2_N / 8 * (1 << 12) / DKE2_Q + DKE2_XOF_BLOCKBYTES) / DKE2_XOF_BLOCKBYTES)

typedef struct {
    uint8_t extseed[DKE2_SEEDBYTES + 2];
#ifdef USE_KECCAK
    shake128ctx state;
#else
    size_t generated_bytes;
#endif
} dke2_xof_state;

#ifndef USE_KECCAK
// copying just the newly requested slice
static void dke2_xof_copy_slice(uint8_t *out,
                               size_t start,
                               size_t count,
                               const uint8_t *prefix) {
    if (count == 0) {
        return;
    }

    memcpy(out, prefix + start, count);
}
#endif

// storing seed and matrix coordinates for later squeezes
static void dke2_xof_absorb(dke2_xof_state *state,
                           const uint8_t seed[DKE2_SEEDBYTES],
                           uint8_t x,
                           uint8_t y) {
    memcpy(state->extseed, seed, DKE2_SEEDBYTES);
    state->extseed[DKE2_SEEDBYTES + 0] = x;
    state->extseed[DKE2_SEEDBYTES + 1] = y;
#ifdef USE_KECCAK
    shake128_absorb(&state->state, state->extseed, DKE2_SEEDBYTES + 2);
#else
    state->generated_bytes = 0;
#endif
}

// rebuilding the requested prefix with pseudoXOF and returning the fresh tail
static void dke2_xof_squeezeblocks(uint8_t *out,
                                  size_t outblocks,
                                  dke2_xof_state *state) {
#ifdef USE_KECCAK
    shake128_squeezeblocks(out, outblocks, &state->state);
#else
    size_t outlen = outblocks * (size_t)DKE2_XOF_BLOCKBYTES;
    size_t needed = state->generated_bytes + outlen;
    unsigned char *prefix;

    if (outlen == 0) {
        return;
    }

    if (needed > (size_t)(ULLONG_MAX / 8ULL)) {
        memset(out, 0, outlen);
        return;
    }

    prefix = (unsigned char *)malloc(needed);
    if (prefix == NULL) {
        memset(out, 0, outlen);
        return;
    }

    if (pseudoXOF((unsigned long long)needed * 8ULL,
                  state->extseed,
                  (unsigned long long)sizeof(state->extseed) * 8ULL,
                  prefix) != 0) {
        memset(out, 0, outlen);
        free(prefix);
        return;
                  }

    dke2_xof_copy_slice(out, state->generated_bytes, outlen, prefix);
    state->generated_bytes += outlen;
    free(prefix);
#endif
}

// clearing the local xof bookkeeping
static void dke2_xof_release(dke2_xof_state *state) {
#ifdef USE_KECCAK
    shake128_ctx_release(&state->state);
#else
    state->generated_bytes = 0;
#endif
}

// -----------------------------------------------------------------------------------------

// rebuilding matrix bytes with a local squeeze flow over pseudoXOF
void DKE2_gen_matrix(polyvec *res,
                     const uint8_t seed[DKE2_SEEDBYTES],
                     const int transposed) {
    unsigned int ctr;
    unsigned int buflen;
    dke2_xof_state state;
    uint8_t buf[DKE2_GEN_MATRIX_NBLOCKS * DKE2_XOF_BLOCKBYTES];

    for (unsigned int i = 0; i < DKE2_K; ++i) {
        for (unsigned int j = 0; j < DKE2_K; ++j) {
            if (transposed) {
                dke2_xof_absorb(&state, seed, (uint8_t)i, (uint8_t)j);
            }
            else {
                dke2_xof_absorb(&state, seed, (uint8_t)j, (uint8_t)i);
            }

            dke2_xof_squeezeblocks(buf, DKE2_GEN_MATRIX_NBLOCKS, &state);
            buflen = DKE2_GEN_MATRIX_NBLOCKS * DKE2_XOF_BLOCKBYTES;
            ctr = rej_uniform(res[i].vec[j].coeffs, DKE2_N, buf, buflen);

            while (ctr < DKE2_N) {
                dke2_xof_squeezeblocks(buf, 1, &state);
                buflen = DKE2_XOF_BLOCKBYTES;
                ctr += rej_uniform(res[i].vec[j].coeffs + ctr,
                                   DKE2_N - ctr,
                                   buf,
                                   buflen);
            }

            dke2_xof_release(&state);
        }
    }
}
