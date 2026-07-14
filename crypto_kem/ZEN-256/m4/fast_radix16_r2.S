/**
 * Copyright (c) 2023 Junhao Huang (jhhuang_nuaa@126.com)
 *
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.syntax unified
.cpu cortex-m4
.thumb

#include "../../common/r2_radix16_mul_generated.inc"

// int poly_xor4_radix16_asm(uint32_t r[32], const int16_t a[1024])
// Folds modulo x^(N/4)+1, packs 8 binary coefficients per word into
// nibble lanes 0,4,...,28, and returns the Z2 non-invertibility flag.
.align 2
.global poly_xor4_radix16_asm
.type poly_xor4_radix16_asm, %function
poly_xor4_radix16_asm:
    push {r4-r11, r14}

    rptr    .req r0
    aptr    .req r1
    out     .req r2
    fold    .req r3
    acc     .req r4
    scale   .req r5
    poly0   .req r6
    poly1   .req r7
    poly2   .req r8
    poly3   .req r9
    tmp     .req r10
    loop    .req r11
    tmp2    .req r12

    movw scale, #1
    movt scale, #1
    movs acc, #0
    movw loop, #32
    .equ xor4_radix16_stride_256, 128*2*2

1:
    ldr.w poly0, [aptr, #0+xor4_radix16_stride_256*0]
    ldr.w poly1, [aptr, #0+xor4_radix16_stride_256*1]
    ldr.w poly2, [aptr, #0+xor4_radix16_stride_256*2]
    ldr.w poly3, [aptr, #0+xor4_radix16_stride_256*3]
    eor fold, poly0, poly1
    eor tmp, poly2, poly3
    eor fold, fold, tmp
    and fold, fold, scale
    and out, fold, #1
    orr out, out, fold, lsr #12
    and out, out, #0x11

    ldr.w poly0, [aptr, #4+xor4_radix16_stride_256*0]
    ldr.w poly1, [aptr, #4+xor4_radix16_stride_256*1]
    ldr.w poly2, [aptr, #4+xor4_radix16_stride_256*2]
    ldr.w poly3, [aptr, #4+xor4_radix16_stride_256*3]
    eor fold, poly0, poly1
    eor tmp, poly2, poly3
    eor fold, fold, tmp
    and fold, fold, scale
    and tmp2, fold, #1
    orr tmp2, tmp2, fold, lsr #12
    and tmp2, tmp2, #0x11
    orr out, out, tmp2, lsl #8

    ldr.w poly0, [aptr, #8+xor4_radix16_stride_256*0]
    ldr.w poly1, [aptr, #8+xor4_radix16_stride_256*1]
    ldr.w poly2, [aptr, #8+xor4_radix16_stride_256*2]
    ldr.w poly3, [aptr, #8+xor4_radix16_stride_256*3]
    eor fold, poly0, poly1
    eor tmp, poly2, poly3
    eor fold, fold, tmp
    and fold, fold, scale
    and tmp2, fold, #1
    orr tmp2, tmp2, fold, lsr #12
    and tmp2, tmp2, #0x11
    orr out, out, tmp2, lsl #16

    ldr.w poly0, [aptr, #12+xor4_radix16_stride_256*0]
    ldr.w poly1, [aptr, #12+xor4_radix16_stride_256*1]
    ldr.w poly2, [aptr, #12+xor4_radix16_stride_256*2]
    ldr.w poly3, [aptr, #12+xor4_radix16_stride_256*3]
    eor fold, poly0, poly1
    eor tmp, poly2, poly3
    eor fold, fold, tmp
    and fold, fold, scale
    and tmp2, fold, #1
    orr tmp2, tmp2, fold, lsr #12
    and tmp2, tmp2, #0x11
    orr out, out, tmp2, lsl #24

    str.w out, [rptr], #4
    eor acc, acc, out
    add aptr, aptr, #16
    subs loop, #1
    bne 1b

    eor acc, acc, acc, lsr #16
    eor acc, acc, acc, lsr #8
    eor acc, acc, acc, lsr #4
    and acc, acc, #1
    eor r0, acc, #1
    pop {r4-r11, pc}

.unreq rptr
.unreq aptr
.unreq out
.unreq fold
.unreq acc
.unreq scale
.unreq poly0
.unreq poly1
.unreq poly2
.unreq poly3
.unreq tmp
.unreq loop
.unreq tmp2