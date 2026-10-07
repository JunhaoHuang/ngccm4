/*
 * ngcc_compat.h - neutralises host-only I/O used in error paths of NGCC
 * reference implementations so they compile and link for Cortex-M4.
 * It is force-included (via ngcc_config.h) only for imported schemes.
 */
#ifndef NGCC_COMPAT_H
#define NGCC_COMPAT_H

#include <stdio.h>
#include <malloc.h>
#include <stdlib.h>

#undef printf
#undef fprintf
#undef puts
#undef perror
#undef fflush
#undef fputs
#undef putchar
#define printf(...) ((void)0)
#define fprintf(...) ((void)0)
#define fputs(...) ((void)0)
#define puts(...) ((void)0)
#define putchar(...) ((void)0)
#define perror(...) ((void)0)
#define fflush(...) ((void)0)

/* posix_memalign is not in newlib; memalign is. */
#ifndef posix_memalign
#define posix_memalign(pp, alignment, size) ((*(pp) = memalign((alignment), (size))) != NULL ? 0 : 12)
#endif

#endif /* NGCC_COMPAT_H */
