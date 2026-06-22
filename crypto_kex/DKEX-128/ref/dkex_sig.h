#ifndef DKEX_SIG_H
#define DKEX_SIG_H

/*
DKEX (KEX + SIG) — backend-agnostic SIG adapter.

The KEX layer (KEX_AlgorithmInstance.c, dkex_derand.c) only ever sees
this header and the `dkex_sig_*` functions; it never knows which
underlying SIG primitive is in use. To swap SIG primitives, change the
CMake backend flag and link a different `dkex_sig_<backend>.c`.

Currently supported backends:
    DKEX_SIG_BACKEND_MLDSA   pq-crystals ML-DSA (FIPS 204).
                              DKEX_SIG_MLDSA_LEVEL selects 2 (44),
                              3 (65), or 5 (87).

The backend macro and level macro are passed by CMake via -D.
To add a new backend (e.g. Falcon, SLH-DSA, a custom scheme):
    1. Add a parallel #if block here with PKBITS/SKBITS/SNBITS/COINBITS.
    2. Implement dkex_sig_keygen/sign/verify in dkex_sig_<backend>.c.
    3. Update CMake to set -DDKEX_SIG_BACKEND_<X> and compile the
       corresponding adapter source instead.
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
/* ML-DSA crypto_sign_keypair pulls one SEEDBYTES (32 B = 256 b) block
   from randombytes(). Our adapter routes that block from caller-supplied
   coins via a randombytes() hook (see randombytes.c). */
#  define DKEX_SIG_COINBITS    (8 * 32)
#endif

#ifdef __cplusplus
extern "C"
{
#endif

    /* Generate a SIG key pair from caller-supplied coins.
       For ML-DSA the coins are the keygen seed (32 bytes), routed into
       crypto_sign_keypair via the local randombytes() hook.            */
    void dkex_sig_keygen(
        uint8_t       pk   [DKEX_SIG_PKBITS   / 8],
        uint8_t       sk   [DKEX_SIG_SKBITS   / 8],
        const uint8_t coins[DKEX_SIG_COINBITS / 8]);

    /* Sign a message with sk. Deterministic (the underlying SIG is
       called via its internal API with zeroed per-sig randomness). */
    void dkex_sig_sign(
        uint8_t       sigma[DKEX_SIG_SNBITS / 8],
        const uint8_t sk   [DKEX_SIG_SKBITS / 8],
        const uint8_t *msg, unsigned long long msg_bits);

    /* Verify a signature. Returns 1 if valid, 0 otherwise. */
    int dkex_sig_verify(
        const uint8_t pk   [DKEX_SIG_PKBITS / 8],
        const uint8_t sigma[DKEX_SIG_SNBITS / 8],
        const uint8_t *msg, unsigned long long msg_bits);

    /* Coin-injection hook used by our randombytes.c. The backend
       adapter (dkex_sig_mldsa.c) owns the injection state; randombytes.c
       calls this on every request and falls back to drng_algorithm if
       no coins are pending. Returns 0 on hit, -1 to fall back. */
    int dkex_sig_random_hook(uint8_t *out, unsigned long long outlen);

#ifdef __cplusplus
}
#endif
#endif /* DKEX_SIG_H */
