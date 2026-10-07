## target status

| target | status |
| --- | --- |
| crypto_kem_BAG-Loong-128_ref_speed | exit-124 |
| crypto_kem_HQC-128_ref_speed | exit-124 |
| crypto_kem_HQC-256_ref_speed | exit-124 |
| crypto_kem_TRIKE-2_ref_speed | exit-124 |
| crypto_kem_TRIKE-5_ref_speed | exit-124 |
| crypto_kem_TRIKE-7_ref_speed | exit-124 |
| crypto_kem_TRIKE-9_ref_speed | exit-124 |
| crypto_kem_bag_piglet_256_ref_speed | exit-124 |
| crypto_kem_bag_piglet_384_ref_speed | exit-124 |
| crypto_kem_bag_piglet_512_ref_speed | exit-124 |
| crypto_sign_CEDRUSALPHA-160f_ref_speed | exit-124 |
| crypto_sign_CEDRUSALPHA-160s_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-160f_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-160s_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-256f_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-256s_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-384f_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-384s_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-384s_ref_stack | exit-124 |
| crypto_sign_CEDRUSC-512f_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-512f_ref_stack | exit-124 |
| crypto_sign_CEDRUSC-512s_ref_speed | exit-124 |
| crypto_sign_CEDRUSC-512s_ref_stack | exit-124 |

## crypto_kem
**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| Aigis-Enc-I | ref | keypair | 100 | 671,696 | 672,792 | 658,251 | 680,554 |
| Aigis-Enc-I | ref | encaps | 100 | 945,495 | 946,582 | 932,049 | 954,352 |
| Aigis-Enc-I | ref | decaps | 100 | 1,182,878 | 1,183,976 | 1,169,431 | 1,191,735 |
| Aigis-Enc-II | ref | keypair | 100 | 1,211,412 | 1,212,175 | 1,202,560 | 1,231,149 |
| Aigis-Enc-II | ref | encaps | 100 | 1,866,200 | 1,866,966 | 1,857,346 | 1,885,934 |
| Aigis-Enc-II | ref | decaps | 100 | 2,437,985 | 2,438,726 | 2,429,130 | 2,457,718 |
| Aigis-Enc-III | ref | keypair | 100 | 2,737,408 | 2,739,518 | 2,729,616 | 2,758,953 |
| Aigis-Enc-III | ref | encaps | 100 | 4,228,493 | 4,230,633 | 4,220,697 | 4,250,070 |
| Aigis-Enc-III | ref | decaps | 100 | 5,613,987 | 5,616,144 | 5,606,228 | 5,635,523 |
| Amoeba-1152 | ref | keypair | 100 | 1,754,213 | 1,768,406 | 1,735,660 | 1,769,448 |
| Amoeba-1152 | ref | encaps | 100 | 2,702,088 | 2,715,620 | 2,682,703 | 2,717,869 |
| Amoeba-1152 | ref | decaps | 100 | 3,532,876 | 3,546,054 | 3,512,621 | 3,549,413 |
| Amoeba-1728 | ref | keypair | 100 | 2,687,110 | 2,699,954 | 2,667,305 | 2,701,202 |
| Amoeba-1728 | ref | encaps | 100 | 4,173,992 | 4,186,594 | 4,152,999 | 4,189,056 |
| Amoeba-1728 | ref | decaps | 100 | 5,491,639 | 5,504,174 | 5,469,964 | 5,507,606 |
| Amoeba-2304 | ref | keypair | 100 | 3,603,511 | 3,616,192 | 3,582,841 | 3,617,376 |
| Amoeba-2304 | ref | encaps | 100 | 5,646,505 | 5,658,806 | 5,625,539 | 5,661,564 |
| Amoeba-2304 | ref | decaps | 100 | 7,459,005 | 7,471,153 | 7,437,577 | 7,474,741 |
| Amoeba-576 | ref | keypair | 100 | 974,756 | 989,587 | 957,225 | 990,478 |
| Amoeba-576 | ref | encaps | 100 | 1,503,374 | 1,517,764 | 1,484,501 | 1,520,045 |
| Amoeba-576 | ref | decaps | 100 | 1,896,407 | 1,910,395 | 1,876,540 | 1,914,200 |
| Amoeba-864 | ref | keypair | 100 | 1,371,799 | 1,386,002 | 1,353,551 | 1,386,988 |
| Amoeba-864 | ref | encaps | 100 | 2,151,689 | 2,165,466 | 2,132,112 | 2,167,931 |
| Amoeba-864 | ref | decaps | 100 | 2,739,018 | 2,752,453 | 2,718,594 | 2,756,111 |
| BW_KEM_C128 | ref | keypair | 100 | 717,811 | 716,607 | 716,233 | 776,756 |
| BW_KEM_C128 | ref | encaps | 100 | 876,280 | 875,074 | 874,699 | 935,224 |
| BW_KEM_C128 | ref | decaps | 100 | 1,107,107 | 1,105,904 | 1,105,550 | 1,166,056 |
| BW_KEM_C256 | ref | keypair | 100 | 1,678,623 | 1,669,652 | 1,668,523 | 1,730,571 |
| BW_KEM_C256 | ref | encaps | 100 | 1,867,708 | 1,858,719 | 1,857,586 | 1,919,689 |
| BW_KEM_C256 | ref | decaps | 100 | 2,408,108 | 2,399,114 | 2,398,024 | 2,460,088 |
| BW_KEM_C512 | ref | keypair | 100 | 4,992,477 | 4,990,564 | 4,989,269 | 5,183,572 |
| BW_KEM_C512 | ref | encaps | 100 | 5,437,263 | 5,435,339 | 5,434,071 | 5,628,351 |
| BW_KEM_C512 | ref | decaps | 100 | 6,746,903 | 6,744,988 | 6,743,666 | 6,938,026 |
| COMPASS-KEM-128 | ref | keypair | 100 | 3,294,332 | 3,294,328 | 3,293,984 | 3,294,902 |
| COMPASS-KEM-128 | ref | encaps | 100 | 3,469,685 | 3,469,666 | 3,469,339 | 3,470,253 |
| COMPASS-KEM-128 | ref | decaps | 100 | 3,656,320 | 3,656,302 | 3,655,970 | 3,656,888 |
| COMPASS-KEM-256 | ref | keypair | 100 | 12,524,412 | 12,524,436 | 12,523,322 | 12,525,250 |
| COMPASS-KEM-256 | ref | encaps | 100 | 12,809,181 | 12,809,183 | 12,808,106 | 12,810,056 |
| COMPASS-KEM-256 | ref | decaps | 100 | 13,124,811 | 13,124,827 | 13,123,736 | 13,125,684 |
| COMPASS-KEM-384 | ref | keypair | 100 | 8,124,889 | 8,124,765 | 8,123,941 | 8,126,047 |
| COMPASS-KEM-384 | ref | encaps | 100 | 8,779,473 | 8,779,349 | 8,778,483 | 8,780,672 |
| COMPASS-KEM-384 | ref | decaps | 100 | 9,482,598 | 9,482,472 | 9,481,647 | 9,483,753 |
| COMPASS-KEM-512 | ref | keypair | 100 | 13,992,413 | 13,992,456 | 13,990,647 | 13,994,578 |
| COMPASS-KEM-512 | ref | encaps | 100 | 14,819,224 | 14,819,265 | 14,817,418 | 14,821,474 |
| COMPASS-KEM-512 | ref | decaps | 100 | 15,708,881 | 15,708,917 | 15,707,070 | 15,711,128 |
| Cheetah128 | ref | keypair | 100 | 851,347 | 851,338 | 851,170 | 851,604 |
| Cheetah128 | ref | encaps | 100 | 1,270,035 | 1,270,038 | 1,269,855 | 1,270,290 |
| Cheetah128 | ref | decaps | 100 | 1,620,553 | 1,620,548 | 1,620,372 | 1,620,847 |
| Cheetah256 | ref | keypair | 100 | 2,225,014 | 2,225,029 | 2,224,637 | 2,225,477 |
| Cheetah256 | ref | encaps | 100 | 2,875,537 | 2,875,552 | 2,875,161 | 2,875,995 |
| Cheetah256 | ref | decaps | 100 | 3,584,573 | 3,584,586 | 3,584,230 | 3,585,059 |
| Cheetah384 | ref | keypair | 100 | 5,785,914 | 5,785,912 | 5,785,326 | 5,786,545 |
| Cheetah384 | ref | encaps | 100 | 6,723,256 | 6,723,255 | 6,722,671 | 6,723,886 |
| Cheetah384 | ref | decaps | 100 | 7,894,472 | 7,894,457 | 7,893,922 | 7,895,099 |
| Cheetah512 | ref | keypair | 100 | 9,380,821 | 9,380,845 | 9,379,749 | 9,381,671 |
| Cheetah512 | ref | encaps | 100 | 10,517,908 | 10,517,915 | 10,516,797 | 10,518,788 |
| Cheetah512 | ref | decaps | 100 | 12,100,902 | 12,100,925 | 12,099,828 | 12,101,779 |
| DKEM-128 | m4 | keypair | 100 | 365,657 | 365,660 | 364,995 | 366,125 |
| DKEM-128 | m4 | encaps | 100 | 413,736 | 413,742 | 413,078 | 414,205 |
| DKEM-128 | m4 | decaps | 100 | 442,225 | 442,231 | 441,567 | 442,695 |
| DKEM-128 | ref | keypair | 100 | 593,401 | 593,400 | 592,912 | 593,748 |
| DKEM-128 | ref | encaps | 100 | 751,892 | 751,888 | 751,401 | 752,235 |
| DKEM-128 | ref | decaps | 100 | 942,644 | 942,648 | 942,151 | 942,988 |
| DKEM-256 | m4 | keypair | 100 | 1,124,815 | 1,124,758 | 1,123,915 | 1,125,821 |
| DKEM-256 | m4 | encaps | 100 | 1,176,804 | 1,176,772 | 1,175,936 | 1,177,844 |
| DKEM-256 | m4 | decaps | 100 | 1,227,246 | 1,227,202 | 1,226,377 | 1,228,285 |
| DKEM-256 | ref | keypair | 100 | 1,679,062 | 1,679,002 | 1,678,435 | 1,679,818 |
| DKEM-256 | ref | encaps | 100 | 1,875,426 | 1,875,380 | 1,874,798 | 1,876,183 |
| DKEM-256 | ref | decaps | 100 | 2,190,169 | 2,190,118 | 2,189,580 | 2,190,923 |
| DKEM-512 | m4 | keypair | 100 | 3,422,898 | 3,422,906 | 3,422,215 | 3,423,569 |
| DKEM-512 | m4 | encaps | 100 | 3,617,960 | 3,617,980 | 3,617,312 | 3,618,664 |
| DKEM-512 | m4 | decaps | 100 | 3,780,090 | 3,780,096 | 3,779,406 | 3,780,759 |
| DKEM-512 | ref | keypair | 100 | 4,714,729 | 4,714,761 | 4,714,041 | 4,715,436 |
| DKEM-512 | ref | encaps | 100 | 5,117,963 | 5,117,962 | 5,117,311 | 5,118,628 |
| DKEM-512 | ref | decaps | 100 | 5,873,808 | 5,873,807 | 5,873,119 | 5,874,473 |
| DTRU-1024 | ref | keypair | 100 | 1,141,113 | 1,141,108 | 1,141,108 | 1,141,158 |
| DTRU-1024 | ref | encaps | 100 | 864,596 | 864,595 | 864,495 | 864,636 |
| DTRU-1024 | ref | decaps | 100 | 1,717,783 | 1,717,778 | 1,717,778 | 1,717,822 |
| DTRU-1536 | ref | keypair | 100 | 1,500,536 | 1,500,531 | 1,500,530 | 1,500,580 |
| DTRU-1536 | ref | encaps | 100 | 1,374,498 | 1,374,496 | 1,374,392 | 1,374,538 |
| DTRU-1536 | ref | decaps | 100 | 2,714,309 | 2,714,302 | 2,714,301 | 2,714,345 |
| DTRU-2048 | ref | keypair | 100 | 3,006,528 | 3,006,517 | 3,006,517 | 3,006,569 |
| DTRU-2048 | ref | encaps | 100 | 2,037,699 | 2,037,695 | 2,037,570 | 2,037,736 |
| DTRU-2048 | ref | decaps | 100 | 4,036,339 | 4,036,334 | 4,035,918 | 4,036,445 |
| DTRU-648 | ref | keypair | 100 | 954,034 | 954,030 | 954,030 | 954,103 |
| DTRU-648 | ref | encaps | 100 | 564,434 | 564,435 | 564,234 | 564,475 |
| DTRU-648 | ref | decaps | 100 | 1,126,547 | 1,126,544 | 1,126,544 | 1,126,584 |
| DTRU-768 | ref | keypair | 100 | 817,132 | 817,129 | 817,129 | 817,170 |
| DTRU-768 | ref | encaps | 100 | 694,108 | 694,107 | 694,017 | 694,146 |
| DTRU-768 | ref | decaps | 100 | 1,351,251 | 1,351,248 | 1,351,248 | 1,351,289 |
| DTRU-Light | ref | keypair | 100 | 400,420 | 400,419 | 400,419 | 400,458 |
| DTRU-Light | ref | encaps | 100 | 367,100 | 367,101 | 366,964 | 367,139 |
| DTRU-Light | ref | decaps | 100 | 739,362 | 739,360 | 739,360 | 739,399 |
| DTRU-Prime | ref | keypair | 100 | 250,672,508 | 250,672,510 | 250,672,469 | 250,672,526 |
| DTRU-Prime | ref | encaps | 100 | 1,113,654 | 1,113,653 | 1,113,478 | 1,113,697 |
| DTRU-Prime | ref | decaps | 100 | 2,263,757 | 2,263,752 | 2,263,752 | 2,263,795 |
| FLIT128_REF | ref | keypair | 100 | 462,781 | 431,158 | 427,141 | 655,552 |
| FLIT128_REF | ref | encaps | 100 | 445,292 | 445,293 | 445,241 | 445,368 |
| FLIT128_REF | ref | decaps | 100 | 746,823 | 746,832 | 746,497 | 747,164 |
| FLIT256_REF | ref | keypair | 100 | 1,173,460 | 1,092,428 | 1,088,295 | 1,827,452 |
| FLIT256_REF | ref | encaps | 100 | 968,309 | 968,308 | 968,190 | 968,466 |
| FLIT256_REF | ref | decaps | 100 | 1,626,716 | 1,626,706 | 1,626,363 | 1,627,156 |
| FLIT512_REF | ref | keypair | 100 | 4,781,591 | 4,773,076 | 4,561,815 | 6,041,332 |
| FLIT512_REF | ref | encaps | 100 | 2,936,334 | 2,936,324 | 2,935,982 | 2,936,819 |
| FLIT512_REF | ref | decaps | 100 | 4,957,620 | 4,957,622 | 4,956,975 | 4,958,472 |
| HQC-384 | ref | keypair | 1 | 429,512,647 | 429,512,647 | 429,512,647 | 429,512,647 |
| HQC-384 | ref | encaps | 1 | 795,777,939 | 795,777,939 | 795,777,939 | 795,777,939 |
| Lore-SHAKE-L1 | ref | keypair | 100 | 1,156,656 | 1,156,662 | 1,156,471 | 1,156,859 |
| Lore-SHAKE-L1 | ref | encaps | 100 | 2,249,451 | 2,249,446 | 2,249,270 | 2,249,706 |
| Lore-SHAKE-L1 | ref | decaps | 100 | 2,986,092 | 2,986,076 | 2,985,891 | 2,986,477 |
| Lore-SHAKE-L2 | ref | keypair | 100 | 4,439,454 | 4,439,452 | 4,439,046 | 4,439,978 |
| Lore-SHAKE-L2 | ref | encaps | 100 | 6,854,393 | 6,529,276 | 6,526,829 | 39,048,145 |
| Lore-SHAKE-L2 | ref | decaps | 100 | 8,444,612 | 8,445,024 | 8,409,379 | 8,479,474 |
| Lore-SHAKE-L3 | ref | keypair | 100 | 9,656,637 | 9,656,690 | 9,655,928 | 9,657,189 |
| Lore-SHAKE-L3 | ref | encaps | 100 | 12,803,029 | 12,681,652 | 12,680,281 | 24,820,845 |
| Lore-SHAKE-L3 | ref | decaps | 100 | 15,269,711 | 15,269,544 | 15,255,767 | 15,282,818 |
| Lore-SHAKE-L4 | ref | keypair | 100 | 18,537,214 | 18,537,253 | 18,536,389 | 18,537,869 |
| Lore-SHAKE-L4 | ref | encaps | 100 | 24,992,238 | 24,464,934 | 24,462,397 | 77,207,444 |
| Lore-SHAKE-L4 | ref | decaps | 100 | 29,918,758 | 29,918,482 | 29,885,503 | 29,948,405 |
| Lore-SM3-L1 | ref | keypair | 100 | 1,092,937 | 1,092,930 | 1,092,757 | 1,093,118 |
| Lore-SM3-L1 | ref | encaps | 100 | 1,930,001 | 1,929,994 | 1,929,836 | 1,930,247 |
| Lore-SM3-L1 | ref | decaps | 100 | 2,630,345 | 2,630,334 | 2,630,112 | 2,630,715 |
| Lore-SM3-L2 | ref | keypair | 100 | 4,537,505 | 4,537,492 | 4,537,015 | 4,537,984 |
| Lore-SM3-L2 | ref | encaps | 100 | 6,615,932 | 6,290,782 | 6,288,337 | 38,809,764 |
| Lore-SM3-L2 | ref | decaps | 100 | 8,170,292 | 8,171,053 | 8,135,157 | 8,202,265 |
| Lore-SM3-L3 | ref | keypair | 100 | 10,044,758 | 10,044,770 | 10,044,192 | 10,045,284 |
| Lore-SM3-L3 | ref | encaps | 100 | 12,733,717 | 12,612,326 | 12,611,046 | 24,751,706 |
| Lore-SM3-L3 | ref | decaps | 100 | 15,165,797 | 15,165,362 | 15,151,498 | 15,179,334 |
| Lore-SM3-L4 | ref | keypair | 100 | 21,675,736 | 21,675,767 | 21,674,940 | 21,676,483 |
| Lore-SM3-L4 | ref | encaps | 100 | 27,462,212 | 26,934,902 | 26,932,011 | 79,677,721 |
| Lore-SM3-L4 | ref | decaps | 100 | 32,333,916 | 32,333,330 | 32,299,551 | 32,364,902 |
| MAMBA-Viper-128 | ref | keypair | 100 | 1,087,636 | 1,087,634 | 1,087,567 | 1,087,675 |
| MAMBA-Viper-128 | ref | encaps | 100 | 1,691,774 | 1,691,978 | 1,679,991 | 1,700,038 |
| MAMBA-Viper-128 | ref | decaps | 100 | 2,189,268 | 2,189,472 | 2,175,280 | 2,198,007 |
| MAMBA-Viper-192 | ref | keypair | 100 | 2,370,949 | 2,370,943 | 2,370,943 | 2,370,986 |
| MAMBA-Viper-192 | ref | encaps | 100 | 3,256,824 | 3,257,196 | 3,243,055 | 3,267,699 |
| MAMBA-Viper-192 | ref | decaps | 100 | 3,982,022 | 3,982,190 | 3,967,731 | 3,994,300 |
| MAMBA-Viper-256 | ref | keypair | 100 | 4,109,614 | 4,109,603 | 4,109,603 | 4,109,653 |
| MAMBA-Viper-256 | ref | encaps | 100 | 5,256,908 | 5,257,184 | 5,247,669 | 5,272,301 |
| MAMBA-Viper-256 | ref | decaps | 100 | 6,200,757 | 6,201,134 | 6,189,987 | 6,218,685 |
| MAMBA-Viper-384 | ref | keypair | 100 | 12,380,035 | 12,380,045 | 12,380,007 | 12,380,057 |
| MAMBA-Viper-384 | ref | encaps | 100 | 14,300,952 | 14,301,329 | 14,284,579 | 14,320,634 |
| MAMBA-Viper-384 | ref | decaps | 100 | 15,900,362 | 15,900,440 | 15,883,077 | 15,921,432 |
| MAMBA-Viper-512 | ref | keypair | 100 | 20,273,907 | 20,273,899 | 20,273,895 | 20,274,050 |
| MAMBA-Viper-512 | ref | encaps | 100 | 22,709,010 | 22,710,220 | 22,687,708 | 22,725,358 |
| MAMBA-Viper-512 | ref | decaps | 100 | 24,751,074 | 24,752,831 | 24,727,811 | 24,769,823 |
| Mithril-128 | ref | keypair | 100 | 1,787,977 | 1,787,975 | 1,787,834 | 1,788,017 |
| Mithril-128 | ref | encaps | 100 | 2,081,984 | 2,081,979 | 2,081,978 | 2,082,019 |
| Mithril-128 | ref | decaps | 100 | 2,384,934 | 2,384,929 | 2,384,929 | 2,384,969 |
| Mithril-256 | ref | keypair | 100 | 5,300,076 | 5,300,065 | 5,300,024 | 5,300,114 |
| Mithril-256 | ref | encaps | 100 | 6,364,983 | 6,364,969 | 6,364,969 | 6,365,010 |
| Mithril-256 | ref | decaps | 100 | 7,450,593 | 7,450,577 | 7,450,576 | 7,450,617 |
| Mithril-512 | ref | keypair | 100 | 18,080,101 | 18,080,099 | 18,079,925 | 18,080,140 |
| Mithril-512 | ref | encaps | 100 | 22,110,249 | 22,110,234 | 22,110,230 | 22,110,276 |
| Mithril-512 | ref | decaps | 100 | 26,197,482 | 26,197,466 | 26,197,460 | 26,197,507 |
| NEV-C1 | ref | keypair | 100 | 346,486 | 346,486 | 346,424 | 346,523 |
| NEV-C1 | ref | encaps | 100 | 296,158 | 296,154 | 296,108 | 296,216 |
| NEV-C1 | ref | decaps | 100 | 413,945 | 413,944 | 413,894 | 414,003 |
| NEV-C1-c | ref | keypair | 100 | 346,488 | 346,487 | 346,424 | 346,527 |
| NEV-C1-c | ref | encaps | 100 | 285,688 | 285,688 | 285,688 | 285,688 |
| NEV-C1-c | ref | decaps | 100 | 466,194 | 466,194 | 466,194 | 466,194 |
| NEV-C2 | ref | keypair | 100 | 837,184 | 837,182 | 837,182 | 837,223 |
| NEV-C2 | ref | encaps | 100 | 647,498 | 647,492 | 647,447 | 647,609 |
| NEV-C2 | ref | decaps | 100 | 953,117 | 953,112 | 953,067 | 953,226 |
| NEV-C2-c | ref | keypair | 100 | 837,187 | 837,186 | 837,185 | 837,228 |
| NEV-C2-c | ref | encaps | 100 | 632,103 | 632,102 | 632,100 | 632,140 |
| NEV-C2-c | ref | decaps | 100 | 1,063,216 | 1,063,213 | 1,063,213 | 1,063,252 |
| NEV-C3 | ref | keypair | 100 | 2,536,952 | 2,536,946 | 2,536,946 | 2,536,997 |
| NEV-C3 | ref | encaps | 100 | 1,551,764 | 1,551,757 | 1,551,676 | 1,551,887 |
| NEV-C3 | ref | decaps | 100 | 2,213,443 | 2,213,440 | 2,213,353 | 2,213,562 |
| NEV-C3-c | ref | keypair | 100 | 2,536,958 | 2,536,952 | 2,536,951 | 2,537,001 |
| NEV-C3-c | ref | encaps | 100 | 1,493,452 | 1,493,448 | 1,493,448 | 1,493,488 |
| NEV-C3-c | ref | decaps | 100 | 2,406,036 | 2,406,031 | 2,406,030 | 2,406,071 |
| NEV-D1 | ref | keypair | 100 | 472,126 | 472,125 | 472,064 | 472,164 |
| NEV-D1 | ref | encaps | 100 | 447,160 | 447,159 | 447,159 | 447,199 |
| NEV-D1 | ref | decaps | 100 | 537,023 | 537,022 | 537,022 | 537,062 |
| NEV-D2 | ref | keypair | 100 | 851,715 | 851,713 | 851,713 | 851,754 |
| NEV-D2 | ref | encaps | 100 | 733,594 | 733,592 | 733,592 | 733,632 |
| NEV-D2 | ref | decaps | 100 | 978,164 | 978,161 | 978,161 | 978,202 |
| NEV-D3 | ref | keypair | 100 | 2,386,036 | 2,386,029 | 2,386,028 | 2,386,188 |
| NEV-D3 | ref | encaps | 100 | 1,736,627 | 1,736,623 | 1,736,623 | 1,736,664 |
| NEV-D3 | ref | decaps | 100 | 2,228,055 | 2,228,051 | 2,228,050 | 2,228,093 |
| NEV-R1 | ref | keypair | 100 | 400,692 | 400,692 | 400,632 | 400,733 |
| NEV-R1 | ref | encaps | 100 | 324,794 | 324,794 | 324,794 | 324,832 |
| NEV-R1 | ref | decaps | 100 | 440,297 | 440,295 | 440,295 | 440,334 |
| NEV-R2 | ref | keypair | 100 | 962,299 | 962,297 | 962,297 | 962,337 |
| NEV-R2 | ref | encaps | 100 | 635,001 | 635,000 | 635,000 | 635,040 |
| NEV-R2 | ref | decaps | 100 | 944,044 | 944,042 | 944,042 | 944,082 |
| NEV-R3 | ref | keypair | 100 | 2,695,861 | 2,695,868 | 2,695,697 | 2,696,041 |
| NEV-R3 | ref | encaps | 100 | 1,631,478 | 1,631,470 | 1,631,398 | 1,631,625 |
| NEV-R3 | ref | decaps | 100 | 2,310,652 | 2,310,652 | 2,310,571 | 2,310,787 |
| NTRE-128 | ref | keypair | 100 | 357,189 | 357,189 | 357,123 | 357,230 |
| NTRE-128 | ref | encaps | 100 | 311,874 | 311,874 | 311,826 | 311,927 |
| NTRE-128 | ref | decaps | 100 | 398,249 | 398,248 | 398,201 | 398,326 |
| NTRE-256 | ref | keypair | 100 | 658,126 | 658,126 | 657,983 | 658,166 |
| NTRE-256 | ref | encaps | 100 | 590,041 | 590,041 | 589,963 | 590,106 |
| NTRE-256 | ref | decaps | 100 | 773,720 | 773,720 | 773,646 | 773,799 |
| NTRE-512 | ref | keypair | 100 | 1,346,334 | 1,346,332 | 1,346,291 | 1,346,372 |
| NTRE-512 | ref | encaps | 100 | 1,314,715 | 1,314,710 | 1,314,581 | 1,314,887 |
| NTRE-512 | ref | decaps | 100 | 1,724,466 | 1,724,461 | 1,724,295 | 1,724,630 |
| OAEP-NTRU-1296 | ref | keypair | 100 | 1,168,597 | 1,168,592 | 1,168,592 | 1,168,704 |
| OAEP-NTRU-1296 | ref | encaps | 100 | 1,083,786 | 1,083,783 | 1,083,709 | 1,083,831 |
| OAEP-NTRU-1296 | ref | decaps | 100 | 1,124,755 | 1,124,753 | 1,124,753 | 1,124,794 |
| OAEP-NTRU-2592 | ref | keypair | 100 | 2,512,804 | 2,512,796 | 2,512,766 | 2,512,854 |
| OAEP-NTRU-2592 | ref | encaps | 100 | 2,601,963 | 2,601,956 | 2,601,956 | 2,602,004 |
| OAEP-NTRU-2592 | ref | decaps | 100 | 2,753,794 | 2,753,789 | 2,753,789 | 2,753,831 |
| OAEP-NTRU-648 | ref | keypair | 100 | 406,092 | 406,090 | 406,089 | 406,130 |
| OAEP-NTRU-648 | ref | encaps | 100 | 335,772 | 335,772 | 335,679 | 335,810 |
| OAEP-NTRU-648 | ref | decaps | 100 | 405,802 | 405,801 | 405,799 | 405,839 |
| PolarKEM-128 | ref | keypair | 100 | 311,992 | 311,992 | 311,933 | 312,031 |
| PolarKEM-128 | ref | encaps | 100 | 1,128,601 | 1,128,601 | 1,128,519 | 1,128,709 |
| PolarKEM-128 | ref | decaps | 100 | 2,262,235 | 2,262,236 | 2,262,145 | 2,262,322 |
| PolarKEM-256 | ref | keypair | 100 | 607,897 | 607,896 | 607,837 | 607,935 |
| PolarKEM-256 | ref | encaps | 100 | 1,531,463 | 1,531,466 | 1,531,354 | 1,531,609 |
| PolarKEM-256 | ref | decaps | 100 | 3,102,239 | 3,102,238 | 3,102,100 | 3,102,377 |
| PolarKEM-512 | ref | keypair | 100 | 1,199,715 | 1,199,714 | 1,199,647 | 1,199,754 |
| PolarKEM-512 | ref | encaps | 100 | 2,998,004 | 2,998,002 | 2,997,820 | 2,998,184 |
| PolarKEM-512 | ref | decaps | 100 | 6,087,571 | 6,087,570 | 6,087,344 | 6,087,794 |
| WeaverKEM-128 | ref | keypair | 100 | 1,323,822 | 1,323,830 | 1,323,260 | 1,324,516 |
| WeaverKEM-128 | ref | encaps | 100 | 1,546,356 | 1,546,374 | 1,545,653 | 1,547,064 |
| WeaverKEM-128 | ref | decaps | 100 | 1,730,598 | 1,730,610 | 1,729,933 | 1,731,304 |
| WeaverKEM-256 | ref | keypair | 100 | 2,087,512 | 2,087,568 | 2,086,153 | 2,088,730 |
| WeaverKEM-256 | ref | encaps | 100 | 2,498,163 | 2,498,122 | 2,497,144 | 2,499,488 |
| WeaverKEM-256 | ref | decaps | 100 | 2,812,900 | 2,812,847 | 2,811,880 | 2,814,225 |
| WeaverKEM-512 | ref | keypair | 100 | 6,103,257 | 6,103,274 | 6,101,435 | 6,104,592 |
| WeaverKEM-512 | ref | encaps | 100 | 7,252,164 | 7,252,172 | 7,248,853 | 7,254,548 |
| WeaverKEM-512 | ref | decaps | 100 | 8,099,215 | 8,099,242 | 8,095,902 | 8,101,638 |
| YuanYang-KEM-1024 | ref | keypair | 100 | 4,638,766 | 4,528,396 | 4,525,102 | 5,426,165 |
| YuanYang-KEM-1024 | ref | encaps | 100 | 2,427,990 | 2,428,002 | 2,427,299 | 2,428,672 |
| YuanYang-KEM-1024 | ref | decaps | 100 | 4,280,267 | 4,280,262 | 4,279,153 | 4,281,320 |
| YuanYang-KEM-2048 | ref | keypair | 100 | 8,562,821 | 8,317,194 | 8,312,452 | 10,083,501 |
| YuanYang-KEM-2048 | ref | encaps | 100 | 10,747,705 | 10,747,727 | 10,747,210 | 10,748,250 |
| YuanYang-KEM-2048 | ref | decaps | 100 | 14,813,693 | 14,813,724 | 14,813,225 | 14,814,201 |
| YuanYang-KEM-512 | ref | keypair | 100 | 2,039,295 | 1,992,534 | 1,990,363 | 2,376,377 |
| YuanYang-KEM-512 | ref | encaps | 100 | 2,744,084 | 2,744,068 | 2,743,395 | 2,744,707 |
| YuanYang-KEM-512 | ref | decaps | 100 | 3,634,291 | 3,634,302 | 3,633,335 | 3,635,286 |
| ZEN-128 | m4 | keypair | 100 | 341,192 | 314,966 | 314,926 | 516,959 |
| ZEN-128 | m4 | encaps | 100 | 270,106 | 270,105 | 270,045 | 270,148 |
| ZEN-128 | m4 | decaps | 100 | 419,139 | 419,138 | 419,138 | 419,178 |
| ZEN-128 | ref | keypair | 100 | 610,111 | 582,596 | 582,589 | 794,293 |
| ZEN-128 | ref | encaps | 100 | 387,081 | 387,079 | 387,017 | 387,132 |
| ZEN-128 | ref | decaps | 100 | 1,287,796 | 1,287,793 | 1,287,792 | 1,287,833 |
| ZEN-256 | m4 | keypair | 100 | 761,540 | 668,062 | 668,055 | 1,212,615 |
| ZEN-256 | m4 | encaps | 100 | 310,209 | 310,209 | 310,209 | 310,246 |
| ZEN-256 | m4 | decaps | 100 | 644,078 | 644,077 | 644,077 | 644,115 |
| ZEN-256 | ref | keypair | 100 | 1,330,965 | 1,235,273 | 1,235,236 | 1,792,864 |
| ZEN-256 | ref | encaps | 100 | 628,683 | 628,681 | 628,681 | 628,722 |
| ZEN-256 | ref | decaps | 100 | 3,935,436 | 3,935,426 | 3,935,426 | 3,935,466 |
| ZEN-512 | m4 | keypair | 100 | 2,070,588 | 1,882,500 | 1,882,463 | 3,286,329 |
| ZEN-512 | m4 | encaps | 100 | 901,858 | 901,857 | 901,854 | 901,908 |
| ZEN-512 | m4 | decaps | 100 | 1,681,143 | 1,681,139 | 1,681,139 | 1,681,179 |
| ZEN-512 | ref | keypair | 100 | 3,987,789 | 3,796,935 | 3,796,896 | 5,221,405 |
| ZEN-512 | ref | encaps | 100 | 1,666,855 | 1,666,849 | 1,666,849 | 1,666,892 |
| ZEN-512 | ref | decaps | 100 | 13,929,907 | 13,929,913 | 13,929,874 | 13,929,916 |
| bag_piglet_128 | ref | keypair | 100 | 9,972,660 | 9,961,669 | 9,631,802 | 10,314,010 |
| bag_piglet_128 | ref | encaps | 100 | 33,671,936 | 33,676,468 | 33,276,564 | 34,197,824 |
| bag_piglet_128 | ref | decaps | 100 | 89,986,271 | 89,998,326 | 89,097,029 | 90,738,589 |
| lwekem128 | ref | keypair | 100 | 6,570,527 | 6,570,468 | 6,569,681 | 6,571,669 |
| lwekem128 | ref | encaps | 100 | 6,601,111 | 6,601,064 | 6,600,295 | 6,602,288 |
| lwekem128 | ref | decaps | 100 | 6,792,665 | 6,792,614 | 6,791,812 | 6,793,806 |
| lwekem256 | ref | keypair | 100 | 13,166,221 | 13,166,207 | 13,164,759 | 13,167,734 |
| lwekem256 | ref | encaps | 100 | 13,280,342 | 13,280,341 | 13,278,842 | 13,281,933 |
| lwekem256 | ref | decaps | 100 | 13,701,855 | 13,701,834 | 13,700,319 | 13,703,444 |
| lwekem512 | ref | keypair | 100 | 38,584,425 | 38,584,374 | 38,583,526 | 38,585,400 |
| lwekem512 | ref | encaps | 100 | 38,657,396 | 38,657,364 | 38,656,536 | 38,658,412 |
| lwekem512 | ref | decaps | 100 | 39,483,385 | 39,483,344 | 39,482,486 | 39,484,366 |
| scabbard128 | ref | keypair | 100 | 2,631,684 | 2,631,679 | 2,631,614 | 2,631,727 |
| scabbard128 | ref | encaps | 100 | 2,828,803 | 2,828,798 | 2,828,798 | 2,828,837 |
| scabbard128 | ref | decaps | 100 | 2,985,077 | 2,985,069 | 2,985,069 | 2,985,109 |
| scabbard256 | ref | keypair | 100 | 7,739,459 | 7,739,441 | 7,739,441 | 7,739,482 |
| scabbard256 | ref | encaps | 100 | 8,462,489 | 8,462,506 | 8,462,467 | 8,462,512 |
| scabbard256 | ref | decaps | 100 | 9,089,692 | 9,089,708 | 9,089,672 | 9,089,713 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| Aigis-Enc-I | ref | keypair | 1 | 6,092 |
| Aigis-Enc-I | ref | encaps | 1 | 10,268 |
| Aigis-Enc-I | ref | decaps | 1 | 12,092 |
| Aigis-Enc-II | ref | keypair | 1 | 14,572 |
| Aigis-Enc-II | ref | encaps | 1 | 22,908 |
| Aigis-Enc-II | ref | decaps | 1 | 26,284 |
| Aigis-Enc-III | ref | keypair | 1 | 32,564 |
| Aigis-Enc-III | ref | encaps | 1 | 49,220 |
| Aigis-Enc-III | ref | decaps | 1 | 56,476 |
| Amoeba-1152 | ref | keypair | 1 | 15,568 |
| Amoeba-1152 | ref | encaps | 1 | 29,336 |
| Amoeba-1152 | ref | decaps | 1 | 31,176 |
| Amoeba-1728 | ref | keypair | 1 | 22,592 |
| Amoeba-1728 | ref | encaps | 1 | 42,944 |
| Amoeba-1728 | ref | decaps | 1 | 45,720 |
| Amoeba-2304 | ref | keypair | 1 | 29,608 |
| Amoeba-2304 | ref | encaps | 1 | 56,760 |
| Amoeba-2304 | ref | decaps | 1 | 60,680 |
| Amoeba-576 | ref | keypair | 1 | 8,560 |
| Amoeba-576 | ref | encaps | 1 | 15,888 |
| Amoeba-576 | ref | decaps | 1 | 16,936 |
| Amoeba-864 | ref | keypair | 1 | 12,776 |
| Amoeba-864 | ref | encaps | 1 | 24,160 |
| Amoeba-864 | ref | decaps | 1 | 25,744 |
| BAG-Loong-128 | ref | keypair | 1 | 1,296 |
| BAG-Loong-128 | ref | encaps | 1 | 1,376 |
| BAG-Loong-128 | ref | decaps | 1 | 2,128 |
| BW_KEM_C128 | ref | keypair | 1 | 6,672 |
| BW_KEM_C128 | ref | encaps | 1 | 9,280 |
| BW_KEM_C128 | ref | decaps | 1 | 10,016 |
| BW_KEM_C256 | ref | keypair | 1 | 15,568 |
| BW_KEM_C256 | ref | encaps | 1 | 19,072 |
| BW_KEM_C256 | ref | decaps | 1 | 20,464 |
| BW_KEM_C512 | ref | keypair | 1 | 30,368 |
| BW_KEM_C512 | ref | encaps | 1 | 37,732 |
| BW_KEM_C512 | ref | decaps | 1 | 40,652 |
| COMPASS-KEM-128 | ref | keypair | 1 | 13,400 |
| COMPASS-KEM-128 | ref | encaps | 1 | 15,620 |
| COMPASS-KEM-128 | ref | decaps | 1 | 16,248 |
| COMPASS-KEM-256 | ref | keypair | 1 | 19,656 |
| COMPASS-KEM-256 | ref | encaps | 1 | 22,444 |
| COMPASS-KEM-256 | ref | decaps | 1 | 23,824 |
| COMPASS-KEM-384 | ref | keypair | 1 | 25,276 |
| COMPASS-KEM-384 | ref | encaps | 1 | 30,460 |
| COMPASS-KEM-384 | ref | decaps | 1 | 32,752 |
| COMPASS-KEM-512 | ref | keypair | 1 | 30,008 |
| COMPASS-KEM-512 | ref | encaps | 1 | 36,216 |
| COMPASS-KEM-512 | ref | decaps | 1 | 39,448 |
| Cheetah128 | ref | keypair | 1 | 14,292 |
| Cheetah128 | ref | encaps | 1 | 21,860 |
| Cheetah128 | ref | decaps | 1 | 28,420 |
| Cheetah256 | ref | keypair | 1 | 32,612 |
| Cheetah256 | ref | encaps | 1 | 42,884 |
| Cheetah256 | ref | decaps | 1 | 54,756 |
| Cheetah384 | ref | keypair | 1 | 56,660 |
| Cheetah384 | ref | encaps | 1 | 69,628 |
| Cheetah384 | ref | decaps | 1 | 86,940 |
| Cheetah512 | ref | keypair | 1 | 86,588 |
| Cheetah512 | ref | encaps | 1 | 102,148 |
| Cheetah512 | ref | decaps | 1 | 124,700 |
| DKEM-128 | m4 | keypair | 1 | 5,580 |
| DKEM-128 | m4 | encaps | 1 | 8,884 |
| DKEM-128 | m4 | decaps | 1 | 9,868 |
| DKEM-128 | ref | keypair | 1 | 6,304 |
| DKEM-128 | ref | encaps | 1 | 8,568 |
| DKEM-128 | ref | decaps | 1 | 9,552 |
| DKEM-256 | m4 | keypair | 1 | 8,668 |
| DKEM-256 | m4 | encaps | 1 | 13,036 |
| DKEM-256 | m4 | decaps | 1 | 14,820 |
| DKEM-256 | ref | keypair | 1 | 15,600 |
| DKEM-256 | ref | encaps | 1 | 18,928 |
| DKEM-256 | ref | decaps | 1 | 20,712 |
| DKEM-512 | m4 | keypair | 1 | 30,512 |
| DKEM-512 | m4 | encaps | 1 | 37,252 |
| DKEM-512 | m4 | decaps | 1 | 40,616 |
| DKEM-512 | ref | keypair | 1 | 30,536 |
| DKEM-512 | ref | encaps | 1 | 37,276 |
| DKEM-512 | ref | decaps | 1 | 40,640 |
| DTRU-1024 | ref | keypair | 1 | 12,240 |
| DTRU-1024 | ref | encaps | 1 | 13,912 |
| DTRU-1024 | ref | decaps | 1 | 15,320 |
| DTRU-1536 | ref | keypair | 1 | 17,416 |
| DTRU-1536 | ref | encaps | 1 | 20,088 |
| DTRU-1536 | ref | decaps | 1 | 22,224 |
| DTRU-2048 | ref | keypair | 1 | 23,956 |
| DTRU-2048 | ref | encaps | 1 | 26,712 |
| DTRU-2048 | ref | decaps | 1 | 29,472 |
| DTRU-648 | ref | keypair | 1 | 8,608 |
| DTRU-648 | ref | encaps | 1 | 8,896 |
| DTRU-648 | ref | decaps | 1 | 9,760 |
| DTRU-768 | ref | keypair | 1 | 9,136 |
| DTRU-768 | ref | encaps | 1 | 10,664 |
| DTRU-768 | ref | decaps | 1 | 11,760 |
| DTRU-Light | ref | keypair | 1 | 5,632 |
| DTRU-Light | ref | encaps | 1 | 6,776 |
| DTRU-Light | ref | decaps | 1 | 7,432 |
| DTRU-Prime | ref | keypair | 1 | 39,508 |
| DTRU-Prime | ref | encaps | 1 | 41,836 |
| DTRU-Prime | ref | decaps | 1 | 43,316 |
| FLIT128_REF | ref | keypair | 1 | 5,768 |
| FLIT128_REF | ref | encaps | 1 | 6,968 |
| FLIT128_REF | ref | decaps | 1 | 7,480 |
| FLIT256_REF | ref | keypair | 1 | 9,864 |
| FLIT256_REF | ref | encaps | 1 | 13,520 |
| FLIT256_REF | ref | decaps | 1 | 14,544 |
| FLIT512_REF | ref | keypair | 1 | 18,936 |
| FLIT512_REF | ref | encaps | 1 | 26,312 |
| FLIT512_REF | ref | decaps | 1 | 28,624 |
| HQC-128 | ref | keypair | 1 | 1,288 |
| HQC-128 | ref | encaps | 1 | 1,176 |
| HQC-128 | ref | decaps | 1 | 19,624 |
| HQC-256 | ref | keypair | 1 | 1,288 |
| HQC-256 | ref | encaps | 1 | 1,192 |
| HQC-256 | ref | decaps | 1 | 19,292 |
| Lore-SHAKE-L1 | ref | keypair | 1 | 12,852 |
| Lore-SHAKE-L1 | ref | encaps | 1 | 17,212 |
| Lore-SHAKE-L1 | ref | decaps | 1 | 18,100 |
| Lore-SHAKE-L2 | ref | keypair | 1 | 34,652 |
| Lore-SHAKE-L2 | ref | encaps | 1 | 42,156 |
| Lore-SHAKE-L2 | ref | decaps | 1 | 43,524 |
| Lore-SHAKE-L3 | ref | keypair | 1 | 53,204 |
| Lore-SHAKE-L3 | ref | encaps | 1 | 63,196 |
| Lore-SHAKE-L3 | ref | decaps | 1 | 65,396 |
| Lore-SHAKE-L4 | ref | keypair | 1 | 79,260 |
| Lore-SHAKE-L4 | ref | encaps | 1 | 94,236 |
| Lore-SHAKE-L4 | ref | decaps | 1 | 97,492 |
| Lore-SM3-L1 | ref | keypair | 1 | 12,852 |
| Lore-SM3-L1 | ref | encaps | 1 | 17,212 |
| Lore-SM3-L1 | ref | decaps | 1 | 18,100 |
| Lore-SM3-L2 | ref | keypair | 1 | 34,652 |
| Lore-SM3-L2 | ref | encaps | 1 | 42,156 |
| Lore-SM3-L2 | ref | decaps | 1 | 43,524 |
| Lore-SM3-L3 | ref | keypair | 1 | 53,204 |
| Lore-SM3-L3 | ref | encaps | 1 | 63,196 |
| Lore-SM3-L3 | ref | decaps | 1 | 65,396 |
| Lore-SM3-L4 | ref | keypair | 1 | 79,260 |
| Lore-SM3-L4 | ref | encaps | 1 | 94,236 |
| Lore-SM3-L4 | ref | decaps | 1 | 97,492 |
| MAMBA-Viper-128 | ref | keypair | 1 | 11,476 |
| MAMBA-Viper-128 | ref | encaps | 1 | 14,772 |
| MAMBA-Viper-128 | ref | decaps | 1 | 15,132 |
| MAMBA-Viper-192 | ref | keypair | 1 | 17,684 |
| MAMBA-Viper-192 | ref | encaps | 1 | 22,596 |
| MAMBA-Viper-192 | ref | decaps | 1 | 22,996 |
| MAMBA-Viper-256 | ref | keypair | 1 | 25,044 |
| MAMBA-Viper-256 | ref | encaps | 1 | 31,036 |
| MAMBA-Viper-256 | ref | decaps | 1 | 31,428 |
| MAMBA-Viper-384 | ref | keypair | 1 | 59,548 |
| MAMBA-Viper-384 | ref | encaps | 1 | 68,740 |
| MAMBA-Viper-384 | ref | decaps | 1 | 69,140 |
| MAMBA-Viper-512 | ref | keypair | 1 | 91,324 |
| MAMBA-Viper-512 | ref | encaps | 1 | 102,772 |
| MAMBA-Viper-512 | ref | decaps | 1 | 103,252 |
| Mithril-128 | ref | keypair | 1 | 7,492 |
| Mithril-128 | ref | encaps | 1 | 9,772 |
| Mithril-128 | ref | decaps | 1 | 11,764 |
| Mithril-256 | ref | keypair | 1 | 11,596 |
| Mithril-256 | ref | encaps | 1 | 15,972 |
| Mithril-256 | ref | decaps | 1 | 19,612 |
| Mithril-512 | ref | keypair | 1 | 19,788 |
| Mithril-512 | ref | encaps | 1 | 28,452 |
| Mithril-512 | ref | decaps | 1 | 35,748 |
| NEV-C1 | ref | keypair | 1 | 6,008 |
| NEV-C1 | ref | encaps | 1 | 6,056 |
| NEV-C1 | ref | decaps | 1 | 6,688 |
| NEV-C1-c | ref | keypair | 1 | 6,008 |
| NEV-C1-c | ref | encaps | 1 | 5,032 |
| NEV-C1-c | ref | decaps | 1 | 5,560 |
| NEV-C2 | ref | keypair | 1 | 15,008 |
| NEV-C2 | ref | encaps | 1 | 14,596 |
| NEV-C2 | ref | decaps | 1 | 15,860 |
| NEV-C2-c | ref | keypair | 1 | 15,008 |
| NEV-C2-c | ref | encaps | 1 | 12,548 |
| NEV-C2-c | ref | decaps | 1 | 13,604 |
| NEV-C3 | ref | keypair | 1 | 38,820 |
| NEV-C3 | ref | encaps | 1 | 34,536 |
| NEV-C3 | ref | decaps | 1 | 37,072 |
| NEV-C3-c | ref | keypair | 1 | 32,767 |
| NEV-C3-c | ref | encaps | 1 | 30,440 |
| NEV-C3-c | ref | decaps | 1 | 32,560 |
| NEV-D1 | ref | keypair | 1 | 7,432 |
| NEV-D1 | ref | encaps | 1 | 7,480 |
| NEV-D1 | ref | decaps | 1 | 8,264 |
| NEV-D2 | ref | keypair | 1 | 14,988 |
| NEV-D2 | ref | encaps | 1 | 14,576 |
| NEV-D2 | ref | decaps | 1 | 16,144 |
| NEV-D3 | ref | keypair | 1 | 38,684 |
| NEV-D3 | ref | encaps | 1 | 34,500 |
| NEV-D3 | ref | decaps | 1 | 37,644 |
| NEV-R1 | ref | keypair | 1 | 7,556 |
| NEV-R1 | ref | encaps | 1 | 7,344 |
| NEV-R1 | ref | decaps | 1 | 8,032 |
| NEV-R2 | ref | keypair | 1 | 19,444 |
| NEV-R2 | ref | encaps | 1 | 17,348 |
| NEV-R2 | ref | decaps | 1 | 18,724 |
| NEV-R3 | ref | keypair | 1 | 46,340 |
| NEV-R3 | ref | encaps | 1 | 40,348 |
| NEV-R3 | ref | decaps | 1 | 43,108 |
| NTRE-128 | ref | keypair | 1 | 6,336 |
| NTRE-128 | ref | encaps | 1 | 6,864 |
| NTRE-128 | ref | decaps | 1 | 7,176 |
| NTRE-256 | ref | keypair | 1 | 11,520 |
| NTRE-256 | ref | encaps | 1 | 11,488 |
| NTRE-256 | ref | decaps | 1 | 13,752 |
| NTRE-512 | ref | keypair | 1 | 19,584 |
| NTRE-512 | ref | encaps | 1 | 20,240 |
| NTRE-512 | ref | decaps | 1 | 24,080 |
| OAEP-NTRU-1296 | ref | keypair | 1 | 16,776 |
| OAEP-NTRU-1296 | ref | encaps | 1 | 15,304 |
| OAEP-NTRU-1296 | ref | decaps | 1 | 17,920 |
| OAEP-NTRU-2592 | ref | keypair | 1 | 32,808 |
| OAEP-NTRU-2592 | ref | encaps | 1 | 29,872 |
| OAEP-NTRU-2592 | ref | decaps | 1 | 35,480 |
| OAEP-NTRU-648 | ref | keypair | 1 | 7,968 |
| OAEP-NTRU-648 | ref | encaps | 1 | 7,248 |
| OAEP-NTRU-648 | ref | decaps | 1 | 9,152 |
| PolarKEM-128 | ref | keypair | 1 | 1,184 |
| PolarKEM-128 | ref | encaps | 1 | 9,200 |
| PolarKEM-128 | ref | decaps | 1 | 10,000 |
| PolarKEM-256 | ref | keypair | 1 | 1,184 |
| PolarKEM-256 | ref | encaps | 1 | 13,336 |
| PolarKEM-256 | ref | decaps | 1 | 14,680 |
| PolarKEM-512 | ref | keypair | 1 | 1,184 |
| PolarKEM-512 | ref | encaps | 1 | 21,616 |
| PolarKEM-512 | ref | decaps | 1 | 24,204 |
| TRIKE-2 | ref | keypair | 1 | 1,984 |
| TRIKE-2 | ref | encaps | 1 | 2,748 |
| TRIKE-2 | ref | decaps | 1 | 3,128 |
| TRIKE-5 | ref | keypair | 1 | 2,232 |
| TRIKE-5 | ref | encaps | 1 | 3,304 |
| TRIKE-5 | ref | decaps | 1 | 4,024 |
| WeaverKEM-128 | ref | keypair | 1 | 10,040 |
| WeaverKEM-128 | ref | encaps | 1 | 11,880 |
| WeaverKEM-128 | ref | decaps | 1 | 12,688 |
| WeaverKEM-256 | ref | keypair | 1 | 13,312 |
| WeaverKEM-256 | ref | encaps | 1 | 16,456 |
| WeaverKEM-256 | ref | decaps | 1 | 18,076 |
| WeaverKEM-512 | ref | keypair | 1 | 34,836 |
| WeaverKEM-512 | ref | encaps | 1 | 32,792 |
| WeaverKEM-512 | ref | decaps | 1 | 36,120 |
| YuanYang-KEM-1024 | ref | keypair | 1 | 17,664 |
| YuanYang-KEM-1024 | ref | encaps | 1 | 21,000 |
| YuanYang-KEM-1024 | ref | decaps | 1 | 40,152 |
| YuanYang-KEM-2048 | ref | keypair | 1 | 34,080 |
| YuanYang-KEM-2048 | ref | encaps | 1 | 37,464 |
| YuanYang-KEM-2048 | ref | decaps | 1 | 44,256 |
| YuanYang-KEM-512 | ref | keypair | 1 | 9,456 |
| YuanYang-KEM-512 | ref | encaps | 1 | 12,760 |
| YuanYang-KEM-512 | ref | decaps | 1 | 23,108 |
| ZEN-128 | m4 | keypair | 1 | 9,856 |
| ZEN-128 | m4 | encaps | 1 | 12,984 |
| ZEN-128 | m4 | decaps | 1 | 14,056 |
| ZEN-128 | ref | keypair | 1 | 9,984 |
| ZEN-128 | ref | encaps | 1 | 13,000 |
| ZEN-128 | ref | decaps | 1 | 14,072 |
| ZEN-256 | m4 | keypair | 1 | 17,352 |
| ZEN-256 | m4 | encaps | 1 | 13,412 |
| ZEN-256 | m4 | decaps | 1 | 15,540 |
| ZEN-256 | ref | keypair | 1 | 17,608 |
| ZEN-256 | ref | encaps | 1 | 13,428 |
| ZEN-256 | ref | decaps | 1 | 15,556 |
| ZEN-512 | m4 | keypair | 1 | 38,856 |
| ZEN-512 | m4 | encaps | 1 | 33,888 |
| ZEN-512 | m4 | decaps | 1 | 38,176 |
| ZEN-512 | ref | keypair | 1 | 39,376 |
| ZEN-512 | ref | encaps | 1 | 33,904 |
| ZEN-512 | ref | decaps | 1 | 38,192 |
| bag_piglet_128 | ref | keypair | 1 | 1,432 |
| bag_piglet_128 | ref | encaps | 1 | 1,720 |
| bag_piglet_128 | ref | decaps | 1 | 4,608 |
| bag_piglet_256 | ref | keypair | 1 | 1,992 |
| bag_piglet_256 | ref | encaps | 1 | 5,924 |
| bag_piglet_256 | ref | decaps | 1 | 14,604 |
| bag_piglet_384 | ref | keypair | 1 | 2,616 |
| bag_piglet_384 | ref | encaps | 1 | 7,672 |
| bag_piglet_384 | ref | decaps | 1 | 23,000 |
| lwekem128 | ref | keypair | 1 | 15,956 |
| lwekem128 | ref | encaps | 1 | 17,448 |
| lwekem128 | ref | decaps | 1 | 19,412 |
| lwekem256 | ref | keypair | 1 | 31,348 |
| lwekem256 | ref | encaps | 1 | 34,548 |
| lwekem256 | ref | decaps | 1 | 38,052 |
| lwekem512 | ref | keypair | 1 | 52,508 |
| lwekem512 | ref | encaps | 1 | 58,396 |
| lwekem512 | ref | decaps | 1 | 65,472 |
| scabbard128 | ref | keypair | 1 | 16,956 |
| scabbard128 | ref | encaps | 1 | 18,412 |
| scabbard128 | ref | decaps | 1 | 19,172 |
| scabbard256 | ref | keypair | 1 | 33,756 |
| scabbard256 | ref | encaps | 1 | 36,668 |
| scabbard256 | ref | decaps | 1 | 38,316 |

**code size (speed)**

| scheme | implementation | .text | .data | .bss | total |
| --- | --- | ---: | ---: | ---: | ---: |
| Aigis-Enc-I | ref | 28,012 | 1,352 | 548 | 29,912 |
| Aigis-Enc-II | ref | 35,060 | 1,352 | 548 | 36,960 |
| Aigis-Enc-III | ref | 43,308 | 1,352 | 548 | 45,208 |
| Amoeba-1152 | ref | 43,932 | 4,192 | 548 | 48,672 |
| Amoeba-1728 | ref | 44,192 | 4,192 | 548 | 48,932 |
| Amoeba-2304 | ref | 44,436 | 4,192 | 548 | 49,176 |
| Amoeba-576 | ref | 43,816 | 4,192 | 548 | 48,556 |
| Amoeba-864 | ref | 42,900 | 4,192 | 548 | 47,640 |
| BAG-Loong-128 | ref | 40,580 | 1,352 | 548 | 42,480 |
| BAG-Loong-256 | ref | 41,412 | 1,352 | 548 | 43,312 |
| BAG-Loong-384 | ref | 41,604 | 1,352 | 548 | 43,504 |
| BAG-Loong-512 | ref | 41,476 | 1,352 | 548 | 43,376 |
| BW_KEM_C128 | ref | 25,292 | 1,352 | 548 | 27,192 |
| BW_KEM_C256 | ref | 36,784 | 1,352 | 548 | 38,684 |
| BW_KEM_C512 | ref | 37,304 | 1,352 | 548 | 39,204 |
| COMPASS-KEM-128 | ref | 26,380 | 1,352 | 548 | 28,280 |
| COMPASS-KEM-256 | ref | 26,760 | 1,352 | 548 | 28,660 |
| COMPASS-KEM-384 | ref | 28,148 | 1,352 | 548 | 30,048 |
| COMPASS-KEM-512 | ref | 28,464 | 1,352 | 548 | 30,364 |
| Cheetah128 | ref | 29,588 | 1,864 | 548 | 32,000 |
| Cheetah256 | ref | 29,904 | 1,864 | 548 | 32,316 |
| Cheetah384 | ref | 30,292 | 1,864 | 548 | 32,704 |
| Cheetah512 | ref | 30,304 | 1,864 | 548 | 32,716 |
| DKEM-128 | m4 | 35,432 | 1,352 | 548 | 37,332 |
| DKEM-128 | ref | 23,980 | 1,352 | 548 | 25,880 |
| DKEM-256 | m4 | 36,268 | 1,352 | 548 | 38,168 |
| DKEM-256 | ref | 24,972 | 1,352 | 952 | 27,276 |
| DKEM-512 | m4 | 37,964 | 1,352 | 548 | 39,864 |
| DKEM-512 | ref | 28,996 | 1,352 | 952 | 31,300 |
| DTRU-1024 | ref | 30,048 | 1,872 | 548 | 32,468 |
| DTRU-1536 | ref | 28,724 | 3,152 | 548 | 32,424 |
| DTRU-2048 | ref | 35,340 | 1,872 | 548 | 37,760 |
| DTRU-648 | ref | 29,876 | 1,840 | 548 | 32,264 |
| DTRU-768 | ref | 28,024 | 3,152 | 548 | 31,724 |
| DTRU-Light | ref | 27,340 | 1,864 | 548 | 29,752 |
| DTRU-Prime | ref | 30,048 | 7,488 | 548 | 38,084 |
| FLIT128_REF | ref | 32,028 | 1,352 | 548 | 33,928 |
| FLIT256_REF | ref | 32,984 | 1,352 | 548 | 34,884 |
| FLIT512_REF | ref | 34,636 | 1,352 | 548 | 36,536 |
| HQC-128 | ref | 33,712 | 1,352 | 5,424 | 40,488 |
| HQC-256 | ref | 30,616 | 1,352 | 5,424 | 37,392 |
| HQC-384 | ref | 31,032 | 1,352 | 5,424 | 37,808 |
| HQC-512 | ref | 31,088 | 1,352 | 5,424 | 37,864 |
| Lore-SHAKE-L1 | ref | 28,904 | 1,608 | 548 | 31,060 |
| Lore-SHAKE-L2 | ref | 33,992 | 1,608 | 552 | 36,152 |
| Lore-SHAKE-L3 | ref | 34,728 | 1,608 | 552 | 36,888 |
| Lore-SHAKE-L4 | ref | 35,536 | 1,608 | 552 | 37,696 |
| Lore-SM3-L1 | ref | 26,548 | 1,608 | 548 | 28,704 |
| Lore-SM3-L2 | ref | 31,640 | 1,608 | 552 | 33,800 |
| Lore-SM3-L3 | ref | 32,376 | 1,608 | 552 | 34,536 |
| Lore-SM3-L4 | ref | 33,184 | 1,608 | 552 | 35,344 |
| MAMBA-Viper-128 | ref | 29,420 | 1,352 | 844 | 31,616 |
| MAMBA-Viper-192 | ref | 29,948 | 1,352 | 844 | 32,144 |
| MAMBA-Viper-256 | ref | 29,344 | 1,352 | 844 | 31,540 |
| MAMBA-Viper-384 | ref | 29,976 | 1,352 | 844 | 32,172 |
| MAMBA-Viper-512 | ref | 29,968 | 1,352 | 844 | 32,164 |
| Mithril-128 | ref | 25,520 | 1,352 | 548 | 27,420 |
| Mithril-256 | ref | 25,940 | 1,352 | 548 | 27,840 |
| Mithril-512 | ref | 26,024 | 1,352 | 548 | 27,924 |
| NEV-C1 | ref | 25,912 | 1,608 | 548 | 28,068 |
| NEV-C1-c | ref | 25,384 | 1,608 | 548 | 27,540 |
| NEV-C2 | ref | 34,072 | 1,608 | 548 | 36,228 |
| NEV-C2-c | ref | 33,536 | 1,608 | 548 | 35,692 |
| NEV-C3 | ref | 45,816 | 1,608 | 548 | 47,972 |
| NEV-C3-c | ref | 45,184 | 1,608 | 548 | 47,340 |
| NEV-D1 | ref | 24,908 | 1,608 | 548 | 27,064 |
| NEV-D2 | ref | 31,412 | 1,608 | 548 | 33,568 |
| NEV-D3 | ref | 41,340 | 1,608 | 548 | 43,496 |
| NEV-R1 | ref | 29,172 | 1,480 | 548 | 31,200 |
| NEV-R2 | ref | 41,536 | 1,480 | 548 | 43,564 |
| NEV-R3 | ref | 49,544 | 1,480 | 548 | 51,572 |
| NTRE-128 | ref | 25,024 | 1,352 | 548 | 26,924 |
| NTRE-256 | ref | 25,824 | 1,352 | 548 | 27,724 |
| NTRE-512 | ref | 26,188 | 1,352 | 548 | 28,088 |
| OAEP-NTRU-1296 | ref | 31,264 | 1,352 | 548 | 33,164 |
| OAEP-NTRU-2592 | ref | 33,660 | 1,352 | 548 | 35,560 |
| OAEP-NTRU-648 | ref | 28,616 | 1,352 | 548 | 30,516 |
| PolarKEM-128 | ref | 24,856 | 1,352 | 548 | 26,756 |
| PolarKEM-256 | ref | 25,272 | 1,352 | 548 | 27,172 |
| PolarKEM-512 | ref | 25,856 | 1,352 | 548 | 27,756 |
| TRIKE-2 | ref | 38,104 | 1,352 | 548 | 40,004 |
| TRIKE-5 | ref | 39,488 | 1,352 | 548 | 41,388 |
| TRIKE-7 | ref | 40,424 | 1,352 | 548 | 42,324 |
| TRIKE-9 | ref | 40,568 | 1,352 | 548 | 42,468 |
| WeaverKEM-128 | ref | 31,420 | 1,480 | 548 | 33,448 |
| WeaverKEM-256 | ref | 35,836 | 1,480 | 548 | 37,864 |
| WeaverKEM-512 | ref | 46,640 | 1,608 | 548 | 48,796 |
| YuanYang-KEM-1024 | ref | 51,772 | 1,352 | 548 | 53,672 |
| YuanYang-KEM-2048 | ref | 60,604 | 1,352 | 548 | 62,504 |
| YuanYang-KEM-512 | ref | 48,484 | 1,352 | 548 | 50,384 |
| ZEN-128 | m4 | 49,272 | 1,352 | 548 | 51,172 |
| ZEN-128 | ref | 40,168 | 1,352 | 548 | 42,068 |
| ZEN-256 | m4 | 58,216 | 1,352 | 548 | 60,116 |
| ZEN-256 | ref | 47,996 | 1,352 | 548 | 49,896 |
| ZEN-512 | m4 | 74,404 | 1,352 | 548 | 76,304 |
| ZEN-512 | ref | 67,940 | 1,352 | 548 | 69,840 |
| bag_piglet_128 | ref | 35,924 | 1,352 | 1,172 | 38,448 |
| bag_piglet_256 | ref | 36,208 | 1,352 | 1,300 | 38,860 |
| bag_piglet_384 | ref | 36,656 | 1,352 | 1,396 | 39,404 |
| bag_piglet_512 | ref | 38,096 | 1,352 | 1,508 | 40,956 |
| lwekem128 | ref | 24,512 | 1,352 | 548 | 26,412 |
| lwekem256 | ref | 26,000 | 1,352 | 548 | 27,900 |
| lwekem512 | ref | 27,152 | 1,352 | 548 | 29,052 |
| scabbard128 | ref | 24,088 | 1,352 | 548 | 25,988 |
| scabbard256 | ref | 23,232 | 1,352 | 548 | 25,132 |


## crypto_kex
**speed**

| scheme | implementation | metric | count | average | median | min | max |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ADKEX-128 | m4 | init_a | 100 | 85 | 85 | 85 | 85 |
| ADKEX-128 | m4 | init_b | 100 | 365,720 | 365,710 | 365,307 | 366,288 |
| ADKEX-128 | m4 | pass1 | 100 | 773,722 | 773,718 | 773,188 | 774,619 |
| ADKEX-128 | m4 | pass2 | 100 | 976,271 | 976,280 | 975,737 | 977,168 |
| ADKEX-128 | m4 | derive_a | 100 | 567,652 | 567,644 | 567,172 | 568,142 |
| ADKEX-128 | m4 | derive_b | 100 | 5,222 | 5,222 | 5,222 | 5,225 |
| ADKEX-128 | ref | init_a | 100 | 85 | 85 | 85 | 85 |
| ADKEX-128 | ref | init_b | 100 | 593,470 | 593,462 | 593,168 | 593,911 |
| ADKEX-128 | ref | pass1 | 100 | 1,339,626 | 1,339,610 | 1,339,213 | 1,340,306 |
| ADKEX-128 | ref | pass2 | 100 | 1,814,846 | 1,814,836 | 1,814,444 | 1,815,524 |
| ADKEX-128 | ref | derive_a | 100 | 1,068,082 | 1,068,064 | 1,067,723 | 1,068,500 |
| ADKEX-128 | ref | derive_b | 100 | 5,223 | 5,223 | 5,223 | 5,225 |
| ADKEX-256 | m4 | init_a | 100 | 85 | 85 | 85 | 85 |
| ADKEX-256 | m4 | init_b | 100 | 1,124,997 | 1,125,019 | 1,123,976 | 1,126,011 |
| ADKEX-256 | m4 | pass1 | 100 | 2,296,979 | 2,296,980 | 2,295,481 | 2,298,289 |
| ADKEX-256 | m4 | pass2 | 100 | 2,639,525 | 2,639,518 | 2,638,014 | 2,640,849 |
| ADKEX-256 | m4 | derive_a | 100 | 1,467,733 | 1,467,708 | 1,466,792 | 1,468,979 |
| ADKEX-256 | m4 | derive_b | 100 | 5,224 | 5,224 | 5,222 | 5,224 |
| ADKEX-256 | ref | init_a | 100 | 85 | 85 | 85 | 85 |
| ADKEX-256 | ref | init_b | 100 | 1,679,173 | 1,679,195 | 1,678,332 | 1,679,959 |
| ADKEX-256 | ref | pass1 | 100 | 3,549,725 | 3,549,768 | 3,548,413 | 3,550,577 |
| ADKEX-256 | ref | pass2 | 100 | 4,300,966 | 4,301,008 | 4,299,653 | 4,301,817 |
| ADKEX-256 | ref | derive_a | 100 | 2,430,612 | 2,430,634 | 2,429,820 | 2,431,489 |
| ADKEX-256 | ref | derive_b | 100 | 5,224 | 5,224 | 5,222 | 5,224 |
| ADKEX-512 | m4 | init_a | 100 | 85 | 85 | 85 | 85 |
| ADKEX-512 | m4 | init_b | 100 | 3,422,813 | 3,422,818 | 3,421,817 | 3,423,603 |
| ADKEX-512 | m4 | pass1 | 100 | 7,037,577 | 7,037,536 | 7,036,152 | 7,038,699 |
| ADKEX-512 | m4 | pass2 | 100 | 8,373,792 | 8,373,780 | 8,372,319 | 8,374,872 |
| ADKEX-512 | m4 | derive_a | 100 | 4,776,706 | 4,776,718 | 4,776,113 | 4,777,385 |
| ADKEX-512 | m4 | derive_b | 100 | 20,287 | 20,287 | 20,287 | 20,287 |
| ADKEX-512 | ref | init_a | 100 | 85 | 85 | 85 | 85 |
| ADKEX-512 | ref | init_b | 100 | 4,714,718 | 4,714,715 | 4,713,723 | 4,715,509 |
| ADKEX-512 | ref | pass1 | 100 | 9,829,595 | 9,829,568 | 9,828,162 | 9,830,698 |
| ADKEX-512 | ref | pass2 | 100 | 11,967,732 | 11,967,700 | 11,966,300 | 11,968,797 |
| ADKEX-512 | ref | derive_a | 100 | 6,870,541 | 6,870,565 | 6,869,900 | 6,871,207 |
| ADKEX-512 | ref | derive_b | 100 | 20,286 | 20,286 | 20,286 | 20,325 |
| AFS_KEX_C128 | ref | init_a | 100 | 1,507,510 | 1,500,403 | 1,499,638 | 1,620,782 |
| AFS_KEX_C128 | ref | init_b | 100 | 1,505,089 | 1,500,351 | 1,499,361 | 1,620,621 |
| AFS_KEX_C128 | ref | pass1 | 100 | 877,482 | 875,114 | 874,617 | 935,247 |
| AFS_KEX_C128 | ref | pass2 | 100 | 1,993,304 | 1,987,362 | 1,986,664 | 2,047,716 |
| AFS_KEX_C128 | ref | pass3 | 100 | 1,857,198 | 1,851,234 | 1,850,546 | 1,911,451 |
| AFS_KEX_C128 | ref | pass4 | 100 | 742,593 | 739,043 | 738,656 | 799,228 |
| AFS_KEX_C128 | ref | derive_a | 100 | 135 | 135 | 135 | 135 |
| AFS_KEX_C128 | ref | derive_b | 100 | 131 | 131 | 131 | 131 |
| AFS_KEX_C256 | ref | init_a | 100 | 3,467,947 | 3,453,624 | 3,451,576 | 3,696,480 |
| AFS_KEX_C256 | ref | init_b | 100 | 3,465,548 | 3,453,495 | 3,452,164 | 3,575,602 |
| AFS_KEX_C256 | ref | pass1 | 100 | 1,864,807 | 1,858,770 | 1,858,115 | 1,919,827 |
| AFS_KEX_C256 | ref | pass2 | 100 | 4,287,485 | 4,274,299 | 4,272,991 | 4,455,929 |
| AFS_KEX_C256 | ref | pass3 | 100 | 4,134,425 | 4,121,221 | 4,119,966 | 4,302,851 |
| AFS_KEX_C256 | ref | pass4 | 100 | 1,712,806 | 1,705,645 | 1,704,621 | 1,827,073 |
| AFS_KEX_C256 | ref | derive_a | 100 | 145 | 145 | 145 | 145 |
| AFS_KEX_C256 | ref | derive_b | 100 | 140 | 140 | 140 | 140 |
| AFS_KEX_C512 | ref | init_a | 100 | 10,196,380 | 10,196,364 | 10,194,090 | 10,198,863 |
| AFS_KEX_C512 | ref | init_b | 100 | 10,196,270 | 10,196,340 | 10,194,150 | 10,198,394 |
| AFS_KEX_C512 | ref | pass1 | 100 | 5,435,406 | 5,435,436 | 5,434,384 | 5,436,473 |
| AFS_KEX_C512 | ref | pass2 | 100 | 12,226,467 | 12,226,418 | 12,225,121 | 12,227,829 |
| AFS_KEX_C512 | ref | pass3 | 100 | 11,840,154 | 11,840,124 | 11,838,776 | 11,841,507 |
| AFS_KEX_C512 | ref | pass4 | 100 | 5,048,973 | 5,048,955 | 5,047,850 | 5,050,215 |
| AFS_KEX_C512 | ref | derive_a | 100 | 189 | 189 | 189 | 190 |
| AFS_KEX_C512 | ref | derive_b | 100 | 185 | 185 | 185 | 185 |
| DKEX-128 | m4 | init_a | 100 | 2,961,462 | 2,963,788 | 2,889,967 | 3,016,635 |
| DKEX-128 | m4 | init_b | 100 | 2,957,662 | 2,953,322 | 2,868,835 | 3,016,715 |
| DKEX-128 | m4 | pass1 | 100 | 365,893 | 365,892 | 365,350 | 366,388 |
| DKEX-128 | m4 | pass2 | 100 | 11,253,632 | 9,097,853 | 5,045,455 | 42,991,170 |
| DKEX-128 | m4 | pass3 | 100 | 13,799,806 | 11,200,410 | 7,780,973 | 52,562,120 |
| DKEX-128 | m4 | derive_a | 100 | 5,216 | 5,216 | 5,216 | 5,216 |
| DKEX-128 | m4 | derive_b | 100 | 3,111,072 | 3,111,073 | 3,110,591 | 3,111,563 |
| DKEX-128 | ref | init_a | 100 | 2,961,457 | 2,963,786 | 2,889,930 | 3,016,629 |
| DKEX-128 | ref | init_b | 100 | 2,957,659 | 2,953,326 | 2,868,839 | 3,016,710 |
| DKEX-128 | ref | pass1 | 100 | 593,621 | 593,622 | 593,231 | 593,980 |
| DKEX-128 | ref | pass2 | 100 | 11,592,014 | 9,436,207 | 5,383,975 | 43,329,644 |
| DKEX-128 | ref | pass3 | 100 | 13,961,645 | 11,362,244 | 7,942,760 | 52,724,057 |
| DKEX-128 | ref | derive_a | 100 | 5,216 | 5,216 | 5,215 | 5,216 |
| DKEX-128 | ref | derive_b | 100 | 3,111,069 | 3,111,062 | 3,110,630 | 3,111,564 |
| DKEX-256 | m4 | init_a | 100 | 8,701,025 | 8,696,898 | 8,591,217 | 8,802,364 |
| DKEX-256 | m4 | init_b | 100 | 8,699,563 | 8,696,874 | 8,570,144 | 8,802,406 |
| DKEX-256 | m4 | pass1 | 100 | 1,127,929 | 1,127,912 | 1,126,949 | 1,129,000 |
| DKEX-256 | m4 | pass2 | 100 | 21,648,017 | 19,468,352 | 12,828,757 | 63,542,259 |
| DKEX-256 | m4 | pass3 | 100 | 29,181,827 | 26,692,395 | 20,548,818 | 77,362,815 |
| DKEX-256 | m4 | derive_a | 100 | 5,216 | 5,216 | 5,216 | 5,217 |
| DKEX-256 | m4 | derive_b | 100 | 8,837,048 | 8,837,041 | 8,836,681 | 8,837,510 |
| DKEX-256 | ref | init_a | 100 | 8,701,027 | 8,696,902 | 8,591,222 | 8,802,363 |
| DKEX-256 | ref | init_b | 100 | 8,699,563 | 8,696,854 | 8,570,108 | 8,802,406 |
| DKEX-256 | ref | pass1 | 100 | 1,681,971 | 1,681,982 | 1,681,210 | 1,682,730 |
| DKEX-256 | ref | pass2 | 100 | 22,346,695 | 20,167,107 | 13,527,611 | 64,241,224 |
| DKEX-256 | ref | pass3 | 100 | 29,445,299 | 26,955,861 | 20,812,278 | 77,626,316 |
| DKEX-256 | ref | derive_a | 100 | 5,216 | 5,216 | 5,216 | 5,216 |
| DKEX-256 | ref | derive_b | 100 | 8,837,047 | 8,837,030 | 8,836,684 | 8,837,528 |
| DKEX-512 | m4 | init_a | 100 | 8,701,034 | 8,696,903 | 8,591,181 | 8,802,378 |
| DKEX-512 | m4 | init_b | 100 | 8,699,572 | 8,696,872 | 8,570,149 | 8,802,416 |
| DKEX-512 | m4 | pass1 | 100 | 3,422,881 | 3,422,816 | 3,422,022 | 3,423,681 |
| DKEX-512 | m4 | pass2 | 100 | 24,555,138 | 21,939,684 | 15,795,589 | 70,053,641 |
| DKEX-512 | m4 | pass3 | 100 | 30,487,450 | 27,094,731 | 21,201,865 | 73,154,798 |
| DKEX-512 | m4 | derive_a | 100 | 15,792 | 15,792 | 15,792 | 15,793 |
| DKEX-512 | m4 | derive_b | 100 | 8,848,358 | 8,848,356 | 8,847,970 | 8,848,705 |
| DKEX-512 | ref | init_a | 100 | 8,701,030 | 8,696,888 | 8,591,181 | 8,802,372 |
| DKEX-512 | ref | init_b | 100 | 8,699,569 | 8,696,844 | 8,570,151 | 8,802,416 |
| DKEX-512 | ref | pass1 | 100 | 4,714,825 | 4,714,768 | 4,713,999 | 4,715,627 |
| DKEX-512 | ref | pass2 | 100 | 26,055,240 | 23,439,750 | 17,295,696 | 71,553,664 |
| DKEX-512 | ref | pass3 | 100 | 31,081,159 | 27,688,465 | 21,795,586 | 73,748,429 |
| DKEX-512 | ref | derive_a | 100 | 15,793 | 15,793 | 15,793 | 15,794 |
| DKEX-512 | ref | derive_b | 100 | 8,848,354 | 8,848,346 | 8,847,982 | 8,848,702 |
| MAMBA-NIKE-128 | ref | init_a | 100 | 11,756,578 | 11,756,582 | 11,756,512 | 11,756,648 |
| MAMBA-NIKE-128 | ref | init_b | 100 | 11,756,390 | 11,756,394 | 11,756,318 | 11,756,458 |
| MAMBA-NIKE-128 | ref | pass1 | 100 | 24,029,012 | 24,029,014 | 24,028,893 | 24,029,119 |
| MAMBA-NIKE-128 | ref | derive_a | 100 | 26,029 | 26,029 | 26,029 | 26,029 |
| MAMBA-NIKE-128 | ref | derive_b | 100 | 12,229,927 | 12,229,929 | 12,229,842 | 12,229,999 |
| MAMBA-NIKE-192 | ref | init_a | 100 | 11,781,204 | 11,781,204 | 11,781,138 | 11,781,269 |
| MAMBA-NIKE-192 | ref | init_b | 100 | 11,781,009 | 11,781,013 | 11,780,941 | 11,781,058 |
| MAMBA-NIKE-192 | ref | pass1 | 100 | 24,077,775 | 24,077,771 | 24,077,664 | 24,077,878 |
| MAMBA-NIKE-192 | ref | derive_a | 100 | 26,029 | 26,029 | 26,029 | 26,029 |
| MAMBA-NIKE-192 | ref | derive_b | 100 | 12,252,179 | 12,252,181 | 12,252,119 | 12,252,226 |
| MAMBA-NIKE-256 | ref | init_a | 100 | 11,884,468 | 11,884,472 | 11,884,391 | 11,884,517 |
| MAMBA-NIKE-256 | ref | init_b | 100 | 11,884,273 | 11,884,274 | 11,884,206 | 11,884,324 |
| MAMBA-NIKE-256 | ref | pass1 | 100 | 24,181,026 | 24,181,028 | 24,180,950 | 24,181,128 |
| MAMBA-NIKE-256 | ref | derive_a | 100 | 26,029 | 26,029 | 26,029 | 26,029 |
| MAMBA-NIKE-256 | ref | derive_b | 100 | 12,252,172 | 12,252,174 | 12,252,100 | 12,252,224 |
| MAMBA-NIKE-384 | ref | init_a | 1 | 29,542,063 | 29,542,063 | 29,542,063 | 29,542,063 |
| MAMBA-NIKE-384 | ref | init_b | 1 | 29,541,767 | 29,541,767 | 29,541,767 | 29,541,767 |
| MAMBA-NIKE-512 | ref | init_a | 1 | 29,696,049 | 29,696,049 | 29,696,049 | 29,696,049 |
| MAMBA-NIKE-512 | ref | init_b | 1 | 29,695,599 | 29,695,599 | 29,695,599 | 29,695,599 |
| NEV-AKE-C1 | ref | init_a | 100 | 332,347 | 332,348 | 332,168 | 332,390 |
| NEV-AKE-C1 | ref | init_b | 100 | 331,018 | 331,017 | 331,017 | 331,057 |
| NEV-AKE-C1 | ref | pass1 | 100 | 594,751 | 594,752 | 594,707 | 594,824 |
| NEV-AKE-C1 | ref | pass2 | 100 | 1,170,507 | 1,170,505 | 1,170,415 | 1,170,613 |
| NEV-AKE-C1 | ref | derive_a | 100 | 782,656 | 782,654 | 782,614 | 782,722 |
| NEV-AKE-C1 | ref | derive_b | 100 | 131 | 131 | 131 | 131 |
| NEV-AKE-C1-c | ref | init_a | 100 | 332,286 | 332,286 | 332,108 | 332,335 |
| NEV-AKE-C1-c | ref | init_b | 100 | 331,015 | 331,015 | 331,015 | 331,052 |
| NEV-AKE-C1-c | ref | pass1 | 100 | 583,863 | 583,861 | 583,861 | 583,902 |
| NEV-AKE-C1-c | ref | pass2 | 100 | 1,192,234 | 1,192,234 | 1,192,189 | 1,192,348 |
| NEV-AKE-C1-c | ref | derive_a | 100 | 814,574 | 814,572 | 814,572 | 814,613 |
| NEV-AKE-C1-c | ref | derive_b | 100 | 131 | 131 | 131 | 131 |
| NEV-AKE-C2 | ref | init_a | 100 | 801,805 | 801,805 | 801,624 | 801,845 |
| NEV-AKE-C2 | ref | init_b | 100 | 799,317 | 799,315 | 799,315 | 799,354 |
| NEV-AKE-C2 | ref | pass1 | 100 | 1,372,335 | 1,372,327 | 1,372,273 | 1,372,421 |
| NEV-AKE-C2 | ref | pass2 | 100 | 2,517,961 | 2,517,952 | 2,517,853 | 2,518,153 |
| NEV-AKE-C2 | ref | derive_a | 100 | 1,721,256 | 1,721,256 | 1,721,189 | 1,721,324 |
| NEV-AKE-C2 | ref | derive_b | 100 | 140 | 140 | 140 | 140 |
| NEV-AKE-C2-c | ref | init_a | 100 | 801,659 | 801,659 | 801,482 | 801,711 |
| NEV-AKE-C2-c | ref | init_b | 100 | 799,305 | 799,303 | 799,303 | 799,342 |
| NEV-AKE-C2-c | ref | pass1 | 100 | 1,356,095 | 1,356,091 | 1,356,091 | 1,356,133 |
| NEV-AKE-C2-c | ref | pass2 | 100 | 2,576,339 | 2,576,336 | 2,576,273 | 2,576,452 |
| NEV-AKE-C2-c | ref | derive_a | 100 | 1,794,612 | 1,794,608 | 1,794,608 | 1,794,649 |
| NEV-AKE-C2-c | ref | derive_b | 100 | 140 | 140 | 140 | 140 |
| NEV-AKE-C3 | ref | init_a | 100 | 2,354,458 | 2,354,454 | 2,354,255 | 2,354,495 |
| NEV-AKE-C3 | ref | init_b | 100 | 2,349,713 | 2,349,707 | 2,349,707 | 2,349,749 |
| NEV-AKE-C3 | ref | pass1 | 100 | 3,634,536 | 3,634,535 | 3,634,436 | 3,634,661 |
| NEV-AKE-C3 | ref | pass2 | 100 | 6,457,882 | 6,457,831 | 6,457,624 | 6,463,292 |
| NEV-AKE-C3 | ref | derive_a | 100 | 4,714,681 | 4,714,675 | 4,714,576 | 4,714,802 |
| NEV-AKE-C3 | ref | derive_b | 100 | 180 | 180 | 180 | 180 |
| NEV-AKE-C3-c | ref | init_a | 100 | 2,354,194 | 2,354,190 | 2,353,993 | 2,354,240 |
| NEV-AKE-C3-c | ref | init_b | 100 | 2,349,715 | 2,349,709 | 2,349,709 | 2,349,750 |
| NEV-AKE-C3-c | ref | pass1 | 100 | 3,575,320 | 3,575,311 | 3,575,311 | 3,575,353 |
| NEV-AKE-C3-c | ref | pass2 | 100 | 6,444,248 | 6,444,194 | 6,444,086 | 6,449,554 |
| NEV-AKE-C3-c | ref | derive_a | 100 | 4,758,615 | 4,758,605 | 4,758,605 | 4,758,648 |
| NEV-AKE-C3-c | ref | derive_b | 100 | 180 | 180 | 180 | 181 |
| NEV-AKE-R1 | ref | init_a | 100 | 384,467 | 384,468 | 384,288 | 384,508 |
| NEV-AKE-R1 | ref | init_b | 100 | 383,032 | 383,031 | 383,031 | 383,070 |
| NEV-AKE-R1 | ref | pass1 | 100 | 672,798 | 672,796 | 672,796 | 672,837 |
| NEV-AKE-R1 | ref | pass2 | 100 | 1,268,066 | 1,268,062 | 1,268,062 | 1,268,170 |
| NEV-AKE-R1 | ref | derive_a | 100 | 828,158 | 828,157 | 828,157 | 828,196 |
| NEV-AKE-R1 | ref | derive_b | 100 | 131 | 131 | 131 | 131 |
| NEV-AKE-R2 | ref | init_a | 100 | 922,754 | 922,753 | 922,569 | 922,793 |
| NEV-AKE-R2 | ref | init_b | 100 | 920,060 | 920,058 | 920,058 | 920,100 |
| NEV-AKE-R2 | ref | pass1 | 100 | 1,475,416 | 1,475,412 | 1,475,412 | 1,475,454 |
| NEV-AKE-R2 | ref | pass2 | 100 | 2,514,926 | 2,514,918 | 2,514,918 | 2,515,027 |
| NEV-AKE-R2 | ref | derive_a | 100 | 1,758,816 | 1,758,813 | 1,758,813 | 1,758,852 |
| NEV-AKE-R2 | ref | derive_b | 100 | 140 | 140 | 140 | 140 |
| NEV-AKE-R3 | ref | init_a | 100 | 2,495,618 | 2,495,621 | 2,495,405 | 2,495,846 |
| NEV-AKE-R3 | ref | init_b | 100 | 2,490,444 | 2,490,435 | 2,490,309 | 2,490,615 |
| NEV-AKE-R3 | ref | pass1 | 100 | 3,836,445 | 3,836,439 | 3,836,284 | 3,836,662 |
| NEV-AKE-R3 | ref | pass2 | 100 | 6,803,434 | 6,803,380 | 6,803,193 | 6,808,804 |
| NEV-AKE-R3 | ref | derive_a | 100 | 5,002,516 | 5,002,513 | 5,002,417 | 5,002,634 |
| NEV-AKE-R3 | ref | derive_b | 100 | 180 | 180 | 180 | 180 |

**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| ADKEX-128 | m4 | init_a | 1 | 0 |
| ADKEX-128 | m4 | init_b | 1 | 5,580 |
| ADKEX-128 | m4 | pass1 | 1 | 8,972 |
| ADKEX-128 | m4 | pass2 | 1 | 9,940 |
| ADKEX-128 | m4 | derive_a | 1 | 9,996 |
| ADKEX-128 | m4 | derive_b | 1 | 232 |
| ADKEX-128 | ref | init_a | 1 | 0 |
| ADKEX-128 | ref | init_b | 1 | 6,304 |
| ADKEX-128 | ref | pass1 | 1 | 8,656 |
| ADKEX-128 | ref | pass2 | 1 | 9,624 |
| ADKEX-128 | ref | derive_a | 1 | 9,680 |
| ADKEX-128 | ref | derive_b | 1 | 232 |
| ADKEX-256 | m4 | init_a | 1 | 0 |
| ADKEX-256 | m4 | init_b | 1 | 8,724 |
| ADKEX-256 | m4 | pass1 | 1 | 13,124 |
| ADKEX-256 | m4 | pass2 | 1 | 14,892 |
| ADKEX-256 | m4 | derive_a | 1 | 14,948 |
| ADKEX-256 | m4 | derive_b | 1 | 232 |
| ADKEX-256 | ref | init_a | 1 | 0 |
| ADKEX-256 | ref | init_b | 1 | 15,600 |
| ADKEX-256 | ref | pass1 | 1 | 19,016 |
| ADKEX-256 | ref | pass2 | 1 | 20,784 |
| ADKEX-256 | ref | derive_a | 1 | 20,840 |
| ADKEX-256 | ref | derive_b | 1 | 232 |
| ADKEX-512 | m4 | init_a | 1 | 0 |
| ADKEX-512 | m4 | init_b | 1 | 30,620 |
| ADKEX-512 | m4 | pass1 | 1 | 37,340 |
| ADKEX-512 | m4 | pass2 | 1 | 40,828 |
| ADKEX-512 | m4 | derive_a | 1 | 40,848 |
| ADKEX-512 | m4 | derive_b | 1 | 320 |
| ADKEX-512 | ref | init_a | 1 | 0 |
| ADKEX-512 | ref | init_b | 1 | 30,580 |
| ADKEX-512 | ref | pass1 | 1 | 37,428 |
| ADKEX-512 | ref | pass2 | 1 | 40,744 |
| ADKEX-512 | ref | derive_a | 1 | 40,916 |
| ADKEX-512 | ref | derive_b | 1 | 320 |
| AFS_KEX_C128 | ref | init_a | 1 | 19,160 |
| AFS_KEX_C128 | ref | init_b | 1 | 19,160 |
| AFS_KEX_C128 | ref | pass1 | 1 | 9,264 |
| AFS_KEX_C128 | ref | pass2 | 1 | 10,136 |
| AFS_KEX_C128 | ref | pass3 | 1 | 15,528 |
| AFS_KEX_C128 | ref | pass4 | 1 | 12,032 |
| AFS_KEX_C128 | ref | derive_a | 1 | 4 |
| AFS_KEX_C128 | ref | derive_b | 1 | 4 |
| AFS_KEX_C256 | ref | init_a | 1 | 41,072 |
| AFS_KEX_C256 | ref | init_b | 1 | 40,904 |
| AFS_KEX_C256 | ref | pass1 | 1 | 19,164 |
| AFS_KEX_C256 | ref | pass2 | 1 | 20,664 |
| AFS_KEX_C256 | ref | pass3 | 1 | 31,608 |
| AFS_KEX_C256 | ref | pass4 | 1 | 26,872 |
| AFS_KEX_C256 | ref | derive_a | 1 | 4 |
| AFS_KEX_C256 | ref | derive_b | 1 | 4 |
| AFS_KEX_C512 | ref | init_a | 1 | 81,304 |
| AFS_KEX_C512 | ref | init_b | 1 | 81,412 |
| AFS_KEX_C512 | ref | pass1 | 1 | 37,780 |
| AFS_KEX_C512 | ref | pass2 | 1 | 41,020 |
| AFS_KEX_C512 | ref | pass3 | 1 | 62,528 |
| AFS_KEX_C512 | ref | pass4 | 1 | 53,008 |
| AFS_KEX_C512 | ref | derive_a | 1 | 12 |
| AFS_KEX_C512 | ref | derive_b | 1 | 108 |
| DKEX-128 | m4 | init_a | 1 | 38,708 |
| DKEX-128 | m4 | init_b | 1 | 38,600 |
| DKEX-128 | m4 | pass1 | 1 | 6,844 |
| DKEX-128 | m4 | pass2 | 1 | 53,640 |
| DKEX-128 | m4 | pass3 | 1 | 52,344 |
| DKEX-128 | m4 | derive_a | 1 | 232 |
| DKEX-128 | m4 | derive_b | 1 | 36,448 |
| DKEX-128 | ref | init_a | 1 | 38,600 |
| DKEX-128 | ref | init_b | 1 | 38,600 |
| DKEX-128 | ref | pass1 | 1 | 7,568 |
| DKEX-128 | ref | pass2 | 1 | 53,748 |
| DKEX-128 | ref | pass3 | 1 | 52,452 |
| DKEX-128 | ref | derive_a | 1 | 232 |
| DKEX-128 | ref | derive_b | 1 | 36,448 |
| DKEX-256 | m4 | init_a | 1 | 97,992 |
| DKEX-256 | m4 | init_b | 1 | 97,992 |
| DKEX-256 | m4 | pass1 | 1 | 11,324 |
| DKEX-256 | m4 | pass2 | 1 | 125,676 |
| DKEX-256 | m4 | pass3 | 1 | 123,100 |
| DKEX-256 | m4 | derive_a | 1 | 232 |
| DKEX-256 | m4 | derive_b | 1 | 93,196 |
| DKEX-256 | ref | init_a | 1 | 98,100 |
| DKEX-256 | ref | init_b | 1 | 98,100 |
| DKEX-256 | ref | pass1 | 1 | 18,144 |
| DKEX-256 | ref | pass2 | 1 | 125,676 |
| DKEX-256 | ref | pass3 | 1 | 122,992 |
| DKEX-256 | ref | derive_a | 1 | 232 |
| DKEX-256 | ref | derive_b | 1 | 93,088 |
| DKEX-512 | m4 | init_a | 1 | 97,992 |
| DKEX-512 | m4 | init_b | 1 | 97,992 |
| DKEX-512 | m4 | pass1 | 1 | 33,024 |
| DKEX-512 | m4 | pass2 | 1 | 125,740 |
| DKEX-512 | m4 | pass3 | 1 | 123,164 |
| DKEX-512 | m4 | derive_a | 1 | 320 |
| DKEX-512 | m4 | derive_b | 1 | 93,104 |
| DKEX-512 | ref | init_a | 1 | 98,100 |
| DKEX-512 | ref | init_b | 1 | 98,100 |
| DKEX-512 | ref | pass1 | 1 | 33,048 |
| DKEX-512 | ref | pass2 | 1 | 125,740 |
| DKEX-512 | ref | pass3 | 1 | 123,056 |
| DKEX-512 | ref | derive_a | 1 | 320 |
| DKEX-512 | ref | derive_b | 1 | 93,212 |
| MAMBA-NIKE-128 | ref | init_a | 1 | 45,660 |
| MAMBA-NIKE-128 | ref | init_b | 1 | 45,652 |
| MAMBA-NIKE-128 | ref | pass1 | 1 | 57,996 |
| MAMBA-NIKE-128 | ref | derive_a | 1 | 2,096 |
| MAMBA-NIKE-128 | ref | derive_b | 1 | 47,684 |
| MAMBA-NIKE-192 | ref | init_a | 1 | 45,660 |
| MAMBA-NIKE-192 | ref | init_b | 1 | 45,652 |
| MAMBA-NIKE-192 | ref | pass1 | 1 | 57,996 |
| MAMBA-NIKE-192 | ref | derive_a | 1 | 2,096 |
| MAMBA-NIKE-192 | ref | derive_b | 1 | 47,684 |
| MAMBA-NIKE-256 | ref | init_a | 1 | 45,756 |
| MAMBA-NIKE-256 | ref | init_b | 1 | 45,652 |
| MAMBA-NIKE-256 | ref | pass1 | 1 | 57,996 |
| MAMBA-NIKE-256 | ref | derive_a | 1 | 2,096 |
| MAMBA-NIKE-256 | ref | derive_b | 1 | 47,684 |
| NEV-AKE-C1 | ref | init_a | 1 | 6,008 |
| NEV-AKE-C1 | ref | init_b | 1 | 6,008 |
| NEV-AKE-C1 | ref | pass1 | 1 | 6,064 |
| NEV-AKE-C1 | ref | pass2 | 1 | 6,808 |
| NEV-AKE-C1 | ref | derive_a | 1 | 10,552 |
| NEV-AKE-C1 | ref | derive_b | 1 | 4 |
| NEV-AKE-C1-c | ref | init_a | 1 | 6,008 |
| NEV-AKE-C1-c | ref | init_b | 1 | 6,008 |
| NEV-AKE-C1-c | ref | pass1 | 1 | 6,064 |
| NEV-AKE-C1-c | ref | pass2 | 1 | 6,704 |
| NEV-AKE-C1-c | ref | derive_a | 1 | 9,096 |
| NEV-AKE-C1-c | ref | derive_b | 1 | 4 |
| NEV-AKE-C2 | ref | init_a | 1 | 15,008 |
| NEV-AKE-C2 | ref | init_b | 1 | 15,008 |
| NEV-AKE-C2 | ref | pass1 | 1 | 15,096 |
| NEV-AKE-C2 | ref | pass2 | 1 | 16,036 |
| NEV-AKE-C2 | ref | derive_a | 1 | 23,508 |
| NEV-AKE-C2 | ref | derive_b | 1 | 4 |
| NEV-AKE-C2-c | ref | init_a | 1 | 15,008 |
| NEV-AKE-C2-c | ref | init_b | 1 | 15,008 |
| NEV-AKE-C2-c | ref | pass1 | 1 | 15,096 |
| NEV-AKE-C2-c | ref | pass2 | 1 | 15,828 |
| NEV-AKE-C2-c | ref | derive_a | 1 | 20,644 |
| NEV-AKE-C2-c | ref | derive_b | 1 | 4 |
| NEV-AKE-C3 | ref | init_a | 1 | 38,712 |
| NEV-AKE-C3 | ref | init_b | 1 | 38,712 |
| NEV-AKE-C3 | ref | pass1 | 1 | 38,864 |
| NEV-AKE-C3 | ref | pass2 | 1 | 37,344 |
| NEV-AKE-C3 | ref | derive_a | 1 | 48,620 |
| NEV-AKE-C3 | ref | derive_b | 1 | 108 |
| NEV-AKE-C3-c | ref | init_a | 1 | 38,712 |
| NEV-AKE-C3-c | ref | init_b | 1 | 38,712 |
| NEV-AKE-C3-c | ref | pass1 | 1 | 38,864 |
| NEV-AKE-C3-c | ref | pass2 | 1 | 36,928 |
| NEV-AKE-C3-c | ref | derive_a | 1 | 46,536 |
| NEV-AKE-C3-c | ref | derive_b | 1 | 12 |
| NEV-AKE-R1 | ref | init_a | 1 | 7,556 |
| NEV-AKE-R1 | ref | init_b | 1 | 7,556 |
| NEV-AKE-R1 | ref | pass1 | 1 | 7,612 |
| NEV-AKE-R1 | ref | pass2 | 1 | 8,152 |
| NEV-AKE-R1 | ref | derive_a | 1 | 12,232 |
| NEV-AKE-R1 | ref | derive_b | 1 | 4 |
| NEV-AKE-R2 | ref | init_a | 1 | 19,444 |
| NEV-AKE-R2 | ref | init_b | 1 | 19,444 |
| NEV-AKE-R2 | ref | pass1 | 1 | 19,532 |
| NEV-AKE-R2 | ref | pass2 | 1 | 18,900 |
| NEV-AKE-R2 | ref | derive_a | 1 | 27,068 |
| NEV-AKE-R2 | ref | derive_b | 1 | 4 |
| NEV-AKE-R3 | ref | init_a | 1 | 46,340 |
| NEV-AKE-R3 | ref | init_b | 1 | 46,340 |
| NEV-AKE-R3 | ref | pass1 | 1 | 46,492 |
| NEV-AKE-R3 | ref | pass2 | 1 | 43,380 |
| NEV-AKE-R3 | ref | derive_a | 1 | 59,692 |
| NEV-AKE-R3 | ref | derive_b | 1 | 12 |

**code size (speed)**

| scheme | implementation | .text | .data | .bss | total |
| --- | --- | ---: | ---: | ---: | ---: |
| ADKEX-128 | m4 | 37,156 | 1,352 | 548 | 39,056 |
| ADKEX-128 | ref | 25,700 | 1,352 | 548 | 27,600 |
| ADKEX-256 | m4 | 37,988 | 1,352 | 548 | 39,888 |
| ADKEX-256 | ref | 26,720 | 1,352 | 952 | 29,024 |
| ADKEX-512 | m4 | 39,752 | 1,352 | 548 | 41,652 |
| ADKEX-512 | ref | 30,788 | 1,352 | 952 | 33,092 |
| AFS_KEX_C128 | ref | 28,304 | 1,352 | 548 | 30,204 |
| AFS_KEX_C256 | ref | 39,992 | 1,352 | 548 | 41,892 |
| AFS_KEX_C512 | ref | 41,016 | 1,352 | 548 | 42,916 |
| DKEX-128 | m4 | 51,096 | 1,352 | 560 | 53,008 |
| DKEX-128 | ref | 39,256 | 1,352 | 560 | 41,168 |
| DKEX-256 | m4 | 51,736 | 1,352 | 560 | 53,648 |
| DKEX-256 | ref | 40,088 | 1,352 | 964 | 42,404 |
| DKEX-512 | m4 | 49,832 | 1,352 | 560 | 51,744 |
| DKEX-512 | ref | 40,920 | 1,352 | 964 | 43,236 |
| MAMBA-NIKE-128 | ref | 37,112 | 1,352 | 548 | 39,012 |
| MAMBA-NIKE-192 | ref | 37,176 | 1,352 | 548 | 39,076 |
| MAMBA-NIKE-256 | ref | 37,368 | 1,352 | 548 | 39,268 |
| MAMBA-NIKE-384 | ref | 37,240 | 1,352 | 548 | 39,140 |
| MAMBA-NIKE-512 | ref | 37,368 | 1,352 | 548 | 39,268 |
| NEV-AKE-C1 | ref | 29,520 | 1,608 | 548 | 31,676 |
| NEV-AKE-C1-c | ref | 29,648 | 1,608 | 548 | 31,804 |
| NEV-AKE-C2 | ref | 35,728 | 1,608 | 548 | 37,884 |
| NEV-AKE-C2-c | ref | 35,856 | 1,608 | 548 | 38,012 |
| NEV-AKE-C3 | ref | 50,036 | 1,608 | 548 | 52,192 |
| NEV-AKE-C3-c | ref | 50,164 | 1,608 | 548 | 52,320 |
| NEV-AKE-R1 | ref | 32,928 | 1,480 | 548 | 34,956 |
| NEV-AKE-R2 | ref | 43,088 | 1,480 | 548 | 45,116 |
| NEV-AKE-R3 | ref | 54,324 | 1,480 | 548 | 56,352 |


## crypto_sign
**stack**

| scheme | implementation | metric | count | average |
| --- | --- | --- | ---: | ---: |
| CEDRUSALPHA-160f | ref | keypair | 1 | 3,504 |
| CEDRUSALPHA-160f | ref | sign | 1 | 2,924 |
| CEDRUSALPHA-160f | ref | verify | 1 | 2,960 |
| CEDRUSALPHA-160s | ref | keypair | 1 | 3,132 |
| CEDRUSALPHA-160s | ref | sign | 1 | 2,532 |
| CEDRUSALPHA-160s | ref | verify | 1 | 2,152 |
| CEDRUSC-160f | ref | keypair | 1 | 3,544 |
| CEDRUSC-160f | ref | sign | 1 | 3,012 |
| CEDRUSC-160f | ref | verify | 1 | 2,952 |
| CEDRUSC-160s | ref | keypair | 1 | 2,916 |
| CEDRUSC-160s | ref | sign | 1 | 2,436 |
| CEDRUSC-160s | ref | verify | 1 | 1,880 |
| CEDRUSC-256f | ref | keypair | 1 | 7,616 |
| CEDRUSC-256f | ref | sign | 1 | 5,788 |
| CEDRUSC-256f | ref | verify | 1 | 5,936 |
| CEDRUSC-256s | ref | keypair | 1 | 5,716 |
| CEDRUSC-256s | ref | sign | 1 | 4,356 |
| CEDRUSC-256s | ref | verify | 1 | 3,704 |
| CEDRUSC-384f | ref | keypair | 1 | 12,980 |
| CEDRUSC-384f | ref | sign | 1 | 9,388 |
| CEDRUSC-384f | ref | verify | 1 | 10,224 |

**code size (speed)**

| scheme | implementation | .text | .data | .bss | total |
| --- | --- | ---: | ---: | ---: | ---: |
| CEDRUSALPHA-160f | ref | 23,604 | 1,352 | 222,280 | 247,236 |
| CEDRUSALPHA-160s | ref | 23,648 | 1,352 | 351,224 | 376,224 |
| CEDRUSC-160f | ref | 24,196 | 1,352 | 548 | 26,096 |
| CEDRUSC-160s | ref | 24,276 | 1,352 | 548 | 26,176 |
| CEDRUSC-256f | ref | 24,356 | 1,352 | 548 | 26,256 |
| CEDRUSC-256s | ref | 24,624 | 1,352 | 548 | 26,524 |
| CEDRUSC-384f | ref | 24,752 | 1,352 | 548 | 26,652 |
| CEDRUSC-384s | ref | 25,180 | 1,352 | 548 | 27,080 |
| CEDRUSC-512f | ref | 25,060 | 1,352 | 548 | 26,960 |
| CEDRUSC-512s | ref | 25,212 | 1,352 | 548 | 27,112 |
