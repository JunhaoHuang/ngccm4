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
      "bits": null,
      "label": "I",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Aigis-Encplus",
      "instance": "Aigis-Enc+-I",
      "pub_date": "2026-09-20 11:42",
      "title": "Aigis-Enc+"
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
      "bits": null,
      "label": "II",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Aigis-Encplus",
      "instance": "Aigis-Enc+-II",
      "pub_date": "2026-09-20 11:42",
      "title": "Aigis-Enc+"
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
      "bits": null,
      "label": "III",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Aigis-Encplus",
      "instance": "Aigis-Enc+-III",
      "pub_date": "2026-09-20 11:42",
      "title": "Aigis-Enc+"
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
      "label": "256",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Amoeba",
      "instance": "Amoeba-1152",
      "pub_date": "2026-09-20 11:41",
      "title": "Amoeba"
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
      "label": "384",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Amoeba",
      "instance": "Amoeba-1728",
      "pub_date": "2026-09-20 11:41",
      "title": "Amoeba"
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
      "label": "512",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Amoeba",
      "instance": "Amoeba-2304",
      "pub_date": "2026-09-20 11:41",
      "title": "Amoeba"
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
      "label": "128",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Amoeba",
      "instance": "Amoeba-576",
      "pub_date": "2026-09-20 11:41",
      "title": "Amoeba"
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
      "label": "192",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Amoeba",
      "instance": "Amoeba-864",
      "pub_date": "2026-09-20 11:41",
      "title": "Amoeba"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-128",
      "pub_date": "2026-09-20 11:40",
      "title": "BAG-Loong"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-256",
      "pub_date": "2026-09-20 11:40",
      "title": "BAG-Loong"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-384",
      "pub_date": "2026-09-20 11:40",
      "title": "BAG-Loong"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "BAG-Loong",
      "instance": "BAG-Loong-512",
      "pub_date": "2026-09-20 11:40",
      "title": "BAG-Loong"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BW-KEM",
      "instance": "BW_KEM_C128",
      "pub_date": "2026-09-20 11:25",
      "title": "BW-KEM"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BW-KEM",
      "instance": "BW_KEM_C256",
      "pub_date": "2026-09-20 11:25",
      "title": "BW-KEM"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BW-KEM",
      "instance": "BW_KEM_C512",
      "pub_date": "2026-09-20 11:25",
      "title": "BW-KEM"
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
      "label": "128",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-128",
      "pub_date": "2026-09-20 11:22",
      "title": "COMPASS-KEM"
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
      "label": "256",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-256",
      "pub_date": "2026-09-20 11:22",
      "title": "COMPASS-KEM"
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
      "label": "384",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-384",
      "pub_date": "2026-09-20 11:22",
      "title": "COMPASS-KEM"
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
      "label": "512",
      "source": "manifest",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "COMPASS-KEM",
      "instance": "COMPASS-KEM-512",
      "pub_date": "2026-09-20 11:22",
      "title": "COMPASS-KEM"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "CheetahKEM",
      "instance": "Cheetah128",
      "pub_date": "2026-09-20 11:24",
      "title": "CheetahKEM"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "CheetahKEM",
      "instance": "Cheetah256",
      "pub_date": "2026-09-20 11:24",
      "title": "CheetahKEM"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "CheetahKEM",
      "instance": "Cheetah384",
      "pub_date": "2026-09-20 11:24",
      "title": "CheetahKEM"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "CheetahKEM",
      "instance": "Cheetah512",
      "pub_date": "2026-09-20 11:24",
      "title": "CheetahKEM"
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
     "id": "crypto_kem_DKE-128_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DKEM",
      "instance": "DKEM-128",
      "pub_date": "2026-09-20 11:20",
      "title": "DKEM (Ding Key Encapsulation)"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKE-128",
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
     "id": "crypto_kem_DKE-128_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DKEM",
      "instance": "DKEM-128",
      "pub_date": "2026-09-20 11:20",
      "title": "DKEM (Ding Key Encapsulation)"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKE-128",
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
     "id": "crypto_kem_DKE-256_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DKEM",
      "instance": "DKEM-256",
      "pub_date": "2026-09-20 11:20",
      "title": "DKEM (Ding Key Encapsulation)"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKE-256",
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
     "id": "crypto_kem_DKE-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DKEM",
      "instance": "DKEM-256",
      "pub_date": "2026-09-20 11:20",
      "title": "DKEM (Ding Key Encapsulation)"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKE-256",
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
     "id": "crypto_kem_DKE-512_m4",
     "impl": "m4",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DKEM",
      "instance": "DKEM-512",
      "pub_date": "2026-09-20 11:20",
      "title": "DKEM (Ding Key Encapsulation)"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKE-512",
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
     "id": "crypto_kem_DKE-512_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DKEM",
      "instance": "DKEM-512",
      "pub_date": "2026-09-20 11:20",
      "title": "DKEM (Ding Key Encapsulation)"
     },
     "notes": [],
     "run_status": "measured",
     "scheme": "DKE-512",
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
      "bits": null,
      "label": "1024",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-1024",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "bits": null,
      "label": "1536",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-1536",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "bits": null,
      "label": "2048",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-2048",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "bits": null,
      "label": "648",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-648",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "bits": null,
      "label": "768",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-768",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "bits": null,
      "label": "Light",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-Light",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "bits": null,
      "label": "Prime",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "DTRU",
      "instance": "DTRU-Prime",
      "pub_date": "2026-09-20 11:19",
      "title": "DTRU"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "FLIT",
      "instance": "FLIT128_REF",
      "pub_date": "2026-09-20 11:18",
      "title": "FLIT"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "FLIT",
      "instance": "FLIT256_REF",
      "pub_date": "2026-09-20 11:18",
      "title": "FLIT"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "FLIT",
      "instance": "FLIT512_REF",
      "pub_date": "2026-09-20 11:18",
      "title": "FLIT"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "HARE",
      "instance": "HARE-128-kr",
      "pub_date": "2026-09-20 11:17",
      "title": "HARE"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "HARE",
      "instance": "HARE-256-kr",
      "pub_date": "2026-09-20 11:17",
      "title": "HARE"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "HARE",
      "instance": "HARE-384-kr",
      "pub_date": "2026-09-20 11:17",
      "title": "HARE"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "HARE",
      "instance": "HARE-512-kr",
      "pub_date": "2026-09-20 11:17",
      "title": "HARE"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NSS-HQC",
      "instance": "HQC-128",
      "pub_date": "2026-09-20 10:43",
      "title": "NSS-HQC"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NSS-HQC",
      "instance": "HQC-256",
      "pub_date": "2026-09-20 10:43",
      "title": "NSS-HQC"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps"
     ],
     "ngcc": {
      "folder": "NSS-HQC",
      "instance": "HQC-384",
      "pub_date": "2026-09-20 10:43",
      "title": "NSS-HQC"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "NSS-HQC",
      "instance": "HQC-512",
      "pub_date": "2026-09-20 10:43",
      "title": "NSS-HQC"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "LoongKEM",
      "instance": "Loong128",
      "pub_date": "2026-09-20 11:15",
      "title": "LoongKEM"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "LoongKEM",
      "instance": "Loong256",
      "pub_date": "2026-09-20 11:15",
      "title": "LoongKEM"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "LoongKEM",
      "instance": "Loong384",
      "pub_date": "2026-09-20 11:15",
      "title": "LoongKEM"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "LoongKEM",
      "instance": "Loong512",
      "pub_date": "2026-09-20 11:15",
      "title": "LoongKEM"
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
      "bits": null,
      "label": "L1",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L1",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L2",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L3",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L3",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L4",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SHAKE__Lore-L4",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L1",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L1",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L2",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L3",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L3",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "bits": null,
      "label": "L4",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Lore",
      "instance": "Lore-SM3__Lore-L4",
      "pub_date": "2026-09-20 11:14",
      "title": "Lore"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-128",
      "pub_date": "2026-09-20 10:50",
      "title": "MAMBA-Viper"
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
      "label": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-192",
      "pub_date": "2026-09-20 10:50",
      "title": "MAMBA-Viper"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-256",
      "pub_date": "2026-09-20 10:50",
      "title": "MAMBA-Viper"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-384",
      "pub_date": "2026-09-20 10:50",
      "title": "MAMBA-Viper"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MAMBA-Viper",
      "instance": "MAMBA-Viper-512",
      "pub_date": "2026-09-20 10:50",
      "title": "MAMBA-Viper"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Mithril",
      "instance": "Mithril-128",
      "pub_date": "2026-09-20 10:48",
      "title": "Mithril"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Mithril",
      "instance": "Mithril-256",
      "pub_date": "2026-09-20 10:48",
      "title": "Mithril"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Mithril",
      "instance": "Mithril-512",
      "pub_date": "2026-09-20 10:48",
      "title": "Mithril"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-1-128",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-1-256",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-1-512",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-1-E-128",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-1-E-256",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-1-E-512",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-2-E-128",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-2-E-256",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Mito",
      "instance": "Mito-2-E-512",
      "pub_date": "2026-09-20 10:47",
      "title": "Mito"
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
      "bits": null,
      "label": "C1",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-C1",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "C1",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-C1-c",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "C2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-C2",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "C2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-C2-c",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "C3",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-C3",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "C3",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-C3-c",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "D1",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-D1",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "D2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-D2",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "D3",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-D3",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "R1",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-R1",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "R2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-R2",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "bits": null,
      "label": "R3",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NEV",
      "instance": "NEV-R3",
      "pub_date": "2026-09-20 10:45",
      "title": "NEV"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NTRE",
      "instance": "NTRE-128",
      "pub_date": "2026-09-20 10:42",
      "title": "NTRE Key Encapsulation Mechanism"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NTRE",
      "instance": "NTRE-256",
      "pub_date": "2026-09-20 10:42",
      "title": "NTRE Key Encapsulation Mechanism"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "NTRE",
      "instance": "NTRE-512",
      "pub_date": "2026-09-20 10:42",
      "title": "NTRE Key Encapsulation Mechanism"
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
      "bits": null,
      "label": "n=1296",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "OAEP-NTRU",
      "instance": "OAEP-NTRU-1296",
      "pub_date": "2026-09-20 10:41",
      "title": "OAEP-NTRU"
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
      "bits": null,
      "label": "n=2592",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "OAEP-NTRU",
      "instance": "OAEP-NTRU-2592",
      "pub_date": "2026-09-20 10:41",
      "title": "OAEP-NTRU"
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
      "bits": null,
      "label": "n=648",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "OAEP-NTRU",
      "instance": "OAEP-NTRU-648",
      "pub_date": "2026-09-20 10:41",
      "title": "OAEP-NTRU"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Polar-KEM",
      "instance": "PolarKEM-128",
      "pub_date": "2026-09-20 10:38",
      "title": "Polar-KEM"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Polar-KEM",
      "instance": "PolarKEM-256",
      "pub_date": "2026-09-20 10:38",
      "title": "Polar-KEM"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Polar-KEM",
      "instance": "PolarKEM-512",
      "pub_date": "2026-09-20 10:38",
      "title": "Polar-KEM"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-128",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-128",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-128",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-192",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-192",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-192",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-256",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-256",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-256",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-384",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-384",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-384",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-512",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-512",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Scloudplus",
      "instance": "Scloudplus-512",
      "pub_date": "2026-09-20 10:31",
      "title": "Scloud+"
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
      "bits": null,
      "label": "2",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "TRIKE",
      "instance": "TRIKE-2",
      "pub_date": "2026-09-20 10:30",
      "title": "TRIKE"
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
      "bits": null,
      "label": "5",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "TRIKE",
      "instance": "TRIKE-5",
      "pub_date": "2026-09-20 10:30",
      "title": "TRIKE"
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
      "bits": null,
      "label": "7",
      "source": "override",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TRIKE",
      "instance": "TRIKE-7",
      "pub_date": "2026-09-20 10:30",
      "title": "TRIKE"
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
      "bits": null,
      "label": "9",
      "source": "override",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TRIKE",
      "instance": "TRIKE-9",
      "pub_date": "2026-09-20 10:30",
      "title": "TRIKE"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-128",
      "pub_date": "2026-09-20 10:29",
      "title": "TriQ-KEM"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-256",
      "pub_date": "2026-09-20 10:29",
      "title": "TriQ-KEM"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-384",
      "pub_date": "2026-09-20 10:29",
      "title": "TriQ-KEM"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEM",
      "instance": "TriQ-KEM-512",
      "pub_date": "2026-09-20 10:29",
      "title": "TriQ-KEM"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Weaver",
      "instance": "WeaverKEM-128",
      "pub_date": "2026-09-20 10:28",
      "title": "Weaver"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Weaver",
      "instance": "WeaverKEM-256",
      "pub_date": "2026-09-20 10:28",
      "title": "Weaver"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Weaver",
      "instance": "WeaverKEM-512",
      "pub_date": "2026-09-20 10:28",
      "title": "Weaver"
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
      "bits": null,
      "label": "n=1024",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "YuanYang.KEM",
      "instance": "yuanyang-1024",
      "pub_date": "2026-09-20 10:27",
      "title": "YuanYang.KEM"
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
      "bits": null,
      "label": "n=2048",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "YuanYang.KEM",
      "instance": "yuanyang-2048",
      "pub_date": "2026-09-20 10:27",
      "title": "YuanYang.KEM"
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
      "bits": null,
      "label": "n=512",
      "source": "override",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "YuanYang.KEM",
      "instance": "yuanyang-512",
      "pub_date": "2026-09-20 10:27",
      "title": "YuanYang.KEM"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "ZEN",
      "instance": "ZEN_128",
      "pub_date": "2026-09-20 10:25",
      "title": "ZEN"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "ZEN",
      "instance": "ZEN_128",
      "pub_date": "2026-09-20 10:25",
      "title": "ZEN"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "ZEN",
      "instance": "ZEN_256",
      "pub_date": "2026-09-20 10:25",
      "title": "ZEN"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "ZEN",
      "instance": "ZEN_256",
      "pub_date": "2026-09-20 10:25",
      "title": "ZEN"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "ZEN",
      "instance": "ZEN_512",
      "pub_date": "2026-09-20 10:25",
      "title": "ZEN"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "ZEN",
      "instance": "ZEN_512",
      "pub_date": "2026-09-20 10:25",
      "title": "ZEN"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_128",
      "pub_date": "2026-09-20 11:29",
      "title": "BAG-Piglet"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_256",
      "pub_date": "2026-09-20 11:29",
      "title": "BAG-Piglet"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_384",
      "pub_date": "2026-09-20 11:29",
      "title": "BAG-Piglet"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "BAG-Piglet",
      "instance": "bag_piglet_512",
      "pub_date": "2026-09-20 11:29",
      "title": "BAG-Piglet"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Rudraksh2",
      "instance": "lwekem128",
      "pub_date": "2026-09-20 10:32",
      "title": "Rudraksh2"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Rudraksh2",
      "instance": "lwekem256",
      "pub_date": "2026-09-20 10:32",
      "title": "Rudraksh2"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "Rudraksh2",
      "instance": "lwekem512",
      "pub_date": "2026-09-20 10:32",
      "title": "Rudraksh2"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "QUBE",
      "instance": "qube-128",
      "pub_date": "2026-09-20 10:33",
      "title": "QUBE"
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
      "label": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "QUBE",
      "instance": "qube-192",
      "pub_date": "2026-09-20 10:33",
      "title": "QUBE"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "QUBE",
      "instance": "qube-256",
      "pub_date": "2026-09-20 10:33",
      "title": "QUBE"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "QUBE",
      "instance": "qube-384",
      "pub_date": "2026-09-20 10:33",
      "title": "QUBE"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "QUBE",
      "instance": "qube-512",
      "pub_date": "2026-09-20 10:33",
      "title": "QUBE"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MORNING-Scabbard",
      "instance": "scabbard128",
      "pub_date": "2026-09-20 10:46",
      "title": "MORNING-Scabbard"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "encaps",
      "decaps"
     ],
     "ngcc": {
      "folder": "MORNING-Scabbard",
      "instance": "scabbard256",
      "pub_date": "2026-09-20 10:46",
      "title": "MORNING-Scabbard"
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
      "label": "128",
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
      "folder": "ADKEX",
      "instance": "ADKEX-128",
      "pub_date": "2026-09-20 10:18",
      "title": "ADKEX (Authenticated Ding Key Exchange)"
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
      "label": "128",
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
      "folder": "ADKEX",
      "instance": "ADKEX-128",
      "pub_date": "2026-09-20 10:18",
      "title": "ADKEX (Authenticated Ding Key Exchange)"
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
      "label": "256",
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
      "folder": "ADKEX",
      "instance": "ADKEX-256",
      "pub_date": "2026-09-20 10:18",
      "title": "ADKEX (Authenticated Ding Key Exchange)"
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
      "label": "256",
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
      "folder": "ADKEX",
      "instance": "ADKEX-256",
      "pub_date": "2026-09-20 10:18",
      "title": "ADKEX (Authenticated Ding Key Exchange)"
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
      "label": "512",
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
      "folder": "ADKEX",
      "instance": "ADKEX-512",
      "pub_date": "2026-09-20 10:18",
      "title": "ADKEX (Authenticated Ding Key Exchange)"
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
      "label": "512",
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
      "folder": "ADKEX",
      "instance": "ADKEX-512",
      "pub_date": "2026-09-20 10:18",
      "title": "ADKEX (Authenticated Ding Key Exchange)"
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
      "label": "128",
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
      "folder": "AFS-KEX",
      "instance": "AFS_KEX_C128",
      "pub_date": "2026-09-20 10:17",
      "title": "AFS-KEX"
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
      "label": "256",
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
      "folder": "AFS-KEX",
      "instance": "AFS_KEX_C256",
      "pub_date": "2026-09-20 10:17",
      "title": "AFS-KEX"
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
      "label": "512",
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
      "folder": "AFS-KEX",
      "instance": "AFS_KEX_C512",
      "pub_date": "2026-09-20 10:17",
      "title": "AFS-KEX"
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
      "label": "128",
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
      "folder": "DKEX",
      "instance": "DKEX-128",
      "pub_date": "2026-09-20 09:43",
      "title": "DKEX (Ding Key Exchange)"
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
      "label": "128",
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
      "folder": "DKEX",
      "instance": "DKEX-128",
      "pub_date": "2026-09-20 09:43",
      "title": "DKEX (Ding Key Exchange)"
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
      "label": "256",
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
      "folder": "DKEX",
      "instance": "DKEX-256",
      "pub_date": "2026-09-20 09:43",
      "title": "DKEX (Ding Key Exchange)"
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
      "label": "256",
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
      "folder": "DKEX",
      "instance": "DKEX-256",
      "pub_date": "2026-09-20 09:43",
      "title": "DKEX (Ding Key Exchange)"
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
      "label": "512",
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
      "folder": "DKEX",
      "instance": "DKEX-512",
      "pub_date": "2026-09-20 09:43",
      "title": "DKEX (Ding Key Exchange)"
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
      "label": "512",
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
      "folder": "DKEX",
      "instance": "DKEX-512",
      "pub_date": "2026-09-20 09:43",
      "title": "DKEX (Ding Key Exchange)"
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
      "label": "128",
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
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-128",
      "pub_date": "2026-09-20 09:41",
      "title": "MAMBA-NIKE"
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
      "label": "192",
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
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-192",
      "pub_date": "2026-09-20 09:41",
      "title": "MAMBA-NIKE"
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
      "label": "256",
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
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-256",
      "pub_date": "2026-09-20 09:41",
      "title": "MAMBA-NIKE"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-384",
      "pub_date": "2026-09-20 09:41",
      "title": "MAMBA-NIKE"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "MAMBA-NIKE",
      "instance": "MAMBA-NIKE-512",
      "pub_date": "2026-09-20 09:41",
      "title": "MAMBA-NIKE"
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
      "bits": null,
      "label": "C1",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C1",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "C1",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C1-c",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "C2",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C2",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "C2",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C2-c",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "C3",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C3",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "C3",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-C3-c",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "R1",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-R1",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "R2",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-R2",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "bits": null,
      "label": "R3",
      "source": "override",
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
      "folder": "NEV-AKE",
      "instance": "NEV-AKE-R3",
      "pub_date": "2026-09-20 09:40",
      "title": "NEV-AKE"
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-128",
      "pub_date": "2026-09-20 09:39",
      "title": "TriQ-KEX"
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-256",
      "pub_date": "2026-09-20 09:39",
      "title": "TriQ-KEX"
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-384",
      "pub_date": "2026-09-20 09:39",
      "title": "TriQ-KEX"
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TriQ-KEX",
      "instance": "TriQ-KEX-512",
      "pub_date": "2026-09-20 09:39",
      "title": "TriQ-KEX"
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
      "text": 28064,
      "total": 32012
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
      "bits": null,
      "label": "I",
      "source": "override",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Aigis-Sigplus",
      "instance": "Aigis-Sig+-I",
      "pub_date": "2026-09-20 14:25",
      "title": "Aigis-Sig+"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 3400,
      "source": "report",
      "text": 27840,
      "total": 31788
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
      "bits": null,
      "label": "II",
      "source": "override",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Aigis-Sigplus",
      "instance": "Aigis-Sig+-II",
      "pub_date": "2026-09-20 14:25",
      "title": "Aigis-Sig+"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 3400,
      "source": "report",
      "text": 30788,
      "total": 34736
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
      "bits": null,
      "label": "III",
      "source": "override",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Aigis-Sigplus",
      "instance": "Aigis-Sig+-III",
      "pub_date": "2026-09-20 14:25",
      "title": "Aigis-Sig+"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed none",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 32168,
      "total": 34068
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1110777,
       "count": 1,
       "max": 1110777,
       "median": 1110777,
       "min": 1110777
      },
      "sign": {
       "avg": 4451993,
       "count": 1,
       "max": 4451993,
       "median": 4451993,
       "min": 4451993
      },
      "verify": {
       "avg": 1279535,
       "count": 1,
       "max": 1279535,
       "median": 1279535,
       "min": 1279535
      }
     },
     "cycles_total": 6842305,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "BiT",
      "instance": "BiT-128",
      "pub_date": "2026-09-20 14:24",
      "title": "BIT: Bimodal Triangular distribution based lattice signatures"
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
      "text": 35060,
      "total": 36960
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
     "id": "crypto_sign_BiT-256_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "BiT",
      "instance": "BiT-256",
      "pub_date": "2026-09-20 14:24",
      "title": "BIT: Bimodal Triangular distribution based lattice signatures"
     },
     "notes": [],
     "run_status": "failed",
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
     "stack": null,
     "status_text": "HardFault before the first output on 3 runs (pc=0xFFFFFFFE, lr inside main, stack at top of RAM): deterministic board failure, cause not identified",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 40572,
      "total": 42472
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 3241013,
       "count": 1,
       "max": 3241013,
       "median": 3241013,
       "min": 3241013
      },
      "sign": {
       "avg": 16529919,
       "count": 1,
       "max": 16529919,
       "median": 16529919,
       "min": 16529919
      },
      "verify": {
       "avg": 3897742,
       "count": 1,
       "max": 3897742,
       "median": 3897742,
       "min": 3897742
      }
     },
     "cycles_total": 23668674,
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "BiT",
      "instance": "BiT-512",
      "pub_date": "2026-09-20 14:24",
      "title": "BIT: Bimodal Triangular distribution based lattice signatures"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 222280,
      "data": 1352,
      "source": "report",
      "text": 23188,
      "total": 246820
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 30389521,
       "count": 10,
       "max": 38435590,
       "median": 29495524,
       "min": 29495299
      },
      "sign": {
       "avg": 1047821902,
       "count": 10,
       "max": 1047863048,
       "median": 1047818119,
       "min": 1047793782
      },
      "verify": {
       "avg": 32668643,
       "count": 10,
       "max": 32696186,
       "median": 32673174,
       "min": 32629359
      }
     },
     "cycles_total": 1110880066,
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
      "bits": 160,
      "label": "160f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-160f",
      "pub_date": "2026-09-20 14:22",
      "title": "CEDRUSɑ"
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
      "text": 23232,
      "total": 375808
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 971181653,
       "count": 3,
       "max": 996126738,
       "median": 958709273,
       "min": 958708947
      },
      "sign": {
       "avg": 14239438927,
       "count": 2,
       "max": 14239500335,
       "median": 14239438927,
       "min": 14239377519
      },
      "verify": {
       "avg": 35261078,
       "count": 2,
       "max": 35324795,
       "median": 35261078,
       "min": 35197360
      }
     },
     "cycles_total": 15245881658,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": "partial",
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
      "bits": 160,
      "label": "160s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-160s",
      "pub_date": "2026-09-20 14:22",
      "title": "CEDRUSɑ"
     },
     "notes": [
      "partial: 2 complete iterations before the 45 min cap (included in the tables)"
     ],
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
     "status_text": "partial: 2 complete iterations before the 45 min cap (included in the tables)",
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-256f",
      "pub_date": "2026-09-20 14:22",
      "title": "CEDRUSɑ"
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
     "status_text": "link failed on the board: overflowed by 444272 bytes (640 KB SRAM)",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-256s",
      "pub_date": "2026-09-20 14:22",
      "title": "CEDRUSɑ"
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
     "status_text": "link failed on the board: overflowed by 1008624 bytes (640 KB SRAM)",
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
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "cedrus-alpha",
      "instance": "CEDRUSALPHA-384s",
      "pub_date": "2026-09-20 14:22",
      "title": "CEDRUSɑ"
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
     "status_text": "link failed on the board: overflowed by 3259696 bytes (640 KB SRAM)",
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 23764,
      "total": 25664
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 26381781,
       "count": 3,
       "max": 26381868,
       "median": 26381857,
       "min": 26381617
      },
      "sign": {
       "avg": 935461821,
       "count": 3,
       "max": 936199981,
       "median": 935655922,
       "min": 934529561
      },
      "verify": {
       "avg": 28248522,
       "count": 3,
       "max": 28248534,
       "median": 28248521,
       "min": 28248512
      }
     },
     "cycles_total": 990092124,
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
      "bits": 160,
      "label": "160f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-160f",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 23844,
      "total": 25744
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1072896207,
       "count": 1,
       "max": 1072896207,
       "median": 1072896207,
       "min": 1072896207
      },
      "sign": {
       "avg": 16330935192,
       "count": 1,
       "max": 16330935192,
       "median": 16330935192,
       "min": 16330935192
      },
      "verify": {
       "avg": 38484394,
       "count": 1,
       "max": 38484394,
       "median": 38484394,
       "min": 38484394
      }
     },
     "cycles_total": 17442315793,
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
      "bits": 160,
      "label": "160s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-160s",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 23924,
      "total": 25824
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 85884559,
       "count": 1,
       "max": 85884559,
       "median": 85884559,
       "min": 85884559
      },
      "sign": {
       "avg": 2309175851,
       "count": 1,
       "max": 2309175851,
       "median": 2309175851,
       "min": 2309175851
      },
      "verify": {
       "avg": 39294815,
       "count": 1,
       "max": 39294815,
       "median": 39294815,
       "min": 39294815
      }
     },
     "cycles_total": 2434355225,
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-256f",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 24192,
      "total": 26092
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1788547401,
       "count": 1,
       "max": 1788547401,
       "median": 1788547401,
       "min": 1788547401
      },
      "sign": {
       "avg": 23594487433,
       "count": 1,
       "max": 23594487433,
       "median": 23594487433,
       "min": 23594487433
      },
      "verify": {
       "avg": 64913318,
       "count": 1,
       "max": 64913318,
       "median": 64913318,
       "min": 64913318
      }
     },
     "cycles_total": 25447948152,
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-256s",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 24320,
      "total": 26220
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 1242856149,
       "count": 1,
       "max": 1242856149,
       "median": 1242856149,
       "min": 1242856149
      },
      "sign": {
       "avg": 23044042357,
       "count": 1,
       "max": 23044042357,
       "median": 23044042357,
       "min": 23044042357
      },
      "verify": {
       "avg": 238627297,
       "count": 1,
       "max": 238627297,
       "median": 238627297,
       "min": 238627297
      }
     },
     "cycles_total": 24525525803,
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
      "label": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-384f",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 25140,
      "total": 27040
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
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-384s",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 24628,
      "total": 26528
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-512f",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
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
      "text": 25172,
      "total": 27072
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
     "id": "crypto_sign_CEDRUSC-512s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "cedrusplusc",
      "instance": "CEDRUSC-512s",
      "pub_date": "2026-09-20 14:23",
      "title": "CEDRUS+C"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "timeout (10 min cap): no operation completed",
     "tier": "board"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28348,
      "total": 30248
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 3102210,
       "count": 1,
       "max": 3102210,
       "median": 3102210,
       "min": 3102210
      },
      "sign": {
       "avg": 12832580,
       "count": 1,
       "max": 12832580,
       "median": 12832580,
       "min": 12832580
      },
      "verify": {
       "avg": 3254567,
       "count": 1,
       "max": 3254567,
       "median": 3254567,
       "min": 3254567
      }
     },
     "cycles_total": 19189357,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-128",
      "pub_date": "2026-09-20 14:20",
      "title": "COMPASS-SIG"
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
      "text": 28376,
      "total": 30276
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 11129257,
       "count": 1,
       "max": 11129257,
       "median": 11129257,
       "min": 11129257
      },
      "sign": {
       "avg": 43272047,
       "count": 1,
       "max": 43272047,
       "median": 43272047,
       "min": 43272047
      },
      "verify": {
       "avg": 11239184,
       "count": 1,
       "max": 11239184,
       "median": 11239184,
       "min": 11239184
      }
     },
     "cycles_total": 65640488,
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-256",
      "pub_date": "2026-09-20 14:20",
      "title": "COMPASS-SIG"
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
      "text": 29872,
      "total": 31772
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 11129257,
       "count": 1,
       "max": 11129257,
       "median": 11129257,
       "min": 11129257
      },
      "sign": {
       "avg": 43272048,
       "count": 1,
       "max": 43272048,
       "median": 43272048,
       "min": 43272048
      },
      "verify": {
       "avg": 11239184,
       "count": 1,
       "max": 11239184,
       "median": 11239184,
       "min": 11239184
      }
     },
     "cycles_total": 65640489,
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-384",
      "pub_date": "2026-09-20 14:20",
      "title": "COMPASS-SIG"
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
      "text": 29548,
      "total": 31448
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8942434,
       "count": 1,
       "max": 8942434,
       "median": 8942434,
       "min": 8942434
      },
      "sign": {
       "avg": 29876614,
       "count": 1,
       "max": 29876614,
       "median": 29876614,
       "min": 29876614
      },
      "verify": {
       "avg": 8975156,
       "count": 1,
       "max": 8975156,
       "median": 8975156,
       "min": 8975156
      }
     },
     "cycles_total": 47794204,
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "COMPASS-SIG",
      "instance": "COMPASS-SIG-512",
      "pub_date": "2026-09-20 14:20",
      "title": "COMPASS-SIG"
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
      "text": 50908,
      "total": 52808
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 13686911,
       "count": 1,
       "max": 13686911,
       "median": 13686911,
       "min": 13686911
      },
      "sign": {
       "avg": 19616586,
       "count": 1,
       "max": 19616586,
       "median": 19616586,
       "min": 19616586
      },
      "verify": {
       "avg": 13784239,
       "count": 1,
       "max": 13784239,
       "median": 13784239,
       "min": 13784239
      }
     },
     "cycles_total": 47087736,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "DARTS",
      "instance": "DARTS128",
      "pub_date": "2026-09-20 14:18",
      "title": "DARTS"
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
      "text": 52972,
      "total": 54872
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 2867064,
       "count": 2,
       "max": 3731835,
       "median": 2867064,
       "min": 2002294
      },
      "sign": {
       "avg": 15722278,
       "count": 1,
       "max": 15722278,
       "median": 15722278,
       "min": 15722278
      },
      "verify": {
       "avg": 2532136,
       "count": 1,
       "max": 2532136,
       "median": 2532136,
       "min": 2532136
      }
     },
     "cycles_total": 21121478,
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "DARTS",
      "instance": "DARTS256",
      "pub_date": "2026-09-20 14:18",
      "title": "DARTS"
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
      "text": 59160,
      "total": 61060
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 7616856,
       "count": 1,
       "max": 7616856,
       "median": 7616856,
       "min": 7616856
      },
      "sign": {
       "avg": 30817521,
       "count": 1,
       "max": 30817521,
       "median": 30817521,
       "min": 30817521
      },
      "verify": {
       "avg": 4666363,
       "count": 1,
       "max": 4666363,
       "median": 4666363,
       "min": 4666363
      }
     },
     "cycles_total": 43100740,
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "DARTS",
      "instance": "DARTS512",
      "pub_date": "2026-09-20 14:18",
      "title": "DARTS"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 4644,
      "data": 1360,
      "source": "report",
      "text": 80128,
      "total": 86132
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 7616856,
       "count": 1,
       "max": 7616856,
       "median": 7616856,
       "min": 7616856
      },
      "sign": {
       "avg": 30817522,
       "count": 1,
       "max": 30817522,
       "median": 30817522,
       "min": 30817522
      },
      "verify": {
       "avg": 4666363,
       "count": 1,
       "max": 4666363,
       "median": 4666363,
       "min": 4666363
      }
     },
     "cycles_total": 43100741,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Facto-DSA",
      "instance": "Facto-DSA-128",
      "pub_date": "2026-09-20 14:16",
      "title": "Facto-DSA"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 820,
      "data": 1352,
      "source": "report",
      "text": 575540,
      "total": 577712
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 95117502,
       "count": 1,
       "max": 95117502,
       "median": 95117502,
       "min": 95117502
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
      "bits": 160,
      "label": "160f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-160F",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "bits": 160,
      "label": "160s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-160S",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-256F",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-256S",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-384F",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-384S",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-512F",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Galas_Signature",
      "instance": "Galas-512S",
      "pub_date": "2026-09-20 14:14",
      "title": "Galas Signature Scheme"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 111592,
      "total": 113492
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 9959671,
       "count": 1,
       "max": 9959671,
       "median": 9959671,
       "min": 9959671
      },
      "sign": {
       "avg": 1064536738,
       "count": 1,
       "max": 1064536738,
       "median": 1064536738,
       "min": 1064536738
      },
      "verify": {
       "avg": 655181324,
       "count": 1,
       "max": 655181324,
       "median": 655181324,
       "min": 655181324
      }
     },
     "cycles_total": 1729677733,
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall128f",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
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
      "text": 110904,
      "total": 112804
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 9959575,
       "count": 1,
       "max": 9959575,
       "median": 9959575,
       "min": 9959575
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
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall128s",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 165720,
      "total": 167620
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 9959575,
       "count": 1,
       "max": 9959575,
       "median": 9959575,
       "min": 9959575
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
      "label": "192f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall192f",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "192s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall192s",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 201232,
      "total": 203132
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 416834301,
       "count": 1,
       "max": 416834301,
       "median": 416834301,
       "min": 416834301
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall256f",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall256s",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall512f",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "GreatWall",
      "instance": "GreatWall512s",
      "pub_date": "2026-09-20 14:14",
      "title": "GreatWall Signature Algorithm"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 432880,
      "total": 435332
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 73326575,
       "count": 1,
       "max": 73326575,
       "median": 73326575,
       "min": 73326575
      },
      "sign": {
       "avg": 1699797995,
       "count": 1,
       "max": 1699797995,
       "median": 1699797995,
       "min": 1699797995
      },
      "verify": {
       "avg": 1534507088,
       "count": 1,
       "max": 1534507088,
       "median": 1534507088,
       "min": 1534507088
      }
     },
     "cycles_total": 3307631658,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
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
      "bits": 160,
      "label": "160f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-160f",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
     },
     "notes": [],
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 432912,
      "total": 435364
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 73326571,
       "count": 1,
       "max": 73326571,
       "median": 73326571,
       "min": 73326571
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
      "bits": 160,
      "label": "160s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-160s",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 433312,
      "total": 435764
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 338062880,
       "count": 1,
       "max": 338062880,
       "median": 338062880,
       "min": 338062880
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-256f",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-256s",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 435064,
      "total": 437516
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1399758982,
       "count": 1,
       "max": 1399758982,
       "median": 1399758982,
       "min": 1399758982
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
      "label": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-384f",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-384s",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 434696,
      "total": 437148
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 4033218601,
       "count": 1,
       "max": 4033218601,
       "median": 4033218601,
       "min": 4033218601
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
     "id": "crypto_sign_Lynxer-512f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 512,
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-512f",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
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
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Lynxer",
      "instance": "Lynxer-512s",
      "pub_date": "2026-09-20 14:13",
      "title": "Lynxer"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31932,
      "total": 33832
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 5265610,
       "count": 1,
       "max": 5265610,
       "median": 5265610,
       "min": 5265610
      },
      "sign": {
       "avg": 9072526,
       "count": 1,
       "max": 9072526,
       "median": 9072526,
       "min": 9072526
      },
      "verify": {
       "avg": 5415382,
       "count": 1,
       "max": 5415382,
       "median": 5415382,
       "min": 5415382
      }
     },
     "cycles_total": 19753518,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "OPS_Digital_Signature_Algorithm",
      "instance": "OPSsig-128",
      "pub_date": "2026-09-20 14:10",
      "title": "OPS Digital Signature Algorithm"
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
      "text": 32660,
      "total": 34560
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8334741,
       "count": 1,
       "max": 8334741,
       "median": 8334741,
       "min": 8334741
      },
      "sign": {
       "avg": 14466726,
       "count": 1,
       "max": 14466726,
       "median": 14466726,
       "min": 14466726
      },
      "verify": {
       "avg": 8729554,
       "count": 1,
       "max": 8729554,
       "median": 8729554,
       "min": 8729554
      }
     },
     "cycles_total": 31531021,
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "OPS_Digital_Signature_Algorithm",
      "instance": "OPSsig-256",
      "pub_date": "2026-09-20 14:10",
      "title": "OPS Digital Signature Algorithm"
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
      "text": 35072,
      "total": 36972
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 8334741,
       "count": 1,
       "max": 8334741,
       "median": 8334741,
       "min": 8334741
      },
      "sign": {
       "avg": 14466726,
       "count": 1,
       "max": 14466726,
       "median": 14466726,
       "min": 14466726
      },
      "verify": {
       "avg": 8729554,
       "count": 1,
       "max": 8729554,
       "median": 8729554,
       "min": 8729554
      }
     },
     "cycles_total": 31531021,
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "OPS_Digital_Signature_Algorithm",
      "instance": "OPSsig-512",
      "pub_date": "2026-09-20 14:10",
      "title": "OPS Digital Signature Algorithm"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 9544,
      "source": "report",
      "text": 29880,
      "total": 39972
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 16747169,
       "count": 1,
       "max": 16747169,
       "median": 16747169,
       "min": 16747169
      },
      "sign": {
       "avg": 42796097,
       "count": 1,
       "max": 42796097,
       "median": 42796097,
       "min": 42796097
      },
      "verify": {
       "avg": 17572784,
       "count": 1,
       "max": 17572784,
       "median": 17572784,
       "min": 17572784
      }
     },
     "cycles_total": 77116050,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Octarine",
      "instance": "Octarine-128",
      "pub_date": "2026-09-20 14:11",
      "title": "Octarine"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 17736,
      "source": "report",
      "text": 30896,
      "total": 49180
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 2736643,
       "count": 1,
       "max": 2736643,
       "median": 2736643,
       "min": 2736643
      },
      "sign": {
       "avg": 13400771,
       "count": 1,
       "max": 13400771,
       "median": 13400771,
       "min": 13400771
      },
      "verify": {
       "avg": 3523095,
       "count": 1,
       "max": 3523095,
       "median": 3523095,
       "min": 3523095
      }
     },
     "cycles_total": 19660509,
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Octarine",
      "instance": "Octarine-256",
      "pub_date": "2026-09-20 14:11",
      "title": "Octarine"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 17736,
      "source": "report",
      "text": 31680,
      "total": 49964
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 5490806,
       "count": 1,
       "max": 5490806,
       "median": 5490806,
       "min": 5490806
      },
      "sign": {
       "avg": 29957519,
       "count": 1,
       "max": 29957519,
       "median": 29957519,
       "min": 29957519
      },
      "verify": {
       "avg": 6912166,
       "count": 1,
       "max": 6912166,
       "median": 6912166,
       "min": 6912166
      }
     },
     "cycles_total": 42360491,
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Octarine",
      "instance": "Octarine-512",
      "pub_date": "2026-09-20 14:11",
      "title": "Octarine"
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
      "text": 30336,
      "total": 32236
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 90889828,
       "count": 2,
       "max": 167076328,
       "median": 90889828,
       "min": 14703327
      },
      "sign": {
       "avg": 3162565308,
       "count": 1,
       "max": 3162565308,
       "median": 3162565308,
       "min": 3162565308
      },
      "verify": {
       "avg": 87922311,
       "count": 1,
       "max": 87922311,
       "median": 87922311,
       "min": 87922311
      }
     },
     "cycles_total": 3341377447,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-128f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 13670 (shown: benchmarked binary (QEMU testvectors dump))"
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
      "text": 32144,
      "total": 34044
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
     "id": "crypto_sign_Phoenix-SHAKE-128s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 128,
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-128s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 6258 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "failed",
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
     "stack": null,
     "status_text": "HardFault before the first output on 3 runs (pc=0xFFFFFFFE, lr inside main, stack at top of RAM): deterministic board failure, cause not identified",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 30856,
      "total": 32756
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 244523609,
       "count": 1,
       "max": 244523609,
       "median": 244523609,
       "min": 244523609
      },
      "sign": {
       "avg": 4767289879,
       "count": 1,
       "max": 4767289879,
       "median": 4767289879,
       "min": 4767289879
      },
      "verify": {
       "avg": 129154773,
       "count": 1,
       "max": 129154773,
       "median": 129154773,
       "min": 129154773
      }
     },
     "cycles_total": 5140968261,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
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
      "label": "192f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-192f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 30766 (shown: benchmarked binary (QEMU testvectors dump))"
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
      "text": 31208,
      "total": 33108
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 9168629911,
       "count": 1,
       "max": 9168629911,
       "median": 9168629911,
       "min": 9168629911
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
      "label": "192s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-192s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 31024,
      "total": 32924
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 496172765,
       "count": 1,
       "max": 496172765,
       "median": 496172765,
       "min": 496172765
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
     "id": "crypto_sign_Phoenix-SHAKE-256f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 256,
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-256f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 44906 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
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
      "text": 31280,
      "total": 33180
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 6547266454,
       "count": 1,
       "max": 6547266454,
       "median": 6547266454,
       "min": 6547266454
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-256s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31512,
      "total": 33412
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1087789849,
       "count": 1,
       "max": 1087789849,
       "median": 1087789849,
       "min": 1087789849
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
      "label": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-384f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31544,
      "total": 33444
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
     "id": "crypto_sign_Phoenix-SHAKE-384s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "10 counts",
      "status": "match"
     },
     "level": {
      "bits": 384,
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-384s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 54726 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "failed",
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
     "status_text": "timeout (10 min cap): no operation completed",
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
       "avg": 4039890575,
       "count": 1,
       "max": 4039890575,
       "median": 4039890575,
       "min": 4039890575
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-512f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 31512,
      "total": 33412
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SHAKE-512s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
     "status_text": "timeout (10 min cap): no operation completed",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 28016,
      "total": 29916
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 36201798,
       "count": 1,
       "max": 36201798,
       "median": 36201798,
       "min": 36201798
      },
      "sign": {
       "avg": 712708497,
       "count": 1,
       "max": 712708497,
       "median": 712708497,
       "min": 712708497
      },
      "verify": {
       "avg": 20168994,
       "count": 1,
       "max": 20168994,
       "median": 20168994,
       "min": 20168994
      }
     },
     "cycles_total": 769079289,
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-128f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 29364,
      "total": 31264
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 1152652182,
       "count": 1,
       "max": 1152652182,
       "median": 1152652182,
       "min": 1152652182
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
     "id": "crypto_sign_Phoenix-SM3-128s_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 128,
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-128s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 6258 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
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
      "text": 28584,
      "total": 30484
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 96848326,
       "count": 1,
       "max": 96848326,
       "median": 96848326,
       "min": 96848326
      },
      "sign": {
       "avg": 1909065643,
       "count": 1,
       "max": 1909065643,
       "median": 1909065643,
       "min": 1909065643
      },
      "verify": {
       "avg": 50888265,
       "count": 1,
       "max": 50888265,
       "median": 50888265,
       "min": 50888265
      }
     },
     "cycles_total": 2056802234,
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
      "label": "192f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-192f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 28988,
      "total": 30888
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 3618655838,
       "count": 1,
       "max": 3618655838,
       "median": 3618655838,
       "min": 3618655838
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
      "label": "192s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-192s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 28820,
      "total": 30720
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 191753234,
       "count": 1,
       "max": 191753234,
       "median": 191753234,
       "min": 191753234
      },
      "sign": {
       "avg": 3684704824,
       "count": 1,
       "max": 3684704824,
       "median": 3684704824,
       "min": 3684704824
      },
      "verify": {
       "avg": 97338868,
       "count": 1,
       "max": 97338868,
       "median": 97338868,
       "min": 97338868
      }
     },
     "cycles_total": 3973796926,
     "expected_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "failure_kind": null,
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-256f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 44906 (shown: benchmarked binary (QEMU testvectors dump))"
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
      "text": 29120,
      "total": 31020
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 2524714166,
       "count": 1,
       "max": 2524714166,
       "median": 2524714166,
       "min": 2524714166
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-256s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 29452,
      "total": 31352
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 406241591,
       "count": 1,
       "max": 406241591,
       "median": 406241591,
       "min": 406241591
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
     "id": "crypto_sign_Phoenix-SM3-384f_ref",
     "impl": "ref",
     "kat": {
      "caveat": null,
      "detail": "count 0: Sn differs; count 1: Sn differs; count 2: Sn differs; count 3: Sn differs ...",
      "status": "mismatch"
     },
     "level": {
      "bits": 384,
      "label": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-384f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
     },
     "notes": [
      "host build of the reference code reports different sizes: sig_max 88442 (shown: benchmarked binary (QEMU testvectors dump))",
      "official KAT file reports different sizes: sig_max 88058 (shown: benchmarked binary (QEMU testvectors dump))"
     ],
     "run_status": "partial",
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
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29464,
      "total": 31364
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
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-384s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 29544,
      "total": 31444
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 809617459,
       "count": 1,
       "max": 809617459,
       "median": 809617459,
       "min": 809617459
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-512f",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
     "status_text": "timeout (10 min cap, 1 iteration): completed keypair; the remaining operation(s) exceed the cap",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 29448,
      "total": 31348
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Phoenix",
      "instance": "Phoenix-SM3-512s",
      "pub_date": "2026-09-20 14:08",
      "title": "Phoenix"
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
      "text": 26604,
      "total": 28516
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 872217,
       "count": 1,
       "max": 872217,
       "median": 872217,
       "min": 872217
      },
      "sign": {
       "avg": 60662841,
       "count": 1,
       "max": 60662841,
       "median": 60662841,
       "min": 60662841
      },
      "verify": {
       "avg": 24885993,
       "count": 1,
       "max": 24885993,
       "median": 24885993,
       "min": 24885993
      }
     },
     "cycles_total": 86421051,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "QingLuan",
      "instance": "QingLuan-128",
      "pub_date": "2026-09-20 14:08",
      "title": "Qing Luan"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26960,
      "total": 28872
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 4391738,
       "count": 1,
       "max": 4391738,
       "median": 4391738,
       "min": 4391738
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "QingLuan",
      "instance": "QingLuan-256",
      "pub_date": "2026-09-20 14:08",
      "title": "Qing Luan"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26660,
      "total": 28572
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 7010120,
       "count": 2,
       "max": 9628502,
       "median": 7010120,
       "min": 4391738
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
      "label": "384",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "QingLuan",
      "instance": "QingLuan-384",
      "pub_date": "2026-09-20 14:08",
      "title": "Qing Luan"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 560,
      "data": 1352,
      "source": "report",
      "text": 26708,
      "total": 28620
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 21151109,
       "count": 1,
       "max": 21151109,
       "median": 21151109,
       "min": 21151109
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "QingLuan",
      "instance": "QingLuan-512",
      "pub_date": "2026-09-20 14:08",
      "title": "Qing Luan"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137212,
      "total": 139664
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 45890526,
       "count": 1,
       "max": 45890526,
       "median": 45890526,
       "min": 45890526
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
      "bits": 160,
      "label": "160f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-160f",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137212,
      "total": 139664
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 45889875,
       "count": 1,
       "max": 45889875,
       "median": 45889875,
       "min": 45889875
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
      "bits": 160,
      "label": "160s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-160s",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137244,
      "total": 139696
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-256f",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed none",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-256s",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 1100,
      "data": 1352,
      "source": "report",
      "text": 137236,
      "total": 139688
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
      "label": "384f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-384f",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed none",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "384s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-384s",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-512f",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "ReSolveD-alpha",
      "instance": "ReSolveD-alpha-512s",
      "pub_date": "2026-09-20 14:07",
      "title": "ReSolveD-ɑ"
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Sigurd",
      "instance": "Sigurd128_REF",
      "pub_date": "2026-09-20 14:05",
      "title": "Sigurd"
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
     "status_text": "link failed on the board: overflowed by 71348 bytes (640 KB SRAM)",
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Sigurd",
      "instance": "Sigurd256_REF",
      "pub_date": "2026-09-20 14:05",
      "title": "Sigurd"
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
     "status_text": "link failed on the board: overflowed by 137820 bytes (640 KB SRAM)",
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Sigurd",
      "instance": "Sigurd512_REF",
      "pub_date": "2026-09-20 14:05",
      "title": "Sigurd"
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
     "status_text": "link failed on the board: overflowed by 1061584 bytes (640 KB SRAM)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 548,
      "data": 1352,
      "source": "report",
      "text": 39220,
      "total": 41120
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 65519798,
       "count": 1,
       "max": 65519798,
       "median": 65519798,
       "min": 65519798
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "TRINE",
      "instance": "TRINE-128-ShortSig",
      "pub_date": "2026-09-20 14:00",
      "title": "TRINE"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "TRINE",
      "instance": "TRINE-128-balanced",
      "pub_date": "2026-09-20 14:00",
      "title": "TRINE"
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 4452,
      "data": 1384,
      "source": "report",
      "text": 35536,
      "total": 41372
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 63946654,
       "count": 1,
       "max": 63946654,
       "median": 63946654,
       "min": 63946654
      },
      "sign": {
       "avg": 85190689,
       "count": 1,
       "max": 85190689,
       "median": 85190689,
       "min": 85190689
      },
      "verify": {
       "avg": 71586779,
       "count": 1,
       "max": 71586779,
       "median": 71586779,
       "min": 71586779
      }
     },
     "cycles_total": 220724122,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "TSUOV",
      "instance": "TSUOV_128",
      "pub_date": "2026-09-20 13:59",
      "title": "TSUOV"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 11948,
      "data": 1384,
      "source": "report",
      "text": 34836,
      "total": 48168
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "TSUOV",
      "instance": "TSUOV_256",
      "pub_date": "2026-09-20 13:59",
      "title": "TSUOV"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 126116,
      "data": 1384,
      "source": "report",
      "text": 34852,
      "total": 162352
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "TSUOV",
      "instance": "TSUOV_512",
      "pub_date": "2026-09-20 13:59",
      "title": "TSUOV"
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
      "text": 33404,
      "total": 35708
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 7000537,
       "count": 1,
       "max": 7000537,
       "median": 7000537,
       "min": 7000537
      },
      "sign": {
       "avg": 48933756,
       "count": 1,
       "max": 48933756,
       "median": 48933756,
       "min": 48933756
      },
      "verify": {
       "avg": 7448013,
       "count": 1,
       "max": 7448013,
       "median": 7448013,
       "min": 7448013
      }
     },
     "cycles_total": 63382306,
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
      "label": "128",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa128",
      "pub_date": "2026-09-20 14:12",
      "title": "MORNING-ATLAS"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 33356,
      "total": 35660
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 16585645,
       "count": 1,
       "max": 16585645,
       "median": 16585645,
       "min": 16585645
      },
      "sign": {
       "avg": 43434022,
       "count": 1,
       "max": 43434022,
       "median": 43434022,
       "min": 43434022
      },
      "verify": {
       "avg": 17379556,
       "count": 1,
       "max": 17379556,
       "median": 17379556,
       "min": 17379556
      }
     },
     "cycles_total": 77399223,
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
      "label": "192",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa192",
      "pub_date": "2026-09-20 14:12",
      "title": "MORNING-ATLAS"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 30440,
      "total": 32744
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 14211612,
       "count": 2,
       "max": 16585645,
       "median": 14211612,
       "min": 11837580
      },
      "sign": {
       "avg": 31171407,
       "count": 1,
       "max": 31171407,
       "median": 31171407,
       "min": 31171407
      },
      "verify": {
       "avg": 12792115,
       "count": 1,
       "max": 12792115,
       "median": 12792115,
       "min": 12792115
      }
     },
     "cycles_total": 58175134,
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
      "label": "256",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa256",
      "pub_date": "2026-09-20 14:12",
      "title": "MORNING-ATLAS"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 952,
      "data": 1352,
      "source": "report",
      "text": 35512,
      "total": 37816
     },
     "completed_ops": [],
     "cycles": {
      "keypair": {
       "avg": 83687090,
       "count": 1,
       "max": 83687090,
       "median": 83687090,
       "min": 83687090
      },
      "sign": {
       "avg": 190563583,
       "count": 1,
       "max": 190563583,
       "median": 190563583,
       "min": 190563583
      },
      "verify": {
       "avg": 93561609,
       "count": 1,
       "max": 93561609,
       "median": 93561609,
       "min": 93561609
      }
     },
     "cycles_total": 367812282,
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
      "label": "512",
      "source": "name",
      "variant": null
     },
     "measured_ops": [
      "keypair",
      "sign",
      "verify"
     ],
     "ngcc": {
      "folder": "MORNING-ATLAS",
      "instance": "lwrdsa512",
      "pub_date": "2026-09-20 14:12",
      "title": "MORNING-ATLAS"
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
     "stack": null,
     "status_text": null,
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 39564,
      "data": 1480,
      "source": "report",
      "text": 82948,
      "total": 123992
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22280,
       "count": 1,
       "max": 22280,
       "median": 22280,
       "min": 22280
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_d3_128f_loose",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 58012,
      "data": 1504,
      "source": "report",
      "text": 103804,
      "total": 163320
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22277,
       "count": 1,
       "max": 22277,
       "median": 22277,
       "min": 22277
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_d3_128f_tight",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_d3_128s_loose",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_d3_128s_tight",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 8804,
      "data": 1480,
      "source": "report",
      "text": 73412,
      "total": 83696
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 22312,
       "count": 1,
       "max": 22312,
       "median": 22312,
       "min": 22312
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128f_loose",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "128f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128f_tight",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128s_loose",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "128s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "sm4th_em_d2_128s_tight",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
     "tier": "qemu"
    },
    {
     "category": "sig",
     "code": {
      "bss": 133168,
      "data": 1364,
      "source": "report",
      "text": 81528,
      "total": 216060
     },
     "completed_ops": [
      "keypair"
     ],
     "cycles": {
      "keypair": {
       "avg": 3438831,
       "count": 1,
       "max": 3438831,
       "median": 3438831,
       "min": 3438831
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
      "bits": 160,
      "label": "160f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [
      "keypair"
     ],
     "ngcc": {
      "folder": "SYDO",
      "instance": "sydo_160f",
      "pub_date": "2026-09-20 14:01",
      "title": "SYDO"
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
     "status_text": "HardFault on the board (imprecise bus error = heap grows past the 640 KB SRAM); completed keypair",
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
     "failure_kind": "ram-qemu-evidence",
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
      "bits": 160,
      "label": "160s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "SYDO",
      "instance": "sydo_160s",
      "pub_date": "2026-09-20 14:01",
      "title": "SYDO"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "SYDO",
      "instance": "sydo_256f",
      "pub_date": "2026-09-20 14:01",
      "title": "SYDO"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "SYDO",
      "instance": "sydo_256s",
      "pub_date": "2026-09-20 14:01",
      "title": "SYDO"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "SYDO",
      "instance": "sydo_512f",
      "pub_date": "2026-09-20 14:01",
      "title": "SYDO"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "SYDO",
      "instance": "sydo_512s",
      "pub_date": "2026-09-20 14:01",
      "title": "SYDO"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "ublockith_d3_256f",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "ublockith_d3_256s",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "ublockith_em_d3_256f",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "256s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "ublockith_em_d3_256s",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512f",
      "source": "name",
      "variant": "f"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "vistrutith_d3_512f",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
     "failure_kind": "ram-qemu-evidence",
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
      "label": "512s",
      "source": "name",
      "variant": "s"
     },
     "measured_ops": [],
     "ngcc": {
      "folder": "Chinith",
      "instance": "vistrutith_d3_512s",
      "pub_date": "2026-09-20 14:21",
      "title": "Chinith"
     },
     "notes": [],
     "run_status": "failed",
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
     "status_text": "not run on the board: needed more than 4 MiB of RAM in the QEMU KAT run (board has 640 KB)",
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
   "Code size is `arm-none-eabi-size` of the speed ELF (.text/.data/.bss include the benchmark driver and HAL)."
  ],
  "counts": {
   "by_category": {
    "kem": 146,
    "kex": 33,
    "sig": 121
   },
   "by_status": {
    "kem.failed": 6,
    "kem.measured": 98,
    "kem.not-run": 41,
    "kem.partial": 1,
    "kex.failed": 2,
    "kex.measured": 27,
    "kex.not-run": 4,
    "sig.failed": 51,
    "sig.measured": 39,
    "sig.partial": 31
   },
   "by_tier": {
    "kem.board": 105,
    "kem.qemu": 41,
    "kex.board": 29,
    "kex.qemu": 4,
    "sig.board": 13,
    "sig.qemu": 108
   },
   "implementations": 300,
   "kat": {
    "match": 230,
    "mismatch": 20,
    "not-checked": 31,
    "run-failed": 18,
    "timeout": 1
   },
   "unsupported_instances": 131
  },
  "footnotes": [
   "10 instances listed in schemes.json are components of another submission (CreTAKE's BiT/ZEN/POLARLAC building blocks, benchmarked under their own submissions) and are not counted: CreTAKE/BiT-128, CreTAKE/BiT-256, CreTAKE/BiT-512, CreTAKE/POLARLAC-128, CreTAKE/POLARLAC-256, CreTAKE/POLARLAC-512, CreTAKE/POLARLAC-512-Star, CreTAKE/ZEN_128, CreTAKE/ZEN_256, CreTAKE/ZEN_512"
  ],
  "generated_on": "2026-10-06",
  "generator": "tools/make_site_data.py",
  "git_rev": "e971de1",
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
    "2026-09-23"
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
   "crypto_sign_BiT-256_ref",
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
   "crypto_sign_Phoenix-SHAKE-256f_ref",
   "crypto_sign_Phoenix-SHAKE-256s_ref",
   "crypto_sign_Phoenix-SHAKE-384f_ref",
   "crypto_sign_Phoenix-SHAKE-384s_ref",
   "crypto_sign_Phoenix-SHAKE-512f_ref",
   "crypto_sign_Phoenix-SHAKE-512s_ref",
   "crypto_sign_Phoenix-SM3-128s_ref",
   "crypto_sign_Phoenix-SM3-192s_ref",
   "crypto_sign_Phoenix-SM3-256s_ref",
   "crypto_sign_Phoenix-SM3-384f_ref",
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
     "bits": null,
     "label": "-",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "BIKE_MLThre",
     "instance": "BIKE_MLThre",
     "title": "BIKE-MLThre"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "BRA",
     "instance": "BRA-128",
     "title": "BRA"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "BRA",
     "instance": "BRA-256",
     "title": "BRA"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "BRA",
     "instance": "BRA-512",
     "title": "BRA"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "BRQC",
     "instance": "BRQC-128",
     "title": "BRQC"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "BRQC",
     "instance": "BRQC-256",
     "title": "BRQC"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "BRQC",
     "instance": "BRQC-512",
     "title": "BRQC"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "C-Multi-UR-AG",
     "instance": "CMultiURAG-128",
     "title": "C-Multi-UR-AG"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "C-Multi-UR-AG",
     "instance": "CMultiURAG-256",
     "title": "C-Multi-UR-AG"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "C-Multi-UR-AG",
     "instance": "CMultiURAG-512",
     "title": "C-Multi-UR-AG"
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
     "bits": null,
     "label": "q=257 n=512",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "CTL",
     "instance": "CTL-257-512",
     "title": "CTL Algorithm"
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
     "bits": null,
     "label": "q=3329 n=2048",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "CTL",
     "instance": "CTL-3329-2048",
     "title": "CTL Algorithm"
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
     "bits": null,
     "label": "q=769 n=1024",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "CTL",
     "instance": "CTL-769-1024",
     "title": "CTL Algorithm"
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
     "bits": null,
     "label": "-",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "HEP-QC",
     "instance": "HEP-QC",
     "title": "Hybrid Equivalent Punctured and Quasi-Cyclic"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-128",
     "title": "MAMBA-Frost"
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
     "label": "192",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-192",
     "title": "MAMBA-Frost"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-256",
     "title": "MAMBA-Frost"
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
     "label": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-384",
     "title": "MAMBA-Frost"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-512",
     "title": "MAMBA-Frost"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-128",
     "title": "MAMBA-Frost"
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
     "label": "192",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-192",
     "title": "MAMBA-Frost"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-256",
     "title": "MAMBA-Frost"
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
     "label": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-384",
     "title": "MAMBA-Frost"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MAMBA-Frost",
     "instance": "MAMBA-Frost-CC-512",
     "title": "MAMBA-Frost"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "MORNING-Scabbard",
     "instance": "scabbard512",
     "title": "MORNING-Scabbard"
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
    "folder": "PolarLAC",
    "instance": "POLARLAC-128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "PolarLAC",
     "instance": "POLARLAC-128",
     "title": "PolarLAC"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:35",
    "reason": "only the AVX2 optimized tree is shipped as reference (unguarded __uint128_t, ntt_avx2.c)",
    "reason_scope": "scheme",
    "scheme": "POLARLAC-128",
    "sizes": {
     "ct": 640,
     "kat_path": "schemes/PolarLAC/Test_Vectors/Optimized_Implementation/ARM/KAT_KEM_POLARLAC-128.txt",
     "pk": 530,
     "results_path": "results/PolarLAC/POLARLAC-128.json",
     "sk": 1570,
     "source": "ngcc_results",
     "ss": 16
    },
    "title": "PolarLAC"
   },
   {
    "category": "kem",
    "folder": "PolarLAC",
    "instance": "POLARLAC-256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "PolarLAC",
     "instance": "POLARLAC-256",
     "title": "PolarLAC"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:35",
    "reason": "only the AVX2 optimized tree is shipped as reference (unguarded __uint128_t, ntt_avx2.c)",
    "reason_scope": "scheme",
    "scheme": "POLARLAC-256",
    "sizes": {
     "ct": 1280,
     "kat_path": "schemes/PolarLAC/Test_Vectors/Optimized_Implementation/ARM/KAT_KEM_POLARLAC-256.txt",
     "pk": 1060,
     "results_path": "results/PolarLAC/POLARLAC-256.json",
     "sk": 3140,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "PolarLAC"
   },
   {
    "category": "kem",
    "folder": "PolarLAC",
    "instance": "POLARLAC-512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "PolarLAC",
     "instance": "POLARLAC-512",
     "title": "PolarLAC"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:35",
    "reason": "only the AVX2 optimized tree is shipped as reference (unguarded __uint128_t, ntt_avx2.c)",
    "reason_scope": "scheme",
    "scheme": "POLARLAC-512",
    "sizes": {
     "ct": 2560,
     "kat_path": "schemes/PolarLAC/Test_Vectors/Optimized_Implementation/ARM/KAT_KEM_POLARLAC-512.txt",
     "pk": 2116,
     "results_path": "results/PolarLAC/POLARLAC-512.json",
     "sk": 6276,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "PolarLAC"
   },
   {
    "category": "kem",
    "folder": "PolarLAC",
    "instance": "POLARLAC-512-Star",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "PolarLAC",
     "instance": "POLARLAC-512-Star",
     "title": "PolarLAC"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:35",
    "reason": "only the AVX2 optimized tree is shipped as reference (unguarded __uint128_t, ntt_avx2.c)",
    "reason_scope": "scheme",
    "scheme": "POLARLAC-512-Star",
    "sizes": {
     "ct": 2970,
     "kat_path": "schemes/PolarLAC/Test_Vectors/Optimized_Implementation/ARM/KAT_KEM_POLARLAC-512-Star.txt",
     "pk": 2522,
     "results_path": "results/PolarLAC/POLARLAC-512-Star.json",
     "sk": 6682,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "PolarLAC"
   },
   {
    "category": "kem",
    "folder": "PolarLAC",
    "instance": "POLARLAC-Light",
    "level": {
     "bits": null,
     "label": "Light",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "PolarLAC",
     "instance": "POLARLAC-Light",
     "title": "PolarLAC"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:35",
    "reason": "only the AVX2 optimized tree is shipped as reference (unguarded __uint128_t, ntt_avx2.c)",
    "reason_scope": "scheme",
    "scheme": "POLARLAC-Light",
    "sizes": {
     "ct": 608,
     "kat_path": "schemes/PolarLAC/Test_Vectors/Optimized_Implementation/ARM/KAT_KEM_POLARLAC-Light.txt",
     "pk": 530,
     "results_path": "results/PolarLAC/POLARLAC-Light.json",
     "sk": 1570,
     "source": "ngcc_results",
     "ss": 16
    },
    "title": "PolarLAC"
   },
   {
    "category": "kem",
    "folder": "QIMEN-PIKE",
    "instance": "QIMEN-PIKE",
    "level": {
     "bits": null,
     "label": "-",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "QIMEN-PIKE",
     "instance": "QIMEN-PIKE",
     "title": "QIMEN-PIKE"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "QCTM",
     "instance": "QCTM128",
     "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "QCTM",
     "instance": "QCTM256",
     "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "QCTM",
     "instance": "QCTM512",
     "title": "Quasi-Cyclic Twisted McEliece Key Encapsulation Mechanism"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "UVW-KEM",
     "instance": "UVW_KEM_128",
     "title": "UVW Key Encapsulation Mechanism"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "UVW-KEM",
     "instance": "UVW_KEM_256",
     "title": "UVW Key Encapsulation Mechanism"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "UVW-KEM",
     "instance": "UVW_KEM_512",
     "title": "UVW Key Encapsulation Mechanism"
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
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-PLAC128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-PLAC128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-PLAC128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC128.txt",
     "msg_max": 2450,
     "msg_total": 2450,
     "msgs": [
      1170,
      1280
     ],
     "passes": 2,
     "pk_a": 530,
     "pk_b": 530,
     "results_path": "results/CreTAKE/CreTAKE-K2K-PLAC128.json",
     "sk_a": 1570,
     "sk_b": 1570,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-PLAC256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-PLAC256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-PLAC256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC256.txt",
     "msg_max": 4900,
     "msg_total": 4900,
     "msgs": [
      2340,
      2560
     ],
     "passes": 2,
     "pk_a": 1060,
     "pk_b": 1060,
     "results_path": "results/CreTAKE/CreTAKE-K2K-PLAC256.json",
     "sk_a": 3140,
     "sk_b": 3140,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-PLAC512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-PLAC512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-PLAC512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC512.txt",
     "msg_max": 9284,
     "msg_total": 9284,
     "msgs": [
      4676,
      4608
     ],
     "passes": 2,
     "pk_a": 2116,
     "pk_b": 2116,
     "results_path": "results/CreTAKE/CreTAKE-K2K-PLAC512.json",
     "sk_a": 6276,
     "sk_b": 6276,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-PLAC512Star",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-PLAC512Star",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-PLAC512Star",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-PLAC512Star.txt",
     "msg_max": 10920,
     "msg_total": 10920,
     "msgs": [
      5492,
      5428
     ],
     "passes": 2,
     "pk_a": 2522,
     "pk_b": 2522,
     "results_path": "results/CreTAKE/CreTAKE-K2K-PLAC512Star.json",
     "sk_a": 6682,
     "sk_b": 6682,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-ZEN128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-ZEN128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-ZEN128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-ZEN128.txt",
     "msg_max": 2151,
     "msg_total": 2151,
     "msgs": [
      1127,
      1024
     ],
     "passes": 2,
     "pk_a": 615,
     "pk_b": 615,
     "results_path": "results/CreTAKE/CreTAKE-K2K-ZEN128.json",
     "sk_a": 1303,
     "sk_b": 1303,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-ZEN256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-ZEN256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-ZEN256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-ZEN256.txt",
     "msg_max": 4301,
     "msg_total": 4301,
     "msgs": [
      2253,
      2048
     ],
     "passes": 2,
     "pk_a": 1229,
     "pk_b": 1229,
     "results_path": "results/CreTAKE/CreTAKE-K2K-ZEN256.json",
     "sk_a": 2605,
     "sk_b": 2605,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2K-ZEN512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2K-ZEN512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2K-ZEN512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2K-ZEN512.txt",
     "msg_max": 8602,
     "msg_total": 8602,
     "msgs": [
      4506,
      4096
     ],
     "passes": 2,
     "pk_a": 2458,
     "pk_b": 2458,
     "results_path": "results/CreTAKE/CreTAKE-K2K-ZEN512.json",
     "sk_a": 5210,
     "sk_b": 5210,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2S-PLAC128-BiT128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2S-PLAC128-BiT128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2S-PLAC128-BiT128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2S-PLAC128-BiT128.txt",
     "msg_max": 3314,
     "msg_total": 3314,
     "msgs": [
      530,
      2784
     ],
     "passes": 2,
     "pk_a": 1048,
     "pk_b": 1048,
     "results_path": "results/CreTAKE/CreTAKE-K2S-PLAC128-BiT128.json",
     "sk_a": 1864,
     "sk_b": 1864,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2S-PLAC256-BiT256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2S-PLAC256-BiT256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2S-PLAC256-BiT256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2S-PLAC256-BiT256.txt",
     "msg_max": 7076,
     "msg_total": 7076,
     "msgs": [
      1060,
      6016
     ],
     "passes": 2,
     "pk_a": 2144,
     "pk_b": 2144,
     "results_path": "results/CreTAKE/CreTAKE-K2S-PLAC256-BiT256.json",
     "sk_a": 4160,
     "sk_b": 4160,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2S-PLAC512-BiT512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2S-PLAC512-BiT512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2S-PLAC512-BiT512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2S-PLAC512-BiT512.txt",
     "msg_max": 13931,
     "msg_total": 13931,
     "msgs": [
      2116,
      11815
     ],
     "passes": 2,
     "pk_a": 5056,
     "pk_b": 5056,
     "results_path": "results/CreTAKE/CreTAKE-K2S-PLAC512-BiT512.json",
     "sk_a": 9024,
     "sk_b": 9024,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2S-ZEN128-BiT128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2S-ZEN128-BiT128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2S-ZEN128-BiT128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2S-ZEN128-BiT128.txt",
     "msg_max": 3143,
     "msg_total": 3143,
     "msgs": [
      615,
      2528
     ],
     "passes": 2,
     "pk_a": 1048,
     "pk_b": 1048,
     "results_path": "results/CreTAKE/CreTAKE-K2S-ZEN128-BiT128.json",
     "sk_a": 1864,
     "sk_b": 1864,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2S-ZEN256-BiT256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2S-ZEN256-BiT256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2S-ZEN256-BiT256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2S-ZEN256-BiT256.txt",
     "msg_max": 6733,
     "msg_total": 6733,
     "msgs": [
      1229,
      5504
     ],
     "passes": 2,
     "pk_a": 2144,
     "pk_b": 2144,
     "results_path": "results/CreTAKE/CreTAKE-K2S-ZEN256-BiT256.json",
     "sk_a": 4160,
     "sk_b": 4160,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-K2S-ZEN512-BiT512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-K2S-ZEN512-BiT512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-K2S-ZEN512-BiT512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-K2S-ZEN512-BiT512.txt",
     "msg_max": 13249,
     "msg_total": 13249,
     "msgs": [
      2458,
      10791
     ],
     "passes": 2,
     "pk_a": 5056,
     "pk_b": 5056,
     "results_path": "results/CreTAKE/CreTAKE-K2S-ZEN512-BiT512.json",
     "sk_a": 9024,
     "sk_b": 9024,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2K-BiT128-PLAC128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2K-BiT128-PLAC128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2K-BiT128-PLAC128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT128-PLAC128.txt",
     "msg_max": 3314,
     "msg_total": 3314,
     "msgs": [
      2674,
      640
     ],
     "passes": 2,
     "pk_a": 1048,
     "pk_b": 1048,
     "results_path": "results/CreTAKE/CreTAKE-S2K-BiT128-PLAC128.json",
     "sk_a": 1864,
     "sk_b": 1864,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2K-BiT128-ZEN128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2K-BiT128-ZEN128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2K-BiT128-ZEN128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT128-ZEN128.txt",
     "msg_max": 3143,
     "msg_total": 3143,
     "msgs": [
      2631,
      512
     ],
     "passes": 2,
     "pk_a": 1048,
     "pk_b": 1048,
     "results_path": "results/CreTAKE/CreTAKE-S2K-BiT128-ZEN128.json",
     "sk_a": 1864,
     "sk_b": 1864,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2K-BiT256-PLAC256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2K-BiT256-PLAC256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2K-BiT256-PLAC256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT256-PLAC256.txt",
     "msg_max": 7076,
     "msg_total": 7076,
     "msgs": [
      5796,
      1280
     ],
     "passes": 2,
     "pk_a": 2144,
     "pk_b": 2144,
     "results_path": "results/CreTAKE/CreTAKE-S2K-BiT256-PLAC256.json",
     "sk_a": 4160,
     "sk_b": 4160,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2K-BiT256-ZEN256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2K-BiT256-ZEN256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2K-BiT256-ZEN256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT256-ZEN256.txt",
     "msg_max": 6733,
     "msg_total": 6733,
     "msgs": [
      5709,
      1024
     ],
     "passes": 2,
     "pk_a": 2144,
     "pk_b": 2144,
     "results_path": "results/CreTAKE/CreTAKE-S2K-BiT256-ZEN256.json",
     "sk_a": 4160,
     "sk_b": 4160,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2K-BiT512-PLAC512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2K-BiT512-PLAC512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2K-BiT512-PLAC512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT512-PLAC512.txt",
     "msg_max": 13931,
     "msg_total": 13931,
     "msgs": [
      11371,
      2560
     ],
     "passes": 2,
     "pk_a": 5056,
     "pk_b": 5056,
     "results_path": "results/CreTAKE/CreTAKE-S2K-BiT512-PLAC512.json",
     "sk_a": 9024,
     "sk_b": 9024,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2K-BiT512-ZEN512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2K-BiT512-ZEN512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2K-BiT512-ZEN512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2K-BiT512-ZEN512.txt",
     "msg_max": 13249,
     "msg_total": 13249,
     "msgs": [
      11201,
      2048
     ],
     "passes": 2,
     "pk_a": 5056,
     "pk_b": 5056,
     "results_path": "results/CreTAKE/CreTAKE-S2K-BiT512-ZEN512.json",
     "sk_a": 9024,
     "sk_b": 9024,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2S-BiT128-ePLAC128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2S-BiT128-ePLAC128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2S-BiT128-ePLAC128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT128-ePLAC128.txt",
     "msg_max": 4178,
     "msg_total": 4178,
     "msgs": [
      2034,
      2144
     ],
     "passes": 2,
     "pk_a": 1048,
     "pk_b": 1048,
     "results_path": "results/CreTAKE/CreTAKE-S2S-BiT128-ePLAC128.json",
     "sk_a": 1864,
     "sk_b": 1864,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2S-BiT128-eZEN128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2S-BiT128-eZEN128",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2S-BiT128-eZEN128",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT128-eZEN128.txt",
     "msg_max": 4135,
     "msg_total": 4135,
     "msgs": [
      2119,
      2016
     ],
     "passes": 2,
     "pk_a": 1048,
     "pk_b": 1048,
     "results_path": "results/CreTAKE/CreTAKE-S2S-BiT128-eZEN128.json",
     "sk_a": 1864,
     "sk_b": 1864,
     "source": "ngcc_results",
     "ss": 32
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2S-BiT256-ePLAC256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2S-BiT256-ePLAC256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2S-BiT256-ePLAC256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT256-ePLAC256.txt",
     "msg_max": 9252,
     "msg_total": 9252,
     "msgs": [
      4516,
      4736
     ],
     "passes": 2,
     "pk_a": 2144,
     "pk_b": 2144,
     "results_path": "results/CreTAKE/CreTAKE-S2S-BiT256-ePLAC256.json",
     "sk_a": 4160,
     "sk_b": 4160,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2S-BiT256-eZEN256",
    "level": {
     "bits": 256,
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2S-BiT256-eZEN256",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2S-BiT256-eZEN256",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT256-eZEN256.txt",
     "msg_max": 9165,
     "msg_total": 9165,
     "msgs": [
      4685,
      4480
     ],
     "passes": 2,
     "pk_a": 2144,
     "pk_b": 2144,
     "results_path": "results/CreTAKE/CreTAKE-S2S-BiT256-eZEN256.json",
     "sk_a": 4160,
     "sk_b": 4160,
     "source": "ngcc_results",
     "ss": 64
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2S-BiT512-ePLAC512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2S-BiT512-ePLAC512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2S-BiT512-ePLAC512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT512-ePLAC512.txt",
     "msg_max": 18066,
     "msg_total": 18066,
     "msgs": [
      8811,
      9255
     ],
     "passes": 2,
     "pk_a": 5056,
     "pk_b": 5056,
     "results_path": "results/CreTAKE/CreTAKE-S2S-BiT512-ePLAC512.json",
     "sk_a": 9024,
     "sk_b": 9024,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "CreTAKE",
    "instance": "CreTAKE-S2S-BiT512-eZEN512",
    "level": {
     "bits": 512,
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CreTAKE",
     "instance": "CreTAKE-S2S-BiT512-eZEN512",
     "title": "CreTAKE"
    },
    "notes": [],
    "pub_date": "2026-09-20 10:15",
    "reason": "KEM and signature cores collide on fips202.*/poly.*/params.h; asymmetric key lengths (tier-2 follow-up)",
    "reason_scope": "scheme",
    "scheme": "CreTAKE-S2S-BiT512-eZEN512",
    "sizes": {
     "kat_path": "schemes/CreTAKE/Test_Vectors/Optimized_Test_Vector/KAT_KEX_CreTAKE-S2S-BiT512-eZEN512.txt",
     "msg_max": 17896,
     "msg_total": 17896,
     "msgs": [
      9153,
      8743
     ],
     "passes": 2,
     "pk_a": 5056,
     "pk_b": 5056,
     "results_path": "results/CreTAKE/CreTAKE-S2S-BiT512-eZEN512.json",
     "sk_a": 9024,
     "sk_b": 9024,
     "source": "ngcc_results",
     "ss": 128
    },
    "title": "CreTAKE"
   },
   {
    "category": "kex",
    "folder": "Loom",
    "instance": "LoomKEX-128",
    "level": {
     "bits": 128,
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Loom",
     "instance": "LoomKEX-128",
     "title": "Loom"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:42",
    "reason": "kem/ and sig/ trees collide on poly.c/polyvec.c/reduce.c symbols; __int128",
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Loom",
     "instance": "LoomKEX-256",
     "title": "Loom"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:42",
    "reason": "kem/ and sig/ trees collide on poly.c/polyvec.c/reduce.c symbols; __int128",
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Loom",
     "instance": "LoomKEX-512",
     "title": "Loom"
    },
    "notes": [],
    "pub_date": "2026-09-20 09:42",
    "reason": "kem/ and sig/ trees collide on poly.c/polyvec.c/reduce.c symbols; __int128",
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
     "bits": null,
     "label": "-",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "NIIKE",
     "instance": "NIIKE",
     "title": "NIIKE"
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
     "label": "384f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "folder": "cedrus-alpha",
     "instance": "CEDRUSALPHA-384f",
     "title": "CEDRUSɑ"
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
     "label": "512f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "folder": "cedrus-alpha",
     "instance": "CEDRUSALPHA-512f",
     "title": "CEDRUSɑ"
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
     "label": "512s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "folder": "cedrus-alpha",
     "instance": "CEDRUSALPHA-512s",
     "title": "CEDRUSɑ"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CS",
     "instance": "CS-128",
     "title": "CS"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CS",
     "instance": "CS-256",
     "title": "CS"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "CS",
     "instance": "CS-512",
     "title": "CS"
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
     "bits": null,
     "label": "-",
     "source": "none",
     "variant": null
    },
    "ngcc": {
     "folder": "DOVE",
     "instance": "DOVE_classic_ref",
     "title": "DOVE"
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
     "bits": null,
     "label": "-",
     "source": "none",
     "variant": null
    },
    "ngcc": {
     "folder": "DOVE",
     "instance": "DOVE_pkc_skc_ref",
     "title": "DOVE"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Facto-DSA",
     "instance": "Facto-DSA-256",
     "title": "Facto-DSA"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Facto-DSA",
     "instance": "Facto-DSA-512",
     "title": "Facto-DSA"
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
     "bits": 160,
     "label": "160f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-160f",
     "title": "FlexTree"
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
     "bits": 160,
     "label": "160s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-160s",
     "title": "FlexTree"
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
     "label": "256f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-256f",
     "title": "FlexTree"
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
     "label": "256s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-256s",
     "title": "FlexTree"
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
     "label": "384f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-384f",
     "title": "FlexTree"
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
     "label": "384s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-384s",
     "title": "FlexTree"
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
     "label": "512f",
     "source": "name",
     "variant": "f"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-512f",
     "title": "FlexTree"
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
     "label": "512s",
     "source": "name",
     "variant": "s"
    },
    "ngcc": {
     "folder": "Flextree",
     "instance": "Flextree-512s",
     "title": "FlexTree"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Origami",
     "instance": "Origami-128",
     "title": "Origami"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Origami",
     "instance": "Origami-256",
     "title": "Origami"
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
     "label": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Origami",
     "instance": "Origami-384",
     "title": "Origami"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Origami",
     "instance": "Origami-512",
     "title": "Origami"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-128",
     "title": "Rhyme"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-256",
     "title": "Rhyme"
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
     "label": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-384",
     "title": "Rhyme"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SHAKE__Rhyme-SHAKE-512",
     "title": "Rhyme"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-128",
     "title": "Rhyme"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-256",
     "title": "Rhyme"
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
     "label": "384",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-384",
     "title": "Rhyme"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Rhyme",
     "instance": "Rhyme-SM3__Rhyme-SM3-512",
     "title": "Rhyme"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "shuttle",
     "instance": "SHUTTLE-128",
     "title": "Shuttle"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "shuttle",
     "instance": "SHUTTLE-256",
     "title": "Shuttle"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "shuttle",
     "instance": "SHUTTLE-512",
     "title": "Shuttle"
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
     "bits": null,
     "label": "lvl1",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl1",
     "title": "SQIsign2D-push1/2"
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
     "bits": null,
     "label": "lvl2",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl2",
     "title": "SQIsign2D-push1/2"
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
     "bits": null,
     "label": "lvl3",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl3",
     "title": "SQIsign2D-push1/2"
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
     "bits": null,
     "label": "lvl4",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D-push12",
     "instance": "sqisign2d_lvl4",
     "title": "SQIsign2D-push1/2"
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
     "bits": null,
     "label": "Level1-eff",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level1-eff",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level1-sec",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level1-sec",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level2-eff",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level2-eff",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level2-sec",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level2-sec",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level3-eff",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level3-eff",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level3-sec",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level3-sec",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level5-eff",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level5-eff",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "Level5-sec",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsign2D2",
     "instance": "SQISign2Dsquare-Level5-sec",
     "title": "SQIsign2D2"
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
     "bits": null,
     "label": "lvl1",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl1",
     "title": "SQIsignTriangle"
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
     "bits": null,
     "label": "lvl2",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl2",
     "title": "SQIsignTriangle"
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
     "bits": null,
     "label": "lvl5",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl5",
     "title": "SQIsignTriangle"
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
     "bits": null,
     "label": "lvl6",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "SQIsignTriangle",
     "instance": "SQIsignTriangle_lvl6",
     "title": "SQIsignTriangle"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Tins",
     "instance": "Tins128",
     "title": "Tins"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Tins",
     "instance": "Tins256",
     "title": "Tins"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "Tins",
     "instance": "Tins512",
     "title": "Tins"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "TRINE",
     "instance": "TRINE-256-ShortSig",
     "title": "TRINE"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "TRINE",
     "instance": "TRINE-256-balanced",
     "title": "TRINE"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "TRINE",
     "instance": "TRINE-512-ShortSig",
     "title": "TRINE"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "TRINE",
     "instance": "TRINE-512-balanced",
     "title": "TRINE"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "UVW_signature",
     "instance": "UVW-128",
     "title": "UVW signature"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "UVW_signature",
     "instance": "UVW-256",
     "title": "UVW signature"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "UVW_signature",
     "instance": "UVW-512",
     "title": "UVW signature"
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
     "label": "128",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "VDOO",
     "instance": "VDOO-128",
     "title": "VDOO: Vinegar-Diagonal-Oil-Oil"
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
     "label": "256",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "VDOO",
     "instance": "VDOO-256",
     "title": "VDOO: Vinegar-Diagonal-Oil-Oil"
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
     "label": "512",
     "source": "name",
     "variant": null
    },
    "ngcc": {
     "folder": "VDOO",
     "instance": "VDOO-512",
     "title": "VDOO: Vinegar-Diagonal-Oil-Oil"
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
     "bits": null,
     "label": "n=1024",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "YuanYang.DSA",
     "instance": "yuanyang-1024",
     "title": "YuanYang.DSA"
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
     "bits": null,
     "label": "n=2048",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "YuanYang.DSA",
     "instance": "yuanyang-2048",
     "title": "YuanYang.DSA"
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
     "bits": null,
     "label": "n=512",
     "source": "override",
     "variant": null
    },
    "ngcc": {
     "folder": "YuanYang.DSA",
     "instance": "yuanyang-512",
     "title": "YuanYang.DSA"
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
