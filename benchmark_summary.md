## crypto_kem

**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ZEN_swift_512 | m4 | keypair | 30 | 2,167,083 | 2,006,498 | 2,006,460 | 2,573,340 |
| ZEN_swift_512 | m4 | encaps | 30 | 964,846 | 964,845 | 964,845 | 964,883 |
| ZEN_swift_512 | m4 | decaps | 30 | 1,600,456 | 1,600,450 | 1,600,450 | 1,600,490 |
| ZEN_swift_512 | ref | keypair | 30 | 17,437,252 | 17,274,585 | 17,274,581 | 17,848,695 |
| ZEN_swift_512 | ref | encaps | 30 | 1,645,969 | 1,645,965 | 1,645,965 | 1,646,004 |
| ZEN_swift_512 | ref | decaps | 30 | 17,916,004 | 17,916,001 | 17,915,998 | 17,916,039 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| ZEN_swift_512 | m4 | keypair | 1 | 38,864 |
| ZEN_swift_512 | m4 | encaps | 1 | 33,896 |
| ZEN_swift_512 | m4 | decaps | 1 | 38,144 |
| ZEN_swift_512 | ref | keypair | 1 | 39,384 |
| ZEN_swift_512 | ref | encaps | 1 | 33,912 |
| ZEN_swift_512 | ref | decaps | 1 | 38,160 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| ZEN_swift_512 | m4 | keypair | 1 | 32.07% |
| ZEN_swift_512 | m4 | encaps | 1 | 55.33% |
| ZEN_swift_512 | m4 | decaps | 1 | 30.37% |
| ZEN_swift_512 | ref | keypair | 1 | 3.73% |
| ZEN_swift_512 | ref | encaps | 1 | 32.44% |
| ZEN_swift_512 | ref | decaps | 1 | 2.71% |
