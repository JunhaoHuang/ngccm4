#include <stdint.h>
#include <string.h>
#include <stdio.h>
#include "params.h"
#include "poly.h"

void tenary1_8(int16_t *r, const uint8_t *buf)
{
    unsigned int i, j;
    int16_t t[ZEN_SWIFT_N * 3];

    poly_byte2bit_unpack(t, buf, ZEN_SWIFT_N * 3);

    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        r[i] = (t[i] - t[i + ZEN_SWIFT_N]) * t[i + 2 * ZEN_SWIFT_N];
    }
}

void tenary3_32(int16_t *r, const uint8_t *buf)
{
    unsigned int i, j;
    int16_t t[ZEN_SWIFT_N * 5];

    poly_byte2bit_unpack(t, buf, ZEN_SWIFT_N * 5);

    for(i = 0; i < ZEN_SWIFT_N; i++)
    {
        r[i] = ((t[i] & t[i + ZEN_SWIFT_N]) - (t[i + 2 * ZEN_SWIFT_N] & t[i + 3 * ZEN_SWIFT_N])) * t[i + 4 * ZEN_SWIFT_N];
    }
}