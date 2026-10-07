/*
 * kex_common.h - shared driver logic for the ICCS key-exchange API.
 *
 * Implements the pass state machine of the ICCS KAT_KEX.c harness for any
 * number of passes (0 to 5):
 *   init_a, init_b, pass1_a, pass2_b, pass3_a, pass4_b, pass5_a, derive_a, derive_b
 * A pass function returning 1 ends the message exchange; it must do so exactly
 * at pass number kex_get_passes_num(). derive_ss_a receives the last message
 * sent by the responder, derive_ss_b the last message sent by the initiator.
 *
 * Each driver walks the steps with kex_step() so it can wrap every call in
 * its own instrumentation (cycle counts, stack canaries, hash profiling).
 */
#ifndef KEX_COMMON_H
#define KEX_COMMON_H

#include <stdlib.h>
#include <string.h>

#include "KEX_AlgorithmInstance.h"

/* Weak fallbacks so schemes with fewer passes still link. The prototypes
 * follow the ICCS template and therefore match any scheme that declares them.
 * (Two-pass schemes such as CreTAKE leave even the pass-3 prototype commented
 * out, so pass 3 gets a fallback as well.) */
__attribute__((weak)) int kex_generate_pass3_msg_a(
    unsigned char *ska, unsigned long long ska_len_bytes,
    unsigned char *pkb, unsigned long long pkb_len_bytes,
    unsigned char *m2, unsigned long long m2_len_bytes,
    unsigned char *sta, unsigned long long *sta_len_bytes,
    unsigned char *m3, unsigned long long *m3_len_bytes)
{
    (void)ska; (void)ska_len_bytes; (void)pkb; (void)pkb_len_bytes;
    (void)m2; (void)m2_len_bytes; (void)sta; (void)sta_len_bytes;
    (void)m3; (void)m3_len_bytes;
    return -99;
}

__attribute__((weak)) int kex_generate_pass4_msg_b(
    unsigned char *skb, unsigned long long skb_len_bytes,
    unsigned char *pka, unsigned long long pka_len_bytes,
    unsigned char *m3, unsigned long long m3_len_bytes,
    unsigned char *stb, unsigned long long *stb_len_bytes,
    unsigned char *m4, unsigned long long *m4_len_bytes)
{
    (void)skb; (void)skb_len_bytes; (void)pka; (void)pka_len_bytes;
    (void)m3; (void)m3_len_bytes; (void)stb; (void)stb_len_bytes;
    (void)m4; (void)m4_len_bytes;
    return -99;
}

__attribute__((weak)) int kex_generate_pass5_msg_a(
    unsigned char *ska, unsigned long long ska_len_bytes,
    unsigned char *pkb, unsigned long long pkb_len_bytes,
    unsigned char *m4, unsigned long long m4_len_bytes,
    unsigned char *sta, unsigned long long *sta_len_bytes,
    unsigned char *m5, unsigned long long *m5_len_bytes)
{
    (void)ska; (void)ska_len_bytes; (void)pkb; (void)pkb_len_bytes;
    (void)m4; (void)m4_len_bytes; (void)sta; (void)sta_len_bytes;
    (void)m5; (void)m5_len_bytes;
    return -99;
}

#define KEX_MAX_PASSES 5

enum kex_step_id {
    KEX_STEP_INIT_A = 0,
    KEX_STEP_INIT_B,
    KEX_STEP_PASS1,
    KEX_STEP_PASS2,
    KEX_STEP_PASS3,
    KEX_STEP_PASS4,
    KEX_STEP_PASS5,
    KEX_STEP_DERIVE_A,
    KEX_STEP_DERIVE_B,
    KEX_STEP_COUNT
};

static const char *const kex_step_names[KEX_STEP_COUNT] = {
    "init_a", "init_b", "pass1", "pass2", "pass3", "pass4", "pass5", "derive_a", "derive_b"
};

typedef struct {
    unsigned long long passes;
    unsigned long long pka_len, ska_len, pkb_len, skb_len;
    unsigned long long sta_len, stb_len, ssa_len, ssb_len;
    unsigned long long ma_len, mb_len;   /* last message from a / from b */
    unsigned long long total_len;
    unsigned char *pka, *ska, *pkb, *skb, *sta, *stb, *ssa, *ssb;
    unsigned char *ma, *mb;              /* message buffers, each total_len */
    int finished;                        /* a pass returned 1 */
} kex_session;

static unsigned char *kex_alloc(unsigned long long len)
{
    size_t alloc_len = (len == 0) ? 1u : (size_t)len;
    return malloc(alloc_len);
}

static void kex_session_free(kex_session *s)
{
    free(s->pka); free(s->ska); free(s->pkb); free(s->skb);
    free(s->sta); free(s->stb); free(s->ssa); free(s->ssb);
    free(s->ma); free(s->mb);
    memset(s, 0, sizeof(*s));
}

/* Allocate every buffer once from the claimed maximum lengths. Returns 0 on success. */
static int kex_session_alloc(kex_session *s)
{
    memset(s, 0, sizeof(*s));
    s->passes = kex_get_passes_num();
    s->total_len = kex_get_total_msg_len_bytes();
    s->pka = kex_alloc(kex_get_pk_len_bytes());
    s->ska = kex_alloc(kex_get_sk_len_bytes());
    s->pkb = kex_alloc(kex_get_pk_len_bytes());
    s->skb = kex_alloc(kex_get_sk_len_bytes());
    s->sta = kex_alloc(kex_get_sta_len_bytes());
    s->stb = kex_alloc(kex_get_stb_len_bytes());
    s->ssa = kex_alloc(kex_get_ss_len_bytes());
    s->ssb = kex_alloc(kex_get_ss_len_bytes());
    s->ma = kex_alloc(s->total_len);
    s->mb = kex_alloc(s->total_len);
    if (s->pka == NULL || s->ska == NULL || s->pkb == NULL || s->skb == NULL ||
        s->sta == NULL || s->stb == NULL || s->ssa == NULL || s->ssb == NULL ||
        s->ma == NULL || s->mb == NULL) {
        kex_session_free(s);
        return -1;
    }
    if (s->passes > KEX_MAX_PASSES) {
        kex_session_free(s);
        return -2;
    }
    return 0;
}

/* Reset the per-run lengths to the claimed maxima (in/out parameters). */
static void kex_session_reset(kex_session *s)
{
    s->pka_len = kex_get_pk_len_bytes();
    s->ska_len = kex_get_sk_len_bytes();
    s->pkb_len = kex_get_pk_len_bytes();
    s->skb_len = kex_get_sk_len_bytes();
    s->sta_len = kex_get_sta_len_bytes();
    s->stb_len = kex_get_stb_len_bytes();
    s->ssa_len = kex_get_ss_len_bytes();
    s->ssb_len = kex_get_ss_len_bytes();
    s->ma_len = 0;
    s->mb_len = 0;
    s->finished = 0;
}

/* Whether a step is part of this scheme's exchange. */
static int kex_step_active(const kex_session *s, int step)
{
    if (step >= KEX_STEP_PASS1 && step <= KEX_STEP_PASS5) {
        return (unsigned long long)(step - KEX_STEP_PASS1) < s->passes;
    }
    return 1;
}

/*
 * Execute one step. Returns 0 on success, a negative value on error.
 * The error value is -100 - step for protocol violations (a pass ending too
 * early or too late), otherwise the scheme's own negative return code.
 */
static int kex_step(kex_session *s, int step)
{
    int rtn;
    unsigned long long pass_no;

    switch (step) {
    case KEX_STEP_INIT_A:
        rtn = kex_init_a(s->pka, &s->pka_len, s->ska, &s->ska_len, s->sta, &s->sta_len);
        return rtn < 0 ? rtn : 0;
    case KEX_STEP_INIT_B:
        rtn = kex_init_b(s->pkb, &s->pkb_len, s->skb, &s->skb_len, s->stb, &s->stb_len);
        return rtn < 0 ? rtn : 0;
    /* Like the ICCS KAT harness, the output message length starts at zero for
     * every pass: a scheme that leaves it untouched sends an empty message. */
    case KEX_STEP_PASS1:
        s->ma_len = 0;
        rtn = kex_generate_pass1_msg_a(s->ska, s->ska_len, s->pkb, s->pkb_len,
                                       s->sta, &s->sta_len, s->ma, &s->ma_len);
        break;
    case KEX_STEP_PASS2:
        s->mb_len = 0;
        rtn = kex_generate_pass2_msg_b(s->skb, s->skb_len, s->pka, s->pka_len,
                                       s->ma, s->ma_len, s->stb, &s->stb_len,
                                       s->mb, &s->mb_len);
        break;
    case KEX_STEP_PASS3:
        s->ma_len = 0;
        rtn = kex_generate_pass3_msg_a(s->ska, s->ska_len, s->pkb, s->pkb_len,
                                       s->mb, s->mb_len, s->sta, &s->sta_len,
                                       s->ma, &s->ma_len);
        break;
    case KEX_STEP_PASS4:
        s->mb_len = 0;
        rtn = kex_generate_pass4_msg_b(s->skb, s->skb_len, s->pka, s->pka_len,
                                       s->ma, s->ma_len, s->stb, &s->stb_len,
                                       s->mb, &s->mb_len);
        break;
    case KEX_STEP_PASS5:
        s->ma_len = 0;
        rtn = kex_generate_pass5_msg_a(s->ska, s->ska_len, s->pkb, s->pkb_len,
                                       s->mb, s->mb_len, s->sta, &s->sta_len,
                                       s->ma, &s->ma_len);
        break;
    case KEX_STEP_DERIVE_A:
        rtn = kex_derive_ss_a(s->ska, s->ska_len, s->pkb, s->pkb_len,
                              s->mb, s->mb_len, s->sta, s->sta_len,
                              s->ssa, &s->ssa_len);
        return rtn < 0 ? rtn : 0;
    case KEX_STEP_DERIVE_B:
        rtn = kex_derive_ss_b(s->skb, s->skb_len, s->pka, s->pka_len,
                              s->ma, s->ma_len, s->stb, s->stb_len,
                              s->ssb, &s->ssb_len);
        return rtn < 0 ? rtn : 0;
    default:
        return -100 - step;
    }

    /* pass steps */
    if (rtn < 0) {
        return rtn;
    }
    pass_no = (unsigned long long)(step - KEX_STEP_PASS1) + 1;
    if (rtn == 1) {
        if (pass_no != s->passes) {
            return -100 - step;   /* finished too early */
        }
        s->finished = 1;
    } else if (pass_no == s->passes) {
        return -100 - step;       /* last pass did not signal completion */
    }
    return 0;
}

/* State buffer written by a step (for test-vector output), or NULL. */
static __attribute__((unused)) const unsigned char *kex_step_state(const kex_session *s, int step, unsigned long long *len)
{
    switch (step) {
    case KEX_STEP_INIT_A: case KEX_STEP_PASS1: case KEX_STEP_PASS3: case KEX_STEP_PASS5:
        *len = s->sta_len; return s->sta;
    case KEX_STEP_INIT_B: case KEX_STEP_PASS2: case KEX_STEP_PASS4:
        *len = s->stb_len; return s->stb;
    default:
        *len = 0; return NULL;
    }
}

/* Message produced by a pass step (for test-vector output), or NULL. */
static __attribute__((unused)) const unsigned char *kex_step_message(const kex_session *s, int step, unsigned long long *len)
{
    switch (step) {
    case KEX_STEP_PASS1: case KEX_STEP_PASS3: case KEX_STEP_PASS5:
        *len = s->ma_len; return s->ma;
    case KEX_STEP_PASS2: case KEX_STEP_PASS4:
        *len = s->mb_len; return s->mb;
    default:
        *len = 0; return NULL;
    }
}

static int kex_shared_secrets_match(const kex_session *s)
{
    return s->ssa_len == s->ssb_len && memcmp(s->ssa, s->ssb, (size_t)s->ssa_len) == 0;
}

/* Build "<step> cycles:" style labels without printf. */
static const char *kex_label(char *buf, size_t buf_len, int step, const char *suffix)
{
    const char *name = kex_step_names[step];
    size_t n = strlen(name);
    size_t m = strlen(suffix);
    if (n + m + 1 > buf_len) {
        buf[0] = 0;
        return buf;
    }
    memcpy(buf, name, n);
    memcpy(buf + n, suffix, m + 1);
    return buf;
}

#endif /* KEX_COMMON_H */
