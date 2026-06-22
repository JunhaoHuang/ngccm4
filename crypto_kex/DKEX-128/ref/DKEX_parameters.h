#ifndef DKEX_PARAMETERS_H
#define DKEX_PARAMETERS_H

/*
DKEX-128 (KEX + SIG, 3-pass mutual auth) parameters.

Sizes are stated in BITS
*/
#include "parameters.h"
#include "dkex_sig.h"

/* Number of protocol passes. */
#define DKEX1_PASSES_NUM       3

/* Lattice dimension N (= 256 for DKEX-128). */
#define DKEX1_N                DKE1_N

/* DKE (CPA) primitive sizes for the ephemeral KEM (BITS).*/
#define DKEX1_SEEDBITS         (8 * (DKE1_SEEDBYTES))
#define DKEX1_SSBITS           (8 * (DKE1_SSBYTES))
#define DKEX1_DKEPKBITS       (8 * (DKE1_PKBYTES))         /* M_1 size */
#define DKEX1_DKESKBITS       (8 * (DKE1_CPA_SKABYTES))    /* sk_e size */
#define DKEX1_DKECTBITS       (8 * (DKE1_CPA_CTBYTES))     /* M_2 size */

/* SIG primitive sizes (from dkex_sig.h, in BITS). */
#define DKEX1_SIGPKBITS        DKEX_SIG_PKBITS
#define DKEX1_SIGSKBITS        DKEX_SIG_SKBITS
#define DKEX1_SIGSNBITS        DKEX_SIG_SNBITS

/* Long-term-key sizes exposed to ICCS (BITS).
   Both sides carry a SIG key pair. */
#define DKEX1_PKBITS           DKEX1_SIGPKBITS
#define DKEX1_SKBITS           DKEX1_SIGSKBITS

/* Final shared-key bit-length. */
#define DKEX1_KDF_OUTBITS      DKEX1_SSBITS
/* KDF input = final state st = ss || T (2N bits). */
#define DKEX1_KDF_INBITS       (2 * DKEX1_SSBITS)

/* Wire-message sizes (BITS). */
#define DKEX1_M1_BITS          (DKEX1_DKEPKBITS)
#define DKEX1_M2_BITS          (DKEX1_DKECTBITS + DKEX1_SIGSNBITS)
#define DKEX1_M3_BITS          (DKEX1_SIGSNBITS)
#define DKEX1_TOTAL_MSG_BITS   (DKEX1_M1_BITS + DKEX1_M2_BITS + DKEX1_M3_BITS)

/* State buffer sizes (BITS).
   Stage transitions are:
       init_a:  st_A = pk_A
       pass1:   st_A = sk_e || M_1 || pk_A
       pass3:   st_A = ss || T          (final secret folds both ss and T)

       init_b:  st_B = pk_B
       pass2:   st_B = ss || T
 */
#define DKEX1_STA_PASS1_BITS   (DKEX1_DKESKBITS + DKEX1_DKEPKBITS + DKEX1_SIGPKBITS)
#define DKEX1_STA_PASS3_BITS   (2 * DKEX1_SSBITS)       /* ss || T */
#define DKEX1_STA_MAX_BITS     DKEX1_STA_PASS1_BITS    /* pass1 layout is largest */
#define DKEX1_STB_PASS2_BITS   (2 * DKEX1_SSBITS)       /* ss || T */


#define DKEX1_STB_MAX_BITS     (DKEX1_SIGPKBITS > DKEX1_STB_PASS2_BITS \
                                ? DKEX1_SIGPKBITS : DKEX1_STB_PASS2_BITS)

/* Bit-offsets into st_A after pass1 */
#define DKEX1_STA_OFF_SK_E_BITS  0
#define DKEX1_STA_OFF_M1_BITS    (DKEX1_DKESKBITS)
#define DKEX1_STA_OFF_PK_A_BITS  (DKEX1_DKESKBITS + DKEX1_DKEPKBITS)

/* Bit-offsets into st_A after pass3 = ss || T */
#define DKEX1_STA_OFF_SS_BITS    0
#define DKEX1_STA_OFF_T_BITS     (DKEX1_SSBITS)

/* Bit-offsets into st_B after pass2 = ss || T */
#define DKEX1_STB_OFF_SS_BITS    0
#define DKEX1_STB_OFF_T_BITS     (DKEX1_SSBITS)
#define DKEX1_STB_OFF_PK_B_BITS  0

/* Bit-offsets into m_2 = M_2 || sigma_B. */
#define DKEX1_M2_OFF_M2_BITS     0
#define DKEX1_M2_OFF_SIGMA_BITS  (DKEX1_DKECTBITS)

/* Randomness consumed by each derandomized call (BITS).
   init_a / init_b : SIG keygen consumes DKEX_SIG_COINBITS coins
   pass1           : DKE.Initiate consumes SEEDBITS (= N)
   pass2           : DKE.Response consumes SEEDBITS + N = 2N bits */
#define DKEX1_INIT_A_COINBITS         DKEX_SIG_COINBITS
#define DKEX1_INIT_B_COINBITS         DKEX_SIG_COINBITS
#define DKEX1_PASS1_COINBITS          (DKEX1_SEEDBITS)
#define DKEX1_PASS2_DKE_COINBITS     (DKEX1_SEEDBITS + DKEX1_N)

/* Domain-separation labels */
#define DKEX1_LABEL_A          "DKEX-KSIG-128-A"
#define DKEX1_LABEL_B          "DKEX-KSIG-128-B"
#define DKEX1_LABEL_BITS       128


/* Single transcript binder T = H(LABEL_A || LABEL_B || pk_A || pk_B || M_1 || M_2; N). */
#define DKEX1_TRANSCRIPT_BITS  (2 * DKEX1_LABEL_BITS + 2 * DKEX1_SIGPKBITS + DKEX1_DKEPKBITS + DKEX1_DKECTBITS)

#endif /* DKEX_PARAMETERS_H */
