#include <string.h>
#include <stdint.h>

#include "dkex_derand.h"
#include "DKEX_parameters.h"
#include "dkex_sig.h"
#include "auxfunc.h"

#include "dkecpa.h"

// T <- H(LABEL_A || LABEL_B || pk_A || pk_B || M_1 || M_2; n).  n=512 so use pseudoXOF.
static void dkex512_transcript(
    uint8_t       T[DKEX3_SSBITS / 8],
    const uint8_t pk_A[DKEX3_SIGPKBITS / 8],
    const uint8_t pk_B[DKEX3_SIGPKBITS / 8],
    const uint8_t M_1[DKEX3_DKEPKBITS / 8],
    const uint8_t M_2[DKEX3_DKECTBITS / 8])
{
    uint8_t buf[DKEX3_TRANSCRIPT_BITS / 8];
    uint8_t *p = buf;

    memcpy(p, DKEX3_LABEL_A, DKEX3_LABEL_BITS / 8);  p += DKEX3_LABEL_BITS / 8;
    memcpy(p, DKEX3_LABEL_B, DKEX3_LABEL_BITS / 8);  p += DKEX3_LABEL_BITS / 8;
    memcpy(p, pk_A,  DKEX3_SIGPKBITS / 8);   p += DKEX3_SIGPKBITS / 8;
    memcpy(p, pk_B,  DKEX3_SIGPKBITS / 8);   p += DKEX3_SIGPKBITS / 8;
    memcpy(p, M_1,   DKEX3_DKEPKBITS / 8);  p += DKEX3_DKEPKBITS / 8;
    memcpy(p, M_2,   DKEX3_DKECTBITS / 8);

    pseudoXOF(DKEX3_KDF_OUTBITS, buf, DKEX3_TRANSCRIPT_BITS, T);

    memset(buf, 0, sizeof buf);
}

void DKEX512_init_a_derand(
    uint8_t pk_A[DKEX3_SIGPKBITS / 8],
    uint8_t sk_A[DKEX3_SIGSKBITS / 8],
    const uint8_t coins[DKEX3_INIT_A_COINBITS / 8])
{
    dkex_sig_keygen(pk_A, sk_A, coins);
}

void DKEX512_init_b_derand(
    uint8_t pk_B[DKEX3_SIGPKBITS / 8],
    uint8_t sk_B[DKEX3_SIGSKBITS / 8],
    const uint8_t coins[DKEX3_INIT_B_COINBITS / 8])
{
    dkex_sig_keygen(pk_B, sk_B, coins);
}

void DKEX512_pass1_msg_a_derand(
    uint8_t m1[DKEX3_M1_BITS / 8],
    uint8_t sta[DKEX3_STA_MAX_BITS / 8],
    const uint8_t pk_A[DKEX3_SIGPKBITS / 8],
    const uint8_t coins[DKEX3_PASS1_COINBITS / 8])
{
    uint8_t *sk_e       = sta + DKEX3_STA_OFF_SK_E_BITS / 8;
    uint8_t *M_1_in_st  = sta + DKEX3_STA_OFF_M1_BITS   / 8;
    uint8_t *pk_A_in_st = sta + DKEX3_STA_OFF_PK_A_BITS / 8;

    DKE512_Initiate(m1, sk_e, coins);

    memcpy(M_1_in_st,  m1,   DKEX3_DKEPKBITS / 8);
    memcpy(pk_A_in_st, pk_A, DKEX3_SIGPKBITS  / 8);
}

void DKEX512_pass2_msg_b_derand(
    uint8_t m2[DKEX3_M2_BITS / 8],
    uint8_t stb[DKEX3_STB_MAX_BITS / 8],
    const uint8_t m1[DKEX3_M1_BITS / 8],
    const uint8_t pk_A[DKEX3_SIGPKBITS / 8],
    const uint8_t pk_B[DKEX3_SIGPKBITS / 8],
    const uint8_t sk_B[DKEX3_SIGSKBITS / 8],
    const uint8_t coins[DKEX3_PASS2_DKE_COINBITS / 8])
{
    const uint8_t *M_1 = m1;

    uint8_t *M_2     = m2 + DKEX3_M2_OFF_M2_BITS    / 8;
    uint8_t *sigma_B = m2 + DKEX3_M2_OFF_SIGMA_BITS / 8;

    uint8_t *ss_out = stb + DKEX3_STB_OFF_SS_BITS / 8;
    uint8_t *T_st   = stb + DKEX3_STB_OFF_T_BITS  / 8;

    DKE512_Response(M_2, ss_out, M_1, coins);

    // single transcript binder T, signed by B and stashed in st_B = (ss, T)
    dkex512_transcript(T_st, pk_A, pk_B, M_1, M_2);

    dkex_sig_sign(sigma_B, sk_B, T_st, DKEX3_SSBITS);
}

int DKEX512_pass3_msg_a_derand(
    uint8_t m3[DKEX3_M3_BITS / 8],
    uint8_t sta[DKEX3_STA_MAX_BITS / 8],
    const uint8_t m2[DKEX3_M2_BITS / 8],
    const uint8_t pk_B[DKEX3_SIGPKBITS / 8],
    const uint8_t sk_A[DKEX3_SIGSKBITS / 8])
{
    uint8_t *sk_e = sta + DKEX3_STA_OFF_SK_E_BITS / 8;
    uint8_t *M_1  = sta + DKEX3_STA_OFF_M1_BITS   / 8;
    uint8_t *pk_A = sta + DKEX3_STA_OFF_PK_A_BITS / 8;

    const uint8_t *M_2     = m2 + DKEX3_M2_OFF_M2_BITS    / 8;
    const uint8_t *sigma_B = m2 + DKEX3_M2_OFF_SIGMA_BITS / 8;

    uint8_t T[DKEX3_SSBITS / 8];
    dkex512_transcript(T, pk_A, pk_B, M_1, M_2);

    if (!dkex_sig_verify(pk_B, sigma_B, T, DKEX3_SSBITS)) {
        memset(T, 0, sizeof T);
        return -1;
    }

    uint8_t ss[DKEX3_SSBITS / 8];
    DKE512_DeriveSecret(ss, sk_e, M_2);

    // A signs the same single transcript T
    dkex_sig_sign(m3, sk_A, T, DKEX3_SSBITS);

    // erase sk_e, M_1, pk_A from st_A; replace with st_A = (ss, T)
    memset(sta, 0, DKEX3_STA_MAX_BITS / 8);
    memcpy(sta + DKEX3_STA_OFF_SS_BITS / 8, ss, DKEX3_SSBITS / 8);
    memcpy(sta + DKEX3_STA_OFF_T_BITS  / 8, T,  DKEX3_SSBITS / 8);

    memset(T,  0, sizeof T);
    memset(ss, 0, sizeof ss);
    return 0;
}

void DKEX512_derive_ss_a(
    uint8_t ss[DKEX3_SSBITS / 8],
    const uint8_t sta[DKEX3_STA_MAX_BITS / 8])
{
    // st_A = (ss, T); ss = KDF(st_A; N)
    pseudoXOF(DKEX3_KDF_OUTBITS, sta, DKEX3_KDF_INBITS, ss);
}

int DKEX512_derive_ss_b(
    uint8_t ss[DKEX3_SSBITS / 8],
    const uint8_t ma[DKEX3_M3_BITS / 8],
    const uint8_t stb[DKEX3_STB_MAX_BITS / 8],
    const uint8_t pk_A[DKEX3_SIGPKBITS / 8])
{
    const uint8_t *sigma_A = ma;
    const uint8_t *T       = stb + DKEX3_STB_OFF_T_BITS / 8;

    if (!dkex_sig_verify(pk_A, sigma_A, T, DKEX3_SSBITS)) return -1;

    // st_B = (ss, T); ss = KDF(st_B; N)
    pseudoXOF(DKEX3_KDF_OUTBITS, stb, DKEX3_KDF_INBITS, ss);
    return 0;
}
