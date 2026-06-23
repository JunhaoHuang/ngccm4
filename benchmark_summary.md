## crypto_kem
**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ZEN-128 | m4 | keypair | 100 | 350,655 | 324,174 | 324,150 | 528,030 |
| ZEN-128 | m4 | encaps | 100 | 268,493 | 268,493 | 268,432 | 268,531 |
| ZEN-128 | m4 | decaps | 100 | 422,335 | 422,334 | 422,334 | 422,375 |
| ZEN-128 | ref | keypair | 100 | 592,824 | 565,234 | 565,198 | 777,681 |
| ZEN-128 | ref | encaps | 100 | 379,410 | 379,410 | 379,348 | 379,448 |
| ZEN-128 | ref | decaps | 100 | 1,248,319 | 1,248,316 | 1,248,315 | 1,248,357 |
| ZEN-256 | m4 | keypair | 100 | 793,366 | 700,926 | 700,926 | 1,239,397 |
| ZEN-256 | m4 | encaps | 100 | 335,052 | 335,051 | 335,050 | 335,095 |
| ZEN-256 | m4 | decaps | 100 | 687,586 | 687,585 | 687,584 | 687,623 |
| ZEN-256 | ref | keypair | 100 | 1,299,413 | 1,205,028 | 1,204,991 | 1,755,006 |
| ZEN-256 | ref | encaps | 100 | 639,863 | 639,861 | 639,859 | 639,902 |
| ZEN-256 | ref | decaps | 100 | 3,814,938 | 3,814,929 | 3,814,929 | 3,814,970 |
| ZEN-512 | m4 | keypair | 100 | 2,416,438 | 2,226,564 | 2,226,527 | 3,643,717 |
| ZEN-512 | m4 | encaps | 100 | 964,852 | 964,848 | 964,846 | 964,895 |
| ZEN-512 | m4 | decaps | 100 | 1,866,189 | 1,866,187 | 1,866,187 | 1,866,228 |
| ZEN-512 | ref | keypair | 100 | 3,963,149 | 3,770,852 | 3,770,814 | 5,206,085 |
| ZEN-512 | ref | encaps | 100 | 1,645,960 | 1,645,955 | 1,645,953 | 1,645,995 |
| ZEN-512 | ref | decaps | 100 | 13,129,481 | 13,129,489 | 13,129,452 | 13,129,493 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| ZEN-128 | m4 | keypair | 1 | 9,872 |
| ZEN-128 | m4 | encaps | 1 | 13,000 |
| ZEN-128 | m4 | decaps | 1 | 14,072 |
| ZEN-128 | ref | keypair | 1 | 10,000 |
| ZEN-128 | ref | encaps | 1 | 13,016 |
| ZEN-128 | ref | decaps | 1 | 14,088 |
| ZEN-256 | m4 | keypair | 1 | 17,384 |
| ZEN-256 | m4 | encaps | 1 | 13,428 |
| ZEN-256 | m4 | decaps | 1 | 15,556 |
| ZEN-256 | ref | keypair | 1 | 17,640 |
| ZEN-256 | ref | encaps | 1 | 13,444 |
| ZEN-256 | ref | decaps | 1 | 15,572 |
| ZEN-512 | m4 | keypair | 1 | 38,864 |
| ZEN-512 | m4 | encaps | 1 | 33,896 |
| ZEN-512 | m4 | decaps | 1 | 38,144 |
| ZEN-512 | ref | keypair | 1 | 39,384 |
| ZEN-512 | ref | encaps | 1 | 33,912 |
| ZEN-512 | ref | decaps | 1 | 38,160 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| ZEN-128 | m4 | keypair | 100 | 40.31% |
| ZEN-128 | m4 | encaps | 100 | 68.80% |
| ZEN-128 | m4 | decaps | 100 | 41.03% |
| ZEN-128 | ref | keypair | 100 | 23.84% |
| ZEN-128 | ref | encaps | 100 | 48.72% |
| ZEN-128 | ref | decaps | 100 | 13.89% |
| ZEN-256 | m4 | keypair | 100 | 36.34% |
| ZEN-256 | m4 | encaps | 100 | 61.69% |
| ZEN-256 | m4 | decaps | 100 | 27.76% |
| ZEN-256 | ref | keypair | 100 | 22.40% |
| ZEN-256 | ref | encaps | 100 | 32.33% |
| ZEN-256 | ref | decaps | 100 | 5.01% |
| ZEN-512 | m4 | keypair | 100 | 34.28% |
| ZEN-512 | m4 | encaps | 100 | 55.33% |
| ZEN-512 | m4 | decaps | 100 | 26.05% |

**code size (speed)**

| scheme | implementation | .text | .data | .bss | total |
| --- | --- | ---: | ---: | ---: | ---: |
| ZEN-128 | m4 | 49,984 | 2,128 | 236 | 52,348 |
| ZEN-128 | ref | 42,168 | 2,128 | 236 | 44,532 |
| ZEN-256 | m4 | 58,168 | 2,128 | 236 | 60,532 |
| ZEN-256 | ref | 48,788 | 2,128 | 236 | 51,152 |
| ZEN-512 | m4 | 79,284 | 2,128 | 236 | 81,648 |
| ZEN-512 | ref | 69,340 | 2,128 | 236 | 71,704 |
