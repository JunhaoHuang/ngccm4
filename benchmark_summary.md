## crypto_kem
**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| DAWN_Prime_128 | m4 | keypair | 100 | 341,239 | 338,890 | 280,202 | 691,018 |
| DAWN_Prime_128 | m4 | encaps | 100 | 173,899 | 173,900 | 173,841 | 173,910 |
| DAWN_Prime_128 | m4 | decaps | 100 | 306,639 | 306,638 | 306,638 | 306,677 |
| DAWN_Prime_128 | ref | keypair | 100 | 629,099 | 626,708 | 566,963 | 985,178 |
| DAWN_Prime_128 | ref | encaps | 100 | 294,220 | 294,220 | 294,158 | 294,259 |
| DAWN_Prime_128 | ref | decaps | 100 | 588,714 | 588,712 | 588,712 | 588,752 |
| DAWN_Prime_256 | m4 | keypair | 100 | 690,194 | 596,400 | 596,399 | 1,142,776 |
| DAWN_Prime_256 | m4 | encaps | 100 | 301,450 | 301,450 | 301,449 | 301,488 |
| DAWN_Prime_256 | m4 | decaps | 100 | 576,550 | 576,547 | 576,547 | 576,587 |
| DAWN_Prime_256 | ref | keypair | 100 | 1,331,361 | 1,235,654 | 1,235,617 | 1,793,328 |
| DAWN_Prime_256 | ref | encaps | 100 | 626,700 | 626,699 | 626,696 | 626,739 |
| DAWN_Prime_256 | ref | decaps | 100 | 1,432,564 | 1,432,561 | 1,432,561 | 1,432,602 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| DAWN_Prime_128 | m4 | keypair | 1 | 8,768 |
| DAWN_Prime_128 | m4 | encaps | 1 | 6,812 |
| DAWN_Prime_128 | m4 | decaps | 1 | 7,772 |
| DAWN_Prime_128 | ref | keypair | 1 | 8,896 |
| DAWN_Prime_128 | ref | encaps | 1 | 6,828 |
| DAWN_Prime_128 | ref | decaps | 1 | 7,788 |
| DAWN_Prime_256 | m4 | keypair | 1 | 17,352 |
| DAWN_Prime_256 | m4 | encaps | 1 | 13,452 |
| DAWN_Prime_256 | m4 | decaps | 1 | 15,572 |
| DAWN_Prime_256 | ref | keypair | 1 | 17,608 |
| DAWN_Prime_256 | ref | encaps | 1 | 13,468 |
| DAWN_Prime_256 | ref | decaps | 1 | 15,588 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| DAWN_Prime_128 | m4 | keypair | 100 | 43.96% |
| DAWN_Prime_128 | m4 | encaps | 100 | 63.18% |
| DAWN_Prime_128 | m4 | decaps | 100 | 31.38% |
| DAWN_Prime_128 | ref | keypair | 100 | 23.70% |
| DAWN_Prime_128 | ref | encaps | 100 | 37.39% |
| DAWN_Prime_128 | ref | decaps | 100 | 16.35% |
| DAWN_Prime_256 | m4 | keypair | 100 | 41.13% |
| DAWN_Prime_256 | m4 | encaps | 100 | 59.28% |
| DAWN_Prime_256 | m4 | decaps | 100 | 28.26% |
| DAWN_Prime_256 | ref | keypair | 100 | 21.62% |
| DAWN_Prime_256 | ref | encaps | 100 | 28.54% |
| DAWN_Prime_256 | ref | decaps | 100 | 11.38% |

**code size (speed)**

| scheme | implementation | .text | .data | .bss | total |
| --- | --- | ---: | ---: | ---: | ---: |
| DAWN_Prime_128 | m4 | 58,160 | 1,352 | 548 | 60,060 |
| DAWN_Prime_128 | ref | 40,024 | 1,352 | 548 | 41,924 |
| DAWN_Prime_256 | m4 | 66,128 | 1,352 | 548 | 68,028 |
| DAWN_Prime_256 | ref | 47,364 | 1,352 | 548 | 49,264 |
