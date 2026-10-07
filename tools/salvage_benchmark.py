#!/usr/bin/env python3
"""Rebuild a benchmark_schemes.py summary from the raw logs of an interrupted run.

benchmark_schemes.py writes its CSV/Markdown only when it finishes, but every target's board
output is in --raw-dir as soon as it completes. Given the run's driver log (the "==> target run"
lines say which targets were attempted), this script parses those raw files like the driver
does, measures the code size of the speed ELFs that are still in elf/, and writes
<out>.csv / <out>.md in the driver's format, plus <out>.log (the attempted-target list) for
tools/merge_benchmark.py.

    python3 tools/salvage_benchmark.py --log Out/benchmark_sign_iter10a.log --out Out/benchmark_speed_sign_iter10a
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import benchmark_schemes as bs  # noqa: E402
import build_schemes  # noqa: E402

TARGET_LINE = re.compile(r"^==> (crypto_\S+?_(?:speed|stack|hashing|test|testvectors)) run \d+/\d+")


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--log", required=True, type=Path, help="driver log of the interrupted run")
    ap.add_argument("--out", required=True, help="output prefix")
    ap.add_argument("--raw-dir", default="Out/benchmark_raw")
    ap.add_argument("--platform", default="nucleo-l4r5zi")
    args = ap.parse_args(argv)

    targets: list[str] = []
    for line in args.log.read_text(encoding="utf-8", errors="replace").splitlines():
        m = TARGET_LINE.match(line)
        if m and m.group(1) not in targets:
            targets.append(m.group(1))
    impls = {f"{i.family}_{i.scheme}_{i.name}": i for i in build_schemes.discover_implementations(ROOT, set())}
    raw_dir = ROOT / args.raw_dir
    meas: dict[tuple, list[int]] = {}
    statuses: dict[str, str] = {}
    attempted: list[str] = []
    for target in targets:
        m = re.match(r"^(crypto_(?:kem|kex|sign)_.+_(?:ref|m4))_([a-z]+)$", target)
        stem, app = m.groups()
        raw = raw_dir / f"{target}.run1.txt"
        if not raw.is_file() or raw.stat().st_mtime < args.log.stat().st_mtime - 7 * 86400:
            continue  # build failure (no raw file) or stale file from an older run
        if raw.stat().st_mtime < args.log.stat().st_mtime - 86400 * 2:
            continue
        attempted.append(target)
        out = raw.read_text(encoding="utf-8", errors="replace")
        if "HardFault_Handler" in out:
            statuses[target] = "run-failed"
        elif bs.DONE_MARKER not in out or "timed out waiting" in out:
            statuses[target] = "timeout"
        else:
            statuses[target] = "ok"
        impl = impls[stem]
        for metric, values in bs.parse_metrics(out).items():
            meas.setdefault((args.platform, impl.family, impl.scheme, impl.name, app, metric), []).extend(values)
    # the log lists build failures too (targets without a raw file): keep them as attempted for the merge
    sizes = []
    for stem in sorted({t.rsplit("_", 1)[0] for t in attempted}):
        if (ROOT / "elf" / f"{stem}_speed.elf").is_file():
            size, _ = bs.collect_code_size(root=ROOT, platform=args.platform, impl=impls[stem], make_vars=[], jobs=None,
                                            timeout=60, no_build=True, dry_run=False, built_targets=set())
            if size:
                sizes.append(size)
    measurements = [bs.Measurement(*k, samples=tuple(v)) for k, v in sorted(meas.items())]
    out = Path(args.out)
    bs.write_csv(out.with_suffix(".csv"), measurements)
    bs.write_markdown(out.with_suffix(".md"), measurements, sizes, statuses)
    out.with_suffix(".log").write_text("".join(f"==> {t} run 1/1\n" for t in targets), encoding="utf-8")
    kinds = {k: sum(1 for v in statuses.values() if v == k) for k in ("ok", "timeout", "run-failed")}
    print(f"{len(targets)} targets in the log, {len(attempted)} with raw output: {kinds}; "
          f"{len(measurements)} measurements, {len(sizes)} code sizes -> {out}.csv/.md/.log")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
