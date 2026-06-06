/**
 * Cortex-M4 fixed-time helpers for ZEN Swift 128 binary polynomial operations.
 *
 * These routines preserve the loop structure and masked updates of the C
 * reference while avoiding calls to memset/memcpy in the hot paths.
 */

#include "macros.i"

.syntax unified
.cpu cortex-m4
.thumb


#### multiply in R2 with public degree n #################################
#### r0: a; r1: b; r2: n; r3: res                                      ##
##########################################################################
.align 2
.global mul_in_R2_n_asm
.type mul_in_R2_n_asm, %function
mul_in_R2_n_asm:
    push {r4-r11, lr}

    aptr        .req r4
    bptr        .req r5
    ncoef       .req r6
    resbase     .req r7
    tmpbytes    .req r8
    tmpbase     .req r9
    coeffbytes  .req r10
    loop        .req r11
    tmp0        .req r0
    tmp1        .req r1
    tmp2        .req r2
    tmp3        .req r3
    tmp4        .req r12

    
    pop {r4-r11, pc}

.unreq aptr
.unreq bptr
.unreq ncoef
.unreq resbase
.unreq tmpbytes
.unreq tmpbase
.unreq coeffbytes
.unreq loop
.unreq tmp0
.unreq tmp1
.unreq tmp2
.unreq tmp3
.unreq tmp4


#### fixed multiply in R2 for FastInversion ##############################
#### r0: a; r1: duplicated b[2 * ZEN_SWIFT_N4]; r2: res                ##
##########################################################################
.align 2
.global mulf_in_R2_N4_asm
.type mulf_in_R2_N4_asm, %function
mulf_in_R2_N4_asm:
    push {r4-r8, lr}

    aptr    .req r4
    vstart  .req r5
    resbase .req r6
    outer   .req r7
    acc     .req r8
    mask    .req r0
    vptr    .req r1
    rptr    .req r2
    inner   .req r3
    val     .req r12

    mov aptr, r0
    add.w vstart, r1, #256
    mov resbase, r2

    /* memset(res, 0, ZEN_SWIFT_N4 * sizeof(int16_t)) */
    mov rptr, resbase
    movs outer, #128
    movs val, #0
1:
    strh.w val, [rptr], #2
    subs outer, #1
    bne 1b

    movs outer, #128
2:
    ldrh mask, [aptr], #2
    and.w mask, mask, #1
    rsb mask, mask, #0

    mov vptr, vstart
    mov rptr, resbase
    movs inner, #128
3:
    ldrh val, [vptr], #2
    and.w val, val, mask
    ldrh acc, [rptr]
    eor.w acc, acc, val
    strh.w acc, [rptr], #2
    subs inner, #1
    bne 3b

    subs vstart, #2
    subs outer, #1
    bne 2b

    pop {r4-r8, pc}

.unreq aptr
.unreq vstart
.unreq resbase
.unreq outer
.unreq acc
.unreq mask
.unreq vptr
.unreq rptr
.unreq inner
.unreq val
