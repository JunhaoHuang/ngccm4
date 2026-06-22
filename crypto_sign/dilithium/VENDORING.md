# Vendored: pq-crystals/dilithium (ML-DSA reference implementation)

- Upstream: https://github.com/pq-crystals/dilithium
- Branch: `master` (FIPS 204 standard ML-DSA)
- Vendored at commit: `6e00625c5b29f516c6de973fe2ee2fbb150973f9`
- License: Public Domain / Apache 2.0 / GPL 2.0 (triple-licensed; see `LICENSE`)

## What was vendored

`ref/` is a verbatim copy of the upstream `ref/` directory, **excluding**:
- `randombytes.c` — replaced by per-variant `randombytes.c` in each DKEX-{128,256,512}/ directory; ours pulls bytes from the ICCS DRNG (`drng_algorithm`) so KAT output is reproducible. `randombytes.h` is retained as-is.
- `Makefile`, `precomp.gp`, `test/`, `nistkat/` — dev tooling, not needed for the ICCS submission build.
- `avx2/` — reference build only uses `ref/`.

## How variants pick a security level

The reference source is single-sourced; each DKEX variant's CMake compiles it with a different `DILITHIUM_MODE` macro:

| DKEX variant | `DILITHIUM_MODE` | ML-DSA level | (pk, sk, sig) bytes |
|---|---|---|---|
| DKEX-128 | 2 | ML-DSA-44 | (1312, 2560, 2420) |
| DKEX-256 | 3 | ML-DSA-65 | (1952, 4032, 3309) |
| DKEX-512 | 5 | ML-DSA-87 | (2592, 4896, 4627) |

Function symbols are namespaced per level (`pqcrystals_dilithium{2,3,5}_ref_*`), so building multiple levels in the same project produces distinct symbols.

## Updating

To track upstream:
```
git clone https://github.com/pq-crystals/dilithium /tmp/dilithium
# Re-copy the files listed above; update the commit hash recorded here.
```

If `randombytes.h` changes, our local `randombytes.c` may need to follow.
