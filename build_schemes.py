#!/usr/bin/env python3
"""Build all implementations and apps for selected schemes.

Usage:
    python3 build_schemes.py
    python3 build_schemes.py all
    python3 build_schemes.py PLATFORM=mps2-an386 DKEM-128 DKEM-512
    python3 build_schemes.py PLATFORM=nucleo-l4r5zi DKEM-128 USE_SM3_ASM=1 -j8
    python3 build_schemes.py PLATFORM=stm32f4discovery DKEM-128 DKEM-512
    python3 build_schemes.py --skip scabbard512 --skip crypto_sign/%/ref   # on top of mk/skip.mk
    python3 build_schemes.py --no-skip Tins128                             # ignore the skip list

The script mirrors the implementation/app discovery used by mk/scheme.mk:
implementations are directories containing the family entry source, and apps
are top-level .c files inside each crypto_* family directory.
"""

from __future__ import annotations

import argparse
import os
import fnmatch
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path


FAMILIES = {
    "crypto_kem": "KEM_AlgorithmInstance.c",
    "crypto_kex": "KEX_AlgorithmInstance.c",
    "crypto_sign": "SIG_AlgorithmInstance.c",
}

SUPPORTED_TARGET_PLATFORMS = ("mps2-an386", "nucleo-l4r5zi", "stm32f4discovery")
DEFAULT_TARGET_PLATFORM = "nucleo-l4r5zi"


@dataclass(frozen=True)
class Implementation:
    family: str
    scheme: str
    name: str
    path: Path

    @property
    def stem(self) -> str:
        return f"{self.family}_{self.scheme}_{self.name}"

    @property
    def tier(self) -> str:
        """Expected platform tier: 'board' or 'qemu' (from ngcc_tier.txt; hand-ported schemes are 'board')."""
        tier_file = self.path / "ngcc_tier.txt"
        if tier_file.is_file():
            value = tier_file.read_text(encoding="utf-8").strip()
            if value:
                return value
        return "board"


FAMILY_ALIASES = {
    "kem": "crypto_kem", "crypto_kem": "crypto_kem",
    "kex": "crypto_kex", "crypto_kex": "crypto_kex",
    "sign": "crypto_sign", "sig": "crypto_sign", "crypto_sign": "crypto_sign",
}


def normalize_families(names: list[str] | None) -> set[str]:
    """Map user-given category names (kem, kex, sign, sig, crypto_*) to family directories.

    Each entry may hold several comma-separated names; an empty or missing list, or 'all',
    selects every family."""
    parts = [part for name in (names or []) for part in name.split(",")]
    if not parts or any(part.strip().lower() == "all" for part in parts):
        return set(FAMILIES)
    families: set[str] = set()
    for name in parts:
        key = name.strip().lower()
        if key not in FAMILY_ALIASES:
            raise SystemExit(
                f"unknown scheme category {name!r}; choose from "
                + ", ".join(sorted(set(FAMILY_ALIASES))) + ", all"
            )
        families.add(FAMILY_ALIASES[key])
    return families


def filter_by_family(implementations: list["Implementation"], families: set[str]) -> list["Implementation"]:
    return [impl for impl in implementations if impl.family in families]


def filter_by_tier(implementations: list["Implementation"], tier: str) -> list["Implementation"]:
    if tier == "all":
        return implementations
    return [impl for impl in implementations if impl.tier == tier]


# --------------------------------------------------------------------------- skip list
# Mirrors mk/scheme.mk: mk/skip.mk defines SKIP_SCHEMES (scheme names) and
# SKIP_IMPLS (family/scheme/impl paths, % wildcards); SKIP="..." adds tokens
# (a slash marks an implementation pattern); NOSKIP=1 disables everything.

DEFAULT_SKIP_FILE = "mk/skip.mk"
_SKIP_ASSIGN_RE = re.compile(r"^\s*(SKIP_SCHEMES|SKIP_IMPLS)\s*(\+=|:=|\?=|=)\s*(.*)$")


def load_skip_file(path: Path) -> tuple[list[str], list[str]]:
    """Parse the SKIP_SCHEMES / SKIP_IMPLS assignments of a makefile fragment (no make expansion)."""
    schemes: list[str] = []
    impls: list[str] = []
    if not path.is_file():
        return schemes, impls
    logical: list[str] = []
    pending = ""
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.split("#", 1)[0].rstrip()
        if line.endswith("\\"):
            pending += line[:-1] + " "
            continue
        logical.append(pending + line)
        pending = ""
    if pending:
        logical.append(pending)
    for line in logical:
        m = _SKIP_ASSIGN_RE.match(line)
        if not m:
            continue
        var, op, value = m.groups()
        target = schemes if var == "SKIP_SCHEMES" else impls
        if op in (":=", "=", "?="):
            target.clear()
        target.extend(value.split())
    return schemes, impls


def split_skip_tokens(tokens: list[str]) -> tuple[list[str], list[str]]:
    """SKIP="..." / --skip tokens: with a slash -> implementation pattern, otherwise a scheme name."""
    schemes: list[str] = []
    impls: list[str] = []
    for token in tokens:
        for item in re.split(r"[,\s]+", token.strip()):
            if not item:
                continue
            (impls if "/" in item else schemes).append(item)
    return schemes, impls


def _impl_pattern_matches(pattern: str, impl_path: str) -> bool:
    return fnmatch.fnmatchcase(impl_path, pattern.replace("%", "*"))


def filter_skipped(
    implementations: list["Implementation"], skip_schemes: list[str], skip_impls: list[str]
) -> tuple[list["Implementation"], list["Implementation"]]:
    kept: list[Implementation] = []
    skipped: list[Implementation] = []
    scheme_set = set(skip_schemes)
    for impl in implementations:
        path = f"{impl.family}/{impl.scheme}/{impl.name}"
        if impl.scheme in scheme_set or any(_impl_pattern_matches(p, path) for p in skip_impls):
            skipped.append(impl)
        else:
            kept.append(impl)
    return kept, skipped


def add_skip_arguments(parser: argparse.ArgumentParser) -> None:
    parser.add_argument(
        "--skip",
        action="append",
        metavar="NAME[,NAME...]",
        default=None,
        help="Additionally skip these scheme names or family/scheme/impl patterns (%% or * wildcards); repeatable. Same as make SKIP=...",
    )
    parser.add_argument("--no-skip", action="store_true", help="Ignore the skip list (mk/skip.mk and --skip). Same as make NOSKIP=1.")
    parser.add_argument("--skip-file", default=DEFAULT_SKIP_FILE, metavar="PATH", help="Makefile fragment with SKIP_SCHEMES / SKIP_IMPLS.")


def apply_skip_list(
    root: Path, implementations: list["Implementation"], args: argparse.Namespace, make_vars: list[str]
) -> tuple[list["Implementation"], list["Implementation"]]:
    """Drop skipped implementations and add the make variables that make the build system agree."""
    # SKIP=/NOSKIP=/SKIP_MK= given as make variables on the driver command line are honoured too.
    cli_skip = [v.split("=", 1)[1] for v in make_vars if v.startswith("SKIP=")]
    no_skip = args.no_skip or any(v == "NOSKIP=1" for v in make_vars)
    skip_file = next((v.split("=", 1)[1] for v in make_vars if v.startswith("SKIP_MK=")), args.skip_file)
    if no_skip:
        if "NOSKIP=1" not in make_vars:
            make_vars.append("NOSKIP=1")
        return implementations, []
    schemes, impls = load_skip_file(root / skip_file)
    extra_schemes, extra_impls = split_skip_tokens((args.skip or []) + cli_skip)
    if args.skip:
        extra = " ".join(extra_schemes + extra_impls)
        make_vars[:] = [v for v in make_vars if not v.startswith("SKIP=")] + [f"SKIP={extra}"]
    if skip_file != DEFAULT_SKIP_FILE and not any(v.startswith("SKIP_MK=") for v in make_vars):
        make_vars.append(f"SKIP_MK={skip_file}")
    return filter_skipped(implementations, schemes + extra_schemes, impls + extra_impls)


def report_skipped(skipped: list["Implementation"]) -> None:
    if skipped:
        print(f"Skipped by the skip list: {len(skipped)} implementation(s) ({', '.join(impl.stem for impl in skipped[:8])}{' ...' if len(skipped) > 8 else ''})")


def parse_supported_platforms(root: Path) -> set[str]:
    config = root / "mk" / "config.mk"
    platforms: set[str] = set()

    if not config.exists():
        return platforms

    for line in config.read_text(encoding="utf-8").splitlines():
        line = line.split("#", 1)[0].strip()
        if line.startswith("SUPPORTED_PLATFORMS"):
            _, _, value = line.partition(":=")
            platforms.update(value.split())
            break

    return platforms


def family_apps(root: Path, family: str) -> list[str]:
    family_dir = root / family
    if not family_dir.is_dir():
        return []

    return sorted(source.stem for source in family_dir.glob("*.c"))


def discover_implementations(root: Path, requested_schemes: set[str]) -> list[Implementation]:
    implementations: list[Implementation] = []

    for family, entry_file in FAMILIES.items():
        family_dir = root / family
        if not family_dir.is_dir():
            continue

        for scheme_dir in sorted(path for path in family_dir.iterdir() if path.is_dir()):
            if requested_schemes and scheme_dir.name not in requested_schemes:
                continue

            for impl_dir in sorted(path for path in scheme_dir.iterdir() if path.is_dir()):
                if (impl_dir / entry_file).is_file():
                    implementations.append(
                        Implementation(
                            family=family,
                            scheme=scheme_dir.name,
                            name=impl_dir.name,
                            path=impl_dir,
                        )
                    )

    return implementations


def parse_args(argv: list[str]) -> tuple[argparse.Namespace, str, list[str], list[str]]:
    parser = argparse.ArgumentParser(
        description="Build all existing implementations and family apps for selected schemes.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument(
        "schemes",
        nargs="*",
        help="Scheme names to build, for example DKEM-128 DKEM-256. Use 'all' or omit schemes to build all discovered schemes.",
    )
    parser.add_argument(
        "-j",
        "--jobs",
        default=None,
        help="Forwarded make parallelism, for example -j8.",
    )
    parser.add_argument(
        "-n",
        "--dry-run",
        action="store_true",
        help="Print the discovered build commands without running make.",
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="Only list discovered implementations and apps.",
    )
    parser.add_argument(
        "--fail-fast",
        action="store_true",
        help="Stop after the first failed make command.",
    )
    parser.add_argument(
        "--tier",
        choices=("board", "qemu", "all"),
        default="all",
        help="Only build implementations of this tier (ngcc_tier.txt; hand-ported schemes are 'board').",
    )
    parser.add_argument(
        "--family",
        "--category",
        dest="families",
        action="append",
        metavar="FAMILY[,FAMILY...]",
        default=None,
        help="Only build these scheme categories, comma-separated or repeated: kem, kex, sign (aliases: sig, crypto_kem, crypto_kex, crypto_sign, all).",
    )
    add_skip_arguments(parser)

    platform = ""
    make_vars: list[str] = []
    parser_args: list[str] = []

    for arg in argv:
        if "=" in arg and not arg.startswith("-"):
            key, value = arg.split("=", 1)
            if not key or not value:
                raise SystemExit(f"invalid make variable argument: {arg!r}")
            if key == "PLATFORM":
                platform = value
            else:
                make_vars.append(arg)
        else:
            parser_args.append(arg)

    args = parser.parse_args(parser_args)

    if not platform:
        platform = os.environ.get("PLATFORM", DEFAULT_TARGET_PLATFORM)

    return args, platform, make_vars, args.schemes


def normalize_requested_schemes(schemes: list[str]) -> set[str]:
    if not schemes or any(scheme.lower() == "all" for scheme in schemes):
        return set()
    return set(schemes)


def build_command(
    platform: str,
    impl: Implementation,
    apps: list[str],
    make_vars: list[str],
    jobs: str | None,
) -> list[str]:
    targets = [f"{impl.stem}_{app}" for app in apps]
    command = ["make", f"PLATFORM={platform}", *make_vars, *targets]

    if jobs:
        command.append(jobs if jobs.startswith("-j") else f"-j{jobs}")

    return command


def main(argv: list[str]) -> int:
    root = Path(__file__).resolve().parent
    args, platform, make_vars, schemes = parse_args(argv)

    supported_platforms = set(SUPPORTED_TARGET_PLATFORMS)
    if platform not in supported_platforms:
        print(
            f"error: unsupported PLATFORM={platform!r}; supported: "
            f"{' '.join(SUPPORTED_TARGET_PLATFORMS)}",
            file=sys.stderr,
        )
        return 2

    requested_schemes = normalize_requested_schemes(schemes)
    families = normalize_families(args.families)
    implementations = filter_by_tier(discover_implementations(root, requested_schemes), args.tier)
    implementations = filter_by_family(implementations, families)
    implementations, skipped = apply_skip_list(root, implementations, args, make_vars)
    report_skipped(skipped)
    discovered_schemes = {impl.scheme for impl in implementations} | {impl.scheme for impl in skipped}
    missing_schemes = sorted(requested_schemes - discovered_schemes)

    if missing_schemes:
        print(
            "warning: no implementations found for scheme(s): "
            + ", ".join(missing_schemes),
            file=sys.stderr,
        )

    if not implementations:
        print("error: no matching implementations found", file=sys.stderr)
        return 1

    print(f"PLATFORM={platform}")
    print(f"Selected implementations: {len(implementations)}")

    failures: list[tuple[Implementation, int]] = []

    for impl in implementations:
        apps = family_apps(root, impl.family)
        if not apps:
            print(f"skip: {impl.family}/{impl.scheme}/{impl.name}: no family apps found")
            continue

        command = build_command(platform, impl, apps, make_vars, args.jobs)
        print(f"\n==> {impl.family}/{impl.scheme}/{impl.name}")
        print("apps: " + " ".join(apps))
        print("+ " + " ".join(command))

        if args.list or args.dry_run:
            continue

        result = subprocess.run(command, cwd=root)
        if result.returncode != 0:
            failures.append((impl, result.returncode))
            if args.fail_fast:
                break

    if args.list or args.dry_run:
        return 0

    if failures:
        print("\nFailed builds:", file=sys.stderr)
        for impl, code in failures:
            print(f"  {impl.family}/{impl.scheme}/{impl.name}: exit {code}", file=sys.stderr)
        return 1

    print("\nAll requested builds completed successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
