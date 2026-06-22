## crypto_kem

**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| DKE-128 | m4 | keypair | 30 | 371,230 | 371,180 | 370,777 | 371,612 |
| DKE-128 | m4 | encaps | 30 | 419,366 | 419,317 | 418,912 | 419,745 |
| DKE-128 | m4 | decaps | 30 | 447,672 | 447,620 | 447,215 | 448,048 |
| DKE-128 | ref | keypair | 30 | 581,781 | 581,748 | 581,432 | 582,091 |
| DKE-128 | ref | encaps | 30 | 747,915 | 747,882 | 747,589 | 748,224 |
| DKE-128 | ref | decaps | 30 | 929,506 | 929,473 | 929,180 | 929,815 |
| DKE-256 | m4 | keypair | 30 | 1,144,449 | 1,144,460 | 1,143,887 | 1,145,427 |
| DKE-256 | m4 | encaps | 30 | 1,194,399 | 1,194,400 | 1,193,853 | 1,195,411 |
| DKE-256 | m4 | decaps | 30 | 1,245,645 | 1,245,646 | 1,245,083 | 1,246,657 |
| DKE-256 | ref | keypair | 30 | 1,676,676 | 1,676,650 | 1,676,228 | 1,677,397 |
| DKE-256 | ref | encaps | 30 | 1,886,395 | 1,886,365 | 1,885,945 | 1,887,113 |
| DKE-256 | ref | decaps | 30 | 2,183,467 | 2,183,436 | 2,183,016 | 2,184,184 |
| DKE-512 | m4 | keypair | 30 | 3,446,665 | 3,446,676 | 3,446,202 | 3,447,158 |
| DKE-512 | m4 | encaps | 30 | 3,650,043 | 3,650,038 | 3,649,563 | 3,650,516 |
| DKE-512 | m4 | decaps | 30 | 3,811,674 | 3,811,663 | 3,811,194 | 3,812,187 |
| DKE-512 | ref | keypair | 30 | 4,691,079 | 4,691,074 | 4,690,606 | 4,691,555 |
| DKE-512 | ref | encaps | 30 | 5,115,264 | 5,115,260 | 5,114,792 | 5,115,741 |
| DKE-512 | ref | decaps | 30 | 5,848,459 | 5,848,456 | 5,848,018 | 5,848,977 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| DKE-128 | m4 | keypair | 1 | 5,588 |
| DKE-128 | m4 | encaps | 1 | 8,892 |
| DKE-128 | m4 | decaps | 1 | 9,868 |
| DKE-128 | ref | keypair | 1 | 6,328 |
| DKE-128 | ref | encaps | 1 | 8,592 |
| DKE-128 | ref | decaps | 1 | 9,568 |
| DKE-256 | m4 | keypair | 1 | 8,676 |
| DKE-256 | m4 | encaps | 1 | 13,044 |
| DKE-256 | m4 | decaps | 1 | 14,820 |
| DKE-256 | ref | keypair | 1 | 15,616 |
| DKE-256 | ref | encaps | 1 | 18,944 |
| DKE-256 | ref | decaps | 1 | 20,720 |
| DKE-512 | m4 | keypair | 1 | 30,520 |
| DKE-512 | m4 | encaps | 1 | 37,112 |
| DKE-512 | m4 | decaps | 1 | 40,684 |
| DKE-512 | ref | keypair | 1 | 30,552 |
| DKE-512 | ref | encaps | 1 | 37,144 |
| DKE-512 | ref | decaps | 1 | 40,608 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| DKE-128 | m4 | keypair | 30 | 78.69% |
| DKE-128 | m4 | encaps | 30 | 75.12% |
| DKE-128 | m4 | decaps | 30 | 69.48% |
| DKE-128 | ref | keypair | 30 | 51.65% |
| DKE-128 | ref | encaps | 30 | 43.25% |
| DKE-128 | ref | decaps | 30 | 34.37% |
| DKE-256 | m4 | keypair | 30 | 80.70% |
| DKE-256 | m4 | encaps | 30 | 78.76% |
| DKE-256 | m4 | decaps | 30 | 75.20% |
| DKE-256 | ref | keypair | 30 | 54.13% |
| DKE-256 | ref | encaps | 30 | 49.12% |
| DKE-256 | ref | decaps | 30 | 42.37% |
| DKE-512 | m4 | keypair | 30 | 87.52% |
| DKE-512 | m4 | encaps | 30 | 85.17% |
| DKE-512 | m4 | decaps | 30 | 82.00% |
| DKE-512 | ref | keypair | 30 | 63.68% |
| DKE-512 | ref | encaps | 30 | 60.24% |
| DKE-512 | ref | decaps | 30 | 53.06% |

## crypto_kex

**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ADKEX-128 | m4 | init_a | 30 | 80 | 80 | 80 | 80 |
| ADKEX-128 | m4 | init_b | 30 | 371,259 | 371,232 | 370,895 | 371,807 |
| ADKEX-128 | m4 | pass1 | 30 | 784,662 | 784,652 | 784,138 | 785,548 |
| ADKEX-128 | m4 | pass2 | 30 | 987,287 | 987,258 | 986,764 | 988,173 |
| ADKEX-128 | m4 | derive_a | 30 | 573,142 | 573,102 | 572,796 | 573,558 |
| ADKEX-128 | m4 | derive_b | 30 | 5,260 | 5,260 | 5,260 | 5,260 |
| ADKEX-128 | ref | init_a | 30 | 80 | 80 | 80 | 80 |
| ADKEX-128 | ref | init_b | 30 | 581,825 | 581,818 | 581,573 | 582,245 |
| ADKEX-128 | ref | pass1 | 30 | 1,323,811 | 1,323,764 | 1,323,404 | 1,324,489 |
| ADKEX-128 | ref | pass2 | 30 | 1,797,723 | 1,797,676 | 1,797,318 | 1,798,401 |
| ADKEX-128 | ref | derive_a | 30 | 1,055,014 | 1,054,982 | 1,054,761 | 1,055,351 |
| ADKEX-128 | ref | derive_b | 30 | 5,260 | 5,260 | 5,260 | 5,260 |
| ADKEX-256 | m4 | init_a | 30 | 80 | 80 | 80 | 80 |
| ADKEX-256 | m4 | init_b | 30 | 1,144,495 | 1,144,488 | 1,143,784 | 1,145,322 |
| ADKEX-256 | m4 | pass1 | 30 | 2,333,760 | 2,333,719 | 2,332,311 | 2,335,117 |
| ADKEX-256 | m4 | pass2 | 30 | 2,675,291 | 2,675,256 | 2,673,836 | 2,676,637 |
| ADKEX-256 | m4 | derive_a | 30 | 1,486,086 | 1,486,107 | 1,485,193 | 1,487,381 |
| ADKEX-256 | m4 | derive_b | 30 | 5,260 | 5,260 | 5,260 | 5,260 |
| ADKEX-256 | ref | init_a | 30 | 80 | 80 | 80 | 80 |
| ADKEX-256 | ref | init_b | 30 | 1,676,760 | 1,676,773 | 1,676,148 | 1,677,405 |
| ADKEX-256 | ref | pass1 | 30 | 3,558,029 | 3,557,956 | 3,556,552 | 3,559,072 |
| ADKEX-256 | ref | pass2 | 30 | 4,305,110 | 4,305,066 | 4,303,631 | 4,306,150 |
| ADKEX-256 | ref | derive_a | 30 | 2,423,922 | 2,423,968 | 2,423,017 | 2,424,924 |
| ADKEX-256 | ref | derive_b | 30 | 5,260 | 5,260 | 5,260 | 5,260 |
| ADKEX-512 | m4 | init_a | 30 | 80 | 80 | 80 | 80 |
| ADKEX-512 | m4 | init_b | 30 | 3,446,604 | 3,446,575 | 3,446,045 | 3,447,213 |
| ADKEX-512 | m4 | pass1 | 30 | 7,093,163 | 7,093,176 | 7,092,402 | 7,093,961 |
| ADKEX-512 | m4 | pass2 | 30 | 8,437,489 | 8,437,498 | 8,436,719 | 8,438,314 |
| ADKEX-512 | m4 | derive_a | 30 | 4,808,553 | 4,808,606 | 4,808,057 | 4,808,966 |
| ADKEX-512 | m4 | derive_b | 30 | 20,463 | 20,463 | 20,463 | 20,463 |
| ADKEX-512 | ref | init_a | 30 | 80 | 80 | 80 | 80 |
| ADKEX-512 | ref | init_b | 30 | 4,691,018 | 4,690,990 | 4,690,428 | 4,691,602 |
| ADKEX-512 | ref | pass1 | 30 | 9,802,845 | 9,802,864 | 9,802,109 | 9,803,667 |
| ADKEX-512 | ref | pass2 | 30 | 11,939,532 | 11,939,538 | 11,938,801 | 11,940,359 |
| ADKEX-512 | ref | derive_a | 30 | 6,845,368 | 6,845,410 | 6,844,827 | 6,845,793 |
| ADKEX-512 | ref | derive_b | 30 | 20,459 | 20,459 | 20,459 | 20,459 |
| DKEX-128 | m4 | init_a | 30 | 2,957,861 | 2,962,116 | 2,887,383 | 3,015,649 |
| DKEX-128 | m4 | init_b | 30 | 2,962,133 | 2,962,074 | 2,908,635 | 3,015,629 |
| DKEX-128 | m4 | pass1 | 30 | 371,401 | 371,398 | 370,993 | 371,854 |
| DKEX-128 | m4 | pass2 | 30 | 10,575,882 | 8,908,060 | 4,961,497 | 25,184,311 |
| DKEX-128 | m4 | pass3 | 30 | 13,368,296 | 10,872,548 | 7,664,735 | 28,621,832 |
| DKEX-128 | m4 | derive_a | 30 | 5,253 | 5,253 | 5,253 | 5,253 |
| DKEX-128 | m4 | derive_b | 30 | 3,084,146 | 3,084,124 | 3,083,851 | 3,084,445 |
| DKEX-128 | ref | init_a | 30 | 2,957,858 | 2,962,108 | 2,887,373 | 3,015,639 |
| DKEX-128 | ref | init_b | 30 | 2,962,121 | 2,962,072 | 2,908,627 | 3,015,622 |
| DKEX-128 | ref | pass1 | 30 | 581,941 | 581,948 | 581,593 | 582,277 |
| DKEX-128 | ref | pass2 | 30 | 10,904,659 | 9,236,812 | 5,290,401 | 25,513,148 |
| DKEX-128 | ref | pass3 | 30 | 13,521,008 | 11,025,240 | 7,817,408 | 28,774,545 |
| DKEX-128 | ref | derive_a | 30 | 5,254 | 5,254 | 5,254 | 5,254 |
| DKEX-128 | ref | derive_b | 30 | 3,084,150 | 3,084,118 | 3,083,857 | 3,084,480 |
| DKEX-256 | m4 | init_a | 30 | 2,957,850 | 2,962,108 | 2,887,373 | 3,015,639 |
| DKEX-256 | m4 | init_b | 30 | 2,962,129 | 2,962,056 | 2,908,627 | 3,015,661 |
| DKEX-256 | m4 | pass1 | 30 | 1,144,502 | 1,144,570 | 1,143,713 | 1,145,480 |
| DKEX-256 | m4 | pass2 | 30 | 11,126,353 | 9,000,984 | 5,792,557 | 25,005,880 |
| DKEX-256 | m4 | pass3 | 30 | 14,219,508 | 12,422,784 | 7,743,313 | 32,155,567 |
| DKEX-256 | m4 | derive_a | 30 | 5,254 | 5,254 | 5,254 | 5,254 |
| DKEX-256 | m4 | derive_b | 30 | 3,084,177 | 3,084,180 | 3,083,697 | 3,084,578 |
| DKEX-256 | ref | init_a | 30 | 2,957,848 | 2,962,108 | 2,887,373 | 3,015,639 |
| DKEX-256 | ref | init_b | 30 | 2,962,125 | 2,962,064 | 2,908,630 | 3,015,625 |
| DKEX-256 | ref | pass1 | 30 | 1,676,829 | 1,676,868 | 1,676,199 | 1,677,473 |
| DKEX-256 | ref | pass2 | 30 | 11,818,667 | 9,693,080 | 6,484,997 | 25,698,343 |
| DKEX-256 | ref | pass3 | 30 | 14,464,490 | 12,667,767 | 7,988,328 | 32,400,547 |
| DKEX-256 | ref | derive_a | 30 | 5,253 | 5,253 | 5,253 | 5,253 |
| DKEX-256 | ref | derive_b | 30 | 3,084,176 | 3,084,176 | 3,083,693 | 3,084,574 |
| DKEX-512 | m4 | init_a | 30 | 2,957,868 | 2,962,119 | 2,887,382 | 3,015,666 |
| DKEX-512 | m4 | init_b | 30 | 2,962,138 | 2,962,080 | 2,908,634 | 3,015,629 |
| DKEX-512 | m4 | pass1 | 30 | 3,444,138 | 3,444,140 | 3,443,664 | 3,444,558 |
| DKEX-512 | m4 | pass2 | 30 | 13,964,627 | 11,021,043 | 8,678,200 | 30,368,014 |
| DKEX-512 | m4 | pass3 | 30 | 12,853,608 | 11,503,280 | 8,299,383 | 27,772,261 |
| DKEX-512 | m4 | derive_a | 30 | 15,960 | 15,960 | 15,960 | 15,960 |
| DKEX-512 | m4 | derive_b | 30 | 3,095,601 | 3,095,585 | 3,095,167 | 3,096,025 |
| DKEX-512 | ref | init_a | 30 | 2,957,852 | 2,962,128 | 2,887,374 | 3,015,640 |
| DKEX-512 | ref | init_b | 30 | 2,962,128 | 2,962,064 | 2,908,667 | 3,015,624 |
| DKEX-512 | ref | pass1 | 30 | 4,688,507 | 4,688,496 | 4,688,026 | 4,688,921 |
| DKEX-512 | ref | pass2 | 30 | 15,429,885 | 12,486,274 | 10,143,437 | 31,833,326 |
| DKEX-512 | ref | pass3 | 30 | 13,425,201 | 12,074,867 | 8,870,958 | 28,343,861 |
| DKEX-512 | ref | derive_a | 30 | 15,958 | 15,958 | 15,958 | 15,958 |
| DKEX-512 | ref | derive_b | 30 | 3,095,601 | 3,095,591 | 3,095,203 | 3,096,024 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| ADKEX-128 | m4 | init_a | 1 | 0 |
| ADKEX-128 | m4 | init_b | 1 | 5,588 |
| ADKEX-128 | m4 | pass1 | 1 | 8,980 |
| ADKEX-128 | m4 | pass2 | 1 | 9,940 |
| ADKEX-128 | m4 | derive_a | 1 | 9,996 |
| ADKEX-128 | m4 | derive_b | 1 | 240 |
| ADKEX-128 | ref | init_a | 1 | 0 |
| ADKEX-128 | ref | init_b | 1 | 6,328 |
| ADKEX-128 | ref | pass1 | 1 | 8,680 |
| ADKEX-128 | ref | pass2 | 1 | 9,640 |
| ADKEX-128 | ref | derive_a | 1 | 9,696 |
| ADKEX-128 | ref | derive_b | 1 | 240 |
| ADKEX-256 | m4 | init_a | 1 | 0 |
| ADKEX-256 | m4 | init_b | 1 | 8,780 |
| ADKEX-256 | m4 | pass1 | 1 | 13,132 |
| ADKEX-256 | m4 | pass2 | 1 | 14,892 |
| ADKEX-256 | m4 | derive_a | 1 | 14,948 |
| ADKEX-256 | m4 | derive_b | 1 | 240 |
| ADKEX-256 | ref | init_a | 1 | 0 |
| ADKEX-256 | ref | init_b | 1 | 15,616 |
| ADKEX-256 | ref | pass1 | 1 | 19,032 |
| ADKEX-256 | ref | pass2 | 1 | 20,792 |
| ADKEX-256 | ref | derive_a | 1 | 20,848 |
| ADKEX-256 | ref | derive_b | 1 | 240 |
| ADKEX-512 | m4 | init_a | 1 | 0 |
| ADKEX-512 | m4 | init_b | 1 | 30,628 |
| ADKEX-512 | m4 | pass1 | 1 | 37,372 |
| ADKEX-512 | m4 | pass2 | 1 | 40,788 |
| ADKEX-512 | m4 | derive_a | 1 | 40,808 |
| ADKEX-512 | m4 | derive_b | 1 | 344 |
| ADKEX-512 | ref | init_a | 1 | 0 |
| ADKEX-512 | ref | init_b | 1 | 30,660 |
| ADKEX-512 | ref | pass1 | 1 | 37,404 |
| ADKEX-512 | ref | pass2 | 1 | 40,712 |
| ADKEX-512 | ref | derive_a | 1 | 40,948 |
| ADKEX-512 | ref | derive_b | 1 | 344 |
| DKEX-128 | m4 | init_a | 1 | 38,596 |
| DKEX-128 | m4 | init_b | 1 | 38,596 |
| DKEX-128 | m4 | pass1 | 1 | 6,852 |
| DKEX-128 | m4 | pass2 | 1 | 53,636 |
| DKEX-128 | m4 | pass3 | 1 | 52,340 |
| DKEX-128 | m4 | derive_a | 1 | 240 |
| DKEX-128 | m4 | derive_b | 1 | 36,444 |
| DKEX-128 | ref | init_a | 1 | 38,708 |
| DKEX-128 | ref | init_b | 1 | 38,596 |
| DKEX-128 | ref | pass1 | 1 | 7,592 |
| DKEX-128 | ref | pass2 | 1 | 53,636 |
| DKEX-128 | ref | pass3 | 1 | 52,340 |
| DKEX-128 | ref | derive_a | 1 | 240 |
| DKEX-128 | ref | derive_b | 1 | 36,444 |
| DKEX-256 | m4 | init_a | 1 | 38,596 |
| DKEX-256 | m4 | init_b | 1 | 38,596 |
| DKEX-256 | m4 | pass1 | 1 | 9,940 |
| DKEX-256 | m4 | pass2 | 1 | 53,636 |
| DKEX-256 | m4 | pass3 | 1 | 52,452 |
| DKEX-256 | m4 | derive_a | 1 | 240 |
| DKEX-256 | m4 | derive_b | 1 | 36,444 |
| DKEX-256 | ref | init_a | 1 | 38,596 |
| DKEX-256 | ref | init_b | 1 | 38,596 |
| DKEX-256 | ref | pass1 | 1 | 16,880 |
| DKEX-256 | ref | pass2 | 1 | 53,636 |
| DKEX-256 | ref | pass3 | 1 | 52,340 |
| DKEX-256 | ref | derive_a | 1 | 240 |
| DKEX-256 | ref | derive_b | 1 | 36,556 |
| DKEX-512 | m4 | init_a | 1 | 38,596 |
| DKEX-512 | m4 | init_b | 1 | 38,596 |
| DKEX-512 | m4 | pass1 | 1 | 31,752 |
| DKEX-512 | m4 | pass2 | 1 | 53,700 |
| DKEX-512 | m4 | pass3 | 1 | 52,404 |
| DKEX-512 | m4 | derive_a | 1 | 344 |
| DKEX-512 | m4 | derive_b | 1 | 36,460 |
| DKEX-512 | ref | init_a | 1 | 38,596 |
| DKEX-512 | ref | init_b | 1 | 38,596 |
| DKEX-512 | ref | pass1 | 1 | 31,892 |
| DKEX-512 | ref | pass2 | 1 | 53,700 |
| DKEX-512 | ref | pass3 | 1 | 52,404 |
| DKEX-512 | ref | derive_a | 1 | 344 |
| DKEX-512 | ref | derive_b | 1 | 36,460 |

**hashing**

| scheme | implementation | metric | count | percentage |
| --- | --- | --- | ---: | ---: |
| ADKEX-128 | m4 | init_a | 30 | 0.00% |
| ADKEX-128 | m4 | init_b | 30 | 78.71% |
| ADKEX-128 | m4 | pass1 | 30 | 76.53% |
| ADKEX-128 | m4 | pass2 | 30 | 75.23% |
| ADKEX-128 | m4 | derive_a | 30 | 75.49% |
| ADKEX-128 | m4 | derive_b | 30 | 95.97% |
| ADKEX-128 | ref | init_a | 30 | 0.00% |
| ADKEX-128 | ref | init_b | 30 | 51.65% |
| ADKEX-128 | ref | pass1 | 30 | 46.63% |
| ADKEX-128 | ref | pass2 | 30 | 42.26% |
| ADKEX-128 | ref | derive_a | 30 | 41.83% |
| ADKEX-128 | ref | derive_b | 30 | 95.97% |
| ADKEX-256 | m4 | init_a | 30 | 0.00% |
| ADKEX-256 | m4 | init_b | 30 | 80.70% |
| ADKEX-256 | m4 | pass1 | 30 | 79.60% |
| ADKEX-256 | m4 | pass2 | 30 | 78.72% |
| ADKEX-256 | m4 | derive_a | 30 | 78.74% |
| ADKEX-256 | m4 | derive_b | 30 | 95.97% |
| ADKEX-256 | ref | init_a | 30 | 0.00% |
| ADKEX-256 | ref | init_b | 30 | 54.12% |
| ADKEX-256 | ref | pass1 | 30 | 51.36% |
| ADKEX-256 | ref | pass2 | 30 | 48.27% |
| ADKEX-256 | ref | derive_a | 30 | 47.71% |
| ADKEX-256 | ref | derive_b | 30 | 95.95% |
| ADKEX-512 | m4 | init_a | 30 | 0.00% |
| ADKEX-512 | m4 | init_b | 30 | 87.52% |
| ADKEX-512 | m4 | pass1 | 30 | 86.26% |
| ADKEX-512 | m4 | pass2 | 30 | 85.29% |
| ADKEX-512 | m4 | derive_a | 30 | 85.44% |
| ADKEX-512 | m4 | derive_b | 30 | 98.80% |
| ADKEX-512 | ref | init_a | 30 | 0.00% |
| ADKEX-512 | ref | init_b | 30 | 63.68% |
| ADKEX-512 | ref | pass1 | 30 | 61.84% |
| ADKEX-512 | ref | pass2 | 30 | 59.82% |
| ADKEX-512 | ref | derive_a | 30 | 59.63% |
| ADKEX-512 | ref | derive_b | 30 | 98.80% |
| DKEX-128 | m4 | init_a | 30 | 0.31% |
| DKEX-128 | m4 | init_b | 30 | 0.31% |
| DKEX-128 | m4 | pass1 | 30 | 77.97% |
| DKEX-128 | m4 | pass2 | 30 | 5.44% |
| DKEX-128 | m4 | pass3 | 30 | 1.17% |
| DKEX-128 | m4 | derive_a | 30 | 95.93% |
| DKEX-128 | m4 | derive_b | 30 | 0.17% |
| DKEX-128 | ref | init_a | 30 | 0.31% |
| DKEX-128 | ref | init_b | 30 | 0.31% |
| DKEX-128 | ref | pass1 | 30 | 51.19% |
| DKEX-128 | ref | pass2 | 30 | 5.32% |
| DKEX-128 | ref | pass3 | 30 | 1.16% |
| DKEX-128 | ref | derive_a | 30 | 95.93% |
| DKEX-128 | ref | derive_b | 30 | 0.17% |
| DKEX-256 | m4 | init_a | 30 | 0.31% |
| DKEX-256 | m4 | init_b | 30 | 0.31% |
| DKEX-256 | m4 | pass1 | 30 | 80.46% |
| DKEX-256 | m4 | pass2 | 30 | 11.67% |
| DKEX-256 | m4 | pass3 | 30 | 1.44% |
| DKEX-256 | m4 | derive_a | 30 | 95.93% |
| DKEX-256 | m4 | derive_b | 30 | 0.17% |
| DKEX-256 | ref | init_a | 30 | 0.31% |
| DKEX-256 | ref | init_b | 30 | 0.31% |
| DKEX-256 | ref | pass1 | 30 | 53.96% |
| DKEX-256 | ref | pass2 | 30 | 10.85% |
| DKEX-256 | ref | pass3 | 30 | 1.41% |
| DKEX-256 | ref | derive_a | 30 | 95.93% |
| DKEX-256 | ref | derive_b | 30 | 0.17% |
| DKEX-512 | m4 | init_a | 30 | 0.31% |
| DKEX-512 | m4 | init_b | 30 | 0.31% |
| DKEX-512 | m4 | pass1 | 30 | 87.43% |
| DKEX-512 | m4 | pass2 | 30 | 24.64% |
| DKEX-512 | m4 | pass3 | 30 | 4.66% |
| DKEX-512 | m4 | derive_a | 30 | 98.45% |
| DKEX-512 | m4 | derive_b | 30 | 0.51% |
| DKEX-512 | ref | init_a | 30 | 0.31% |
| DKEX-512 | ref | init_b | 30 | 0.31% |
| DKEX-512 | ref | pass1 | 30 | 63.60% |
| DKEX-512 | ref | pass2 | 30 | 22.44% |
| DKEX-512 | ref | pass3 | 30 | 4.48% |
| DKEX-512 | ref | derive_a | 30 | 98.45% |
| DKEX-512 | ref | derive_b | 30 | 0.51% |
