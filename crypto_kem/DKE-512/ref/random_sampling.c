#include "random_sampling.h"
#include "../auxfunc.h"
#include "../parameters.h"
#include "../arithmetic/poly.h"
#include "../arithmetic/polyvec.h"

#include <stdint.h>
#include <stdio.h>
#include <string.h>

#include <limits.h>
#include <stdlib.h>

// Derived from https://github.com/PQClean/PQClean/blob/master/crypto_kem/ml-kem-512/clean/cbd.c


/// @brief load 3 bytes into a 32-bit integer
///        in little-endian order.
///
/// @param[in]  x pointer to input byte array
/// @return     r 32-bit unsigned integer loaded from x (most significant byte is zero)
static uint32_t load24_littleendian(const uint8_t x[3]) {
    // Preliminar implmentation (PQClean: https://github.com/PQClean/PQClean/blob/master/crypto_kem/ml-kem-512/clean/cbd.c)
    uint32_t r;
    r  = (uint32_t)x[0];
    r |= (uint32_t)x[1] << 8;
    r |= (uint32_t)x[2] << 16;
    return r;
}

void centered_binomial3(poly* pol, const unsigned char coins[CBD3_BYTES]) {
    // Preliminar implmentation (PQClean: https://github.com/PQClean/PQClean/blob/master/crypto_kem/ml-kem-512/clean/cbd.c)
    unsigned int i, j;
    uint32_t t, d;
    int16_t a, b;

    for (i = 0; i < DKE3_N / 4; i++) {
        t  = load24_littleendian(coins + 3 * i);
        d  = t & 0x00249249;
        d += (t >> 1) & 0x00249249;
        d += (t >> 2) & 0x00249249;

        for (j = 0; j < 4; j++) {
            a = (d >> (6 * j + 0)) & 0x7;
            b = (d >> (6 * j + 3)) & 0x7;
            pol->coeffs[4 * i + j] = a - b;
        }
    }
}

void DKE3_cbdA(poly* pol, const unsigned char coins[CBD3_BYTES]) {
    centered_binomial3(pol, coins);
}
void DKE3_cbdB(poly* pol, const unsigned char coins[CBD3_BYTES]) {
    centered_binomial3(pol, coins);
}


void DKE3_getsecretA(poly* pol, const unsigned char rand[DKE3_SEEDBYTES], const uint8_t nonce) {
    // msg will be (rand | nonce)
    uint8_t msg[DKE3_SEEDBYTES + 1];
    uint8_t coins[CBD3_BYTES];
    memcpy(msg, rand, DKE3_SEEDBYTES);
    msg[DKE3_SEEDBYTES] = nonce;
    pseudoXOF(CBD3_BYTES*8, msg,(DKE3_SEEDBYTES + 1)*8, coins); // bytes*8 = bits
    centered_binomial3(pol, coins);
}
void DKE3_geterrorA(poly* pol, const unsigned char rand[DKE3_SEEDBYTES], const uint8_t nonce) {
    DKE3_getsecretA(pol, rand, nonce);
}
void DKE3_getsecretB(poly* pol, const unsigned char rand[DKE3_SEEDBYTES], const uint8_t nonce) {
    DKE3_getsecretA(pol, rand, nonce);
}
void DKE3_geterrorB(poly* pol, const unsigned char rand[DKE3_SEEDBYTES], const uint8_t nonce) {
    DKE3_getsecretA(pol, rand, nonce);
}

unsigned int rej_uniform(int16_t *res,
                         unsigned int len,
                         const unsigned char *buf,
                         unsigned int buflen) {
    unsigned int ctr, pos;
    uint16_t val0, val1, val2, val3, val4, val5, val6, val7;
    ctr = pos = 0;
    while (ctr < len && pos + 13 <= buflen) {
        val0    = ((buf[pos + 0] >> 0) | ((uint16_t)buf[pos + 1] << 8))  & 0x1FFF;
        val1 = ((buf[pos + 1] >> 5) | ((uint16_t)buf[pos + 2] << 3) |
                                                           ((uint16_t)buf[pos + 3] << 11)) & 0x1FFF;
        val2 = ((buf[pos + 3] >> 2) | ((uint16_t)buf[pos + 4] << 6) ) & 0x1FFF;
        val3 = ((buf[pos + 4] >> 7) | ((uint16_t)buf[pos + 5] << 1) |
                                                           ((uint16_t)buf[pos + 6] << 9))  & 0x1FFF;
        val4 = ((buf[pos + 6] >> 4) | ((uint16_t)buf[pos + 7] << 4) |
                                                           ((uint16_t)buf[pos + 8] <<12))  & 0x1FFF;
        val5 = ((buf[pos + 8] >> 1) | ((uint16_t)buf[pos + 9] << 7))  & 0x1FFF;
        val6 = ((buf[pos + 9] >> 6) | ((uint16_t)buf[pos + 10] << 2)
                                    | ((uint16_t)buf[pos +11] <<10))  & 0x1FFF;
        val7 = ((buf[pos +11] >> 3) | ((uint16_t)buf[pos +12] << 5))  & 0x1FFF;
        pos += 13;

        if (val0 < DKE3_Q) {
            res[ctr++] = val0;
        }
        if (ctr < len && val1 < DKE3_Q) {
            res[ctr++] = val1;
        }
        if (ctr < len && val2 < DKE3_Q) {
            res[ctr++] = val2;
        }
        if (ctr < len && val3 < DKE3_Q) {
            res[ctr++] = val3;
        }
        if (ctr < len && val4 < DKE3_Q) {
            res[ctr++] = val4;
        }
        if (ctr < len && val5 < DKE3_Q) {
            res[ctr++] = val5;
        }
        if (ctr < len && val6 < DKE3_Q) {
            res[ctr++] = val6;
        }
        if (ctr < len && val7 < DKE3_Q) {
            res[ctr++] = val7;
        }
    }
    return ctr;
}

#define POLY_UNIFORM_BUF_BYTES      1024 //TODO: optimize (or optimize DKE1_gen_matrix directly).
// bigger POLY_UNIFORM_BUF_BYTES ----> smaller number of rounds

void poly_uniform(poly* pol,
                  const uint8_t seed[DKE3_SEEDBYTES],
                  const uint8_t i,
                  const uint8_t j){
    uint32_t round = 0;
    unsigned int ctr = 0;
    uint8_t input[DKE3_SEEDBYTES + 2 + 4]; // will be input = seed || i(1 byte) || j(1 byte) || round(4 bytes)
    uint8_t buf[POLY_UNIFORM_BUF_BYTES];
    while (ctr < DKE3_N) {
        memcpy(input, seed, DKE3_SEEDBYTES);
        input[DKE3_SEEDBYTES] = i;
        input[DKE3_SEEDBYTES + 1] = j;
        memcpy(input + DKE3_SEEDBYTES + 2, &round, 4);

        pseudoXOF(sizeof(buf)*8,
                  input,
                  sizeof(input)*8,
                  buf);
        ctr += rej_uniform(
            pol -> coeffs + ctr,
            DKE3_N - ctr,
            buf,
            sizeof(buf)
        );
        round++;
    }
}


//
/* This was a preliminar implementation, using XOF directly. Highly inefficient.
void DKE3_gen_matrix(polyvec *res,
                     const uint8_t seed[DKE3_SEEDBYTES],
                     const int transposed) {
    for (unsigned int i = 0; i < DKE3_K; i++) {
        for (unsigned int j = 0; j < DKE3_K; j++) {
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

#define DKE3_XOF_BLOCKBYTES 168 // TODO: optimize this parameter
#define DKE3_GEN_MATRIX_NBLOCKS ((13 * DKE3_N / 8 * (1 << 13) / DKE3_Q + DKE3_XOF_BLOCKBYTES) / DKE3_XOF_BLOCKBYTES)

typedef struct {
    uint8_t extseed[DKE3_SEEDBYTES + 2];
    size_t generated_bytes;
} dke3_xof_state;

// copying just the newly requested slice
static void dke3_xof_copy_slice(uint8_t *out,
                               size_t start,
                               size_t count,
                               const uint8_t *prefix) {
    if (count == 0) {
        return;
    }

    memcpy(out, prefix + start, count);
}

// storing seed and matrix coordinates for later squeezes
static void dke3_xof_absorb(dke3_xof_state *state,
                           const uint8_t seed[DKE3_SEEDBYTES],
                           uint8_t x,
                           uint8_t y) {
    memcpy(state->extseed, seed, DKE3_SEEDBYTES);
    state->extseed[DKE3_SEEDBYTES + 0] = x;
    state->extseed[DKE3_SEEDBYTES + 1] = y;
    state->generated_bytes = 0;
}

// rebuilding the requested prefix with pseudoXOF and returning the fresh tail
static void dke3_xof_squeezeblocks(uint8_t *out,
                                  size_t outblocks,
                                  dke3_xof_state *state) {
    size_t outlen = outblocks * (size_t)DKE3_XOF_BLOCKBYTES;
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

    dke3_xof_copy_slice(out, state->generated_bytes, outlen, prefix);
    state->generated_bytes += outlen;
    free(prefix);
}

// clearing the local xof bookkeeping
static void dke3_xof_release(dke3_xof_state *state) {
    state->generated_bytes = 0;
}

// -----------------------------------------------------------------------------------------

// rebuilding matrix bytes with a local squeeze flow over pseudoXOF
void DKE3_gen_matrix(polyvec *res,
                     const uint8_t seed[DKE3_SEEDBYTES],
                     const int transposed) {
    unsigned int ctr;
    unsigned int buflen;
    dke3_xof_state state;
    uint8_t buf[DKE3_GEN_MATRIX_NBLOCKS * DKE3_XOF_BLOCKBYTES];

    for (unsigned int i = 0; i < DKE3_K; ++i) {
        for (unsigned int j = 0; j < DKE3_K; ++j) {
            if (transposed) {
                dke3_xof_absorb(&state, seed, (uint8_t)i, (uint8_t)j);
            }
            else {
                dke3_xof_absorb(&state, seed, (uint8_t)j, (uint8_t)i);
            }

            dke3_xof_squeezeblocks(buf, DKE3_GEN_MATRIX_NBLOCKS, &state);
            buflen = DKE3_GEN_MATRIX_NBLOCKS * DKE3_XOF_BLOCKBYTES;
            ctr = rej_uniform(res[i].vec[j].coeffs, DKE3_N, buf, buflen);

            while (ctr < DKE3_N) {
                dke3_xof_squeezeblocks(buf, 1, &state);
                buflen = DKE3_XOF_BLOCKBYTES;
                ctr += rej_uniform(res[i].vec[j].coeffs + ctr,
                                   DKE3_N - ctr,
                                   buf,
                                   buflen);
            }

            dke3_xof_release(&state);
        }
    }
}
