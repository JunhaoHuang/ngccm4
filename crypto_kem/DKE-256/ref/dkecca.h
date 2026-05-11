#ifndef DKECCA_H
#define DKECCA_H

#include "parameters.h"
#include <stdint.h>

/// @brief Deterministically derives from coins a public and secret key for DKE(CCA)-256
/// @param[in]  coins random coins
/// @param[out] pk    public key
/// @param[out] sk    secret key
void DKEM256_keygen_derand(uint8_t pk[DKE2_PKBYTES],
                          uint8_t sk[DKE2_SKBYTES],
                          const uint8_t coins[DKE2_SEEDBYTES + DKE2_SSBYTES]);

/// @brief Deterministically derives a ciphertext and shared secret from the public
///        key and random coins for DKE(CCA)-256 (CPA ct | tag)
/// @param[out] ct      pointer to output ciphertext
/// @param[out] ss      pointer to output shared key
/// @param[in]  pk      pointer to input public key
/// @param[in]  coins   pointer to input random coins
void DKEM256_enc_derand(uint8_t ct[DKE2_CTBYTES],
                        uint8_t ss[DKE2_SSBYTES],
                        const uint8_t pk[DKE2_PKBYTES],
                        const uint8_t coins[DKE2_SEEDBYTES]);

/// @brief Deterministically derives a shared secret from the ciphertext
///        and own private key. Performs implicit rejection
/// @param[out] ss      pointer to output shared key
/// @param[in]  sk      pointer to input secret key
/// @param[in]  ct      pointer to input ciphertext
void DKEM256_dec(uint8_t ss[DKE2_SSBYTES],
                 const uint8_t sk[DKE2_SKBYTES],
                 const uint8_t ct[DKE2_CTBYTES]);

#endif //DKECCA_H
