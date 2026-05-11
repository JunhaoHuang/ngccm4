#ifndef DKECCA_H
#define DKECCA_H

#include "parameters.h"
#include <stdint.h>



/// @brief Deterministically derives from coins a public and secret key for DKE(CCA)-512
/// @param[in]  coins random coins
/// @param[out] pk    public key
/// @param[out] sk    secret key
void DKEM512_keygen_derand(uint8_t pk[DKE3_PKBYTES],
                          uint8_t sk[DKE3_SKBYTES],
                          const uint8_t coins[DKE3_SEEDBYTES + DKE3_SSBYTES]);

/// @brief Deterministically derives a ciphertext and shared secret from the public
///        key and random coins for DKE(CCA)-512 (CPA ct | tag)
/// @param[out] ct      pointer to output ciphertext
/// @param[out] ss      pointer to output shared key
/// @param[in]  pk      pointer to input public key
/// @param[in]  coins   pointer to input random coins
void DKEM512_enc_derand(uint8_t ct[DKE3_CTBYTES],
                        uint8_t ss[DKE3_SSBYTES],
                        const uint8_t pk[DKE3_PKBYTES],
                        const uint8_t coins[DKE3_SEEDBYTES]);

/// @brief Deterministically derives a shared secret from the ciphertext
///        and own private key for DKE(CCA)-512. Performs implicit rejection
/// @param[out] ss      pointer to output shared key
/// @param[in]  sk      pointer to input secret key
/// @param[in]  ct      pointer to input ciphertext
void DKEM512_dec(uint8_t ss[DKE3_SSBYTES],
                 const uint8_t sk[DKE3_SKBYTES],
                 const uint8_t ct[DKE3_CTBYTES]);

#endif //DKECCA_H
