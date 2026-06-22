#ifndef DKEX_PARAMETERS_H
#define DKEX_PARAMETERS_H

/*
DKEX-256 (KEX + SIG, 3-pass mutual auth) parameters.
Sizes are stated in BITS.
*/
#include "parameters.h"
#include "dkex_sig.h"

/* Number of protocol passes. */
#define DKEX2_PASSES_NUM       3

/* Lattice dimension N */
#define DKEX2_N                DKE2_N

/* DKE (CPA) primitive sizes for the ephemeral KEM (BITS). */
#define DKEX2_SEEDBITS         (8 * (DKE2_SEEDBYTES))
#define DKEX2_SSBITS           (8 * (DKE2_SSBYTES))
#define DKEX2_DKEPKBITS       (8 * (DKE2_PKBYTES))         /* M_1 size */
#define DKEX2_DKESKBITS       (8 * (DKE2_CPA_SKABYTES))    /* sk_e size */
#define DKEX2_DKECTBITS       (8 * (DKE2_CPA_CTBYTES))     /* M_2 size */

/* SIG primitive sizes (from dkex_sig.h, in BITS). */
#define DKEX2_SIGPKBITS        DKEX_SIG_PKBITS
#define DKEX2_SIGSKBITS        DKEX_SIG_SKBITS
#define DKEX2_SIGSNBITS        DKEX_SIG_SNBITS

/* Long-term-key sizes exposed to ICCS (BITS). */
#define DKEX2_PKBITS           DKEX2_SIGPKBITS
#define DKEX2_SKBITS           DKEX2_SIGSKBITS

/* Final shared-key bit-length. */
#define DKEX2_KDF_OUTBITS      DKEX2_SSBITS
/* KDF input = final state st = ss || T (2N bits). */
#define DKEX2_KDF_INBITS       (2 * DKEX2_SSBITS)

/* Wire-message sizes (BITS). */
#define DKEX2_M1_BITS          (DKEX2_DKEPKBITS)
#define DKEX2_M2_BITS          (DKEX2_DKECTBITS + DKEX2_SIGSNBITS)
#define DKEX2_M3_BITS          (DKEX2_SIGSNBITS)
#define DKEX2_TOTAL_MSG_BITS   (DKEX2_M1_BITS + DKEX2_M2_BITS + DKEX2_M3_BITS)

/* State buffer sizes (BITS).
   Stage transitions are:
       init_a:  st_A = pk_A
       pass1:   st_A = sk_e || M_1 || pk_A
       pass3:   st_A = ss || T          (final secret folds both ss and T)

       init_b:  st_B = pk_B
       pass2:   st_B = ss || T
 */
#define DKEX2_STA_PASS1_BITS   (DKEX2_DKESKBITS + DKEX2_DKEPKBITS + DKEX2_SIGPKBITS)
#define DKEX2_STA_PASS3_BITS   (2 * DKEX2_SSBITS)       /* ss || T */
#define DKEX2_STA_MAX_BITS     DKEX2_STA_PASS1_BITS    /* pass1 layout is largest */
#define DKEX2_STB_PASS2_BITS   (2 * DKEX2_SSBITS)       /* ss || T */

#define DKEX2_STB_MAX_BITS     (DKEX2_SIGPKBITS > DKEX2_STB_PASS2_BITS \
                                ? DKEX2_SIGPKBITS : DKEX2_STB_PASS2_BITS)

/* Bit-offsets into st_A after pass1 */
#define DKEX2_STA_OFF_SK_E_BITS  0
#define DKEX2_STA_OFF_M1_BITS    (DKEX2_DKESKBITS)
#define DKEX2_STA_OFF_PK_A_BITS  (DKEX2_DKESKBITS + DKEX2_DKEPKBITS)

/* Bit-offsets into st_A after pass3 = ss || T */
#define DKEX2_STA_OFF_SS_BITS    0
#define DKEX2_STA_OFF_T_BITS     (DKEX2_SSBITS)

/* Bit-offsets into st_B after pass2 = ss || T */
#define DKEX2_STB_OFF_SS_BITS    0
#define DKEX2_STB_OFF_T_BITS     (DKEX2_SSBITS)
#define DKEX2_STB_OFF_PK_B_BITS  0

/* Bit-offsets into m_2 = M_2 || sigma_B. */
#define DKEX2_M2_OFF_M2_BITS     0
#define DKEX2_M2_OFF_SIGMA_BITS  (DKEX2_DKECTBITS)

/* Randomness consumed by each derandomized call (BITS).
   init_a / init_b : SIG keygen consumes DKEX_SIG_COINBITS coins
   pass1           : DKE.Initiate consumes SEEDBITS (= N)
   pass2           : DKE.Response consumes SEEDBITS + N = 2N bits */
#define DKEX2_INIT_A_COINBITS         DKEX_SIG_COINBITS
#define DKEX2_INIT_B_COINBITS         DKEX_SIG_COINBITS
#define DKEX2_PASS1_COINBITS          (DKEX2_SEEDBITS)
#define DKEX2_PASS2_DKE_COINBITS     (DKEX2_SEEDBITS + DKEX2_N)

/* Domain-separation labels */
#define DKEX2_LABEL_A          "DKEX-KSIG-256-A"
#define DKEX2_LABEL_B          "DKEX-KSIG-256-B"
#define DKEX2_LABEL_BITS       128

/* Single transcript binder T = H(LABEL_A || LABEL_B || pk_A || pk_B || M_1 || M_2; N). */
#define DKEX2_TRANSCRIPT_BITS  (2 * DKEX2_LABEL_BITS + 2 * DKEX2_SIGPKBITS + DKEX2_DKEPKBITS + DKEX2_DKECTBITS)

#endif /* DKEX_PARAMETERS_H */
