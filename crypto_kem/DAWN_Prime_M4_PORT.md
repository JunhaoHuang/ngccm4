# DAWN Prime Cortex-M4 port notes

## Scope and representation

The DAWN Prime 128 and 256 `m4` implementations use the current ZEN-128 and
ZEN-256 Cortex-M4 backends for the modulus-`769` NTT/INTT, base
multiplication/inversion, reduction, polynomial utilities, and packed radix-16
binary multiplication.  The scalar DAWN `m4/ntt.c` files are intentionally
absent.

The binary inverse stored after `ZEN_F_NTT_PACK` retains the existing secret
key field size and byte order, but is computed and consumed in packed radix-16
form.  DAWN Prime 128 uses the mixed 256-by-128 multiplier and DAWN Prime 256
uses the mixed 512-by-256 multiplier during decoding.

## Preserved DAWN behavior

- DAWN Prime 128 keeps CBD-1 `g/s/e`, ternary-3 `f`, the 461-byte
  radix-147 ciphertext encoding, and its compression constants.
- DAWN Prime 256 keeps ternary-3 `g`, ternary-1 `f`, CBD-1 `s/e`, and
  its 1024-byte ciphertext representation.
- The DRNG/SM3 KEM integration, parameter values, KEM API, public-key format,
  secret-key format, and ciphertext format are unchanged.

## Arithmetic and ABI assumptions

- Target: ARMv7E-M Thumb-2 Cortex-M4, AAPCS, using the ngccm4 hard-float flags.
- Polynomial coefficients and intermediate ranges are the same as in the
  corresponding current ZEN assembly backends.  Differential tests compare
  results modulo `q = 769`; raw base multiplication carries the documented
  Plantard scale consumed by the inverse NTT.
- Assembly entry points preserve the ZEN register-save conventions and fixed
  loop bounds.  Inputs use the alignment supplied by ordinary C arrays and
  ngccm4's ABI.

## Constant-time review

The new packed fold, radix-16 inversion/multiplication, and decoding paths have
fixed loop counts and fixed-address loads/stores.  Decoding selects between
the two fixed candidate locations with masks and updates both fixed locations;
it does not restore DAWN's former secret-dependent sparse store.

The base-inversion backend intentionally preserves ZEN's existing
secret-indexed `qinv` table lookup during key generation.  This is a
cache-timing caveat on targets with a data cache and was accepted explicitly
for this port.  Cortex-M4 test targets without a data cache do not eliminate
the need to document the issue for other deployments.  Key-generation
rejection loops are also variable length, as in the DAWN reference.

This static review does not replace hardware leakage testing.
