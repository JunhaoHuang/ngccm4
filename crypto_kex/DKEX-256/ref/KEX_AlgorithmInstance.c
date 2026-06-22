#include <string.h>
#include <stdint.h>
#include "KEX_AlgorithmInstance.h"
#include "DKEX_parameters.h"
#include "drng.h"
#include "dkex_derand.h"

extern DRNG_ctx drng_algorithm;

unsigned long long kex_get_passes_num()           { return DKEX2_PASSES_NUM; }
unsigned long long kex_get_pk_len_bytes()         { return DKEX2_PKBITS / 8; }
unsigned long long kex_get_sk_len_bytes()         { return DKEX2_SKBITS / 8; }
unsigned long long kex_get_sta_len_bytes()        { return DKEX2_STA_MAX_BITS / 8; }
unsigned long long kex_get_stb_len_bytes()        { return DKEX2_STB_MAX_BITS / 8; }
unsigned long long kex_get_ss_len_bytes()         { return DKEX2_SSBITS / 8; }
unsigned long long kex_get_total_msg_len_bytes()  { return DKEX2_TOTAL_MSG_BITS / 8; }

int kex_init_a(
    unsigned char *pka, unsigned long long *pka_len_bytes,
    unsigned char *ska, unsigned long long *ska_len_bytes,
    unsigned char *sta, unsigned long long *sta_len_bytes)
{
    uint8_t coins[DKEX2_INIT_A_COINBITS / 8];

    get_random_number(&drng_algorithm, coins, DKEX2_INIT_A_COINBITS);
    DKEX256_init_a_derand(pka, ska, coins);

    /* Stash pk_A in sta so pass1_msg_a can recover it. */
    memcpy(sta, pka, DKEX2_SIGPKBITS / 8);

    *pka_len_bytes = DKEX2_PKBITS / 8;
    *ska_len_bytes = DKEX2_SKBITS / 8;
    *sta_len_bytes = DKEX2_SIGPKBITS / 8;
    return 0;
}

int kex_init_b(
    unsigned char *pkb, unsigned long long *pkb_len_bytes,
    unsigned char *skb, unsigned long long *skb_len_bytes,
    unsigned char *stb, unsigned long long *stb_len_bytes)
{
    uint8_t coins[DKEX2_INIT_B_COINBITS / 8];

    get_random_number(&drng_algorithm, coins, DKEX2_INIT_B_COINBITS);
    DKEX256_init_b_derand(pkb, skb, coins);

    memcpy(stb, pkb, DKEX2_SIGPKBITS / 8);

    *pkb_len_bytes = DKEX2_PKBITS / 8;
    *skb_len_bytes = DKEX2_SKBITS / 8;
    *stb_len_bytes = DKEX2_SIGPKBITS / 8;
    return 0;
}

int kex_generate_pass1_msg_a(
    unsigned char *ska, unsigned long long ska_len_bytes,
    unsigned char *pkb, unsigned long long pkb_len_bytes,
    unsigned char *sta, unsigned long long *sta_len_bytes,
    unsigned char *m1,  unsigned long long *m1_len_bytes)
{
    uint8_t coins[DKEX2_PASS1_COINBITS / 8];
    (void)ska; (void)ska_len_bytes; (void)pkb; (void)pkb_len_bytes;
    (void)sta_len_bytes;

    /* sta holds pk_A from init_a; snapshot, then let derand rewrite sta. */
    uint8_t pk_A_tmp[DKEX2_SIGPKBITS / 8];
    memcpy(pk_A_tmp, sta, DKEX2_SIGPKBITS / 8);

    get_random_number(&drng_algorithm, coins, DKEX2_PASS1_COINBITS);
    DKEX256_pass1_msg_a_derand(m1, sta, pk_A_tmp, coins);

    memset(pk_A_tmp, 0, sizeof pk_A_tmp);

    *m1_len_bytes  = DKEX2_M1_BITS      / 8;
    *sta_len_bytes = DKEX2_STA_MAX_BITS / 8;
    return 0;
}

int kex_generate_pass2_msg_b(
    unsigned char *skb, unsigned long long skb_len_bytes,
    unsigned char *pka, unsigned long long pka_len_bytes,
    unsigned char *m1,  unsigned long long m1_len_bytes,
    unsigned char *stb, unsigned long long *stb_len_bytes,
    unsigned char *m2,  unsigned long long *m2_len_bytes)
{
    uint8_t coins[DKEX2_PASS2_DKE_COINBITS / 8];
    (void)skb_len_bytes; (void)pka_len_bytes; (void)m1_len_bytes;
    (void)stb_len_bytes;

    uint8_t pk_B_tmp[DKEX2_SIGPKBITS / 8];
    memcpy(pk_B_tmp, stb, DKEX2_SIGPKBITS / 8);

    get_random_number(&drng_algorithm, coins, DKEX2_PASS2_DKE_COINBITS);
    DKEX256_pass2_msg_b_derand(m2, stb, m1, pka, pk_B_tmp, skb, coins);

    memset(pk_B_tmp, 0, sizeof pk_B_tmp);

    *m2_len_bytes  = DKEX2_M2_BITS         / 8;
    *stb_len_bytes = DKEX2_STB_PASS2_BITS  / 8;
    return 0;
}

int kex_generate_pass3_msg_a(
    unsigned char *ska, unsigned long long ska_len_bytes,
    unsigned char *pkb, unsigned long long pkb_len_bytes,
    unsigned char *m2,  unsigned long long m2_len_bytes,
    unsigned char *sta, unsigned long long *sta_len_bytes,
    unsigned char *m3,  unsigned long long *m3_len_bytes)
{
    (void)ska_len_bytes; (void)pkb_len_bytes; (void)m2_len_bytes;
    (void)sta_len_bytes;

    int rc = DKEX256_pass3_msg_a_derand(m3, sta, m2, pkb, ska);
    if (rc < 0) return -1;

    *m3_len_bytes  = DKEX2_M3_BITS        / 8;
    *sta_len_bytes = DKEX2_STA_PASS3_BITS / 8;   /* st_A = ss || T */
    return 1;                            /* last pass */
}

int kex_derive_ss_a(
    unsigned char *ska, unsigned long long ska_len_bytes,
    unsigned char *pkb, unsigned long long pkb_len_bytes,
    unsigned char *mb,  unsigned long long mb_len_bytes,
    unsigned char *sta, unsigned long long sta_len_bytes,
    unsigned char *ssa, unsigned long long *ssa_len_bytes)
{
    (void)ska; (void)ska_len_bytes; (void)pkb; (void)pkb_len_bytes;
    (void)mb;  (void)mb_len_bytes;  (void)sta_len_bytes;

    DKEX256_derive_ss_a(ssa, sta);
    *ssa_len_bytes = DKEX2_SSBITS / 8;
    return 0;
}

int kex_derive_ss_b(
    unsigned char *skb, unsigned long long skb_len_bytes,
    unsigned char *pka, unsigned long long pka_len_bytes,
    unsigned char *ma,  unsigned long long ma_len_bytes,
    unsigned char *stb, unsigned long long stb_len_bytes,
    unsigned char *ssb, unsigned long long *ssb_len_bytes)
{
    (void)skb; (void)skb_len_bytes; (void)pka_len_bytes;
    (void)ma_len_bytes; (void)stb_len_bytes;

    int rc = DKEX256_derive_ss_b(ssb, ma, stb, pka);
    if (rc < 0) return -1;
    *ssb_len_bytes = DKEX2_SSBITS / 8;
    return 0;
}
