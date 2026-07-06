## crypto_kem
**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ZEN-128 | m4 | keypair | 107 | 609,604 | 351,241 | 326,520 | 5,223,054 |
| ZEN-128 | m4 | encaps | 107 | 361,067 | 269,616 | 269,555 | 1,667,512 |
| ZEN-128 | m4 | decaps | 106 | 1,165,541 | 399,651 | 399,651 | 13,930,377 |
| ZEN-128 | ref | keypair | 100 | 611,469 | 584,573 | 584,548 | 791,620 |
| ZEN-128 | ref | encaps | 100 | 379,141 | 379,140 | 379,079 | 379,180 |
| ZEN-128 | ref | decaps | 100 | 1,327,668 | 1,327,665 | 1,327,664 | 1,327,706 |
| ZEN-256 | m4 | keypair | 100 | 791,011 | 697,420 | 697,395 | 1,242,716 |
| ZEN-256 | m4 | encaps | 100 | 333,888 | 333,887 | 333,887 | 333,928 |
| ZEN-256 | m4 | decaps | 100 | 643,175 | 643,175 | 643,175 | 643,212 |
| ZEN-256 | ref | keypair | 100 | 1,319,332 | 1,223,388 | 1,223,363 | 1,782,427 |
| ZEN-256 | ref | encaps | 100 | 646,836 | 646,834 | 646,834 | 646,875 |
| ZEN-256 | ref | decaps | 100 | 4,110,088 | 4,110,078 | 4,110,078 | 4,110,119 |
| ZEN-512 | m4 | keypair | 100 | 2,422,853 | 2,234,348 | 2,234,310 | 3,641,327 |
| ZEN-512 | m4 | encaps | 100 | 979,464 | 979,462 | 979,462 | 979,506 |
| ZEN-512 | m4 | decaps | 100 | 1,795,227 | 1,795,224 | 1,795,223 | 1,795,266 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| ZEN-128 | m4 | keypair | 1 | 11,688 |
| ZEN-128 | m4 | encaps | 1 | 10,672 |
| ZEN-128 | m4 | decaps | 1 | 14,304 |
| ZEN-128 | ref | keypair | 1 | 12,040 |
| ZEN-128 | ref | encaps | 1 | 10,672 |
| ZEN-128 | ref | decaps | 1 | 16,480 |
| ZEN-256 | m4 | keypair | 1 | 18,216 |
| ZEN-256 | m4 | encaps | 1 | 10,672 |
| ZEN-256 | m4 | decaps | 1 | 17,856 |
| ZEN-256 | ref | keypair | 1 | 24,960 |
| ZEN-256 | ref | encaps | 1 | 10,672 |
| ZEN-256 | ref | decaps | 1 | 22,264 |
| ZEN-512 | m4 | keypair | 1 | 43,240 |
| ZEN-512 | m4 | encaps | 1 | 29,392 |
| ZEN-512 | m4 | decaps | 1 | 43,384 |
| ZEN-512 | ref | keypair | 1 | 44,856 |
| ZEN-512 | ref | encaps | 1 | 29,608 |
| ZEN-512 | ref | decaps | 1 | 52,456 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| ZEN-128 | m4 | keypair | 100 | 39.36% |
| ZEN-128 | m4 | encaps | 100 | 67.08% |
| ZEN-128 | m4 | decaps | 100 | 42.40% |
| ZEN-128 | ref | keypair | 100 | 22.66% |
| ZEN-128 | ref | encaps | 100 | 47.73% |
| ZEN-128 | ref | decaps | 100 | 12.81% |
| ZEN-256 | m4 | keypair | 100 | 35.86% |
| ZEN-256 | m4 | encaps | 100 | 60.96% |
| ZEN-256 | m4 | decaps | 100 | 29.17% |
| ZEN-256 | ref | keypair | 100 | 21.71% |
| ZEN-256 | ref | encaps | 100 | 31.49% |
| ZEN-256 | ref | decaps | 100 | 4.58% |
| ZEN-512 | m4 | keypair | 100 | 33.77% |
| ZEN-512 | m4 | encaps | 100 | 53.98% |
| ZEN-512 | m4 | decaps | 100 | 26.84% |

**code size (speed)**

| scheme | implementation | .text | .data | .bss | total |
| --- | --- | ---: | ---: | ---: | ---: |
| ZEN-128 | m4 | 48,400 | 1,352 | 548 | 50,300 |
| ZEN-128 | ref | 38,792 | 1,352 | 548 | 40,692 |
| ZEN-256 | m4 | 57,168 | 1,352 | 548 | 59,068 |
| ZEN-256 | ref | 46,744 | 1,352 | 548 | 48,644 |
| ZEN-512 | m4 | 78,344 | 1,352 | 548 | 80,244 |
| ZEN-512 | ref | 66,024 | 1,352 | 548 | 67,924 |
