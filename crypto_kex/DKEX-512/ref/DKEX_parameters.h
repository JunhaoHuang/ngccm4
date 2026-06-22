#ifndef DKEX_PARAMETERS_H
#define DKEX_PARAMETERS_H

/*
DKEX-512 (KEX + SIG, 3-pass mutual auth) parameters.
Sizes are stated in BITS.

SIG primitive: ML-DSA-87 (Cat 5, 256-bit classical). No standard PQ
signature reaches 512-bit classical / >=256-bit quantum (see qna.txt §3),
so the composite long-term authenticity is capped at 256-bit. The
ephemeral DKE-512 KEX still provides 512-bit forward secrecy.
*/
#include "parameters.h"
#include "dkex_sig.h"

/* Number of protocol passes. */
#define DKEX3_PASSES_NUM       3

/* Lattice dimension N */
#define DKEX3_N                DKE3_N

/* DKE (CPA) primitive sizes for the ephemeral KEM (BITS). */
#define DKEX3_SEEDBITS         (8 * (DKE3_SEEDBYTES))
#define DKEX3_SSBITS           (8 * (DKE3_SSBYTES))
#define DKEX3_DKEPKBITS       (8 * (DKE3_PKBYTES))         /* M_1 size */
#define DKEX3_DKESKBITS       (8 * (DKE3_CPA_SKABYTES))    /* sk_e size */
#define DKEX3_DKECTBITS       (8 * (DKE3_CPA_CTBYTES))     /* M_2 size */

/* SIG primitive sizes (from dkex_sig.h, in BITS). */
#define DKEX3_SIGPKBITS        DKEX_SIG_PKBITS
#define DKEX3_SIGSKBITS        DKEX_SIG_SKBITS
#define DKEX3_SIGSNBITS        DKEX_SIG_SNBITS

/* Long-term-key sizes exposed to ICCS (BITS). */
#define DKEX3_PKBITS           DKEX3_SIGPKBITS
#define DKEX3_SKBITS           DKEX3_SIGSKBITS

/* Final shared-key bit-length (= n = 512 for this variant). */
#define DKEX3_KDF_OUTBITS      DKEX3_SSBITS
/* KDF input = final state st = ss || T (2N bits). */
#define DKEX3_KDF_INBITS       (2 * DKEX3_SSBITS)

/* Wire-message sizes (BITS). */
#define DKEX3_M1_BITS          (DKEX3_DKEPKBITS)
#define DKEX3_M2_BITS          (DKEX3_DKECTBITS + DKEX3_SIGSNBITS)
#define DKEX3_M3_BITS          (DKEX3_SIGSNBITS)
#define DKEX3_TOTAL_MSG_BITS   (DKEX3_M1_BITS + DKEX3_M2_BITS + DKEX3_M3_BITS)

/* State buffer sizes (BITS).
   Stage transitions are:
       init_a:  st_A = pk_A
       pass1:   st_A = sk_e || M_1 || pk_A
       pass3:   st_A = ss || T          (final secret folds both ss and T)

       init_b:  st_B = pk_B
       pass2:   st_B = ss || T
 */
#define DKEX3_STA_PASS1_BITS   (DKEX3_DKESKBITS + DKEX3_DKEPKBITS + DKEX3_SIGPKBITS)
#define DKEX3_STA_PASS3_BITS   (2 * DKEX3_SSBITS)       /* ss || T */
#define DKEX3_STA_MAX_BITS     DKEX3_STA_PASS1_BITS    /* pass1 layout is largest */
#define DKEX3_STB_PASS2_BITS   (2 * DKEX3_SSBITS)       /* ss || T */

#define DKEX3_STB_MAX_BITS     (DKEX3_SIGPKBITS > DKEX3_STB_PASS2_BITS \
                                ? DKEX3_SIGPKBITS : DKEX3_STB_PASS2_BITS)

/* Bit-offsets into st_A after pass1 */
#define DKEX3_STA_OFF_SK_E_BITS  0
#define DKEX3_STA_OFF_M1_BITS    (DKEX3_DKESKBITS)
#define DKEX3_STA_OFF_PK_A_BITS  (DKEX3_DKESKBITS + DKEX3_DKEPKBITS)

/* Bit-offsets into st_A after pass3 = ss || T */
#define DKEX3_STA_OFF_SS_BITS    0
#define DKEX3_STA_OFF_T_BITS     (DKEX3_SSBITS)

/* Bit-offsets into st_B after pass2 = ss || T */
#define DKEX3_STB_OFF_SS_BITS    0
#define DKEX3_STB_OFF_T_BITS     (DKEX3_SSBITS)
#define DKEX3_STB_OFF_PK_B_BITS  0

/* Bit-offsets into m_2 = M_2 || sigma_B. */
#define DKEX3_M2_OFF_M2_BITS     0
#define DKEX3_M2_OFF_SIGMA_BITS  (DKEX3_DKECTBITS)

/* Randomness consumed by each derandomized call (BITS).
   init_a / init_b : SIG keygen consumes DKEX_SIG_COINBITS coins
   pass1           : DKE.Initiate consumes SEEDBITS (= N)
   pass2           : DKE.Response consumes SEEDBITS + N = 2N bits */
#define DKEX3_INIT_A_COINBITS         DKEX_SIG_COINBITS
#define DKEX3_INIT_B_COINBITS         DKEX_SIG_COINBITS
#define DKEX3_PASS1_COINBITS          (DKEX3_SEEDBITS)
#define DKEX3_PASS2_DKE_COINBITS     (DKEX3_SEEDBITS + DKEX3_N)

/* Domain-separation labels */
#define DKEX3_LABEL_A          "DKEX-KSIG-512-A"
#define DKEX3_LABEL_B          "DKEX-KSIG-512-B"
#define DKEX3_LABEL_BITS       128

/* Single transcript binder T = H(LABEL_A || LABEL_B || pk_A || pk_B || M_1 || M_2; N). */
#define DKEX3_TRANSCRIPT_BITS  (2 * DKEX3_LABEL_BITS + 2 * DKEX3_SIGPKBITS + DKEX3_DKEPKBITS + DKEX3_DKECTBITS)

#endif /* DKEX_PARAMETERS_H */
