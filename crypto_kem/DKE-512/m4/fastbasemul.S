/******************************************************************************
* Improved Plantard arithmetic for DKEM-512 on Cortex-M4.
******************************************************************************/

#include "macros.i"

.syntax unified
.cpu cortex-m4
.thumb

.global basemul_asm
.type basemul_asm, %function
.align 2
basemul_asm:
	push {r4-r11, lr}

	rptr    .req r0
	aptr    .req r1
	bptr    .req r2
	zetaptr .req r3
	poly0   .req r4
	poly1   .req r6
	poly2   .req r5
	poly3   .req r7
	q       .req r8
	qa      .req r14
	qinv    .req r9
	tmp     .req r10
	tmp2    .req r11
	zeta    .req r12
	loop    .req r14

	movt  q, #7681
	movw qinv, #57857
	movt qinv, #35715

	movw loop, #128
1:
	vmov.w s0, loop
	movw qa, #30724

	ldrd poly0, poly2, [aptr], #8
	ldrd poly1, poly3, [bptr], #8
	ldr.w zeta, [zetaptr], #4

	smulwt tmp, zeta, poly1
	smlabt tmp, tmp, q, qa
	smultt tmp, poly0, tmp
	smlabb tmp, poly0, poly1, tmp
	plant_red q, qa, qinv, tmp
	// r[0] in upper half of tmp

	smuadx tmp2, poly0, poly1
	plant_red q, qa, qinv, tmp2
	pkhtb tmp, tmp2, tmp, asr#16
	str tmp, [rptr], #4

	neg zeta, zeta

	smulwt tmp, zeta, poly3
	smlabt tmp, tmp, q, qa
	smultt tmp, poly2, tmp
	smlabb tmp, poly2, poly3, tmp
	plant_red q, qa, qinv, tmp

	smuadx tmp2, poly2, poly3
	plant_red q, qa, qinv, tmp2
	pkhtb tmp, tmp2, tmp, asr#16
	str tmp, [rptr], #4

	vmov.w loop, s0
	subs.w loop, #1
	bne.w 1b

	.unreq rptr
	.unreq aptr
	.unreq bptr
	.unreq zetaptr
	.unreq poly0
	.unreq poly1
	.unreq poly2
	.unreq poly3
	.unreq q
	.unreq qa
	.unreq qinv
	.unreq tmp
	.unreq tmp2
	.unreq zeta
	.unreq loop

	pop {r4-r11, pc}

.global basemul_asm_acc
.type basemul_asm_acc, %function
.align 2
basemul_asm_acc:
	push {r4-r11, lr}

	rptr    .req r0
	aptr    .req r1
	bptr    .req r2
	zetaptr .req r3
	poly0   .req r4
	poly1   .req r6
	poly2   .req r5
	poly3   .req r7
	q       .req r8
	qa      .req r14
	qinv    .req r9
	tmp     .req r10
	tmp2    .req r11
	zeta    .req r12
	loop    .req r14

	movt  q, #7681
	movw qinv, #57857
	movt qinv, #35715

	movw loop, #128
1:
	vmov.w s0, loop
	movw qa, #30724

	ldrd poly0, poly2, [aptr], #8
	ldrd poly1, poly3, [bptr], #8
	ldr.w zeta, [zetaptr], #4

	smulwt tmp, zeta, poly1
	smlabt tmp, tmp, q, qa
	smultt tmp, poly0, tmp
	smlabb tmp, poly0, poly1, tmp
	plant_red q, qa, qinv, tmp

	smuadx tmp2, poly0, poly1
	plant_red q, qa, qinv, tmp2
	pkhtb tmp, tmp2, tmp, asr#16
	ldr.w tmp2, [rptr]
	uadd16 tmp, tmp, tmp2
	str.w tmp, [rptr], #4

	neg zeta, zeta

	smulwt tmp, zeta, poly3
	smlabt tmp, tmp, q, qa
	smultt tmp, poly2, tmp
	smlabb tmp, poly2, poly3, tmp
	plant_red q, qa, qinv, tmp

	smuadx tmp2, poly2, poly3
	plant_red q, qa, qinv, tmp2
	pkhtb tmp, tmp2, tmp, asr#16
	ldr.w tmp2, [rptr]
	uadd16 tmp, tmp, tmp2
	str.w tmp, [rptr], #4

	vmov.w loop, s0
	subs.w loop, #1
	bne.w 1b

	.unreq rptr
	.unreq aptr
	.unreq bptr
	.unreq zetaptr
	.unreq poly0
	.unreq poly1
	.unreq poly2
	.unreq poly3
	.unreq q
	.unreq qa
	.unreq qinv
	.unreq tmp
	.unreq tmp2
	.unreq zeta
	.unreq loop

	pop {r4-r11, pc}
