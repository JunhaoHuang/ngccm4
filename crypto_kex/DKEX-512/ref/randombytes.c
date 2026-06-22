/*
Local replacement for pq-crystals/dilithium/ref/randombytes.c.
Routes every randombytes() call through the dkex_sig coin hook, then
falls back to drng_algorithm so KAT runs are reproducible.
*/

#include <string.h>
#include <stddef.h>
#include <stdint.h>

#include "randombytes.h"
#include "dkex_sig.h"
#include "drng.h"

extern DRNG_ctx drng_algorithm;

void randombytes(uint8_t *out, size_t outlen)
{
    if (dkex_sig_random_hook(out, (unsigned long long)outlen) == 0) return;
    get_random_number(&drng_algorithm, out, (unsigned long long)outlen * 8);
}
