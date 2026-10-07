# Implementations excluded from the build system and from the Python drivers
# (build_schemes.py, benchmark_schemes.py, kat_check.py). mk/scheme.mk includes
# this file automatically; the drivers parse it with the same semantics.
#
#   SKIP_SCHEMES  scheme directory names: every family and implementation of
#                 that scheme is dropped, e.g.  SKIP_SCHEMES += scabbard512 Tins128
#   SKIP_IMPLS    family/scheme/implementation paths, make % wildcards allowed,
#                 e.g.  SKIP_IMPLS += crypto_sign/Galas-512S/ref crypto_kem/%/m4
#
# Command line (make or the drivers): SKIP="name ... family/scheme/impl ..."
# adds to these lists (tokens with a slash are implementation patterns, the
# others scheme names); NOSKIP=1 ignores the whole skip list; SKIP_MK=path
# reads another file. The drivers expose the same as --skip, --no-skip and
# --skip-file, and forward them to make.
#
# A skipped implementation keeps its directory, still appears on the benchmark
# site (as "not yet run" or with its old results) and is still importable.

SKIP_SCHEMES +=
SKIP_IMPLS +=

# Signature schemes already measured on the board on 2026-10-06 (speed+stack, NGCC_ITERATIONS=100,
# results in Out/benchmark_speed_sign_iter100_partial.{csv,md}); skipped so the 10-iteration
# rerun covers only the rest. Remove these lines to benchmark them again.
SKIP_SCHEMES += Aigis-Sig-I Aigis-Sig-II Aigis-Sig-III BiT-128 \
	BiT-256 BiT-512 CEDRUSALPHA-160f CEDRUSALPHA-160s \
	CEDRUSC-160f CEDRUSC-160s CEDRUSC-256f CEDRUSC-256s \
	CEDRUSC-384f CEDRUSC-384s CEDRUSC-512f CEDRUSC-512s \
	COMPASS-SIG-128 COMPASS-SIG-256 COMPASS-SIG-384 COMPASS-SIG-512 \
	DARTS128 DARTS256 DARTS512

# Signature schemes already attempted on the board on 2026-10-06/07 (speed+stack, NGCC_ITERATIONS=10, 30 min cap;
# results in Out/benchmark_speed_sign_iter10a.{csv,md}); skipped so the 15-minute-cap rerun covers only the rest.
SKIP_SCHEMES += CEDRUSALPHA-256f CEDRUSALPHA-256s CEDRUSALPHA-384s Facto-DSA-128 \
	Galas-160F Galas-160S Galas-256F Galas-256S \
	Galas-384F Galas-384S Galas-512F Galas-512S \
	GreatWall128f GreatWall128s GreatWall192f GreatWall192s \
	GreatWall256f GreatWall256s GreatWall512f GreatWall512s \
	Lynxer-160f Lynxer-160s Lynxer-256f Lynxer-256s \
	Lynxer-384f Lynxer-384s Lynxer-512f Lynxer-512s \
	OPSsig-128 OPSsig-256 OPSsig-512 Octarine-128 \
	Octarine-256 Octarine-512 Phoenix-SHAKE-128f Phoenix-SHAKE-128s \
	Phoenix-SHAKE-192f Phoenix-SHAKE-192s Phoenix-SHAKE-256f Phoenix-SHAKE-256s \
	Phoenix-SHAKE-384f Phoenix-SHAKE-384s Phoenix-SHAKE-512f Phoenix-SHAKE-512s \
	Phoenix-SM3-128f Phoenix-SM3-128s Phoenix-SM3-192f Phoenix-SM3-192s \
	Phoenix-SM3-256f Phoenix-SM3-256s

# Signature schemes attempted on 2026-10-07 with the 2-minute cap (NGCC_ITERATIONS=10; results in
# Out/benchmark_speed_sign_iter10c.{csv,md}); skipped so the 5-minute-cap rerun covers only the rest.
SKIP_SCHEMES += Phoenix-SM3-384f Phoenix-SM3-384s Phoenix-SM3-512f Phoenix-SM3-512s
