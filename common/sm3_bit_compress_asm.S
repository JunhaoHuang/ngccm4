.syntax unified
.cpu cortex-m4
.thumb

.equ SM3_W_SIZE, 272
.equ SM3_LOCALS, 288
.equ SM3_DGST_OFF, 272
.equ SM3_MSG_OFF, 276
.equ SM3_BLOCKS_LO_OFF, 280
.equ SM3_BLOCKS_HI_OFF, 284

.global sm3_bit_compress_asm
.type sm3_bit_compress_asm, %function
.align 2
.thumb_func
sm3_bit_compress_asm:
    push {r4-r11, lr}
    sub sp, sp, #SM3_LOCALS

    str.w r0, [sp, #SM3_DGST_OFF]
    str.w r1, [sp, #SM3_MSG_OFF]
    str.w r2, [sp, #SM3_BLOCKS_LO_OFF]
    str.w r3, [sp, #SM3_BLOCKS_HI_OFF]

.Lsm3_block_check:
    ldr.w r2, [sp, #SM3_BLOCKS_LO_OFF]
    ldr.w r3, [sp, #SM3_BLOCKS_HI_OFF]
    orrs r2, r2, r3
    beq.w .Lsm3_done

    ldr.w r1, [sp, #SM3_MSG_OFF]
    mov r0, sp
    movs r2, #16
.Lsm3_load_w0_15:
    ldr.w r3, [r1], #4
    rev r3, r3
    str.w r3, [r0], #4
    subs r2, #1
    bne.w .Lsm3_load_w0_15
    str.w r1, [sp, #SM3_MSG_OFF]

    movs r2, #16
.Lsm3_expand:
    add.w r0, sp, r2, lsl #2
    ldr.w r1, [r0, #-64]
    ldr.w r3, [r0, #-36]
    eors r1, r1, r3
    ldr.w r3, [r0, #-12]
    ror.w r3, r3, #17
    eors r1, r1, r3
    mov r12, r1
    ror.w r3, r1, #17
    eors r12, r12, r3
    ror.w r3, r1, #9
    eors r12, r12, r3
    ldr.w r3, [r0, #-52]
    ror.w r3, r3, #25
    eors r12, r12, r3
    ldr.w r3, [r0, #-24]
    eors r12, r12, r3
    str.w r12, [r0]
    adds r2, #1
    cmp r2, #68
    bne.w .Lsm3_expand

    ldr.w r0, [sp, #SM3_DGST_OFF]
    ldm r0, {r4-r11}

    ldr r3, =0x79cc4519
    movs r2, #0
.Lsm3_round_0_15:
    ror.w r0, r4, #20
    add.w r1, r0, r8
    add.w r1, r1, r3
    ror.w r1, r1, #25
    eor.w r12, r1, r0

    eor.w lr, r4, r5
    eor.w lr, lr, r6
    add.w lr, lr, r7
    add.w lr, lr, r12

    add.w r0, sp, r2, lsl #2
    ldr.w r12, [r0]
    ldr.w r0, [r0, #16]
    eor.w r12, r12, r0
    add.w lr, lr, r12

    eor.w r0, r8, r9
    eor.w r0, r0, r10
    add.w r0, r0, r11
    add.w r0, r0, r1
    add.w r12, sp, r2, lsl #2
    ldr.w r12, [r12]
    add.w r0, r0, r12

    mov r7, r6
    ror.w r6, r5, #23
    mov r5, r4
    mov r4, lr
    mov r11, r10
    ror.w r10, r9, #13
    mov r9, r8
    eor.w r12, r0, r0, ror #23
    eor.w r8, r12, r0, ror #15
    ror.w r3, r3, #31

    adds r2, #1
    cmp r2, #16
    bne.w .Lsm3_round_0_15

    ldr r3, =0x7a879d8a
.Lsm3_round_16_63:
    ror.w r0, r4, #20
    add.w r1, r0, r8
    add.w r1, r1, r3
    ror.w r1, r1, #25
    eor.w r12, r1, r0

    and.w lr, r4, r5
    and.w r0, r4, r6
    orr.w lr, lr, r0
    and.w r0, r5, r6
    orr.w lr, lr, r0
    add.w lr, lr, r7
    add.w lr, lr, r12

    add.w r0, sp, r2, lsl #2
    ldr.w r12, [r0]
    ldr.w r0, [r0, #16]
    eor.w r12, r12, r0
    add.w lr, lr, r12

    eor.w r0, r9, r10
    and.w r0, r0, r8
    eor.w r0, r0, r10
    add.w r0, r0, r11
    add.w r0, r0, r1
    add.w r12, sp, r2, lsl #2
    ldr.w r12, [r12]
    add.w r0, r0, r12

    mov r7, r6
    ror.w r6, r5, #23
    mov r5, r4
    mov r4, lr
    mov r11, r10
    ror.w r10, r9, #13
    mov r9, r8
    eor.w r12, r0, r0, ror #23
    eor.w r8, r12, r0, ror #15
    ror.w r3, r3, #31

    adds r2, #1
    cmp r2, #64
    bne.w .Lsm3_round_16_63

    ldr.w r0, [sp, #SM3_DGST_OFF]
    ldr.w r1, [r0]
    eors r4, r4, r1
    str.w r4, [r0], #4
    ldr.w r1, [r0]
    eors r5, r5, r1
    str.w r5, [r0], #4
    ldr.w r1, [r0]
    eors r6, r6, r1
    str.w r6, [r0], #4
    ldr.w r1, [r0]
    eors r7, r7, r1
    str.w r7, [r0], #4
    ldr.w r1, [r0]
    eors r8, r8, r1
    str.w r8, [r0], #4
    ldr.w r1, [r0]
    eors r9, r9, r1
    str.w r9, [r0], #4
    ldr.w r1, [r0]
    eors r10, r10, r1
    str.w r10, [r0], #4
    ldr.w r1, [r0]
    eors r11, r11, r1
    str.w r11, [r0]

    ldr.w r2, [sp, #SM3_BLOCKS_LO_OFF]
    ldr.w r3, [sp, #SM3_BLOCKS_HI_OFF]
    subs r2, #1
    sbcs r3, #0
    str.w r2, [sp, #SM3_BLOCKS_LO_OFF]
    str.w r3, [sp, #SM3_BLOCKS_HI_OFF]
    b.w .Lsm3_block_check

.Lsm3_done:
    add sp, sp, #SM3_LOCALS
    pop {r4-r11, pc}
