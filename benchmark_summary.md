## crypto_kem

**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ZEN_swift_128 | m4 | keypair | 100 | 350,655 | 324,174 | 324,150 | 528,030 |
| ZEN_swift_128 | m4 | encaps | 100 | 268,493 | 268,493 | 268,432 | 268,531 |
| ZEN_swift_128 | m4 | decaps | 100 | 422,335 | 422,334 | 422,334 | 422,375 |
| ZEN_swift_128 | ref | keypair | 100 | 592,824 | 565,236 | 565,198 | 777,681 |
| ZEN_swift_128 | ref | encaps | 100 | 379,410 | 379,410 | 379,348 | 379,448 |
| ZEN_swift_128 | ref | decaps | 100 | 1,248,319 | 1,248,316 | 1,248,315 | 1,248,356 |
| ZEN_swift_256 | m4 | keypair | 100 | 793,366 | 700,926 | 700,926 | 1,239,397 |
| ZEN_swift_256 | m4 | encaps | 100 | 335,052 | 335,051 | 335,050 | 335,095 |
| ZEN_swift_256 | m4 | decaps | 100 | 687,586 | 687,585 | 687,584 | 687,623 |
| ZEN_swift_256 | ref | keypair | 100 | 1,299,413 | 1,205,030 | 1,204,991 | 1,755,006 |
| ZEN_swift_256 | ref | encaps | 100 | 639,863 | 639,861 | 639,860 | 639,902 |
| ZEN_swift_256 | ref | decaps | 100 | 3,814,106 | 3,814,097 | 3,814,097 | 3,814,137 |
| ZEN_swift_512 | m4 | keypair | 100 | 2,416,438 | 2,226,564 | 2,226,527 | 3,643,717 |
| ZEN_swift_512 | m4 | encaps | 100 | 964,852 | 964,848 | 964,848 | 964,892 |
| ZEN_swift_512 | m4 | decaps | 100 | 1,864,525 | 1,864,523 | 1,864,522 | 1,864,563 |
| ZEN_swift_512 | ref | keypair | 100 | 3,963,150 | 3,770,852 | 3,770,814 | 5,206,085 |
| ZEN_swift_512 | ref | encaps | 100 | 1,645,960 | 1,645,955 | 1,645,953 | 1,645,995 |
| ZEN_swift_512 | ref | decaps | 100 | 13,127,817 | 13,127,825 | 13,127,788 | 13,127,828 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| ZEN_swift_128 | m4 | keypair | 1 | 9,872 |
| ZEN_swift_128 | m4 | encaps | 1 | 13,000 |
| ZEN_swift_128 | m4 | decaps | 1 | 14,072 |
| ZEN_swift_128 | ref | keypair | 1 | 10,000 |
| ZEN_swift_128 | ref | encaps | 1 | 13,016 |
| ZEN_swift_128 | ref | decaps | 1 | 14,088 |
| ZEN_swift_256 | m4 | keypair | 1 | 17,384 |
| ZEN_swift_256 | m4 | encaps | 1 | 13,428 |
| ZEN_swift_256 | m4 | decaps | 1 | 15,556 |
| ZEN_swift_256 | ref | keypair | 1 | 17,640 |
| ZEN_swift_256 | ref | encaps | 1 | 13,444 |
| ZEN_swift_256 | ref | decaps | 1 | 15,572 |
| ZEN_swift_512 | m4 | keypair | 1 | 38,864 |
| ZEN_swift_512 | m4 | encaps | 1 | 33,896 |
| ZEN_swift_512 | m4 | decaps | 1 | 38,144 |
| ZEN_swift_512 | ref | keypair | 1 | 39,384 |
| ZEN_swift_512 | ref | encaps | 1 | 33,912 |
| ZEN_swift_512 | ref | decaps | 1 | 38,160 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| ZEN_swift_128 | m4 | keypair | 100 | 40.31% |
| ZEN_swift_128 | m4 | encaps | 100 | 68.80% |
| ZEN_swift_128 | m4 | decaps | 100 | 41.03% |
| ZEN_swift_128 | ref | keypair | 100 | 23.84% |
| ZEN_swift_128 | ref | encaps | 100 | 48.72% |
| ZEN_swift_128 | ref | decaps | 100 | 13.89% |
| ZEN_swift_256 | m4 | keypair | 100 | 36.34% |
| ZEN_swift_256 | m4 | encaps | 100 | 61.69% |
| ZEN_swift_256 | m4 | decaps | 100 | 27.76% |
| ZEN_swift_256 | ref | keypair | 100 | 22.40% |
| ZEN_swift_256 | ref | encaps | 100 | 32.33% |
| ZEN_swift_256 | ref | decaps | 100 | 5.01% |
| ZEN_swift_512 | m4 | keypair | 100 | 34.28% |
| ZEN_swift_512 | m4 | encaps | 100 | 55.33% |
| ZEN_swift_512 | m4 | decaps | 100 | 26.07% |
