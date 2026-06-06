#include <stdint.h>
#include <string.h>
#include <stdio.h>
#include "params.h"
#include "auxfunc.h"

void zen_swift_pseudoXOF(unsigned long long output_len_bits, const unsigned char *msg, unsigned long long msg_len_bits, unsigned char *output, uint8_t nonce)
{
    const size_t msg_len_bytes = (size_t)(msg_len_bits / 8);
    uint8_t extseed[msg_len_bytes + 1];

    memcpy(extseed, msg, msg_len_bytes);
    extseed[msg_len_bytes] = nonce;
    
    pseudoXOF(output_len_bits, extseed, (msg_len_bits/8+1)*8, output);
}
