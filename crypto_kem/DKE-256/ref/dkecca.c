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


void DKEM256_keygen_derand(uint8_t pk[DKE2_PKBYTES],
                          uint8_t sk[DKE2_SKBYTES],
                          const uint8_t coins[DKE2_SEEDBYTES + DKE2_SSBYTES]) {
    DKE2CPA_keygen_derand(pk, sk, coins);
    memcpy(sk + DKE2_CPA_SKBBYTES, pk, DKE2_PKBYTES); // sk = (skCPA | pk | ...)
    // rejection value rej = coins + DKE1_SEEDBYTES
    memcpy(sk + DKE2_CPA_SKBBYTES + DKE2_PKBYTES, coins + DKE2_SEEDBYTES, DKE2_SSBYTES);
    // sk = (skCPA | pk | rej)

}

void DKEM256_enc_derand(uint8_t ct[DKE2_CTBYTES],
                        uint8_t k[DKE2_SSBYTES],
                        const uint8_t pk[DKE2_PKBYTES],
                        const uint8_t coins[DKE2_SEEDBYTES]) {
    uint8_t r[2 * DKE2_SSBYTES];
    uint8_t ss[DKE2_SSBYTES];
    uint8_t buffer[2 * DKE2_SEEDBYTES];

    memcpy(buffer, coins, DKE2_SEEDBYTES);
    memcpy(buffer + DKE2_SEEDBYTES, pk + DKE2_PKBYTES - DKE2_SEEDBYTES, DKE2_SEEDBYTES);
#ifdef USE_KECCAK
    shake256(r, 2 * DKE2_SSBYTES, buffer, 2 * DKE2_SEEDBYTES);
#else
    pseudoXOF(16 * DKE2_SSBYTES, buffer, DKE2_SEEDBYTES * 16, r);
#endif

    DKE2CPA_enc_derand(ct, ss, pk, r);

    for (unsigned int i = 0; i < DKE2_SSBYTES; i++) {
        ss[i] ^= coins[i];
    }

    memcpy(ct + DKE2_CPA_CTBYTES, ss, DKE2_SSBYTES);

    uint8_t ssct[DKE2_SSBYTES + DKE2_CTBYTES];
    memcpy(ssct, ss, DKE2_SSBYTES);
    memcpy(ssct + DKE2_SSBYTES, ct, DKE2_CTBYTES);

#ifdef USE_KECCAK
    sha3_256(k, ssct, DKE2_SSBYTES + DKE2_CTBYTES);
#else
    sm3hash(256, ssct, (DKE2_SSBYTES + DKE2_CTBYTES) * 8, k);
#endif
}

void DKEM256_dec(uint8_t ss[DKE2_SSBYTES],
                 const uint8_t sk[DKE2_SKBYTES],
                 const uint8_t ct[DKE2_CTBYTES]) {

    int fail;                   // 1 if ctA != ctB
    uint8_t coins[DKE2_SSBYTES];
    uint8_t skA[DKE2_SSBYTES];


    // CPA decryption
    DKE2CPA_dec(skA, sk, ct);
    memcpy(coins, ct + DKE2_CPA_CTBYTES, DKE2_SSBYTES);

    // Undo in place one time pad
    for (unsigned int i = 0; i < DKE2_SSBYTES; i++) {
        coins[i] ^= skA[i];
    }

    // Re-encript
    uint8_t ctA[DKE2_CTBYTES];
    uint8_t k[DKE2_SSBYTES];

    // CPA FO encryption
    DKEM256_enc_derand(ctA,
                        k,
                        sk + DKE2_CPA_SKABYTES,
                        coins);

    // ct == ctA?
    fail = DKE2_verify(ct, ctA, DKE2_CTBYTES);

    uint8_t rejct[DKE2_SSBYTES + DKE2_CTBYTES];
    memcpy(rejct, sk + DKE2_SKBYTES - DKE2_SSBYTES, DKE2_SSBYTES);
    memcpy(rejct + DKE2_SSBYTES, ct, DKE2_CTBYTES);

#ifdef USE_KECCAK
    sha3_256(ss, rejct, DKE2_SSBYTES + DKE2_CTBYTES);
#else
    sm3hash(256, rejct, (DKE2_SSBYTES + DKE2_CTBYTES) * 8, ss);
#endif

    // Implicit rejection
    DKE2_cmov(ss, k, DKE2_SSBYTES, (uint8_t) (1 - fail));
}
