#include "parameters.h"
#include "dkecpa.h"
#include "dkecca.h"
#include <stdint.h>
#include <string.h>
#include "verify.h"
#ifdef USE_KECCAK
#include "fips202.h"
#else
#include "auxfunc.h"
#endif


void DKEM512_keygen_derand(uint8_t pk[DKE3_PKBYTES],
                          uint8_t sk[DKE3_SKBYTES],
                          const uint8_t coins[DKE3_SEEDBYTES + DKE3_SSBYTES]) {
    DKE3CPA_keygen_derand(pk, sk, coins);
    memcpy(sk + DKE3_CPA_SKBBYTES, pk, DKE3_PKBYTES); // sk = (skCPA | pk | ...)
    // rejection value rej = coins + DKE1_SEEDBYTES
    memcpy(sk + DKE3_CPA_SKBBYTES + DKE3_PKBYTES, coins + DKE3_SEEDBYTES, DKE3_SSBYTES);
    // sk = (skCPA | pk | rej)
}

void DKEM512_enc_derand(uint8_t ct[DKE3_CTBYTES],
                        uint8_t k[DKE3_SSBYTES],
                        const uint8_t pk[DKE3_PKBYTES],
                        const uint8_t coins[DKE3_SEEDBYTES]) {
    uint8_t r[2 * DKE3_SSBYTES];
    uint8_t ss[DKE3_SSBYTES];
    uint8_t buffer[2 * DKE3_SEEDBYTES];

    memcpy(buffer, coins, DKE3_SEEDBYTES);
    memcpy(buffer + DKE3_SEEDBYTES, pk + DKE3_PKBYTES - DKE3_SEEDBYTES, DKE3_SEEDBYTES);
#ifdef USE_KECCAK
    shake256(r, 2 * DKE3_SSBYTES, buffer, 2 * DKE3_SEEDBYTES);
#else
    pseudoXOF(16 * DKE3_SSBYTES, buffer, DKE3_SEEDBYTES * 16, r);
#endif

    DKE3CPA_enc_derand(ct, ss, pk, r);

    for (unsigned int i = 0; i < DKE3_SSBYTES; i++) {
        ss[i] ^= coins[i];
    }

    memcpy(ct + DKE3_CPA_CTBYTES, ss, DKE3_SSBYTES);

    uint8_t ssct[DKE3_SSBYTES + DKE3_CTBYTES];
    memcpy(ssct, ss, DKE3_SSBYTES);
    memcpy(ssct + DKE3_SSBYTES, ct, DKE3_CTBYTES);

#ifdef USE_KECCAK
    sha3_512(k, ssct, DKE3_SSBYTES + DKE3_CTBYTES);
#else
    pseudohash(512, ssct, (DKE3_SSBYTES + DKE3_CTBYTES) * 8, k);
#endif
}

void DKEM512_dec(uint8_t ss[DKE3_SSBYTES],
                 const uint8_t sk[DKE3_SKBYTES],
                 const uint8_t ct[DKE3_CTBYTES]) {

    int fail;                   // 1 if ctA != ctB
    uint8_t coins[DKE3_SSBYTES];
    uint8_t skA[DKE3_SSBYTES];


    // CPA decryption
    DKE3CPA_dec(skA, sk, ct);
    memcpy(coins, ct + DKE3_CPA_CTBYTES, DKE3_SSBYTES);

    // Undo in place one time pad
    for (unsigned int i = 0; i < DKE3_SSBYTES; i++) {
        coins[i] ^= skA[i];
    }

    // Re-encript
    uint8_t ctA[DKE3_CTBYTES];
    uint8_t k[DKE3_SSBYTES];

    // CPA FO encryption
    DKEM512_enc_derand(ctA,
                        k,
                        sk + DKE3_CPA_SKABYTES,
                        coins);

    // ct == ctA?
    fail = DKE3_verify(ct, ctA, DKE3_CTBYTES);

    uint8_t rejct[DKE3_SSBYTES + DKE3_CTBYTES];
    memcpy(rejct, sk + DKE3_SKBYTES - DKE3_SSBYTES, DKE3_SSBYTES);
    memcpy(rejct + DKE3_SSBYTES, ct, DKE3_CTBYTES);

#ifdef USE_KECCAK
    sha3_512(ss, rejct, DKE3_SSBYTES + DKE3_CTBYTES);
#else
    pseudohash(512, rejct, (DKE3_SSBYTES + DKE3_CTBYTES) * 8, ss);
#endif

    // Implicit rejection
    DKE3_cmov(ss, k, DKE3_SSBYTES, (uint8_t) (1 - fail));
}
