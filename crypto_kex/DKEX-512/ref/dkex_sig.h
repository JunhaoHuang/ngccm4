#ifndef DKEX_SIG_H
#define DKEX_SIG_H

/*
DKEX (KEX + SIG) — backend-agnostic SIG adapter.
DKEX-512 default backend: ML-DSA-87 (FIPS 204 Cat 5, 256-bit classical).
This caps long-term authenticity at 256-bit; ephemeral KEX (DKE-512)
remains 512-bit. No standard PQ SIG exceeds Cat 5 today.
*/

#include <stdint.h>

#if !defined(DKEX_SIG_BACKEND_MLDSA)
#  error "No DKEX_SIG_BACKEND_* selected. CMake must define one of: DKEX_SIG_BACKEND_MLDSA."
#endif

#if defined(DKEX_SIG_BACKEND_MLDSA)
#  if !defined(DKEX_SIG_MLDSA_LEVEL)
#    error "DKEX_SIG_BACKEND_MLDSA selected but DKEX_SIG_MLDSA_LEVEL is not set (use 2, 3, or 5)."
#  endif
#  if   DKEX_SIG_MLDSA_LEVEL == 2          /* ML-DSA-44 */
#    define DKEX_SIG_PKBITS    (8 * 1312)
#    define DKEX_SIG_SKBITS    (8 * 2560)
#    define DKEX_SIG_SNBITS    (8 * 2420)
#  elif DKEX_SIG_MLDSA_LEVEL == 3          /* ML-DSA-65 */
#    define DKEX_SIG_PKBITS    (8 * 1952)
#    define DKEX_SIG_SKBITS    (8 * 4032)
#    define DKEX_SIG_SNBITS    (8 * 3309)
#  elif DKEX_SIG_MLDSA_LEVEL == 5          /* ML-DSA-87 */
#    define DKEX_SIG_PKBITS    (8 * 2592)
#    define DKEX_SIG_SKBITS    (8 * 4896)
#    define DKEX_SIG_SNBITS    (8 * 4627)
#  else
#    error "DKEX_SIG_MLDSA_LEVEL must be 2, 3, or 5."
#  endif
#  define DKEX_SIG_COINBITS    (8 * 32)
#endif

#ifdef __cplusplus
extern "C"
{
#endif

    void dkex_sig_keygen(
        uint8_t       pk   [DKEX_SIG_PKBITS   / 8],
        uint8_t       sk   [DKEX_SIG_SKBITS   / 8],
        const uint8_t coins[DKEX_SIG_COINBITS / 8]);

    void dkex_sig_sign(
        uint8_t       sigma[DKEX_SIG_SNBITS / 8],
        const uint8_t sk   [DKEX_SIG_SKBITS / 8],
        const uint8_t *msg, unsigned long long msg_bits);

    int dkex_sig_verify(
        const uint8_t pk   [DKEX_SIG_PKBITS / 8],
        const uint8_t sigma[DKEX_SIG_SNBITS / 8],
        const uint8_t *msg, unsigned long long msg_bits);

    int dkex_sig_random_hook(uint8_t *out, unsigned long long outlen);

#ifdef __cplusplus
}
#endif
#endif /* DKEX_SIG_H */
