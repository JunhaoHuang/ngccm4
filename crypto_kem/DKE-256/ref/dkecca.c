#include "../parameters.h"
#include "dkecpa.h"
#include "../auxfunc.h"
#include "dkecca.h"
#include <stdint.h>
#include <string.h>
#include "verify.h"


void DKE2CCA_keygen_derand(uint8_t pk[DKE2_PKBYTES],
                          uint8_t sk[DKE2_SKBYTES],
                          const uint8_t coins[DKE2_SEEDBYTES + DKE2_SSBYTES]) {
    DKE2CPA_keygen_derand(pk, sk, coins);
    memcpy(sk + DKE2_CPA_SKBBYTES, pk, DKE2_PKBYTES); // sk = (skCPA | pk | ...)
    // rejection value rej = coins + DKE1_SEEDBYTES
    memcpy(sk + DKE2_CPA_SKBBYTES + DKE2_PKBYTES, coins + DKE2_SEEDBYTES, DKE2_SSBYTES);
    // sk = (skCPA | pk | rej)

}

void DKE2CCA_enc_derand(uint8_t ct[DKE2_CTBYTES],
                        uint8_t ss[DKE2_SSBYTES],
                        const uint8_t pk[DKE2_PKBYTES],
                        const uint8_t coins[DKE2_SEEDBYTES]) {


    // inits
    uint8_t kr[DKE2_SSBYTES + DKE2_SEEDBYTES + DKE2_N/8];      // will contain (K, r)
    uint8_t buffer[DKE2_SEEDBYTES + DKE2_PKBYTES];             // (coins | pk)
    uint8_t skB[DKE2_SSBYTES];                                 // will contain provisional shared secret


    memcpy(buffer, coins, DKE2_SEEDBYTES);
    memcpy(buffer + DKE2_SEEDBYTES, pk, DKE2_PKBYTES);


    pseudoXOF((DKE2_SSBYTES + DKE2_SEEDBYTES)*8 + DKE2_N, buffer, (DKE2_SEEDBYTES + DKE2_PKBYTES)*8 , kr);
    // kr <- (K | r) = HASH(buffer) = HASH(coins | pk)

    // CPA protocol
    DKE2CPA_enc_derand(ct,
                    skB,
                       pk,
                       kr + DKE2_SSBYTES);

    // In place one time pad
    unsigned int i = 0;
    for (i  = 0; i < DKE2_SSBYTES; i++) {
        skB[i] ^= coins[i];
    }

    // Emplace the tag
    memcpy(ct + DKE2_CPA_CTBYTES, skB, DKE2_SSBYTES);

    // Extract ss
    memcpy(ss, kr, DKE2_SSBYTES);
}

void DKE2CCA_dec(uint8_t ss[DKE2_SSBYTES],
                 const uint8_t sk[DKE2_SKBYTES],
                 const uint8_t ct[DKE2_CTBYTES]) {

    int fail;                   // 1 if ctA != ctB
    uint8_t r[DKE2_SSBYTES];    // will contain the tag and, after undoing the OTP, the randomness r
    uint8_t skA[DKE2_SSBYTES];


    // CPA decryption
    DKE2CPA_dec(skA, sk, ct);
    memcpy(r, ct + DKE2_CPA_CTBYTES, DKE2_SSBYTES); // at this stage, r = tag = ENC coins + mask

    // Undo in place one time pad
    unsigned int i = 0;
    for (i  = 0; i < DKE2_SSBYTES; i++) {
        r[i] ^= skA[i];
    }

    // Re-encript
    uint8_t ctA[DKE2_CTBYTES];
    uint8_t ss0[DKE2_SSBYTES];

    // CPA FO encryption
    DKE2CCA_enc_derand(ctA,
                        ss0,
                        sk + DKE2_CPA_SKABYTES,
                        r);

    // ct == ctA?
    fail = DKE2_verify(ct, ctA, DKE2_CPA_CTBYTES);

    // Emplace rejection key in ss
    memcpy(ss, sk + DKE2_SKBYTES - DKE2_SSBYTES, DKE2_SSBYTES);

    // Implicit rejection
    DKE2_cmov(ss, ss0, DKE2_SSBYTES, (uint8_t) (1 - fail));
}


