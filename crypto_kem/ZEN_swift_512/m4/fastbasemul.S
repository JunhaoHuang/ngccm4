/**
 * ZEN_swift_512 16-coefficient NTT base multiplication.
 *
 * Each block is multiplied modulo x^16 = zeta.  The block products are
 * computed with macro-expanded Karatsuba kernels.  Product coefficients stay
 * in high-half Plantard form until the final store, matching the existing
 * public ABI:
 *   basemul16_karatsuba_asm(r, a, b, zetas_769)
 *   basemul16_karatsuba_mq_asm(r, a, b, zetas_769)
 */

#include "macros.i"

.syntax unified
.cpu cortex-m4
.thumb

.equ BM_P0, 0
.equ BM_P1, 60
.equ BM_PM, 120
.equ BM_AS, 180
.equ BM_BS, 196
.equ BM_TMP, 212
.equ BM_SAVE_R, 240
.equ BM_SAVE_A, 244
.equ BM_SAVE_B, 248
.equ BM_SAVE_Z, 252
.equ BM_FRAME_SIZE, 256

.macro make_sum8 as, bs, a, b, t0, t1
    ldr.w \t0, [\a, #0]
    ldr.w \t1, [\a, #16]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\as, #0]
    ldr.w \t0, [\b, #0]
    ldr.w \t1, [\b, #16]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\bs, #0]

    ldr.w \t0, [\a, #0+4*1]
    ldr.w \t1, [\a, #16+4*1]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\as, #0+4*1]
    ldr.w \t0, [\b, #0+4*1]
    ldr.w \t1, [\b, #16+4*1]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\bs, #0+4*1]

    ldr.w \t0, [\a, #0+4*2]
    ldr.w \t1, [\a, #16+4*2]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\as, #0+4*2]
    ldr.w \t0, [\b, #0+4*2]
    ldr.w \t1, [\b, #16+4*2]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\bs, #0+4*2]

    ldr.w \t0, [\a, #0+4*3]
    ldr.w \t1, [\a, #16+4*3]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\as, #0+4*3]
    ldr.w \t0, [\b, #0+4*3]
    ldr.w \t1, [\b, #16+4*3]
    sadd16.w \t0, \t0, \t1
    str.w \t0, [\bs, #0+4*3]
.endm

.macro compute_block_products
    str.w r0, [sp, #BM_SAVE_R]
    str.w r1, [sp, #BM_SAVE_A]
    str.w r2, [sp, #BM_SAVE_B]
    str.w r3, [sp, #BM_SAVE_Z]

    movw r8, #0
    movt r8, #769       @ q in the top halfword
    movw r9, #64769
    movt r9, #58632     @ Plantard qinv
    movw r10, #24608    @ qa

    add.w r0, sp, #BM_P0
    ldr.w r1, [sp, #BM_SAVE_A]
    ldr.w r2, [sp, #BM_SAVE_B]
    add.w r3, sp, #BM_TMP
    add.w r11, sp, #BM_AS
    add.w r12, sp, #BM_BS
    mul8_plant_hh r0, r1, r2, r3, r11, r12, r8, r10, r9, r4, r5, r6, r7, lr

    add.w r0, sp, #BM_P1
    ldr.w r1, [sp, #BM_SAVE_A]
    add.w r1, r1, #16
    ldr.w r2, [sp, #BM_SAVE_B]
    add.w r2, r2, #16
    add.w r3, sp, #BM_TMP
    add.w r11, sp, #BM_AS
    add.w r12, sp, #BM_BS
    mul8_plant_hh r0, r1, r2, r3, r11, r12, r8, r10, r9, r4, r5, r6, r7, lr

    add.w r11, sp, #BM_AS
    add.w r12, sp, #BM_BS
    ldr.w r1, [sp, #BM_SAVE_A]
    ldr.w r2, [sp, #BM_SAVE_B]
    make_sum8 r11, r12, r1, r2, r4, r5

    add.w r0, sp, #BM_PM
    mov r1, r11
    mov r2, r12
    add.w r3, sp, #BM_TMP
    mul8_plant_hh r0, r1, r2, r3, r1, r2, r8, r10, r9, r4, r5, r6, r7, lr
.endm

.macro setup_combine_ptrs
    add.w r0, sp, #BM_P0
    add.w r1, sp, #BM_P1
    add.w r2, sp, #BM_PM
    ldr.w r3, [sp, #BM_SAVE_R]
    ldr.w r7, [sp, #BM_SAVE_Z]
.endm

.macro cross_pair dst, idx, tmp
    ldr.w \dst, [r2, #(\idx * 2)]
    ldr.w \tmp, [r0, #(\idx * 2)]
    ssub16 \dst, \dst, \tmp
    ldr.w \tmp, [r1, #(\idx * 2)]
    ssub16 \dst, \dst, \tmp
.endm

.macro cross_lane dst, idx, tmp
    ldrh.w \dst, [r2, #(\idx * 2)]
    ldrh.w \tmp, [r0, #(\idx * 2)]
    ssub16 \dst, \dst, \tmp
    ldrh.w \tmp, [r1, #(\idx * 2)]
    ssub16 \dst, \dst, \tmp
.endm

.macro store_mq_pair val, idx, tmp, qtmp
    mul_twiddle_plant_mq \val, r11, \tmp, r8, r10, \qtmp
    str.w \val, [r3, #(\idx * 2)]
.endm

.macro store_mq_lane val, idx, tmp, qtmp
    smulwb \val, r11, \val
    smlabt \val, \val, r8, r10
    and \qtmp, r8, \val, asr #31
    sadd16 \val, \val, \qtmp
    asr \val, \val, #16
    strh.w \val, [r3, #(\idx * 2)]
.endm

.macro combine_low_pair_raw idx
    ldr.w r4, [r0, #(\idx * 2)]
    ldr.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_pair r6, (\idx + 8), r12
    mul_twiddle_plant r6, r7, r12, r8, r10
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    str.w r4, [r3, #(\idx * 2)]
.endm

.macro combine_low_pair_mq idx
    ldr.w r4, [r0, #(\idx * 2)]
    ldr.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_pair r6, (\idx + 8), r12
    mul_twiddle_plant r6, r7, r12, r8, r10
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    store_mq_pair r4, \idx, r5, r12
.endm

.macro combine_low_lane_raw idx
    ldrh.w r4, [r0, #(\idx * 2)]
    ldrh.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_lane r6, (\idx + 8), r12
    mul_twiddle_plant r6, r7, r12, r8, r10
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    strh.w r4, [r3, #(\idx * 2)]
.endm

.macro combine_low_lane_mq idx
    ldrh.w r4, [r0, #(\idx * 2)]
    ldrh.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_lane r6, (\idx + 8), r12
    mul_twiddle_plant r6, r7, r12, r8, r10
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    store_mq_lane r4, \idx, r5, r12
.endm

.macro combine_7_raw
    ldrh.w r4, [r0, #(7 * 2)]
    ldrh.w r5, [r1, #(7 * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    sadd16 r4, r4, r5
    strh.w r4, [r3, #(7 * 2)]
.endm

.macro combine_7_mq
    ldrh.w r4, [r0, #(7 * 2)]
    ldrh.w r5, [r1, #(7 * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    sadd16 r4, r4, r5
    store_mq_lane r4, 7, r5, r12
.endm

.macro combine_high_pair_raw idx
    ldr.w r4, [r0, #(\idx * 2)]
    ldr.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_pair r6, (\idx - 8), r12
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    str.w r4, [r3, #(\idx * 2)]
.endm

.macro combine_high_pair_mq idx
    ldr.w r4, [r0, #(\idx * 2)]
    ldr.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_pair r6, (\idx - 8), r12
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    store_mq_pair r4, \idx, r5, r12
.endm

.macro combine_high_lane_raw idx
    ldrh.w r4, [r0, #(\idx * 2)]
    ldrh.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_lane r6, (\idx - 8), r12
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    strh.w r4, [r3, #(\idx * 2)]
.endm

.macro combine_high_lane_mq idx
    ldrh.w r4, [r0, #(\idx * 2)]
    ldrh.w r5, [r1, #(\idx * 2)]
    mul_twiddle_plant r5, r7, r12, r8, r10
    cross_lane r6, (\idx - 8), r12
    sadd16 r4, r4, r5
    sadd16 r4, r4, r6
    store_mq_lane r4, \idx, r5, r12
.endm

.macro combine_15_raw
    cross_lane r4, 7, r12
    strh.w r4, [r3, #(15 * 2)]
.endm

.macro combine_15_mq
    cross_lane r4, 7, r12
    store_mq_lane r4, 15, r5, r12
.endm

.align 2
.thumb_func
.type basemul16_block_raw, %function
basemul16_block_raw:
    push.w {r4-r11, lr}
    sub.w sp, sp, #BM_FRAME_SIZE

    compute_block_products
    setup_combine_ptrs

    combine_low_pair_raw 0
    combine_low_pair_raw 2
    combine_low_pair_raw 4
    combine_low_lane_raw 6
    combine_7_raw
    combine_high_pair_raw 8
    combine_high_pair_raw 10
    combine_high_pair_raw 12
    combine_high_lane_raw 14
    combine_15_raw

    add.w sp, sp, #BM_FRAME_SIZE
    pop.w {r4-r11, pc}

.align 2
.thumb_func
.type basemul16_block_raw_mq, %function
basemul16_block_raw_mq:
    push.w {r4-r11, lr}
    sub.w sp, sp, #BM_FRAME_SIZE

    compute_block_products
    setup_combine_ptrs
    movw r11, #50793
    movt r11, #63916    @ beta^2*qinv conversion to normal domain

    combine_low_pair_mq 0
    combine_low_pair_mq 2
    combine_low_pair_mq 4
    combine_low_lane_mq 6
    combine_7_mq
    combine_high_pair_mq 8
    combine_high_pair_mq 10
    combine_high_pair_mq 12
    combine_high_lane_mq 14
    combine_15_mq

    add.w sp, sp, #BM_FRAME_SIZE
    pop.w {r4-r11, pc}

.align 2
.thumb_func
.global basemul16_karatsuba_asm
.type basemul16_karatsuba_asm, %function
basemul16_karatsuba_asm:
    push.w {r4-r8, lr}

    mov r4, r0          @ r pointer
    mov r5, r1          @ a pointer
    mov r6, r2          @ b pointer
    mov r7, r3          @ Plantard zeta table, zetas_769
    movs r8, #64        @ ZEN_SWIFT_N / 32

.Lraw_poly_loop:
    ldr.w r3, [r7], #4
    mov r0, r4
    mov r1, r5
    mov r2, r6
    bl basemul16_block_raw

    adds r4, r4, #32
    adds r5, r5, #32
    adds r6, r6, #32

    ldr.w r3, [r7, #-4]
    neg.w r3, r3
    mov r0, r4
    mov r1, r5
    mov r2, r6
    bl basemul16_block_raw

    adds r4, r4, #32
    adds r5, r5, #32
    adds r6, r6, #32
    subs r8, r8, #1
    bne.w .Lraw_poly_loop

    pop.w {r4-r8, pc}

.align 2
.thumb_func
.global basemul16_karatsuba_mq_asm
.type basemul16_karatsuba_mq_asm, %function
basemul16_karatsuba_mq_asm:
    push.w {r4-r8, lr}

    mov r4, r0          @ r pointer
    mov r5, r1          @ a pointer
    mov r6, r2          @ b pointer
    mov r7, r3          @ Plantard zeta table, zetas_769
    movs r8, #64        @ ZEN_SWIFT_N / 32

.Lmq_poly_loop:
    ldr.w r3, [r7], #4
    mov r0, r4
    mov r1, r5
    mov r2, r6
    bl basemul16_block_raw_mq

    adds r4, r4, #32
    adds r5, r5, #32
    adds r6, r6, #32

    ldr.w r3, [r7, #-4]
    neg.w r3, r3
    mov r0, r4
    mov r1, r5
    mov r2, r6
    bl basemul16_block_raw_mq

    adds r4, r4, #32
    adds r5, r5, #32
    adds r6, r6, #32
    subs r8, r8, #1
    bne.w .Lmq_poly_loop

    pop.w {r4-r8, pc}
