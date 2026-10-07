window.NGCCM4_DATA = {
 "categories": {
  "kem": {
   "ops": [
    "keypair",
    "encaps",
    "decaps"
   ],
   "rows": [
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 27592,
      "total": 29492
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1182446,
       "count": 10,
       "max": 1187966,
       "median": 1182239,
       "min": 1178526
      },
      "encaps": {
       "avg": 945063,
       "count": 10,
       "max": 950580,
       "median": 944859,
       "min": 941140
      },
      "keypair": {
       "avg": 671254,
       "count": 10,
       "max": 676788,
       "median": 670996,
       "min": 667348
      }
     },
     "cycles_total": 2798763,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Aigis-Enc-I_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "Aigis-Enc+/Aigis-Sig+ spec §4: parameter sets I/II/III target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "128",
      "param_set": "I",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HDMMQKVT6UFDKT56DVYCAUBTQ5GWSIFJ/",
      "folder": "Aigis-Encplus",
      "instance": "Aigis-Enc+-I",
      "pub_date": "2026-09-20 11:42",
      "spec": "specs/Aigis-Encplus.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：Aigis-Enc+.pdf",
      "title": "Aigis-Enc+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Aigis-Enc%2B.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Aigis-Enc-I",
     "sizes": {
      "ct": 896,
      "kat_path": "schemes/Aigis-Encplus/Test_Vectors/KAT_KEM_Aigis-enc1.txt",
      "pk": 656,
      "sk": 1456,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 12092,
      "encaps": 10268,
      "keypair": 6092
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 34640,
      "total": 36540
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2437724,
       "count": 10,
       "max": 2448074,
       "median": 2438550,
       "min": 2429308
      },
      "encaps": {
       "avg": 1865930,
       "count": 10,
       "max": 1876252,
       "median": 1866768,
       "min": 1857487
      },
      "keypair": {
       "avg": 1211138,
       "count": 10,
       "max": 1221466,
       "median": 1211956,
       "min": 1202701
      }
     },
     "cycles_total": 5514792,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Aigis-Enc-II_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "Aigis-Enc+/Aigis-Sig+ spec §4: parameter sets I/II/III target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "256",
      "param_set": "II",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HDMMQKVT6UFDKT56DVYCAUBTQ5GWSIFJ/",
      "folder": "Aigis-Encplus",
      "instance": "Aigis-Enc+-II",
      "pub_date": "2026-09-20 11:42",
      "spec": "specs/Aigis-Encplus.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：Aigis-Enc+.pdf",
      "title": "Aigis-Enc+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Aigis-Enc%2B.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Aigis-Enc-II",
     "sizes": {
      "ct": 1664,
      "kat_path": "schemes/Aigis-Encplus/Test_Vectors/KAT_KEM_Aigis-enc2.txt",
      "pk": 1312,
      "sk": 2912,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 26284,
      "encaps": 22908,
      "keypair": 14572
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 42888,
      "total": 44788
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 5615245,
       "count": 10,
       "max": 5625863,
       "median": 5615954,
       "min": 5606394
      },
      "encaps": {
       "avg": 4229750,
       "count": 10,
       "max": 4240373,
       "median": 4230464,
       "min": 4220942
      },
      "keypair": {
       "avg": 2738659,
       "count": 10,
       "max": 2749287,
       "median": 2739368,
       "min": 2729820
      }
     },
     "cycles_total": 12583654,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Aigis-Enc-III_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "Aigis-Enc+/Aigis-Sig+ spec §4: parameter sets I/II/III target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "512",
      "param_set": "III",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HDMMQKVT6UFDKT56DVYCAUBTQ5GWSIFJ/",
      "folder": "Aigis-Encplus",
      "instance": "Aigis-Enc+-III",
      "pub_date": "2026-09-20 11:42",
      "spec": "specs/Aigis-Encplus.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：Aigis-Enc+.pdf",
      "title": "Aigis-Enc+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Aigis-Enc%2B.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Aigis-Enc-III",
     "sizes": {
      "ct": 3584,
      "kat_path": "schemes/Aigis-Encplus/Test_Vectors/KAT_KEM_Aigis-enc3.txt",
      "pk": 2624,
      "sk": 5824,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 56476,
      "encaps": 49220,
      "keypair": 32564
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4192,
      "source": "report",
      "text": 43512,
      "total": 48252
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3528338,
       "count": 10,
       "max": 3548120,
       "median": 3517288,
       "min": 3513790
      },
      "encaps": {
       "avg": 2697476,
       "count": 10,
       "max": 2717057,
       "median": 2685654,
       "min": 2683315
      },
      "keypair": {
       "avg": 1749373,
       "count": 10,
       "max": 1768948,
       "median": 1736723,
       "min": 1736094
      }
     },
     "cycles_total": 7975187,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Amoeba-1152_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OXTBKIPREWPX4YRV4BLRMLWND4R4DLTO/",
      "folder": "Amoeba",
      "instance": "Amoeba-1152",
      "pub_date": "2026-09-20 11:41",
      "spec": "specs/Amoeba.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Amoeba",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Amoeba.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Amoeba-1152",
     "sizes": {
      "ct": 1833,
      "kat_path": "schemes/Amoeba/Test_Vectors/KAT_KEM_Amoeba256.txt",
      "pk": 1648,
      "sk": 3440,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 31176,
      "encaps": 29336,
      "keypair": 15568
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4192,
      "source": "report",
      "text": 43772,
      "total": 48512
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 5492216,
       "count": 10,
       "max": 5505385,
       "median": 5504132,
       "min": 5472196
      },
      "encaps": {
       "avg": 4174484,
       "count": 10,
       "max": 4187449,
       "median": 4186803,
       "min": 4154873
      },
      "keypair": {
       "avg": 2687465,
       "count": 10,
       "max": 2701092,
       "median": 2699703,
       "min": 2667955
      }
     },
     "cycles_total": 12354165,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Amoeba-1728_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OXTBKIPREWPX4YRV4BLRMLWND4R4DLTO/",
      "folder": "Amoeba",
      "instance": "Amoeba-1728",
      "pub_date": "2026-09-20 11:41",
      "spec": "specs/Amoeba.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Amoeba",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Amoeba.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Amoeba-1728",
     "sizes": {
      "ct": 2769,
      "kat_path": "schemes/Amoeba/Test_Vectors/KAT_KEM_Amoeba384.txt",
      "pk": 2440,
      "sk": 5096,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 45720,
      "encaps": 42944,
      "keypair": 22592
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4192,
      "source": "report",
      "text": 44016,
      "total": 48756
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 7459186,
       "count": 10,
       "max": 7474336,
       "median": 7471275,
       "min": 7438335
      },
      "encaps": {
       "avg": 5646539,
       "count": 10,
       "max": 5660822,
       "median": 5658986,
       "min": 5625851
      },
      "keypair": {
       "avg": 3603445,
       "count": 10,
       "max": 3617180,
       "median": 3616102,
       "min": 3583736
      }
     },
     "cycles_total": 16709170,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Amoeba-2304_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OXTBKIPREWPX4YRV4BLRMLWND4R4DLTO/",
      "folder": "Amoeba",
      "instance": "Amoeba-2304",
      "pub_date": "2026-09-20 11:41",
      "spec": "specs/Amoeba.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Amoeba",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Amoeba.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Amoeba-2304",
     "sizes": {
      "ct": 3914,
      "kat_path": "schemes/Amoeba/Test_Vectors/KAT_KEM_Amoeba512.txt",
      "pk": 3520,
      "sk": 7040,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 60680,
      "encaps": 56760,
      "keypair": 29608
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4192,
      "source": "report",
      "text": 43396,
      "total": 48136
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1901833,
       "count": 10,
       "max": 1913832,
       "median": 1910696,
       "min": 1878289
      },
      "encaps": {
       "avg": 1508790,
       "count": 10,
       "max": 1519791,
       "median": 1518002,
       "min": 1485562
      },
      "keypair": {
       "avg": 980185,
       "count": 10,
       "max": 989905,
       "median": 989730,
       "min": 957753
      }
     },
     "cycles_total": 4390808,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Amoeba-576_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OXTBKIPREWPX4YRV4BLRMLWND4R4DLTO/",
      "folder": "Amoeba",
      "instance": "Amoeba-576",
      "pub_date": "2026-09-20 11:41",
      "spec": "specs/Amoeba.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Amoeba",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Amoeba.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Amoeba-576",
     "sizes": {
      "ct": 1047,
      "kat_path": "schemes/Amoeba/Test_Vectors/KAT_KEM_Amoeba128.txt",
      "pk": 784,
      "sk": 1712,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 16936,
      "encaps": 15888,
      "keypair": 8560
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4192,
      "source": "report",
      "text": 42480,
      "total": 47220
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2737568,
       "count": 10,
       "max": 2755094,
       "median": 2738274,
       "min": 2720130
      },
      "encaps": {
       "avg": 2150216,
       "count": 10,
       "max": 2167123,
       "median": 2150680,
       "min": 2133078
      },
      "keypair": {
       "avg": 1370157,
       "count": 10,
       "max": 1386573,
       "median": 1370152,
       "min": 1353755
      }
     },
     "cycles_total": 6257941,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Amoeba-864_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OXTBKIPREWPX4YRV4BLRMLWND4R4DLTO/",
      "folder": "Amoeba",
      "instance": "Amoeba-864",
      "pub_date": "2026-09-20 11:41",
      "spec": "specs/Amoeba.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Amoeba",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Amoeba.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Amoeba-864",
     "sizes": {
      "ct": 1581,
      "kat_path": "schemes/Amoeba/Test_Vectors/KAT_KEM_Amoeba192.txt",
      "pk": 1144,
      "sk": 2504,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 25744,
      "encaps": 24160,
      "keypair": 12776
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 40160,
      "total": 42060
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 226232606,
       "count": 10,
       "max": 227346158,
       "median": 226121115,
       "min": 225564191
      },
      "encaps": {
       "avg": 128947655,
       "count": 10,
       "max": 129417321,
       "median": 128937420,
       "min": 128750860
      },
      "keypair": {
       "avg": 125559257,
       "count": 10,
       "max": 125954417,
       "median": 125454028,
       "min": 125198441
      }
     },
     "cycles_total": 480739518,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BAG-Loong-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RIQCA4YWQIPGGI2BOXRMFEYCCHTY3NQY/",
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-128",
      "pub_date": "2026-09-20 11:40",
      "spec": "specs/BAG-Loong.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Loong",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Loong.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BAG-Loong-128",
     "sizes": {
      "ct": 3071,
      "kat_path": "schemes/BAG-Loong/Test_Vectors/KAT_KEM_BAG-Loong-128.txt",
      "pk": 2500,
      "sk": 5064,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 2128,
      "encaps": 1376,
      "keypair": 1296
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "size-file",
      "text": 40992,
      "total": 42892
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "hangs",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BAG-Loong-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RIQCA4YWQIPGGI2BOXRMFEYCCHTY3NQY/",
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-256",
      "pub_date": "2026-09-20 11:40",
      "spec": "specs/BAG-Loong.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Loong",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Loong.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "BAG-Loong-256",
     "sizes": {
      "ct": 8400,
      "kat_path": "schemes/BAG-Loong/Test_Vectors/KAT_KEM_BAG-Loong-256.txt",
      "pk": 6597,
      "sk": 13258,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": "not run: hangs on the board at the first iteration (exceeds 640 KB SRAM; BAG-Loong-128 runs)",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "other",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BAG-Loong-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RIQCA4YWQIPGGI2BOXRMFEYCCHTY3NQY/",
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-384",
      "pub_date": "2026-09-20 11:40",
      "spec": "specs/BAG-Loong.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Loong",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Loong.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "BAG-Loong-384",
     "sizes": {
      "ct": 15112,
      "kat_path": "schemes/BAG-Loong/Test_Vectors/KAT_KEM_BAG-Loong-384.txt",
      "pk": 12152,
      "sk": 24368,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": "not run: same as BAG-Loong-256",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "other",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BAG-Loong-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RIQCA4YWQIPGGI2BOXRMFEYCCHTY3NQY/",
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-512",
      "pub_date": "2026-09-20 11:40",
      "spec": "specs/BAG-Loong.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Loong",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Loong.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "BAG-Loong-512",
     "sizes": {
      "ct": 21660,
      "kat_path": "schemes/BAG-Loong/Test_Vectors/KAT_KEM_BAG-Loong-512.txt",
      "pk": 19043,
      "sk": 38150,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": "not run: same as BAG-Loong-256",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 32316,
      "total": 34216
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 636490,
       "count": 10,
       "max": 636641,
       "median": 636486,
       "min": 636278
      },
      "encaps": {
       "avg": 566247,
       "count": 10,
       "max": 566398,
       "median": 566244,
       "min": 566035
      },
      "keypair": {
       "avg": 511536,
       "count": 10,
       "max": 511702,
       "median": 511546,
       "min": 511338
      }
     },
     "cycles_total": 1714273,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BW_KEM_C128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WBK2RG2XR5VZVITNS53TVFJDBGER7T7P/",
      "folder": "BW-KEM",
      "instance": "BW_KEM_C128",
      "pub_date": "2026-09-20 11:25",
      "spec": "specs/BW-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BW-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BW-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BW_KEM_C128",
     "sizes": {
      "ct": 768,
      "kat_path": "schemes/BW-KEM/Test_Vectors/KAT_KEM_BW_KEM_C128.txt",
      "pk": 784,
      "sk": 1585,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 11064,
      "encaps": 10304,
      "keypair": 7696
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24872,
      "total": 26772
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1105903,
       "count": 10,
       "max": 1106025,
       "median": 1105898,
       "min": 1105701
      },
      "encaps": {
       "avg": 875074,
       "count": 10,
       "max": 875221,
       "median": 875066,
       "min": 874858
      },
      "keypair": {
       "avg": 716592,
       "count": 10,
       "max": 716759,
       "median": 716604,
       "min": 716395
      }
     },
     "cycles_total": 2697569,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BW_KEM_C128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WBK2RG2XR5VZVITNS53TVFJDBGER7T7P/",
      "folder": "BW-KEM",
      "instance": "BW_KEM_C128",
      "pub_date": "2026-09-20 11:25",
      "spec": "specs/BW-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BW-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BW-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BW_KEM_C128",
     "sizes": {
      "ct": 768,
      "kat_path": "schemes/BW-KEM/Test_Vectors/KAT_KEM_BW_KEM_C128.txt",
      "pk": 784,
      "sk": 1585,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 10016,
      "encaps": 9280,
      "keypair": 6672
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 43232,
      "total": 45132
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1323715,
       "count": 10,
       "max": 1366363,
       "median": 1305610,
       "min": 1305363
      },
      "encaps": {
       "avg": 1178252,
       "count": 10,
       "max": 1220896,
       "median": 1160143,
       "min": 1159896
      },
      "keypair": {
       "avg": 1152950,
       "count": 10,
       "max": 1195633,
       "median": 1134784,
       "min": 1134593
      }
     },
     "cycles_total": 3654917,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BW_KEM_C256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WBK2RG2XR5VZVITNS53TVFJDBGER7T7P/",
      "folder": "BW-KEM",
      "instance": "BW_KEM_C256",
      "pub_date": "2026-09-20 11:25",
      "spec": "specs/BW-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BW-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BW-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BW_KEM_C256",
     "sizes": {
      "ct": 1440,
      "kat_path": "schemes/BW-KEM/Test_Vectors/KAT_KEM_BW_KEM_C256.txt",
      "pk": 1568,
      "sk": 3169,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 22772,
      "encaps": 21364,
      "keypair": 17692
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 36360,
      "total": 38260
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2417055,
       "count": 10,
       "max": 2459757,
       "median": 2398956,
       "min": 2398677
      },
      "encaps": {
       "avg": 1876647,
       "count": 10,
       "max": 1919313,
       "median": 1858544,
       "min": 1858274
      },
      "keypair": {
       "avg": 1687562,
       "count": 10,
       "max": 1730227,
       "median": 1669389,
       "min": 1669227
      }
     },
     "cycles_total": 5981264,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BW_KEM_C256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WBK2RG2XR5VZVITNS53TVFJDBGER7T7P/",
      "folder": "BW-KEM",
      "instance": "BW_KEM_C256",
      "pub_date": "2026-09-20 11:25",
      "spec": "specs/BW-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BW-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BW-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BW_KEM_C256",
     "sizes": {
      "ct": 1440,
      "kat_path": "schemes/BW-KEM/Test_Vectors/KAT_KEM_BW_KEM_C256.txt",
      "pk": 1568,
      "sk": 3169,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 20464,
      "encaps": 19072,
      "keypair": 15568
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 46576,
      "total": 48476
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 4058190,
       "count": 10,
       "max": 4058591,
       "median": 4058259,
       "min": 4057670
      },
      "encaps": {
       "avg": 3638871,
       "count": 10,
       "max": 3639322,
       "median": 3638915,
       "min": 3638403
      },
      "keypair": {
       "avg": 3575921,
       "count": 10,
       "max": 3576396,
       "median": 3575900,
       "min": 3575439
      }
     },
     "cycles_total": 11272982,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BW_KEM_C512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WBK2RG2XR5VZVITNS53TVFJDBGER7T7P/",
      "folder": "BW-KEM",
      "instance": "BW_KEM_C512",
      "pub_date": "2026-09-20 11:25",
      "spec": "specs/BW-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BW-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BW-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BW_KEM_C512",
     "sizes": {
      "ct": 2944,
      "kat_path": "schemes/BW-KEM/Test_Vectors/KAT_KEM_BW_KEM_C512.txt",
      "pk": 3136,
      "sk": 6337,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 45428,
      "encaps": 42548,
      "keypair": 35228
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 36880,
      "total": 38780
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 6744982,
       "count": 10,
       "max": 6745445,
       "median": 6745062,
       "min": 6744475
      },
      "encaps": {
       "avg": 5435315,
       "count": 10,
       "max": 5435780,
       "median": 5435380,
       "min": 5434813
      },
      "keypair": {
       "avg": 4990583,
       "count": 10,
       "max": 4991024,
       "median": 4990565,
       "min": 4990099
      }
     },
     "cycles_total": 17170880,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_BW_KEM_C512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WBK2RG2XR5VZVITNS53TVFJDBGER7T7P/",
      "folder": "BW-KEM",
      "instance": "BW_KEM_C512",
      "pub_date": "2026-09-20 11:25",
      "spec": "specs/BW-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BW-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BW-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BW_KEM_C512",
     "sizes": {
      "ct": 2944,
      "kat_path": "schemes/BW-KEM/Test_Vectors/KAT_KEM_BW_KEM_C512.txt",
      "pk": 3136,
      "sk": 6337,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 40652,
      "encaps": 37732,
      "keypair": 30368
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25960,
      "total": 27860
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3656306,
       "count": 10,
       "max": 3656580,
       "median": 3656296,
       "min": 3656139
      },
      "encaps": {
       "avg": 3469675,
       "count": 10,
       "max": 3469950,
       "median": 3469666,
       "min": 3469503
      },
      "keypair": {
       "avg": 3294310,
       "count": 10,
       "max": 3294626,
       "median": 3294293,
       "min": 3294142
      }
     },
     "cycles_total": 10420291,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_COMPASS-KEM-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3ZXFAPIPIO3CVJHCQJ5AQ44UNTBIY4OP/",
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-128",
      "pub_date": "2026-09-20 11:22",
      "spec": "specs/COMPASS-KEM.pdf",
      "spec_extra": [],
      "spec_file": "COMPASS-KEM算法文本(en).pdf",
      "title": "COMPASS-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-KEM-128",
     "sizes": {
      "ct": 768,
      "kat_path": "schemes/COMPASS-KEM/Reference_Implementation/COMPASS-KEM-128/output/KAT_KEM_COMPASS-KEM-128.txt",
      "pk": 672,
      "results_path": "results/COMPASS-KEM/COMPASS-KEM-128.json",
      "sk": 1504,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 16248,
      "encaps": 15620,
      "keypair": 13400
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 26340,
      "total": 28240
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 13124655,
       "count": 10,
       "max": 13125240,
       "median": 13124586,
       "min": 13124329
      },
      "encaps": {
       "avg": 12809029,
       "count": 10,
       "max": 12809611,
       "median": 12808978,
       "min": 12808666
      },
      "keypair": {
       "avg": 12524266,
       "count": 10,
       "max": 12524801,
       "median": 12524176,
       "min": 12523946
      }
     },
     "cycles_total": 38457950,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_COMPASS-KEM-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3ZXFAPIPIO3CVJHCQJ5AQ44UNTBIY4OP/",
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-256",
      "pub_date": "2026-09-20 11:22",
      "spec": "specs/COMPASS-KEM.pdf",
      "spec_extra": [],
      "spec_file": "COMPASS-KEM算法文本(en).pdf",
      "title": "COMPASS-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-KEM-256",
     "sizes": {
      "ct": 1472,
      "kat_path": "schemes/COMPASS-KEM/Reference_Implementation/COMPASS-KEM-256/output/KAT_KEM_COMPASS-KEM-256.txt",
      "pk": 1312,
      "results_path": "results/COMPASS-KEM/COMPASS-KEM-256.json",
      "sk": 2912,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 23824,
      "encaps": 22444,
      "keypair": 19656
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 27728,
      "total": 29628
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 9482839,
       "count": 10,
       "max": 9483792,
       "median": 9482738,
       "min": 9482055
      },
      "encaps": {
       "avg": 8779714,
       "count": 10,
       "max": 8780704,
       "median": 8779614,
       "min": 8778894
      },
      "keypair": {
       "avg": 8125114,
       "count": 10,
       "max": 8126073,
       "median": 8125020,
       "min": 8124338
      }
     },
     "cycles_total": 26387667,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_COMPASS-KEM-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3ZXFAPIPIO3CVJHCQJ5AQ44UNTBIY4OP/",
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-384",
      "pub_date": "2026-09-20 11:22",
      "spec": "specs/COMPASS-KEM.pdf",
      "spec_extra": [],
      "spec_file": "COMPASS-KEM算法文本(en).pdf",
      "title": "COMPASS-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-KEM-384",
     "sizes": {
      "ct": 2432,
      "kat_path": "schemes/COMPASS-KEM/Reference_Implementation/COMPASS-KEM-384/output/KAT_KEM_COMPASS-KEM-384.txt",
      "pk": 2144,
      "results_path": "results/COMPASS-KEM/COMPASS-KEM-384.json",
      "sk": 4704,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 32752,
      "encaps": 30460,
      "keypair": 25276
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28044,
      "total": 29944
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 15709189,
       "count": 10,
       "max": 15710257,
       "median": 15709273,
       "min": 15707406
      },
      "encaps": {
       "avg": 14819527,
       "count": 10,
       "max": 14820596,
       "median": 14819613,
       "min": 14817745
      },
      "keypair": {
       "avg": 13992686,
       "count": 10,
       "max": 13993718,
       "median": 13992773,
       "min": 13990852
      }
     },
     "cycles_total": 44521402,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_COMPASS-KEM-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3ZXFAPIPIO3CVJHCQJ5AQ44UNTBIY4OP/",
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-512",
      "pub_date": "2026-09-20 11:22",
      "spec": "specs/COMPASS-KEM.pdf",
      "spec_extra": [],
      "spec_file": "COMPASS-KEM算法文本(en).pdf",
      "title": "COMPASS-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-KEM-512",
     "sizes": {
      "ct": 3264,
      "kat_path": "schemes/COMPASS-KEM/Reference_Implementation/COMPASS-KEM-512/output/KAT_KEM_COMPASS-KEM-512.txt",
      "pk": 2848,
      "results_path": "results/COMPASS-KEM/COMPASS-KEM-512.json",
      "sk": 6240,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 39448,
      "encaps": 36216,
      "keypair": 30008
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1864,
      "source": "report",
      "text": 29168,
      "total": 31580
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1620577,
       "count": 10,
       "max": 1620688,
       "median": 1620598,
       "min": 1620379
      },
      "encaps": {
       "avg": 1270065,
       "count": 10,
       "max": 1270172,
       "median": 1270082,
       "min": 1269863
      },
      "keypair": {
       "avg": 851358,
       "count": 10,
       "max": 851479,
       "median": 851367,
       "min": 851171
      }
     },
     "cycles_total": 3742000,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Cheetah128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3OMMI24JGKESHSRUVA5NJANKRHTQY7RM/",
      "folder": "CheetahKEM",
      "instance": "Cheetah128",
      "pub_date": "2026-09-20 11:24",
      "spec": "specs/CheetahKEM.pdf",
      "spec_extra": [],
      "spec_file": "cheetah_kem_en.pdf",
      "title": "CheetahKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CheetahKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Cheetah128",
     "sizes": {
      "ct": 864,
      "kat_path": "schemes/CheetahKEM/Test_Vectors/KAT_KEM_Cheetah128.txt",
      "pk": 832,
      "sk": 1936,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 28420,
      "encaps": 21860,
      "keypair": 14292
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1864,
      "source": "report",
      "text": 29484,
      "total": 31896
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3584616,
       "count": 10,
       "max": 3584743,
       "median": 3584616,
       "min": 3584484
      },
      "encaps": {
       "avg": 2875585,
       "count": 10,
       "max": 2875711,
       "median": 2875599,
       "min": 2875415
      },
      "keypair": {
       "avg": 2225047,
       "count": 10,
       "max": 2225142,
       "median": 2225059,
       "min": 2224892
      }
     },
     "cycles_total": 8685248,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Cheetah256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3OMMI24JGKESHSRUVA5NJANKRHTQY7RM/",
      "folder": "CheetahKEM",
      "instance": "Cheetah256",
      "pub_date": "2026-09-20 11:24",
      "spec": "specs/CheetahKEM.pdf",
      "spec_extra": [],
      "spec_file": "cheetah_kem_en.pdf",
      "title": "CheetahKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CheetahKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Cheetah256",
     "sizes": {
      "ct": 1728,
      "kat_path": "schemes/CheetahKEM/Test_Vectors/KAT_KEM_Cheetah256.txt",
      "pk": 1648,
      "sk": 3808,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 54756,
      "encaps": 42884,
      "keypair": 32612
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1864,
      "source": "report",
      "text": 29872,
      "total": 32284
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 7894627,
       "count": 10,
       "max": 7895096,
       "median": 7894610,
       "min": 7894232
      },
      "encaps": {
       "avg": 6723402,
       "count": 10,
       "max": 6723885,
       "median": 6723401,
       "min": 6722982
      },
      "keypair": {
       "avg": 5786058,
       "count": 10,
       "max": 5786542,
       "median": 5786038,
       "min": 5785633
      }
     },
     "cycles_total": 20404087,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Cheetah384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3OMMI24JGKESHSRUVA5NJANKRHTQY7RM/",
      "folder": "CheetahKEM",
      "instance": "Cheetah384",
      "pub_date": "2026-09-20 11:24",
      "spec": "specs/CheetahKEM.pdf",
      "spec_extra": [],
      "spec_file": "cheetah_kem_en.pdf",
      "title": "CheetahKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CheetahKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Cheetah384",
     "sizes": {
      "ct": 2832,
      "kat_path": "schemes/CheetahKEM/Test_Vectors/KAT_KEM_Cheetah384.txt",
      "pk": 2704,
      "sk": 5920,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": {
      "decaps": 86940,
      "encaps": 69628,
      "keypair": 56660
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1864,
      "source": "report",
      "text": 29884,
      "total": 32296
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 12100858,
       "count": 10,
       "max": 12101493,
       "median": 12100937,
       "min": 12100266
      },
      "encaps": {
       "avg": 10517860,
       "count": 10,
       "max": 10518465,
       "median": 10517956,
       "min": 10517317
      },
      "keypair": {
       "avg": 9380781,
       "count": 10,
       "max": 9381424,
       "median": 9380864,
       "min": 9380232
      }
     },
     "cycles_total": 31999499,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Cheetah512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3OMMI24JGKESHSRUVA5NJANKRHTQY7RM/",
      "folder": "CheetahKEM",
      "instance": "Cheetah512",
      "pub_date": "2026-09-20 11:24",
      "spec": "specs/CheetahKEM.pdf",
      "spec_extra": [],
      "spec_file": "cheetah_kem_en.pdf",
      "title": "CheetahKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CheetahKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Cheetah512",
     "sizes": {
      "ct": 4032,
      "kat_path": "schemes/CheetahKEM/Test_Vectors/KAT_KEM_Cheetah512.txt",
      "pk": 3600,
      "sk": 7872,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 124700,
      "encaps": 102148,
      "keypair": 86588
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 35012,
      "total": 36912
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 442332,
       "count": 10,
       "max": 442573,
       "median": 442448,
       "min": 441948
      },
      "encaps": {
       "avg": 413847,
       "count": 10,
       "max": 414087,
       "median": 413963,
       "min": 413463
      },
      "keypair": {
       "avg": 365756,
       "count": 10,
       "max": 366002,
       "median": 365878,
       "min": 365329
      }
     },
     "cycles_total": 1221935,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_DKEM-128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RW5BIIFSPEM2HFHQ4N226TMBIRZ7TXF5/",
      "folder": "DKEM",
      "instance": "DKEM-128",
      "pub_date": "2026-09-20 11:20",
      "spec": "specs/DKEM.pdf",
      "spec_extra": [],
      "spec_file": "DKEM-PKCKEM-380333-Algorithm Specification.pdf",
      "title": "DKEM (Ding Key Encapsulation)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEM-128",
     "sizes": {
      "ct": 800,
      "kat_path": "schemes/DKEM/Test_Vectors/KAT_KEM_DKEM-128.txt",
      "pk": 800,
      "sk": 1600,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 9868,
      "encaps": 8884,
      "keypair": 5580
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 23560,
      "total": 25460
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 942736,
       "count": 10,
       "max": 942917,
       "median": 942824,
       "min": 942428
      },
      "encaps": {
       "avg": 751984,
       "count": 10,
       "max": 752161,
       "median": 752068,
       "min": 751673
      },
      "keypair": {
       "avg": 593485,
       "count": 10,
       "max": 593672,
       "median": 593580,
       "min": 593125
      }
     },
     "cycles_total": 2288205,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_DKEM-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RW5BIIFSPEM2HFHQ4N226TMBIRZ7TXF5/",
      "folder": "DKEM",
      "instance": "DKEM-128",
      "pub_date": "2026-09-20 11:20",
      "spec": "specs/DKEM.pdf",
      "spec_extra": [],
      "spec_file": "DKEM-PKCKEM-380333-Algorithm Specification.pdf",
      "title": "DKEM (Ding Key Encapsulation)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEM-128",
     "sizes": {
      "ct": 800,
      "kat_path": "schemes/DKEM/Test_Vectors/KAT_KEM_DKEM-128.txt",
      "pk": 800,
      "sk": 1600,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 9552,
      "encaps": 8568,
      "keypair": 6304
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 35848,
      "total": 37748
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1227557,
       "count": 10,
       "max": 1228329,
       "median": 1227440,
       "min": 1227169
      },
      "encaps": {
       "avg": 1177120,
       "count": 10,
       "max": 1177892,
       "median": 1177001,
       "min": 1176732
      },
      "keypair": {
       "avg": 1125131,
       "count": 10,
       "max": 1125880,
       "median": 1125000,
       "min": 1124739
      }
     },
     "cycles_total": 3529808,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_DKEM-256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RW5BIIFSPEM2HFHQ4N226TMBIRZ7TXF5/",
      "folder": "DKEM",
      "instance": "DKEM-256",
      "pub_date": "2026-09-20 11:20",
      "spec": "specs/DKEM.pdf",
      "spec_extra": [],
      "spec_file": "DKEM-PKCKEM-380333-Algorithm Specification.pdf",
      "title": "DKEM (Ding Key Encapsulation)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEM-256",
     "sizes": {
      "ct": 1600,
      "kat_path": "schemes/DKEM/Test_Vectors/KAT_KEM_DKEM-256.txt",
      "pk": 1568,
      "sk": 3136,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 14820,
      "encaps": 13036,
      "keypair": 8668
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 24552,
      "total": 26856
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2190338,
       "count": 10,
       "max": 2190906,
       "median": 2190282,
       "min": 2190042
      },
      "encaps": {
       "avg": 1875599,
       "count": 10,
       "max": 1876166,
       "median": 1875562,
       "min": 1875302
      },
      "keypair": {
       "avg": 1679216,
       "count": 10,
       "max": 1679793,
       "median": 1679169,
       "min": 1678929
      }
     },
     "cycles_total": 5745153,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_DKEM-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RW5BIIFSPEM2HFHQ4N226TMBIRZ7TXF5/",
      "folder": "DKEM",
      "instance": "DKEM-256",
      "pub_date": "2026-09-20 11:20",
      "spec": "specs/DKEM.pdf",
      "spec_extra": [],
      "spec_file": "DKEM-PKCKEM-380333-Algorithm Specification.pdf",
      "title": "DKEM (Ding Key Encapsulation)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEM-256",
     "sizes": {
      "ct": 1600,
      "kat_path": "schemes/DKEM/Test_Vectors/KAT_KEM_DKEM-256.txt",
      "pk": 1568,
      "sk": 3136,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 20712,
      "encaps": 18928,
      "keypair": 15600
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 37544,
      "total": 39444
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3780021,
       "count": 10,
       "max": 3780444,
       "median": 3779982,
       "min": 3779702
      },
      "encaps": {
       "avg": 3617910,
       "count": 10,
       "max": 3618358,
       "median": 3617860,
       "min": 3617580
      },
      "keypair": {
       "avg": 3422816,
       "count": 10,
       "max": 3423241,
       "median": 3422804,
       "min": 3422492
      }
     },
     "cycles_total": 10820747,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_DKEM-512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RW5BIIFSPEM2HFHQ4N226TMBIRZ7TXF5/",
      "folder": "DKEM",
      "instance": "DKEM-512",
      "pub_date": "2026-09-20 11:20",
      "spec": "specs/DKEM.pdf",
      "spec_extra": [],
      "spec_file": "DKEM-PKCKEM-380333-Algorithm Specification.pdf",
      "title": "DKEM (Ding Key Encapsulation)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEM-512",
     "sizes": {
      "ct": 3136,
      "kat_path": "schemes/DKEM/Test_Vectors/KAT_KEM_DKEM-512.txt",
      "pk": 3392,
      "sk": 6784,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 40616,
      "encaps": 37252,
      "keypair": 30512
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 28576,
      "total": 30880
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 5873847,
       "count": 10,
       "max": 5874270,
       "median": 5873810,
       "min": 5873527
      },
      "encaps": {
       "avg": 5118012,
       "count": 10,
       "max": 5118464,
       "median": 5117984,
       "min": 5117680
      },
      "keypair": {
       "avg": 4714752,
       "count": 10,
       "max": 4715166,
       "median": 4714726,
       "min": 4714416
      }
     },
     "cycles_total": 15706611,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_DKEM-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/RW5BIIFSPEM2HFHQ4N226TMBIRZ7TXF5/",
      "folder": "DKEM",
      "instance": "DKEM-512",
      "pub_date": "2026-09-20 11:20",
      "spec": "specs/DKEM.pdf",
      "spec_extra": [],
      "spec_file": "DKEM-PKCKEM-380333-Algorithm Specification.pdf",
      "title": "DKEM (Ding Key Encapsulation)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEM-512",
     "sizes": {
      "ct": 3136,
      "kat_path": "schemes/DKEM/Test_Vectors/KAT_KEM_DKEM-512.txt",
      "pk": 3392,
      "sk": 6784,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 40640,
      "encaps": 37276,
      "keypair": 30536
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 2176,
      "source": "report",
      "text": 155212,
      "total": 157936
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 861844,
       "count": 10,
       "max": 861845,
       "median": 861844,
       "min": 861844
      },
      "encaps": {
       "avg": 436536,
       "count": 10,
       "max": 436581,
       "median": 436543,
       "min": 436432
      },
      "keypair": {
       "avg": 647516,
       "count": 10,
       "max": 647524,
       "median": 647513,
       "min": 647513
      }
     },
     "cycles_total": 1945896,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-1024_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "256",
      "param_set": "DTRU-1024",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-1024",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-1024",
     "sizes": {
      "ct": 1280,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-1024.txt",
      "pk": 1536,
      "sk": 2080,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 15468,
      "encaps": 14060,
      "keypair": 12372
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1872,
      "source": "report",
      "text": 29628,
      "total": 32048
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1717781,
       "count": 10,
       "max": 1717783,
       "median": 1717781,
       "min": 1717781
      },
      "encaps": {
       "avg": 864588,
       "count": 10,
       "max": 864600,
       "median": 864599,
       "min": 864493
      },
      "keypair": {
       "avg": 1141107,
       "count": 10,
       "max": 1141136,
       "median": 1141100,
       "min": 1141100
      }
     },
     "cycles_total": 3723476,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-1024_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "256",
      "param_set": "DTRU-1024",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-1024",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-1024",
     "sizes": {
      "ct": 1280,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-1024.txt",
      "pk": 1536,
      "sk": 2080,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 15320,
      "encaps": 13912,
      "keypair": 12240
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4736,
      "source": "report",
      "text": 35040,
      "total": 40324
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1102484,
       "count": 10,
       "max": 1102584,
       "median": 1102473,
       "min": 1102473
      },
      "encaps": {
       "avg": 568558,
       "count": 10,
       "max": 568579,
       "median": 568579,
       "min": 568369
      },
      "keypair": {
       "avg": 694632,
       "count": 10,
       "max": 694662,
       "median": 694629,
       "min": 694624
      }
     },
     "cycles_total": 2365674,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-1536_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "384",
      "param_set": "DTRU-1536",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-1536",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-1536",
     "sizes": {
      "ct": 1920,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-1536.txt",
      "pk": 2304,
      "sk": 3136,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 22224,
      "encaps": 20088,
      "keypair": 17392
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 3152,
      "source": "report",
      "text": 28304,
      "total": 32004
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2714312,
       "count": 10,
       "max": 2714345,
       "median": 2714304,
       "min": 2714304
      },
      "encaps": {
       "avg": 1374478,
       "count": 10,
       "max": 1374488,
       "median": 1374488,
       "min": 1374388
      },
      "keypair": {
       "avg": 1500526,
       "count": 10,
       "max": 1500534,
       "median": 1500522,
       "min": 1500522
      }
     },
     "cycles_total": 5589316,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-1536_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "384",
      "param_set": "DTRU-1536",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-1536",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-1536",
     "sizes": {
      "ct": 1920,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-1536.txt",
      "pk": 2304,
      "sk": 3136,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 22224,
      "encaps": 20088,
      "keypair": 17416
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 2176,
      "source": "report",
      "text": 278640,
      "total": 281364
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3022657,
       "count": 10,
       "max": 3022749,
       "median": 3022638,
       "min": 3022638
      },
      "encaps": {
       "avg": 1530924,
       "count": 10,
       "max": 1530978,
       "median": 1530939,
       "min": 1530714
      },
      "keypair": {
       "avg": 1881218,
       "count": 10,
       "max": 1881223,
       "median": 1881222,
       "min": 1881212
      }
     },
     "cycles_total": 6434799,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-2048_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "512",
      "param_set": "DTRU-2048",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-2048",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-2048",
     "sizes": {
      "ct": 2560,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-2048.txt",
      "pk": 3072,
      "sk": 3904,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 29472,
      "encaps": 26712,
      "keypair": 23992
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1872,
      "source": "report",
      "text": 34920,
      "total": 37340
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 4036361,
       "count": 10,
       "max": 4036448,
       "median": 4036338,
       "min": 4036338
      },
      "encaps": {
       "avg": 2037684,
       "count": 10,
       "max": 2037730,
       "median": 2037692,
       "min": 2037579
      },
      "keypair": {
       "avg": 3006524,
       "count": 10,
       "max": 3006553,
       "median": 3006524,
       "min": 3006513
      }
     },
     "cycles_total": 9080569,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-2048_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "512",
      "param_set": "DTRU-2048",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-2048",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-2048",
     "sizes": {
      "ct": 2560,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-2048.txt",
      "pk": 3072,
      "sk": 3904,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 29472,
      "encaps": 26712,
      "keypair": 23956
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1688,
      "source": "report",
      "text": 31148,
      "total": 33384
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 605125,
       "count": 10,
       "max": 605159,
       "median": 605121,
       "min": 605121
      },
      "encaps": {
       "avg": 303707,
       "count": 10,
       "max": 303727,
       "median": 303727,
       "min": 303524
      },
      "keypair": {
       "avg": 693234,
       "count": 10,
       "max": 693242,
       "median": 693231,
       "min": 693231
      }
     },
     "cycles_total": 1602066,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-648_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "128",
      "param_set": "DTRU-648",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-648",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-648",
     "sizes": {
      "ct": 729,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-648.txt",
      "pk": 972,
      "sk": 1328,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 9604,
      "encaps": 8740,
      "keypair": 8560
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1840,
      "source": "report",
      "text": 29456,
      "total": 31844
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1126552,
       "count": 10,
       "max": 1126586,
       "median": 1126548,
       "min": 1126548
      },
      "encaps": {
       "avg": 564404,
       "count": 10,
       "max": 564424,
       "median": 564424,
       "min": 564222
      },
      "keypair": {
       "avg": 954027,
       "count": 10,
       "max": 954036,
       "median": 954024,
       "min": 954024
      }
     },
     "cycles_total": 2644983,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-648_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "128",
      "param_set": "DTRU-648",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-648",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-648",
     "sizes": {
      "ct": 729,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-648.txt",
      "pk": 972,
      "sk": 1328,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 9760,
      "encaps": 8896,
      "keypair": 8608
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 4736,
      "source": "report",
      "text": 56060,
      "total": 61344
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 590774,
       "count": 10,
       "max": 590774,
       "median": 590774,
       "min": 590774
      },
      "encaps": {
       "avg": 313858,
       "count": 10,
       "max": 313878,
       "median": 313878,
       "min": 313676
      },
      "keypair": {
       "avg": 387608,
       "count": 10,
       "max": 387616,
       "median": 387605,
       "min": 387605
      }
     },
     "cycles_total": 1292240,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-768_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "192",
      "param_set": "DTRU-768",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-768",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-768",
     "sizes": {
      "ct": 960,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-768.txt",
      "pk": 1152,
      "sk": 1568,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 12460,
      "encaps": 11364,
      "keypair": 9884
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 3152,
      "source": "report",
      "text": 27604,
      "total": 31304
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1351250,
       "count": 10,
       "max": 1351250,
       "median": 1351250,
       "min": 1351250
      },
      "encaps": {
       "avg": 694107,
       "count": 10,
       "max": 694117,
       "median": 694117,
       "min": 694016
      },
      "keypair": {
       "avg": 817133,
       "count": 10,
       "max": 817141,
       "median": 817130,
       "min": 817130
      }
     },
     "cycles_total": 2862490,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-768_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "192",
      "param_set": "DTRU-768",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-768",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-768",
     "sizes": {
      "ct": 960,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-768.txt",
      "pk": 1152,
      "sk": 1568,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 11760,
      "encaps": 10664,
      "keypair": 9136
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 2376,
      "source": "report",
      "text": 49100,
      "total": 52024
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 330851,
       "count": 10,
       "max": 330851,
       "median": 330851,
       "min": 330851
      },
      "encaps": {
       "avg": 162827,
       "count": 10,
       "max": 162841,
       "median": 162841,
       "min": 162702
      },
      "keypair": {
       "avg": 213954,
       "count": 10,
       "max": 213954,
       "median": 213954,
       "min": 213952
      }
     },
     "cycles_total": 707632,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-Light_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "128",
      "param_set": "DTRU-Light",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-Light",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-Light",
     "sizes": {
      "ct": 512,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-Light.txt",
      "pk": 640,
      "sk": 864,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 7432,
      "encaps": 6776,
      "keypair": 5692
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1864,
      "source": "report",
      "text": 26920,
      "total": 29332
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 739362,
       "count": 10,
       "max": 739362,
       "median": 739362,
       "min": 739362
      },
      "encaps": {
       "avg": 367082,
       "count": 10,
       "max": 367097,
       "median": 367096,
       "min": 366959
      },
      "keypair": {
       "avg": 400414,
       "count": 10,
       "max": 400414,
       "median": 400414,
       "min": 400414
      }
     },
     "cycles_total": 1506858,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-Light_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "128",
      "param_set": "DTRU-Light",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-Light",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-Light",
     "sizes": {
      "ct": 512,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-Light.txt",
      "pk": 640,
      "sk": 864,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 7432,
      "encaps": 6776,
      "keypair": 5632
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 10552,
      "source": "report",
      "text": 821956,
      "total": 833056
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1340384,
       "count": 10,
       "max": 1340415,
       "median": 1340380,
       "min": 1340380
      },
      "encaps": {
       "avg": 651964,
       "count": 10,
       "max": 652007,
       "median": 651970,
       "min": 651868
      },
      "keypair": {
       "avg": 250210820,
       "count": 10,
       "max": 250210832,
       "median": 250210828,
       "min": 250210779
      }
     },
     "cycles_total": 252203168,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-Prime_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "256",
      "param_set": "DTRU-Prime",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-Prime",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-Prime",
     "sizes": {
      "ct": 1359,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-Prime.txt",
      "pk": 1495,
      "sk": 1935,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 43332,
      "encaps": 41780,
      "keypair": 39452
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 7488,
      "source": "report",
      "text": 29628,
      "total": 37664
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2263763,
       "count": 10,
       "max": 2263800,
       "median": 2263759,
       "min": 2263759
      },
      "encaps": {
       "avg": 1113645,
       "count": 10,
       "max": 1113663,
       "median": 1113663,
       "min": 1113487
      },
      "keypair": {
       "avg": 250672509,
       "count": 10,
       "max": 250672520,
       "median": 250672511,
       "min": 250672473
      }
     },
     "cycles_total": 254049917,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_DTRU-Prime_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "DTRU spec §1.4: DTRU-648 and DTRU-Light are 128-bit, DTRU-768 192-bit, DTRU-1024 256-bit, DTRU-1536 384-bit, DTRU-2048 512-bit; DTRU-Prime is an alternative 256-bit instantiation",
      "label": "256",
      "param_set": "DTRU-Prime",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7OIHLWTGECH3FYCUM3BEBJDAHMMLZRZK/",
      "folder": "DTRU",
      "instance": "DTRU-Prime",
      "pub_date": "2026-09-20 11:19",
      "spec": "specs/DTRU.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "DTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DTRU-Prime",
     "sizes": {
      "ct": 1359,
      "kat_path": "schemes/DTRU/Test_Vectors/KAT_KEM_DTRU-Prime.txt",
      "pk": 1495,
      "sk": 1935,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 43316,
      "encaps": 41836,
      "keypair": 39508
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31608,
      "total": 33508
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 746867,
       "count": 10,
       "max": 747048,
       "median": 746898,
       "min": 746621
      },
      "encaps": {
       "avg": 445311,
       "count": 10,
       "max": 445381,
       "median": 445312,
       "min": 445264
      },
      "keypair": {
       "avg": 463963,
       "count": 10,
       "max": 588690,
       "median": 430124,
       "min": 428071
      }
     },
     "cycles_total": 1656141,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_FLIT128_REF_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/H6SZDCUAWCTVQD7QOP7XDVHAHGWXHKHZ/",
      "folder": "FLIT",
      "instance": "FLIT128_REF",
      "pub_date": "2026-09-20 11:18",
      "spec": "specs/FLIT.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specification.pdf",
      "title": "FLIT",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/FLIT.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "FLIT128_REF",
     "sizes": {
      "ct": 512,
      "kat_path": "schemes/FLIT/Test_Vectors/KAT_KEM_FLIT128_REF.txt",
      "pk": 615,
      "sk": 1351,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 7480,
      "encaps": 6968,
      "keypair": 5768
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 32564,
      "total": 34464
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1626638,
       "count": 10,
       "max": 1626766,
       "median": 1626680,
       "min": 1626348
      },
      "encaps": {
       "avg": 968299,
       "count": 10,
       "max": 968338,
       "median": 968310,
       "min": 968181
      },
      "keypair": {
       "avg": 1139838,
       "count": 10,
       "max": 1254844,
       "median": 1131466,
       "min": 1089517
      }
     },
     "cycles_total": 3734775,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_FLIT256_REF_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/H6SZDCUAWCTVQD7QOP7XDVHAHGWXHKHZ/",
      "folder": "FLIT",
      "instance": "FLIT256_REF",
      "pub_date": "2026-09-20 11:18",
      "spec": "specs/FLIT.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specification.pdf",
      "title": "FLIT",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/FLIT.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "FLIT256_REF",
     "sizes": {
      "ct": 1024,
      "kat_path": "schemes/FLIT/Test_Vectors/KAT_KEM_FLIT256_REF.txt",
      "pk": 1229,
      "sk": 2605,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 14544,
      "encaps": 13520,
      "keypair": 9864
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 34216,
      "total": 36116
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 4957505,
       "count": 10,
       "max": 4958066,
       "median": 4957574,
       "min": 4956987
      },
      "encaps": {
       "avg": 2936332,
       "count": 10,
       "max": 2936611,
       "median": 2936338,
       "min": 2936062
      },
      "keypair": {
       "avg": 4696493,
       "count": 10,
       "max": 4996338,
       "median": 4675744,
       "min": 4568323
      }
     },
     "cycles_total": 12590330,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_FLIT512_REF_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/H6SZDCUAWCTVQD7QOP7XDVHAHGWXHKHZ/",
      "folder": "FLIT",
      "instance": "FLIT512_REF",
      "pub_date": "2026-09-20 11:18",
      "spec": "specs/FLIT.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specification.pdf",
      "title": "FLIT",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/FLIT.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "FLIT512_REF",
     "sizes": {
      "ct": 2304,
      "kat_path": "schemes/FLIT/Test_Vectors/KAT_KEM_FLIT512_REF.txt",
      "pk": 3072,
      "sk": 6336,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 28624,
      "encaps": 26312,
      "keypair": 18936
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HARE-128-kr_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2Q2SLLCRMEJ2FOLOTDPGM7IUUZKUPUKF/",
      "folder": "HARE",
      "instance": "HARE-128-kr",
      "pub_date": "2026-09-20 11:17",
      "spec": "specs/HARE.pdf",
      "spec_extra": [],
      "spec_file": "HARE算法文档.pdf",
      "title": "HARE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/HARE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "HARE-128-kr",
     "sizes": {
      "ct": 4688,
      "kat_path": "schemes/HARE/Test_Vectors/KAT_KEM_HARE-128-kr.txt",
      "pk": 2629,
      "sk": 2677,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HARE-256-kr_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2Q2SLLCRMEJ2FOLOTDPGM7IUUZKUPUKF/",
      "folder": "HARE",
      "instance": "HARE-256-kr",
      "pub_date": "2026-09-20 11:17",
      "spec": "specs/HARE.pdf",
      "spec_extra": [],
      "spec_file": "HARE算法文档.pdf",
      "title": "HARE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/HARE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "HARE-256-kr",
     "sizes": {
      "ct": 11790,
      "kat_path": "schemes/HARE/Test_Vectors/KAT_KEM_HARE-256-kr.txt",
      "pk": 6580,
      "sk": 6676,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HARE-384-kr_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2Q2SLLCRMEJ2FOLOTDPGM7IUUZKUPUKF/",
      "folder": "HARE",
      "instance": "HARE-384-kr",
      "pub_date": "2026-09-20 11:17",
      "spec": "specs/HARE.pdf",
      "spec_extra": [],
      "spec_file": "HARE算法文档.pdf",
      "title": "HARE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/HARE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "HARE-384-kr",
     "sizes": {
      "ct": 23693,
      "kat_path": "schemes/HARE/Test_Vectors/KAT_KEM_HARE-384-kr.txt",
      "pk": 13157,
      "sk": 13301,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HARE-512-kr_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2Q2SLLCRMEJ2FOLOTDPGM7IUUZKUPUKF/",
      "folder": "HARE",
      "instance": "HARE-512-kr",
      "pub_date": "2026-09-20 11:17",
      "spec": "specs/HARE.pdf",
      "spec_extra": [],
      "spec_file": "HARE算法文档.pdf",
      "title": "HARE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/HARE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "HARE-512-kr",
     "sizes": {
      "ct": 39294,
      "kat_path": "schemes/HARE/Test_Vectors/KAT_KEM_HARE-512-kr.txt",
      "pk": 21812,
      "sk": 22004,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": {
      "bss": 5424,
      "data": 1352,
      "source": "report",
      "text": 33296,
      "total": 40072
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 236828599,
       "count": 10,
       "max": 236897894,
       "median": 236865930,
       "min": 236678630
      },
      "encaps": {
       "avg": 83042752,
       "count": 10,
       "max": 83167509,
       "median": 83044336,
       "min": 82940238
      },
      "keypair": {
       "avg": 44680938,
       "count": 10,
       "max": 44775263,
       "median": 44682900,
       "min": 44570039
      }
     },
     "cycles_total": 364552289,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HQC-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P63ZUXHRI7QQZJ3YC6QXJYUXNGF5MMCO/",
      "folder": "NSS-HQC",
      "instance": "HQC-128",
      "pub_date": "2026-09-20 10:43",
      "spec": "specs/NSS-HQC.pdf",
      "spec_extra": [],
      "spec_file": "NSS-HQC算法文本.pdf",
      "title": "NSS-HQC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NSS-HQC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "HQC-128",
     "sizes": {
      "ct": 5185,
      "kat_path": "schemes/NSS-HQC/Test_Vectors/KAT_KEM_HQC-128.txt",
      "pk": 3713,
      "sk": 3777,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 19624,
      "encaps": 1176,
      "keypair": 1288
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 5424,
      "data": 1352,
      "source": "report",
      "text": 30200,
      "total": 36976
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 524574825,
       "count": 10,
       "max": 524942800,
       "median": 524578362,
       "min": 524025124
      },
      "encaps": {
       "avg": 232198160,
       "count": 10,
       "max": 232553173,
       "median": 232233740,
       "min": 231825750
      },
      "keypair": {
       "avg": 124737021,
       "count": 10,
       "max": 125011743,
       "median": 124727986,
       "min": 124476742
      }
     },
     "cycles_total": 881510006,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HQC-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P63ZUXHRI7QQZJ3YC6QXJYUXNGF5MMCO/",
      "folder": "NSS-HQC",
      "instance": "HQC-256",
      "pub_date": "2026-09-20 10:43",
      "spec": "specs/NSS-HQC.pdf",
      "spec_extra": [],
      "spec_file": "NSS-HQC算法文本.pdf",
      "title": "NSS-HQC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NSS-HQC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "HQC-256",
     "sizes": {
      "ct": 9084,
      "kat_path": "schemes/NSS-HQC/Test_Vectors/KAT_KEM_HQC-256.txt",
      "pk": 6844,
      "sk": 6908,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 19292,
      "encaps": 1192,
      "keypair": 1288
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 5424,
      "data": 1352,
      "source": "report",
      "text": 30608,
      "total": 37384
     },
     "completed_ops": [
      "keypair",
      "encaps"
     ],
     "cycles": {
      "encaps": {
       "avg": 795777914,
       "count": 1,
       "max": 795777914,
       "median": 795777914,
       "min": 795777914
      },
      "keypair": {
       "avg": 429512603,
       "count": 1,
       "max": 429512603,
       "median": 429512603,
       "min": 429512603
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "partial",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HQC-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P63ZUXHRI7QQZJ3YC6QXJYUXNGF5MMCO/",
      "folder": "NSS-HQC",
      "instance": "HQC-384",
      "pub_date": "2026-09-20 10:43",
      "spec": "specs/NSS-HQC.pdf",
      "spec_extra": [],
      "spec_file": "NSS-HQC算法文本.pdf",
      "title": "NSS-HQC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NSS-HQC.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "HQC-384",
     "sizes": {
      "ct": 18571,
      "kat_path": "schemes/NSS-HQC/Test_Vectors/KAT_KEM_HQC-384.txt",
      "pk": 15371,
      "sk": 15467,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": "partial: keypair/encaps measured (1 iteration), decaps never returns on the board",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 5424,
      "data": 1352,
      "source": "report",
      "text": 30664,
      "total": 37440
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "timeout",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_HQC-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P63ZUXHRI7QQZJ3YC6QXJYUXNGF5MMCO/",
      "folder": "NSS-HQC",
      "instance": "HQC-512",
      "pub_date": "2026-09-20 10:43",
      "spec": "specs/NSS-HQC.pdf",
      "spec_extra": [],
      "spec_file": "NSS-HQC算法文本.pdf",
      "title": "NSS-HQC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NSS-HQC.zip"
     },
     "notes": [
      "ignored CSV metric 'verify_cycles' (not an operation of this scheme; mis-parsed driver output)"
     ],
     "run_status": "failed",
     "scheme": "HQC-512",
     "sizes": {
      "ct": 31462,
      "kat_path": "schemes/NSS-HQC/Test_Vectors/KAT_KEM_HQC-512.txt",
      "pk": 27302,
      "sk": 27430,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": "timeout: no output within the cap (same decaps hang as HQC-384 expected)",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Loong128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/G7IDTLL5NJ46PSNDO6ZVKFN5L4LPRS7N/",
      "folder": "LoongKEM",
      "instance": "Loong128",
      "pub_date": "2026-09-20 11:15",
      "spec": "specs/LoongKEM.pdf",
      "spec_extra": [],
      "spec_file": "loong_kem_en.pdf",
      "title": "LoongKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/LoongKEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Loong128",
     "sizes": {
      "ct": 1512,
      "kat_path": "schemes/LoongKEM/Test_Vectors/KAT_KEM_Loong128.txt",
      "pk": 1472,
      "sk": 1848,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Loong256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/G7IDTLL5NJ46PSNDO6ZVKFN5L4LPRS7N/",
      "folder": "LoongKEM",
      "instance": "Loong256",
      "pub_date": "2026-09-20 11:15",
      "spec": "specs/LoongKEM.pdf",
      "spec_extra": [],
      "spec_file": "loong_kem_en.pdf",
      "title": "LoongKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/LoongKEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Loong256",
     "sizes": {
      "ct": 3520,
      "kat_path": "schemes/LoongKEM/Test_Vectors/KAT_KEM_Loong256.txt",
      "pk": 3248,
      "sk": 3888,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Loong384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/G7IDTLL5NJ46PSNDO6ZVKFN5L4LPRS7N/",
      "folder": "LoongKEM",
      "instance": "Loong384",
      "pub_date": "2026-09-20 11:15",
      "spec": "specs/LoongKEM.pdf",
      "spec_extra": [],
      "spec_file": "loong_kem_en.pdf",
      "title": "LoongKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/LoongKEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Loong384",
     "sizes": {
      "ct": 6680,
      "kat_path": "schemes/LoongKEM/Test_Vectors/KAT_KEM_Loong384.txt",
      "pk": 6444,
      "sk": 7340,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Loong512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/G7IDTLL5NJ46PSNDO6ZVKFN5L4LPRS7N/",
      "folder": "LoongKEM",
      "instance": "Loong512",
      "pub_date": "2026-09-20 11:15",
      "spec": "specs/LoongKEM.pdf",
      "spec_extra": [],
      "spec_file": "loong_kem_en.pdf",
      "title": "LoongKEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/LoongKEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Loong512",
     "sizes": {
      "ct": 10848,
      "kat_path": "schemes/LoongKEM/Test_Vectors/KAT_KEM_Loong512.txt",
      "pk": 10640,
      "sk": 11832,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 28472,
      "total": 30628
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2986065,
       "count": 3,
       "max": 2986101,
       "median": 2986062,
       "min": 2986033
      },
      "encaps": {
       "avg": 2249420,
       "count": 3,
       "max": 2249444,
       "median": 2249421,
       "min": 2249395
      },
      "keypair": {
       "avg": 1156698,
       "count": 3,
       "max": 1156760,
       "median": 1156710,
       "min": 1156625
      }
     },
     "cycles_total": 6392183,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SHAKE-L1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "128",
      "param_set": "L1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L1",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SHAKE-L1",
     "sizes": {
      "ct": 706,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SHAKE/KAT_KEM_Lore-L1.txt",
      "pk": 610,
      "results_path": "results/Lore/Lore-SHAKE__Lore-L1.json",
      "sk": 2108,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 18100,
      "encaps": 17212,
      "keypair": 12852
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 552,
      "data": 1608,
      "source": "report",
      "text": 33568,
      "total": 35728
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 8441911,
       "count": 3,
       "max": 8446420,
       "median": 8443295,
       "min": 8436018
      },
      "encaps": {
       "avg": 17368718,
       "count": 3,
       "max": 39048147,
       "median": 6529701,
       "min": 6528307
      },
      "keypair": {
       "avg": 4439348,
       "count": 3,
       "max": 4439418,
       "median": 4439393,
       "min": 4439233
      }
     },
     "cycles_total": 30249977,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SHAKE-L2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "256",
      "param_set": "L2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L2",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SHAKE-L2",
     "sizes": {
      "ct": 1282,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SHAKE/KAT_KEM_Lore-L2.txt",
      "pk": 1186,
      "results_path": "results/Lore/Lore-SHAKE__Lore-L2.json",
      "sk": 4518,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 43524,
      "encaps": 42156,
      "keypair": 34652
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 552,
      "data": 1608,
      "source": "report",
      "text": 34304,
      "total": 36464
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 15268769,
       "count": 3,
       "max": 15276538,
       "median": 15266253,
       "min": 15263516
      },
      "encaps": {
       "avg": 16728125,
       "count": 3,
       "max": 24820843,
       "median": 12682144,
       "min": 12681388
      },
      "keypair": {
       "avg": 9656928,
       "count": 3,
       "max": 9657131,
       "median": 9656902,
       "min": 9656750
      }
     },
     "cycles_total": 41653822,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SHAKE-L3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 384,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "384",
      "param_set": "L3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L3",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SHAKE-L3",
     "sizes": {
      "ct": 2114,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SHAKE/KAT_KEM_Lore-L3.txt",
      "pk": 1954,
      "results_path": "results/Lore/Lore-SHAKE__Lore-L3.json",
      "sk": 7736,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 65396,
      "encaps": 63196,
      "keypair": 53204
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 552,
      "data": 1608,
      "source": "report",
      "text": 35112,
      "total": 37272
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 29922157,
       "count": 3,
       "max": 29930791,
       "median": 29923983,
       "min": 29911697
      },
      "encaps": {
       "avg": 42045841,
       "count": 3,
       "max": 77207436,
       "median": 24465946,
       "min": 24464142
      },
      "keypair": {
       "avg": 18537294,
       "count": 3,
       "max": 18537529,
       "median": 18537366,
       "min": 18536988
      }
     },
     "cycles_total": 90505292,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SHAKE-L4_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "512",
      "param_set": "L4",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L4",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SHAKE-L4",
     "sizes": {
      "ct": 3170,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SHAKE/KAT_KEM_Lore-L4.txt",
      "pk": 2914,
      "results_path": "results/Lore/Lore-SHAKE__Lore-L4.json",
      "sk": 11432,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 97492,
      "encaps": 94236,
      "keypair": 79260
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 26120,
      "total": 28276
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2630315,
       "count": 3,
       "max": 2630346,
       "median": 2630333,
       "min": 2630266
      },
      "encaps": {
       "avg": 1929974,
       "count": 3,
       "max": 1930023,
       "median": 1930010,
       "min": 1929889
      },
      "keypair": {
       "avg": 1092914,
       "count": 3,
       "max": 1093045,
       "median": 1092918,
       "min": 1092778
      }
     },
     "cycles_total": 5653203,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SM3-L1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "128",
      "param_set": "L1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L1",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SM3-L1",
     "sizes": {
      "ct": 706,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SM3/KAT_KEM_Lore-L1.txt",
      "pk": 610,
      "results_path": "results/Lore/Lore-SM3__Lore-L1.json",
      "sk": 2108,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 18100,
      "encaps": 17212,
      "keypair": 12852
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 552,
      "data": 1608,
      "source": "report",
      "text": 31212,
      "total": 33372
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 8167688,
       "count": 3,
       "max": 8171847,
       "median": 8169253,
       "min": 8161965
      },
      "encaps": {
       "avg": 17130173,
       "count": 3,
       "max": 38809769,
       "median": 6290820,
       "min": 6289930
      },
      "keypair": {
       "avg": 4537468,
       "count": 3,
       "max": 4537536,
       "median": 4537465,
       "min": 4537402
      }
     },
     "cycles_total": 29835329,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SM3-L2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "256",
      "param_set": "L2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L2",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SM3-L2",
     "sizes": {
      "ct": 1282,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SM3/KAT_KEM_Lore-L2.txt",
      "pk": 1186,
      "results_path": "results/Lore/Lore-SM3__Lore-L2.json",
      "sk": 4518,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 43524,
      "encaps": 42156,
      "keypair": 34652
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 552,
      "data": 1608,
      "source": "report",
      "text": 31948,
      "total": 34108
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 15164691,
       "count": 3,
       "max": 15172118,
       "median": 15162593,
       "min": 15159361
      },
      "encaps": {
       "avg": 16658804,
       "count": 3,
       "max": 24751708,
       "median": 12612669,
       "min": 12612036
      },
      "keypair": {
       "avg": 10044721,
       "count": 3,
       "max": 10044842,
       "median": 10044686,
       "min": 10044636
      }
     },
     "cycles_total": 41868216,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SM3-L3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 384,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "384",
      "param_set": "L3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L3",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SM3-L3",
     "sizes": {
      "ct": 2114,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SM3/KAT_KEM_Lore-L3.txt",
      "pk": 1954,
      "results_path": "results/Lore/Lore-SM3__Lore-L3.json",
      "sk": 7736,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 65396,
      "encaps": 63196,
      "keypair": 53204
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 552,
      "data": 1608,
      "source": "report",
      "text": 32756,
      "total": 34916
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 32337426,
       "count": 3,
       "max": 32345115,
       "median": 32339841,
       "min": 32327322
      },
      "encaps": {
       "avg": 44515775,
       "count": 3,
       "max": 79677711,
       "median": 26935161,
       "min": 26934453
      },
      "keypair": {
       "avg": 21675867,
       "count": 3,
       "max": 21676014,
       "median": 21676001,
       "min": 21675586
      }
     },
     "cycles_total": 98529068,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Lore-SM3-L4_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": "Lore spec §5.1 Table 2: L1..L4 meet the 128/256/384/512-bit classical levels required by NICCS",
      "label": "512",
      "param_set": "L4",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/37LSSFEFLBIAAXOMJXYRFAAYG5DRNK4X/",
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L4",
      "pub_date": "2026-09-20 11:14",
      "spec": "specs/Lore.pdf",
      "spec_extra": [],
      "spec_file": "Lore算法文本.pdf",
      "title": "Lore",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lore.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Lore-SM3-L4",
     "sizes": {
      "ct": 3170,
      "kat_path": "schemes/Lore/Test_Vectors/Lore-SM3/KAT_KEM_Lore-L4.txt",
      "pk": 2914,
      "results_path": "results/Lore/Lore-SM3__Lore-L4.json",
      "sk": 11432,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 97492,
      "encaps": 94236,
      "keypair": 79260
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 844,
      "data": 1352,
      "source": "report",
      "text": 29000,
      "total": 31196
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2191042,
       "count": 10,
       "max": 2197976,
       "median": 2192373,
       "min": 2183457
      },
      "encaps": {
       "avg": 1693408,
       "count": 10,
       "max": 1700020,
       "median": 1694196,
       "min": 1686749
      },
      "keypair": {
       "avg": 1087609,
       "count": 10,
       "max": 1087652,
       "median": 1087611,
       "min": 1087547
      }
     },
     "cycles_total": 4972059,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_MAMBA-Viper-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/GVM4FAYEOQ7SAF5BDM6SKPLOTA547A5X/",
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-128",
      "pub_date": "2026-09-20 10:50",
      "spec": "specs/MAMBA-Viper.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_Viper_Doc.pdf",
      "title": "MAMBA-Viper",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Viper.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-Viper-128",
     "sizes": {
      "ct": 736,
      "kat_path": "schemes/MAMBA-Viper/Test_Vectors/KAT_KEM_MAMBA-Viper-128.txt",
      "pk": 608,
      "sk": 1424,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 15132,
      "encaps": 14772,
      "keypair": 11476
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 844,
      "data": 1352,
      "source": "report",
      "text": 29528,
      "total": 31724
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3981145,
       "count": 10,
       "max": 3994285,
       "median": 3979450,
       "min": 3973486
      },
      "encaps": {
       "avg": 3255893,
       "count": 10,
       "max": 3267687,
       "median": 3254808,
       "min": 3250841
      },
      "keypair": {
       "avg": 2370928,
       "count": 10,
       "max": 2370970,
       "median": 2370919,
       "min": 2370918
      }
     },
     "cycles_total": 9607966,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_MAMBA-Viper-192_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/GVM4FAYEOQ7SAF5BDM6SKPLOTA547A5X/",
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-192",
      "pub_date": "2026-09-20 10:50",
      "spec": "specs/MAMBA-Viper.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_Viper_Doc.pdf",
      "title": "MAMBA-Viper",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Viper.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-Viper-192",
     "sizes": {
      "ct": 1088,
      "kat_path": "schemes/MAMBA-Viper/Test_Vectors/KAT_KEM_MAMBA-Viper-192.txt",
      "pk": 992,
      "sk": 2200,
      "source": "kat_raw",
      "ss": 24
     },
     "stack": {
      "decaps": 22996,
      "encaps": 22596,
      "keypair": 17684
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 844,
      "data": 1352,
      "source": "report",
      "text": 28924,
      "total": 31120
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 6199775,
       "count": 10,
       "max": 6207261,
       "median": 6200922,
       "min": 6192361
      },
      "encaps": {
       "avg": 5256450,
       "count": 10,
       "max": 5261812,
       "median": 5257325,
       "min": 5250364
      },
      "keypair": {
       "avg": 4109659,
       "count": 10,
       "max": 4109686,
       "median": 4109657,
       "min": 4109639
      }
     },
     "cycles_total": 15565884,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_MAMBA-Viper-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/GVM4FAYEOQ7SAF5BDM6SKPLOTA547A5X/",
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-256",
      "pub_date": "2026-09-20 10:50",
      "spec": "specs/MAMBA-Viper.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_Viper_Doc.pdf",
      "title": "MAMBA-Viper",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Viper.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-Viper-256",
     "sizes": {
      "ct": 1472,
      "kat_path": "schemes/MAMBA-Viper/Test_Vectors/KAT_KEM_MAMBA-Viper-256.txt",
      "pk": 1312,
      "sk": 2912,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 31428,
      "encaps": 31036,
      "keypair": 25044
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 844,
      "data": 1352,
      "source": "report",
      "text": 29556,
      "total": 31752
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 15898265,
       "count": 10,
       "max": 15909437,
       "median": 15896812,
       "min": 15886481
      },
      "encaps": {
       "avg": 14299123,
       "count": 10,
       "max": 14309275,
       "median": 14297950,
       "min": 14289443
      },
      "keypair": {
       "avg": 12380199,
       "count": 10,
       "max": 12380214,
       "median": 12380208,
       "min": 12380172
      }
     },
     "cycles_total": 42577587,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_MAMBA-Viper-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/GVM4FAYEOQ7SAF5BDM6SKPLOTA547A5X/",
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-384",
      "pub_date": "2026-09-20 10:50",
      "spec": "specs/MAMBA-Viper.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_Viper_Doc.pdf",
      "title": "MAMBA-Viper",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Viper.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-Viper-384",
     "sizes": {
      "ct": 2656,
      "kat_path": "schemes/MAMBA-Viper/Test_Vectors/KAT_KEM_MAMBA-Viper-384.txt",
      "pk": 2496,
      "sk": 5488,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": {
      "decaps": 69140,
      "encaps": 68740,
      "keypair": 59548
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 844,
      "data": 1352,
      "source": "report",
      "text": 29548,
      "total": 31744
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 24756389,
       "count": 10,
       "max": 24763739,
       "median": 24757694,
       "min": 24746258
      },
      "encaps": {
       "avg": 22713695,
       "count": 10,
       "max": 22720275,
       "median": 22715567,
       "min": 22703317
      },
      "keypair": {
       "avg": 20274015,
       "count": 10,
       "max": 20274148,
       "median": 20274001,
       "min": 20273998
      }
     },
     "cycles_total": 67744099,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_MAMBA-Viper-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/GVM4FAYEOQ7SAF5BDM6SKPLOTA547A5X/",
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-512",
      "pub_date": "2026-09-20 10:50",
      "spec": "specs/MAMBA-Viper.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_Viper_Doc.pdf",
      "title": "MAMBA-Viper",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Viper.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-Viper-512",
     "sizes": {
      "ct": 3456,
      "kat_path": "schemes/MAMBA-Viper/Test_Vectors/KAT_KEM_MAMBA-Viper-512.txt",
      "pk": 3200,
      "sk": 7040,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 103252,
      "encaps": 102772,
      "keypair": 91324
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25100,
      "total": 27000
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2384928,
       "count": 3,
       "max": 2384928,
       "median": 2384928,
       "min": 2384928
      },
      "encaps": {
       "avg": 2081993,
       "count": 3,
       "max": 2082018,
       "median": 2081980,
       "min": 2081980
      },
      "keypair": {
       "avg": 1787926,
       "count": 3,
       "max": 1787972,
       "median": 1787972,
       "min": 1787835
      }
     },
     "cycles_total": 6254847,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mithril-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Z26K5NHQNMT4NHBNWZT7G6IZVVRCCZKO/",
      "folder": "Mithril",
      "instance": "Mithril-128",
      "pub_date": "2026-09-20 10:48",
      "spec": "specs/Mithril.pdf",
      "spec_extra": [],
      "spec_file": "Mithril.pdf",
      "title": "Mithril",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mithril.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Mithril-128",
     "sizes": {
      "ct": 928,
      "kat_path": "schemes/Mithril/Test_Vectors/KAT_KEM_Mithril-128.txt",
      "pk": 944,
      "sk": 1136,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 11764,
      "encaps": 9772,
      "keypair": 7492
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25512,
      "total": 27412
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 7450600,
       "count": 3,
       "max": 7450613,
       "median": 7450612,
       "min": 7450574
      },
      "encaps": {
       "avg": 6364984,
       "count": 3,
       "max": 6365010,
       "median": 6364971,
       "min": 6364971
      },
      "keypair": {
       "avg": 5300045,
       "count": 3,
       "max": 5300060,
       "median": 5300060,
       "min": 5300014
      }
     },
     "cycles_total": 19115629,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mithril-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Z26K5NHQNMT4NHBNWZT7G6IZVVRCCZKO/",
      "folder": "Mithril",
      "instance": "Mithril-256",
      "pub_date": "2026-09-20 10:48",
      "spec": "specs/Mithril.pdf",
      "spec_extra": [],
      "spec_file": "Mithril.pdf",
      "title": "Mithril",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mithril.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Mithril-256",
     "sizes": {
      "ct": 1680,
      "kat_path": "schemes/Mithril/Test_Vectors/KAT_KEM_Mithril-256.txt",
      "pk": 1648,
      "sk": 2000,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 19612,
      "encaps": 15972,
      "keypair": 11596
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25600,
      "total": 27500
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 26197462,
       "count": 3,
       "max": 26197464,
       "median": 26197462,
       "min": 26197461
      },
      "encaps": {
       "avg": 22110232,
       "count": 3,
       "max": 22110233,
       "median": 22110232,
       "min": 22110230
      },
      "keypair": {
       "avg": 18080058,
       "count": 3,
       "max": 18080129,
       "median": 18080127,
       "min": 18079918
      }
     },
     "cycles_total": 66387752,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mithril-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Z26K5NHQNMT4NHBNWZT7G6IZVVRCCZKO/",
      "folder": "Mithril",
      "instance": "Mithril-512",
      "pub_date": "2026-09-20 10:48",
      "spec": "specs/Mithril.pdf",
      "spec_extra": [],
      "spec_file": "Mithril.pdf",
      "title": "Mithril",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mithril.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Mithril-512",
     "sizes": {
      "ct": 3504,
      "kat_path": "schemes/Mithril/Test_Vectors/KAT_KEM_Mithril-512.txt",
      "pk": 3056,
      "sk": 3728,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 35748,
      "encaps": 28452,
      "keypair": 19788
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-1-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-1-128",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-1-128",
     "sizes": {
      "ct": 5796,
      "pk": 3908,
      "results_path": "results/Mito/Mito-1-128.json",
      "sk": 4052,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-1-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-1-256",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-1-256",
     "sizes": {
      "ct": 12714,
      "pk": 8522,
      "results_path": "results/Mito/Mito-1-256.json",
      "sk": 8682,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-1-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-1-512",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-1-512",
     "sizes": {
      "ct": 39878,
      "pk": 26630,
      "results_path": "results/Mito/Mito-1-512.json",
      "sk": 26822,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-1-E-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-1-E-128",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-1-E-128",
     "sizes": {
      "ct": 5512,
      "pk": 3720,
      "results_path": "results/Mito/Mito-1-E-128.json",
      "sk": 3864,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-1-E-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-1-E-256",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-1-E-256",
     "sizes": {
      "ct": 12130,
      "pk": 8130,
      "results_path": "results/Mito/Mito-1-E-256.json",
      "sk": 8290,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-1-E-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-1-E-512",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-1-E-512",
     "sizes": {
      "ct": 38442,
      "pk": 25674,
      "results_path": "results/Mito/Mito-1-E-512.json",
      "sk": 25866,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-2-E-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-2-E-128",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-2-E-128",
     "sizes": {
      "ct": 6440,
      "pk": 5192,
      "results_path": "results/Mito/Mito-2-E-128.json",
      "sk": 5336,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-2-E-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-2-E-256",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-2-E-256",
     "sizes": {
      "ct": 13484,
      "pk": 10828,
      "results_path": "results/Mito/Mito-2-E-256.json",
      "sk": 10988,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Mito-2-E-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/NPRY7XDT2ABEJK5GBZS53L4FW7VDZYMZ/",
      "folder": "Mito",
      "instance": "Mito-2-E-512",
      "pub_date": "2026-09-20 10:47",
      "spec": "specs/Mito.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm Specification.pdf",
      "title": "Mito",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Mito.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Mito-2-E-512",
     "sizes": {
      "ct": 40840,
      "pk": 32712,
      "results_path": "results/Mito/Mito-2-E-512.json",
      "sk": 32904,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 25492,
      "total": 27648
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 413935,
       "count": 10,
       "max": 413956,
       "median": 413938,
       "min": 413911
      },
      "encaps": {
       "avg": 296148,
       "count": 10,
       "max": 296169,
       "median": 296151,
       "min": 296124
      },
      "keypair": {
       "avg": 346468,
       "count": 10,
       "max": 346474,
       "median": 346474,
       "min": 346410
      }
     },
     "cycles_total": 1056551,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-C1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "C1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-C1",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-C1",
     "sizes": {
      "ct": 615,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_512_769_ICCS.txt",
      "pk": 615,
      "sk": 1246,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 6688,
      "encaps": 6056,
      "keypair": 6008
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 24964,
      "total": 27120
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 466191,
       "count": 10,
       "max": 466191,
       "median": 466191,
       "min": 466191
      },
      "encaps": {
       "avg": 285688,
       "count": 10,
       "max": 285688,
       "median": 285688,
       "min": 285688
      },
      "keypair": {
       "avg": 346465,
       "count": 10,
       "max": 346471,
       "median": 346471,
       "min": 346409
      }
     },
     "cycles_total": 1098344,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-C1-c_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "C1-c",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-C1-c",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-C1-c",
     "sizes": {
      "ct": 512,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_512_769_C_ICCS.txt",
      "pk": 615,
      "sk": 1246,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 5560,
      "encaps": 5032,
      "keypair": 6008
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 33652,
      "total": 35808
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 953122,
       "count": 10,
       "max": 953177,
       "median": 953118,
       "min": 953069
      },
      "encaps": {
       "avg": 647500,
       "count": 10,
       "max": 647555,
       "median": 647496,
       "min": 647447
      },
      "keypair": {
       "avg": 837192,
       "count": 10,
       "max": 837228,
       "median": 837188,
       "min": 837188
      }
     },
     "cycles_total": 2437814,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-C2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "C2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-C2",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-C2",
     "sizes": {
      "ct": 1229,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_1024_769_ICCS.txt",
      "pk": 1229,
      "sk": 2490,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 15860,
      "encaps": 14596,
      "keypair": 15008
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 33116,
      "total": 35272
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1063223,
       "count": 10,
       "max": 1063254,
       "median": 1063220,
       "min": 1063220
      },
      "encaps": {
       "avg": 632108,
       "count": 10,
       "max": 632108,
       "median": 632108,
       "min": 632108
      },
      "keypair": {
       "avg": 837200,
       "count": 10,
       "max": 837200,
       "median": 837200,
       "min": 837199
      }
     },
     "cycles_total": 2532531,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-C2-c_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "C2-c",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-C2-c",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-C2-c",
     "sizes": {
      "ct": 1024,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_1024_769_C_ICCS.txt",
      "pk": 1229,
      "sk": 2490,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 13604,
      "encaps": 12548,
      "keypair": 15008
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 45396,
      "total": 47552
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2213441,
       "count": 10,
       "max": 2213496,
       "median": 2213451,
       "min": 2213370
      },
      "encaps": {
       "avg": 1551774,
       "count": 10,
       "max": 1551821,
       "median": 1551780,
       "min": 1551695
      },
      "keypair": {
       "avg": 2536950,
       "count": 10,
       "max": 2536992,
       "median": 2536941,
       "min": 2536941
      }
     },
     "cycles_total": 6302165,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-C3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "C3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-C3",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-C3",
     "sizes": {
      "ct": 2458,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_2048_769_ICCS.txt",
      "pk": 2458,
      "sk": 4980,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 37072,
      "encaps": 34536,
      "keypair": 38820
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 44764,
      "total": 46920
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2406038,
       "count": 10,
       "max": 2406070,
       "median": 2406030,
       "min": 2406029
      },
      "encaps": {
       "avg": 1493452,
       "count": 10,
       "max": 1493482,
       "median": 1493444,
       "min": 1493443
      },
      "keypair": {
       "avg": 2536953,
       "count": 10,
       "max": 2537002,
       "median": 2536948,
       "min": 2536948
      }
     },
     "cycles_total": 6436443,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-C3-c_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "C3-c",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-C3-c",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-C3-c",
     "sizes": {
      "ct": 2048,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_2048_769_C_ICCS.txt",
      "pk": 2458,
      "sk": 4980,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 32560,
      "encaps": 30440,
      "keypair": 32767
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 24488,
      "total": 26644
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 537026,
       "count": 10,
       "max": 537026,
       "median": 537026,
       "min": 537026
      },
      "encaps": {
       "avg": 447168,
       "count": 10,
       "max": 447202,
       "median": 447164,
       "min": 447164
      },
      "keypair": {
       "avg": 472127,
       "count": 10,
       "max": 472134,
       "median": 472134,
       "min": 472068
      }
     },
     "cycles_total": 1456321,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-D1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "D1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-D1",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-D1",
     "sizes": {
      "ct": 768,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_512_3329_ICCS.txt",
      "pk": 768,
      "sk": 1552,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 8264,
      "encaps": 7480,
      "keypair": 7432
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 30992,
      "total": 33148
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 978156,
       "count": 10,
       "max": 978191,
       "median": 978152,
       "min": 978152
      },
      "encaps": {
       "avg": 733585,
       "count": 10,
       "max": 733585,
       "median": 733585,
       "min": 733585
      },
      "keypair": {
       "avg": 851713,
       "count": 10,
       "max": 851713,
       "median": 851713,
       "min": 851712
      }
     },
     "cycles_total": 2563454,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-D2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "D2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-D2",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-D2",
     "sizes": {
      "ct": 1536,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_1024_3329_ICCS.txt",
      "pk": 1536,
      "sk": 3104,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 16144,
      "encaps": 14576,
      "keypair": 14988
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 40920,
      "total": 43076
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2228045,
       "count": 10,
       "max": 2228045,
       "median": 2228045,
       "min": 2228045
      },
      "encaps": {
       "avg": 1736631,
       "count": 10,
       "max": 1736659,
       "median": 1736624,
       "min": 1736624
      },
      "keypair": {
       "avg": 2386036,
       "count": 10,
       "max": 2386177,
       "median": 2386016,
       "min": 2386016
      }
     },
     "cycles_total": 6350712,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-D3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "D3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-D3",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-D3",
     "sizes": {
      "ct": 3072,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_2048_3329_ICCS.txt",
      "pk": 3072,
      "sk": 6208,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 37644,
      "encaps": 34500,
      "keypair": 38684
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 28752,
      "total": 30780
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 440303,
       "count": 10,
       "max": 440303,
       "median": 440303,
       "min": 440303
      },
      "encaps": {
       "avg": 324803,
       "count": 10,
       "max": 324803,
       "median": 324803,
       "min": 324803
      },
      "keypair": {
       "avg": 400700,
       "count": 10,
       "max": 400706,
       "median": 400706,
       "min": 400642
      }
     },
     "cycles_total": 1165806,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-R1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "R1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-R1",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-R1",
     "sizes": {
      "ct": 672,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_512_1409_ICCS.txt",
      "pk": 672,
      "sk": 1360,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 8032,
      "encaps": 7344,
      "keypair": 7556
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 41116,
      "total": 43144
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 944053,
       "count": 10,
       "max": 944090,
       "median": 944049,
       "min": 944049
      },
      "encaps": {
       "avg": 635008,
       "count": 10,
       "max": 635008,
       "median": 635008,
       "min": 635008
      },
      "keypair": {
       "avg": 962304,
       "count": 10,
       "max": 962304,
       "median": 962304,
       "min": 962303
      }
     },
     "cycles_total": 2541365,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-R2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "R2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-R2",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-R2",
     "sizes": {
      "ct": 1344,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_1024_1409_ICCS.txt",
      "pk": 1344,
      "sk": 2720,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 18724,
      "encaps": 17348,
      "keypair": 19444
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 49124,
      "total": 51152
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2310650,
       "count": 10,
       "max": 2310732,
       "median": 2310645,
       "min": 2310579
      },
      "encaps": {
       "avg": 1631472,
       "count": 10,
       "max": 1631559,
       "median": 1631468,
       "min": 1631405
      },
      "keypair": {
       "avg": 2695867,
       "count": 10,
       "max": 2695961,
       "median": 2695870,
       "min": 2695799
      }
     },
     "cycles_total": 6637989,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NEV-R3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "R3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7ZYN5QNIORSGBY3FNOE3DNCO43KZRVJA/",
      "folder": "NEV",
      "instance": "NEV-R3",
      "pub_date": "2026-09-20 10:45",
      "spec": "specs/NEV.pdf",
      "spec_extra": [],
      "spec_file": "算法文本：NEV.pdf",
      "title": "NEV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-R3",
     "sizes": {
      "ct": 2688,
      "kat_path": "schemes/NEV/Test_Vectors/KAT_KEM_NEV_2048_1409_ICCS.txt",
      "pk": 2688,
      "sk": 5440,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 43108,
      "encaps": 40348,
      "keypair": 46340
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24604,
      "total": 26504
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 398243,
       "count": 10,
       "max": 398269,
       "median": 398242,
       "min": 398204
      },
      "encaps": {
       "avg": 311866,
       "count": 10,
       "max": 311892,
       "median": 311864,
       "min": 311827
      },
      "keypair": {
       "avg": 357167,
       "count": 10,
       "max": 357174,
       "median": 357174,
       "min": 357107
      }
     },
     "cycles_total": 1067276,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NTRE-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/XPRXBWG46LFNJ4SUOZOGZM44VNIUPO34/",
      "folder": "NTRE",
      "instance": "NTRE-128",
      "pub_date": "2026-09-20 10:42",
      "spec": "specs/NTRE.pdf",
      "spec_extra": [],
      "spec_file": "NTRE.KEM-Documentation.pdf",
      "title": "NTRE Key Encapsulation Mechanism",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NTRE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NTRE-128",
     "sizes": {
      "ct": 972,
      "kat_path": "schemes/NTRE/Test_Vectors/KAT_KEM_NTRE-128.txt",
      "pk": 972,
      "sk": 1976,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 7176,
      "encaps": 6864,
      "keypair": 6336
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25404,
      "total": 27304
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 773712,
       "count": 10,
       "max": 773766,
       "median": 773716,
       "min": 773636
      },
      "encaps": {
       "avg": 590037,
       "count": 10,
       "max": 590092,
       "median": 590042,
       "min": 589963
      },
      "keypair": {
       "avg": 658127,
       "count": 10,
       "max": 658174,
       "median": 658138,
       "min": 657996
      }
     },
     "cycles_total": 2021876,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NTRE-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/XPRXBWG46LFNJ4SUOZOGZM44VNIUPO34/",
      "folder": "NTRE",
      "instance": "NTRE-256",
      "pub_date": "2026-09-20 10:42",
      "spec": "specs/NTRE.pdf",
      "spec_extra": [],
      "spec_file": "NTRE.KEM-Documentation.pdf",
      "title": "NTRE Key Encapsulation Mechanism",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NTRE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NTRE-256",
     "sizes": {
      "ct": 1944,
      "kat_path": "schemes/NTRE/Test_Vectors/KAT_KEM_NTRE-256.txt",
      "pk": 1944,
      "sk": 3920,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 13752,
      "encaps": 11488,
      "keypair": 11520
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25768,
      "total": 27668
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1724463,
       "count": 10,
       "max": 1724589,
       "median": 1724454,
       "min": 1724387
      },
      "encaps": {
       "avg": 1314711,
       "count": 10,
       "max": 1314832,
       "median": 1314697,
       "min": 1314631
      },
      "keypair": {
       "avg": 1346334,
       "count": 10,
       "max": 1346373,
       "median": 1346335,
       "min": 1346285
      }
     },
     "cycles_total": 4385508,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_NTRE-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/XPRXBWG46LFNJ4SUOZOGZM44VNIUPO34/",
      "folder": "NTRE",
      "instance": "NTRE-512",
      "pub_date": "2026-09-20 10:42",
      "spec": "specs/NTRE.pdf",
      "spec_extra": [],
      "spec_file": "NTRE.KEM-Documentation.pdf",
      "title": "NTRE Key Encapsulation Mechanism",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NTRE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NTRE-512",
     "sizes": {
      "ct": 3456,
      "kat_path": "schemes/NTRE/Test_Vectors/KAT_KEM_NTRE-512.txt",
      "pk": 3456,
      "sk": 6944,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 24080,
      "encaps": 20240,
      "keypair": 19584
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 30844,
      "total": 32744
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1124753,
       "count": 10,
       "max": 1124753,
       "median": 1124753,
       "min": 1124753
      },
      "encaps": {
       "avg": 1083789,
       "count": 10,
       "max": 1083833,
       "median": 1083793,
       "min": 1083716
      },
      "keypair": {
       "avg": 1168606,
       "count": 10,
       "max": 1168701,
       "median": 1168590,
       "min": 1168590
      }
     },
     "cycles_total": 3377148,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_OAEP-NTRU-1296_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "OAEP-NTRU spec Table 1: n=648/1296/2592 target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "256",
      "param_set": "n=1296",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LOTU4OB6M7NAVL5OSUGTQO3L35IVP4R2/",
      "folder": "OAEP-NTRU",
      "instance": "OAEP-NTRU-1296",
      "pub_date": "2026-09-20 10:41",
      "spec": "specs/OAEP-NTRU.pdf",
      "spec_extra": [],
      "spec_file": "2算法文本（OAEP-NTRU）.pdf",
      "title": "OAEP-NTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/OAEP-NTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "OAEP-NTRU-1296",
     "sizes": {
      "ct": 2494,
      "kat_path": "schemes/OAEP-NTRU/Test_Vectors/KAT_KEM_OAEP-NTRU-1296.txt",
      "pk": 2430,
      "sk": 4924,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 17920,
      "encaps": 15304,
      "keypair": 16776
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 33240,
      "total": 35140
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2753789,
       "count": 10,
       "max": 2753789,
       "median": 2753789,
       "min": 2753789
      },
      "encaps": {
       "avg": 2601960,
       "count": 10,
       "max": 2601970,
       "median": 2601959,
       "min": 2601959
      },
      "keypair": {
       "avg": 2512815,
       "count": 10,
       "max": 2512851,
       "median": 2512801,
       "min": 2512768
      }
     },
     "cycles_total": 7868564,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_OAEP-NTRU-2592_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "OAEP-NTRU spec Table 1: n=648/1296/2592 target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "512",
      "param_set": "n=2592",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LOTU4OB6M7NAVL5OSUGTQO3L35IVP4R2/",
      "folder": "OAEP-NTRU",
      "instance": "OAEP-NTRU-2592",
      "pub_date": "2026-09-20 10:41",
      "spec": "specs/OAEP-NTRU.pdf",
      "spec_extra": [],
      "spec_file": "2算法文本（OAEP-NTRU）.pdf",
      "title": "OAEP-NTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/OAEP-NTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "OAEP-NTRU-2592",
     "sizes": {
      "ct": 4988,
      "kat_path": "schemes/OAEP-NTRU/Test_Vectors/KAT_KEM_OAEP-NTRU-2592.txt",
      "pk": 4860,
      "sk": 9848,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 35480,
      "encaps": 29872,
      "keypair": 32808
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28196,
      "total": 30096
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 405790,
       "count": 10,
       "max": 405790,
       "median": 405790,
       "min": 405790
      },
      "encaps": {
       "avg": 335748,
       "count": 10,
       "max": 335757,
       "median": 335757,
       "min": 335667
      },
      "keypair": {
       "avg": 406082,
       "count": 10,
       "max": 406086,
       "median": 406081,
       "min": 406081
      }
     },
     "cycles_total": 1147620,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_OAEP-NTRU-648_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "OAEP-NTRU spec Table 1: n=648/1296/2592 target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "128",
      "param_set": "n=648",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LOTU4OB6M7NAVL5OSUGTQO3L35IVP4R2/",
      "folder": "OAEP-NTRU",
      "instance": "OAEP-NTRU-648",
      "pub_date": "2026-09-20 10:41",
      "spec": "specs/OAEP-NTRU.pdf",
      "spec_extra": [],
      "spec_file": "2算法文本（OAEP-NTRU）.pdf",
      "title": "OAEP-NTRU",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/OAEP-NTRU.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "OAEP-NTRU-648",
     "sizes": {
      "ct": 1085,
      "kat_path": "schemes/OAEP-NTRU/Test_Vectors/KAT_KEM_OAEP-NTRU-648.txt",
      "pk": 1053,
      "sk": 2138,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 9152,
      "encaps": 7248,
      "keypair": 7968
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1624,
      "source": "report",
      "text": 41260,
      "total": 43432
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 911593,
       "count": 10,
       "max": 911687,
       "median": 911591,
       "min": 911538
      },
      "encaps": {
       "avg": 672278,
       "count": 10,
       "max": 672312,
       "median": 672279,
       "min": 672246
      },
      "keypair": {
       "avg": 523908,
       "count": 10,
       "max": 523974,
       "median": 523909,
       "min": 523810
      }
     },
     "cycles_total": 2107779,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_POLARLAC-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VWVCIBQ3M7NQOWU25P7SY3XK3PCAJT4X/",
      "folder": "PolarLAC",
      "instance": "POLARLAC-128",
      "pub_date": "2026-09-20 10:35",
      "spec": "specs/PolarLAC.pdf",
      "spec_extra": [],
      "spec_file": "算法文本.pdf",
      "title": "PolarLAC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/PolarLAC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "POLARLAC-128",
     "sizes": {
      "ct": 640,
      "kat_path": "schemes/PolarLAC/Test_Vectors/Reference_Implementation/x86/KAT_KEM_POLARLAC-128.txt",
      "pk": 530,
      "sk": 1570,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 12896,
      "encaps": 12408,
      "keypair": 10600
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1880,
      "source": "report",
      "text": 47728,
      "total": 50156
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1856130,
       "count": 10,
       "max": 1950442,
       "median": 1845664,
       "min": 1845593
      },
      "encaps": {
       "avg": 1329464,
       "count": 10,
       "max": 1423741,
       "median": 1318989,
       "min": 1318944
      },
      "keypair": {
       "avg": 1010300,
       "count": 10,
       "max": 1104571,
       "median": 999840,
       "min": 999767
      }
     },
     "cycles_total": 4195894,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_POLARLAC-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VWVCIBQ3M7NQOWU25P7SY3XK3PCAJT4X/",
      "folder": "PolarLAC",
      "instance": "POLARLAC-256",
      "pub_date": "2026-09-20 10:35",
      "spec": "specs/PolarLAC.pdf",
      "spec_extra": [],
      "spec_file": "算法文本.pdf",
      "title": "PolarLAC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/PolarLAC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "POLARLAC-256",
     "sizes": {
      "ct": 1280,
      "kat_path": "schemes/PolarLAC/Test_Vectors/Reference_Implementation/x86/KAT_KEM_POLARLAC-256.txt",
      "pk": 1060,
      "sk": 3140,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 25120,
      "encaps": 21816,
      "keypair": 19384
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 2392,
      "source": "report",
      "text": 61372,
      "total": 64312
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 4967224,
       "count": 10,
       "max": 4967269,
       "median": 4967240,
       "min": 4967142
      },
      "encaps": {
       "avg": 3679561,
       "count": 10,
       "max": 3679623,
       "median": 3679560,
       "min": 3679486
      },
      "keypair": {
       "avg": 2805974,
       "count": 10,
       "max": 3061636,
       "median": 2777598,
       "min": 2777429
      }
     },
     "cycles_total": 11452759,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_POLARLAC-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VWVCIBQ3M7NQOWU25P7SY3XK3PCAJT4X/",
      "folder": "PolarLAC",
      "instance": "POLARLAC-512",
      "pub_date": "2026-09-20 10:35",
      "spec": "specs/PolarLAC.pdf",
      "spec_extra": [],
      "spec_file": "算法文本.pdf",
      "title": "PolarLAC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/PolarLAC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "POLARLAC-512",
     "sizes": {
      "ct": 2560,
      "kat_path": "schemes/PolarLAC/Test_Vectors/Reference_Implementation/x86/KAT_KEM_POLARLAC-512.txt",
      "pk": 2116,
      "sk": 6276,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 49816,
      "encaps": 42240,
      "keypair": 37248
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 2392,
      "source": "report",
      "text": 68268,
      "total": 71208
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 6462042,
       "count": 10,
       "max": 6462221,
       "median": 6462062,
       "min": 6461827
      },
      "encaps": {
       "avg": 4966468,
       "count": 10,
       "max": 4966808,
       "median": 4966446,
       "min": 4966219
      },
      "keypair": {
       "avg": 3693121,
       "count": 10,
       "max": 3693345,
       "median": 3693122,
       "min": 3692911
      }
     },
     "cycles_total": 15121631,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_POLARLAC-512-Star_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VWVCIBQ3M7NQOWU25P7SY3XK3PCAJT4X/",
      "folder": "PolarLAC",
      "instance": "POLARLAC-512-Star",
      "pub_date": "2026-09-20 10:35",
      "spec": "specs/PolarLAC.pdf",
      "spec_extra": [],
      "spec_file": "算法文本.pdf",
      "title": "PolarLAC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/PolarLAC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "POLARLAC-512-Star",
     "sizes": {
      "ct": 2970,
      "kat_path": "schemes/PolarLAC/Test_Vectors/Reference_Implementation/x86/KAT_KEM_POLARLAC-512-Star.txt",
      "pk": 2522,
      "sk": 6682,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 52608,
      "encaps": 49296,
      "keypair": 40216
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1624,
      "source": "report",
      "text": 41324,
      "total": 43496
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 880254,
       "count": 10,
       "max": 925369,
       "median": 875244,
       "min": 875197
      },
      "encaps": {
       "avg": 644130,
       "count": 10,
       "max": 689244,
       "median": 639118,
       "min": 639110
      },
      "keypair": {
       "avg": 495404,
       "count": 10,
       "max": 495459,
       "median": 495410,
       "min": 495260
      }
     },
     "cycles_total": 2019788,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_POLARLAC-Light_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "PolarLAC spec Table 2-3: lightweight set recommended where refined-BKZ estimates suffice (core-SVP 121.6 / refined BKZ 143.8 classical bits); no explicit bit claim",
      "label": "128",
      "param_set": "Light",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VWVCIBQ3M7NQOWU25P7SY3XK3PCAJT4X/",
      "folder": "PolarLAC",
      "instance": "POLARLAC-Light",
      "pub_date": "2026-09-20 10:35",
      "spec": "specs/PolarLAC.pdf",
      "spec_extra": [],
      "spec_file": "算法文本.pdf",
      "title": "PolarLAC",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/PolarLAC.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "POLARLAC-Light",
     "sizes": {
      "ct": 608,
      "kat_path": "schemes/PolarLAC/Test_Vectors/Reference_Implementation/x86/KAT_KEM_POLARLAC-Light.txt",
      "pk": 530,
      "sk": 1570,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 12864,
      "encaps": 11864,
      "keypair": 10056
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24436,
      "total": 26336
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2262256,
       "count": 10,
       "max": 2262341,
       "median": 2262262,
       "min": 2262168
      },
      "encaps": {
       "avg": 1128630,
       "count": 10,
       "max": 1128720,
       "median": 1128639,
       "min": 1128546
      },
      "keypair": {
       "avg": 311984,
       "count": 10,
       "max": 311990,
       "median": 311990,
       "min": 311929
      }
     },
     "cycles_total": 3702870,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_PolarKEM-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/SUWKT64BKLBIPDQMHPOBL3FDM4MRPVBJ/",
      "folder": "Polar-KEM",
      "instance": "PolarKEM-128",
      "pub_date": "2026-09-20 10:38",
      "spec": "specs/Polar-KEM.pdf",
      "spec_extra": [],
      "spec_file": "polarkem-spec.pdf",
      "title": "Polar-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Polar-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "PolarKEM-128",
     "sizes": {
      "ct": 768,
      "kat_path": "schemes/Polar-KEM/Test_Vectors/KAT_KEM_PolarKEM-128.txt",
      "pk": 1024,
      "sk": 2048,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 10000,
      "encaps": 9200,
      "keypair": 1184
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24852,
      "total": 26752
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3102292,
       "count": 10,
       "max": 3102369,
       "median": 3102316,
       "min": 3102166
      },
      "encaps": {
       "avg": 1531510,
       "count": 10,
       "max": 1531572,
       "median": 1531536,
       "min": 1531396
      },
      "keypair": {
       "avg": 607899,
       "count": 10,
       "max": 607934,
       "median": 607893,
       "min": 607831
      }
     },
     "cycles_total": 5241701,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_PolarKEM-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/SUWKT64BKLBIPDQMHPOBL3FDM4MRPVBJ/",
      "folder": "Polar-KEM",
      "instance": "PolarKEM-256",
      "pub_date": "2026-09-20 10:38",
      "spec": "specs/Polar-KEM.pdf",
      "spec_extra": [],
      "spec_file": "polarkem-spec.pdf",
      "title": "Polar-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Polar-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "PolarKEM-256",
     "sizes": {
      "ct": 1280,
      "kat_path": "schemes/Polar-KEM/Test_Vectors/KAT_KEM_PolarKEM-256.txt",
      "pk": 2048,
      "sk": 4096,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 14680,
      "encaps": 13336,
      "keypair": 1184
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25436,
      "total": 27336
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 6087601,
       "count": 10,
       "max": 6087731,
       "median": 6087616,
       "min": 6087378
      },
      "encaps": {
       "avg": 2998020,
       "count": 10,
       "max": 2998180,
       "median": 2998023,
       "min": 2997863
      },
      "keypair": {
       "avg": 1199706,
       "count": 10,
       "max": 1199712,
       "median": 1199712,
       "min": 1199653
      }
     },
     "cycles_total": 10285327,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_PolarKEM-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/SUWKT64BKLBIPDQMHPOBL3FDM4MRPVBJ/",
      "folder": "Polar-KEM",
      "instance": "PolarKEM-512",
      "pub_date": "2026-09-20 10:38",
      "spec": "specs/Polar-KEM.pdf",
      "spec_extra": [],
      "spec_file": "polarkem-spec.pdf",
      "title": "Polar-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Polar-KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "PolarKEM-512",
     "sizes": {
      "ct": 2304,
      "kat_path": "schemes/Polar-KEM/Test_Vectors/KAT_KEM_PolarKEM-512.txt",
      "pk": 4096,
      "sk": 8192,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 24204,
      "encaps": 21616,
      "keypair": 1184
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-128-AES_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-128",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-128-AES",
     "sizes": {
      "ct": 6160,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-128-AES-packed10.txt",
      "pk": 6096,
      "sk": 7440,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-128-SHAKE_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-128",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-128-SHAKE",
     "sizes": {
      "ct": 6160,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-128-SHAKE-packed10.txt",
      "pk": 6096,
      "sk": 7440,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-128-SM3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-128",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-128-SM3",
     "sizes": {
      "ct": 6160,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-128-SM3-packed10.txt",
      "pk": 6096,
      "sk": 7440,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-192-AES_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-192",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-192-AES",
     "sizes": {
      "ct": 12645,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-192-AES-packed10.txt",
      "pk": 11456,
      "sk": 13872,
      "source": "kat_raw",
      "ss": 24
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-192-SHAKE_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-192",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-192-SHAKE",
     "sizes": {
      "ct": 12645,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-192-SHAKE-packed10.txt",
      "pk": 11456,
      "sk": 13872,
      "source": "kat_raw",
      "ss": 24
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-192-SM3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-192",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-192-SM3",
     "sizes": {
      "ct": 12645,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-192-SM3-packed10.txt",
      "pk": 11456,
      "sk": 13872,
      "source": "kat_raw",
      "ss": 24
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-256-AES_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-256",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-256-AES",
     "sizes": {
      "ct": 17925,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-256-AES-packed10.txt",
      "pk": 16296,
      "sk": 19680,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-256-SHAKE_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-256",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-256-SHAKE",
     "sizes": {
      "ct": 17925,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-256-SHAKE-packed10.txt",
      "pk": 16296,
      "sk": 19680,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-256-SM3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-256",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-256-SM3",
     "sizes": {
      "ct": 17925,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-256-SM3-packed10.txt",
      "pk": 16296,
      "sk": 19680,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-384-AES_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-384",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-384-AES",
     "sizes": {
      "ct": 33600,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-384-AES-packed10.txt",
      "pk": 33296,
      "sk": 40144,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-384-SHAKE_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-384",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-384-SHAKE",
     "sizes": {
      "ct": 33600,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-384-SHAKE-packed10.txt",
      "pk": 33296,
      "sk": 40144,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-384-SM3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-384",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-384-SM3",
     "sizes": {
      "ct": 33600,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-384-SM3-packed10.txt",
      "pk": 33296,
      "sk": 40144,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-512-AES_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-512",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-512-AES",
     "sizes": {
      "ct": 48320,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-512-AES-packed10.txt",
      "pk": 48016,
      "sk": 57872,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-512-SHAKE_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-512",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-512-SHAKE",
     "sizes": {
      "ct": 48320,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-512-SHAKE-packed10.txt",
      "pk": 48016,
      "sk": 57872,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_Scloudplus-512-SM3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KZFYINTQPUTXVATTIXUONZ63TGNGQQ55/",
      "folder": "Scloudplus",
      "instance": "Scloudplus-512",
      "pub_date": "2026-09-20 10:31",
      "spec": "specs/Scloudplus.pdf",
      "spec_extra": [],
      "spec_file": "Scloud+算法文本.pdf",
      "title": "Scloud+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Scloud%2B.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "Scloudplus-512-SM3",
     "sizes": {
      "ct": 48320,
      "kat_path": "schemes/Scloudplus/Test_Vectors/KAT_KEM_Scloudplus-512-SM3-packed10.txt",
      "pk": 48016,
      "sk": 57872,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 37684,
      "total": 39584
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 307599538,
       "count": 10,
       "max": 308241958,
       "median": 307530190,
       "min": 307512345
      },
      "encaps": {
       "avg": 100814790,
       "count": 10,
       "max": 100814881,
       "median": 100814759,
       "min": 100814727
      },
      "keypair": {
       "avg": 1218212433,
       "count": 10,
       "max": 1218212893,
       "median": 1218212376,
       "min": 1218212328
      }
     },
     "cycles_total": 1626626761,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TRIKE-2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "TRIKE spec Table 1: TRIKE-2/5/7/9 target 128/256/384/512-bit classical (80/128/192/256-bit quantum) security",
      "label": "128",
      "param_set": "TRIKE-2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MFS7WQ3ZYDSMM4PIFN32QGZQ26BB4TGX/",
      "folder": "TRIKE",
      "instance": "TRIKE-2",
      "pub_date": "2026-09-20 10:30",
      "spec": "specs/TRIKE.pdf",
      "spec_extra": [],
      "spec_file": "TRIKE算法文档.pdf",
      "title": "TRIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRIKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "TRIKE-2",
     "sizes": {
      "ct": 3928,
      "kat_path": "schemes/TRIKE/Test_Vectors/KAT_KEM_TRIKE-2.txt",
      "pk": 1980,
      "sk": 6328,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 3128,
      "encaps": 2748,
      "keypair": 1984
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39068,
      "total": 40968
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1395147539,
       "count": 3,
       "max": 1395165337,
       "median": 1395149579,
       "min": 1395127701
      },
      "encaps": {
       "avg": 958447827,
       "count": 3,
       "max": 958616960,
       "median": 958366753,
       "min": 958359769
      },
      "keypair": {
       "avg": 10447900932,
       "count": 3,
       "max": 10476462611,
       "median": 10474189951,
       "min": 10393050235
      }
     },
     "cycles_total": 12801496298,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TRIKE-5_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "TRIKE spec Table 1: TRIKE-2/5/7/9 target 128/256/384/512-bit classical (80/128/192/256-bit quantum) security",
      "label": "256",
      "param_set": "TRIKE-5",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MFS7WQ3ZYDSMM4PIFN32QGZQ26BB4TGX/",
      "folder": "TRIKE",
      "instance": "TRIKE-5",
      "pub_date": "2026-09-20 10:30",
      "spec": "specs/TRIKE.pdf",
      "spec_extra": [],
      "spec_file": "TRIKE算法文档.pdf",
      "title": "TRIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRIKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "TRIKE-5",
     "sizes": {
      "ct": 8874,
      "kat_path": "schemes/TRIKE/Test_Vectors/KAT_KEM_TRIKE-5.txt",
      "pk": 4453,
      "sk": 13988,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 4024,
      "encaps": 3304,
      "keypair": 2232
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "too-slow",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TRIKE-7_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": "TRIKE spec Table 1: TRIKE-2/5/7/9 target 128/256/384/512-bit classical (80/128/192/256-bit quantum) security",
      "label": "384",
      "param_set": "TRIKE-7",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MFS7WQ3ZYDSMM4PIFN32QGZQ26BB4TGX/",
      "folder": "TRIKE",
      "instance": "TRIKE-7",
      "pub_date": "2026-09-20 10:30",
      "spec": "specs/TRIKE.pdf",
      "spec_extra": [],
      "spec_file": "TRIKE算法文档.pdf",
      "title": "TRIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRIKE.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "TRIKE-7",
     "sizes": {
      "ct": 17488,
      "kat_path": "schemes/TRIKE/Test_Vectors/KAT_KEM_TRIKE-7.txt",
      "pk": 8776,
      "sk": 27260,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": "not run: too slow for the board run (TRIKE-5 needs ~13 min per iteration; QEMU shows ~4x that)",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": "too-slow",
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TRIKE-9_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "TRIKE spec Table 1: TRIKE-2/5/7/9 target 128/256/384/512-bit classical (80/128/192/256-bit quantum) security",
      "label": "512",
      "param_set": "TRIKE-9",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MFS7WQ3ZYDSMM4PIFN32QGZQ26BB4TGX/",
      "folder": "TRIKE",
      "instance": "TRIKE-9",
      "pub_date": "2026-09-20 10:30",
      "spec": "specs/TRIKE.pdf",
      "spec_extra": [],
      "spec_file": "TRIKE算法文档.pdf",
      "title": "TRIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRIKE.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "TRIKE-9",
     "sizes": {
      "ct": 28576,
      "kat_path": "schemes/TRIKE/Test_Vectors/KAT_KEM_TRIKE-9.txt",
      "pk": 14320,
      "sk": 44228,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": "not run: too slow for the board run (same as TRIKE-7)",
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TriQ-KEM-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKY3EZYVJHKKT2RJKK2IRE2X5V4UN4HO/",
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-128",
      "pub_date": "2026-09-20 10:29",
      "spec": "specs/TriQ-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEM-128",
     "sizes": {
      "ct": 4086,
      "kat_path": "schemes/TriQ-KEM/Test_Vectors/KAT_KEM_TriQ-KEM-128.txt",
      "pk": 2054,
      "sk": 2102,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TriQ-KEM-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKY3EZYVJHKKT2RJKK2IRE2X5V4UN4HO/",
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-256",
      "pub_date": "2026-09-20 10:29",
      "spec": "specs/TriQ-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEM-256",
     "sizes": {
      "ct": 12472,
      "kat_path": "schemes/TriQ-KEM/Test_Vectors/KAT_KEM_TriQ-KEM-256.txt",
      "pk": 6328,
      "sk": 6424,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TriQ-KEM-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKY3EZYVJHKKT2RJKK2IRE2X5V4UN4HO/",
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-384",
      "pub_date": "2026-09-20 10:29",
      "spec": "specs/TriQ-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEM-384",
     "sizes": {
      "ct": 24335,
      "kat_path": "schemes/TriQ-KEM/Test_Vectors/KAT_KEM_TriQ-KEM-384.txt",
      "pk": 12255,
      "sk": 12399,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_TriQ-KEM-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKY3EZYVJHKKT2RJKK2IRE2X5V4UN4HO/",
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-512",
      "pub_date": "2026-09-20 10:29",
      "spec": "specs/TriQ-KEM.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEM.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEM-512",
     "sizes": {
      "ct": 39320,
      "kat_path": "schemes/TriQ-KEM/Test_Vectors/KAT_KEM_TriQ-KEM-512.txt",
      "pk": 19768,
      "sk": 19960,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 31000,
      "total": 33028
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1730641,
       "count": 10,
       "max": 1730998,
       "median": 1730614,
       "min": 1730230
      },
      "encaps": {
       "avg": 1546402,
       "count": 10,
       "max": 1546798,
       "median": 1546376,
       "min": 1545989
      },
      "keypair": {
       "avg": 1323885,
       "count": 10,
       "max": 1324185,
       "median": 1323854,
       "min": 1323550
      }
     },
     "cycles_total": 4600928,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_WeaverKEM-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OMIKZ7ZL4FLNNUIVD7CK7D4CGYJ5L3AD/",
      "folder": "Weaver",
      "instance": "WeaverKEM-128",
      "pub_date": "2026-09-20 10:28",
      "spec": "specs/Weaver.pdf",
      "spec_extra": [],
      "spec_file": "Weaver算法设计说明书.pdf",
      "title": "Weaver",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Weaver.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "WeaverKEM-128",
     "sizes": {
      "ct": 816,
      "kat_path": "schemes/Weaver/Test_Vectors/KAT_KEM_WeaverKEM-128.txt",
      "pk": 752,
      "sk": 1776,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 12688,
      "encaps": 11880,
      "keypair": 10040
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 35416,
      "total": 37444
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2812636,
       "count": 10,
       "max": 2813593,
       "median": 2812660,
       "min": 2812053
      },
      "encaps": {
       "avg": 2497907,
       "count": 10,
       "max": 2498896,
       "median": 2497928,
       "min": 2497321
      },
      "keypair": {
       "avg": 2087536,
       "count": 10,
       "max": 2088725,
       "median": 2087513,
       "min": 2086570
      }
     },
     "cycles_total": 7398079,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_WeaverKEM-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OMIKZ7ZL4FLNNUIVD7CK7D4CGYJ5L3AD/",
      "folder": "Weaver",
      "instance": "WeaverKEM-256",
      "pub_date": "2026-09-20 10:28",
      "spec": "specs/Weaver.pdf",
      "spec_extra": [],
      "spec_file": "Weaver算法设计说明书.pdf",
      "title": "Weaver",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Weaver.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "WeaverKEM-256",
     "sizes": {
      "ct": 1536,
      "kat_path": "schemes/Weaver/Test_Vectors/KAT_KEM_WeaverKEM-256.txt",
      "pk": 1312,
      "sk": 3072,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 18076,
      "encaps": 16456,
      "keypair": 13312
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 46220,
      "total": 48376
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 8099795,
       "count": 10,
       "max": 8101015,
       "median": 8099730,
       "min": 8098819
      },
      "encaps": {
       "avg": 7252668,
       "count": 10,
       "max": 7253850,
       "median": 7252638,
       "min": 7251691
      },
      "keypair": {
       "avg": 6103220,
       "count": 10,
       "max": 6104490,
       "median": 6103018,
       "min": 6102629
      }
     },
     "cycles_total": 21455683,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_WeaverKEM-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/OMIKZ7ZL4FLNNUIVD7CK7D4CGYJ5L3AD/",
      "folder": "Weaver",
      "instance": "WeaverKEM-512",
      "pub_date": "2026-09-20 10:28",
      "spec": "specs/Weaver.pdf",
      "spec_extra": [],
      "spec_file": "Weaver算法设计说明书.pdf",
      "title": "Weaver",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Weaver.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "WeaverKEM-512",
     "sizes": {
      "ct": 3392,
      "kat_path": "schemes/Weaver/Test_Vectors/KAT_KEM_WeaverKEM-512.txt",
      "pk": 2880,
      "sk": 6400,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 36120,
      "encaps": 32792,
      "keypair": 34836
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 51352,
      "total": 53252
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 4280287,
       "count": 10,
       "max": 4281006,
       "median": 4280376,
       "min": 4279146
      },
      "encaps": {
       "avg": 2428028,
       "count": 10,
       "max": 2428359,
       "median": 2428043,
       "min": 2427562
      },
      "keypair": {
       "avg": 4552498,
       "count": 10,
       "max": 4655829,
       "median": 4526725,
       "min": 4525780
      }
     },
     "cycles_total": 11260813,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_YuanYang-KEM-1024_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": "YuanYang.KEM / YuanYang.DSA spec Table 1: ring degree 512/1024/2048 targets 128/256/512-bit classical security",
      "label": "256",
      "param_set": "n=1024",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/JL5OIS2NICCPYKQGQWMHLTWTGEDK2OCW/",
      "folder": "YuanYang.KEM",
      "instance": "yuanyang-1024",
      "pub_date": "2026-09-20 10:27",
      "spec": "specs/YuanYang.KEM.pdf",
      "spec_extra": [],
      "spec_file": "YuanYang.KEM算法文本.pdf",
      "title": "YuanYang.KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/YuanYang.KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "YuanYang-KEM-1024",
     "sizes": {
      "ct": 1344,
      "kat_path": "schemes/YuanYang.KEM/Test_Vectors/yuanyang-1024.txt",
      "pk": 1568,
      "results_path": "results/YuanYang.KEM/yuanyang-1024.json",
      "sk": 3168,
      "source": "ngcc_results",
      "ss": 32
     },
     "stack": {
      "decaps": 40152,
      "encaps": 21000,
      "keypair": 17664
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 60184,
      "total": 62084
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 14813737,
       "count": 10,
       "max": 14813950,
       "median": 14813720,
       "min": 14813560
      },
      "encaps": {
       "avg": 10747732,
       "count": 10,
       "max": 10747996,
       "median": 10747772,
       "min": 10747396
      },
      "keypair": {
       "avg": 8541199,
       "count": 10,
       "max": 9072631,
       "median": 8440594,
       "min": 8311899
      }
     },
     "cycles_total": 34102668,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_YuanYang-KEM-2048_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": "YuanYang.KEM / YuanYang.DSA spec Table 1: ring degree 512/1024/2048 targets 128/256/512-bit classical security",
      "label": "512",
      "param_set": "n=2048",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/JL5OIS2NICCPYKQGQWMHLTWTGEDK2OCW/",
      "folder": "YuanYang.KEM",
      "instance": "yuanyang-2048",
      "pub_date": "2026-09-20 10:27",
      "spec": "specs/YuanYang.KEM.pdf",
      "spec_extra": [],
      "spec_file": "YuanYang.KEM算法文本.pdf",
      "title": "YuanYang.KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/YuanYang.KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "YuanYang-KEM-2048",
     "sizes": {
      "ct": 2880,
      "kat_path": "schemes/YuanYang.KEM/Test_Vectors/yuanyang-2048.txt",
      "pk": 3328,
      "results_path": "results/YuanYang.KEM/yuanyang-2048.json",
      "sk": 6528,
      "source": "ngcc_results",
      "ss": 64
     },
     "stack": {
      "decaps": 44256,
      "encaps": 37464,
      "keypair": 34080
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 48064,
      "total": 49964
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3634481,
       "count": 10,
       "max": 3635313,
       "median": 3634530,
       "min": 3633705
      },
      "encaps": {
       "avg": 2744238,
       "count": 10,
       "max": 2744708,
       "median": 2744203,
       "min": 2743554
      },
      "keypair": {
       "avg": 2014185,
       "count": 10,
       "max": 2139609,
       "median": 2001186,
       "min": 1991279
      }
     },
     "cycles_total": 8392904,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_YuanYang-KEM-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": "YuanYang.KEM / YuanYang.DSA spec Table 1: ring degree 512/1024/2048 targets 128/256/512-bit classical security",
      "label": "128",
      "param_set": "n=512",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/JL5OIS2NICCPYKQGQWMHLTWTGEDK2OCW/",
      "folder": "YuanYang.KEM",
      "instance": "yuanyang-512",
      "pub_date": "2026-09-20 10:27",
      "spec": "specs/YuanYang.KEM.pdf",
      "spec_extra": [],
      "spec_file": "YuanYang.KEM算法文本.pdf",
      "title": "YuanYang.KEM",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/YuanYang.KEM.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "YuanYang-KEM-512",
     "sizes": {
      "ct": 656,
      "kat_path": "schemes/YuanYang.KEM/Test_Vectors/yuanyang-512.txt",
      "pk": 736,
      "results_path": "results/YuanYang.KEM/yuanyang-512.json",
      "sk": 1536,
      "source": "ngcc_results",
      "ss": 16
     },
     "stack": {
      "decaps": 23108,
      "encaps": 12760,
      "keypair": 9456
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 48852,
      "total": 50752
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 419132,
       "count": 10,
       "max": 419132,
       "median": 419132,
       "min": 419132
      },
      "encaps": {
       "avg": 270099,
       "count": 10,
       "max": 270105,
       "median": 270105,
       "min": 270043
      },
      "keypair": {
       "avg": 350272,
       "count": 10,
       "max": 466441,
       "median": 327544,
       "min": 314915
      }
     },
     "cycles_total": 1039503,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_ZEN-128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/36OAZIFVEG3DLVR3ZU3TWYDA6KXOKN3T/",
      "folder": "ZEN",
      "instance": "ZEN_128",
      "pub_date": "2026-09-20 10:25",
      "spec": "specs/ZEN.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm_specifications.pdf",
      "title": "ZEN",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ZEN.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ZEN-128",
     "sizes": {
      "ct": 512,
      "kat_path": "schemes/ZEN/Test_Vectors/KAT_KEM_ZEN_128.txt",
      "pk": 615,
      "sk": 1303,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 14056,
      "encaps": 12984,
      "keypair": 9856
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39748,
      "total": 41648
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1287782,
       "count": 10,
       "max": 1287782,
       "median": 1287782,
       "min": 1287781
      },
      "encaps": {
       "avg": 387066,
       "count": 10,
       "max": 387073,
       "median": 387072,
       "min": 387010
      },
      "keypair": {
       "avg": 619612,
       "count": 10,
       "max": 741332,
       "median": 595797,
       "min": 582566
      }
     },
     "cycles_total": 2294460,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_ZEN-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/36OAZIFVEG3DLVR3ZU3TWYDA6KXOKN3T/",
      "folder": "ZEN",
      "instance": "ZEN_128",
      "pub_date": "2026-09-20 10:25",
      "spec": "specs/ZEN.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm_specifications.pdf",
      "title": "ZEN",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ZEN.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ZEN-128",
     "sizes": {
      "ct": 512,
      "kat_path": "schemes/ZEN/Test_Vectors/KAT_KEM_ZEN_128.txt",
      "pk": 615,
      "sk": 1303,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 14072,
      "encaps": 13000,
      "keypair": 9984
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 57796,
      "total": 59696
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 644067,
       "count": 10,
       "max": 644067,
       "median": 644067,
       "min": 644067
      },
      "encaps": {
       "avg": 310199,
       "count": 10,
       "max": 310199,
       "median": 310199,
       "min": 310199
      },
      "keypair": {
       "avg": 767883,
       "count": 10,
       "max": 940362,
       "median": 713424,
       "min": 668044
      }
     },
     "cycles_total": 1722149,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_ZEN-256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/36OAZIFVEG3DLVR3ZU3TWYDA6KXOKN3T/",
      "folder": "ZEN",
      "instance": "ZEN_256",
      "pub_date": "2026-09-20 10:25",
      "spec": "specs/ZEN.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm_specifications.pdf",
      "title": "ZEN",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ZEN.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ZEN-256",
     "sizes": {
      "ct": 1024,
      "kat_path": "schemes/ZEN/Test_Vectors/KAT_KEM_ZEN_256.txt",
      "pk": 1229,
      "sk": 2605,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 15540,
      "encaps": 13412,
      "keypair": 17352
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 47576,
      "total": 49476
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3935442,
       "count": 10,
       "max": 3935473,
       "median": 3935435,
       "min": 3935435
      },
      "encaps": {
       "avg": 628689,
       "count": 10,
       "max": 628689,
       "median": 628689,
       "min": 628688
      },
      "keypair": {
       "avg": 1337476,
       "count": 10,
       "max": 1514096,
       "median": 1281708,
       "min": 1235238
      }
     },
     "cycles_total": 5901607,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_ZEN-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/36OAZIFVEG3DLVR3ZU3TWYDA6KXOKN3T/",
      "folder": "ZEN",
      "instance": "ZEN_256",
      "pub_date": "2026-09-20 10:25",
      "spec": "specs/ZEN.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm_specifications.pdf",
      "title": "ZEN",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ZEN.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ZEN-256",
     "sizes": {
      "ct": 1024,
      "kat_path": "schemes/ZEN/Test_Vectors/KAT_KEM_ZEN_256.txt",
      "pk": 1229,
      "sk": 2605,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 15556,
      "encaps": 13428,
      "keypair": 17608
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 73984,
      "total": 75884
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1681143,
       "count": 10,
       "max": 1681178,
       "median": 1681139,
       "min": 1681139
      },
      "encaps": {
       "avg": 901855,
       "count": 10,
       "max": 901855,
       "median": 901855,
       "min": 901855
      },
      "keypair": {
       "avg": 2050944,
       "count": 10,
       "max": 2444008,
       "median": 1882543,
       "min": 1882466
      }
     },
     "cycles_total": 4633942,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_ZEN-512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/36OAZIFVEG3DLVR3ZU3TWYDA6KXOKN3T/",
      "folder": "ZEN",
      "instance": "ZEN_512",
      "pub_date": "2026-09-20 10:25",
      "spec": "specs/ZEN.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm_specifications.pdf",
      "title": "ZEN",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ZEN.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ZEN-512",
     "sizes": {
      "ct": 2048,
      "kat_path": "schemes/ZEN/Test_Vectors/KAT_KEM_ZEN_512.txt",
      "pk": 2458,
      "sk": 5210,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 38176,
      "encaps": 33888,
      "keypair": 38856
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 67520,
      "total": 69420
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 13929905,
       "count": 10,
       "max": 13929915,
       "median": 13929913,
       "min": 13929873
      },
      "encaps": {
       "avg": 1666856,
       "count": 10,
       "max": 1666887,
       "median": 1666848,
       "min": 1666848
      },
      "keypair": {
       "avg": 3967857,
       "count": 10,
       "max": 4366701,
       "median": 3796960,
       "min": 3796903
      }
     },
     "cycles_total": 19564618,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": true,
     "id": "crypto_kem_ZEN-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/36OAZIFVEG3DLVR3ZU3TWYDA6KXOKN3T/",
      "folder": "ZEN",
      "instance": "ZEN_512",
      "pub_date": "2026-09-20 10:25",
      "spec": "specs/ZEN.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm_specifications.pdf",
      "title": "ZEN",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ZEN.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ZEN-512",
     "sizes": {
      "ct": 2048,
      "kat_path": "schemes/ZEN/Test_Vectors/KAT_KEM_ZEN_512.txt",
      "pk": 2458,
      "sk": 5210,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 38192,
      "encaps": 33904,
      "keypair": 39376
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 1172,
      "data": 1352,
      "source": "report",
      "text": 35492,
      "total": 38016
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 90184675,
       "count": 3,
       "max": 90250124,
       "median": 90221168,
       "min": 90082732
      },
      "encaps": {
       "avg": 33763874,
       "count": 3,
       "max": 33917119,
       "median": 33723597,
       "min": 33650906
      },
      "keypair": {
       "avg": 10049251,
       "count": 3,
       "max": 10142305,
       "median": 10038487,
       "min": 9966960
      }
     },
     "cycles_total": 133997800,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_bag_piglet_128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QUDRCTIJQVCLQNOYCZKNQYUMZO7PPPF6/",
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_128",
      "pub_date": "2026-09-20 11:29",
      "spec": "specs/BAG-Piglet.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Piglet",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Piglet.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "bag_piglet_128",
     "sizes": {
      "ct": 1027,
      "kat_path": "schemes/BAG-Piglet/Test_Vectors/KAT_KEM_bag_piglet_128.txt",
      "pk": 522,
      "sk": 16,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 4608,
      "encaps": 1720,
      "keypair": 1432
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 1300,
      "data": 1352,
      "source": "report",
      "text": 35776,
      "total": 38428
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 883160032,
       "count": 3,
       "max": 888592014,
       "median": 880742211,
       "min": 880145872
      },
      "encaps": {
       "avg": 332148837,
       "count": 3,
       "max": 332960028,
       "median": 332341006,
       "min": 331145477
      },
      "keypair": {
       "avg": 85845481,
       "count": 3,
       "max": 86563496,
       "median": 85685842,
       "min": 85287105
      }
     },
     "cycles_total": 1301154350,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_bag_piglet_256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QUDRCTIJQVCLQNOYCZKNQYUMZO7PPPF6/",
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_256",
      "pub_date": "2026-09-20 11:29",
      "spec": "specs/BAG-Piglet.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Piglet",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Piglet.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "bag_piglet_256",
     "sizes": {
      "ct": 3097,
      "kat_path": "schemes/BAG-Piglet/Test_Vectors/KAT_KEM_bag_piglet_256.txt",
      "pk": 1573,
      "sk": 32,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 14604,
      "encaps": 5924,
      "keypair": 1992
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 1396,
      "data": 1352,
      "source": "report",
      "text": 36240,
      "total": 38988
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2114299065,
       "count": 3,
       "max": 2129807339,
       "median": 2107888915,
       "min": 2105200942
      },
      "encaps": {
       "avg": 776425483,
       "count": 3,
       "max": 779289649,
       "median": 778864739,
       "min": 771122060
      },
      "keypair": {
       "avg": 204570511,
       "count": 3,
       "max": 207501125,
       "median": 203607954,
       "min": 202602455
      }
     },
     "cycles_total": 3095295059,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_bag_piglet_384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QUDRCTIJQVCLQNOYCZKNQYUMZO7PPPF6/",
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_384",
      "pub_date": "2026-09-20 11:29",
      "spec": "specs/BAG-Piglet.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Piglet",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Piglet.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "bag_piglet_384",
     "sizes": {
      "ct": 5475,
      "kat_path": "schemes/BAG-Piglet/Test_Vectors/KAT_KEM_bag_piglet_384.txt",
      "pk": 2778,
      "sk": 48,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": {
      "decaps": 23000,
      "encaps": 7672,
      "keypair": 2616
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 1508,
      "data": 1352,
      "source": "report",
      "text": 37672,
      "total": 40532
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 5643385813,
       "count": 3,
       "max": 5646847263,
       "median": 5644217986,
       "min": 5639092191
      },
      "encaps": {
       "avg": 1891006754,
       "count": 3,
       "max": 1893176590,
       "median": 1891945236,
       "min": 1887898435
      },
      "keypair": {
       "avg": 554037089,
       "count": 3,
       "max": 556795228,
       "median": 553035259,
       "min": 552280780
      }
     },
     "cycles_total": 8088429656,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_bag_piglet_512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QUDRCTIJQVCLQNOYCZKNQYUMZO7PPPF6/",
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_512",
      "pub_date": "2026-09-20 11:29",
      "spec": "specs/BAG-Piglet.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BAG-Piglet",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BAG-Piglet.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "bag_piglet_512",
     "sizes": {
      "ct": 8204,
      "kat_path": "schemes/BAG-Piglet/Test_Vectors/KAT_KEM_bag_piglet_512.txt",
      "pk": 4158,
      "sk": 64,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24476,
      "total": 26376
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 6804860,
       "count": 10,
       "max": 6805431,
       "median": 6804848,
       "min": 6804322
      },
      "encaps": {
       "avg": 6617542,
       "count": 10,
       "max": 6618074,
       "median": 6617530,
       "min": 6617004
      },
      "keypair": {
       "avg": 6593881,
       "count": 10,
       "max": 6594478,
       "median": 6593858,
       "min": 6593283
      }
     },
     "cycles_total": 20016283,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_lwekem128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A35C2JZDLERYJNKGAUECZ73T5Y64LCPT/",
      "folder": "Rudraksh2",
      "instance": "lwekem128",
      "pub_date": "2026-09-20 10:32",
      "spec": "specs/Rudraksh2.pdf",
      "spec_extra": [],
      "spec_file": "rudraksh2.pdf",
      "title": "Rudraksh2",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rudraksh2.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwekem128",
     "sizes": {
      "ct": 912,
      "kat_path": "schemes/Rudraksh2/Test_Vectors/KAT_KEM_lwekem128.txt",
      "pk": 880,
      "sk": 1776,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 3788,
      "encaps": 3772,
      "keypair": 3592
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24084,
      "total": 25984
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 6792809,
       "count": 3,
       "max": 6792978,
       "median": 6792806,
       "min": 6792642
      },
      "encaps": {
       "avg": 6601268,
       "count": 3,
       "max": 6601462,
       "median": 6601291,
       "min": 6601050
      },
      "keypair": {
       "avg": 6570611,
       "count": 3,
       "max": 6570842,
       "median": 6570673,
       "min": 6570318
      }
     },
     "cycles_total": 19964688,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_lwekem128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A35C2JZDLERYJNKGAUECZ73T5Y64LCPT/",
      "folder": "Rudraksh2",
      "instance": "lwekem128",
      "pub_date": "2026-09-20 10:32",
      "spec": "specs/Rudraksh2.pdf",
      "spec_extra": [],
      "spec_file": "rudraksh2.pdf",
      "title": "Rudraksh2",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rudraksh2.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwekem128",
     "sizes": {
      "ct": 912,
      "kat_path": "schemes/Rudraksh2/Test_Vectors/KAT_KEM_lwekem128.txt",
      "pk": 880,
      "sk": 1776,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 19412,
      "encaps": 17448,
      "keypair": 15956
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 26776,
      "total": 28676
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 13693861,
       "count": 10,
       "max": 13694739,
       "median": 13693611,
       "min": 13693307
      },
      "encaps": {
       "avg": 13282096,
       "count": 10,
       "max": 13282939,
       "median": 13281859,
       "min": 13281517
      },
      "keypair": {
       "avg": 13180480,
       "count": 10,
       "max": 13181387,
       "median": 13180225,
       "min": 13179937
      }
     },
     "cycles_total": 40156437,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_lwekem256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A35C2JZDLERYJNKGAUECZ73T5Y64LCPT/",
      "folder": "Rudraksh2",
      "instance": "lwekem256",
      "pub_date": "2026-09-20 10:32",
      "spec": "specs/Rudraksh2.pdf",
      "spec_extra": [],
      "spec_file": "rudraksh2.pdf",
      "title": "Rudraksh2",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rudraksh2.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwekem256",
     "sizes": {
      "ct": 1728,
      "kat_path": "schemes/Rudraksh2/Test_Vectors/KAT_KEM_lwekem256.txt",
      "pk": 1760,
      "sk": 3552,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 6940,
      "encaps": 6940,
      "keypair": 6828
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25580,
      "total": 27480
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 13701545,
       "count": 3,
       "max": 13702115,
       "median": 13701279,
       "min": 13701240
      },
      "encaps": {
       "avg": 13280046,
       "count": 3,
       "max": 13280603,
       "median": 13279805,
       "min": 13279729
      },
      "keypair": {
       "avg": 13165879,
       "count": 3,
       "max": 13166253,
       "median": 13165735,
       "min": 13165649
      }
     },
     "cycles_total": 40147470,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_lwekem256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A35C2JZDLERYJNKGAUECZ73T5Y64LCPT/",
      "folder": "Rudraksh2",
      "instance": "lwekem256",
      "pub_date": "2026-09-20 10:32",
      "spec": "specs/Rudraksh2.pdf",
      "spec_extra": [],
      "spec_file": "rudraksh2.pdf",
      "title": "Rudraksh2",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rudraksh2.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwekem256",
     "sizes": {
      "ct": 1728,
      "kat_path": "schemes/Rudraksh2/Test_Vectors/KAT_KEM_lwekem256.txt",
      "pk": 1760,
      "sk": 3552,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 38052,
      "encaps": 34548,
      "keypair": 31348
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 26924,
      "total": 28824
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 39351879,
       "count": 10,
       "max": 39352273,
       "median": 39351964,
       "min": 39351439
      },
      "encaps": {
       "avg": 38560023,
       "count": 10,
       "max": 38560420,
       "median": 38560125,
       "min": 38559578
      },
      "keypair": {
       "avg": 38617721,
       "count": 10,
       "max": 38618115,
       "median": 38617796,
       "min": 38617292
      }
     },
     "cycles_total": 116529623,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_lwekem512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A35C2JZDLERYJNKGAUECZ73T5Y64LCPT/",
      "folder": "Rudraksh2",
      "instance": "lwekem512",
      "pub_date": "2026-09-20 10:32",
      "spec": "specs/Rudraksh2.pdf",
      "spec_extra": [],
      "spec_file": "rudraksh2.pdf",
      "title": "Rudraksh2",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rudraksh2.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwekem512",
     "sizes": {
      "ct": 3552,
      "kat_path": "schemes/Rudraksh2/Test_Vectors/KAT_KEM_lwekem512.txt",
      "pk": 3392,
      "sk": 6848,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 13340,
      "encaps": 13380,
      "keypair": 13204
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 26732,
      "total": 28632
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 39483346,
       "count": 3,
       "max": 39483393,
       "median": 39483387,
       "min": 39483257
      },
      "encaps": {
       "avg": 38657355,
       "count": 3,
       "max": 38657402,
       "median": 38657397,
       "min": 38657266
      },
      "keypair": {
       "avg": 38584382,
       "count": 3,
       "max": 38584463,
       "median": 38584459,
       "min": 38584223
      }
     },
     "cycles_total": 116725083,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_lwekem512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A35C2JZDLERYJNKGAUECZ73T5Y64LCPT/",
      "folder": "Rudraksh2",
      "instance": "lwekem512",
      "pub_date": "2026-09-20 10:32",
      "spec": "specs/Rudraksh2.pdf",
      "spec_extra": [],
      "spec_file": "rudraksh2.pdf",
      "title": "Rudraksh2",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rudraksh2.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwekem512",
     "sizes": {
      "ct": 3552,
      "kat_path": "schemes/Rudraksh2/Test_Vectors/KAT_KEM_lwekem512.txt",
      "pk": 3392,
      "sk": 6848,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "decaps": 65472,
      "encaps": 58396,
      "keypair": 52508
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_qube-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: PK differs; count 0: SK differs; count 0: CT differs; count 0: SS differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LVEV7LW46WHONQL6REREK4ZA7TWZT3RK/",
      "folder": "QUBE",
      "instance": "qube-128",
      "pub_date": "2026-09-20 10:33",
      "spec": "specs/QUBE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "QUBE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QUBE.zip"
     },
     "notes": [
      "official KAT file reports different sizes: pk 3310, sk 3390 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "not-run",
     "scheme": "qube-128",
     "sizes": {
      "ct": 3287,
      "kat_path": "schemes/QUBE/Test_Vectors/KAT_KEM_qube_128.txt",
      "pk": 3294,
      "sk": 3326,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_qube-192_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LVEV7LW46WHONQL6REREK4ZA7TWZT3RK/",
      "folder": "QUBE",
      "instance": "qube-192",
      "pub_date": "2026-09-20 10:33",
      "spec": "specs/QUBE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "QUBE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QUBE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "qube-192",
     "sizes": {
      "ct": 6362,
      "kat_path": "schemes/QUBE/Reference_Implementation/qube-192/KAT/KAT_KEM_qube_192.txt",
      "pk": 6364,
      "results_path": "results/QUBE/qube-192.json",
      "sk": 6412,
      "source": "ngcc_results",
      "ss": 24
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_qube-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: PK differs; count 0: SK differs; count 0: CT differs; count 0: SS differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LVEV7LW46WHONQL6REREK4ZA7TWZT3RK/",
      "folder": "QUBE",
      "instance": "qube-256",
      "pub_date": "2026-09-20 10:33",
      "spec": "specs/QUBE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "QUBE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QUBE.zip"
     },
     "notes": [
      "official KAT file reports different sizes: sk 10542, ct 10503 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "not-run",
     "scheme": "qube-256",
     "sizes": {
      "ct": 10423,
      "kat_path": "schemes/QUBE/Test_Vectors/KAT_KEM_qube_256.txt",
      "pk": 10446,
      "sk": 10510,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_qube-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: PK differs; count 0: SK differs; count 0: CT differs; count 0: SS differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LVEV7LW46WHONQL6REREK4ZA7TWZT3RK/",
      "folder": "QUBE",
      "instance": "qube-384",
      "pub_date": "2026-09-20 10:33",
      "spec": "specs/QUBE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "QUBE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QUBE.zip"
     },
     "notes": [
      "official KAT file reports different sizes: pk 20722, ct 21113 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "not-run",
     "scheme": "qube-384",
     "sizes": {
      "ct": 20633,
      "kat_path": "schemes/QUBE/Test_Vectors/KAT_KEM_qube_384.txt",
      "pk": 20738,
      "sk": 20834,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_qube-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: PK differs; count 0: SK differs; count 0: CT differs; count 0: SS differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LVEV7LW46WHONQL6REREK4ZA7TWZT3RK/",
      "folder": "QUBE",
      "instance": "qube-512",
      "pub_date": "2026-09-20 10:33",
      "spec": "specs/QUBE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "QUBE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QUBE.zip"
     },
     "notes": [
      "official KAT file reports different sizes: pk 33996, sk 34124, ct 35174 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "not-run",
     "scheme": "qube-512",
     "sizes": {
      "ct": 33846,
      "kat_path": "schemes/QUBE/Test_Vectors/KAT_KEM_qube_512.txt",
      "pk": 34028,
      "sk": 34156,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 26764,
      "total": 28664
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 1673250,
       "count": 10,
       "max": 1673282,
       "median": 1673246,
       "min": 1673246
      },
      "encaps": {
       "avg": 1647748,
       "count": 10,
       "max": 1647782,
       "median": 1647744,
       "min": 1647743
      },
      "keypair": {
       "avg": 1569653,
       "count": 10,
       "max": 1569697,
       "median": 1569655,
       "min": 1569590
      }
     },
     "cycles_total": 4890651,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_scabbard128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/4KFYAFY5ZWKVT2D47LSNZP2LKIHBGPV7/",
      "folder": "MORNING-Scabbard",
      "instance": "scabbard128",
      "pub_date": "2026-09-20 10:46",
      "spec": "specs/MORNING-Scabbard.pdf",
      "spec_extra": [],
      "spec_file": "scabbard.pdf",
      "title": "MORNING-Scabbard",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-Scabbard.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "scabbard128",
     "sizes": {
      "ct": 760,
      "kat_path": "schemes/MORNING-Scabbard/Test_Vectors/KAT_KEM_scabbard128.txt",
      "pk": 736,
      "sk": 1056,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 2020,
      "encaps": 2012,
      "keypair": 1388
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 23668,
      "total": 25568
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 2984789,
       "count": 10,
       "max": 2984812,
       "median": 2984774,
       "min": 2984774
      },
      "encaps": {
       "avg": 2828500,
       "count": 10,
       "max": 2828534,
       "median": 2828496,
       "min": 2828496
      },
      "keypair": {
       "avg": 2631373,
       "count": 10,
       "max": 2631380,
       "median": 2631380,
       "min": 2631313
      }
     },
     "cycles_total": 8444662,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_scabbard128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/4KFYAFY5ZWKVT2D47LSNZP2LKIHBGPV7/",
      "folder": "MORNING-Scabbard",
      "instance": "scabbard128",
      "pub_date": "2026-09-20 10:46",
      "spec": "specs/MORNING-Scabbard.pdf",
      "spec_extra": [],
      "spec_file": "scabbard.pdf",
      "title": "MORNING-Scabbard",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-Scabbard.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "scabbard128",
     "sizes": {
      "ct": 760,
      "kat_path": "schemes/MORNING-Scabbard/Test_Vectors/KAT_KEM_scabbard128.txt",
      "pk": 736,
      "sk": 1056,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "decaps": 19172,
      "encaps": 18412,
      "keypair": 16956
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 35784,
      "total": 37684
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 3515319,
       "count": 10,
       "max": 3515354,
       "median": 3515315,
       "min": 3515315
      },
      "encaps": {
       "avg": 3414872,
       "count": 10,
       "max": 3414900,
       "median": 3414861,
       "min": 3414861
      },
      "keypair": {
       "avg": 3198835,
       "count": 10,
       "max": 3198863,
       "median": 3198824,
       "min": 3198824
      }
     },
     "cycles_total": 10129026,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_scabbard256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/4KFYAFY5ZWKVT2D47LSNZP2LKIHBGPV7/",
      "folder": "MORNING-Scabbard",
      "instance": "scabbard256",
      "pub_date": "2026-09-20 10:46",
      "spec": "specs/MORNING-Scabbard.pdf",
      "spec_extra": [],
      "spec_file": "scabbard.pdf",
      "title": "MORNING-Scabbard",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-Scabbard.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "scabbard256",
     "sizes": {
      "ct": 1648,
      "kat_path": "schemes/MORNING-Scabbard/Test_Vectors/KAT_KEM_scabbard256.txt",
      "pk": 1616,
      "sk": 2256,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 3904,
      "encaps": 3896,
      "keypair": 2664
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kem",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 22812,
      "total": 24712
     },
     "completed_ops": [],
     "cycles": {
      "decaps": {
       "avg": 9089485,
       "count": 10,
       "max": 9089502,
       "median": 9089498,
       "min": 9089462
      },
      "encaps": {
       "avg": 8462272,
       "count": 10,
       "max": 8462296,
       "median": 8462256,
       "min": 8462255
      },
      "keypair": {
       "avg": 7739242,
       "count": 10,
       "max": 7739263,
       "median": 7739242,
       "min": 7739223
      }
     },
     "cycles_total": 25290999,
     "expected_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "failure_kind": null,
     "family": "crypto_kem",
     "hand_ported": false,
     "id": "crypto_kem_scabbard256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/4KFYAFY5ZWKVT2D47LSNZP2LKIHBGPV7/",
      "folder": "MORNING-Scabbard",
      "instance": "scabbard256",
      "pub_date": "2026-09-20 10:46",
      "spec": "specs/MORNING-Scabbard.pdf",
      "spec_extra": [],
      "spec_file": "scabbard.pdf",
      "title": "MORNING-Scabbard",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-Scabbard.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "scabbard256",
     "sizes": {
      "ct": 1648,
      "kat_path": "schemes/MORNING-Scabbard/Test_Vectors/KAT_KEM_scabbard256.txt",
      "pk": 1616,
      "sk": 2256,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "decaps": 38316,
      "encaps": 36668,
      "keypair": 33756
     },
     "status_text": null,
     "tier": "board"
    }
   ],
   "size_fields": [
    "pk",
    "sk",
    "ct",
    "ss"
   ]
  },
  "kex": {
   "ops": [
    "init_a",
    "init_b",
    "pass1",
    "pass2",
    "pass3",
    "pass4",
    "derive_a",
    "derive_b"
   ],
   "rows": [
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 36800,
      "total": 38700
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 567676,
       "count": 10,
       "max": 568016,
       "median": 567626,
       "min": 567317
      },
      "derive_b": {
       "avg": 5224,
       "count": 10,
       "max": 5225,
       "median": 5224,
       "min": 5223
      },
      "init_a": {
       "avg": 86,
       "count": 10,
       "max": 86,
       "median": 86,
       "min": 86
      },
      "init_b": {
       "avg": 365814,
       "count": 10,
       "max": 366263,
       "median": 365752,
       "min": 365585
      },
      "pass1": {
       "avg": 773848,
       "count": 10,
       "max": 774559,
       "median": 773752,
       "min": 773403
      },
      "pass2": {
       "avg": 976385,
       "count": 10,
       "max": 977095,
       "median": 976289,
       "min": 975940
      }
     },
     "cycles_total": 2689033,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_ADKEX-128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P4IG2W7BMLGEJGJGAYY73XAEE32GLCAJ/",
      "folder": "ADKEX",
      "instance": "ADKEX-128",
      "pub_date": "2026-09-20 10:18",
      "spec": "specs/ADKEX.pdf",
      "spec_extra": [],
      "spec_file": "ADKEX-Algorithm Specification.pdf",
      "title": "ADKEX (Authenticated Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ADKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ADKEX-128",
     "sizes": {
      "kat_path": "schemes/ADKEX/Test_Vectors/KAT_KEX_ADKEX-128.txt",
      "msg_total": 2400,
      "msgs": [
       1600,
       800
      ],
      "passes": 2,
      "pk_a": 0,
      "pk_b": 800,
      "sk_a": 0,
      "sk_b": 1600,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 9996,
      "derive_b": 232,
      "init_a": 0,
      "init_b": 5580,
      "pass1": 8972,
      "pass2": 9940
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25344,
      "total": 27244
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1068123,
       "count": 10,
       "max": 1068374,
       "median": 1068080,
       "min": 1067865
      },
      "derive_b": {
       "avg": 5225,
       "count": 10,
       "max": 5225,
       "median": 5225,
       "min": 5225
      },
      "init_a": {
       "avg": 86,
       "count": 10,
       "max": 86,
       "median": 86,
       "min": 86
      },
      "init_b": {
       "avg": 593560,
       "count": 10,
       "max": 593906,
       "median": 593527,
       "min": 593380
      },
      "pass1": {
       "avg": 1339772,
       "count": 10,
       "max": 1340304,
       "median": 1339689,
       "min": 1339414
      },
      "pass2": {
       "avg": 1814979,
       "count": 10,
       "max": 1815519,
       "median": 1814904,
       "min": 1814629
      }
     },
     "cycles_total": 4821745,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_ADKEX-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P4IG2W7BMLGEJGJGAYY73XAEE32GLCAJ/",
      "folder": "ADKEX",
      "instance": "ADKEX-128",
      "pub_date": "2026-09-20 10:18",
      "spec": "specs/ADKEX.pdf",
      "spec_extra": [],
      "spec_file": "ADKEX-Algorithm Specification.pdf",
      "title": "ADKEX (Authenticated Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ADKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ADKEX-128",
     "sizes": {
      "kat_path": "schemes/ADKEX/Test_Vectors/KAT_KEX_ADKEX-128.txt",
      "msg_total": 2400,
      "msgs": [
       1600,
       800
      ],
      "passes": 2,
      "pk_a": 0,
      "pk_b": 800,
      "sk_a": 0,
      "sk_b": 1600,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 9680,
      "derive_b": 232,
      "init_a": 0,
      "init_b": 6304,
      "pass1": 8656,
      "pass2": 9624
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 37632,
      "total": 39532
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1467786,
       "count": 10,
       "max": 1468201,
       "median": 1467748,
       "min": 1467359
      },
      "derive_b": {
       "avg": 5225,
       "count": 10,
       "max": 5225,
       "median": 5225,
       "min": 5225
      },
      "init_a": {
       "avg": 86,
       "count": 10,
       "max": 86,
       "median": 86,
       "min": 86
      },
      "init_b": {
       "avg": 1124898,
       "count": 10,
       "max": 1125651,
       "median": 1124938,
       "min": 1124252
      },
      "pass1": {
       "avg": 2296934,
       "count": 10,
       "max": 2297598,
       "median": 2296960,
       "min": 2296187
      },
      "pass2": {
       "avg": 2639441,
       "count": 10,
       "max": 2640144,
       "median": 2639460,
       "min": 2638704
      }
     },
     "cycles_total": 7534370,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_ADKEX-256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P4IG2W7BMLGEJGJGAYY73XAEE32GLCAJ/",
      "folder": "ADKEX",
      "instance": "ADKEX-256",
      "pub_date": "2026-09-20 10:18",
      "spec": "specs/ADKEX.pdf",
      "spec_extra": [],
      "spec_file": "ADKEX-Algorithm Specification.pdf",
      "title": "ADKEX (Authenticated Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ADKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ADKEX-256",
     "sizes": {
      "kat_path": "schemes/ADKEX/Test_Vectors/KAT_KEX_ADKEX-256.txt",
      "msg_total": 4768,
      "msgs": [
       3168,
       1600
      ],
      "passes": 2,
      "pk_a": 0,
      "pk_b": 1568,
      "sk_a": 0,
      "sk_b": 3136,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 14948,
      "derive_b": 232,
      "init_a": 0,
      "init_b": 8724,
      "pass1": 13124,
      "pass2": 14892
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 26300,
      "total": 28604
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 2430717,
       "count": 10,
       "max": 2431048,
       "median": 2430718,
       "min": 2430403
      },
      "derive_b": {
       "avg": 5224,
       "count": 10,
       "max": 5224,
       "median": 5224,
       "min": 5224
      },
      "init_a": {
       "avg": 86,
       "count": 10,
       "max": 86,
       "median": 86,
       "min": 86
      },
      "init_b": {
       "avg": 1679176,
       "count": 10,
       "max": 1679699,
       "median": 1679208,
       "min": 1678639
      },
      "pass1": {
       "avg": 3549854,
       "count": 10,
       "max": 3550443,
       "median": 3549882,
       "min": 3549272
      },
      "pass2": {
       "avg": 4301071,
       "count": 10,
       "max": 4301625,
       "median": 4301103,
       "min": 4300467
      }
     },
     "cycles_total": 11966128,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_ADKEX-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P4IG2W7BMLGEJGJGAYY73XAEE32GLCAJ/",
      "folder": "ADKEX",
      "instance": "ADKEX-256",
      "pub_date": "2026-09-20 10:18",
      "spec": "specs/ADKEX.pdf",
      "spec_extra": [],
      "spec_file": "ADKEX-Algorithm Specification.pdf",
      "title": "ADKEX (Authenticated Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ADKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ADKEX-256",
     "sizes": {
      "kat_path": "schemes/ADKEX/Test_Vectors/KAT_KEX_ADKEX-256.txt",
      "msg_total": 4768,
      "msgs": [
       3168,
       1600
      ],
      "passes": 2,
      "pk_a": 0,
      "pk_b": 1568,
      "sk_a": 0,
      "sk_b": 3136,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 20840,
      "derive_b": 232,
      "init_a": 0,
      "init_b": 15600,
      "pass1": 19016,
      "pass2": 20784
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39332,
      "total": 41232
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 4776634,
       "count": 10,
       "max": 4776888,
       "median": 4776684,
       "min": 4776335
      },
      "derive_b": {
       "avg": 20285,
       "count": 10,
       "max": 20285,
       "median": 20285,
       "min": 20284
      },
      "init_a": {
       "avg": 86,
       "count": 10,
       "max": 86,
       "median": 86,
       "min": 86
      },
      "init_b": {
       "avg": 3422793,
       "count": 10,
       "max": 3423229,
       "median": 3422806,
       "min": 3422233
      },
      "pass1": {
       "avg": 7037494,
       "count": 10,
       "max": 7037968,
       "median": 7037518,
       "min": 7036961
      },
      "pass2": {
       "avg": 8373745,
       "count": 10,
       "max": 8374240,
       "median": 8373750,
       "min": 8373204
      }
     },
     "cycles_total": 23631037,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_ADKEX-512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P4IG2W7BMLGEJGJGAYY73XAEE32GLCAJ/",
      "folder": "ADKEX",
      "instance": "ADKEX-512",
      "pub_date": "2026-09-20 10:18",
      "spec": "specs/ADKEX.pdf",
      "spec_extra": [],
      "spec_file": "ADKEX-Algorithm Specification.pdf",
      "title": "ADKEX (Authenticated Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ADKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ADKEX-512",
     "sizes": {
      "kat_path": "schemes/ADKEX/Test_Vectors/KAT_KEX_ADKEX-512.txt",
      "msg_total": 9664,
      "msgs": [
       6528,
       3136
      ],
      "passes": 2,
      "pk_a": 0,
      "pk_b": 3392,
      "sk_a": 0,
      "sk_b": 6784,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 40848,
      "derive_b": 320,
      "init_a": 0,
      "init_b": 30620,
      "pass1": 37340,
      "pass2": 40828
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 30368,
      "total": 32672
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 6870518,
       "count": 10,
       "max": 6870775,
       "median": 6870560,
       "min": 6870195
      },
      "derive_b": {
       "avg": 20286,
       "count": 10,
       "max": 20286,
       "median": 20286,
       "min": 20286
      },
      "init_a": {
       "avg": 86,
       "count": 10,
       "max": 86,
       "median": 86,
       "min": 86
      },
      "init_b": {
       "avg": 4714749,
       "count": 10,
       "max": 4715193,
       "median": 4714770,
       "min": 4714159
      },
      "pass1": {
       "avg": 9829598,
       "count": 10,
       "max": 9830113,
       "median": 9829620,
       "min": 9829078
      },
      "pass2": {
       "avg": 11967734,
       "count": 10,
       "max": 11968203,
       "median": 11967746,
       "min": 11967182
      }
     },
     "cycles_total": 33402971,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_ADKEX-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/P4IG2W7BMLGEJGJGAYY73XAEE32GLCAJ/",
      "folder": "ADKEX",
      "instance": "ADKEX-512",
      "pub_date": "2026-09-20 10:18",
      "spec": "specs/ADKEX.pdf",
      "spec_extra": [],
      "spec_file": "ADKEX-Algorithm Specification.pdf",
      "title": "ADKEX (Authenticated Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ADKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "ADKEX-512",
     "sizes": {
      "kat_path": "schemes/ADKEX/Test_Vectors/KAT_KEX_ADKEX-512.txt",
      "msg_total": 9664,
      "msgs": [
       6528,
       3136
      ],
      "passes": 2,
      "pk_a": 0,
      "pk_b": 3392,
      "sk_a": 0,
      "sk_b": 6784,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 40916,
      "derive_b": 320,
      "init_a": 0,
      "init_b": 30580,
      "pass1": 37428,
      "pass2": 40744
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 27948,
      "total": 29848
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 136,
       "count": 10,
       "max": 136,
       "median": 136,
       "min": 136
      },
      "derive_b": {
       "avg": 132,
       "count": 10,
       "max": 132,
       "median": 132,
       "min": 132
      },
      "init_a": {
       "avg": 1512305,
       "count": 10,
       "max": 1620753,
       "median": 1500412,
       "min": 1499635
      },
      "init_b": {
       "avg": 1512286,
       "count": 10,
       "max": 1620295,
       "median": 1500271,
       "min": 1499933
      },
      "pass1": {
       "avg": 881080,
       "count": 10,
       "max": 935121,
       "median": 875070,
       "min": 874901
      },
      "pass2": {
       "avg": 1999311,
       "count": 10,
       "max": 2047483,
       "median": 1987420,
       "min": 1986779
      },
      "pass3": {
       "avg": 1863205,
       "count": 10,
       "max": 1911380,
       "median": 1851273,
       "min": 1850684
      },
      "pass4": {
       "avg": 744996,
       "count": 10,
       "max": 799219,
       "median": 739048,
       "min": 738660
      }
     },
     "cycles_total": 8513451,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "pass4",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_AFS_KEX_C128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "pass4",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/ASJ42PGKD4VB5HP3LPBE22CN2FKALES7/",
      "folder": "AFS-KEX",
      "instance": "AFS_KEX_C128",
      "pub_date": "2026-09-20 10:17",
      "spec": "specs/AFS-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications-AFS-KEX.pdf",
      "title": "AFS-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/AFS-KEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "AFS_KEX_C128",
     "sizes": {
      "kat_path": "schemes/AFS-KEX/Test_Vectors/KAT_KEX_AFS_KEX_C128.txt",
      "msg_total": 1568,
      "msgs": [
       768,
       784,
       16,
       0
      ],
      "passes": 4,
      "pk_a": 1568,
      "pk_b": 1568,
      "sk_a": 3170,
      "sk_b": 3170,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "derive_a": 4,
      "derive_b": 4,
      "init_a": 19160,
      "init_b": 19160,
      "pass1": 9264,
      "pass2": 10136,
      "pass3": 15528,
      "pass4": 12032
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39568,
      "total": 41468
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 145,
       "count": 10,
       "max": 145,
       "median": 145,
       "min": 145
      },
      "derive_b": {
       "avg": 141,
       "count": 10,
       "max": 141,
       "median": 141,
       "min": 141
      },
      "init_a": {
       "avg": 3478152,
       "count": 10,
       "max": 3574443,
       "median": 3454305,
       "min": 3453449
      },
      "init_b": {
       "avg": 3465309,
       "count": 10,
       "max": 3574670,
       "median": 3453175,
       "min": 3452544
      },
      "pass1": {
       "avg": 1864659,
       "count": 10,
       "max": 1919344,
       "median": 1858584,
       "min": 1858268
      },
      "pass2": {
       "avg": 4292397,
       "count": 10,
       "max": 4335067,
       "median": 4274491,
       "min": 4274064
      },
      "pass3": {
       "avg": 4139369,
       "count": 10,
       "max": 4181989,
       "median": 4121465,
       "min": 4121074
      },
      "pass4": {
       "avg": 1717920,
       "count": 10,
       "max": 1766079,
       "median": 1705991,
       "min": 1705563
      }
     },
     "cycles_total": 18958092,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "pass4",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_AFS_KEX_C256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "pass4",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/ASJ42PGKD4VB5HP3LPBE22CN2FKALES7/",
      "folder": "AFS-KEX",
      "instance": "AFS_KEX_C256",
      "pub_date": "2026-09-20 10:17",
      "spec": "specs/AFS-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications-AFS-KEX.pdf",
      "title": "AFS-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/AFS-KEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "AFS_KEX_C256",
     "sizes": {
      "kat_path": "schemes/AFS-KEX/Test_Vectors/KAT_KEX_AFS_KEX_C256.txt",
      "msg_total": 2944,
      "msgs": [
       1440,
       1472,
       32,
       0
      ],
      "passes": 4,
      "pk_a": 3136,
      "pk_b": 3136,
      "sk_a": 6338,
      "sk_b": 6338,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 4,
      "derive_b": 4,
      "init_a": 41072,
      "init_b": 40904,
      "pass1": 19164,
      "pass2": 20664,
      "pass3": 31608,
      "pass4": 26872
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 40592,
      "total": 42492
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 190,
       "count": 10,
       "max": 190,
       "median": 190,
       "min": 190
      },
      "derive_b": {
       "avg": 186,
       "count": 10,
       "max": 186,
       "median": 186,
       "min": 186
      },
      "init_a": {
       "avg": 10196149,
       "count": 10,
       "max": 10198941,
       "median": 10196209,
       "min": 10194298
      },
      "init_b": {
       "avg": 10196244,
       "count": 10,
       "max": 10197273,
       "median": 10196460,
       "min": 10194552
      },
      "pass1": {
       "avg": 5435384,
       "count": 10,
       "max": 5435887,
       "median": 5435494,
       "min": 5434557
      },
      "pass2": {
       "avg": 12226319,
       "count": 10,
       "max": 12227896,
       "median": 12226230,
       "min": 12225230
      },
      "pass3": {
       "avg": 11840015,
       "count": 10,
       "max": 11841584,
       "median": 11839914,
       "min": 11838988
      },
      "pass4": {
       "avg": 5048861,
       "count": 10,
       "max": 5050260,
       "median": 5048880,
       "min": 5047958
      }
     },
     "cycles_total": 54943348,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "pass4",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_AFS_KEX_C512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "pass4",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/ASJ42PGKD4VB5HP3LPBE22CN2FKALES7/",
      "folder": "AFS-KEX",
      "instance": "AFS_KEX_C512",
      "pub_date": "2026-09-20 10:17",
      "spec": "specs/AFS-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications-AFS-KEX.pdf",
      "title": "AFS-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/AFS-KEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "AFS_KEX_C512",
     "sizes": {
      "kat_path": "schemes/AFS-KEX/Test_Vectors/KAT_KEX_AFS_KEX_C512.txt",
      "msg_total": 6016,
      "msgs": [
       2944,
       3008,
       64,
       0
      ],
      "passes": 4,
      "pk_a": 6272,
      "pk_b": 6272,
      "sk_a": 12674,
      "sk_b": 12674,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 12,
      "derive_b": 108,
      "init_a": 81304,
      "init_b": 81412,
      "pass1": 37780,
      "pass2": 41020,
      "pass3": 62528,
      "pass4": 53008
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1624,
      "source": "report",
      "text": 47764,
      "total": 49936
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1832404,
       "count": 10,
       "max": 1832492,
       "median": 1832396,
       "min": 1832325
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 524066,
       "count": 10,
       "max": 524132,
       "median": 524067,
       "min": 524015
      },
      "init_b": {
       "avg": 524000,
       "count": 10,
       "max": 524036,
       "median": 523997,
       "min": 523958
      },
      "pass1": {
       "avg": 1227781,
       "count": 10,
       "max": 1279352,
       "median": 1222052,
       "min": 1222015
      },
      "pass2": {
       "avg": 2374873,
       "count": 10,
       "max": 2420715,
       "median": 2363414,
       "min": 2363376
      }
     },
     "cycles_total": 6483475,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-PLAC128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-PLAC128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-PLAC128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC128.txt",
      "msg_total": 2450,
      "msgs": [
       1170,
       1280
      ],
      "passes": 2,
      "pk_a": 530,
      "pk_b": 530,
      "sk_a": 1570,
      "sk_b": 1570,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 21008,
      "derive_b": 8,
      "init_a": 10616,
      "init_b": 10608,
      "pass1": 15232,
      "pass2": 17708
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1880,
      "source": "report",
      "text": 54276,
      "total": 56704
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 3957594,
       "count": 10,
       "max": 4041510,
       "median": 3936642,
       "min": 3936501
      },
      "derive_b": {
       "avg": 587,
       "count": 10,
       "max": 587,
       "median": 587,
       "min": 587
      },
      "init_a": {
       "avg": 999994,
       "count": 10,
       "max": 1000085,
       "median": 1000014,
       "min": 999825
      },
      "init_b": {
       "avg": 999876,
       "count": 10,
       "max": 999929,
       "median": 999877,
       "min": 999825
      },
      "pass1": {
       "avg": 2381035,
       "count": 10,
       "max": 2464821,
       "median": 2360100,
       "min": 2360045
      },
      "pass2": {
       "avg": 4942356,
       "count": 10,
       "max": 4942537,
       "median": 4942330,
       "min": 4942265
      }
     },
     "cycles_total": 13281442,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-PLAC256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-PLAC256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-PLAC256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC256.txt",
      "msg_total": 4900,
      "msgs": [
       2340,
       2560
      ],
      "passes": 2,
      "pk_a": 1060,
      "pk_b": 1060,
      "sk_a": 3140,
      "sk_b": 3140,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 41032,
      "derive_b": 16,
      "init_a": 19400,
      "init_b": 19392,
      "pass1": 27248,
      "pass2": 33648
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 2392,
      "source": "report",
      "text": 69788,
      "total": 72728
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 13435689,
       "count": 10,
       "max": 13435842,
       "median": 13435680,
       "min": 13435596
      },
      "derive_b": {
       "avg": 1004,
       "count": 10,
       "max": 1004,
       "median": 1004,
       "min": 1004
      },
      "init_a": {
       "avg": 2777832,
       "count": 10,
       "max": 2777956,
       "median": 2777837,
       "min": 2777587
      },
      "init_b": {
       "avg": 2806025,
       "count": 10,
       "max": 3061660,
       "median": 2777637,
       "min": 2777525
      },
      "pass1": {
       "avg": 6555154,
       "count": 10,
       "max": 6810819,
       "median": 6526732,
       "min": 6526646
      },
      "pass2": {
       "avg": 13899356,
       "count": 10,
       "max": 14155171,
       "median": 13870924,
       "min": 13870779
      }
     },
     "cycles_total": 39475060,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-PLAC512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-PLAC512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-PLAC512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC512.txt",
      "msg_total": 9284,
      "msgs": [
       4676,
       4608
      ],
      "passes": 2,
      "pk_a": 2116,
      "pk_b": 2116,
      "sk_a": 6276,
      "sk_b": 6276,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": {
      "derive_a": 102472,
      "derive_b": 8,
      "init_a": 37264,
      "init_b": 37256,
      "pass1": 52888,
      "pass2": 79400
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 2392,
      "source": "report",
      "text": 76716,
      "total": 79656
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 17569538,
       "count": 10,
       "max": 17570959,
       "median": 17569552,
       "min": 17568946
      },
      "derive_b": {
       "avg": 1003,
       "count": 10,
       "max": 1003,
       "median": 1003,
       "min": 1003
      },
      "init_a": {
       "avg": 3743569,
       "count": 10,
       "max": 3944640,
       "median": 3693294,
       "min": 3693041
      },
      "init_b": {
       "avg": 3718094,
       "count": 10,
       "max": 3943856,
       "median": 3693154,
       "min": 3692634
      },
      "pass1": {
       "avg": 8735107,
       "count": 10,
       "max": 8735828,
       "median": 8735271,
       "min": 8734315
      },
      "pass2": {
       "avg": 18207166,
       "count": 10,
       "max": 18208179,
       "median": 18207207,
       "min": 18206321
      }
     },
     "cycles_total": 51974477,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-PLAC512Star_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-PLAC512Star",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-PLAC512Star",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC512Star.txt",
      "msg_total": 10920,
      "msgs": [
       5492,
       5428
      ],
      "passes": 2,
      "pk_a": 2522,
      "pk_b": 2522,
      "sk_a": 6682,
      "sk_b": 6682,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": {
      "derive_a": 115520,
      "derive_b": 8,
      "init_a": 40232,
      "init_b": 40224,
      "pass1": 60352,
      "pass2": 90960
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 43512,
      "total": 45412
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 2931014,
       "count": 10,
       "max": 2952184,
       "median": 2925722,
       "min": 2925722
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 604114,
       "count": 10,
       "max": 741557,
       "median": 582962,
       "min": 582962
      },
      "init_b": {
       "avg": 609244,
       "count": 10,
       "max": 715089,
       "median": 596013,
       "min": 582782
      },
      "pass1": {
       "avg": 972527,
       "count": 10,
       "max": 993692,
       "median": 967231,
       "min": 967230
      },
      "pass2": {
       "avg": 2177968,
       "count": 10,
       "max": 2178057,
       "median": 2177948,
       "min": 2177946
      }
     },
     "cycles_total": 7295218,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-ZEN128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-ZEN128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-ZEN128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-ZEN128.txt",
      "msg_total": 2151,
      "msgs": [
       1127,
       1024
      ],
      "passes": 2,
      "pk_a": 615,
      "pk_b": 615,
      "sk_a": 1303,
      "sk_b": 1303,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 21672,
      "derive_b": 8,
      "init_a": 10000,
      "init_b": 9992,
      "pass1": 15184,
      "pass2": 18128
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 51640,
      "total": 53540
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 9132876,
       "count": 10,
       "max": 9309438,
       "median": 9123597,
       "min": 9030621
      },
      "derive_b": {
       "avg": 587,
       "count": 10,
       "max": 587,
       "median": 587,
       "min": 587
      },
      "init_a": {
       "avg": 1338011,
       "count": 10,
       "max": 1514610,
       "median": 1328732,
       "min": 1235610
      },
      "init_b": {
       "avg": 1300661,
       "count": 10,
       "max": 1421482,
       "median": 1282073,
       "min": 1235603
      },
      "pass1": {
       "avg": 1956413,
       "count": 10,
       "max": 2132990,
       "median": 1947112,
       "min": 1854173
      },
      "pass2": {
       "avg": 5687312,
       "count": 10,
       "max": 5687498,
       "median": 5687282,
       "min": 5687282
      }
     },
     "cycles_total": 19415860,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-ZEN256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-ZEN256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-ZEN256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-ZEN256.txt",
      "msg_total": 4301,
      "msgs": [
       2253,
       2048
      ],
      "passes": 2,
      "pk_a": 1229,
      "pk_b": 1229,
      "sk_a": 2605,
      "sk_b": 2605,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 30992,
      "derive_b": 16,
      "init_a": 17624,
      "init_b": 17616,
      "pass1": 21672,
      "pass2": 23564
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 71544,
      "total": 73444
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 32410965,
       "count": 10,
       "max": 32667376,
       "median": 32382478,
       "min": 32097571
      },
      "derive_b": {
       "avg": 1004,
       "count": 10,
       "max": 1004,
       "median": 1004,
       "min": 1004
      },
      "init_a": {
       "avg": 4310602,
       "count": 10,
       "max": 5507218,
       "median": 4082701,
       "min": 3797783
      },
      "init_b": {
       "avg": 4082661,
       "count": 10,
       "max": 4937382,
       "median": 3940215,
       "min": 3797746
      },
      "pass1": {
       "avg": 5639457,
       "count": 10,
       "max": 5895869,
       "median": 5610967,
       "min": 5326067
      },
      "pass2": {
       "avg": 19234968,
       "count": 10,
       "max": 19235064,
       "median": 19234956,
       "min": 19234953
      }
     },
     "cycles_total": 65679657,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2K-ZEN512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2K-ZEN512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2K-ZEN512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2K-ZEN512.txt",
      "msg_total": 8602,
      "msgs": [
       4506,
       4096
      ],
      "passes": 2,
      "pk_a": 2458,
      "pk_b": 2458,
      "sk_a": 5210,
      "sk_b": 5210,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": {
      "derive_a": 67680,
      "derive_b": 8,
      "init_a": 39392,
      "init_b": 39384,
      "pass1": 47392,
      "pass2": 54104
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1624,
      "source": "report",
      "text": 57828,
      "total": 60404
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 2635773,
       "count": 10,
       "max": 2681118,
       "median": 2624120,
       "min": 2623609
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 529742,
       "count": 10,
       "max": 581239,
       "median": 524032,
       "min": 523876
      },
      "init_b": {
       "avg": 1110988,
       "count": 10,
       "max": 1111493,
       "median": 1110920,
       "min": 1110554
      },
      "pass1": {
       "avg": 514891,
       "count": 10,
       "max": 514961,
       "median": 514883,
       "min": 514844
      },
      "pass2": {
       "avg": 11266294,
       "count": 10,
       "max": 21135587,
       "median": 8707668,
       "min": 5833695
      }
     },
     "cycles_total": 16058039,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2S-PLAC128-BiT128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2S-PLAC128-BiT128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2S-PLAC128-BiT128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2S-PLAC128-BiT128.txt",
      "msg_total": 3314,
      "msgs": [
       530,
       2784
      ],
      "passes": 2,
      "pk_a": 530,
      "pk_b": 1048,
      "sk_a": 1570,
      "sk_b": 1864,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 29504,
      "derive_b": 8,
      "init_a": 10608,
      "init_b": 16220,
      "pass1": 10600,
      "pass2": 45736
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2S-PLAC256-BiT256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2S-PLAC256-BiT256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-K2S-PLAC256-BiT256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2S-PLAC256-BiT256.txt",
      "msg_total": 7076,
      "msgs": [
       1060,
       6016
      ],
      "passes": 2,
      "pk_a": 1060,
      "pk_b": 2144,
      "sk_a": 3140,
      "sk_b": 4160,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2S-PLAC512-BiT512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2S-PLAC512-BiT512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-K2S-PLAC512-BiT512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2S-PLAC512-BiT512.txt",
      "msg_total": 13931,
      "msgs": [
       2116,
       11815
      ],
      "passes": 2,
      "pk_a": 2116,
      "pk_b": 5056,
      "sk_a": 6276,
      "sk_b": 9024,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 56812,
      "total": 59116
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 3678681,
       "count": 10,
       "max": 3681486,
       "median": 3677725,
       "min": 3677305
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 625265,
       "count": 10,
       "max": 741544,
       "median": 609406,
       "min": 582943
      },
      "init_b": {
       "avg": 1110977,
       "count": 10,
       "max": 1111472,
       "median": 1110928,
       "min": 1110535
      },
      "pass1": {
       "avg": 558140,
       "count": 10,
       "max": 576664,
       "median": 550201,
       "min": 550201
      },
      "pass2": {
       "avg": 8009701,
       "count": 10,
       "max": 23936452,
       "median": 4951426,
       "min": 3541052
      }
     },
     "cycles_total": 13983115,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2S-ZEN128-BiT128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2S-ZEN128-BiT128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-K2S-ZEN128-BiT128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2S-ZEN128-BiT128.txt",
      "msg_total": 3143,
      "msgs": [
       615,
       2528
      ],
      "passes": 2,
      "pk_a": 615,
      "pk_b": 1048,
      "sk_a": 1303,
      "sk_b": 1864,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 29328,
      "derive_b": 8,
      "init_a": 9992,
      "init_b": 16220,
      "pass1": 9968,
      "pass2": 45480
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2S-ZEN256-BiT256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2S-ZEN256-BiT256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-K2S-ZEN256-BiT256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2S-ZEN256-BiT256.txt",
      "msg_total": 6733,
      "msgs": [
       1229,
       5504
      ],
      "passes": 2,
      "pk_a": 1229,
      "pk_b": 2144,
      "sk_a": 2605,
      "sk_b": 4160,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-K2S-ZEN512-BiT512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-K2S-ZEN512-BiT512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-K2S-ZEN512-BiT512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-K2S-ZEN512-BiT512.txt",
      "msg_total": 13249,
      "msgs": [
       2458,
       10791
      ],
      "passes": 2,
      "pk_a": 2458,
      "pk_b": 5056,
      "sk_a": 5210,
      "sk_b": 9024,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1624,
      "source": "report",
      "text": 60996,
      "total": 63572
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 893168,
       "count": 10,
       "max": 893236,
       "median": 893151,
       "min": 893121
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 1111067,
       "count": 10,
       "max": 1111714,
       "median": 1111025,
       "min": 1110542
      },
      "init_b": {
       "avg": 523915,
       "count": 10,
       "max": 523937,
       "median": 523911,
       "min": 523885
      },
      "pass1": {
       "avg": 10543080,
       "count": 10,
       "max": 29688214,
       "median": 7978859,
       "min": 4837605
      },
      "pass2": {
       "avg": 2986698,
       "count": 10,
       "max": 2988334,
       "median": 2987582,
       "min": 2983828
      }
     },
     "cycles_total": 16058279,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2K-BiT128-PLAC128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2K-BiT128-PLAC128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-S2K-BiT128-PLAC128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT128-PLAC128.txt",
      "msg_total": 3314,
      "msgs": [
       2674,
       640
      ],
      "passes": 2,
      "pk_a": 1048,
      "pk_b": 530,
      "sk_a": 1864,
      "sk_b": 1570,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 20088,
      "derive_b": 8,
      "init_a": 16220,
      "init_b": 10608,
      "pass1": 43312,
      "pass2": 27880
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 56876,
      "total": 59180
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1668495,
       "count": 10,
       "max": 1824612,
       "median": 1652616,
       "min": 1612922
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 1111061,
       "count": 10,
       "max": 1111607,
       "median": 1111028,
       "min": 1110548
      },
      "init_b": {
       "avg": 622477,
       "count": 10,
       "max": 715090,
       "median": 622476,
       "min": 582783
      },
      "pass1": {
       "avg": 11014612,
       "count": 10,
       "max": 31470927,
       "median": 6281796,
       "min": 4552011
      },
      "pass2": {
       "avg": 3082802,
       "count": 10,
       "max": 3085175,
       "median": 3081817,
       "min": 3081029
      }
     },
     "cycles_total": 17499798,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2K-BiT128-ZEN128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2K-BiT128-ZEN128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-S2K-BiT128-ZEN128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT128-ZEN128.txt",
      "msg_total": 3143,
      "msgs": [
       2631,
       512
      ],
      "passes": 2,
      "pk_a": 1048,
      "pk_b": 615,
      "sk_a": 1864,
      "sk_b": 1303,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 17592,
      "derive_b": 8,
      "init_a": 16220,
      "init_b": 9992,
      "pass1": 42944,
      "pass2": 27880
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2K-BiT256-PLAC256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2K-BiT256-PLAC256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2K-BiT256-PLAC256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT256-PLAC256.txt",
      "msg_total": 7076,
      "msgs": [
       5796,
       1280
      ],
      "passes": 2,
      "pk_a": 2144,
      "pk_b": 1060,
      "sk_a": 4160,
      "sk_b": 3140,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2K-BiT256-ZEN256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2K-BiT256-ZEN256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2K-BiT256-ZEN256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT256-ZEN256.txt",
      "msg_total": 6733,
      "msgs": [
       5709,
       1024
      ],
      "passes": 2,
      "pk_a": 2144,
      "pk_b": 1229,
      "sk_a": 4160,
      "sk_b": 2605,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2K-BiT512-PLAC512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2K-BiT512-PLAC512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2K-BiT512-PLAC512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT512-PLAC512.txt",
      "msg_total": 13931,
      "msgs": [
       11371,
       2560
      ],
      "passes": 2,
      "pk_a": 5056,
      "pk_b": 2116,
      "sk_a": 9024,
      "sk_b": 6276,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2K-BiT512-ZEN512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2K-BiT512-ZEN512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2K-BiT512-ZEN512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT512-ZEN512.txt",
      "msg_total": 13249,
      "msgs": [
       11201,
       2048
      ],
      "passes": 2,
      "pk_a": 5056,
      "pk_b": 2458,
      "sk_a": 9024,
      "sk_b": 5210,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1624,
      "source": "report",
      "text": 60164,
      "total": 62740
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 2214226,
       "count": 10,
       "max": 2268030,
       "median": 2207936,
       "min": 2207522
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 1111002,
       "count": 10,
       "max": 1111585,
       "median": 1111074,
       "min": 1110438
      },
      "init_b": {
       "avg": 1116969,
       "count": 10,
       "max": 1171158,
       "median": 1110978,
       "min": 1110533
      },
      "pass1": {
       "avg": 8891792,
       "count": 10,
       "max": 17136126,
       "median": 8697246,
       "min": 3179406
      },
      "pass2": {
       "avg": 9473252,
       "count": 10,
       "max": 14376936,
       "median": 9362810,
       "min": 4698687
      }
     },
     "cycles_total": 22807592,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2S-BiT128-ePLAC128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2S-BiT128-ePLAC128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-S2S-BiT128-ePLAC128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT128-ePLAC128.txt",
      "msg_total": 4178,
      "msgs": [
       2034,
       2144
      ],
      "passes": 2,
      "pk_a": 1048,
      "pk_b": 1048,
      "sk_a": 1864,
      "sk_b": 1864,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 32752,
      "derive_b": 8,
      "init_a": 16220,
      "init_b": 16220,
      "pass1": 43264,
      "pass2": 45976
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 56172,
      "total": 58476
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 2955582,
       "count": 10,
       "max": 3007053,
       "median": 2954278,
       "min": 2927892
      },
      "derive_b": {
       "avg": 351,
       "count": 10,
       "max": 351,
       "median": 351,
       "min": 351
      },
      "init_a": {
       "avg": 1110997,
       "count": 10,
       "max": 1111586,
       "median": 1111069,
       "min": 1110432
      },
      "init_b": {
       "avg": 1116973,
       "count": 10,
       "max": 1171152,
       "median": 1110994,
       "min": 1110531
      },
      "pass1": {
       "avg": 8316734,
       "count": 10,
       "max": 20427524,
       "median": 6007988,
       "min": 4208426
      },
      "pass2": {
       "avg": 9605527,
       "count": 10,
       "max": 22241254,
       "median": 8470924,
       "min": 4425031
      }
     },
     "cycles_total": 23106164,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2S-BiT128-eZEN128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2S-BiT128-eZEN128",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CreTAKE-S2S-BiT128-eZEN128",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT128-eZEN128.txt",
      "msg_total": 4135,
      "msgs": [
       2119,
       2016
      ],
      "passes": 2,
      "pk_a": 1048,
      "pk_b": 1048,
      "sk_a": 1864,
      "sk_b": 1864,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 32376,
      "derive_b": 8,
      "init_a": 16220,
      "init_b": 16220,
      "pass1": 42896,
      "pass2": 45888
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2S-BiT256-ePLAC256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2S-BiT256-ePLAC256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2S-BiT256-ePLAC256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT256-ePLAC256.txt",
      "msg_total": 9252,
      "msgs": [
       4516,
       4736
      ],
      "passes": 2,
      "pk_a": 2144,
      "pk_b": 2144,
      "sk_a": 4160,
      "sk_b": 4160,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2S-BiT256-eZEN256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2S-BiT256-eZEN256",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2S-BiT256-eZEN256",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT256-eZEN256.txt",
      "msg_total": 9165,
      "msgs": [
       4685,
       4480
      ],
      "passes": 2,
      "pk_a": 2144,
      "pk_b": 2144,
      "sk_a": 4160,
      "sk_b": 4160,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2S-BiT512-ePLAC512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2S-BiT512-ePLAC512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2S-BiT512-ePLAC512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT512-ePLAC512.txt",
      "msg_total": 18066,
      "msgs": [
       8811,
       9255
      ],
      "passes": 2,
      "pk_a": 5056,
      "pk_b": 5056,
      "sk_a": 9024,
      "sk_b": 9024,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_CreTAKE-S2S-BiT512-eZEN512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MIGUBFHREZ7R2KKULIIKQEU23BVFG3BX/",
      "folder": "CreTAKE",
      "instance": "CreTAKE-S2S-BiT512-eZEN512",
      "pub_date": "2026-09-20 10:15",
      "spec": "specs/CreTAKE.pdf",
      "spec_extra": [],
      "spec_file": "CreTAKE Algorithm specifications.pdf",
      "title": "CreTAKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CreTAKE.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "CreTAKE-S2S-BiT512-eZEN512",
     "sizes": {
      "kat_path": "schemes/CreTAKE/Test_Vectors/Reference_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT512-eZEN512.txt",
      "msg_total": 17896,
      "msgs": [
       9153,
       8743
      ],
      "passes": 2,
      "pk_a": 5056,
      "pk_b": 5056,
      "sk_a": 9024,
      "sk_b": 9024,
      "source": "kat_raw",
      "ss": 128
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 50680,
      "total": 52592
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 5217,
       "count": 10,
       "max": 5217,
       "median": 5217,
       "min": 5217
      },
      "derive_b": {
       "avg": 3111094,
       "count": 10,
       "max": 3111379,
       "median": 3111010,
       "min": 3110893
      },
      "init_a": {
       "avg": 2961594,
       "count": 10,
       "max": 2974343,
       "median": 2963698,
       "min": 2932099
      },
      "init_b": {
       "avg": 2957463,
       "count": 10,
       "max": 2995382,
       "median": 2953232,
       "min": 2932104
      },
      "pass1": {
       "avg": 365771,
       "count": 10,
       "max": 366041,
       "median": 365778,
       "min": 365434
      },
      "pass2": {
       "avg": 11066515,
       "count": 10,
       "max": 19225785,
       "median": 9984577,
       "min": 5045839
      },
      "pass3": {
       "avg": 13904006,
       "count": 10,
       "max": 29049186,
       "median": 10188150,
       "min": 7781010
      }
     },
     "cycles_total": 34371660,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_DKEX-128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KC65HII7OYTVC6FOA5CNNGEQFDCLFZEW/",
      "folder": "DKEX",
      "instance": "DKEX-128",
      "pub_date": "2026-09-20 09:43",
      "spec": "specs/DKEX.pdf",
      "spec_extra": [],
      "spec_file": "DKEX-Algorithm Specification.pdf",
      "title": "DKEX (Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEX-128",
     "sizes": {
      "kat_path": "schemes/DKEX/Test_Vectors/KAT_KEX_DKEX-128.txt",
      "msg_total": 6408,
      "msgs": [
       800,
       3188,
       2420
      ],
      "passes": 3,
      "pk_a": 1312,
      "pk_b": 1312,
      "sk_a": 2560,
      "sk_b": 2560,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 232,
      "derive_b": 36448,
      "init_a": 38708,
      "init_b": 38600,
      "pass1": 6844,
      "pass2": 53640,
      "pass3": 52344
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 38904,
      "total": 40816
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 5217,
       "count": 10,
       "max": 5217,
       "median": 5217,
       "min": 5217
      },
      "derive_b": {
       "avg": 3111082,
       "count": 10,
       "max": 3111343,
       "median": 3111008,
       "min": 3110848
      },
      "init_a": {
       "avg": 2961608,
       "count": 10,
       "max": 2974393,
       "median": 2963740,
       "min": 2932058
      },
      "init_b": {
       "avg": 2957455,
       "count": 10,
       "max": 2995381,
       "median": 2953214,
       "min": 2932064
      },
      "pass1": {
       "avg": 593541,
       "count": 10,
       "max": 593752,
       "median": 593547,
       "min": 593264
      },
      "pass2": {
       "avg": 11404921,
       "count": 10,
       "max": 19564139,
       "median": 10322976,
       "min": 5384243
      },
      "pass3": {
       "avg": 14065822,
       "count": 10,
       "max": 29211001,
       "median": 10350000,
       "min": 7942785
      }
     },
     "cycles_total": 35099646,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_DKEX-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KC65HII7OYTVC6FOA5CNNGEQFDCLFZEW/",
      "folder": "DKEX",
      "instance": "DKEX-128",
      "pub_date": "2026-09-20 09:43",
      "spec": "specs/DKEX.pdf",
      "spec_extra": [],
      "spec_file": "DKEX-Algorithm Specification.pdf",
      "title": "DKEX (Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEX-128",
     "sizes": {
      "kat_path": "schemes/DKEX/Test_Vectors/KAT_KEX_DKEX-128.txt",
      "msg_total": 6408,
      "msgs": [
       800,
       3188,
       2420
      ],
      "passes": 3,
      "pk_a": 1312,
      "pk_b": 1312,
      "sk_a": 2560,
      "sk_b": 2560,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 232,
      "derive_b": 36448,
      "init_a": 38600,
      "init_b": 38600,
      "pass1": 7568,
      "pass2": 53748,
      "pass3": 52452
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 51320,
      "total": 53232
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 5216,
       "count": 10,
       "max": 5216,
       "median": 5216,
       "min": 5216
      },
      "derive_b": {
       "avg": 8837018,
       "count": 10,
       "max": 8837245,
       "median": 8837012,
       "min": 8836799
      },
      "init_a": {
       "avg": 8726270,
       "count": 10,
       "max": 8802356,
       "median": 8728354,
       "min": 8654492
      },
      "init_b": {
       "avg": 8701064,
       "count": 10,
       "max": 8739145,
       "median": 8707404,
       "min": 8612428
      },
      "pass1": {
       "avg": 1127612,
       "count": 10,
       "max": 1128112,
       "median": 1127600,
       "min": 1127003
      },
      "pass2": {
       "avg": 17843056,
       "count": 10,
       "max": 37394361,
       "median": 15897816,
       "min": 12829151
      },
      "pass3": {
       "avg": 24849587,
       "count": 10,
       "max": 33341315,
       "median": 23619245,
       "min": 20548916
      }
     },
     "cycles_total": 70089823,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_DKEX-256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KC65HII7OYTVC6FOA5CNNGEQFDCLFZEW/",
      "folder": "DKEX",
      "instance": "DKEX-256",
      "pub_date": "2026-09-20 09:43",
      "spec": "specs/DKEX.pdf",
      "spec_extra": [],
      "spec_file": "DKEX-Algorithm Specification.pdf",
      "title": "DKEX (Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEX-256",
     "sizes": {
      "kat_path": "schemes/DKEX/Test_Vectors/KAT_KEX_DKEX-256.txt",
      "msg_total": 12390,
      "msgs": [
       1568,
       6195,
       4627
      ],
      "passes": 3,
      "pk_a": 2592,
      "pk_b": 2592,
      "sk_a": 4896,
      "sk_b": 4896,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 232,
      "derive_b": 93196,
      "init_a": 97992,
      "init_b": 97992,
      "pass1": 11324,
      "pass2": 125676,
      "pass3": 123100
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 964,
      "data": 1352,
      "source": "report",
      "text": 39728,
      "total": 42044
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 5216,
       "count": 10,
       "max": 5216,
       "median": 5216,
       "min": 5216
      },
      "derive_b": {
       "avg": 8837024,
       "count": 10,
       "max": 8837214,
       "median": 8837037,
       "min": 8836806
      },
      "init_a": {
       "avg": 8726275,
       "count": 10,
       "max": 8802386,
       "median": 8728333,
       "min": 8654497
      },
      "init_b": {
       "avg": 8701076,
       "count": 10,
       "max": 8739158,
       "median": 8707391,
       "min": 8612429
      },
      "pass1": {
       "avg": 1681739,
       "count": 10,
       "max": 1682130,
       "median": 1681719,
       "min": 1681262
      },
      "pass2": {
       "avg": 18541765,
       "count": 10,
       "max": 38093166,
       "median": 16596634,
       "min": 13527894
      },
      "pass3": {
       "avg": 25113051,
       "count": 10,
       "max": 33604790,
       "median": 23882702,
       "min": 20812372
      }
     },
     "cycles_total": 71606146,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_DKEX-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KC65HII7OYTVC6FOA5CNNGEQFDCLFZEW/",
      "folder": "DKEX",
      "instance": "DKEX-256",
      "pub_date": "2026-09-20 09:43",
      "spec": "specs/DKEX.pdf",
      "spec_extra": [],
      "spec_file": "DKEX-Algorithm Specification.pdf",
      "title": "DKEX (Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEX-256",
     "sizes": {
      "kat_path": "schemes/DKEX/Test_Vectors/KAT_KEX_DKEX-256.txt",
      "msg_total": 12390,
      "msgs": [
       1568,
       6195,
       4627
      ],
      "passes": 3,
      "pk_a": 2592,
      "pk_b": 2592,
      "sk_a": 4896,
      "sk_b": 4896,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 232,
      "derive_b": 93088,
      "init_a": 98100,
      "init_b": 98100,
      "pass1": 18144,
      "pass2": 125676,
      "pass3": 122992
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 49416,
      "total": 51328
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 15793,
       "count": 10,
       "max": 15793,
       "median": 15793,
       "min": 15793
      },
      "derive_b": {
       "avg": 8848346,
       "count": 10,
       "max": 8848491,
       "median": 8848344,
       "min": 8848237
      },
      "init_a": {
       "avg": 8726283,
       "count": 10,
       "max": 8802370,
       "median": 8728340,
       "min": 8654499
      },
      "init_b": {
       "avg": 8701073,
       "count": 10,
       "max": 8739110,
       "median": 8707392,
       "min": 8612431
      },
      "pass1": {
       "avg": 3422820,
       "count": 10,
       "max": 3423282,
       "median": 3422793,
       "min": 3422380
      },
      "pass2": {
       "avg": 22321735,
       "count": 10,
       "max": 34721412,
       "median": 21685800,
       "min": 15796524
      },
      "pass3": {
       "avg": 33127811,
       "count": 10,
       "max": 71863664,
       "median": 30406028,
       "min": 21202274
      }
     },
     "cycles_total": 85163861,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_DKEX-512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KC65HII7OYTVC6FOA5CNNGEQFDCLFZEW/",
      "folder": "DKEX",
      "instance": "DKEX-512",
      "pub_date": "2026-09-20 09:43",
      "spec": "specs/DKEX.pdf",
      "spec_extra": [],
      "spec_file": "DKEX-Algorithm Specification.pdf",
      "title": "DKEX (Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEX-512",
     "sizes": {
      "kat_path": "schemes/DKEX/Test_Vectors/KAT_KEX_DKEX-512.txt",
      "msg_total": 15718,
      "msgs": [
       3392,
       7699,
       4627
      ],
      "passes": 3,
      "pk_a": 2592,
      "pk_b": 2592,
      "sk_a": 4896,
      "sk_b": 4896,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 320,
      "derive_b": 93104,
      "init_a": 97992,
      "init_b": 97992,
      "pass1": 33024,
      "pass2": 125740,
      "pass3": 123164
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 964,
      "data": 1352,
      "source": "report",
      "text": 40496,
      "total": 42812
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 15792,
       "count": 10,
       "max": 15792,
       "median": 15792,
       "min": 15791
      },
      "derive_b": {
       "avg": 8848344,
       "count": 10,
       "max": 8848501,
       "median": 8848344,
       "min": 8848217
      },
      "init_a": {
       "avg": 8726288,
       "count": 10,
       "max": 8802381,
       "median": 8728348,
       "min": 8654492
      },
      "init_b": {
       "avg": 8701057,
       "count": 10,
       "max": 8739141,
       "median": 8707364,
       "min": 8612424
      },
      "pass1": {
       "avg": 4714751,
       "count": 10,
       "max": 4715241,
       "median": 4714711,
       "min": 4714304
      },
      "pass2": {
       "avg": 23821841,
       "count": 10,
       "max": 36221541,
       "median": 23185900,
       "min": 17296611
      },
      "pass3": {
       "avg": 33721570,
       "count": 10,
       "max": 72457535,
       "median": 30999777,
       "min": 21795971
      }
     },
     "cycles_total": 88549643,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": true,
     "id": "crypto_kex_DKEX-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "pass3",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KC65HII7OYTVC6FOA5CNNGEQFDCLFZEW/",
      "folder": "DKEX",
      "instance": "DKEX-512",
      "pub_date": "2026-09-20 09:43",
      "spec": "specs/DKEX.pdf",
      "spec_extra": [],
      "spec_file": "DKEX-Algorithm Specification.pdf",
      "title": "DKEX (Ding Key Exchange)",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DKEX.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKEX-512",
     "sizes": {
      "kat_path": "schemes/DKEX/Test_Vectors/KAT_KEX_DKEX-512.txt",
      "msg_total": 15718,
      "msgs": [
       3392,
       7699,
       4627
      ],
      "passes": 3,
      "pk_a": 2592,
      "pk_b": 2592,
      "sk_a": 4896,
      "sk_b": 4896,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 320,
      "derive_b": 93212,
      "init_a": 98100,
      "init_b": 98100,
      "pass1": 33048,
      "pass2": 125740,
      "pass3": 123056
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 36688,
      "total": 38588
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 26030,
       "count": 10,
       "max": 26030,
       "median": 26030,
       "min": 26030
      },
      "derive_b": {
       "avg": 12229724,
       "count": 10,
       "max": 12229756,
       "median": 12229735,
       "min": 12229655
      },
      "init_a": {
       "avg": 11756379,
       "count": 10,
       "max": 11756418,
       "median": 11756376,
       "min": 11756353
      },
      "init_b": {
       "avg": 11756185,
       "count": 10,
       "max": 11756218,
       "median": 11756184,
       "min": 11756146
      },
      "pass1": {
       "avg": 24028642,
       "count": 10,
       "max": 24028705,
       "median": 24028638,
       "min": 24028584
      }
     },
     "cycles_total": 59796960,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_MAMBA-NIKE-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/75NMUIOPYDJXY5WRYIBQ6FET6Z57UMPG/",
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-128",
      "pub_date": "2026-09-20 09:41",
      "spec": "specs/MAMBA-NIKE.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_NIKE.pdf",
      "title": "MAMBA-NIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-NIKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-NIKE-128",
     "sizes": {
      "kat_path": "schemes/MAMBA-NIKE/Test_Vectors/KAT_KEX_MAMBA-NIKE-128.txt",
      "msg_total": 1568,
      "msgs": [
       1568
      ],
      "passes": 1,
      "pk_a": 1184,
      "pk_b": 1184,
      "sk_a": 3232,
      "sk_b": 3232,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 2096,
      "derive_b": 47684,
      "init_a": 45660,
      "init_b": 45652,
      "pass1": 57996
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 36752,
      "total": 38652
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 26030,
       "count": 10,
       "max": 26030,
       "median": 26030,
       "min": 26030
      },
      "derive_b": {
       "avg": 12251980,
       "count": 10,
       "max": 12252012,
       "median": 12251983,
       "min": 12251950
      },
      "init_a": {
       "avg": 11780992,
       "count": 10,
       "max": 11781027,
       "median": 11780990,
       "min": 11780954
      },
      "init_b": {
       "avg": 11780806,
       "count": 10,
       "max": 11780846,
       "median": 11780810,
       "min": 11780771
      },
      "pass1": {
       "avg": 24077366,
       "count": 10,
       "max": 24077419,
       "median": 24077366,
       "min": 24077314
      }
     },
     "cycles_total": 59917174,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_MAMBA-NIKE-192_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/75NMUIOPYDJXY5WRYIBQ6FET6Z57UMPG/",
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-192",
      "pub_date": "2026-09-20 09:41",
      "spec": "specs/MAMBA-NIKE.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_NIKE.pdf",
      "title": "MAMBA-NIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-NIKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-NIKE-192",
     "sizes": {
      "kat_path": "schemes/MAMBA-NIKE/Test_Vectors/KAT_KEX_MAMBA-NIKE-192.txt",
      "msg_total": 1568,
      "msgs": [
       1568
      ],
      "passes": 1,
      "pk_a": 1312,
      "pk_b": 1312,
      "sk_a": 3360,
      "sk_b": 3360,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 2096,
      "derive_b": 47684,
      "init_a": 45660,
      "init_b": 45652,
      "pass1": 57996
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 36944,
      "total": 38844
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 26030,
       "count": 10,
       "max": 26030,
       "median": 26030,
       "min": 26030
      },
      "derive_b": {
       "avg": 12251989,
       "count": 10,
       "max": 12252033,
       "median": 12251985,
       "min": 12251947
      },
      "init_a": {
       "avg": 11884256,
       "count": 10,
       "max": 11884304,
       "median": 11884267,
       "min": 11884203
      },
      "init_b": {
       "avg": 11884078,
       "count": 10,
       "max": 11884108,
       "median": 11884076,
       "min": 11884032
      },
      "pass1": {
       "avg": 24180617,
       "count": 10,
       "max": 24180680,
       "median": 24180612,
       "min": 24180554
      }
     },
     "cycles_total": 60226970,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_MAMBA-NIKE-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/75NMUIOPYDJXY5WRYIBQ6FET6Z57UMPG/",
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-256",
      "pub_date": "2026-09-20 09:41",
      "spec": "specs/MAMBA-NIKE.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_NIKE.pdf",
      "title": "MAMBA-NIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-NIKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "MAMBA-NIKE-256",
     "sizes": {
      "kat_path": "schemes/MAMBA-NIKE/Test_Vectors/KAT_KEX_MAMBA-NIKE-256.txt",
      "msg_total": 1568,
      "msgs": [
       1568
      ],
      "passes": 1,
      "pk_a": 1312,
      "pk_b": 1312,
      "sk_a": 3360,
      "sk_b": 3360,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 2096,
      "derive_b": 47684,
      "init_a": 45756,
      "init_b": 45652,
      "pass1": 57996
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "size-file",
      "text": 36816,
      "total": 38716
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": "hangs",
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_MAMBA-NIKE-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/75NMUIOPYDJXY5WRYIBQ6FET6Z57UMPG/",
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-384",
      "pub_date": "2026-09-20 09:41",
      "spec": "specs/MAMBA-NIKE.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_NIKE.pdf",
      "title": "MAMBA-NIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-NIKE.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "MAMBA-NIKE-384",
     "sizes": {
      "kat_path": "schemes/MAMBA-NIKE/Test_Vectors/KAT_KEX_MAMBA-NIKE-384.txt",
      "msg_total": 3360,
      "msgs": [
       3360
      ],
      "passes": 1,
      "pk_a": 2848,
      "pk_b": 2848,
      "sk_a": 6944,
      "sk_b": 6944,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": "not run: hangs on the board at the first iteration (MAMBA-NIKE-128/192/256 take ~1 min each)",
     "tier": "board"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": "other",
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_MAMBA-NIKE-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/75NMUIOPYDJXY5WRYIBQ6FET6Z57UMPG/",
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-512",
      "pub_date": "2026-09-20 09:41",
      "spec": "specs/MAMBA-NIKE.pdf",
      "spec_extra": [],
      "spec_file": "MAMBA_NIKE.pdf",
      "title": "MAMBA-NIKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-NIKE.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "MAMBA-NIKE-512",
     "sizes": {
      "kat_path": "schemes/MAMBA-NIKE/Test_Vectors/KAT_KEX_MAMBA-NIKE-512.txt",
      "msg_total": 3360,
      "msgs": [
       3360
      ],
      "passes": 1,
      "pk_a": 2848,
      "pk_b": 2848,
      "sk_a": 6944,
      "sk_b": 6944,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": "not run: same as MAMBA-NIKE-384",
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 29100,
      "total": 31256
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 782651,
       "count": 10,
       "max": 782675,
       "median": 782654,
       "min": 782630
      },
      "derive_b": {
       "avg": 132,
       "count": 10,
       "max": 132,
       "median": 132,
       "min": 132
      },
      "init_a": {
       "avg": 332316,
       "count": 10,
       "max": 332334,
       "median": 332334,
       "min": 332156
      },
      "init_b": {
       "avg": 331000,
       "count": 10,
       "max": 331000,
       "median": 331000,
       "min": 331000
      },
      "pass1": {
       "avg": 594722,
       "count": 10,
       "max": 594753,
       "median": 594717,
       "min": 594699
      },
      "pass2": {
       "avg": 1170485,
       "count": 10,
       "max": 1170557,
       "median": 1170477,
       "min": 1170414
      }
     },
     "cycles_total": 3211306,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-C1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "C1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C1",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-C1",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_512_769_ICCS.txt",
      "msg_total": 2460,
      "msgs": [
       1230,
       1230
      ],
      "passes": 2,
      "pk_a": 615,
      "pk_b": 615,
      "sk_a": 1246,
      "sk_b": 1246,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "derive_a": 10552,
      "derive_b": 4,
      "init_a": 6008,
      "init_b": 6008,
      "pass1": 6064,
      "pass2": 6808
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 29228,
      "total": 31384
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 814578,
       "count": 10,
       "max": 814613,
       "median": 814574,
       "min": 814574
      },
      "derive_b": {
       "avg": 132,
       "count": 10,
       "max": 132,
       "median": 132,
       "min": 132
      },
      "init_a": {
       "avg": 332259,
       "count": 10,
       "max": 332277,
       "median": 332277,
       "min": 332097
      },
      "init_b": {
       "avg": 331001,
       "count": 10,
       "max": 331001,
       "median": 331001,
       "min": 331001
      },
      "pass1": {
       "avg": 583842,
       "count": 10,
       "max": 583842,
       "median": 583842,
       "min": 583842
      },
      "pass2": {
       "avg": 1192207,
       "count": 10,
       "max": 1192317,
       "median": 1192199,
       "min": 1192181
      }
     },
     "cycles_total": 3254019,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-C1-c_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "C1-c",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C1-c",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-C1-c",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_512_769_C_ICCS.txt",
      "msg_total": 2254,
      "msgs": [
       1127,
       1127
      ],
      "passes": 2,
      "pk_a": 615,
      "pk_b": 615,
      "sk_a": 1246,
      "sk_b": 1246,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "derive_a": 9096,
      "derive_b": 4,
      "init_a": 6008,
      "init_b": 6008,
      "pass1": 6064,
      "pass2": 6704
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 35372,
      "total": 37528
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1721240,
       "count": 10,
       "max": 1721286,
       "median": 1721246,
       "min": 1721196
      },
      "derive_b": {
       "avg": 141,
       "count": 10,
       "max": 141,
       "median": 141,
       "min": 141
      },
      "init_a": {
       "avg": 801785,
       "count": 10,
       "max": 801803,
       "median": 801803,
       "min": 801626
      },
      "init_b": {
       "avg": 799322,
       "count": 10,
       "max": 799357,
       "median": 799318,
       "min": 799318
      },
      "pass1": {
       "avg": 1372315,
       "count": 10,
       "max": 1372357,
       "median": 1372320,
       "min": 1372275
      },
      "pass2": {
       "avg": 2517930,
       "count": 10,
       "max": 2518025,
       "median": 2517926,
       "min": 2517845
      }
     },
     "cycles_total": 7212733,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-C2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "C2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C2",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-C2",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_1024_769_ICCS.txt",
      "msg_total": 4916,
      "msgs": [
       2458,
       2458
      ],
      "passes": 2,
      "pk_a": 1229,
      "pk_b": 1229,
      "sk_a": 2490,
      "sk_b": 2490,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 23508,
      "derive_b": 4,
      "init_a": 15008,
      "init_b": 15008,
      "pass1": 15096,
      "pass2": 16036
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 35436,
      "total": 37592
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1794603,
       "count": 10,
       "max": 1794603,
       "median": 1794603,
       "min": 1794602
      },
      "derive_b": {
       "avg": 141,
       "count": 10,
       "max": 141,
       "median": 141,
       "min": 141
      },
      "init_a": {
       "avg": 801647,
       "count": 10,
       "max": 801665,
       "median": 801665,
       "min": 801484
      },
      "init_b": {
       "avg": 799308,
       "count": 10,
       "max": 799308,
       "median": 799308,
       "min": 799307
      },
      "pass1": {
       "avg": 1356106,
       "count": 10,
       "max": 1356137,
       "median": 1356099,
       "min": 1356099
      },
      "pass2": {
       "avg": 2576318,
       "count": 10,
       "max": 2576397,
       "median": 2576317,
       "min": 2576272
      }
     },
     "cycles_total": 7328123,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-C2-c_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "C2-c",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C2-c",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-C2-c",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_1024_769_C_ICCS.txt",
      "msg_total": 4506,
      "msgs": [
       2253,
       2253
      ],
      "passes": 2,
      "pk_a": 1229,
      "pk_b": 1229,
      "sk_a": 2490,
      "sk_b": 2490,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 20644,
      "derive_b": 4,
      "init_a": 15008,
      "init_b": 15008,
      "pass1": 15096,
      "pass2": 15828
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 49680,
      "total": 51836
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 4714682,
       "count": 10,
       "max": 4714754,
       "median": 4714678,
       "min": 4714601
      },
      "derive_b": {
       "avg": 181,
       "count": 10,
       "max": 181,
       "median": 181,
       "min": 181
      },
      "init_a": {
       "avg": 2354440,
       "count": 10,
       "max": 2354494,
       "median": 2354456,
       "min": 2354262
      },
      "init_b": {
       "avg": 2349717,
       "count": 10,
       "max": 2349750,
       "median": 2349709,
       "min": 2349709
      },
      "pass1": {
       "avg": 3634551,
       "count": 10,
       "max": 3634639,
       "median": 3634544,
       "min": 3634466
      },
      "pass2": {
       "avg": 6457856,
       "count": 10,
       "max": 6458014,
       "median": 6457851,
       "min": 6457750
      }
     },
     "cycles_total": 19511427,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-C3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "C3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C3",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-C3",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_2048_769_ICCS.txt",
      "msg_total": 9832,
      "msgs": [
       4916,
       4916
      ],
      "passes": 2,
      "pk_a": 2458,
      "pk_b": 2458,
      "sk_a": 4980,
      "sk_b": 4980,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 48620,
      "derive_b": 108,
      "init_a": 38712,
      "init_b": 38712,
      "pass1": 38864,
      "pass2": 37344
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1608,
      "source": "report",
      "text": 49744,
      "total": 51900
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 4758591,
       "count": 10,
       "max": 4758626,
       "median": 4758583,
       "min": 4758583
      },
      "derive_b": {
       "avg": 181,
       "count": 10,
       "max": 181,
       "median": 181,
       "min": 181
      },
      "init_a": {
       "avg": 2354168,
       "count": 10,
       "max": 2354222,
       "median": 2354184,
       "min": 2353991
      },
      "init_b": {
       "avg": 2349709,
       "count": 10,
       "max": 2349740,
       "median": 2349701,
       "min": 2349701
      },
      "pass1": {
       "avg": 3575302,
       "count": 10,
       "max": 3575334,
       "median": 3575294,
       "min": 3575294
      },
      "pass2": {
       "avg": 6444172,
       "count": 10,
       "max": 6444247,
       "median": 6444174,
       "min": 6444056
      }
     },
     "cycles_total": 19482123,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-C3-c_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "C3-c",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C3-c",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-C3-c",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_2048_769_C_ICCS.txt",
      "msg_total": 9012,
      "msgs": [
       4506,
       4506
      ],
      "passes": 2,
      "pk_a": 2458,
      "pk_b": 2458,
      "sk_a": 4980,
      "sk_b": 4980,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 46536,
      "derive_b": 12,
      "init_a": 38712,
      "init_b": 38712,
      "pass1": 38864,
      "pass2": 36928
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 32572,
      "total": 34600
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 828147,
       "count": 10,
       "max": 828147,
       "median": 828147,
       "min": 828147
      },
      "derive_b": {
       "avg": 132,
       "count": 10,
       "max": 132,
       "median": 132,
       "min": 132
      },
      "init_a": {
       "avg": 384448,
       "count": 10,
       "max": 384500,
       "median": 384462,
       "min": 384282
      },
      "init_b": {
       "avg": 383031,
       "count": 10,
       "max": 383064,
       "median": 383027,
       "min": 383027
      },
      "pass1": {
       "avg": 672785,
       "count": 10,
       "max": 672785,
       "median": 672785,
       "min": 672785
      },
      "pass2": {
       "avg": 1268052,
       "count": 10,
       "max": 1268149,
       "median": 1268041,
       "min": 1268041
      }
     },
     "cycles_total": 3536595,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-R1_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "128",
      "param_set": "R1",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-R1",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-R1",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_512_1409_ICCS.txt",
      "msg_total": 2688,
      "msgs": [
       1344,
       1344
      ],
      "passes": 2,
      "pk_a": 672,
      "pk_b": 672,
      "sk_a": 1360,
      "sk_b": 1360,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": {
      "derive_a": 12232,
      "derive_b": 4,
      "init_a": 7556,
      "init_b": 7556,
      "pass1": 7612,
      "pass2": 8152
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 42732,
      "total": 44760
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 1758802,
       "count": 10,
       "max": 1758802,
       "median": 1758802,
       "min": 1758802
      },
      "derive_b": {
       "avg": 141,
       "count": 10,
       "max": 141,
       "median": 141,
       "min": 141
      },
      "init_a": {
       "avg": 922745,
       "count": 10,
       "max": 922795,
       "median": 922756,
       "min": 922568
      },
      "init_b": {
       "avg": 920066,
       "count": 10,
       "max": 920099,
       "median": 920058,
       "min": 920058
      },
      "pass1": {
       "avg": 1475406,
       "count": 10,
       "max": 1475406,
       "median": 1475406,
       "min": 1475406
      },
      "pass2": {
       "avg": 2514912,
       "count": 10,
       "max": 2515009,
       "median": 2514901,
       "min": 2514901
      }
     },
     "cycles_total": 7592072,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-R2_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "256",
      "param_set": "R2",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-R2",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-R2",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_1024_1409_ICCS.txt",
      "msg_total": 5376,
      "msgs": [
       2688,
       2688
      ],
      "passes": 2,
      "pk_a": 1344,
      "pk_b": 1344,
      "sk_a": 2720,
      "sk_b": 2720,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": {
      "derive_a": 27068,
      "derive_b": 4,
      "init_a": 19444,
      "init_b": 19444,
      "pass1": 19532,
      "pass2": 18900
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": {
      "bss": 548,
      "data": 1480,
      "source": "report",
      "text": 53904,
      "total": 55932
     },
     "completed_ops": [],
     "cycles": {
      "derive_a": {
       "avg": 5002515,
       "count": 10,
       "max": 5002584,
       "median": 5002508,
       "min": 5002431
      },
      "derive_b": {
       "avg": 181,
       "count": 10,
       "max": 181,
       "median": 181,
       "min": 181
      },
      "init_a": {
       "avg": 2495603,
       "count": 10,
       "max": 2495677,
       "median": 2495628,
       "min": 2495394
      },
      "init_b": {
       "avg": 2490437,
       "count": 10,
       "max": 2490507,
       "median": 2490436,
       "min": 2490382
      },
      "pass1": {
       "avg": 3836456,
       "count": 10,
       "max": 3836582,
       "median": 3836444,
       "min": 3836366
      },
      "pass2": {
       "avg": 6803406,
       "count": 10,
       "max": 6803522,
       "median": 6803380,
       "min": 6803338
      }
     },
     "cycles_total": 20628598,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_NEV-AKE-R3_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": "NEV / NEV-AKE spec §4-5 Table 2: suffix 1/2/3 (n=512/1024/2048) targets at least 128/256/512-bit classical (80/128/256-bit quantum) security; C=compact, R=recommended, D=low-DFR, -c=compressed",
      "label": "512",
      "param_set": "R3",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VIYUCIMGK6I63JRWXBAM6FJ7U2XLGB5V/",
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-R3",
      "pub_date": "2026-09-20 09:40",
      "spec": "specs/NEV-AKE.pdf",
      "spec_extra": [],
      "spec_file": "02-算法文本：NEV-AKE.pdf",
      "title": "NEV-AKE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NEV-AKE.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "NEV-AKE-R3",
     "sizes": {
      "kat_path": "schemes/NEV-AKE/Test_Vectors/KAT_KEX_NEV_AKE_2048_1409_ICCS.txt",
      "msg_total": 10752,
      "msgs": [
       5376,
       5376
      ],
      "passes": 2,
      "pk_a": 2688,
      "pk_b": 2688,
      "sk_a": 5440,
      "sk_b": 5440,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": {
      "derive_a": 59692,
      "derive_b": 12,
      "init_a": 46340,
      "init_b": 46340,
      "pass1": 46492,
      "pass2": 43380
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_TriQ-KEX-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Y7MZTLMKIGHUVZCNIUAJQA33K4KU427Q/",
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-128",
      "pub_date": "2026-09-20 09:39",
      "spec": "specs/TriQ-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEX.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEX-128",
     "sizes": {
      "kat_path": "schemes/TriQ-KEX/Test_Vectors/KAT_KEX_TriQ-KEX-128.txt",
      "msg_total": 14328,
      "msgs": [
       6148,
       8180
      ],
      "passes": 2,
      "pk_a": 2054,
      "pk_b": 2054,
      "sk_a": 2134,
      "sk_b": 2134,
      "source": "kat_raw",
      "ss": 16
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_TriQ-KEX-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Y7MZTLMKIGHUVZCNIUAJQA33K4KU427Q/",
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-256",
      "pub_date": "2026-09-20 09:39",
      "spec": "specs/TriQ-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEX.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEX-256",
     "sizes": {
      "kat_path": "schemes/TriQ-KEX/Test_Vectors/KAT_KEX_TriQ-KEX-256.txt",
      "msg_total": 43760,
      "msgs": [
       18808,
       24952
      ],
      "passes": 2,
      "pk_a": 6328,
      "pk_b": 6328,
      "sk_a": 6488,
      "sk_b": 6488,
      "source": "kat_raw",
      "ss": 32
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_TriQ-KEX-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Y7MZTLMKIGHUVZCNIUAJQA33K4KU427Q/",
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-384",
      "pub_date": "2026-09-20 09:39",
      "spec": "specs/TriQ-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEX.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEX-384",
     "sizes": {
      "kat_path": "schemes/TriQ-KEX/Test_Vectors/KAT_KEX_TriQ-KEX-384.txt",
      "msg_total": 85276,
      "msgs": [
       36598,
       48678
      ],
      "passes": 2,
      "pk_a": 12255,
      "pk_b": 12255,
      "sk_a": 12495,
      "sk_b": 12495,
      "source": "kat_raw",
      "ss": 48
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "kex",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "init_a",
      "init_b",
      "pass1",
      "pass2",
      "derive_a",
      "derive_b"
     ],
     "failure_kind": null,
     "family": "crypto_kex",
     "hand_ported": false,
     "id": "crypto_kex_TriQ-KEX-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/Y7MZTLMKIGHUVZCNIUAJQA33K4KU427Q/",
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-512",
      "pub_date": "2026-09-20 09:39",
      "spec": "specs/TriQ-KEX.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TriQ-KEX",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TriQ-KEX.zip"
     },
     "notes": [],
     "run_status": "not-run",
     "scheme": "TriQ-KEX-512",
     "sizes": {
      "kat_path": "schemes/TriQ-KEX/Test_Vectors/KAT_KEX_TriQ-KEX-512.txt",
      "msg_total": 137744,
      "msgs": [
       59096,
       78648
      ],
      "passes": 2,
      "pk_a": 19768,
      "pk_b": 19768,
      "sk_a": 20088,
      "sk_b": 20088,
      "source": "kat_raw",
      "ss": 64
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    }
   ],
   "size_fields": [
    "pk_a",
    "sk_a",
    "pk_b",
    "sk_b",
    "msg_total",
    "ss",
    "passes"
   ]
  },
  "sig": {
   "ops": [
    "keypair",
    "sign",
    "verify"
   ],
   "rows": [
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 3400,
      "source": "report",
      "text": 28104,
      "total": 32052
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Aigis-Sig-I_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": "Aigis-Enc+/Aigis-Sig+ spec §4: parameter sets I/II/III target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "128",
      "param_set": "I",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HBX64SLYWTSSMTL3LYHBO3BD77ENY7VO/",
      "folder": "Aigis-Sigplus",
      "instance": "Aigis-Sig+-I",
      "pub_date": "2026-09-20 14:25",
      "spec": "specs/Aigis-Sigplus.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Aigis-Sig+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Aigis-Sig%2B.zip"
     },
     "notes": [
      "official KAT file reports different sizes: sig_max 2009 (shown: host build of the reference code)"
     ],
     "run_status": "failed",
     "scheme": "Aigis-Sig-I",
     "sizes": {
      "kat_path": "schemes/Aigis-Sigplus/Test_Vectors/KAT_SIG_Aigis-sig1_iccs.txt",
      "msg": 56,
      "pk": 928,
      "results_path": "results/Aigis-Sigplus/Aigis-Sig+-I.json",
      "sig_max": 2015,
      "sk": 2800,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 3400,
      "source": "report",
      "text": 27880,
      "total": 31828
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Aigis-Sig-II_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": "Aigis-Enc+/Aigis-Sig+ spec §4: parameter sets I/II/III target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "256",
      "param_set": "II",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HBX64SLYWTSSMTL3LYHBO3BD77ENY7VO/",
      "folder": "Aigis-Sigplus",
      "instance": "Aigis-Sig+-II",
      "pub_date": "2026-09-20 14:25",
      "spec": "specs/Aigis-Sigplus.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Aigis-Sig+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Aigis-Sig%2B.zip"
     },
     "notes": [
      "official KAT file reports different sizes: sig_max 4521 (shown: host build of the reference code)"
     ],
     "run_status": "failed",
     "scheme": "Aigis-Sig-II",
     "sizes": {
      "kat_path": "schemes/Aigis-Sigplus/Test_Vectors/KAT_SIG_Aigis-sig2_iccs.txt",
      "msg": 56,
      "pk": 1824,
      "results_path": "results/Aigis-Sigplus/Aigis-Sig+-II.json",
      "sig_max": 4533,
      "sk": 4976,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 3400,
      "source": "report",
      "text": 30828,
      "total": 34776
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Aigis-Sig-III_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": "Aigis-Enc+/Aigis-Sig+ spec §4: parameter sets I/II/III target at least 128/256/512-bit classical (80/128/256-bit quantum) security",
      "label": "512",
      "param_set": "III",
      "source": "spec",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HBX64SLYWTSSMTL3LYHBO3BD77ENY7VO/",
      "folder": "Aigis-Sigplus",
      "instance": "Aigis-Sig+-III",
      "pub_date": "2026-09-20 14:25",
      "spec": "specs/Aigis-Sigplus.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Aigis-Sig+",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Aigis-Sig%2B.zip"
     },
     "notes": [
      "official KAT file reports different sizes: sig_max 9130 (shown: host build of the reference code)"
     ],
     "run_status": "failed",
     "scheme": "Aigis-Sig-III",
     "sizes": {
      "kat_path": "schemes/Aigis-Sigplus/Test_Vectors/KAT_SIG_Aigis-sig3_iccs.txt",
      "msg": 56,
      "pk": 4672,
      "results_path": "results/Aigis-Sigplus/Aigis-Sig+-III.json",
      "sig_max": 9134,
      "sk": 8800,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 32232,
      "total": 34132
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1110919,
       "count": 100,
       "max": 1111820,
       "median": 1110886,
       "min": 1110077
      },
      "sign": {
       "avg": 7146161,
       "count": 100,
       "max": 29127347,
       "median": 5603711,
       "min": 2610268
      },
      "verify": {
       "avg": 1277109,
       "count": 100,
       "max": 1280326,
       "median": 1276127,
       "min": 1274928
      }
     },
     "cycles_total": 9534189,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_BiT-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/U7FSJZ6KONWY36MQDOVDDB7IHHORNAJY/",
      "folder": "BiT",
      "instance": "BiT-128",
      "pub_date": "2026-09-20 14:24",
      "spec": "specs/BiT.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BIT: Bimodal Triangular distribution based lattice signatures",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BiT.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BiT-128",
     "sizes": {
      "kat_path": "schemes/BiT/Test_Vectors/KAT_SIG_BiT-128.txt",
      "msg": 56,
      "pk": 1048,
      "sig_max": 1504,
      "sig_min": 1504,
      "sk": 1864,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 16212,
      "sign": 40176,
      "verify": 23608
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 35060,
      "total": 36960
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 3240002,
       "count": 100,
       "max": 3241057,
       "median": 3240015,
       "min": 3238931
      },
      "sign": {
       "avg": 11291890,
       "count": 100,
       "max": 32451866,
       "median": 10842100,
       "min": 7977674
      },
      "verify": {
       "avg": 3897262,
       "count": 100,
       "max": 3903472,
       "median": 3896993,
       "min": 3895946
      }
     },
     "cycles_total": 18429154,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_BiT-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/U7FSJZ6KONWY36MQDOVDDB7IHHORNAJY/",
      "folder": "BiT",
      "instance": "BiT-256",
      "pub_date": "2026-09-20 14:24",
      "spec": "specs/BiT.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BIT: Bimodal Triangular distribution based lattice signatures",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BiT.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BiT-256",
     "sizes": {
      "kat_path": "schemes/BiT/Test_Vectors/KAT_SIG_BiT-256.txt",
      "msg": 56,
      "pk": 2144,
      "sig_max": 3456,
      "sig_min": 3456,
      "sk": 4160,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 63896,
      "sign": 151392,
      "verify": 85552
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 40636,
      "total": 42536
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8502166,
       "count": 100,
       "max": 8503255,
       "median": 8502150,
       "min": 8501353
      },
      "sign": {
       "avg": 43346877,
       "count": 100,
       "max": 102210944,
       "median": 42084297,
       "min": 24952362
      },
      "verify": {
       "avg": 9560699,
       "count": 100,
       "max": 9565594,
       "median": 9559378,
       "min": 9559017
      }
     },
     "cycles_total": 61409742,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_BiT-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/U7FSJZ6KONWY36MQDOVDDB7IHHORNAJY/",
      "folder": "BiT",
      "instance": "BiT-512",
      "pub_date": "2026-09-20 14:24",
      "spec": "specs/BiT.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "BIT: Bimodal Triangular distribution based lattice signatures",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BiT.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "BiT-512",
     "sizes": {
      "kat_path": "schemes/BiT/Test_Vectors/KAT_SIG_BiT-512.txt",
      "msg": 56,
      "pk": 5056,
      "sig_max": 6695,
      "sig_min": 6695,
      "sk": 9024,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 127448,
      "sign": 302268,
      "verify": 170520
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 222280,
      "data": 1352,
      "source": "report",
      "text": 23604,
      "total": 247236
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 29840381,
       "count": 26,
       "max": 38436575,
       "median": 29496596,
       "min": 29496053
      },
      "sign": {
       "avg": 1047853797,
       "count": 25,
       "max": 1047904638,
       "median": 1047851346,
       "min": 1047798447
      },
      "verify": {
       "avg": 32678690,
       "count": 25,
       "max": 32732356,
       "median": 32681112,
       "min": 32629635
      }
     },
     "cycles_total": 1110372868,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSALPHA-160f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160f",
      "source": "spec",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-160f",
      "pub_date": "2026-09-20 14:22",
      "spec": "specs/cedrus-alpha.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUSɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSALPHA-160f",
     "sizes": {
      "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-160f.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 19420,
      "sig_min": 19420,
      "sk": 80,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 3504,
      "sign": 2924,
      "verify": 2960
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 351224,
      "data": 1352,
      "source": "report",
      "text": 23648,
      "total": 376224
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 977413898,
       "count": 2,
       "max": 996122634,
       "median": 977413898,
       "min": 958705163
      },
      "sign": {
       "avg": 14239261917,
       "count": 1,
       "max": 14239261917,
       "median": 14239261917,
       "min": 14239261917
      },
      "verify": {
       "avg": 35324803,
       "count": 1,
       "max": 35324803,
       "median": 35324803,
       "min": 35324803
      }
     },
     "cycles_total": 15252000618,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSALPHA-160s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160s",
      "source": "spec",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-160s",
      "pub_date": "2026-09-20 14:22",
      "spec": "specs/cedrus-alpha.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUSɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSALPHA-160s",
     "sizes": {
      "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-160s.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 10300,
      "sig_min": 10300,
      "sk": 80,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 3132,
      "sign": 2532,
      "verify": 2152
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "link-overflow",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSALPHA-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-256f",
      "pub_date": "2026-09-20 14:22",
      "spec": "specs/cedrus-alpha.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUSɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "CEDRUSALPHA-256f",
     "sizes": {
      "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-256f.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 43296,
      "sig_min": 43296,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "link failed: image does not fit the 640 KB SRAM (RAM overflowed by 444,272 bytes); completed none",
     "tier": "board"
    },
    {
     "category": "sig",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "link-overflow",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSALPHA-256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-256s",
      "pub_date": "2026-09-20 14:22",
      "spec": "specs/cedrus-alpha.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUSɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "CEDRUSALPHA-256s",
     "sizes": {
      "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-256s.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 25568,
      "sig_min": 25568,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "link failed: image does not fit the 640 KB SRAM (RAM overflowed by 1,008,624 bytes); completed none",
     "tier": "board"
    },
    {
     "category": "sig",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "link-overflow",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSALPHA-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-384s",
      "pub_date": "2026-09-20 14:22",
      "spec": "specs/cedrus-alpha.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUSɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "CEDRUSALPHA-384s",
     "sizes": {
      "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-384s.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 60672,
      "sig_min": 60672,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "link failed: image does not fit the 640 KB SRAM (RAM overflowed by 3,259,696 bytes); completed none",
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24196,
      "total": 26096
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 26381576,
       "count": 29,
       "max": 26382006,
       "median": 26381541,
       "min": 26381366
      },
      "sign": {
       "avg": 936484349,
       "count": 29,
       "max": 961474761,
       "median": 934329676,
       "min": 921218573
      },
      "verify": {
       "avg": 28248542,
       "count": 28,
       "max": 28248577,
       "median": 28248542,
       "min": 28248508
      }
     },
     "cycles_total": 991114467,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-160f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160f",
      "source": "spec",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-160f",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-160f",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-160f.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 19812,
      "sig_min": 19812,
      "sk": 80,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 3544,
      "sign": 3012,
      "verify": 2952
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24276,
      "total": 26176
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1073055296,
       "count": 2,
       "max": 1073061222,
       "median": 1073055296,
       "min": 1073049369
      },
      "sign": {
       "avg": 16333371754,
       "count": 1,
       "max": 16333371754,
       "median": 16333371754,
       "min": 16333371754
      },
      "verify": {
       "avg": 38484518,
       "count": 1,
       "max": 38484518,
       "median": 38484518,
       "min": 38484518
      }
     },
     "cycles_total": 17444911568,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-160s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160s",
      "source": "spec",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-160s",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-160s",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-160s.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 9460,
      "sig_min": 9460,
      "sk": 80,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 2916,
      "sign": 2436,
      "verify": 1880
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24356,
      "total": 26256
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 85874277,
       "count": 12,
       "max": 85877331,
       "median": 85874037,
       "min": 85871116
      },
      "sign": {
       "avg": 2313972804,
       "count": 11,
       "max": 2346587355,
       "median": 2310525712,
       "min": 2293383112
      },
      "verify": {
       "avg": 39294524,
       "count": 11,
       "max": 39294602,
       "median": 39294515,
       "min": 39294495
      }
     },
     "cycles_total": 2439141605,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-256f",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-256f",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-256f.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 43548,
      "sig_min": 43548,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 7616,
      "sign": 5788,
      "verify": 5936
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24624,
      "total": 26524
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1788334849,
       "count": 2,
       "max": 1788348465,
       "median": 1788334849,
       "min": 1788321233
      },
      "sign": {
       "avg": 23590832402,
       "count": 1,
       "max": 23590832402,
       "median": 23590832402,
       "min": 23590832402
      },
      "verify": {
       "avg": 64913491,
       "count": 1,
       "max": 64913491,
       "median": 64913491,
       "min": 64913491
      }
     },
     "cycles_total": 25444080742,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-256s",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-256s",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-256s.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 24104,
      "sig_min": 24104,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 5716,
      "sign": 4356,
      "verify": 3704
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 24752,
      "total": 26652
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1242464466,
       "count": 2,
       "max": 1242464481,
       "median": 1242464466,
       "min": 1242464450
      },
      "sign": {
       "avg": 23037277573,
       "count": 1,
       "max": 23037277573,
       "median": 23037277573,
       "min": 23037277573
      },
      "verify": {
       "avg": 238557068,
       "count": 1,
       "max": 238557068,
       "median": 238557068,
       "min": 238557068
      }
     },
     "cycles_total": 24518299107,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-384f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-384f",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-384f",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-384f.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 75988,
      "sig_min": 75988,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 12980,
      "sign": 9388,
      "verify": 10224
     },
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25180,
      "total": 27080
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8501784,
       "count": 1,
       "max": 8501784,
       "median": 8501784,
       "min": 8501784
      },
      "sign": {
       "avg": 24975055,
       "count": 1,
       "max": 24975055,
       "median": 24975055,
       "min": 24975055
      },
      "verify": {
       "avg": 9559115,
       "count": 1,
       "max": 9559115,
       "median": 9559115,
       "min": 9559115
      }
     },
     "cycles_total": 43035954,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-384s",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-384s",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-384s.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 61572,
      "sig_min": 61572,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25060,
      "total": 26960
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 3350035117,
       "count": 1,
       "max": 3350035117,
       "median": 3350035117,
       "min": 3350035117
      },
      "sign": {
       "avg": 47007389528,
       "count": 1,
       "max": 47007389528,
       "median": 47007389528,
       "min": 47007389528
      },
      "verify": {
       "avg": 297892246,
       "count": 1,
       "max": 297892246,
       "median": 297892246,
       "min": 297892246
      }
     },
     "cycles_total": 50655316891,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-512f",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "CEDRUSC-512f",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-512f.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 121520,
      "sig_min": 121520,
      "sk": 256,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": null,
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 25212,
      "total": 27112
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 13338356862,
       "count": 1,
       "max": 13338356862,
       "median": 13338356862,
       "min": 13338356862
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_CEDRUSC-512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UFWXT6DHJ56SDI6DD3NJ6JK2PFIXCMXD/",
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-512s",
      "pub_date": "2026-09-20 14:23",
      "spec": "specs/cedrusplusc.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "CEDRUS+C",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus%2Bc.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "CEDRUSC-512s",
     "sizes": {
      "kat_path": "schemes/cedrusplusc/Test_Vectors/KAT_SIG_CEDRUSC-512s.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 98212,
      "sig_min": 98212,
      "sk": 256,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28388,
      "total": 30288
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 3087428,
       "count": 7,
       "max": 3105297,
       "median": 3075876,
       "min": 3075380
      },
      "sign": {
       "avg": 7531017,
       "count": 6,
       "max": 12832448,
       "median": 7264080,
       "min": 4873993
      },
      "verify": {
       "avg": 3237881,
       "count": 6,
       "max": 3254507,
       "median": 3230964,
       "min": 3228194
      }
     },
     "cycles_total": 13856326,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_COMPASS-SIG-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/FACKHS3U2WG66C763VRSC44CEH7NIYHY/",
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-128",
      "pub_date": "2026-09-20 14:20",
      "spec": "specs/COMPASS-SIG.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "COMPASS-SIG",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-SIG.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-SIG-128",
     "sizes": {
      "kat_path": "schemes/COMPASS-SIG/Test_Vectors/KAT_SIG_COMPASS-SIG-128.txt",
      "msg": 56,
      "pk": 1664,
      "sig_max": 2080,
      "sig_min": 2080,
      "sk": 960,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28384,
      "total": 30284
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 11078151,
       "count": 2,
       "max": 11129537,
       "median": 11078151,
       "min": 11026765
      },
      "sign": {
       "avg": 43272523,
       "count": 1,
       "max": 43272523,
       "median": 43272523,
       "min": 43272523
      },
      "verify": {
       "avg": 11239450,
       "count": 1,
       "max": 11239450,
       "median": 11239450,
       "min": 11239450
      }
     },
     "cycles_total": 65590124,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_COMPASS-SIG-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/FACKHS3U2WG66C763VRSC44CEH7NIYHY/",
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-256",
      "pub_date": "2026-09-20 14:20",
      "spec": "specs/COMPASS-SIG.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "COMPASS-SIG",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-SIG.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-SIG-256",
     "sizes": {
      "kat_path": "schemes/COMPASS-SIG/Test_Vectors/KAT_SIG_COMPASS-SIG-256.txt",
      "msg": 56,
      "pk": 3616,
      "sig_max": 4080,
      "sig_min": 4080,
      "sk": 2144,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29912,
      "total": 31812
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8926069,
       "count": 3,
       "max": 8942392,
       "median": 8921536,
       "min": 8914278
      },
      "sign": {
       "avg": 21624941,
       "count": 2,
       "max": 29876468,
       "median": 21624941,
       "min": 13373414
      },
      "verify": {
       "avg": 8959728,
       "count": 2,
       "max": 8975271,
       "median": 8959728,
       "min": 8944184
      }
     },
     "cycles_total": 39510738,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_COMPASS-SIG-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/FACKHS3U2WG66C763VRSC44CEH7NIYHY/",
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-384",
      "pub_date": "2026-09-20 14:20",
      "spec": "specs/COMPASS-SIG.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "COMPASS-SIG",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-SIG.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-SIG-384",
     "sizes": {
      "kat_path": "schemes/COMPASS-SIG/Test_Vectors/KAT_SIG_COMPASS-SIG-384.txt",
      "msg": 56,
      "pk": 5792,
      "sig_max": 7344,
      "sig_min": 7344,
      "sk": 3136,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29588,
      "total": 31488
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 13668232,
       "count": 2,
       "max": 13686930,
       "median": 13668232,
       "min": 13649533
      },
      "sign": {
       "avg": 22296978,
       "count": 2,
       "max": 24977406,
       "median": 22296978,
       "min": 19616551
      },
      "verify": {
       "avg": 13784142,
       "count": 1,
       "max": 13784142,
       "median": 13784142,
       "min": 13784142
      }
     },
     "cycles_total": 49749352,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_COMPASS-SIG-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/FACKHS3U2WG66C763VRSC44CEH7NIYHY/",
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-512",
      "pub_date": "2026-09-20 14:20",
      "spec": "specs/COMPASS-SIG.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "COMPASS-SIG",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/COMPASS-SIG.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "COMPASS-SIG-512",
     "sizes": {
      "kat_path": "schemes/COMPASS-SIG/Test_Vectors/KAT_SIG_COMPASS-SIG-512.txt",
      "msg": 56,
      "pk": 7648,
      "sig_max": 9024,
      "sig_min": 9024,
      "sk": 4608,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 50948,
      "total": 52848
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 3729566,
       "count": 100,
       "max": 12298222,
       "median": 3292036,
       "min": 2005346
      },
      "sign": {
       "avg": 43507147,
       "count": 100,
       "max": 214911522,
       "median": 32839375,
       "min": 9023610
      },
      "verify": {
       "avg": 1111466,
       "count": 100,
       "max": 1111547,
       "median": 1111475,
       "min": 1111394
      }
     },
     "cycles_total": 48348179,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_DARTS128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/ZTVJHAUOCD3ZU4J72AMG3EDEZUDRR52Q/",
      "folder": "DARTS",
      "instance": "DARTS128",
      "pub_date": "2026-09-20 14:18",
      "spec": "specs/DARTS.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specification.pdf",
      "title": "DARTS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DARTS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DARTS128",
     "sizes": {
      "kat_path": "schemes/DARTS/Test_Vectors/KAT_SIG_DARTS128.txt",
      "msg": 56,
      "pk": 1120,
      "sig_max": 1449,
      "sig_min": 1449,
      "sk": 1536,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 31268,
      "sign": 93264,
      "verify": 38080
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 53012,
      "total": 54912
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 4390489,
       "count": 100,
       "max": 19735413,
       "median": 3732646,
       "min": 3732422
      },
      "sign": {
       "avg": 71853515,
       "count": 100,
       "max": 278252315,
       "median": 54949606,
       "min": 15644054
      },
      "verify": {
       "avg": 2514307,
       "count": 100,
       "max": 2532306,
       "median": 2510672,
       "min": 2510416
      }
     },
     "cycles_total": 78758311,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_DARTS256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/ZTVJHAUOCD3ZU4J72AMG3EDEZUDRR52Q/",
      "folder": "DARTS",
      "instance": "DARTS256",
      "pub_date": "2026-09-20 14:18",
      "spec": "specs/DARTS.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specification.pdf",
      "title": "DARTS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DARTS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DARTS256",
     "sizes": {
      "kat_path": "schemes/DARTS/Test_Vectors/KAT_SIG_DARTS256.txt",
      "msg": 56,
      "pk": 2208,
      "sig_max": 2489,
      "sig_min": 2489,
      "sk": 2880,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 53676,
      "sign": 143359,
      "verify": 65232
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 59168,
      "total": 61068
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 7616986,
       "count": 100,
       "max": 7617537,
       "median": 7616982,
       "min": 7616380
      },
      "sign": {
       "avg": 96009897,
       "count": 100,
       "max": 371196412,
       "median": 82477830,
       "min": 30757864
      },
      "verify": {
       "avg": 4666824,
       "count": 100,
       "max": 4687980,
       "median": 4666400,
       "min": 4666129
      }
     },
     "cycles_total": 108293707,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_DARTS512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/ZTVJHAUOCD3ZU4J72AMG3EDEZUDRR52Q/",
      "folder": "DARTS",
      "instance": "DARTS512",
      "pub_date": "2026-09-20 14:18",
      "spec": "specs/DARTS.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specification.pdf",
      "title": "DARTS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DARTS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DARTS512",
     "sizes": {
      "kat_path": "schemes/DARTS/Test_Vectors/KAT_SIG_DARTS512.txt",
      "msg": 56,
      "pk": 4672,
      "sig_max": 5851,
      "sig_min": 5851,
      "sk": 6016,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 107108,
      "sign": 288688,
      "verify": 129908
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 4644,
      "data": 1360,
      "source": "report",
      "text": 80168,
      "total": 86172
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 187373220,
       "count": 10,
       "max": 187446170,
       "median": 187372025,
       "min": 187300106
      },
      "sign": {
       "avg": 41901922,
       "count": 10,
       "max": 167763038,
       "median": 29978972,
       "min": 7705237
      },
      "verify": {
       "avg": 4414115,
       "count": 10,
       "max": 4415060,
       "median": 4414004,
       "min": 4412938
      }
     },
     "cycles_total": 233689257,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Facto-DSA-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/X63HQQDTUFPQQGA4DJAHSAISTNYZUVC6/",
      "folder": "Facto-DSA",
      "instance": "Facto-DSA-128",
      "pub_date": "2026-09-20 14:16",
      "spec": "specs/Facto-DSA.pdf",
      "spec_extra": [],
      "spec_file": "algorithm-specification-facto-dsa.pdf",
      "title": "Facto-DSA",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Facto-DSA.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Facto-DSA-128",
     "sizes": {
      "kat_path": "schemes/Facto-DSA/Test_Vectors/KAT_SIG_Facto-DSA-128.txt",
      "msg": 56,
      "pk": 40040,
      "sig_max": 40,
      "sig_min": 40,
      "sk": 3094,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 1480,
      "sign": 8416,
      "verify": 720
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 95118171,
       "count": 1,
       "max": 95118171,
       "median": 95118171,
       "min": 95118171
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-160F_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160f",
      "source": "spec",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-160F",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-160F",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-160F.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 5964,
      "sig_min": 5964,
      "sk": 40,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 95118171,
       "count": 1,
       "max": 95118171,
       "median": 95118171,
       "min": 95118171
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-160S_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160s",
      "source": "spec",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-160S",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-160S",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-160S.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 4812,
      "sig_min": 4812,
      "sk": 40,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 257717696,
       "count": 1,
       "max": 257717696,
       "median": 257717696,
       "min": 257717696
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-256F_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-256F",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-256F",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-256F.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 15950,
      "sig_min": 15950,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 257717696,
       "count": 1,
       "max": 257717696,
       "median": 257717696,
       "min": 257717696
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-256S_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-256S",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-256S",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-256S.txt",
      "msg": 56,
      "pk": 64,
      "results_path": "results/Galas_Signature/Galas-256S.json",
      "sig_max": 12114,
      "sk": 64,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 652694881,
       "count": 1,
       "max": 652694881,
       "median": 652694881,
       "min": 652694881
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-384F_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-384F",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-384F",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-384F.txt",
      "msg": 56,
      "pk": 96,
      "results_path": "results/Galas_Signature/Galas-384F.json",
      "sig_max": 33384,
      "sk": 96,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 652694881,
       "count": 1,
       "max": 652694881,
       "median": 652694881,
       "min": 652694881
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-384S_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "qemu: fatal: Lockup: can't escalate 3 to HardFault (current priority -1)",
      "status": "run-failed"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-384S",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-384S",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-384S.txt",
      "msg": 56,
      "pk": 96,
      "results_path": "results/Galas_Signature/Galas-384S.json",
      "sig_max": 27784,
      "sk": 96,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1287100570,
       "count": 1,
       "max": 1287100570,
       "median": 1287100570,
       "min": 1287100570
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-512F_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-512F",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-512F",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-512F.txt",
      "msg": 56,
      "pk": 128,
      "results_path": "results/Galas_Signature/Galas-512F.json",
      "sig_max": 59416,
      "sk": 128,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575580,
      "total": 577752
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1287100570,
       "count": 1,
       "max": 1287100570,
       "median": 1287100570,
       "min": 1287100570
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Galas-512S_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3FJV2IP2L5BFKAPR364ISD45Z7UJBJUY/",
      "folder": "Galas_Signature",
      "instance": "Galas-512S",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/Galas_Signature.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Galas Signature Scheme",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Galas%20Signature.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Galas-512S",
     "sizes": {
      "kat_path": "schemes/Galas_Signature/Test_Vectors/KAT_SIG_Galas-512S.txt",
      "msg": 56,
      "pk": 128,
      "results_path": "results/Galas_Signature/Galas-512S.json",
      "sig_max": 49516,
      "sk": 128,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 111632,
      "total": 113532
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 32302878,
       "count": 10,
       "max": 78221350,
       "median": 29188208,
       "min": 9959630
      },
      "sign": {
       "avg": 1075409455,
       "count": 10,
       "max": 1111533113,
       "median": 1072391600,
       "min": 1062054376
      },
      "verify": {
       "avg": 655110622,
       "count": 10,
       "max": 655155539,
       "median": 655112650,
       "min": 655059869
      }
     },
     "cycles_total": 1762822955,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall128f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall128f",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "GreatWall128f",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall128f.txt",
      "msg": 56,
      "pk": 36,
      "sig_max": 3396,
      "sig_min": 3396,
      "sk": 36,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 1120,
      "sign": 77820,
      "verify": 77760
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 110912,
      "total": 112812
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 9959523,
       "count": 1,
       "max": 9959523,
       "median": 9959523,
       "min": 9959523
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall128s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall128s",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall128s",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall128s.txt",
      "msg": 56,
      "pk": 36,
      "sig_max": 2758,
      "sig_min": 2758,
      "sk": 36,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 165760,
      "total": 167660
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 143703103,
       "count": 1,
       "max": 143703103,
       "median": 143703103,
       "min": 143703103
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall192f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall192f",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall192f",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall192f.txt",
      "msg": 56,
      "pk": 50,
      "sig_max": 8012,
      "sig_min": 8012,
      "sk": 50,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 165896,
      "total": 167796
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 143707761,
       "count": 1,
       "max": 143707761,
       "median": 143707761,
       "min": 143707761
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall192s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall192s",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall192s",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall192s.txt",
      "msg": 56,
      "pk": 50,
      "sig_max": 6804,
      "sig_min": 6804,
      "sk": 50,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 201272,
      "total": 203172
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 416832056,
       "count": 1,
       "max": 416832056,
       "median": 416832056,
       "min": 416832056
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall256f",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall256f",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall256f.txt",
      "msg": 56,
      "pk": 66,
      "sig_max": 14260,
      "sig_min": 14260,
      "sk": 66,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 201440,
      "total": 203340
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 416832056,
       "count": 1,
       "max": 416832056,
       "median": 416832056,
       "min": 416832056
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall256s",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall256s",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall256s.txt",
      "msg": 56,
      "pk": 66,
      "sig_max": 12236,
      "sig_min": 12236,
      "sk": 66,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 361052,
      "total": 362952
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 259112548,
       "count": 1,
       "max": 259112548,
       "median": 259112548,
       "min": 259112548
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall512f",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall512f",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall512f.txt",
      "msg": 56,
      "pk": 132,
      "sig_max": 57812,
      "sig_min": 57812,
      "sk": 132,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 362156,
      "total": 364056
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 259113028,
       "count": 1,
       "max": 259113028,
       "median": 259113028,
       "min": 259113028
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_GreatWall512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "qemu: fatal: Lockup: can't escalate 3 to HardFault (current priority -1)",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5IGQ6ZDNGTS7TSTFXE3PFVHHJL7BM2LJ/",
      "folder": "GreatWall",
      "instance": "GreatWall512s",
      "pub_date": "2026-09-20 14:14",
      "spec": "specs/GreatWall.pdf",
      "spec_extra": [
       {
        "file": "Clarification4GreatWall.pdf",
        "href": "specs/GreatWall-clarification4greatwall.pdf"
       }
      ],
      "spec_file": "The GreatWall Signature Scheme.pdf",
      "title": "GreatWall Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/GreatWall.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "GreatWall512s",
     "sizes": {
      "kat_path": "schemes/GreatWall/Test_Vectors/KAT_SIG_GreatWall512s.txt",
      "msg": 56,
      "pk": 132,
      "results_path": "results/GreatWall/GreatWall512s.json",
      "sig_max": 50012,
      "sk": 132,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 432920,
      "total": 435372
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 73331864,
       "count": 9,
       "max": 73344572,
       "median": 73329827,
       "min": 73321808
      },
      "sign": {
       "avg": 1697507334,
       "count": 9,
       "max": 1701331706,
       "median": 1697527009,
       "min": 1694770129
      },
      "verify": {
       "avg": 1534998209,
       "count": 8,
       "max": 1535508029,
       "median": 1535022314,
       "min": 1534537905
      }
     },
     "cycles_total": 3305837407,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-160f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160f",
      "source": "spec",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-160f",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Lynxer-160f",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-160f.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 5801,
      "sig_min": 5801,
      "sk": 40,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 133388,
      "sign": 145364,
      "verify": 145324
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 432920,
      "total": 435372
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 73326643,
       "count": 1,
       "max": 73326643,
       "median": 73326643,
       "min": 73326643
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-160s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160s",
      "source": "spec",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-160s",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-160s",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-160s.txt",
      "msg": 56,
      "pk": 40,
      "sig_max": 4607,
      "sig_min": 4607,
      "sk": 40,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 433352,
      "total": 435804
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 338062972,
       "count": 1,
       "max": 338062972,
       "median": 338062972,
       "min": 338062972
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-256f",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-256f",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-256f.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 15097,
      "sig_min": 15097,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 433352,
      "total": 435804
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 338062970,
       "count": 1,
       "max": 338062970,
       "median": 338062970,
       "min": 338062970
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-256s",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-256s",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-256s.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 12191,
      "sig_min": 12191,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 435104,
      "total": 437556
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1399759857,
       "count": 1,
       "max": 1399759857,
       "median": 1399759857,
       "min": 1399759857
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-384f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-384f",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-384f",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-384f.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 34109,
      "sig_min": 34109,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 435104,
      "total": 437556
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1399761162,
       "count": 1,
       "max": 1399761162,
       "median": 1399761162,
       "min": 1399761162
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-384s",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-384s",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-384s.txt",
      "msg": 56,
      "pk": 96,
      "results_path": "results/Lynxer/Lynxer-384s.json",
      "sig_max": 27495,
      "sk": 96,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 434736,
      "total": 437188
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 4033216824,
       "count": 1,
       "max": 4033216824,
       "median": 4033216824,
       "min": 4033216824
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-512f",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-512f",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-512f.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 61091,
      "sig_min": 61091,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 434736,
      "total": 437188
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 4032268784,
       "count": 1,
       "max": 4032268784,
       "median": 4032268784,
       "min": 4032268784
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Lynxer-512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "timeout"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A3VK2RZD6XCJB5YBKZN2OSDSYMSVFUL6/",
      "folder": "Lynxer",
      "instance": "Lynxer-512s",
      "pub_date": "2026-09-20 14:13",
      "spec": "specs/Lynxer.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Lynxer",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Lynxer.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "Lynxer-512s",
     "sizes": {
      "kat_path": "schemes/Lynxer/Test_Vectors/KAT_SIG_Lynxer-512s.txt",
      "msg": 56,
      "pk": 128,
      "results_path": "results/Lynxer/Lynxer-512s.json",
      "sig_max": 48879,
      "sk": 128,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31972,
      "total": 33872
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 5245244,
       "count": 10,
       "max": 5402890,
       "median": 5197408,
       "min": 5128733
      },
      "sign": {
       "avg": 7002778,
       "count": 10,
       "max": 9091051,
       "median": 6484926,
       "min": 6470976
      },
      "verify": {
       "avg": 5415734,
       "count": 10,
       "max": 5418857,
       "median": 5415378,
       "min": 5415278
      }
     },
     "cycles_total": 17663756,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_OPSsig-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PPO3KFSJJPUVKQEVPCPOP3A3IL2DRHOQ/",
      "folder": "OPS_Digital_Signature_Algorithm",
      "instance": "OPSsig-128",
      "pub_date": "2026-09-20 14:10",
      "spec": "specs/OPS_Digital_Signature_Algorithm.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "OPS Digital Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/OPS%20Digital%20Signature%20Algorithm.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "OPSsig-128",
     "sizes": {
      "kat_path": "schemes/OPS_Digital_Signature_Algorithm/Test_Vectors/reference/OPSsig-128/KAT_SIG_OPSsig-128-reference.txt",
      "msg": 56,
      "pk": 2560,
      "results_path": "results/OPS_Digital_Signature_Algorithm/OPSsig-128.json",
      "sig_max": 4349,
      "sk": 3840,
      "source": "ngcc_results"
     },
     "stack": {
      "keypair": 52000,
      "sign": 98100,
      "verify": 50060
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 32668,
      "total": 34568
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8464126,
       "count": 10,
       "max": 8639529,
       "median": 8448978,
       "min": 8334625
      },
      "sign": {
       "avg": 12532176,
       "count": 10,
       "max": 14522076,
       "median": 12537410,
       "min": 10582126
      },
      "verify": {
       "avg": 8729674,
       "count": 10,
       "max": 8729794,
       "median": 8729693,
       "min": 8729509
      }
     },
     "cycles_total": 29725976,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_OPSsig-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PPO3KFSJJPUVKQEVPCPOP3A3IL2DRHOQ/",
      "folder": "OPS_Digital_Signature_Algorithm",
      "instance": "OPSsig-256",
      "pub_date": "2026-09-20 14:10",
      "spec": "specs/OPS_Digital_Signature_Algorithm.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "OPS Digital Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/OPS%20Digital%20Signature%20Algorithm.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "OPSsig-256",
     "sizes": {
      "kat_path": "schemes/OPS_Digital_Signature_Algorithm/Test_Vectors/reference/OPSsig-256/KAT_SIG_OPSsig-256-reference.txt",
      "msg": 56,
      "pk": 3392,
      "results_path": "results/OPS_Digital_Signature_Algorithm/OPSsig-256.json",
      "sig_max": 5540,
      "sk": 5056,
      "source": "ngcc_results"
     },
     "stack": {
      "keypair": 76576,
      "sign": 152132,
      "verify": 74080
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 35112,
      "total": 37012
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 16884093,
       "count": 10,
       "max": 17020652,
       "median": 16884206,
       "min": 16611262
      },
      "sign": {
       "avg": 31524592,
       "count": 10,
       "max": 42796151,
       "median": 33310560,
       "min": 23963608
      },
      "verify": {
       "avg": 17572613,
       "count": 10,
       "max": 17572842,
       "median": 17572615,
       "min": 17572408
      }
     },
     "cycles_total": 65981298,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_OPSsig-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "",
      "status": "not-checked"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PPO3KFSJJPUVKQEVPCPOP3A3IL2DRHOQ/",
      "folder": "OPS_Digital_Signature_Algorithm",
      "instance": "OPSsig-512",
      "pub_date": "2026-09-20 14:10",
      "spec": "specs/OPS_Digital_Signature_Algorithm.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "OPS Digital Signature Algorithm",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/OPS%20Digital%20Signature%20Algorithm.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "OPSsig-512",
     "sizes": {
      "kat_path": "schemes/OPS_Digital_Signature_Algorithm/Test_Vectors/reference/OPSsig-512/KAT_SIG_OPSsig-512-reference.txt",
      "msg": 56,
      "pk": 6720,
      "results_path": "results/OPS_Digital_Signature_Algorithm/OPSsig-512.json",
      "sig_max": 12021,
      "sk": 9920,
      "source": "ngcc_results"
     },
     "stack": {
      "keypair": 152460,
      "sign": 302756,
      "verify": 145996
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 9544,
      "source": "report",
      "text": 29920,
      "total": 40012
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 2736771,
       "count": 10,
       "max": 2736818,
       "median": 2736780,
       "min": 2736651
      },
      "sign": {
       "avg": 10170476,
       "count": 10,
       "max": 20968190,
       "median": 10227936,
       "min": 5179851
      },
      "verify": {
       "avg": 3523112,
       "count": 10,
       "max": 3523231,
       "median": 3523134,
       "min": 3522877
      }
     },
     "cycles_total": 16430359,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Octarine-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/J32MD6K6AUGKHVUOZX6M4OJHWNPNCLWQ/",
      "folder": "Octarine",
      "instance": "Octarine-128",
      "pub_date": "2026-09-20 14:11",
      "spec": "specs/Octarine.pdf",
      "spec_extra": [],
      "spec_file": "Octarine.pdf",
      "title": "Octarine",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Octarine.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Octarine-128",
     "sizes": {
      "kat_path": "schemes/Octarine/Test_Vectors/KAT_SIG_Octarine-128.txt",
      "msg": 56,
      "pk": 1344,
      "sig_max": 2564,
      "sig_min": 2564,
      "sk": 2432,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 47168,
      "sign": 68456,
      "verify": 68352
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 17736,
      "source": "report",
      "text": 30936,
      "total": 49220
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 5490906,
       "count": 10,
       "max": 5490938,
       "median": 5490898,
       "min": 5490868
      },
      "sign": {
       "avg": 16308351,
       "count": 10,
       "max": 29957847,
       "median": 15190834,
       "min": 10272652
      },
      "verify": {
       "avg": 6912264,
       "count": 10,
       "max": 6912644,
       "median": 6912216,
       "min": 6912057
      }
     },
     "cycles_total": 28711521,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Octarine-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/J32MD6K6AUGKHVUOZX6M4OJHWNPNCLWQ/",
      "folder": "Octarine",
      "instance": "Octarine-256",
      "pub_date": "2026-09-20 14:11",
      "spec": "specs/Octarine.pdf",
      "spec_extra": [],
      "spec_file": "Octarine.pdf",
      "title": "Octarine",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Octarine.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Octarine-256",
     "sizes": {
      "kat_path": "schemes/Octarine/Test_Vectors/KAT_SIG_Octarine-256.txt",
      "msg": 56,
      "pk": 2368,
      "sig_max": 5449,
      "sig_min": 5449,
      "sk": 4608,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 85048,
      "sign": 126512,
      "verify": 114992
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 17736,
      "source": "report",
      "text": 31720,
      "total": 50004
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 14703579,
       "count": 10,
       "max": 14703608,
       "median": 14703605,
       "min": 14703414
      },
      "sign": {
       "avg": 72583670,
       "count": 10,
       "max": 147999987,
       "median": 54586394,
       "min": 26632337
      },
      "verify": {
       "avg": 17903499,
       "count": 10,
       "max": 17904110,
       "median": 17903460,
       "min": 17902980
      }
     },
     "cycles_total": 105190748,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Octarine-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/J32MD6K6AUGKHVUOZX6M4OJHWNPNCLWQ/",
      "folder": "Octarine",
      "instance": "Octarine-512",
      "pub_date": "2026-09-20 14:11",
      "spec": "specs/Octarine.pdf",
      "spec_extra": [],
      "spec_file": "Octarine.pdf",
      "title": "Octarine",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Octarine.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "Octarine-512",
     "sizes": {
      "kat_path": "schemes/Octarine/Test_Vectors/KAT_SIG_Octarine-512.txt",
      "msg": 56,
      "pk": 5184,
      "sig_max": 14713,
      "sig_min": 14713,
      "sk": 11776,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 198548,
      "sign": 287624,
      "verify": 253760
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 30376,
      "total": 32276
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 167075797,
       "count": 9,
       "max": 167075808,
       "median": 167075803,
       "min": 167075767
      },
      "sign": {
       "avg": 3145775354,
       "count": 8,
       "max": 3162566459,
       "median": 3140728876,
       "min": 3134853281
      },
      "verify": {
       "avg": 87920062,
       "count": 8,
       "max": 87947436,
       "median": 87922648,
       "min": 87899097
      }
     },
     "cycles_total": 3400771213,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-128f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-128f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 13670 (shown: benchmarked binary (QEMU testvectors dump))",
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SHAKE-128f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-128f.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 13658,
      "sig_min": 13546,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 3904,
      "sign": 4916,
      "verify": 5896
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 32152,
      "total": 34052
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 5390332108,
       "count": 1,
       "max": 5390332108,
       "median": 5390332108,
       "min": 5390332108
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-128s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-128s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 6258 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SHAKE-128s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-128s.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 6254,
      "sig_min": 6142,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 3492,
      "sign": 4468,
      "verify": 5048
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 30864,
      "total": 32764
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 244522735,
       "count": 6,
       "max": 244522768,
       "median": 244522726,
       "min": 244522713
      },
      "sign": {
       "avg": 4777758536,
       "count": 5,
       "max": 4802777133,
       "median": 4769680562,
       "min": 4767269529
      },
      "verify": {
       "avg": 129139432,
       "count": 5,
       "max": 129227860,
       "median": 129154088,
       "min": 128958751
      }
     },
     "cycles_total": 5151420703,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-192f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-192f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 30766 (shown: benchmarked binary (QEMU testvectors dump))",
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SHAKE-192f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-192f.txt",
      "msg": 56,
      "pk": 48,
      "sig_max": 30746,
      "sig_min": 30482,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 5796,
      "sign": 6764,
      "verify": 9288
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31248,
      "total": 33148
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 9168625483,
       "count": 1,
       "max": 9168625483,
       "median": 9168625483,
       "min": 9168625483
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-192s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-192s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 13332 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SHAKE-192s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-192s.txt",
      "msg": 56,
      "pk": 48,
      "sig_max": 13290,
      "sig_min": 13146,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 4484,
      "sign": 6156,
      "verify": 7304
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31064,
      "total": 32964
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 496173410,
       "count": 3,
       "max": 496173427,
       "median": 496173412,
       "min": 496173391
      },
      "sign": {
       "avg": 9263536224,
       "count": 2,
       "max": 9263605397,
       "median": 9263536224,
       "min": 9263467051
      },
      "verify": {
       "avg": 252755502,
       "count": 2,
       "max": 252756894,
       "median": 252755502,
       "min": 252754110
      }
     },
     "cycles_total": 10012465136,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-256f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 44906 (shown: benchmarked binary (QEMU testvectors dump))",
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SHAKE-256f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-256f.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 44902,
      "sig_min": 44486,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 7004,
      "sign": 10124,
      "verify": 14856
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31320,
      "total": 33220
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 6547264459,
       "count": 1,
       "max": 6547264459,
       "median": 6547264459,
       "min": 6547264459
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-256s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 24618 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SHAKE-256s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-256s.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 24594,
      "sig_min": 24498,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31552,
      "total": 33452
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1087795706,
       "count": 1,
       "max": 1087795706,
       "median": 1087795706,
       "min": 1087795706
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-384f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-384f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 88442 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SHAKE-384f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-384f.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 88298,
      "sig_min": 87194,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31584,
      "total": 33484
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 10700223326,
       "count": 1,
       "max": 10700223326,
       "median": 10700223326,
       "min": 10700223326
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-384s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 54726 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SHAKE-384s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-384s.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 54722,
      "sig_min": 54434,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31624,
      "total": 33524
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 4039808013,
       "count": 1,
       "max": 4039808013,
       "median": 4039808013,
       "min": 4039808013
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-512f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 138454 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SHAKE-512f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-512f.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 138442,
      "sig_min": 137930,
      "sk": 256,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31552,
      "total": 33452
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SHAKE-512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-512s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 98476 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "failed",
     "scheme": "Phoenix-SHAKE-512s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SHAKE-512s.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 98470,
      "sig_min": 98150,
      "sk": 256,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28056,
      "total": 29956
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 36206577,
       "count": 10,
       "max": 36206605,
       "median": 36206566,
       "min": 36206564
      },
      "sign": {
       "avg": 721074344,
       "count": 10,
       "max": 740437683,
       "median": 716504772,
       "min": 706244070
      },
      "verify": {
       "avg": 20173302,
       "count": 10,
       "max": 20182647,
       "median": 20176753,
       "min": 20152627
      }
     },
     "cycles_total": 777454223,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-128f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-128f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 13670 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SM3-128f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-128f.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 13658,
      "sig_min": 13594,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 4556,
      "sign": 4996,
      "verify": 6172
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29372,
      "total": 31272
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 1152185496,
       "count": 2,
       "max": 1152186885,
       "median": 1152185496,
       "min": 1152184108
      },
      "sign": {
       "avg": 14359963669,
       "count": 1,
       "max": 14359963669,
       "median": 14359963669,
       "min": 14359963669
      },
      "verify": {
       "avg": 46484862,
       "count": 1,
       "max": 46484862,
       "median": 46484862,
       "min": 46484862
      }
     },
     "cycles_total": 15558634027,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-128s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-128s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 6258 (shown: benchmarked binary (QEMU testvectors dump))",
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SM3-128s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-128s.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 6254,
      "sig_min": 6174,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 3764,
      "sign": 4548,
      "verify": 5204
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28624,
      "total": 30524
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 96865197,
       "count": 10,
       "max": 96865208,
       "median": 96865201,
       "min": 96865169
      },
      "sign": {
       "avg": 1918834508,
       "count": 10,
       "max": 1949640821,
       "median": 1914864306,
       "min": 1909358967
      },
      "verify": {
       "avg": 50922622,
       "count": 10,
       "max": 50953427,
       "median": 50934184,
       "min": 50886198
      }
     },
     "cycles_total": 2066622327,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-192f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-192f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 30766 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SM3-192f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-192f.txt",
      "msg": 56,
      "pk": 48,
      "sig_max": 30746,
      "sig_min": 30626,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 7116,
      "sign": 6852,
      "verify": 9644
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28996,
      "total": 30896
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 3618287627,
       "count": 1,
       "max": 3618287627,
       "median": 3618287627,
       "min": 3618287627
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-192s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: PK differs; count 0: SK differs; count 0: Sn differs; count 1: PK differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-192s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 13332 (shown: benchmarked binary (QEMU testvectors dump))",
      "official KAT file reports different sizes: sig_max 13338 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SM3-192s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-192s.txt",
      "msg": 56,
      "pk": 48,
      "sig_max": 13314,
      "sig_min": 13026,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 5132,
      "sign": 6244,
      "verify": 7660
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28860,
      "total": 30760
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 191724496,
       "count": 8,
       "max": 191727172,
       "median": 191724912,
       "min": 191720270
      },
      "sign": {
       "avg": 3725466782,
       "count": 7,
       "max": 3879029639,
       "median": 3684240749,
       "min": 3651846204
      },
      "verify": {
       "avg": 97376406,
       "count": 7,
       "max": 97410991,
       "median": 97392747,
       "min": 97307230
      }
     },
     "cycles_total": 4014567684,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-256f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 44906 (shown: benchmarked binary (QEMU testvectors dump))",
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SM3-256f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-256f.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 44902,
      "sig_min": 44678,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 8940,
      "sign": 10204,
      "verify": 15164
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29128,
      "total": 31028
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 2524703071,
       "count": 1,
       "max": 2524703071,
       "median": 2524703071,
       "min": 2524703071
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: PK differs; count 0: SK differs; count 0: Sn differs; count 1: PK differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-256s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 24618 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SM3-256s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-256s.txt",
      "msg": 56,
      "pk": 64,
      "sig_max": 24594,
      "sig_min": 24274,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 6964,
      "sign": 7468,
      "verify": 9900
     },
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29492,
      "total": 31392
     },
     "completed_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "cycles": {
      "keypair": {
       "avg": 406241657,
       "count": 3,
       "max": 406241689,
       "median": 406241645,
       "min": 406241638
      },
      "sign": {
       "avg": 12318526801,
       "count": 2,
       "max": 12333077897,
       "median": 12318526801,
       "min": 12303975705
      },
      "verify": {
       "avg": 220092910,
       "count": 2,
       "max": 220171287,
       "median": 220092910,
       "min": 220014532
      }
     },
     "cycles_total": 12944861368,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-384f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-384f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 88442 (shown: benchmarked binary (QEMU testvectors dump))",
      "official KAT file reports different sizes: sig_max 88058 (shown: benchmarked binary (QEMU testvectors dump))",
      "timeout: no '#' within the capture limit; completed keypair, sign, verify"
     ],
     "run_status": "measured",
     "scheme": "Phoenix-SM3-384f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-384f.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 87962,
      "sig_min": 86666,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair, sign, verify",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29504,
      "total": 31404
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 3989686726,
       "count": 1,
       "max": 3989686726,
       "median": 3989686726,
       "min": 3989686726
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-384s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 54726 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SM3-384s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-384s.txt",
      "msg": 56,
      "pk": 96,
      "sig_max": 54722,
      "sig_min": 54194,
      "sk": 192,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29584,
      "total": 31484
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 809693749,
       "count": 1,
       "max": 809693749,
       "median": 809693749,
       "min": 809693749
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-512f",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 138454 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SM3-512f",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-512f.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 138442,
      "sig_min": 138122,
      "sk": 256,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29488,
      "total": 31388
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 8433222909,
       "count": 1,
       "max": 8433222909,
       "median": 8433222909,
       "min": 8433222909
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Phoenix-SM3-512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/M3XAI6VRCGWEXYF5YOYXWH25JFDYAWVZ/",
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-512s",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/Phoenix.pdf",
      "spec_extra": [
       {
        "file": "Phoenix specifications Addition.pdf",
        "href": "specs/Phoenix-phoenix-specifications-addition.pdf"
       }
      ],
      "spec_file": "Phoenix specifications.pdf",
      "title": "Phoenix",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Phoenix.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 98476 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "Phoenix-SM3-512s",
     "sizes": {
      "kat_path": "schemes/Phoenix/Test_Vectors/KAT_SIG_Phoenix-SM3-512s.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 98470,
      "sig_min": 97574,
      "sk": 256,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26644,
      "total": 28556
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 873376,
       "count": 10,
       "max": 875243,
       "median": 873858,
       "min": 870810
      },
      "sign": {
       "avg": 60671509,
       "count": 10,
       "max": 60697534,
       "median": 60669538,
       "min": 60652255
      },
      "verify": {
       "avg": 24891160,
       "count": 10,
       "max": 24901535,
       "median": 24890647,
       "min": 24884073
      }
     },
     "cycles_total": 86436045,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_QingLuan-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UAEOBUIJPNMH5ZQ4OCYNAGCGAOYZGEAP/",
      "folder": "QingLuan",
      "instance": "QingLuan-128",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/QingLuan.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Qing Luan",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QingLuan.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "QingLuan-128",
     "sizes": {
      "kat_path": "schemes/QingLuan/Test_Vectors/KAT_SIG_QingLuan-128.txt",
      "msg": 56,
      "pk": 77,
      "sig_max": 18720,
      "sig_min": 18720,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 1384,
      "sign": 2280,
      "verify": 1892
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26968,
      "total": 28880
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 4392220,
       "count": 1,
       "max": 4392220,
       "median": 4392220,
       "min": 4392220
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_QingLuan-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UAEOBUIJPNMH5ZQ4OCYNAGCGAOYZGEAP/",
      "folder": "QingLuan",
      "instance": "QingLuan-256",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/QingLuan.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Qing Luan",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QingLuan.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "QingLuan-256",
     "sizes": {
      "kat_path": "schemes/QingLuan/Test_Vectors/KAT_SIG_QingLuan-256.txt",
      "msg": 56,
      "pk": 153,
      "sig_max": 74248,
      "sig_min": 74248,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26700,
      "total": 28612
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 9629512,
       "count": 1,
       "max": 9629512,
       "median": 9629512,
       "min": 9629512
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_QingLuan-384_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UAEOBUIJPNMH5ZQ4OCYNAGCGAOYZGEAP/",
      "folder": "QingLuan",
      "instance": "QingLuan-384",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/QingLuan.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Qing Luan",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QingLuan.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "QingLuan-384",
     "sizes": {
      "kat_path": "schemes/QingLuan/Test_Vectors/KAT_SIG_QingLuan-384.txt",
      "msg": 56,
      "pk": 227,
      "sig_max": 164940,
      "sig_min": 164940,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26748,
      "total": 28660
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 21149312,
       "count": 1,
       "max": 21149312,
       "median": 21149312,
       "min": 21149312
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_QingLuan-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UAEOBUIJPNMH5ZQ4OCYNAGCGAOYZGEAP/",
      "folder": "QingLuan",
      "instance": "QingLuan-512",
      "pub_date": "2026-09-20 14:08",
      "spec": "specs/QingLuan.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Qing Luan",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QingLuan.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "QingLuan-512",
     "sizes": {
      "kat_path": "schemes/QingLuan/Test_Vectors/KAT_SIG_QingLuan-512.txt",
      "msg": 56,
      "pk": 302,
      "sig_max": 292816,
      "sig_min": 292816,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137252,
      "total": 139704
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 45888924,
       "count": 1,
       "max": 45888924,
       "median": 45888924,
       "min": 45888924
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-160f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160f",
      "source": "spec",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-160f",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "ReSolveD-alpha-160f",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-160f.txt",
      "msg": 56,
      "pk": 121,
      "sig_max": 6851,
      "sig_min": 6851,
      "sk": 40,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137252,
      "total": 139704
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 45888272,
       "count": 1,
       "max": 45888272,
       "median": 45888272,
       "min": 45888272
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-160s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160s",
      "source": "spec",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-160s",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "ReSolveD-alpha-160s",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-160s.txt",
      "msg": 56,
      "pk": 121,
      "sig_max": 5307,
      "sig_min": 5307,
      "sk": 40,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137284,
      "total": 139736
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-256f",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "ReSolveD-alpha-256f",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-256f.txt",
      "msg": 56,
      "pk": 194,
      "sig_max": 17932,
      "sig_min": 17932,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137284,
      "total": 139736
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-256s",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "ReSolveD-alpha-256s",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-256s.txt",
      "msg": 56,
      "pk": 194,
      "sig_max": 13973,
      "sig_min": 13973,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137276,
      "total": 139728
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-384f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-384f",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "ReSolveD-alpha-384f",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-384f.txt",
      "msg": 56,
      "pk": 288,
      "sig_max": 40469,
      "sig_min": 40469,
      "sk": 96,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137276,
      "total": 139728
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 384,
      "claim": null,
      "label": "384",
      "param_set": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-384s",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "ReSolveD-alpha-384s",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-384s.txt",
      "msg": 56,
      "pk": 288,
      "results_path": "results/ReSolveD-alpha/ReSolveD-alpha-384s.json",
      "sig_max": 31575,
      "sk": 96,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137292,
      "total": 139744
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-512f",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "ReSolveD-alpha-512f",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-512f.txt",
      "msg": 56,
      "pk": 385,
      "sig_max": 72611,
      "sig_min": 72611,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137284,
      "total": 139736
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ReSolveD-alpha-512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "qemu: fatal: Lockup: can't escalate 3 to HardFault (current priority -1)",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/HRQJE3Z4ZZYQD6SSCLYV45QWSGLIX4YR/",
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-512s",
      "pub_date": "2026-09-20 14:07",
      "spec": "specs/ReSolveD-alpha.pdf",
      "spec_extra": [
       {
        "file": "Algorithm specifications Addition.pdf",
        "href": "specs/ReSolveD-alpha-algorithm-specifications-addition.pdf"
       }
      ],
      "spec_file": "Algorithm specifications.pdf",
      "title": "ReSolveD-ɑ",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/ReSolveD-alpha.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "ReSolveD-alpha-512s",
     "sizes": {
      "kat_path": "schemes/ReSolveD-alpha/Test_Vectors/KAT_SIG_ReSolveD-alpha-512s.txt",
      "msg": 56,
      "pk": 385,
      "results_path": "results/ReSolveD-alpha/ReSolveD-alpha-512s.json",
      "sig_max": 56239,
      "sk": 128,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "link-overflow",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Sigurd128_REF_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A5LWDR4WYSLBQA55PEDVM5GTWL4SWJFH/",
      "folder": "Sigurd",
      "instance": "Sigurd128_REF",
      "pub_date": "2026-09-20 14:05",
      "spec": "specs/Sigurd.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Sigurd",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Sigurd.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 62868 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "failed",
     "scheme": "Sigurd128_REF",
     "sizes": {
      "kat_path": "schemes/Sigurd/Test_Vectors/KAT_SIG_Sigurd128_REF.txt",
      "msg": 56,
      "pk": 112,
      "sig_max": 26004,
      "sig_min": 24724,
      "sk": 80,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "link failed: image does not fit the 640 KB SRAM (RAM overflowed by 71,348 bytes); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "link-overflow",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Sigurd256_REF_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "only 1/10 counts produced",
      "status": "mismatch"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A5LWDR4WYSLBQA55PEDVM5GTWL4SWJFH/",
      "folder": "Sigurd",
      "instance": "Sigurd256_REF",
      "pub_date": "2026-09-20 14:05",
      "spec": "specs/Sigurd.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Sigurd",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Sigurd.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 137412 (shown: benchmarked binary (QEMU testvectors dump))",
      "official KAT file reports different sizes: sig_max 75524 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "failed",
     "scheme": "Sigurd256_REF",
     "sizes": {
      "kat_path": "schemes/Sigurd/Test_Vectors/KAT_SIG_Sigurd256_REF.txt",
      "msg": 56,
      "pk": 212,
      "sig_max": 73988,
      "sig_min": 73988,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "link failed: image does not fit the 640 KB SRAM (RAM overflowed by 137,820 bytes); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": null,
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "link-overflow",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_Sigurd512_REF_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/A5LWDR4WYSLBQA55PEDVM5GTWL4SWJFH/",
      "folder": "Sigurd",
      "instance": "Sigurd512_REF",
      "pub_date": "2026-09-20 14:05",
      "spec": "specs/Sigurd.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Sigurd",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Sigurd.zip"
     },
     "notes": [
      "official KAT file reports different sizes: sig_max 286148 (shown: host build of the reference code)"
     ],
     "run_status": "failed",
     "scheme": "Sigurd512_REF",
     "sizes": {
      "kat_path": "schemes/Sigurd/Test_Vectors/KAT_SIG_Sigurd512_REF.txt",
      "msg": 56,
      "pk": 435,
      "results_path": "results/Sigurd/Sigurd512_REF.json",
      "sig_max": 494532,
      "sk": 256,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "link failed: image does not fit the 640 KB SRAM (RAM overflowed by 1,061,584 bytes); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39260,
      "total": 41160
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 65520018,
       "count": 1,
       "max": 65520018,
       "median": 65520018,
       "min": 65520018
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_TRINE-128-ShortSig_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PHFOUHYOCTA42ALMCBKHF5JLD2HQGVXV/",
      "folder": "TRINE",
      "instance": "TRINE-128-ShortSig",
      "pub_date": "2026-09-20 14:00",
      "spec": "specs/TRINE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TRINE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRINE.zip"
     },
     "notes": [
      "host build of the reference code reports different sizes: pk 16004, sig_max 3156 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "TRINE-128-ShortSig",
     "sizes": {
      "kat_path": "schemes/TRINE/Test_Vectors/KAT_SIG_TRINE-128-ShortSig.txt",
      "msg": 56,
      "pk": 63920,
      "sig_max": 1652,
      "sig_min": 1652,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39124,
      "total": 41024
     },
     "completed_ops": [],
     "cycles": {},
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_TRINE-128-balanced_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PHFOUHYOCTA42ALMCBKHF5JLD2HQGVXV/",
      "folder": "TRINE",
      "instance": "TRINE-128-balanced",
      "pub_date": "2026-09-20 14:00",
      "spec": "specs/TRINE.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TRINE",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRINE.zip"
     },
     "notes": [],
     "run_status": "failed",
     "scheme": "TRINE-128-balanced",
     "sizes": {
      "kat_path": "schemes/TRINE/Test_Vectors/KAT_SIG_TRINE-128-Balanced.txt",
      "msg": 56,
      "pk": 16004,
      "sig_max": 3156,
      "sig_min": 3156,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout: no '#' within the capture limit; completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 4452,
      "data": 1384,
      "source": "report",
      "text": 35576,
      "total": 41412
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 63947231,
       "count": 10,
       "max": 63949763,
       "median": 63948029,
       "min": 63943944
      },
      "sign": {
       "avg": 85191075,
       "count": 10,
       "max": 85193310,
       "median": 85191894,
       "min": 85187958
      },
      "verify": {
       "avg": 71587964,
       "count": 10,
       "max": 71590466,
       "median": 71588784,
       "min": 71584771
      }
     },
     "cycles_total": 220726270,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_TSUOV_128_ref",
     "impl": "ref",
     "kat": {
      "caveat": "the official KAT file uses lowercase keys, which kat_check.py does not parse; the recorded 'match' compared nothing",
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BP4QW5XTWWAJOCTHWK64Z6L3LTCXEWIA/",
      "folder": "TSUOV",
      "instance": "TSUOV_128",
      "pub_date": "2026-09-20 13:59",
      "spec": "specs/TSUOV.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TSUOV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TSUOV.zip"
     },
     "notes": [
      "official KAT file reports different sizes: pk 1968 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "measured",
     "scheme": "TSUOV_128",
     "sizes": {
      "kat_path": "schemes/TSUOV/Test_Vectors/KAT_SIG_TSUOV-128.txt",
      "msg": 56,
      "pk": 779,
      "sig_max": 896,
      "sig_min": 896,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 16040,
      "sign": 62832,
      "verify": 22256
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 11948,
      "data": 1384,
      "source": "report",
      "text": 34844,
      "total": 48176
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 444985151,
       "count": 1,
       "max": 444985151,
       "median": 444985151,
       "min": 444985151
      },
      "sign": {
       "avg": 738385348,
       "count": 1,
       "max": 738385348,
       "median": 738385348,
       "min": 738385348
      },
      "verify": {
       "avg": 610211467,
       "count": 1,
       "max": 610211467,
       "median": 610211467,
       "min": 610211467
      }
     },
     "cycles_total": 1793581966,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_TSUOV_256_ref",
     "impl": "ref",
     "kat": {
      "caveat": "the official KAT file uses lowercase keys, which kat_check.py does not parse; the recorded 'match' compared nothing",
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BP4QW5XTWWAJOCTHWK64Z6L3LTCXEWIA/",
      "folder": "TSUOV",
      "instance": "TSUOV_256",
      "pub_date": "2026-09-20 13:59",
      "spec": "specs/TSUOV.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TSUOV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TSUOV.zip"
     },
     "notes": [
      "official KAT file reports different sizes: pk 5732 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "measured",
     "scheme": "TSUOV_256",
     "sizes": {
      "kat_path": "schemes/TSUOV/Test_Vectors/KAT_SIG_TSUOV-256.txt",
      "msg": 56,
      "pk": 2170,
      "sig_max": 2412,
      "sig_min": 2412,
      "sk": 64,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 56396,
      "sign": 84776,
      "verify": 79732
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 126116,
      "data": 1384,
      "source": "report",
      "text": 34892,
      "total": 162392
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 7757573369,
       "count": 1,
       "max": 7757573369,
       "median": 7757573369,
       "min": 7757573369
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "timeout",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_TSUOV_512_ref",
     "impl": "ref",
     "kat": {
      "caveat": "the official KAT file uses lowercase keys, which kat_check.py does not parse; the recorded 'match' compared nothing",
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BP4QW5XTWWAJOCTHWK64Z6L3LTCXEWIA/",
      "folder": "TSUOV",
      "instance": "TSUOV_512",
      "pub_date": "2026-09-20 13:59",
      "spec": "specs/TSUOV.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "TSUOV",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TSUOV.zip"
     },
     "notes": [
      "official KAT file reports different sizes: pk 3974, sk 48, sig_max 1494 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
     "scheme": "TSUOV_512",
     "sizes": {
      "kat_path": "schemes/TSUOV/Test_Vectors/KAT_SIG_TSUOV-512.txt",
      "msg": 56,
      "pk": 21319,
      "sig_max": 2939,
      "sig_min": 2939,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 33444,
      "total": 35748
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 7000482,
       "count": 10,
       "max": 7000517,
       "median": 7000478,
       "min": 7000368
      },
      "sign": {
       "avg": 29138598,
       "count": 10,
       "max": 78940454,
       "median": 15694846,
       "min": 11480167
      },
      "verify": {
       "avg": 7448162,
       "count": 10,
       "max": 7448382,
       "median": 7448172,
       "min": 7447853
      }
     },
     "cycles_total": 43587242,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_lwrdsa128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WOOBB3WCRHGVXKSTYQBTVMTW6HKPMX2U/",
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa128",
      "pub_date": "2026-09-20 14:12",
      "spec": "specs/MORNING-ATLAS.pdf",
      "spec_extra": [],
      "spec_file": "DSA_ATLAS_Specification.pdf",
      "title": "MORNING-ATLAS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-ATLAS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwrdsa128",
     "sizes": {
      "kat_path": "schemes/MORNING-ATLAS/Test_Vectors/KAT_SIG_lwrdsa128.txt",
      "msg": 56,
      "pk": 1328,
      "sig_max": 2209,
      "sig_min": 2137,
      "sk": 2128,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 55700,
      "sign": 102940,
      "verify": 61892
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 33364,
      "total": 35668
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 16585881,
       "count": 10,
       "max": 16585898,
       "median": 16585896,
       "min": 16585747
      },
      "sign": {
       "avg": 40637430,
       "count": 10,
       "max": 61097998,
       "median": 38651511,
       "min": 25766906
      },
      "verify": {
       "avg": 17379323,
       "count": 10,
       "max": 17379699,
       "median": 17379408,
       "min": 17378693
      }
     },
     "cycles_total": 74602634,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_lwrdsa192_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 192,
      "claim": null,
      "label": "192",
      "param_set": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WOOBB3WCRHGVXKSTYQBTVMTW6HKPMX2U/",
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa192",
      "pub_date": "2026-09-20 14:12",
      "spec": "specs/MORNING-ATLAS.pdf",
      "spec_extra": [],
      "spec_file": "DSA_ATLAS_Specification.pdf",
      "title": "MORNING-ATLAS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-ATLAS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwrdsa192",
     "sizes": {
      "kat_path": "schemes/MORNING-ATLAS/Test_Vectors/KAT_SIG_lwrdsa192.txt",
      "msg": 56,
      "pk": 2112,
      "sig_max": 3493,
      "sig_min": 3421,
      "sk": 3152,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 104852,
      "sign": 174620,
      "verify": 113092
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 30480,
      "total": 32784
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 11837055,
       "count": 10,
       "max": 11837390,
       "median": 11837146,
       "min": 11836458
      },
      "sign": {
       "avg": 34940925,
       "count": 10,
       "max": 52165228,
       "median": 32297738,
       "min": 22366066
      },
      "verify": {
       "avg": 12791817,
       "count": 10,
       "max": 12791981,
       "median": 12791822,
       "min": 12791693
      }
     },
     "cycles_total": 59569797,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_lwrdsa256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WOOBB3WCRHGVXKSTYQBTVMTW6HKPMX2U/",
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa256",
      "pub_date": "2026-09-20 14:12",
      "spec": "specs/MORNING-ATLAS.pdf",
      "spec_extra": [],
      "spec_file": "DSA_ATLAS_Specification.pdf",
      "title": "MORNING-ATLAS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-ATLAS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwrdsa256",
     "sizes": {
      "kat_path": "schemes/MORNING-ATLAS/Test_Vectors/KAT_SIG_lwrdsa256.txt",
      "msg": 56,
      "pk": 2848,
      "sig_max": 4784,
      "sig_min": 4712,
      "sk": 4016,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 109980,
      "sign": 199204,
      "verify": 121292
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 35520,
      "total": 37824
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 83694157,
       "count": 10,
       "max": 83694917,
       "median": 83694172,
       "min": 83693390
      },
      "sign": {
       "avg": 229665145,
       "count": 10,
       "max": 482517279,
       "median": 190857728,
       "min": 190562864
      },
      "verify": {
       "avg": 93570334,
       "count": 10,
       "max": 93570640,
       "median": 93570318,
       "min": 93570151
      }
     },
     "cycles_total": 406929636,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_lwrdsa512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/WOOBB3WCRHGVXKSTYQBTVMTW6HKPMX2U/",
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa512",
      "pub_date": "2026-09-20 14:12",
      "spec": "specs/MORNING-ATLAS.pdf",
      "spec_extra": [],
      "spec_file": "DSA_ATLAS_Specification.pdf",
      "title": "MORNING-ATLAS",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-ATLAS.zip"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "lwrdsa512",
     "sizes": {
      "kat_path": "schemes/MORNING-ATLAS/Test_Vectors/KAT_SIG_lwrdsa512.txt",
      "msg": 56,
      "pk": 6688,
      "sig_max": 10209,
      "sig_min": 10137,
      "sk": 7920,
      "source": "kat_raw"
     },
     "stack": {
      "keypair": 251284,
      "sign": 429492,
      "verify": 273748
     },
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 39564,
      "data": 1480,
      "source": "report",
      "text": 82988,
      "total": 124032
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22283,
       "count": 1,
       "max": 22283,
       "median": 22283,
       "min": 22283
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_d3_128f_loose_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_d3_128f_loose",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_d3_128f_loose",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_d3_128f_loose.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 6724,
      "sig_min": 6724,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 58012,
      "data": 1504,
      "source": "report",
      "text": 103844,
      "total": 163360
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22279,
       "count": 1,
       "max": 22279,
       "median": 22279,
       "min": 22279
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_d3_128f_tight_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_d3_128f_tight",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_d3_128f_tight",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_d3_128f_tight.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 11864,
      "sig_min": 11864,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 39564,
      "data": 1480,
      "source": "report",
      "text": 82988,
      "total": 124032
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22283,
       "count": 1,
       "max": 22283,
       "median": 22283,
       "min": 22283
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_d3_128s_loose_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_d3_128s_loose",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_d3_128s_loose",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_d3_128s_loose.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 5056,
      "sig_min": 5056,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 58012,
      "data": 1504,
      "source": "report",
      "text": 103844,
      "total": 163360
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22279,
       "count": 1,
       "max": 22279,
       "median": 22279,
       "min": 22279
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_d3_128s_tight_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "only 1/10 counts produced",
      "status": "mismatch"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_d3_128s_tight",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_d3_128s_tight",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_d3_128s_tight.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 9176,
      "sig_min": 9176,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 8804,
      "data": 1480,
      "source": "report",
      "text": 73452,
      "total": 83736
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22319,
       "count": 1,
       "max": 22319,
       "median": 22319,
       "min": 22319
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_em_d2_128f_loose_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128f_loose",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_em_d2_128f_loose",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_em_d2_128f_loose.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 4932,
      "sig_min": 4932,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 12900,
      "data": 1504,
      "source": "report",
      "text": 84908,
      "total": 99312
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22313,
       "count": 1,
       "max": 22313,
       "median": 22313,
       "min": 22313
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_em_d2_128f_tight_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128f_tight",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_em_d2_128f_tight",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_em_d2_128f_tight.txt",
      "msg": 56,
      "pk": 32,
      "results_path": "results/Chinith/sm4th_em_d2_128f_tight.json",
      "sig_max": 9450,
      "sk": 32,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 8804,
      "data": 1480,
      "source": "report",
      "text": 73452,
      "total": 83736
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22319,
       "count": 1,
       "max": 22319,
       "median": 22319,
       "min": 22319
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_em_d2_128s_loose_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128s_loose",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_em_d2_128s_loose",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_em_d2_128s_loose.txt",
      "msg": 56,
      "pk": 32,
      "sig_max": 3818,
      "sig_min": 3818,
      "sk": 32,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 12900,
      "data": 1504,
      "source": "report",
      "text": 84908,
      "total": 99312
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22313,
       "count": 1,
       "max": 22313,
       "median": 22313,
       "min": 22313
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sm4th_em_d2_128s_tight_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 128,
      "claim": null,
      "label": "128",
      "param_set": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128s_tight",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sm4th_em_d2_128s_tight",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_sm4th_em_d2_128s_tight.txt",
      "msg": 56,
      "pk": 32,
      "results_path": "results/Chinith/sm4th_em_d2_128s_tight.json",
      "sig_max": 7556,
      "sk": 32,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81560,
      "total": 216092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 3438763,
       "count": 1,
       "max": 3438763,
       "median": 3438763,
       "min": 3438763
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sydo_160f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160f",
      "source": "spec",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F43FXLI3CJE33FWEIS6NUFNDL4VVJUUL/",
      "folder": "SYDO",
      "instance": "sydo_160f",
      "pub_date": "2026-09-20 14:01",
      "spec": "specs/SYDO.pdf",
      "spec_extra": [
       {
        "file": "2-Algorithm specifications-Appendix-B.pdf",
        "href": "specs/SYDO-2-algorithm-specifications-appendix-b.pdf"
       }
      ],
      "spec_file": "2-Algorithm specifications.pdf",
      "title": "SYDO",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SYDO.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sydo_160f",
     "sizes": {
      "kat_path": "schemes/SYDO/Test_Vectors/KAT_SIG_sydo_160f.txt",
      "msg": 56,
      "pk": 80,
      "sig_max": 6724,
      "sig_min": 6724,
      "sk": 174,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81560,
      "total": 216092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 3438684,
       "count": 1,
       "max": 3438684,
       "median": 3438684,
       "min": 3438684
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sydo_160s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
      "label": "128",
      "param_set": "160s",
      "source": "spec",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F43FXLI3CJE33FWEIS6NUFNDL4VVJUUL/",
      "folder": "SYDO",
      "instance": "sydo_160s",
      "pub_date": "2026-09-20 14:01",
      "spec": "specs/SYDO.pdf",
      "spec_extra": [
       {
        "file": "2-Algorithm specifications-Appendix-B.pdf",
        "href": "specs/SYDO-2-algorithm-specifications-appendix-b.pdf"
       }
      ],
      "spec_file": "2-Algorithm specifications.pdf",
      "title": "SYDO",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SYDO.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sydo_160s",
     "sizes": {
      "kat_path": "schemes/SYDO/Test_Vectors/KAT_SIG_sydo_160s.txt",
      "msg": 56,
      "pk": 80,
      "sig_max": 5428,
      "sig_min": 5428,
      "sk": 174,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81560,
      "total": 216092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 5686140,
       "count": 1,
       "max": 5686140,
       "median": 5686140,
       "min": 5686140
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sydo_256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F43FXLI3CJE33FWEIS6NUFNDL4VVJUUL/",
      "folder": "SYDO",
      "instance": "sydo_256f",
      "pub_date": "2026-09-20 14:01",
      "spec": "specs/SYDO.pdf",
      "spec_extra": [
       {
        "file": "2-Algorithm specifications-Appendix-B.pdf",
        "href": "specs/SYDO-2-algorithm-specifications-appendix-b.pdf"
       }
      ],
      "spec_file": "2-Algorithm specifications.pdf",
      "title": "SYDO",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SYDO.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sydo_256f",
     "sizes": {
      "kat_path": "schemes/SYDO/Test_Vectors/KAT_SIG_sydo_256f.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 17604,
      "sig_min": 17604,
      "sk": 278,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81560,
      "total": 216092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 5686064,
       "count": 1,
       "max": 5686064,
       "median": 5686064,
       "min": 5686064
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sydo_256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F43FXLI3CJE33FWEIS6NUFNDL4VVJUUL/",
      "folder": "SYDO",
      "instance": "sydo_256s",
      "pub_date": "2026-09-20 14:01",
      "spec": "specs/SYDO.pdf",
      "spec_extra": [
       {
        "file": "2-Algorithm specifications-Appendix-B.pdf",
        "href": "specs/SYDO-2-algorithm-specifications-appendix-b.pdf"
       }
      ],
      "spec_file": "2-Algorithm specifications.pdf",
      "title": "SYDO",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SYDO.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sydo_256s",
     "sizes": {
      "kat_path": "schemes/SYDO/Test_Vectors/KAT_SIG_sydo_256s.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 14444,
      "sig_min": 14444,
      "sk": 278,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81560,
      "total": 216092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 2547369,
       "count": 1,
       "max": 2547369,
       "median": 2547369,
       "min": 2547369
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sydo_512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F43FXLI3CJE33FWEIS6NUFNDL4VVJUUL/",
      "folder": "SYDO",
      "instance": "sydo_512f",
      "pub_date": "2026-09-20 14:01",
      "spec": "specs/SYDO.pdf",
      "spec_extra": [
       {
        "file": "2-Algorithm specifications-Appendix-B.pdf",
        "href": "specs/SYDO-2-algorithm-specifications-appendix-b.pdf"
       }
      ],
      "spec_file": "2-Algorithm specifications.pdf",
      "title": "SYDO",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SYDO.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sydo_512f",
     "sizes": {
      "kat_path": "schemes/SYDO/Test_Vectors/KAT_SIG_sydo_512f.txt",
      "msg": 56,
      "pk": 246,
      "sig_max": 67716,
      "sig_min": 67716,
      "sk": 534,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81560,
      "total": 216092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 2539024,
       "count": 1,
       "max": 2539024,
       "median": 2539024,
       "min": 2539024
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_sydo_512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F43FXLI3CJE33FWEIS6NUFNDL4VVJUUL/",
      "folder": "SYDO",
      "instance": "sydo_512s",
      "pub_date": "2026-09-20 14:01",
      "spec": "specs/SYDO.pdf",
      "spec_extra": [
       {
        "file": "2-Algorithm specifications-Appendix-B.pdf",
        "href": "specs/SYDO-2-algorithm-specifications-appendix-b.pdf"
       }
      ],
      "spec_file": "2-Algorithm specifications.pdf",
      "title": "SYDO",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SYDO.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "sydo_512s",
     "sizes": {
      "kat_path": "schemes/SYDO/Test_Vectors/KAT_SIG_sydo_512s.txt",
      "msg": 56,
      "pk": 246,
      "results_path": "results/SYDO/sydo_512s.json",
      "sig_max": 56672,
      "sk": 534,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 16996,
      "data": 1448,
      "source": "report",
      "text": 135176,
      "total": 153620
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 153692,
       "count": 1,
       "max": 153692,
       "median": 153692,
       "min": 153692
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ublockith_d3_256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "ublockith_d3_256f",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "ublockith_d3_256f",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_ublockith_d3_256f.txt",
      "msg": 56,
      "pk": 64,
      "results_path": "results/Chinith/ublockith_d3_256f.json",
      "sig_max": 31556,
      "sk": 64,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 16988,
      "data": 1448,
      "source": "report",
      "text": 132776,
      "total": 151212
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 153692,
       "count": 1,
       "max": 153692,
       "median": 153692,
       "min": 153692
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ublockith_d3_256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "ublockith_d3_256s",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "ublockith_d3_256s",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_ublockith_d3_256s.txt",
      "msg": 56,
      "pk": 64,
      "results_path": "results/Chinith/ublockith_d3_256s.json",
      "sig_max": 24144,
      "sk": 64,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 16996,
      "data": 1448,
      "source": "report",
      "text": 134920,
      "total": 153364
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 153777,
       "count": 1,
       "max": 153777,
       "median": 153777,
       "min": 153777
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ublockith_em_d3_256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "ublockith_em_d3_256f",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "ublockith_em_d3_256f",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_ublockith_em_d3_256f.txt",
      "msg": 56,
      "pk": 64,
      "results_path": "results/Chinith/ublockith_em_d3_256f.json",
      "sig_max": 25028,
      "sk": 64,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 16996,
      "data": 1448,
      "source": "report",
      "text": 134920,
      "total": 153364
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 153777,
       "count": 1,
       "max": 153777,
       "median": 153777,
       "min": 153777
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_ublockith_em_d3_256s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 256,
      "claim": null,
      "label": "256",
      "param_set": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "ublockith_em_d3_256s",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "ublockith_em_d3_256s",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_ublockith_em_d3_256s.txt",
      "msg": 56,
      "pk": 64,
      "results_path": "results/Chinith/ublockith_em_d3_256s.json",
      "sig_max": 19056,
      "sk": 64,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 8804,
      "data": 1448,
      "source": "report",
      "text": 177840,
      "total": 188092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 44756,
       "count": 1,
       "max": 44756,
       "median": 44756,
       "min": 44756
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_vistrutith_d3_512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "vistrutith_d3_512f",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "vistrutith_d3_512f",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_vistrutith_d3_512f.txt",
      "msg": 56,
      "pk": 128,
      "sig_max": 106788,
      "sig_min": 106788,
      "sk": 128,
      "source": "kat_raw"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 8804,
      "data": 1448,
      "source": "report",
      "text": 177840,
      "total": 188092
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 44756,
       "count": 1,
       "max": 44756,
       "median": 44756,
       "min": 44756
      }
     },
     "cycles_total": null,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "hardfault",
     "family": "crypto_sign",
     "hand_ported": false,
     "id": "crypto_sign_vistrutith_d3_512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "HardFault_Handler",
      "status": "run-failed"
     },
     "level": {
      "bits": 512,
      "claim": null,
      "label": "512",
      "param_set": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/UBKP5VIJTAKEWQGN7R6C2UZ7OGW2XYRB/",
      "folder": "Chinith",
      "instance": "vistrutith_d3_512s",
      "pub_date": "2026-09-20 14:21",
      "spec": "specs/Chinith.pdf",
      "spec_extra": [],
      "spec_file": "Algorithm specifications.pdf",
      "title": "Chinith",
      "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Chinith.zip"
     },
     "notes": [],
     "run_status": "partial",
     "scheme": "vistrutith_d3_512s",
     "sizes": {
      "kat_path": "schemes/Chinith/Test_Vectors/KAT_SIG_vistrutith_d3_512s.txt",
      "msg": 56,
      "pk": 128,
      "results_path": "results/Chinith/vistrutith_d3_512s.json",
      "sig_max": 83004,
      "sk": 128,
      "source": "ngcc_results"
     },
     "stack": null,
     "status_text": "HardFault on the board (heap or stack beyond the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    }
   ],
   "size_fields": [
    "pk",
    "sk",
    "sig_max",
    "sig_min",
    "msg"
   ]
  }
 },
 "meta": {
  "board": "STM32L4R5ZI (Nucleo-L4R5ZI, Cortex-M4, 640 KB SRAM, 2 MB flash)",
  "conditions": [
   "Measured 2026-10-01 to 2026-10-03 with `benchmark_schemes.py PLATFORM=nucleo-l4r5zi --apps speed`.",
   "Clock: HSI16 (16 MHz), 0 flash wait states, I/D caches on; cycle counts from DWT.",
   "Compiler: arm-none-eabi-gcc 13.2.1, `-O3`, SM3 compression in assembly (USE_SM3_ASM=1), SM3 DRNG.",
   "KEM/KEX: the 147 board-tier implementations (the 153 QEMU-tier ones do not fit the board).",
   "Signatures: every crypto_sign implementation that links for the board was attempted (1 iteration, 10 min cap); the status table lists each one that did not complete and why.",
   "Iterations per operation (\"count\" column): 10 for most KEM/KEX schemes; 3 for Lore, Mithril, bag_piglet, lwekem, TRIKE-5 and CEDRUSC-160f; 1 for all other signature schemes. Timing is deterministic on this board for constant-time code (DTRU-648: min/max within 0.005%); schemes with rejection sampling vary by ~1% between iterations, so a single-iteration row is one sample of that distribution.",
   "Code size is `arm-none-eabi-size` of the speed ELF (.text/.data/.bss include the benchmark driver and HAL).",
   "Signature schemes re-measured 2026-10-06/07 in several runs: 23 schemes (Aigis-Sig, BiT, CEDRUSALPHA-160*, CEDRUSC, COMPASS-SIG, DARTS) at NGCC_ITERATIONS=100; the remaining 98 at NGCC_ITERATIONS=10 (the 'count' column gives the iterations actually completed). Per-target capture caps: 30 min for the 100-iteration run and the first 10-iteration run, 5 min for the final 44 schemes (QingLuan, ReSolveD, Sigurd, TRINE, TSUOV, lwrdsa, Chinith-family, SYDO, ...); where a shorter-capped rerun timed out without adding anything, the earlier run's figures and status were kept. Targets whose status line says 'timeout' did not finish all operations within the cap; 'completed <ops>' lists the operations that were measured.",
   "2026-10-07: added the submitters' Cortex-M4 ports (BW-KEM, DTRU, MORNING-Scabbard, Rudraksh2 as <scheme>/m4), the PolarLAC reference sets and the 13 board-tier CreTAKE sets (NGCC_ITERATIONS=10, speed and stack; all 66 targets completed)."
  ],
  "counts": {
   "by_category": {
    "kem": 166,
    "kex": 58,
    "sig": 121
   },
   "by_status": {
    "kem.failed": 6,
    "kem.measured": 118,
    "kem.not-run": 41,
    "kem.partial": 1,
    "kex.failed": 2,
    "kex.measured": 40,
    "kex.not-run": 16,
    "sig.failed": 17,
    "sig.measured": 43,
    "sig.partial": 61
   },
   "by_tier": {
    "kem.board": 125,
    "kem.qemu": 41,
    "kex.board": 42,
    "kex.qemu": 16,
    "sig.board": 13,
    "sig.qemu": 108
   },
   "implementations": 345,
   "kat": {
    "match": 275,
    "mismatch": 20,
    "not-checked": 31,
    "run-failed": 18,
    "timeout": 1
   },
   "unsupported_instances": 101
  },
  "footnotes": [
   "10 instances listed in schemes.json are components of another submission (CreTAKE's BiT/ZEN/POLARLAC building blocks, benchmarked under their own submissions) and are not counted: CreTAKE/BiT-128, CreTAKE/BiT-256, CreTAKE/BiT-512, CreTAKE/POLARLAC-128, CreTAKE/POLARLAC-256, CreTAKE/POLARLAC-512, CreTAKE/POLARLAC-512-Star, CreTAKE/ZEN_128, CreTAKE/ZEN_256, CreTAKE/ZEN_512"
  ],
  "generated_on": "2026-10-07",
  "generator": "tools/make_site_data.py",
  "git_rev": "2afcdd4",
  "kat_notes": [
   "qube-128/256/384/512 and Phoenix-SM3 (10). The submissions' own reference code, built on the host, reproduces our QEMU output byte for byte and does not reproduce their published test-vector files. These are inconsistencies inside the submission packages.",
   "lwrdsa-128/192/256/512. The wrapper reports a signature length of CRYPTO_BYTES plus the message length but never writes those trailing bytes, so both the KAT file and our output end in uninitialized memory. The real signature bytes match in every count.",
   "ZEN-256 (ref and m4), your own port. Public keys match but ciphertexts differ. The NGCC ZEN_256 reference reproduces the official vectors on the host, so the ngccm4 ZEN-256 encapsulation has diverged from the submitted code. ZEN-128 and 512 match.",
   "sm4th_em tight (2) and ublockith (4). All fault with CFSR UNALIGNED on an strd inside Ballet256256EncDataS, which casts byte pointers to 64-bit integers. That is a 32-bit ARM portability bug in those submissions, not a memory problem.",
   "11 schemes exceed 16 MB (Galas 256S/384F/384S/512F/512S, GreatWall512s, Lynxer-384s/512s, ReSolveD 384s/512s, Sigurd512). Their fault addresses sit above the PSRAM end, and the QEMU mps2-an386 model cannot be given more RAM."
  ],
  "ngcc": {
   "fetched": [
    "2026-09-22",
    "2026-10-06"
   ],
   "instances": 409,
   "schemes": 84,
   "source": "https://www.niccs.org.cn/niccs/Round1Additional/pc/list.html"
  },
  "platform": "nucleo-l4r5zi",
  "repo": "https://github.com/JunhaoHuang/ngccm4",
  "sources": {
   "kat_summary": "Out/kat_summary.md",
   "manifest": "tools/ngcc_manifest.json",
   "speed_csv": "Out/benchmark_speed_nucleo-l4r5zi.csv",
   "speed_md": "Out/benchmark_speed_nucleo-l4r5zi.md"
  }
 },
 "not_benchmarked": {
  "failed": [
   "crypto_kem_BAG-Loong-256_ref",
   "crypto_kem_BAG-Loong-384_ref",
   "crypto_kem_BAG-Loong-512_ref",
   "crypto_kem_HQC-384_ref",
   "crypto_kem_HQC-512_ref",
   "crypto_kem_TRIKE-7_ref",
   "crypto_kem_TRIKE-9_ref",
   "crypto_kex_MAMBA-NIKE-384_ref",
   "crypto_kex_MAMBA-NIKE-512_ref",
   "crypto_sign_Aigis-Sig-I_ref",
   "crypto_sign_Aigis-Sig-II_ref",
   "crypto_sign_Aigis-Sig-III_ref",
   "crypto_sign_CEDRUSALPHA-256f_ref",
   "crypto_sign_CEDRUSALPHA-256s_ref",
   "crypto_sign_CEDRUSALPHA-384s_ref",
   "crypto_sign_CEDRUSC-512s_ref",
   "crypto_sign_Galas-160F_ref",
   "crypto_sign_Galas-160S_ref",
   "crypto_sign_Galas-256F_ref",
   "crypto_sign_Galas-256S_ref",
   "crypto_sign_Galas-384F_ref",
   "crypto_sign_Galas-384S_ref",
   "crypto_sign_Galas-512F_ref",
   "crypto_sign_Galas-512S_ref",
   "crypto_sign_GreatWall128s_ref",
   "crypto_sign_GreatWall192f_ref",
   "crypto_sign_GreatWall192s_ref",
   "crypto_sign_GreatWall256f_ref",
   "crypto_sign_GreatWall256s_ref",
   "crypto_sign_GreatWall512f_ref",
   "crypto_sign_GreatWall512s_ref",
   "crypto_sign_Lynxer-160s_ref",
   "crypto_sign_Lynxer-256f_ref",
   "crypto_sign_Lynxer-256s_ref",
   "crypto_sign_Lynxer-384f_ref",
   "crypto_sign_Lynxer-384s_ref",
   "crypto_sign_Lynxer-512f_ref",
   "crypto_sign_Lynxer-512s_ref",
   "crypto_sign_Phoenix-SHAKE-128s_ref",
   "crypto_sign_Phoenix-SHAKE-192s_ref",
   "crypto_sign_Phoenix-SHAKE-256s_ref",
   "crypto_sign_Phoenix-SHAKE-384f_ref",
   "crypto_sign_Phoenix-SHAKE-384s_ref",
   "crypto_sign_Phoenix-SHAKE-512f_ref",
   "crypto_sign_Phoenix-SHAKE-512s_ref",
   "crypto_sign_Phoenix-SM3-192s_ref",
   "crypto_sign_Phoenix-SM3-256s_ref",
   "crypto_sign_Phoenix-SM3-384s_ref",
   "crypto_sign_Phoenix-SM3-512f_ref",
   "crypto_sign_Phoenix-SM3-512s_ref",
   "crypto_sign_QingLuan-256_ref",
   "crypto_sign_QingLuan-384_ref",
   "crypto_sign_QingLuan-512_ref",
   "crypto_sign_ReSolveD-alpha-160f_ref",
   "crypto_sign_ReSolveD-alpha-160s_ref",
   "crypto_sign_ReSolveD-alpha-256f_ref",
   "crypto_sign_ReSolveD-alpha-256s_ref",
   "crypto_sign_ReSolveD-alpha-384f_ref",
   "crypto_sign_ReSolveD-alpha-384s_ref",
   "crypto_sign_ReSolveD-alpha-512f_ref",
   "crypto_sign_ReSolveD-alpha-512s_ref",
   "crypto_sign_Sigurd128_REF_ref",
   "crypto_sign_Sigurd256_REF_ref",
   "crypto_sign_Sigurd512_REF_ref",
   "crypto_sign_TRINE-128-ShortSig_ref",
   "crypto_sign_TRINE-128-balanced_ref",
   "crypto_sign_TSUOV_512_ref",
   "crypto_sign_sm4th_d3_128f_loose_ref",
   "crypto_sign_sm4th_d3_128f_tight_ref",
   "crypto_sign_sm4th_d3_128s_loose_ref",
   "crypto_sign_sm4th_d3_128s_tight_ref",
   "crypto_sign_sm4th_em_d2_128f_loose_ref",
   "crypto_sign_sm4th_em_d2_128f_tight_ref",
   "crypto_sign_sm4th_em_d2_128s_loose_ref",
   "crypto_sign_sm4th_em_d2_128s_tight_ref",
   "crypto_sign_sydo_160f_ref",
   "crypto_sign_sydo_160s_ref",
   "crypto_sign_sydo_256f_ref",
   "crypto_sign_sydo_256s_ref",
   "crypto_sign_sydo_512f_ref",
   "crypto_sign_sydo_512s_ref",
   "crypto_sign_ublockith_d3_256f_ref",
   "crypto_sign_ublockith_d3_256s_ref",
   "crypto_sign_ublockith_em_d3_256f_ref",
   "crypto_sign_ublockith_em_d3_256s_ref",
   "crypto_sign_vistrutith_d3_512f_ref",
   "crypto_sign_vistrutith_d3_512s_ref"
  ],
  "pending": [],
  "qemu_tier": [
   "crypto_kem_HARE-128-kr_ref",
   "crypto_kem_HARE-256-kr_ref",
   "crypto_kem_HARE-384-kr_ref",
   "crypto_kem_HARE-512-kr_ref",
   "crypto_kem_Loong128_ref",
   "crypto_kem_Loong256_ref",
   "crypto_kem_Loong384_ref",
   "crypto_kem_Loong512_ref",
   "crypto_kem_Mito-1-128_ref",
   "crypto_kem_Mito-1-256_ref",
   "crypto_kem_Mito-1-512_ref",
   "crypto_kem_Mito-1-E-128_ref",
   "crypto_kem_Mito-1-E-256_ref",
   "crypto_kem_Mito-1-E-512_ref",
   "crypto_kem_Mito-2-E-128_ref",
   "crypto_kem_Mito-2-E-256_ref",
   "crypto_kem_Mito-2-E-512_ref",
   "crypto_kem_Scloudplus-128-AES_ref",
   "crypto_kem_Scloudplus-128-SHAKE_ref",
   "crypto_kem_Scloudplus-128-SM3_ref",
   "crypto_kem_Scloudplus-192-AES_ref",
   "crypto_kem_Scloudplus-192-SHAKE_ref",
   "crypto_kem_Scloudplus-192-SM3_ref",
   "crypto_kem_Scloudplus-256-AES_ref",
   "crypto_kem_Scloudplus-256-SHAKE_ref",
   "crypto_kem_Scloudplus-256-SM3_ref",
   "crypto_kem_Scloudplus-384-AES_ref",
   "crypto_kem_Scloudplus-384-SHAKE_ref",
   "crypto_kem_Scloudplus-384-SM3_ref",
   "crypto_kem_Scloudplus-512-AES_ref",
   "crypto_kem_Scloudplus-512-SHAKE_ref",
   "crypto_kem_Scloudplus-512-SM3_ref",
   "crypto_kem_TriQ-KEM-128_ref",
   "crypto_kem_TriQ-KEM-256_ref",
   "crypto_kem_TriQ-KEM-384_ref",
   "crypto_kem_TriQ-KEM-512_ref",
   "crypto_kem_qube-128_ref",
   "crypto_kem_qube-192_ref",
   "crypto_kem_qube-256_ref",
   "crypto_kem_qube-384_ref",
   "crypto_kem_qube-512_ref",
   "crypto_kex_CreTAKE-K2S-PLAC256-BiT256_ref",
   "crypto_kex_CreTAKE-K2S-PLAC512-BiT512_ref",
   "crypto_kex_CreTAKE-K2S-ZEN256-BiT256_ref",
   "crypto_kex_CreTAKE-K2S-ZEN512-BiT512_ref",
   "crypto_kex_CreTAKE-S2K-BiT256-PLAC256_ref",
   "crypto_kex_CreTAKE-S2K-BiT256-ZEN256_ref",
   "crypto_kex_CreTAKE-S2K-BiT512-PLAC512_ref",
   "crypto_kex_CreTAKE-S2K-BiT512-ZEN512_ref",
   "crypto_kex_CreTAKE-S2S-BiT256-ePLAC256_ref",
   "crypto_kex_CreTAKE-S2S-BiT256-eZEN256_ref",
   "crypto_kex_CreTAKE-S2S-BiT512-ePLAC512_ref",
   "crypto_kex_CreTAKE-S2S-BiT512-eZEN512_ref",
   "crypto_kex_TriQ-KEX-128_ref",
   "crypto_kex_TriQ-KEX-256_ref",
   "crypto_kex_TriQ-KEX-384_ref",
   "crypto_kex_TriQ-KEX-512_ref"
  ],
  "unsupported": [
   {
    "category": "kem",
    "folder": "BIKE_MLThre",
    "instance": "BIKE_MLThre",
    "level": {
     "bits": 128,
     "claim": "BIKE_MLThre spec Table 7: 128/256/512-bit categories; the reference build is BIKE_SECURITY_128",
     "label": "128",
     "param_set": "128",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/VMTRVK2D2DWBOKLWZHLFNQWRZB7USMUQ/",
     "folder": "BIKE_MLThre",
     "instance": "BIKE_MLThre",
     "pub_date": "2026-09-20 11:28",
     "spec": "specs/BIKE_MLThre.pdf",
     "spec_extra": [],
     "spec_file": "BIKE_MLThre.pdf",
     "title": "BIKE-MLThre",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BIKE_MLThre.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:28",
    "reason": "seeds the NIST AES256-CTR DRBG (FromNIST/rng.c, OpenSSL) from the ICCS DRNG; needs a portable CTR-DRBG port",
    "reason_scope": "scheme",
    "scheme": "BIKE_MLThre",
    "sizes": {
     "ct": 1573,
     "pk": 1541,
     "results_path": "results/BIKE_MLThre/BIKE_MLThre.json",
     "sk": 3114,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "BIKE-MLThre"
   },
   {
    "category": "kem",
    "folder": "BRA",
    "instance": "BRA-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MDYQUVS5YFRUAGZJAZIJFIUTX7THNM6O/",
     "folder": "BRA",
     "instance": "BRA-128",
     "pub_date": "2026-09-20 11:27",
     "spec": "specs/BRA.pdf",
     "spec_extra": [],
     "spec_file": "BRA-Documentation.pdf",
     "title": "BRA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BRA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:27",
    "reason": "rbc_*.h hard-includes <x86intrin.h>",
    "reason_scope": "scheme",
    "scheme": "BRA-128",
    "sizes": {
     "ct": 2092,
     "kat_path": "schemes/BRA/Test_Vectors/KAT_KEM_BRA-128.txt",
     "pk": 1078,
     "results_path": "results/BRA/BRA-128.json",
     "sk": 1176,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "BRA"
   },
   {
    "category": "kem",
    "folder": "BRA",
    "instance": "BRA-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MDYQUVS5YFRUAGZJAZIJFIUTX7THNM6O/",
     "folder": "BRA",
     "instance": "BRA-256",
     "pub_date": "2026-09-20 11:27",
     "spec": "specs/BRA.pdf",
     "spec_extra": [],
     "spec_file": "BRA-Documentation.pdf",
     "title": "BRA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BRA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:27",
    "reason": "rbc_*.h hard-includes <x86intrin.h>",
    "reason_scope": "scheme",
    "scheme": "BRA-256",
    "sizes": {
     "ct": 3406,
     "kat_path": "schemes/BRA/Test_Vectors/KAT_KEM_BRA-256.txt",
     "pk": 1735,
     "results_path": "results/BRA/BRA-256.json",
     "sk": 1841,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "BRA"
   },
   {
    "category": "kem",
    "folder": "BRA",
    "instance": "BRA-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/MDYQUVS5YFRUAGZJAZIJFIUTX7THNM6O/",
     "folder": "BRA",
     "instance": "BRA-512",
     "pub_date": "2026-09-20 11:27",
     "spec": "specs/BRA.pdf",
     "spec_extra": [],
     "spec_file": "BRA-Documentation.pdf",
     "title": "BRA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BRA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:27",
    "reason": "rbc_*.h hard-includes <x86intrin.h>",
    "reason_scope": "scheme",
    "scheme": "BRA-512",
    "sizes": {
     "ct": 7082,
     "kat_path": "schemes/BRA/Test_Vectors/KAT_KEM_BRA-512.txt",
     "pk": 3573,
     "results_path": "results/BRA/BRA-512.json",
     "sk": 3717,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "BRA"
   },
   {
    "category": "kem",
    "folder": "BRQC",
    "instance": "BRQC-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LA7GLQRH3VS64ISSPP6BPZ6QR75PAOVA/",
     "folder": "BRQC",
     "instance": "BRQC-128",
     "pub_date": "2026-09-20 11:26",
     "spec": "specs/BRQC.pdf",
     "spec_extra": [],
     "spec_file": "BRQC-Documentation.pdf",
     "title": "BRQC",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BRQC.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:26",
    "reason": "rbc_*.h hard-includes <x86intrin.h>",
    "reason_scope": "scheme",
    "scheme": "BRQC-128",
    "sizes": {
     "ct": 3844,
     "kat_path": "schemes/BRQC/Test_Vectors/KAT_KEM_BRQC-128.txt",
     "pk": 1954,
     "results_path": "results/BRQC/BRQC-128.json",
     "sk": 2066,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "BRQC"
   },
   {
    "category": "kem",
    "folder": "BRQC",
    "instance": "BRQC-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LA7GLQRH3VS64ISSPP6BPZ6QR75PAOVA/",
     "folder": "BRQC",
     "instance": "BRQC-256",
     "pub_date": "2026-09-20 11:26",
     "spec": "specs/BRQC.pdf",
     "spec_extra": [],
     "spec_file": "BRQC-Documentation.pdf",
     "title": "BRQC",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BRQC.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:26",
    "reason": "rbc_*.h hard-includes <x86intrin.h>",
    "reason_scope": "scheme",
    "scheme": "BRQC-256",
    "sizes": {
     "ct": 6626,
     "kat_path": "schemes/BRQC/Test_Vectors/KAT_KEM_BRQC-256.txt",
     "pk": 3345,
     "results_path": "results/BRQC/BRQC-256.json",
     "sk": 3471,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "BRQC"
   },
   {
    "category": "kem",
    "folder": "BRQC",
    "instance": "BRQC-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/LA7GLQRH3VS64ISSPP6BPZ6QR75PAOVA/",
     "folder": "BRQC",
     "instance": "BRQC-512",
     "pub_date": "2026-09-20 11:26",
     "spec": "specs/BRQC.pdf",
     "spec_extra": [],
     "spec_file": "BRQC-Documentation.pdf",
     "title": "BRQC",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/BRQC.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:26",
    "reason": "rbc_*.h hard-includes <x86intrin.h>",
    "reason_scope": "scheme",
    "scheme": "BRQC-512",
    "sizes": {
     "ct": 13060,
     "kat_path": "schemes/BRQC/Test_Vectors/KAT_KEM_BRQC-512.txt",
     "pk": 6562,
     "results_path": "results/BRQC/BRQC-512.json",
     "sk": 6712,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "BRQC"
   },
   {
    "category": "kem",
    "folder": "C-Multi-UR-AG",
    "instance": "CMultiURAG-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/CDFH64HLL4OC7ABIDEASAHDTDQI4O3RU/",
     "folder": "C-Multi-UR-AG",
     "instance": "CMultiURAG-128",
     "pub_date": "2026-09-20 11:23",
     "spec": "specs/C-Multi-UR-AG.pdf",
     "spec_extra": [],
     "spec_file": "C-Multi-UR-AG-Documentation.pdf",
     "title": "C-Multi-UR-AG",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/C-Multi-UR-AG.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:23",
    "reason": "rbc_*.h hard-includes <x86intrin.h>; 210 KB stack frame",
    "reason_scope": "scheme",
    "scheme": "CMultiURAG-128",
    "sizes": {
     "ct": 7332,
     "kat_path": "schemes/C-Multi-UR-AG/Test_Vectors/KAT_KEM_CMultiURAG-128.txt",
     "pk": 3866,
     "results_path": "results/C-Multi-UR-AG/CMultiURAG-128.json",
     "sk": 3960,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "C-Multi-UR-AG"
   },
   {
    "category": "kem",
    "folder": "C-Multi-UR-AG",
    "instance": "CMultiURAG-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/CDFH64HLL4OC7ABIDEASAHDTDQI4O3RU/",
     "folder": "C-Multi-UR-AG",
     "instance": "CMultiURAG-256",
     "pub_date": "2026-09-20 11:23",
     "spec": "specs/C-Multi-UR-AG.pdf",
     "spec_extra": [],
     "spec_file": "C-Multi-UR-AG-Documentation.pdf",
     "title": "C-Multi-UR-AG",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/C-Multi-UR-AG.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:23",
    "reason": "rbc_*.h hard-includes <x86intrin.h>; 210 KB stack frame",
    "reason_scope": "scheme",
    "scheme": "CMultiURAG-256",
    "sizes": {
     "ct": 15304,
     "kat_path": "schemes/C-Multi-UR-AG/Test_Vectors/KAT_KEM_CMultiURAG-256.txt",
     "pk": 10780,
     "results_path": "results/C-Multi-UR-AG/CMultiURAG-256.json",
     "sk": 10892,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "C-Multi-UR-AG"
   },
   {
    "category": "kem",
    "folder": "C-Multi-UR-AG",
    "instance": "CMultiURAG-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/CDFH64HLL4OC7ABIDEASAHDTDQI4O3RU/",
     "folder": "C-Multi-UR-AG",
     "instance": "CMultiURAG-512",
     "pub_date": "2026-09-20 11:23",
     "spec": "specs/C-Multi-UR-AG.pdf",
     "spec_extra": [],
     "spec_file": "C-Multi-UR-AG-Documentation.pdf",
     "title": "C-Multi-UR-AG",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/C-Multi-UR-AG.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:23",
    "reason": "rbc_*.h hard-includes <x86intrin.h>; 210 KB stack frame",
    "reason_scope": "scheme",
    "scheme": "CMultiURAG-512",
    "sizes": {
     "ct": 40926,
     "kat_path": "schemes/C-Multi-UR-AG/Test_Vectors/KAT_KEM_CMultiURAG-512.txt",
     "pk": 28866,
     "results_path": "results/C-Multi-UR-AG/CMultiURAG-512.json",
     "sk": 29021,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "C-Multi-UR-AG"
   },
   {
    "category": "kem",
    "folder": "CTL",
    "instance": "CTL-257-512",
    "level": {
     "bits": 128,
     "claim": "CTL spec §6: CTL-128/256/512 are (n,q)=(512,257)/(1024,769)/(2048,3329); note the shipped readme.txt labels the last two 192 and 256 bits (NIST-style)",
     "label": "128",
     "param_set": "q,n=257-512",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/XYXBZWLCJXTUZTNUFJCPYLEST5CC56AI/",
     "folder": "CTL",
     "instance": "CTL-257-512",
     "pub_date": "2026-09-20 11:21",
     "spec": "specs/CTL.pdf",
     "spec_extra": [],
     "spec_file": "逐光算法文本-英文.pdf",
     "title": "CTL Algorithm",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CTL.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:21",
    "reason": "needs GMP, __int128 and libquadmath",
    "reason_scope": "scheme",
    "scheme": "CTL-257-512",
    "sizes": {
     "ct": 473,
     "kat_path": "schemes/CTL/Test_Vectors/KAT_KEM_CTL-257-512.txt",
     "pk": 521,
     "results_path": "results/CTL/CTL-257-512.json",
     "sk": 2953,
     "source": "ngcc_results",
     "ss": 16
    },
    "title": "CTL Algorithm"
   },
   {
    "category": "kem",
    "folder": "CTL",
    "instance": "CTL-3329-2048",
    "level": {
     "bits": 512,
     "claim": "CTL spec §6: CTL-128/256/512 are (n,q)=(512,257)/(1024,769)/(2048,3329); note the shipped readme.txt labels the last two 192 and 256 bits (NIST-style)",
     "label": "512",
     "param_set": "q,n=3329-2048",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/XYXBZWLCJXTUZTNUFJCPYLEST5CC56AI/",
     "folder": "CTL",
     "instance": "CTL-3329-2048",
     "pub_date": "2026-09-20 11:21",
     "spec": "specs/CTL.pdf",
     "spec_extra": [],
     "spec_file": "逐光算法文本-英文.pdf",
     "title": "CTL Algorithm",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CTL.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:21",
    "reason": "needs GMP, __int128 and libquadmath",
    "reason_scope": "scheme",
    "scheme": "CTL-3329-2048",
    "sizes": {
     "ct": 2353,
     "kat_path": "schemes/CTL/Test_Vectors/KAT_KEM_CTL-3329-2048.txt",
     "pk": 3009,
     "results_path": "results/CTL/CTL-3329-2048.json",
     "sk": 15617,
     "source": "ngcc_results",
     "ss": 48
    },
    "title": "CTL Algorithm"
   },
   {
    "category": "kem",
    "folder": "CTL",
    "instance": "CTL-769-1024",
    "level": {
     "bits": 256,
     "claim": "CTL spec §6: CTL-128/256/512 are (n,q)=(512,257)/(1024,769)/(2048,3329); note the shipped readme.txt labels the last two 192 and 256 bits (NIST-style)",
     "label": "256",
     "param_set": "q,n=769-1024",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/XYXBZWLCJXTUZTNUFJCPYLEST5CC56AI/",
     "folder": "CTL",
     "instance": "CTL-769-1024",
     "pub_date": "2026-09-20 11:21",
     "spec": "specs/CTL.pdf",
     "spec_extra": [],
     "spec_file": "逐光算法文本-英文.pdf",
     "title": "CTL Algorithm",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CTL.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:21",
    "reason": "needs GMP, __int128 and libquadmath",
    "reason_scope": "scheme",
    "scheme": "CTL-769-1024",
    "sizes": {
     "ct": 1006,
     "kat_path": "schemes/CTL/Test_Vectors/KAT_KEM_CTL-769-1024.txt",
     "pk": 1230,
     "results_path": "results/CTL/CTL-769-1024.json",
     "sk": 6030,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CTL Algorithm"
   },
   {
    "category": "kem",
    "folder": "HEP-QC",
    "instance": "HEP-QC",
    "level": {
     "bits": 128,
     "claim": "HEP-QC spec Table 4.1: HEP-QC-1 is the 128-bit set (PARAM_SECURITY 128)",
     "label": "128",
     "param_set": "HEP-QC-1",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2FLYI6DJUQ3YKJZXVGFFN4IQNPKXSHWU/",
     "folder": "HEP-QC",
     "instance": "HEP-QC",
     "pub_date": "2026-09-20 11:16",
     "spec": "specs/HEP-QC.pdf",
     "spec_extra": [],
     "spec_file": "算法文本.pdf",
     "title": "Hybrid Equivalent Punctured and Quasi-Cyclic",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/HEP-QC.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:16",
    "reason": "public keys 286 KB-12.6 MB, 12 MB bss",
    "reason_scope": "scheme",
    "scheme": "HEP-QC",
    "sizes": {
     "ct": 4433,
     "pk": 285889,
     "results_path": "results/HEP-QC/HEP-QC__KAT_KEM_HEP_QC_1.json",
     "sk": 285969,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "Hybrid Equivalent Punctured and Quasi-Cyclic"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-128",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-128",
    "sizes": {
     "ct": 5192,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-128.txt",
     "pk": 5152,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-128.json",
     "sk": 6736,
     "source": "ngcc_results",
     "ss": 16
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-192",
    "level": {
     "bits": 192,
     "claim": null,
     "label": "192",
     "param_set": "192",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-192",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-192",
    "sizes": {
     "ct": 9760,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-192.txt",
     "pk": 9712,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-192.json",
     "sk": 11528,
     "source": "ngcc_results",
     "ss": 24
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-256",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-256",
    "sizes": {
     "ct": 15552,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-256.txt",
     "pk": 16776,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-256.json",
     "sk": 19416,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-384",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-384",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-384",
    "sizes": {
     "ct": 37736,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-384.txt",
     "pk": 25096,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-384.json",
     "sk": 29032,
     "source": "ngcc_results",
     "ss": 48
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-512",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-512",
    "sizes": {
     "ct": 72944,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-512.txt",
     "pk": 36432,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-512.json",
     "sk": 41728,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-CC-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-128",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-CC-128",
    "sizes": {
     "ct": 5192,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-CC-128.txt",
     "pk": 5152,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-CC-128.json",
     "sk": 6736,
     "source": "ngcc_results",
     "ss": 16
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-CC-192",
    "level": {
     "bits": 192,
     "claim": null,
     "label": "192",
     "param_set": "192",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-192",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-CC-192",
    "sizes": {
     "ct": 9760,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-CC-192.txt",
     "pk": 9712,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-CC-192.json",
     "sk": 11528,
     "source": "ngcc_results",
     "ss": 24
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-CC-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-256",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-CC-256",
    "sizes": {
     "ct": 15552,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-CC-256.txt",
     "pk": 16776,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-CC-256.json",
     "sk": 19416,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-CC-384",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-384",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-CC-384",
    "sizes": {
     "ct": 25204,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-CC-384.txt",
     "pk": 37628,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-CC-384.json",
     "sk": 43492,
     "source": "ngcc_results",
     "ss": 48
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MAMBA-Frost",
    "instance": "MAMBA-Frost-CC-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/DZASROHH4W6G64UKMRCCQJGQEUHQO4TC/",
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-512",
     "pub_date": "2026-09-20 11:13",
     "spec": "specs/MAMBA-Frost.pdf",
     "spec_extra": [],
     "spec_file": "MAMBA_Frost_Doc.pdf",
     "title": "MAMBA-Frost",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MAMBA-Frost.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 11:13",
    "reason": "Frodo-like matrices: 7.4 MB stack frame (x86 -O3 build)",
    "reason_scope": "scheme",
    "scheme": "MAMBA-Frost-CC-512",
    "sizes": {
     "ct": 36544,
     "kat_path": "schemes/MAMBA-Frost/Test_Vectors/KAT_KEM_MAMBA-Frost-CC-512.txt",
     "pk": 72832,
     "results_path": "results/MAMBA-Frost/MAMBA-Frost-CC-512.json",
     "sk": 83328,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "MAMBA-Frost"
   },
   {
    "category": "kem",
    "folder": "MORNING-Scabbard",
    "instance": "scabbard512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/4KFYAFY5ZWKVT2D47LSNZP2LKIHBGPV7/",
     "folder": "MORNING-Scabbard",
     "instance": "scabbard512",
     "pub_date": "2026-09-20 10:46",
     "spec": "specs/MORNING-Scabbard.pdf",
     "spec_extra": [],
     "spec_file": "scabbard.pdf",
     "title": "MORNING-Scabbard",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/MORNING-Scabbard.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:46",
    "reason": "static data exceeds the 4 MB QEMU RAM",
    "reason_scope": "instance",
    "scheme": "scabbard512",
    "sizes": {
     "ct": 3072,
     "kat_path": "schemes/MORNING-Scabbard/Test_Vectors/KAT_KEM_scabbard512.txt",
     "pk": 2880,
     "results_path": "results/MORNING-Scabbard/scabbard512.json",
     "sk": 4032,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "MORNING-Scabbard"
   },
   {
    "category": "kem",
    "folder": "QIMEN-PIKE",
    "instance": "QIMEN-PIKE",
    "level": {
     "bits": 128,
     "claim": "QIMEN-PIKE spec: parameter sets NGCC-1/2/3 target 128/256/512-bit classical security; the reference build is NGCC-1",
     "label": "128",
     "param_set": "NGCC-1",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/IRFTQQNWEALFDR27ZBMONU4M2KTRWQRS/",
     "folder": "QIMEN-PIKE",
     "instance": "QIMEN-PIKE",
     "pub_date": "2026-09-20 10:34",
     "spec": "specs/QIMEN-PIKE.pdf",
     "spec_extra": [],
     "spec_file": "2-算法文本(英文) .pdf",
     "title": "QIMEN-PIKE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QIMEN-PIKE.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:34",
    "reason": "isogeny scheme needing GMP; 2.6 MB stack frame",
    "reason_scope": "scheme",
    "scheme": "QIMEN-PIKE",
    "sizes": {
     "ct": 602,
     "pk": 389,
     "results_path": "results/QIMEN-PIKE/QIMEN-PIKE__NGCC-1.json",
     "sk": 472,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "QIMEN-PIKE"
   },
   {
    "category": "kem",
    "folder": "QCTM",
    "instance": "QCTM128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKERBYXMUT27H3ZUTLBHCM7YJB5KVGZI/",
     "folder": "QCTM",
     "instance": "QCTM128",
     "pub_date": "2026-09-20 10:33",
     "spec": "specs/QCTM.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm_Text_en.pdf",
     "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QCTM.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:33",
    "reason": "public keys 168 KB-2.4 MB; OpenSSL EVP in rng.c",
    "reason_scope": "scheme",
    "scheme": "QCTM128",
    "sizes": {
     "ct": 640,
     "kat_path": "schemes/QCTM/Test_Vectors/KAT_KEM_QCTM128.txt",
     "pk": 167987,
     "results_path": "results/QCTM/QCTM128.json",
     "sk": 192545,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism"
   },
   {
    "category": "kem",
    "folder": "QCTM",
    "instance": "QCTM256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKERBYXMUT27H3ZUTLBHCM7YJB5KVGZI/",
     "folder": "QCTM",
     "instance": "QCTM256",
     "pub_date": "2026-09-20 10:33",
     "spec": "specs/QCTM.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm_Text_en.pdf",
     "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QCTM.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:33",
    "reason": "public keys 168 KB-2.4 MB; OpenSSL EVP in rng.c",
    "reason_scope": "scheme",
    "scheme": "QCTM256",
    "sizes": {
     "ct": 1153,
     "kat_path": "schemes/QCTM/Test_Vectors/KAT_KEM_QCTM256.txt",
     "pk": 595662,
     "results_path": "results/QCTM/QCTM256.json",
     "sk": 641942,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism"
   },
   {
    "category": "kem",
    "folder": "QCTM",
    "instance": "QCTM512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/BKERBYXMUT27H3ZUTLBHCM7YJB5KVGZI/",
     "folder": "QCTM",
     "instance": "QCTM512",
     "pub_date": "2026-09-20 10:33",
     "spec": "specs/QCTM.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm_Text_en.pdf",
     "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/QCTM.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:33",
    "reason": "public keys 168 KB-2.4 MB; OpenSSL EVP in rng.c",
    "reason_scope": "scheme",
    "scheme": "QCTM512",
    "sizes": {
     "ct": 2264,
     "pk": 2374727,
     "results_path": "results/QCTM/QCTM512.json",
     "sk": 2467243,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism"
   },
   {
    "category": "kem",
    "folder": "UVW-KEM",
    "instance": "UVW_KEM_128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2N7FVNDINZAC7ZES4OC5GGHIGPQVPCWL/",
     "folder": "UVW-KEM",
     "instance": "UVW_KEM_128",
     "pub_date": "2026-09-20 10:28",
     "spec": "specs/UVW-KEM.pdf",
     "spec_extra": [],
     "spec_file": "UVW-KEM.pdf",
     "title": "UVW Key Encapsulation Mechanism",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/UVW-KEM.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:28",
    "reason": "public keys 208 KB-4 MB, 2.9 MB constant tables",
    "reason_scope": "scheme",
    "scheme": "UVW_KEM_128",
    "sizes": {
     "ct": 1032,
     "kat_path": "schemes/UVW-KEM/Test_Vectors/KAT_KEM_UVW_KEM_128.txt",
     "pk": 208013,
     "results_path": "results/UVW-KEM/UVW_KEM_128.json",
     "sk": 35,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "UVW Key Encapsulation Mechanism"
   },
   {
    "category": "kem",
    "folder": "UVW-KEM",
    "instance": "UVW_KEM_256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2N7FVNDINZAC7ZES4OC5GGHIGPQVPCWL/",
     "folder": "UVW-KEM",
     "instance": "UVW_KEM_256",
     "pub_date": "2026-09-20 10:28",
     "spec": "specs/UVW-KEM.pdf",
     "spec_extra": [],
     "spec_file": "UVW-KEM.pdf",
     "title": "UVW Key Encapsulation Mechanism",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/UVW-KEM.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:28",
    "reason": "public keys 208 KB-4 MB, 2.9 MB constant tables",
    "reason_scope": "scheme",
    "scheme": "UVW_KEM_256",
    "sizes": {
     "ct": 2199,
     "kat_path": "schemes/UVW-KEM/Test_Vectors/KAT_KEM_UVW_KEM_256.txt",
     "pk": 911645,
     "results_path": "results/UVW-KEM/UVW_KEM_256.json",
     "sk": 35,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "UVW Key Encapsulation Mechanism"
   },
   {
    "category": "kem",
    "folder": "UVW-KEM",
    "instance": "UVW_KEM_512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/2N7FVNDINZAC7ZES4OC5GGHIGPQVPCWL/",
     "folder": "UVW-KEM",
     "instance": "UVW_KEM_512",
     "pub_date": "2026-09-20 10:28",
     "spec": "specs/UVW-KEM.pdf",
     "spec_extra": [],
     "spec_file": "UVW-KEM.pdf",
     "title": "UVW Key Encapsulation Mechanism",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/UVW-KEM.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:28",
    "reason": "public keys 208 KB-4 MB, 2.9 MB constant tables",
    "reason_scope": "scheme",
    "scheme": "UVW_KEM_512",
    "sizes": {
     "ct": 4820,
     "pk": 4001850,
     "results_path": "results/UVW-KEM/UVW_KEM_512.json",
     "sk": 67,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "UVW Key Encapsulation Mechanism"
   },
   {
    "category": "kex",
    "folder": "Loom",
    "instance": "LoomKEX-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QD663UPHHV3JOP7IEQUTEESR4LCALIDJ/",
     "folder": "Loom",
     "instance": "LoomKEX-128",
     "pub_date": "2026-09-20 09:42",
     "spec": "specs/Loom.pdf",
     "spec_extra": [],
     "spec_file": "Loom算法设计说明书.pdf",
     "title": "Loom",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Loom.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:42",
    "reason": "LOOM-AKE is a protocol over Weaver KEM and SHUTTLE signatures (same shape as CreTAKE: per instance kem/, sig/ and a loom/ protocol layer), but it cannot link the implementations in this tree: (1) SHUTTLE is not imported (its Gaussian sampler, irs.c/approx_*.h/sampler_u.c, uses GNU __int128 fixed-point kernels on ~70 lines, unavailable on 32-bit ARM), and Loom's long-term keys and all four passes use SHUTTLE (PKa/PKb are SHUTTLE public keys, 1264 B); (2) Loom's kem/ is a modified Weaver, not the submitted one: crypto_kem_dec is replaced by crypto_kem_dec_rigid with a ciphertext tag (kem_cpaf.c), and cbd.c/msgenc.c differ by hundreds of lines with extra invq tables, so crypto_kem/WeaverKEM-*/ref is not a drop-in dependency. Importable once SHUTTLE has a 32-bit port, with Loom's own kem/ copied as a private dependency.",
    "reason_scope": "scheme",
    "scheme": "LoomKEX-128",
    "sizes": {
     "kat_path": "schemes/Loom/Test_Vectors/KAT_KEX_LoomKEX-128.txt",
     "msg_max": 4038,
     "msg_total": 4038,
     "msgs": [
      792,
      776,
      1235,
      1235
     ],
     "passes": 4,
     "pk_a": 1264,
     "pk_b": 1264,
     "results_path": "results/Loom/LoomKEX-128.json",
     "sk_a": 2288,
     "sk_b": 2288,
     "source": "ngcc_results",
     "ss": 16
    },
    "title": "Loom"
   },
   {
    "category": "kex",
    "folder": "Loom",
    "instance": "LoomKEX-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QD663UPHHV3JOP7IEQUTEESR4LCALIDJ/",
     "folder": "Loom",
     "instance": "LoomKEX-256",
     "pub_date": "2026-09-20 09:42",
     "spec": "specs/Loom.pdf",
     "spec_extra": [],
     "spec_file": "Loom算法设计说明书.pdf",
     "title": "Loom",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Loom.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:42",
    "reason": "LOOM-AKE is a protocol over Weaver KEM and SHUTTLE signatures (same shape as CreTAKE: per instance kem/, sig/ and a loom/ protocol layer), but it cannot link the implementations in this tree: (1) SHUTTLE is not imported (its Gaussian sampler, irs.c/approx_*.h/sampler_u.c, uses GNU __int128 fixed-point kernels on ~70 lines, unavailable on 32-bit ARM), and Loom's long-term keys and all four passes use SHUTTLE (PKa/PKb are SHUTTLE public keys, 1264 B); (2) Loom's kem/ is a modified Weaver, not the submitted one: crypto_kem_dec is replaced by crypto_kem_dec_rigid with a ciphertext tag (kem_cpaf.c), and cbd.c/msgenc.c differ by hundreds of lines with extra invq tables, so crypto_kem/WeaverKEM-*/ref is not a drop-in dependency. Importable once SHUTTLE has a 32-bit port, with Loom's own kem/ copied as a private dependency.",
    "reason_scope": "scheme",
    "scheme": "LoomKEX-256",
    "sizes": {
     "kat_path": "schemes/Loom/Test_Vectors/KAT_KEX_LoomKEX-256.txt",
     "msg_max": 7706,
     "msg_total": 7706,
     "msgs": [
      1352,
      1384,
      2485,
      2485
     ],
     "passes": 4,
     "pk_a": 1952,
     "pk_b": 1952,
     "results_path": "results/Loom/LoomKEX-256.json",
     "sk_a": 3680,
     "sk_b": 3680,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "Loom"
   },
   {
    "category": "kex",
    "folder": "Loom",
    "instance": "LoomKEX-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QD663UPHHV3JOP7IEQUTEESR4LCALIDJ/",
     "folder": "Loom",
     "instance": "LoomKEX-512",
     "pub_date": "2026-09-20 09:42",
     "spec": "specs/Loom.pdf",
     "spec_extra": [],
     "spec_file": "Loom算法设计说明书.pdf",
     "title": "Loom",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Loom.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:42",
    "reason": "LOOM-AKE is a protocol over Weaver KEM and SHUTTLE signatures (same shape as CreTAKE: per instance kem/, sig/ and a loom/ protocol layer), but it cannot link the implementations in this tree: (1) SHUTTLE is not imported (its Gaussian sampler, irs.c/approx_*.h/sampler_u.c, uses GNU __int128 fixed-point kernels on ~70 lines, unavailable on 32-bit ARM), and Loom's long-term keys and all four passes use SHUTTLE (PKa/PKb are SHUTTLE public keys, 1264 B); (2) Loom's kem/ is a modified Weaver, not the submitted one: crypto_kem_dec is replaced by crypto_kem_dec_rigid with a ciphertext tag (kem_cpaf.c), and cbd.c/msgenc.c differ by hundreds of lines with extra invq tables, so crypto_kem/WeaverKEM-*/ref is not a drop-in dependency. Importable once SHUTTLE has a 32-bit port, with Loom's own kem/ copied as a private dependency.",
    "reason_scope": "scheme",
    "scheme": "LoomKEX-512",
    "sizes": {
     "kat_path": "schemes/Loom/Test_Vectors/KAT_KEX_LoomKEX-512.txt",
     "msg_max": 16170,
     "msg_total": 16170,
     "msgs": [
      2952,
      3016,
      5101,
      5101
     ],
     "passes": 4,
     "pk_a": 3648,
     "pk_b": 3648,
     "results_path": "results/Loom/LoomKEX-512.json",
     "sk_a": 7104,
     "sk_b": 7104,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "Loom"
   },
   {
    "category": "kex",
    "folder": "NIIKE",
    "instance": "NIIKE",
    "level": {
     "bits": 128,
     "claim": "NIIKE spec Table 9.1: NGCC-I/II/III sets with log2 p ≈ 256/512/1024; the reference build is lv128",
     "label": "128",
     "param_set": "NIIKE-lv128",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/6WRSHMUQOXTR62HBG3HEUHZEIYAIROLO/",
     "folder": "NIIKE",
     "instance": "NIIKE",
     "pub_date": "2026-09-20 09:39",
     "spec": "specs/NIIKE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "NIIKE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/NIIKE.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:39",
    "reason": "isogeny NIKE: 12 MB working set, minutes per run",
    "reason_scope": "scheme",
    "scheme": "NIIKE",
    "sizes": {
     "msg_max": 0,
     "passes": 0,
     "pk_a": 4160,
     "pk_b": 4160,
     "results_path": "results/NIIKE/NIIKE__NIIKE-lv128.json",
     "sk_a": 196,
     "sk_b": 196,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "NIIKE"
   },
   {
    "category": "sig",
    "folder": "cedrus-alpha",
    "instance": "CEDRUSALPHA-384f",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
     "folder": "cedrus-alpha",
     "instance": "CEDRUSALPHA-384f",
     "pub_date": "2026-09-20 14:22",
     "spec": "specs/cedrus-alpha.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "CEDRUSɑ",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:22",
    "reason": "static tables exceed the 4 MB QEMU RAM",
    "reason_scope": "instance",
    "scheme": "CEDRUSALPHA-384f",
    "sizes": {
     "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-384f.txt",
     "msg": 56,
     "pk": 96,
     "results_path": "results/cedrus-alpha/CEDRUSALPHA-384f.json",
     "sig_max": 76176,
     "sk": 192,
     "source": "ngcc_results"
    },
    "title": "CEDRUSɑ"
   },
   {
    "category": "sig",
    "folder": "cedrus-alpha",
    "instance": "CEDRUSALPHA-512f",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
     "folder": "cedrus-alpha",
     "instance": "CEDRUSALPHA-512f",
     "pub_date": "2026-09-20 14:22",
     "spec": "specs/cedrus-alpha.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "CEDRUSɑ",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:22",
    "reason": "static tables exceed the 4 MB QEMU RAM",
    "reason_scope": "instance",
    "scheme": "CEDRUSALPHA-512f",
    "sizes": {
     "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-512f.txt",
     "msg": 56,
     "pk": 128,
     "results_path": "results/cedrus-alpha/CEDRUSALPHA-512f.json",
     "sig_max": 127488,
     "sk": 256,
     "source": "ngcc_results"
    },
    "title": "CEDRUSɑ"
   },
   {
    "category": "sig",
    "folder": "cedrus-alpha",
    "instance": "CEDRUSALPHA-512s",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/QTJJOIBU56LBGJ2JRXKKH5OX3ZIW3OQJ/",
     "folder": "cedrus-alpha",
     "instance": "CEDRUSALPHA-512s",
     "pub_date": "2026-09-20 14:22",
     "spec": "specs/cedrus-alpha.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "CEDRUSɑ",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/cedrus-%CE%B1.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:22",
    "reason": "static tables exceed the 4 MB QEMU RAM",
    "reason_scope": "instance",
    "scheme": "CEDRUSALPHA-512s",
    "sizes": {
     "kat_path": "schemes/cedrus-alpha/Test_Vectors/KAT_SIG_CEDRUSALPHA-512s.txt",
     "msg": 56,
     "pk": 128,
     "results_path": "results/cedrus-alpha/CEDRUSALPHA-512s.json",
     "sig_max": 98048,
     "sk": 256,
     "source": "ngcc_results"
    },
    "title": "CEDRUSɑ"
   },
   {
    "category": "sig",
    "folder": "CS",
    "instance": "CS-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/6Y7RS3WZHP5HOVGHOSW64T4DZNPSAXDS/",
     "folder": "CS",
     "instance": "CS-128",
     "pub_date": "2026-09-20 14:19",
     "spec": "specs/CS.pdf",
     "spec_extra": [],
     "spec_file": "CS.pdf",
     "title": "CS",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CS.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:19",
    "reason": "does not compile as shipped (missing NTT.h, conflicting static declaration)",
    "reason_scope": "scheme",
    "scheme": "CS-128",
    "sizes": {
     "kat_path": "schemes/CS/Test_Vectors/KAT_SIG_CS_128.txt",
     "msg": 56,
     "pk": 976,
     "sig_max": 1548,
     "sig_min": 1548,
     "sk": 1888,
     "source": "kat"
    },
    "title": "CS"
   },
   {
    "category": "sig",
    "folder": "CS",
    "instance": "CS-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/6Y7RS3WZHP5HOVGHOSW64T4DZNPSAXDS/",
     "folder": "CS",
     "instance": "CS-256",
     "pub_date": "2026-09-20 14:19",
     "spec": "specs/CS.pdf",
     "spec_extra": [],
     "spec_file": "CS.pdf",
     "title": "CS",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CS.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:19",
    "reason": "does not compile as shipped (missing NTT.h, conflicting static declaration)",
    "reason_scope": "scheme",
    "scheme": "CS-256",
    "sizes": {
     "kat_path": "schemes/CS/Test_Vectors/KAT_SIG_CS_256.txt",
     "msg": 56,
     "pk": 1760,
     "sig_max": 3164,
     "sig_min": 3164,
     "sk": 3968,
     "source": "kat"
    },
    "title": "CS"
   },
   {
    "category": "sig",
    "folder": "CS",
    "instance": "CS-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/6Y7RS3WZHP5HOVGHOSW64T4DZNPSAXDS/",
     "folder": "CS",
     "instance": "CS-512",
     "pub_date": "2026-09-20 14:19",
     "spec": "specs/CS.pdf",
     "spec_extra": [],
     "spec_file": "CS.pdf",
     "title": "CS",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/CS.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:19",
    "reason": "does not compile as shipped (missing NTT.h, conflicting static declaration)",
    "reason_scope": "scheme",
    "scheme": "CS-512",
    "sizes": {
     "kat_path": "schemes/CS/Test_Vectors/KAT_SIG_CS_512.txt",
     "msg": 56,
     "pk": 4288,
     "sig_max": 5975,
     "sig_min": 5975,
     "sk": 7808,
     "source": "kat"
    },
    "title": "CS"
   },
   {
    "category": "sig",
    "folder": "DOVE",
    "instance": "DOVE_classic_ref",
    "level": {
     "bits": 512,
     "claim": "DOVE spec Table 2: the shipped prebuilt objects produce the DOVE_classic_512 key and signature sizes (the Makefile default DOVE128 is not what was linked)",
     "label": "512",
     "param_set": "DOVE_classic_512",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PK36WEI2O5J6TBSBL5MRRDYPATRYYPIT/",
     "folder": "DOVE",
     "instance": "DOVE_classic_ref",
     "pub_date": "2026-09-20 14:17",
     "spec": "specs/DOVE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "DOVE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DOVE.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:17",
    "reason": "public keys 5-22 MB; nested RAR package",
    "reason_scope": "scheme",
    "scheme": "DOVE_classic_ref",
    "sizes": {
     "msg": 56,
     "pk": 22833052,
     "results_path": "results/DOVE/DOVE_classic_ref.json",
     "sig_max": 648,
     "sk": 20181508,
     "source": "ngcc_results"
    },
    "title": "DOVE"
   },
   {
    "category": "sig",
    "folder": "DOVE",
    "instance": "DOVE_pkc_skc_ref",
    "level": {
     "bits": 512,
     "claim": "DOVE spec Table 2: the shipped prebuilt objects produce the DOVE_pkc_skc_512 key and signature sizes (the Makefile default DOVE128 is not what was linked)",
     "label": "512",
     "param_set": "DOVE_pkc_skc_512",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PK36WEI2O5J6TBSBL5MRRDYPATRYYPIT/",
     "folder": "DOVE",
     "instance": "DOVE_pkc_skc_ref",
     "pub_date": "2026-09-20 14:17",
     "spec": "specs/DOVE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "DOVE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/DOVE.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:17",
    "reason": "public keys 5-22 MB; nested RAR package",
    "reason_scope": "scheme",
    "scheme": "DOVE_pkc_skc_ref",
    "sizes": {
     "msg": 56,
     "pk": 5062192,
     "results_path": "results/DOVE/DOVE_pkc_skc_ref.json",
     "sig_max": 648,
     "sk": 72,
     "source": "ngcc_results"
    },
    "title": "DOVE"
   },
   {
    "category": "sig",
    "folder": "Facto-DSA",
    "instance": "Facto-DSA-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/X63HQQDTUFPQQGA4DJAHSAISTNYZUVC6/",
     "folder": "Facto-DSA",
     "instance": "Facto-DSA-256",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Facto-DSA.pdf",
     "spec_extra": [],
     "spec_file": "algorithm-specification-facto-dsa.pdf",
     "title": "Facto-DSA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Facto-DSA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "public key 1.1 MB",
    "reason_scope": "instance",
    "scheme": "Facto-DSA-256",
    "sizes": {
     "kat_path": "schemes/Facto-DSA/Test_Vectors/KAT_SIG_Facto-DSA-256.txt",
     "msg": 56,
     "pk": 456960,
     "results_path": "results/Facto-DSA/Facto-DSA-256.json",
     "sig_max": 68,
     "sk": 11662,
     "source": "ngcc_results"
    },
    "title": "Facto-DSA"
   },
   {
    "category": "sig",
    "folder": "Facto-DSA",
    "instance": "Facto-DSA-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/X63HQQDTUFPQQGA4DJAHSAISTNYZUVC6/",
     "folder": "Facto-DSA",
     "instance": "Facto-DSA-512",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Facto-DSA.pdf",
     "spec_extra": [],
     "spec_file": "algorithm-specification-facto-dsa.pdf",
     "title": "Facto-DSA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Facto-DSA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "public key 5.7 MB",
    "reason_scope": "instance",
    "scheme": "Facto-DSA-512",
    "sizes": {
     "msg": 56,
     "pk": 5674240,
     "results_path": "results/Facto-DSA/Facto-DSA-512.json",
     "sig_max": 128,
     "sk": 61922,
     "source": "ngcc_results"
    },
    "title": "Facto-DSA"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-160f",
    "level": {
     "bits": 128,
     "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
     "label": "128",
     "param_set": "160f",
     "source": "spec",
     "variant": "f"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-160f",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-160f",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-160f.txt",
     "msg": 56,
     "pk": 40,
     "results_path": "results/Flextree/Flextree-160f.json",
     "sig_max": 18672,
     "sk": 80,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-160s",
    "level": {
     "bits": 128,
     "claim": "NGCC category I instance; the submitter's nominal figure is 160-bit classical / 80-bit quantum security, chosen so that the 80-bit quantum requirement holds",
     "label": "128",
     "param_set": "160s",
     "source": "spec",
     "variant": "s"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-160s",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-160s",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-160s.txt",
     "msg": 56,
     "pk": 40,
     "results_path": "results/Flextree/Flextree-160s.json",
     "sig_max": 9580,
     "sk": 80,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-256f",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-256f",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-256f",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-256f.txt",
     "msg": 56,
     "pk": 64,
     "results_path": "results/Flextree/Flextree-256f.json",
     "sig_max": 46856,
     "sk": 128,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-256s",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-256s",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-256s",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-256s.txt",
     "msg": 56,
     "pk": 64,
     "results_path": "results/Flextree/Flextree-256s.json",
     "sig_max": 25420,
     "sk": 128,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-384f",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-384f",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-384f",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-384f.txt",
     "msg": 56,
     "pk": 96,
     "results_path": "results/Flextree/Flextree-384f.json",
     "sig_max": 73396,
     "sk": 192,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-384s",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-384s",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-384s",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-384s.txt",
     "msg": 56,
     "pk": 96,
     "results_path": "results/Flextree/Flextree-384s.json",
     "sig_max": 60180,
     "sk": 192,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-512f",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-512f",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-512f",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-512f.txt",
     "msg": 56,
     "pk": 128,
     "results_path": "results/Flextree/Flextree-512f.json",
     "sig_max": 117296,
     "sk": 256,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Flextree",
    "instance": "Flextree-512s",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/5DSK4DF2SIKI6RNI6NC5RYXOJG73DMAJ/",
     "folder": "Flextree",
     "instance": "Flextree-512s",
     "pub_date": "2026-09-20 14:16",
     "spec": "specs/Flextree.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "FlexTree",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Flextree.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:16",
    "reason": "1.8-14.7 MB precomputed tables; #error without __int128",
    "reason_scope": "scheme",
    "scheme": "Flextree-512s",
    "sizes": {
     "kat_path": "schemes/Flextree/Test_Vectors/KAT_SIG_Flextree-512s.txt",
     "msg": 56,
     "pk": 128,
     "results_path": "results/Flextree/Flextree-512s.json",
     "sig_max": 94948,
     "sk": 256,
     "source": "ngcc_results"
    },
    "title": "FlexTree"
   },
   {
    "category": "sig",
    "folder": "Origami",
    "instance": "Origami-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7Z47WGTALXYFJS5YRRGDL65NJUG3CU56/",
     "folder": "Origami",
     "instance": "Origami-128",
     "pub_date": "2026-09-20 14:09",
     "spec": "specs/Origami.pdf",
     "spec_extra": [
      {
       "file": "Origami Algorithm specifications Appendix.pdf",
       "href": "specs/Origami-origami-algorithm-specifications-appendix.pdf"
      }
     ],
     "spec_file": "Origami Algorithm specifications.pdf",
     "title": "Origami",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Origami.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:09",
    "reason": "aes.c uses AES-NI intrinsics",
    "reason_scope": "scheme",
    "scheme": "Origami-128",
    "sizes": {
     "kat_path": "schemes/Origami/Test_Vectors/KAT_SIG_Origami-128.txt",
     "msg": 56,
     "pk": 2996,
     "results_path": "results/Origami/Origami-128.json",
     "sig_max": 116,
     "sk": 16,
     "source": "ngcc_results"
    },
    "title": "Origami"
   },
   {
    "category": "sig",
    "folder": "Origami",
    "instance": "Origami-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7Z47WGTALXYFJS5YRRGDL65NJUG3CU56/",
     "folder": "Origami",
     "instance": "Origami-256",
     "pub_date": "2026-09-20 14:09",
     "spec": "specs/Origami.pdf",
     "spec_extra": [
      {
       "file": "Origami Algorithm specifications Appendix.pdf",
       "href": "specs/Origami-origami-algorithm-specifications-appendix.pdf"
      }
     ],
     "spec_file": "Origami Algorithm specifications.pdf",
     "title": "Origami",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Origami.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:09",
    "reason": "aes.c uses AES-NI intrinsics",
    "reason_scope": "scheme",
    "scheme": "Origami-256",
    "sizes": {
     "kat_path": "schemes/Origami/Test_Vectors/KAT_SIG_Origami-256.txt",
     "msg": 56,
     "pk": 14968,
     "results_path": "results/Origami/Origami-256.json",
     "sig_max": 516,
     "sk": 32,
     "source": "ngcc_results"
    },
    "title": "Origami"
   },
   {
    "category": "sig",
    "folder": "Origami",
    "instance": "Origami-384",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7Z47WGTALXYFJS5YRRGDL65NJUG3CU56/",
     "folder": "Origami",
     "instance": "Origami-384",
     "pub_date": "2026-09-20 14:09",
     "spec": "specs/Origami.pdf",
     "spec_extra": [
      {
       "file": "Origami Algorithm specifications Appendix.pdf",
       "href": "specs/Origami-origami-algorithm-specifications-appendix.pdf"
      }
     ],
     "spec_file": "Origami Algorithm specifications.pdf",
     "title": "Origami",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Origami.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:09",
    "reason": "aes.c uses AES-NI intrinsics",
    "reason_scope": "scheme",
    "scheme": "Origami-384",
    "sizes": {
     "kat_path": "schemes/Origami/Test_Vectors/KAT_SIG_Origami-384.txt",
     "msg": 56,
     "pk": 27940,
     "results_path": "results/Origami/Origami-384.json",
     "sig_max": 948,
     "sk": 48,
     "source": "ngcc_results"
    },
    "title": "Origami"
   },
   {
    "category": "sig",
    "folder": "Origami",
    "instance": "Origami-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/7Z47WGTALXYFJS5YRRGDL65NJUG3CU56/",
     "folder": "Origami",
     "instance": "Origami-512",
     "pub_date": "2026-09-20 14:09",
     "spec": "specs/Origami.pdf",
     "spec_extra": [
      {
       "file": "Origami Algorithm specifications Appendix.pdf",
       "href": "specs/Origami-origami-algorithm-specifications-appendix.pdf"
      }
     ],
     "spec_file": "Origami Algorithm specifications.pdf",
     "title": "Origami",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Origami.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:09",
    "reason": "aes.c uses AES-NI intrinsics",
    "reason_scope": "scheme",
    "scheme": "Origami-512",
    "sizes": {
     "kat_path": "schemes/Origami/Test_Vectors/KAT_SIG_Origami-512.txt",
     "msg": 56,
     "pk": 35924,
     "results_path": "results/Origami/Origami-512.json",
     "sig_max": 1220,
     "sk": 64,
     "source": "ngcc_results"
    },
    "title": "Origami"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SHAKE__Rhyme-SHAKE-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-128",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 1491 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SHAKE__Rhyme-SHAKE-128",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SHAKE/KAT_SIG_Rhyme-SHAKE-128.txt",
     "msg": 56,
     "pk": 800,
     "results_path": "results/Rhyme/Rhyme-SHAKE__Rhyme-SHAKE-128.json",
     "sig_max": 5156,
     "sk": 11072,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SHAKE__Rhyme-SHAKE-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-256",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SHAKE__Rhyme-SHAKE-256",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SHAKE/KAT_SIG_Rhyme-SHAKE-256.txt",
     "msg": 56,
     "pk": 1824,
     "sig_max": 3275,
     "sig_min": 3261,
     "sk": 22336,
     "source": "kat"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SHAKE__Rhyme-SHAKE-384",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-384",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 4759 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SHAKE__Rhyme-SHAKE-384",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SHAKE/KAT_SIG_Rhyme-SHAKE-384.txt",
     "msg": 56,
     "pk": 2720,
     "results_path": "results/Rhyme/Rhyme-SHAKE__Rhyme-SHAKE-384.json",
     "sig_max": 14436,
     "sk": 45760,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SHAKE__Rhyme-SHAKE-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-512",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 7022 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SHAKE__Rhyme-SHAKE-512",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SHAKE/KAT_SIG_Rhyme-SHAKE-512.txt",
     "msg": 56,
     "pk": 3872,
     "results_path": "results/Rhyme/Rhyme-SHAKE__Rhyme-SHAKE-512.json",
     "sig_max": 20612,
     "sk": 44864,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SM3__Rhyme-SM3-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-128",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 1489 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SM3__Rhyme-SM3-128",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SM3/KAT_SIG_Rhyme-SM3-128.txt",
     "msg": 56,
     "pk": 800,
     "results_path": "results/Rhyme/Rhyme-SM3__Rhyme-SM3-128.json",
     "sig_max": 5156,
     "sk": 11072,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SM3__Rhyme-SM3-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-256",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 3263 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SM3__Rhyme-SM3-256",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SM3/KAT_SIG_Rhyme-SM3-256.txt",
     "msg": 56,
     "pk": 1824,
     "results_path": "results/Rhyme/Rhyme-SM3__Rhyme-SM3-256.json",
     "sig_max": 10308,
     "sk": 22336,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SM3__Rhyme-SM3-384",
    "level": {
     "bits": 384,
     "claim": null,
     "label": "384",
     "param_set": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-384",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 4748 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SM3__Rhyme-SM3-384",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SM3/KAT_SIG_Rhyme-SM3-384.txt",
     "msg": 56,
     "pk": 2720,
     "results_path": "results/Rhyme/Rhyme-SM3__Rhyme-SM3-384.json",
     "sig_max": 14436,
     "sk": 45760,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "Rhyme",
    "instance": "Rhyme-SM3__Rhyme-SM3-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AJJF7BH7DV3KC4Q43KDVGU2XIPXRJ7KH/",
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-512",
     "pub_date": "2026-09-20 14:06",
     "spec": "specs/Rhyme.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "Rhyme",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Rhyme.zip"
    },
    "notes": [
     "official KAT file reports different sizes: sig_max 7012 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:06",
    "reason": "unguarded __int128 in kg_zint.h/kg_solver.c/sampler.c",
    "reason_scope": "scheme",
    "scheme": "Rhyme-SM3__Rhyme-SM3-512",
    "sizes": {
     "kat_path": "schemes/Rhyme/Test_Vectors/Rhyme-SM3/KAT_SIG_Rhyme-SM3-512.txt",
     "msg": 56,
     "pk": 3872,
     "results_path": "results/Rhyme/Rhyme-SM3__Rhyme-SM3-512.json",
     "sig_max": 20612,
     "sk": 44864,
     "source": "ngcc_results"
    },
    "title": "Rhyme"
   },
   {
    "category": "sig",
    "folder": "shuttle",
    "instance": "SHUTTLE-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AOAU5JIQQTIQYH7LGFPMDI4EQAVDJM2C/",
     "folder": "shuttle",
     "instance": "SHUTTLE-128",
     "pub_date": "2026-09-20 14:05",
     "spec": "specs/shuttle.pdf",
     "spec_extra": [],
     "spec_file": "Shuttle 算法设计文档（V4）.pdf",
     "title": "Shuttle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/shuttle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:05",
    "reason": "unguarded __int128 in approx_*.h",
    "reason_scope": "scheme",
    "scheme": "SHUTTLE-128",
    "sizes": {
     "kat_path": "schemes/shuttle/Test_Vectors/KAT_SIG_SHUTTLE-128.txt",
     "msg": 56,
     "pk": 1264,
     "results_path": "results/shuttle/SHUTTLE-128.json",
     "sig_max": 1183,
     "sk": 2288,
     "source": "ngcc_results"
    },
    "title": "Shuttle"
   },
   {
    "category": "sig",
    "folder": "shuttle",
    "instance": "SHUTTLE-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AOAU5JIQQTIQYH7LGFPMDI4EQAVDJM2C/",
     "folder": "shuttle",
     "instance": "SHUTTLE-256",
     "pub_date": "2026-09-20 14:05",
     "spec": "specs/shuttle.pdf",
     "spec_extra": [],
     "spec_file": "Shuttle 算法设计文档（V4）.pdf",
     "title": "Shuttle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/shuttle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:05",
    "reason": "unguarded __int128 in approx_*.h",
    "reason_scope": "scheme",
    "scheme": "SHUTTLE-256",
    "sizes": {
     "kat_path": "schemes/shuttle/Test_Vectors/KAT_SIG_SHUTTLE-256.txt",
     "msg": 56,
     "pk": 1952,
     "results_path": "results/shuttle/SHUTTLE-256.json",
     "sig_max": 2417,
     "sk": 3680,
     "source": "ngcc_results"
    },
    "title": "Shuttle"
   },
   {
    "category": "sig",
    "folder": "shuttle",
    "instance": "SHUTTLE-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/AOAU5JIQQTIQYH7LGFPMDI4EQAVDJM2C/",
     "folder": "shuttle",
     "instance": "SHUTTLE-512",
     "pub_date": "2026-09-20 14:05",
     "spec": "specs/shuttle.pdf",
     "spec_extra": [],
     "spec_file": "Shuttle 算法设计文档（V4）.pdf",
     "title": "Shuttle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/shuttle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:05",
    "reason": "unguarded __int128 in approx_*.h",
    "reason_scope": "scheme",
    "scheme": "SHUTTLE-512",
    "sizes": {
     "kat_path": "schemes/shuttle/Test_Vectors/KAT_SIG_SHUTTLE-512.txt",
     "msg": 56,
     "pk": 3648,
     "results_path": "results/shuttle/SHUTTLE-512.json",
     "sig_max": 5001,
     "sk": 7104,
     "source": "ngcc_results"
    },
    "title": "Shuttle"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D-push12",
    "instance": "sqisign2d_lvl1",
    "level": {
     "bits": 128,
     "claim": "SQIsign2D-push12 spec §5.2: Level-1 λ=128 (64-bit quantum, not an NGCC category), Level-2 λ=160 (NGCC category I, 80-bit quantum), Level-3 256/128, Level-4 512/256",
     "label": "128",
     "param_set": "lvl1",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/55H26TSNYGPQZRBE3NGNQVIDCPCUPI6Q/",
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl1",
     "pub_date": "2026-09-20 14:03",
     "spec": "specs/SQIsign2D-push12.pdf",
     "spec_extra": [],
     "spec_file": "算法本文.pdf",
     "title": "SQIsign2D-push1/2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D-push12.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:03",
    "reason": "needs GMP; aborts on internal assertion in the x86 build",
    "reason_scope": "scheme",
    "scheme": "sqisign2d_lvl1",
    "sizes": {
     "kat_path": "schemes/SQIsign2D-push12/Test_Vectors/KAT_SIG_SQIsign2D-lvl1.txt",
     "msg": 56,
     "pk": 64,
     "sig_max": 150,
     "sig_min": 150,
     "sk": 456,
     "source": "kat"
    },
    "title": "SQIsign2D-push1/2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D-push12",
    "instance": "sqisign2d_lvl2",
    "level": {
     "bits": 128,
     "claim": "SQIsign2D-push12 spec §5.2: Level-1 λ=128 (64-bit quantum, not an NGCC category), Level-2 λ=160 (NGCC category I, 80-bit quantum), Level-3 256/128, Level-4 512/256",
     "label": "128",
     "param_set": "lvl2",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/55H26TSNYGPQZRBE3NGNQVIDCPCUPI6Q/",
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl2",
     "pub_date": "2026-09-20 14:03",
     "spec": "specs/SQIsign2D-push12.pdf",
     "spec_extra": [],
     "spec_file": "算法本文.pdf",
     "title": "SQIsign2D-push1/2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D-push12.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:03",
    "reason": "needs GMP; aborts on internal assertion in the x86 build",
    "reason_scope": "scheme",
    "scheme": "sqisign2d_lvl2",
    "sizes": {
     "kat_path": "schemes/SQIsign2D-push12/Test_Vectors/KAT_SIG_SQIsign2D-lvl2.txt",
     "msg": 56,
     "pk": 96,
     "sig_max": 218,
     "sig_min": 218,
     "sk": 676,
     "source": "kat"
    },
    "title": "SQIsign2D-push1/2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D-push12",
    "instance": "sqisign2d_lvl3",
    "level": {
     "bits": 256,
     "claim": "SQIsign2D-push12 spec §5.2: Level-1 λ=128 (64-bit quantum, not an NGCC category), Level-2 λ=160 (NGCC category I, 80-bit quantum), Level-3 256/128, Level-4 512/256",
     "label": "256",
     "param_set": "lvl3",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/55H26TSNYGPQZRBE3NGNQVIDCPCUPI6Q/",
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl3",
     "pub_date": "2026-09-20 14:03",
     "spec": "specs/SQIsign2D-push12.pdf",
     "spec_extra": [],
     "spec_file": "算法本文.pdf",
     "title": "SQIsign2D-push1/2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D-push12.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:03",
    "reason": "needs GMP; aborts on internal assertion in the x86 build",
    "reason_scope": "scheme",
    "scheme": "sqisign2d_lvl3",
    "sizes": {
     "kat_path": "schemes/SQIsign2D-push12/Test_Vectors/KAT_SIG_SQIsign2D-lvl3.txt",
     "msg": 56,
     "pk": 128,
     "sig_max": 293,
     "sig_min": 293,
     "sk": 676,
     "source": "kat"
    },
    "title": "SQIsign2D-push1/2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D-push12",
    "instance": "sqisign2d_lvl4",
    "level": {
     "bits": 512,
     "claim": "SQIsign2D-push12 spec §5.2: Level-1 λ=128 (64-bit quantum, not an NGCC category), Level-2 λ=160 (NGCC category I, 80-bit quantum), Level-3 256/128, Level-4 512/256",
     "label": "512",
     "param_set": "lvl4",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/55H26TSNYGPQZRBE3NGNQVIDCPCUPI6Q/",
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl4",
     "pub_date": "2026-09-20 14:03",
     "spec": "specs/SQIsign2D-push12.pdf",
     "spec_extra": [],
     "spec_file": "算法本文.pdf",
     "title": "SQIsign2D-push1/2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D-push12.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:03",
    "reason": "needs GMP; aborts on internal assertion in the x86 build",
    "reason_scope": "scheme",
    "scheme": "sqisign2d_lvl4",
    "sizes": {
     "kat_path": "schemes/SQIsign2D-push12/Test_Vectors/KAT_SIG_SQIsign2D-lvl4.txt",
     "msg": 56,
     "pk": 262,
     "sig_max": 593,
     "sig_min": 593,
     "sk": 1838,
     "source": "kat"
    },
    "title": "SQIsign2D-push1/2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level1-eff",
    "level": {
     "bits": 128,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "128",
     "param_set": "Level1-eff",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level1-eff",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level1-eff",
    "sizes": {
     "msg": 56,
     "pk": 64,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level1-eff.json",
     "sig_max": 200,
     "sk": 488,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level1-sec",
    "level": {
     "bits": 128,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "128",
     "param_set": "Level1-sec",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level1-sec",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level1-sec",
    "sizes": {
     "msg": 56,
     "pk": 68,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level1-sec.json",
     "sig_max": 212,
     "sk": 521,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level2-eff",
    "level": {
     "bits": 128,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "128",
     "param_set": "Level2-eff",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level2-eff",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level2-eff",
    "sizes": {
     "msg": 56,
     "pk": 80,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level2-eff.json",
     "sig_max": 248,
     "sk": 610,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level2-sec",
    "level": {
     "bits": 128,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "128",
     "param_set": "Level2-sec",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level2-sec",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level2-sec",
    "sizes": {
     "msg": 56,
     "pk": 84,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level2-sec.json",
     "sig_max": 260,
     "sk": 643,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level3-eff",
    "level": {
     "bits": 256,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "256",
     "param_set": "Level3-eff",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level3-eff",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level3-eff",
    "sizes": {
     "msg": 56,
     "pk": 128,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level3-eff.json",
     "sig_max": 392,
     "sk": 976,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level3-sec",
    "level": {
     "bits": 256,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "256",
     "param_set": "Level3-sec",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level3-sec",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level3-sec",
    "sizes": {
     "msg": 56,
     "pk": 132,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level3-sec.json",
     "sig_max": 404,
     "sk": 1009,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level5-eff",
    "level": {
     "bits": 512,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "512",
     "param_set": "Level5-eff",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level5-eff",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level5-eff",
    "sizes": {
     "msg": 56,
     "pk": 256,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level5-eff.json",
     "sig_max": 776,
     "sk": 1952,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsign2D2",
    "instance": "SQISign2Dsquare-Level5-sec",
    "level": {
     "bits": 512,
     "claim": "SQIsign2D² spec §4.2 / Table 9.1: Level1 128/64, Level2 160/80 (NGCC category I), Level3 256/128, Level5 512/256 classical/quantum bits; eff and sec share a level",
     "label": "512",
     "param_set": "Level5-sec",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PXELFI4WKOOCWZAZGVWEN4TJWJUTMRU4/",
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level5-sec",
     "pub_date": "2026-09-20 14:04",
     "spec": "specs/SQIsign2D2.pdf",
     "spec_extra": [
      {
       "file": "SQISign Algorithm specifications Addition.pdf",
       "href": "specs/SQIsign2D2-sqisign-algorithm-specifications-addition.pdf"
      }
     ],
     "spec_file": "SQISign2D2 Algorithm specifications.pdf",
     "title": "SQIsign2D2",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsign2D2.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:04",
    "reason": "needs GMP (ships only a Windows import library)",
    "reason_scope": "scheme",
    "scheme": "SQISign2Dsquare-Level5-sec",
    "sizes": {
     "msg": 56,
     "pk": 268,
     "results_path": "results/SQIsign2D2/SQISign2Dsquare-Level5-sec.json",
     "sig_max": 812,
     "sk": 2046,
     "source": "ngcc_results"
    },
    "title": "SQIsign2D2"
   },
   {
    "category": "sig",
    "folder": "SQIsignTriangle",
    "instance": "SQIsignTriangle_lvl1",
    "level": {
     "bits": 128,
     "claim": "SQIsignTriangle spec Table 6 and parameter-set note: lvl1 128/64 (evaluation set, not recommended), lvl2 160/80 (NGCC category I), lvl5 256/128, lvl6 512/256",
     "label": "128",
     "param_set": "lvl1",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/463HDEM6EQ3FHMKNIT7LOT5T7CW7J7SJ/",
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl1",
     "pub_date": "2026-09-20 14:02",
     "spec": "specs/SQIsignTriangle.pdf",
     "spec_extra": [
      {
       "file": "SQIsignTriangle_Parameter_Sets_Note.pdf",
       "href": "specs/SQIsignTriangle-sqisigntriangle-parameter-sets-note.pdf"
      }
     ],
     "spec_file": "Algorithm specifications.pdf",
     "title": "SQIsignTriangle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsignTriangle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:02",
    "reason": "needs GMP or mini-gmp; __int128",
    "reason_scope": "scheme",
    "scheme": "SQIsignTriangle_lvl1",
    "sizes": {
     "kat_path": "schemes/SQIsignTriangle/Test_Vectors/KAT_SIG_SQIsignTriangle_lvl1.txt",
     "msg": 56,
     "pk": 65,
     "results_path": "results/SQIsignTriangle/SQIsignTriangle_lvl1.json",
     "sig_max": 204,
     "sk": 353,
     "source": "ngcc_results"
    },
    "title": "SQIsignTriangle"
   },
   {
    "category": "sig",
    "folder": "SQIsignTriangle",
    "instance": "SQIsignTriangle_lvl2",
    "level": {
     "bits": 128,
     "claim": "SQIsignTriangle spec Table 6 and parameter-set note: lvl1 128/64 (evaluation set, not recommended), lvl2 160/80 (NGCC category I), lvl5 256/128, lvl6 512/256",
     "label": "128",
     "param_set": "lvl2",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/463HDEM6EQ3FHMKNIT7LOT5T7CW7J7SJ/",
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl2",
     "pub_date": "2026-09-20 14:02",
     "spec": "specs/SQIsignTriangle.pdf",
     "spec_extra": [
      {
       "file": "SQIsignTriangle_Parameter_Sets_Note.pdf",
       "href": "specs/SQIsignTriangle-sqisigntriangle-parameter-sets-note.pdf"
      }
     ],
     "spec_file": "Algorithm specifications.pdf",
     "title": "SQIsignTriangle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsignTriangle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:02",
    "reason": "needs GMP or mini-gmp; __int128",
    "reason_scope": "scheme",
    "scheme": "SQIsignTriangle_lvl2",
    "sizes": {
     "kat_path": "schemes/SQIsignTriangle/Test_Vectors/KAT_SIG_SQIsignTriangle_lvl2.txt",
     "msg": 56,
     "pk": 81,
     "results_path": "results/SQIsignTriangle/SQIsignTriangle_lvl2.json",
     "sig_max": 255,
     "sk": 437,
     "source": "ngcc_results"
    },
    "title": "SQIsignTriangle"
   },
   {
    "category": "sig",
    "folder": "SQIsignTriangle",
    "instance": "SQIsignTriangle_lvl5",
    "level": {
     "bits": 256,
     "claim": "SQIsignTriangle spec Table 6 and parameter-set note: lvl1 128/64 (evaluation set, not recommended), lvl2 160/80 (NGCC category I), lvl5 256/128, lvl6 512/256",
     "label": "256",
     "param_set": "lvl5",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/463HDEM6EQ3FHMKNIT7LOT5T7CW7J7SJ/",
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl5",
     "pub_date": "2026-09-20 14:02",
     "spec": "specs/SQIsignTriangle.pdf",
     "spec_extra": [
      {
       "file": "SQIsignTriangle_Parameter_Sets_Note.pdf",
       "href": "specs/SQIsignTriangle-sqisigntriangle-parameter-sets-note.pdf"
      }
     ],
     "spec_file": "Algorithm specifications.pdf",
     "title": "SQIsignTriangle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsignTriangle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:02",
    "reason": "needs GMP or mini-gmp; __int128",
    "reason_scope": "scheme",
    "scheme": "SQIsignTriangle_lvl5",
    "sizes": {
     "kat_path": "schemes/SQIsignTriangle/Test_Vectors/KAT_SIG_SQIsignTriangle_lvl5.txt",
     "msg": 56,
     "pk": 129,
     "results_path": "results/SQIsignTriangle/SQIsignTriangle_lvl5.json",
     "sig_max": 408,
     "sk": 701,
     "source": "ngcc_results"
    },
    "title": "SQIsignTriangle"
   },
   {
    "category": "sig",
    "folder": "SQIsignTriangle",
    "instance": "SQIsignTriangle_lvl6",
    "level": {
     "bits": 512,
     "claim": "SQIsignTriangle spec Table 6 and parameter-set note: lvl1 128/64 (evaluation set, not recommended), lvl2 160/80 (NGCC category I), lvl5 256/128, lvl6 512/256",
     "label": "512",
     "param_set": "lvl6",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/463HDEM6EQ3FHMKNIT7LOT5T7CW7J7SJ/",
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl6",
     "pub_date": "2026-09-20 14:02",
     "spec": "specs/SQIsignTriangle.pdf",
     "spec_extra": [
      {
       "file": "SQIsignTriangle_Parameter_Sets_Note.pdf",
       "href": "specs/SQIsignTriangle-sqisigntriangle-parameter-sets-note.pdf"
      }
     ],
     "spec_file": "Algorithm specifications.pdf",
     "title": "SQIsignTriangle",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/SQIsignTriangle.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:02",
    "reason": "needs GMP or mini-gmp; __int128",
    "reason_scope": "scheme",
    "scheme": "SQIsignTriangle_lvl6",
    "sizes": {
     "kat_path": "schemes/SQIsignTriangle/Test_Vectors/KAT_SIG_SQIsignTriangle_lvl6.txt",
     "msg": 56,
     "pk": 257,
     "results_path": "results/SQIsignTriangle/SQIsignTriangle_lvl6.json",
     "sig_max": 816,
     "sk": 1409,
     "source": "ngcc_results"
    },
    "title": "SQIsignTriangle"
   },
   {
    "category": "sig",
    "folder": "Tins",
    "instance": "Tins128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3LQUXPLSYUUHSKU4QWDFI6C3O4H3GXKF/",
     "folder": "Tins",
     "instance": "Tins128",
     "pub_date": "2026-09-20 14:01",
     "spec": "specs/Tins.pdf",
     "spec_extra": [],
     "spec_file": "tins.pdf",
     "title": "Tins",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Tins.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:01",
    "reason": "6.5 MB stack frame",
    "reason_scope": "scheme",
    "scheme": "Tins128",
    "sizes": {
     "kat_path": "schemes/Tins/Test_Vectors/KAT_SIG_Tins128.txt",
     "msg": 56,
     "pk": 55,
     "results_path": "results/Tins/Tins128.json",
     "sig_max": 3896,
     "sk": 40,
     "source": "ngcc_results"
    },
    "title": "Tins"
   },
   {
    "category": "sig",
    "folder": "Tins",
    "instance": "Tins256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3LQUXPLSYUUHSKU4QWDFI6C3O4H3GXKF/",
     "folder": "Tins",
     "instance": "Tins256",
     "pub_date": "2026-09-20 14:01",
     "spec": "specs/Tins.pdf",
     "spec_extra": [],
     "spec_file": "tins.pdf",
     "title": "Tins",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Tins.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:01",
    "reason": "6.5 MB stack frame",
    "reason_scope": "scheme",
    "scheme": "Tins256",
    "sizes": {
     "kat_path": "schemes/Tins/Test_Vectors/KAT_SIG_Tins256.txt",
     "msg": 56,
     "pk": 98,
     "results_path": "results/Tins/Tins256.json",
     "sig_max": 13012,
     "sk": 64,
     "source": "ngcc_results"
    },
    "title": "Tins"
   },
   {
    "category": "sig",
    "folder": "Tins",
    "instance": "Tins512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/3LQUXPLSYUUHSKU4QWDFI6C3O4H3GXKF/",
     "folder": "Tins",
     "instance": "Tins512",
     "pub_date": "2026-09-20 14:01",
     "spec": "specs/Tins.pdf",
     "spec_extra": [],
     "spec_file": "tins.pdf",
     "title": "Tins",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/Tins.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 14:01",
    "reason": "6.5 MB stack frame",
    "reason_scope": "scheme",
    "scheme": "Tins512",
    "sizes": {
     "kat_path": "schemes/Tins/Test_Vectors/KAT_SIG_Tins512.txt",
     "msg": 56,
     "pk": 195,
     "results_path": "results/Tins/Tins512.json",
     "sig_max": 51187,
     "sk": 128,
     "source": "ngcc_results"
    },
    "title": "Tins"
   },
   {
    "category": "sig",
    "folder": "TRINE",
    "instance": "TRINE-256-ShortSig",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PHFOUHYOCTA42ALMCBKHF5JLD2HQGVXV/",
     "folder": "TRINE",
     "instance": "TRINE-256-ShortSig",
     "pub_date": "2026-09-20 14:00",
     "spec": "specs/TRINE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "TRINE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRINE.zip"
    },
    "notes": [
     "official KAT file reports different sizes: pk 384064, sk 64, sig_max 5968 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:00",
    "reason": "not imported: the import manifest restricts this submission to TRINE-128-ShortSig, TRINE-128-balanced",
    "reason_scope": "instance",
    "scheme": "TRINE-256-ShortSig",
    "sizes": {
     "kat_path": "schemes/TRINE/Test_Vectors/KAT_SIG_TRINE-256-ShortSig.txt",
     "msg": 56,
     "pk": 63920,
     "results_path": "results/TRINE/TRINE-256-ShortSig__TRINE-ShortSig-I.json",
     "sig_max": 1652,
     "sk": 32,
     "source": "ngcc_results"
    },
    "title": "TRINE"
   },
   {
    "category": "sig",
    "folder": "TRINE",
    "instance": "TRINE-256-balanced",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PHFOUHYOCTA42ALMCBKHF5JLD2HQGVXV/",
     "folder": "TRINE",
     "instance": "TRINE-256-balanced",
     "pub_date": "2026-09-20 14:00",
     "spec": "specs/TRINE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "TRINE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRINE.zip"
    },
    "notes": [
     "official KAT file reports different sizes: pk 96064, sk 64, sig_max 11712 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:00",
    "reason": "not imported: the import manifest restricts this submission to TRINE-128-ShortSig, TRINE-128-balanced",
    "reason_scope": "instance",
    "scheme": "TRINE-256-balanced",
    "sizes": {
     "kat_path": "schemes/TRINE/Test_Vectors/KAT_SIG_TRINE-256-Balanced.txt",
     "msg": 56,
     "pk": 63920,
     "results_path": "results/TRINE/TRINE-256-balanced__TRINE-ShortSig-I.json",
     "sig_max": 1652,
     "sk": 32,
     "source": "ngcc_results"
    },
    "title": "TRINE"
   },
   {
    "category": "sig",
    "folder": "TRINE",
    "instance": "TRINE-512-ShortSig",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PHFOUHYOCTA42ALMCBKHF5JLD2HQGVXV/",
     "folder": "TRINE",
     "instance": "TRINE-512-ShortSig",
     "pub_date": "2026-09-20 14:00",
     "spec": "specs/TRINE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "TRINE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRINE.zip"
    },
    "notes": [
     "official KAT file reports different sizes: pk 3188776, sk 128, sig_max 23672 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:00",
    "reason": "not imported: the import manifest restricts this submission to TRINE-128-ShortSig, TRINE-128-balanced",
    "reason_scope": "instance",
    "scheme": "TRINE-512-ShortSig",
    "sizes": {
     "kat_path": "schemes/TRINE/Test_Vectors/KAT_SIG_TRINE-512-ShortSig.txt",
     "msg": 56,
     "pk": 63920,
     "results_path": "results/TRINE/TRINE-512-ShortSig__TRINE-ShortSig-I.json",
     "sig_max": 1652,
     "sk": 32,
     "source": "ngcc_results"
    },
    "title": "TRINE"
   },
   {
    "category": "sig",
    "folder": "TRINE",
    "instance": "TRINE-512-balanced",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/PHFOUHYOCTA42ALMCBKHF5JLD2HQGVXV/",
     "folder": "TRINE",
     "instance": "TRINE-512-balanced",
     "pub_date": "2026-09-20 14:00",
     "spec": "specs/TRINE.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "TRINE",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/TRINE.zip"
    },
    "notes": [
     "official KAT file reports different sizes: pk 797290, sk 128, sig_max 46565 (shown: host build of the reference code)"
    ],
    "pub_date": "2026-09-20 14:00",
    "reason": "not imported: the import manifest restricts this submission to TRINE-128-ShortSig, TRINE-128-balanced",
    "reason_scope": "instance",
    "scheme": "TRINE-512-balanced",
    "sizes": {
     "kat_path": "schemes/TRINE/Test_Vectors/KAT_SIG_TRINE-512-Balanced.txt",
     "msg": 56,
     "pk": 63920,
     "results_path": "results/TRINE/TRINE-512-balanced__TRINE-ShortSig-I.json",
     "sig_max": 1652,
     "sk": 32,
     "source": "ngcc_results"
    },
    "title": "TRINE"
   },
   {
    "category": "sig",
    "folder": "UVW_signature",
    "instance": "UVW-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KYXKYDE5L3DXFKASFNILENQKW4V73JXN/",
     "folder": "UVW_signature",
     "instance": "UVW-128",
     "pub_date": "2026-09-20 13:58",
     "spec": "specs/UVW_signature.pdf",
     "spec_extra": [],
     "spec_file": "UVW Signature Scheme.pdf",
     "title": "UVW signature",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/UVW%20signature.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:58",
    "reason": "public keys 5.9-95 MB",
    "reason_scope": "scheme",
    "scheme": "UVW-128",
    "sizes": {
     "msg": 56,
     "pk": 5897612,
     "results_path": "results/UVW_signature/UVW-128.json",
     "sig_max": 1244,
     "sk": 40,
     "source": "ngcc_results"
    },
    "title": "UVW signature"
   },
   {
    "category": "sig",
    "folder": "UVW_signature",
    "instance": "UVW-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KYXKYDE5L3DXFKASFNILENQKW4V73JXN/",
     "folder": "UVW_signature",
     "instance": "UVW-256",
     "pub_date": "2026-09-20 13:58",
     "spec": "specs/UVW_signature.pdf",
     "spec_extra": [],
     "spec_file": "UVW Signature Scheme.pdf",
     "title": "UVW signature",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/UVW%20signature.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:58",
    "reason": "public keys 5.9-95 MB",
    "reason_scope": "scheme",
    "scheme": "UVW-256",
    "sizes": {
     "msg": 56,
     "pk": 23040012,
     "results_path": "results/UVW_signature/UVW-256.json",
     "sig_max": 2444,
     "sk": 40,
     "source": "ngcc_results"
    },
    "title": "UVW signature"
   },
   {
    "category": "sig",
    "folder": "UVW_signature",
    "instance": "UVW-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/KYXKYDE5L3DXFKASFNILENQKW4V73JXN/",
     "folder": "UVW_signature",
     "instance": "UVW-512",
     "pub_date": "2026-09-20 13:58",
     "spec": "specs/UVW_signature.pdf",
     "spec_extra": [],
     "spec_file": "UVW Signature Scheme.pdf",
     "title": "UVW signature",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/UVW%20signature.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:58",
    "reason": "public keys 5.9-95 MB",
    "reason_scope": "scheme",
    "scheme": "UVW-512",
    "sizes": {
     "msg": 56,
     "pk": 95160012,
     "results_path": "results/UVW_signature/UVW-512.json",
     "sig_max": 4956,
     "sk": 72,
     "source": "ngcc_results"
    },
    "title": "UVW signature"
   },
   {
    "category": "sig",
    "folder": "VDOO",
    "instance": "VDOO-128",
    "level": {
     "bits": 128,
     "claim": null,
     "label": "128",
     "param_set": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/X2VGTA5L2EJJASOPF5TYJI2GAXDIO677/",
     "folder": "VDOO",
     "instance": "VDOO-128",
     "pub_date": "2026-09-20 13:54",
     "spec": "specs/VDOO.pdf",
     "spec_extra": [],
     "spec_file": "VDOO-Specifications.pdf",
     "title": "VDOO: Vinegar-Diagonal-Oil-Oil",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/VDOO.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:54",
    "reason": "public keys 331 KB-20 MB, bss up to 121 MB",
    "reason_scope": "scheme",
    "scheme": "VDOO-128",
    "sizes": {
     "kat_path": "schemes/VDOO/Test_Vectors/KAT_SIG_VDOO-128.txt",
     "msg": 56,
     "pk": 330855,
     "results_path": "results/VDOO/VDOO-128.json",
     "sig_max": 85,
     "sk": 342790,
     "source": "ngcc_results"
    },
    "title": "VDOO: Vinegar-Diagonal-Oil-Oil"
   },
   {
    "category": "sig",
    "folder": "VDOO",
    "instance": "VDOO-256",
    "level": {
     "bits": 256,
     "claim": null,
     "label": "256",
     "param_set": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/X2VGTA5L2EJJASOPF5TYJI2GAXDIO677/",
     "folder": "VDOO",
     "instance": "VDOO-256",
     "pub_date": "2026-09-20 13:54",
     "spec": "specs/VDOO.pdf",
     "spec_extra": [],
     "spec_file": "VDOO-Specifications.pdf",
     "title": "VDOO: Vinegar-Diagonal-Oil-Oil",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/VDOO.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:54",
    "reason": "public keys 331 KB-20 MB, bss up to 121 MB",
    "reason_scope": "scheme",
    "scheme": "VDOO-256",
    "sizes": {
     "msg": 56,
     "pk": 4289250,
     "results_path": "results/VDOO/VDOO-256.json",
     "sig_max": 316,
     "sk": 4388307,
     "source": "ngcc_results"
    },
    "title": "VDOO: Vinegar-Diagonal-Oil-Oil"
   },
   {
    "category": "sig",
    "folder": "VDOO",
    "instance": "VDOO-512",
    "level": {
     "bits": 512,
     "claim": null,
     "label": "512",
     "param_set": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/X2VGTA5L2EJJASOPF5TYJI2GAXDIO677/",
     "folder": "VDOO",
     "instance": "VDOO-512",
     "pub_date": "2026-09-20 13:54",
     "spec": "specs/VDOO.pdf",
     "spec_extra": [],
     "spec_file": "VDOO-Specifications.pdf",
     "title": "VDOO: Vinegar-Diagonal-Oil-Oil",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/VDOO.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:54",
    "reason": "public keys 331 KB-20 MB, bss up to 121 MB",
    "reason_scope": "scheme",
    "scheme": "VDOO-512",
    "sizes": {
     "msg": 56,
     "pk": 20229300,
     "results_path": "results/VDOO/VDOO-512.json",
     "sig_max": 471,
     "sk": 20474382,
     "source": "ngcc_results"
    },
    "title": "VDOO: Vinegar-Diagonal-Oil-Oil"
   },
   {
    "category": "sig",
    "folder": "YuanYang.DSA",
    "instance": "yuanyang-1024",
    "level": {
     "bits": 256,
     "claim": "YuanYang.KEM / YuanYang.DSA spec Table 1: ring degree 512/1024/2048 targets 128/256/512-bit classical security",
     "label": "256",
     "param_set": "n=1024",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F2PXVI3WBEN5VAK7XPPPHV6MXXALAKFG/",
     "folder": "YuanYang.DSA",
     "instance": "yuanyang-1024",
     "pub_date": "2026-09-20 13:43",
     "spec": "specs/YuanYang.DSA.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "YuanYang.DSA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/YuanYang.DSA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:43",
    "reason": "bigint.c includes <immintrin.h>; double FFT keygen; 709 KB stack frame",
    "reason_scope": "scheme",
    "scheme": "yuanyang-1024",
    "sizes": {
     "kat_path": "schemes/YuanYang.DSA/Test_Vectors/KAT_SIG_YuanYang-1024.txt",
     "msg": 56,
     "pk": 1570,
     "results_path": "results/YuanYang.DSA/yuanyang-1024.json",
     "sig_max": 1150,
     "sk": 31264,
     "source": "ngcc_results"
    },
    "title": "YuanYang.DSA"
   },
   {
    "category": "sig",
    "folder": "YuanYang.DSA",
    "instance": "yuanyang-2048",
    "level": {
     "bits": 512,
     "claim": "YuanYang.KEM / YuanYang.DSA spec Table 1: ring degree 512/1024/2048 targets 128/256/512-bit classical security",
     "label": "512",
     "param_set": "n=2048",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F2PXVI3WBEN5VAK7XPPPHV6MXXALAKFG/",
     "folder": "YuanYang.DSA",
     "instance": "yuanyang-2048",
     "pub_date": "2026-09-20 13:43",
     "spec": "specs/YuanYang.DSA.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "YuanYang.DSA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/YuanYang.DSA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:43",
    "reason": "bigint.c includes <immintrin.h>; double FFT keygen; 709 KB stack frame",
    "reason_scope": "scheme",
    "scheme": "yuanyang-2048",
    "sizes": {
     "kat_path": "schemes/YuanYang.DSA/Test_Vectors/KAT_SIG_YuanYang-2048.txt",
     "msg": 56,
     "pk": 3330,
     "results_path": "results/YuanYang.DSA/yuanyang-2048.json",
     "sig_max": 2364,
     "sk": 62720,
     "source": "ngcc_results"
    },
    "title": "YuanYang.DSA"
   },
   {
    "category": "sig",
    "folder": "YuanYang.DSA",
    "instance": "yuanyang-512",
    "level": {
     "bits": 128,
     "claim": "YuanYang.KEM / YuanYang.DSA spec Table 1: ring degree 512/1024/2048 targets 128/256/512-bit classical security",
     "label": "128",
     "param_set": "n=512",
     "source": "spec",
     "variant": null
    },
    "ngcc": {
     "comments_url": "https://list.niccs.org.cn/archives/list/pkcforum@list.niccs.org.cn/thread/F2PXVI3WBEN5VAK7XPPPHV6MXXALAKFG/",
     "folder": "YuanYang.DSA",
     "instance": "yuanyang-512",
     "pub_date": "2026-09-20 13:43",
     "spec": "specs/YuanYang.DSA.pdf",
     "spec_extra": [],
     "spec_file": "Algorithm specifications.pdf",
     "title": "YuanYang.DSA",
     "zip_url": "https://www.niccs.org.cn/niccs/Proposal/Public-Key%20Cryptographic%20Algorithms/Round%201%20candidates/YuanYang.DSA.zip"
    },
    "notes": [],
    "pub_date": "2026-09-20 13:43",
    "reason": "bigint.c includes <immintrin.h>; double FFT keygen; 709 KB stack frame",
    "reason_scope": "scheme",
    "scheme": "yuanyang-512",
    "sizes": {
     "kat_path": "schemes/YuanYang.DSA/Test_Vectors/KAT_SIG_YuanYang-512.txt",
     "msg": 56,
     "pk": 738,
     "results_path": "results/YuanYang.DSA/yuanyang-512.json",
     "sig_max": 561,
     "sk": 15584,
     "source": "ngcc_results"
    },
    "title": "YuanYang.DSA"
   }
  ]
 }
};
