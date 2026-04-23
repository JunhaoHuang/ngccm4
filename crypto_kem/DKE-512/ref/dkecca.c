#include "../parameters.h"
#include "dkecpa.h"
#include "../auxfunc.h"
#include "dkecca.h"
#include <stdint.h>
#include <string.h>
#include "verify.h"


void DKE3CCA_keygen_derand(uint8_t pk[DKE3_PKBYTES],
                          uint8_t sk[DKE3_SKBYTES],
                          const uint8_t coins[DKE3_SEEDBYTES + DKE3_SSBYTES]) {
    DKE3CPA_keygen_derand(pk, sk, coins);
    memcpy(sk + DKE3_CPA_SKBBYTES, pk, DKE3_PKBYTES); // sk = (skCPA | pk | ...)
    // rejection value rej = coins + DKE1_SEEDBYTES
    memcpy(sk + DKE3_CPA_SKBBYTES + DKE3_PKBYTES, coins + DKE3_SEEDBYTES, DKE3_SSBYTES);
    // sk = (skCPA | pk | rej)
}

void DKE3CCA_enc_derand(uint8_t ct[DKE3_CTBYTES],
                        uint8_t ss[DKE3_SSBYTES],
                        const uint8_t pk[DKE3_PKBYTES],
                        const uint8_t coins[DKE3_SEEDBYTES]) {


    // inits
    uint8_t kr[DKE3_SSBYTES + DKE3_SEEDBYTES + DKE3_N/8];      // will contain (K, r)
    uint8_t buffer[DKE3_SEEDBYTES + DKE3_PKBYTES];             // (coins | pk)
    uint8_t skB[DKE3_SSBYTES];                                 // will contain provisional shared secret

    memcpy(buffer, coins, DKE3_SEEDBYTES);
    memcpy(buffer + DKE3_SEEDBYTES, pk, DKE3_PKBYTES);

    pseudoXOF((DKE3_SSBYTES + DKE3_SEEDBYTES)*8 + DKE3_N, buffer, (DKE3_SEEDBYTES + DKE3_PKBYTES)*8 , kr);
    // kr <- (K | r) = HASH(buffer) = HASH(coins | pk)

    // CPA protocol
    DKE3CPA_enc_derand(ct,
                    skB,
                       pk,
                       kr + DKE3_SSBYTES);

    // In place one time pad
    unsigned int i = 0;
    for (i  = 0; i < DKE3_SSBYTES; i++) {
        skB[i] ^= coins[i];
    }

    // Emplace the tag
    memcpy(ct + DKE3_CPA_CTBYTES, skB, DKE3_SSBYTES);

    // Extract ss
    memcpy(ss, kr, DKE3_SSBYTES);
}

void DKE3CCA_dec(uint8_t ss[DKE3_SSBYTES],
                 const uint8_t sk[DKE3_SKBYTES],
                 const uint8_t ct[DKE3_CTBYTES]) {

    int fail;                   // 1 if ctA != ctB
    uint8_t r[DKE3_SSBYTES];    // will contain the tag and, after undoing the OTP, the randomness r
    uint8_t skA[DKE3_SSBYTES];


    // CPA decryption
    DKE3CPA_dec(skA, sk, ct);
    memcpy(r, ct + DKE3_CPA_CTBYTES, DKE3_SSBYTES); // at this stage, r = tag = ENC coins + mask

    // Undo in place one time pad
    unsigned int i = 0;
    for (i  = 0; i < DKE3_SSBYTES; i++) {
        r[i] ^= skA[i];
    }

    // Re-encript
    uint8_t ctA[DKE3_CTBYTES];
    uint8_t ss0[DKE3_SSBYTES];

    // CPA FO encryption
    DKE3CCA_enc_derand(ctA,
                        ss0,
                        sk + DKE3_CPA_SKABYTES,
                        r);

    // ct == ctA?
    fail = DKE3_verify(ct, ctA, DKE3_CPA_CTBYTES);

    // Emplace rejection key in ss
    memcpy(ss, sk + DKE3_SKBYTES - DKE3_SSBYTES, DKE3_SSBYTES);

    // Implicit rejection
    DKE3_cmov(ss, ss0, DKE3_SSBYTES, (uint8_t) (1 - fail));
}

