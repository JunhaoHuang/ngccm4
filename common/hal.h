#ifndef HAL_H
#define HAL_H

#include <stdint.h>
#include <stdlib.h>


enum clock_mode {
    CLOCK_FAST,
    CLOCK_BENCHMARK
};

void hal_setup(const enum clock_mode clock);
void hal_send_str(const char* in);

/*
 * Return value for main() after the '#' done marker. On mps2-an386 main() must
 * return: newlib's _start then runs the semihosting-exit destructor that stops
 * QEMU. On hardware libopencm3's reset_handler would return into LR=0xFFFFFFFF
 * (HardFault whose serial dump ends with another '#', sits in the ST-LINK's
 * buffer and is replayed into the next benchmark capture), so spin instead.
 */
static inline int hal_main_done(void)
{
#ifdef MPS2_AN386
  return 0;
#else
  for (;;) {
  }
#endif
}
uint64_t hal_get_time(void);
size_t hal_get_stack_size(void);

#endif
