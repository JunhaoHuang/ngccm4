#!/usr/bin/env python3
"""Check imported NGCC schemes against the official NGCC test vectors on QEMU.

For every selected implementation the `testvectors` app is built for
PLATFORM=mps2-an386 with NGCC_ITERATIONS=10 (the ICCS KAT files hold ten
counts), run under QEMU, and its hex-line output is compared with
NGCC/schemes/<folder>/Test_Vectors/KAT_<TYPE>_<instance>.txt (the file
recorded in the implementation's NGCC_ORIGIN.txt, or found by name).

Examples:
    python3 kat_check.py                       # every implementation with a KAT file
    python3 kat_check.py Cheetah128 BiT-128    # selected schemes
    python3 kat_check.py --tier board -j8
    python3 kat_check.py --ngcc-root NGCC --md Out/kat_summary.md

The testvectors drivers print, per count, one lowercase hex line per field:
    KEM: seed pk sk ct ss ss'         SIG: seed pk sk "M_Len = n" m sn
    KEX: seed "Pass_Num = n" pka ska sta pkb skb stb {state msg}* ssa ssb
Every field that exists in both the KAT file and the driver output is
compared (case-insensitively).
"""

from __future__ import annotations

import argparse
import os
import signal
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path

import build_schemes

DONE_MARKER = "#"
KAT_COUNTS = 10
CATEGORY_OF_FAMILY = {"crypto_kem": "KEM", "crypto_kex": "KEX", "crypto_sign": "SIG"}


@dataclass
class Result:
    impl: build_schemes.Implementation
    status: str
    detail: str = ""
    mismatches: list[str] = field(default_factory=list)


def read_origin(impl: build_schemes.Implementation) -> dict[str, str]:
    origin = impl.path / "NGCC_ORIGIN.txt"
    if not origin.is_file():
        return {}
    out: dict[str, str] = {}
    for line in origin.read_text(encoding="utf-8").splitlines():
        key, _, value = line.partition("=")
        out[key.strip()] = value.strip()
    return out


def find_kat_file(ngcc_root: Path, impl: build_schemes.Implementation, origin: dict[str, str]) -> Path | None:
    category = CATEGORY_OF_FAMILY[impl.family]
    folder = origin.get("ngcc_scheme")
    if folder and origin.get("kat_file"):
        candidate = ngcc_root / "schemes" / folder / origin["kat_file"]
        if candidate.is_file():
            return candidate
    names = {impl.scheme, origin.get("ngcc_instance", ""), impl.scheme.replace("-", "_"), impl.scheme.replace("_", "-")}
    names.discard("")
    search_roots = [ngcc_root / "schemes" / folder / "Test_Vectors"] if folder else list((ngcc_root / "schemes").glob("*/Test_Vectors"))
    for root in search_roots:
        if not root.is_dir():
            continue
        for path in root.rglob("KAT_*.txt"):
            stem = path.name[:-4]
            for name in names:
                if stem.lower() == f"KAT_{category}_{name}".lower():
                    return path
    return None


def parse_kat_file(path: Path) -> list[dict[str, str]]:
    counts: list[dict[str, str]] = []
    current: dict[str, str] | None = None
    for raw in path.read_text(encoding="utf-8", errors="replace").splitlines():
        line = raw.strip()
        if not line:
            continue
        key, sep, value = line.partition("=")
        if not sep:
            continue
        key = key.strip()
        value = value.strip()
        if key == "Count":
            current = {}
            counts.append(current)
            continue
        if current is None:
            continue
        current[key] = value
    return counts


def parse_driver_output(output: str, category: str) -> list[dict[str, str]]:
    """Split the driver's hex-line stream into per-count field dictionaries."""
    lines = [line.strip() for line in output.replace("\r", "\n").splitlines()]
    try:
        start = lines.index("==========================") + 1
    except ValueError:
        return []
    counts: list[dict[str, str]] = []
    block: list[str] = []
    for line in lines[start:]:
        if line == DONE_MARKER:
            break
        if line == "+":
            counts.append(fields_from_block(block, category))
            block = []
            continue
        # empty lines are zero-length fields (e.g. an empty KEX state), keep them
        block.append(line)
    return counts


HEX_RE = re.compile(r"^[0-9a-fA-F]*$")


def fields_from_block(block: list[str], category: str) -> dict[str, str]:
    out: dict[str, str] = {}
    # send_unsignedll() prints "<label> = " and the decimal value on separate
    # lines; pair them up before treating the remaining lines as hex fields.
    scalars: dict[str, str] = {}
    hex_lines: list[str] = []
    pending_label: str | None = None
    for line in block:
        if pending_label is not None:
            scalars[pending_label] = line.strip()
            pending_label = None
            continue
        if line.rstrip().endswith("="):
            pending_label = line.rstrip(" =").strip()
            continue
        if "=" in line:
            k, _, v = line.partition("=")
            scalars[k.strip()] = v.strip()
            continue
        if HEX_RE.match(line):
            hex_lines.append(line)
    # drop a trailing empty line produced by the "+" separator handling
    while hex_lines and hex_lines[-1] == "" and len(hex_lines) > 1 and False:
        hex_lines.pop()
    errors = [line for line in block if line.startswith("ERROR") or line.endswith("failed") or "HardFault" in line]
    if errors:
        out["_errors"] = "; ".join(errors)
    if category == "KEM":
        names = ["Seed", "PK", "SK", "CT", "SS", "SS2"]
    elif category == "SIG":
        names = ["Seed", "PK", "SK", "M", "Sn"]
        if "M_Len" in scalars:
            out["M_Len"] = scalars["M_Len"]
    else:
        passes = int(scalars.get("Pass_Num", "0") or 0)
        names = ["Seed", "PKa", "SKa", "Init_Sta", "PKb", "SKb", "Init_Stb"]
        for p in range(1, passes + 1):
            names.append(f"Pass{p}_{'Sta' if p % 2 else 'Stb'}")
            names.append(f"M{p}")
        names += ["SSa", "SSb"]
        out["Pass_Num"] = str(passes)
    for name, value in zip(names, hex_lines):
        out[name] = value
    return out


def compare(expected: list[dict[str, str]], actual: list[dict[str, str]], category: str) -> list[str]:
    problems: list[str] = []
    if len(actual) < len(expected):
        problems.append(f"only {len(actual)}/{len(expected)} counts produced")
    for index, (exp, act) in enumerate(zip(expected, actual)):
        if "_errors" in act:
            problems.append(f"count {index}: {act['_errors']}")
        for key, value in exp.items():
            if key.endswith("_Len") and key not in ("M_Len",):
                continue
            ours = act.get(key)
            if ours is None:
                if key == "SS" and category == "KEX":
                    ours = act.get("SSa")
                elif key in ("SSa", "SSb") and category == "KEX" and "SS" in exp:
                    continue
            if ours is None:
                continue
            if ours.lower() != value.lower():
                problems.append(f"count {index}: {key} differs")
    return problems


def run_target(root: Path, platform: str, target: str, make_vars: list[str], jobs: str | None, timeout: float,
               log_path: Path) -> tuple[int, str]:
    """Build and run one target, sending the build+QEMU output straight to log_path.

    The output must not go through a pipe: QEMU writes its semihosting console
    without blocking, and a hex line longer than the 64 KiB pipe buffer loses
    its tail (and the following newline) whenever the reader has not drained
    the pipe in time. Writing to a file is always complete.
    """
    command = ["make", f"PLATFORM={platform}", f"NGCC_ITERATIONS={KAT_COUNTS}", *make_vars, target, "qemu-run"]
    if jobs:
        command.append(jobs if jobs.startswith("-j") else f"-j{jobs}")
    log_path.parent.mkdir(parents=True, exist_ok=True)
    log_path.write_bytes(b"")
    with log_path.open("ab") as log:
        # Own session/process group so that a timeout also kills the QEMU
        # grandchild (subprocess.run's timeout only kills make and leaves
        # qemu-system-arm running at 100% CPU).
        proc = subprocess.Popen(command, cwd=root, stdout=log, stderr=subprocess.STDOUT, start_new_session=True)
        try:
            code = proc.wait(timeout=timeout)
        except subprocess.TimeoutExpired:
            os.killpg(proc.pid, signal.SIGKILL)
            proc.wait()
            log.write(b"\n[timeout]\n")
            code = 124
    return code, log_path.read_text(encoding="utf-8", errors="replace")


def write_summary(path: Path, results: list[Result]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    lines = ["# NGCC KAT check (QEMU mps2-an386)", "", "| family | scheme | impl | status | detail |", "| --- | --- | --- | --- | --- |"]
    for r in results:
        detail = r.detail
        if r.mismatches:
            detail = "; ".join(r.mismatches[:4]) + (" ..." if len(r.mismatches) > 4 else "")
        lines.append(f"| {r.impl.family} | {r.impl.scheme} | {r.impl.name} | {r.status} | {detail} |")
    counts: dict[str, int] = {}
    for r in results:
        counts[r.status] = counts.get(r.status, 0) + 1
    lines.append("")
    lines.append("summary: " + ", ".join(f"{k}={v}" for k, v in sorted(counts.items())))
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("schemes", nargs="*", help="Scheme names to check (default: all with a KAT file).")
    parser.add_argument("--ngcc-root", default=None, help="NGCC mirror root (default: NGCC/ inside this repo).")
    parser.add_argument("--tier", choices=("board", "qemu", "all"), default="all")
    parser.add_argument("-j", "--jobs", default="4", help="Forwarded make parallelism.")
    parser.add_argument("--timeout", type=float, default=3600.0, help="Seconds per build+run.")
    parser.add_argument("--md", default="Out/kat_summary.md", help="Markdown summary path.")
    parser.add_argument("--raw-dir", default="Out/kat_raw", help="Directory for raw driver output.")
    parser.add_argument("--fail-fast", action="store_true")
    parser.add_argument("--list", action="store_true", help="Only list implementations and their KAT files.")
    parser.add_argument("--resume", action="store_true",
                        help="Reuse an existing raw output in --raw-dir when it already matches the KAT file.")
    build_schemes.add_skip_arguments(parser)
    args, make_vars = split_make_vars(argv)
    args = parser.parse_args(args)

    root = Path(__file__).resolve().parent
    ngcc_root = Path(args.ngcc_root).resolve() if args.ngcc_root else root / "NGCC"
    platform = "mps2-an386"

    requested = build_schemes.normalize_requested_schemes(args.schemes)
    implementations = build_schemes.filter_by_tier(build_schemes.discover_implementations(root, requested), args.tier)
    implementations, skipped = build_schemes.apply_skip_list(root, implementations, args, make_vars)
    build_schemes.report_skipped(skipped)
    results: list[Result] = []
    raw_dir = root / args.raw_dir

    for impl in implementations:
        origin = read_origin(impl)
        kat = find_kat_file(ngcc_root, impl, origin)
        if kat is None:
            if requested:
                results.append(Result(impl, "no-kat", "no NGCC test vector file found"))
            continue
        if args.list:
            print(f"{impl.stem:50s} {kat.relative_to(ngcc_root)}")
            continue
        target = f"{impl.stem}_testvectors"
        print(f"\n==> {target} vs {kat.relative_to(ngcc_root)}")
        category = CATEGORY_OF_FAMILY[impl.family]
        raw_path = raw_dir / f"{target}.txt"
        if args.resume and raw_path.is_file():
            previous = raw_path.read_text(encoding="utf-8", errors="replace")
            actual = parse_driver_output(previous, category)
            if actual and not compare(parse_kat_file(kat), actual, category):
                results.append(Result(impl, "match", f"{len(actual)} counts (resumed)"))
                print(f"    {results[-1].status} {results[-1].detail}")
                continue
        code, output = run_target(root, platform, target, make_vars, args.jobs, args.timeout, raw_path)
        if code == 124:
            results.append(Result(impl, "timeout"))
        elif code != 0 and "==========================" not in output:
            results.append(Result(impl, "build-failed", last_error_line(output)))
        else:
            actual = parse_driver_output(output, category)
            expected = parse_kat_file(kat)
            problems = compare(expected, actual, category)
            if not actual:
                results.append(Result(impl, "run-failed", last_error_line(output)))
            elif problems:
                results.append(Result(impl, "mismatch", mismatches=problems))
            else:
                results.append(Result(impl, "match", f"{len(actual)} counts"))
        print(f"    {results[-1].status} {results[-1].detail} {'; '.join(results[-1].mismatches[:3])}")
        if args.fail_fast and results[-1].status not in ("match",):
            break

    if args.list:
        return 0
    write_summary(root / args.md, results)
    print(f"\nWrote {root / args.md}")
    bad = [r for r in results if r.status != "match"]
    return 1 if bad else 0


def last_error_line(output: str) -> str:
    for line in reversed(output.splitlines()):
        stripped = line.strip()
        # skip compiler source-context lines such as " 504 |   fprintf(stderr, ...)"
        if re.match(r"^\d+\s*\|", stripped) or stripped.startswith("|"):
            continue
        if "error" in stripped.lower() or "failed" in stripped.lower() or "overflow" in stripped.lower() or "HardFault" in stripped:
            return stripped[:160]
    return ""


def split_make_vars(argv: list[str]) -> tuple[list[str], list[str]]:
    make_vars: list[str] = []
    rest: list[str] = []
    for arg in argv:
        if "=" in arg and not arg.startswith("-"):
            make_vars.append(arg)
        else:
            rest.append(arg)
    return rest, make_vars


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
