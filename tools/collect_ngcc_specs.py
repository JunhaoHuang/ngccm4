#!/usr/bin/env python3
"""Copy every submission's algorithm-specification PDF into docs/specs/ for the benchmark site.

For each NGCC submission folder the PDFs under Specification/ are classified by file name:
  * basic-information form   ("Basic information", "基本信息", "Appendix A", ...): not published
  * addenda                  ("Addition", "Appendix", "Note", "Clarification"): published as extras
  * the algorithm specification: exactly one must remain; it is published as docs/specs/<folder>.pdf
Overrides for odd packages live in SPEC_OVERRIDES. The mapping is written to tools/ngcc_specs.json,
which tools/make_site_data.py reads to link every row to its specification.

    python3 tools/collect_ngcc_specs.py [--ngcc-root NGCC] [--docs docs] [--check]
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path

BASIC_RE = re.compile(r"basic|基本信息|信息表|算法信息|appendix[ _]?a\b", re.I)
EXTRA_RE = re.compile(r"addition|appendix|(?<![a-z])note(?![a-z])|clarification", re.I)

# folder -> file name of the algorithm specification, when the heuristic cannot decide
SPEC_OVERRIDES: dict[str, str] = {}


def slug(text: str) -> str:
    text = re.sub(r"\.pdf$", "", text, flags=re.I)
    text = re.sub(r"[^A-Za-z0-9]+", "-", text).strip("-").lower()
    return text or "extra"


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def classify(folder: str, pdfs: list[Path]) -> tuple[Path, list[Path], list[Path]]:
    basic = [p for p in pdfs if BASIC_RE.search(p.name)]
    rest = [p for p in pdfs if p not in basic]
    if folder in SPEC_OVERRIDES:
        spec = next(p for p in pdfs if p.name == SPEC_OVERRIDES[folder])
        return spec, [p for p in rest if p != spec], basic
    extras = [p for p in rest if EXTRA_RE.search(p.name)]
    mains = [p for p in rest if p not in extras]
    if len(mains) != 1:
        raise SystemExit(f"{folder}: cannot pick the specification from {[p.name for p in pdfs]} (mains={[p.name for p in mains]}); add an override")
    return mains[0], extras, basic


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    repo = Path(__file__).resolve().parent.parent
    ap.add_argument("--ngcc-root", type=Path, default=repo / "NGCC")
    ap.add_argument("--docs", type=Path, default=repo / "docs")
    ap.add_argument("--check", action="store_true", help="verify docs/specs against the mirror without writing")
    args = ap.parse_args(argv)

    schemes = json.loads((args.ngcc_root / "schemes.json").read_text(encoding="utf-8"))["schemes"]
    out_dir = args.docs / "specs"
    out_dir.mkdir(parents=True, exist_ok=True)
    mapping: dict[str, dict] = {}
    copied = total = 0
    wanted: set[str] = set()
    for scheme in sorted(schemes, key=lambda s: s["folder"].lower()):
        folder = scheme["folder"]
        spec_dir = args.ngcc_root / "schemes" / folder / "Specification"
        pdfs = sorted(p for p in spec_dir.iterdir() if p.suffix.lower() == ".pdf") if spec_dir.is_dir() else []
        if not pdfs:
            print(f"warning: {folder}: no PDF under Specification/", file=sys.stderr)
            continue
        spec, extras, basic = classify(folder, pdfs)
        entry = {"title": scheme.get("title", folder), "spec": None, "extra": [], "basic_information": [p.name for p in basic]}
        for kind, src in [("spec", spec)] + [("extra", e) for e in extras]:
            asset = f"specs/{folder}.pdf" if kind == "spec" else f"specs/{folder}-{slug(src.name)}.pdf"
            dest = args.docs / asset
            wanted.add(dest.name)
            rec = {"file": src.name, "asset": asset, "bytes": src.stat().st_size, "sha256": sha256(src)}
            if args.check:
                if not dest.exists() or sha256(dest) != rec["sha256"]:
                    print(f"stale: {asset}"); copied += 1
            elif not dest.exists() or sha256(dest) != rec["sha256"]:
                shutil.copyfile(src, dest); copied += 1
            total += rec["bytes"]
            if kind == "spec":
                entry["spec"] = rec
            else:
                entry["extra"].append(rec)
        mapping[folder] = entry
    stray = sorted(p.name for p in out_dir.iterdir() if p.name not in wanted)
    if stray:
        print(f"warning: files in {out_dir} not produced by this script: {', '.join(stray)}", file=sys.stderr)
    text = json.dumps(mapping, indent=1, ensure_ascii=False) + "\n"
    map_path = repo / "tools" / "ngcc_specs.json"
    if args.check:
        if not map_path.exists() or map_path.read_text(encoding="utf-8") != text:
            print("stale: tools/ngcc_specs.json"); copied += 1
        print(f"{len(mapping)} submissions, {copied} stale items")
        return 1 if copied else 0
    map_path.write_text(text, encoding="utf-8")
    n_extra = sum(len(e["extra"]) for e in mapping.values())
    print(f"{len(mapping)} specifications + {n_extra} addenda -> {out_dir} ({total / 1e6:.1f} MB), {copied} files copied; wrote {map_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
