/*
DKEX (KEX + SIG) — ML-DSA adapter (pq-crystals reference, FIPS 204).

Thin shim from the backend-agnostic `dkex_sig_*` API into the
upstream `crypto_sign_*` API. Selected by `-DDKEX_SIG_BACKEND_MLDSA
-DDKEX_SIG_MLDSA_LEVEL={2,3,5}` at compile time; the level macro is
forwarded to the upstream source via `-DDILITHIUM_MODE=<level>`.

Determinism strategy:
  - Keygen randomness:   coins -> randombytes() via the hook below.
  - Signing randomness:  zero RND, called through crypto_sign_signature_internal.
  - Verify:              pure function.
*/

#include <string.h>
#include <stddef.h>
#include <stdint.h>

#include "dkex_sig.h"

#include "sign.h"
#include "params.h"

/* ---------- Coin injection ---------- */
/* randombytes.c forwards every request here. We return 0 if we satisfied
   the request from injected coins; -1 makes randombytes.c fall back to
   the global DRNG. */

static const uint8_t *g_coin_buf = NULL;
static unsigned long long g_coin_remaining = 0;

int dkex_sig_random_hook(uint8_t *out, unsigned long long outlen)
{
    if (g_coin_buf == NULL || outlen > g_coin_remaining) return -1;
    memcpy(out, g_coin_buf, (size_t)outlen);
    g_coin_buf += outlen;
    g_coin_remaining -= outlen;
    return 0;
}

static void coins_inject(const uint8_t *buf, unsigned long long len)
{
    g_coin_buf = buf;
    g_coin_remaining = len;
}

static void coins_clear(void)
{
    g_coin_buf = NULL;
    g_coin_remaining = 0;
}

/* ---------- dkex_sig API ---------- */

void dkex_sig_keygen(
    uint8_t       pk   [DKEX_SIG_PKBITS   / 8],
    uint8_t       sk   [DKEX_SIG_SKBITS   / 8],
    const uint8_t coins[DKEX_SIG_COINBITS / 8])
{
    coins_inject(coins, DKEX_SIG_COINBITS / 8);
    (void)crypto_sign_keypair(pk, sk);
    coins_clear();
}

void dkex_sig_sign(
    uint8_t       sigma[DKEX_SIG_SNBITS / 8],
    const uint8_t sk   [DKEX_SIG_SKBITS / 8],
    const uint8_t *msg, unsigned long long msg_bits)
{
    /* Deterministic sign via the _internal entrypoint with rnd = 0.
       The prefix encodes the (empty) context per FIPS 204 §5.4. */
    uint8_t pre[2] = { 0, 0 };           /* domain-byte 0, ctxlen 0 */
    uint8_t rnd[RNDBYTES];
    size_t siglen = 0;
    memset(rnd, 0, sizeof rnd);

    (void)crypto_sign_signature_internal(
        sigma, &siglen,
        msg, (size_t)(msg_bits / 8),
        pre, sizeof pre,
        rnd,
        sk);

    /* If the underlying scheme produced a shorter signature than our
       constant SNBYTES (ML-DSA does not; siglen == CRYPTO_BYTES), pad
       the rest with zeros so the wire format is fixed. */
    if (siglen < (DKEX_SIG_SNBITS / 8)) {
        memset(sigma + siglen, 0, (DKEX_SIG_SNBITS / 8) - siglen);
    }
}

int dkex_sig_verify(
    const uint8_t pk   [DKEX_SIG_PKBITS / 8],
    const uint8_t sigma[DKEX_SIG_SNBITS / 8],
    const uint8_t *msg, unsigned long long msg_bits)
{
    uint8_t pre[2] = { 0, 0 };
    int rc = crypto_sign_verify_internal(
        sigma, (size_t)(DKEX_SIG_SNBITS / 8),
        msg, (size_t)(msg_bits / 8),
        pre, sizeof pre,
        pk);
    return (rc == 0) ? 1 : 0;
}
