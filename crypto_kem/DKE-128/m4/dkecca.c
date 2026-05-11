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

void DKEM128_keygen_derand(uint8_t pk[DKE1_PKBYTES],
                           uint8_t sk[DKE1_SKBYTES],
                           const uint8_t coins[DKE1_SEEDBYTES + DKE1_SSBYTES])
{
    DKE1CPA_keygen_derand(pk, sk, coins);
    memcpy(sk + DKE1_CPA_SKBBYTES, pk, DKE1_PKBYTES); // sk = (skCPA | pk | rej)
    memcpy(sk + DKE1_CPA_SKBBYTES + DKE1_PKBYTES, coins + DKE1_SEEDBYTES, DKE1_SSBYTES);
    // sk = (skCPA | pk | rej)
}

void DKEM128_enc_derand(uint8_t ct[DKE1_CTBYTES],
                        uint8_t k[DKE1_SSBYTES],
                        const uint8_t pk[DKE1_PKBYTES],
                        const uint8_t coins[DKE1_SEEDBYTES])
{

    uint8_t r[2 * DKE1_SSBYTES];        // will contain r
    uint8_t ss[DKE1_SSBYTES];           // will contain provisional shared secret
    uint8_t buffer[2 * DKE1_SEEDBYTES]; // will contain (coins|seed)

    memcpy(buffer, coins, DKE1_SEEDBYTES);
    memcpy(buffer + DKE1_SEEDBYTES, pk + DKE1_PKBYTES - DKE1_SEEDBYTES, DKE1_SEEDBYTES);
#ifdef USE_KECCAK
    shake256(r, 2 * DKE1_SSBYTES, buffer, 2 * DKE1_SEEDBYTES);
#else   
    pseudoXOF(16 * DKE1_SSBYTES, buffer, DKE1_SEEDBYTES * 16, r);
#endif
    // CPA protocol
    DKE1CPA_enc_derand(ct,
                       ss,
                       pk,
                       r);

    // In place one time pad
    unsigned int i = 0;
    for (i = 0; i < DKE1_SSBYTES; i++)
    {
        ss[i] ^= coins[i];
    }

    // Emplace the tag
    memcpy(ct + DKE1_CPA_CTBYTES, ss, DKE1_SSBYTES);

    // K <- H(ss|ct)
    uint8_t ssct[DKE1_SSBYTES + DKE1_CTBYTES];
    memcpy(ssct, ss, DKE1_SSBYTES);
    memcpy(ssct + DKE1_SSBYTES, ct, DKE1_CTBYTES);

#ifdef USE_KECCAK
    sha3_256(k, ssct, DKE1_SSBYTES + DKE1_CTBYTES);
#else   
    sm3hash(256, ssct, (DKE1_SSBYTES + DKE1_CTBYTES)*8, k);
#endif
}

void DKEM128_dec(uint8_t ss[DKE1_SSBYTES],
                 const uint8_t sk[DKE1_SKBYTES],
                 const uint8_t ct[DKE1_CTBYTES])
{

    int fail;                    // will be 1 if ctA != ctB
    uint8_t coins[DKE1_SSBYTES]; // will contain the tag and,
                                 // after undoing the OTP, the randomness coins
    uint8_t ssA[DKE1_SSBYTES];
    memcpy(coins, ct + DKE1_CPA_CTBYTES, DKE1_SSBYTES);
    // At this stage, coins is yet the tag

    // CPA decryption
    DKE1CPA_dec(ssA, sk, ct);

    // Undo in place one time pad
    unsigned int i = 0;
    for (i = 0; i < DKE1_SSBYTES; i++)
    {
        coins[i] ^= ssA[i];
    }

    // Re-encript
    uint8_t ctA[DKE1_CTBYTES];
    uint8_t k[DKE1_SSBYTES]; // will contain true key

    // CPA FO encryption
    DKEM128_enc_derand(ctA,
                       k,
                       sk + DKE1_CPA_SKABYTES,
                       coins);

    // ct == ctA?
    fail = DKE1_verify(ct, ctA, DKE1_CTBYTES);

    // rejection key

    uint8_t rejct[DKE1_SSBYTES + DKE1_CTBYTES];
    memcpy(rejct, sk + DKE1_SKBYTES - DKE1_SSBYTES, DKE1_SSBYTES);
    memcpy(rejct + DKE1_SSBYTES, ct, DKE1_CTBYTES);

    // rej_key -> ss
#ifdef USE_KECCAK
    sha3_256(ss, rejct, DKE1_SSBYTES + DKE1_CTBYTES);
#else
    sm3hash(256, rejct, (DKE1_SSBYTES + DKE1_CTBYTES)*8, ss);
#endif
    // Implicit rejection
    DKE1_cmov(ss, k, DKE1_SSBYTES, (uint8_t)(1 - fail));
}
