/*
 * Cortex-M4 packed compression/decompression for DAWN-Prime-256.
 *
 * Each input word holds two non-negative int16_t coefficients.  SMULWB and
 * SMULWT compute the signed 32x16 products and return product[47:16], which
 * is exactly floor(a[i] * scale / 2^16) for the documented input ranges.
 * PKHBT then packs the two 16-bit results back into one word.
 *
 * Contract used by the M4 backend:
 *   - a is 32-bit aligned and contains ZEN_N == 1024 coefficients;
 *   - poly_compress inputs are in [0, 768];
 *   - poly_decompress inputs are in [0, 255].
 */

.syntax unified
.cpu cortex-m4
.thumb

.macro scale_q16_function name, scale_lo, scale_hi
.align 2
.global \name
.type \name, %function
.thumb_func
\name:
    push.w {r4-r10, lr}

    add.w r1, r0, #2048
    movw r2, #\scale_lo
.if \scale_hi
    movt r2, #\scale_hi
.endif

1:
    ldm r0, {r3-r6}

    /* Four independent low-lane products. */
    smulwb r7,  r2, r3
    smulwb r8,  r2, r4
    smulwb r9,  r2, r5
    smulwb r10, r2, r6

    /* Four independent high-lane products. */
    smulwt r3, r2, r3
    smulwt r4, r2, r4
    smulwt r5, r2, r5
    smulwt r6, r2, r6

    /* low_result[15:0] | high_result[15:0] << 16 */
    pkhbt r3, r7,  r3, lsl #16
    pkhbt r4, r8,  r4, lsl #16
    pkhbt r5, r9,  r5, lsl #16
    pkhbt r6, r10, r6, lsl #16

    stm r0!, {r3-r6}
    cmp r0, r1
    bne 1b

    pop.w {r4-r10, pc}
.size \name, . - \name
.endm

scale_q16_function poly_compress,   21817, 0
scale_q16_function poly_decompress, 0x0100, 3
