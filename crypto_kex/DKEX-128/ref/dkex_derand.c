#include <string.h>
#include <stdint.h>

#include "dkex_derand.h"
#include "DKEX_parameters.h"
#include "dkex_sig.h"
#include "auxfunc.h"

#include "dkecpa.h"

// T <- H(LABEL_A || LABEL_B || pk_A || pk_B || M_1 || M_2; n)
static void dkex128_transcript(
    uint8_t       T[DKEX1_SSBITS / 8],
    const uint8_t pk_A[DKEX1_SIGPKBITS / 8],
    const uint8_t pk_B[DKEX1_SIGPKBITS / 8],
    const uint8_t M_1[DKEX1_DKEPKBITS / 8],
    const uint8_t M_2[DKEX1_DKECTBITS / 8])
{
    uint8_t buf[DKEX1_TRANSCRIPT_BITS / 8];
    uint8_t *p = buf;

    memcpy(p, DKEX1_LABEL_A, DKEX1_LABEL_BITS / 8);  p += DKEX1_LABEL_BITS / 8;
    memcpy(p, DKEX1_LABEL_B, DKEX1_LABEL_BITS / 8);  p += DKEX1_LABEL_BITS / 8;
    memcpy(p, pk_A,  DKEX1_SIGPKBITS / 8);   p += DKEX1_SIGPKBITS / 8;
    memcpy(p, pk_B,  DKEX1_SIGPKBITS / 8);   p += DKEX1_SIGPKBITS / 8;
    memcpy(p, M_1,   DKEX1_DKEPKBITS / 8);  p += DKEX1_DKEPKBITS / 8;
    memcpy(p, M_2,   DKEX1_DKECTBITS / 8);

    sm3hash(DKEX1_KDF_OUTBITS, buf, DKEX1_TRANSCRIPT_BITS, T);

    memset(buf, 0, sizeof buf);
}

void DKEX128_init_a_derand(
    uint8_t pk_A[DKEX1_SIGPKBITS / 8],
    uint8_t sk_A[DKEX1_SIGSKBITS / 8],
    const uint8_t coins[DKEX1_INIT_A_COINBITS / 8])
{
    dkex_sig_keygen(pk_A, sk_A, coins);
}

void DKEX128_init_b_derand(
    uint8_t pk_B[DKEX1_SIGPKBITS / 8],
    uint8_t sk_B[DKEX1_SIGSKBITS / 8],
    const uint8_t coins[DKEX1_INIT_B_COINBITS / 8])
{
    dkex_sig_keygen(pk_B, sk_B, coins);
}

void DKEX128_pass1_msg_a_derand(
    uint8_t m1[DKEX1_M1_BITS / 8],
    uint8_t sta[DKEX1_STA_MAX_BITS / 8],
    const uint8_t pk_A[DKEX1_SIGPKBITS / 8],
    const uint8_t coins[DKEX1_PASS1_COINBITS / 8])
{
    uint8_t *sk_e       = sta + DKEX1_STA_OFF_SK_E_BITS / 8;
    uint8_t *M_1_in_st  = sta + DKEX1_STA_OFF_M1_BITS   / 8;
    uint8_t *pk_A_in_st = sta + DKEX1_STA_OFF_PK_A_BITS / 8;

    DKE128_Initiate(m1, sk_e, coins);

    memcpy(M_1_in_st,  m1,   DKEX1_DKEPKBITS / 8);
    memcpy(pk_A_in_st, pk_A, DKEX1_SIGPKBITS  / 8);
}

void DKEX128_pass2_msg_b_derand(
    uint8_t m2[DKEX1_M2_BITS / 8],
    uint8_t stb[DKEX1_STB_MAX_BITS / 8],
    const uint8_t m1[DKEX1_M1_BITS / 8],
    const uint8_t pk_A[DKEX1_SIGPKBITS / 8],
    const uint8_t pk_B[DKEX1_SIGPKBITS / 8],
    const uint8_t sk_B[DKEX1_SIGSKBITS / 8],
    const uint8_t coins[DKEX1_PASS2_DKE_COINBITS / 8])
{
    const uint8_t *M_1 = m1;

    uint8_t *M_2     = m2 + DKEX1_M2_OFF_M2_BITS    / 8;
    uint8_t *sigma_B = m2 + DKEX1_M2_OFF_SIGMA_BITS / 8;

    uint8_t *ss_out = stb + DKEX1_STB_OFF_SS_BITS / 8;
    uint8_t *T_st   = stb + DKEX1_STB_OFF_T_BITS  / 8;

    DKE128_Response(M_2, ss_out, M_1, coins);

    // single transcript binder T, signed by B and stashed in st_B = (ss, T)
    dkex128_transcript(T_st, pk_A, pk_B, M_1, M_2);

    dkex_sig_sign(sigma_B, sk_B, T_st, DKEX1_SSBITS);
}

int DKEX128_pass3_msg_a_derand(
    uint8_t m3[DKEX1_M3_BITS / 8],
    uint8_t sta[DKEX1_STA_MAX_BITS / 8],
    const uint8_t m2[DKEX1_M2_BITS / 8],
    const uint8_t pk_B[DKEX1_SIGPKBITS / 8],
    const uint8_t sk_A[DKEX1_SIGSKBITS / 8])
{
    uint8_t *sk_e = sta + DKEX1_STA_OFF_SK_E_BITS / 8;
    uint8_t *M_1  = sta + DKEX1_STA_OFF_M1_BITS   / 8;
    uint8_t *pk_A = sta + DKEX1_STA_OFF_PK_A_BITS / 8;

    const uint8_t *M_2     = m2 + DKEX1_M2_OFF_M2_BITS    / 8;
    const uint8_t *sigma_B = m2 + DKEX1_M2_OFF_SIGMA_BITS / 8;

    uint8_t T[DKEX1_SSBITS / 8];
    dkex128_transcript(T, pk_A, pk_B, M_1, M_2);

    if (!dkex_sig_verify(pk_B, sigma_B, T, DKEX1_SSBITS)) {
        memset(T, 0, sizeof T);
        return -1;
    }

    uint8_t ss[DKEX1_SSBITS / 8];
    DKE128_DeriveSecret(ss, sk_e, M_2);

    // A signs the same single transcript T
    dkex_sig_sign(m3, sk_A, T, DKEX1_SSBITS);

    // erase sk_e, M_1, pk_A from st_A; replace with st_A = (ss, T)
    memset(sta, 0, DKEX1_STA_MAX_BITS / 8);
    memcpy(sta + DKEX1_STA_OFF_SS_BITS / 8, ss, DKEX1_SSBITS / 8);
    memcpy(sta + DKEX1_STA_OFF_T_BITS  / 8, T,  DKEX1_SSBITS / 8);

    memset(T,  0, sizeof T);
    memset(ss, 0, sizeof ss);
    return 0;
}

void DKEX128_derive_ss_a(
    uint8_t ss[DKEX1_SSBITS / 8],
    const uint8_t sta[DKEX1_STA_MAX_BITS / 8])
{
    // st_A = (ss, T); ss = KDF(st_A; N)
    sm3hash(DKEX1_KDF_OUTBITS, sta, DKEX1_KDF_INBITS, ss);
}

int DKEX128_derive_ss_b(
    uint8_t ss[DKEX1_SSBITS / 8],
    const uint8_t ma[DKEX1_M3_BITS / 8],
    const uint8_t stb[DKEX1_STB_MAX_BITS / 8],
    const uint8_t pk_A[DKEX1_SIGPKBITS / 8])
{
    const uint8_t *sigma_A = ma;
    const uint8_t *T       = stb + DKEX1_STB_OFF_T_BITS / 8;

    if (!dkex_sig_verify(pk_A, sigma_A, T, DKEX1_SSBITS)) return -1;

    // st_B = (ss, T); ss = KDF(st_B; N)
    sm3hash(DKEX1_KDF_OUTBITS, stb, DKEX1_KDF_INBITS, ss);
    return 0;
}
