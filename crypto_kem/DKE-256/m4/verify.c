// Comes from https://github.com/PQClean/PQClean/blob/master/crypto_kem/ml-kem-768/clean/verify.c

// #include "compat.h"
#include "verify.h"
#if defined(__unix__) || defined(__APPLE__)
    #include <stddef.h>
#endif
#include <stdint.h>

extern void DKE_cmov_asm(uint8_t *r, const uint8_t *x, size_t len, uint8_t b);
extern int DKE_verify_asm(const uint8_t *a, const uint8_t *b, size_t len);

int DKE2_verify(const uint8_t *a, const uint8_t *b, size_t len) {
    return DKE_verify_asm(a, b, len);
}

void DKE2_cmov(uint8_t *r, const uint8_t *x, size_t len, uint8_t b) {
    DKE_cmov_asm(r, x, len, b);
}


void DKE2_cmov_int16(int16_t *r, int16_t v, uint16_t b) {
    b = -b;
    *r ^= b & ((*r) ^ v);
}
