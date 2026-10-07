#!/usr/bin/env python3
"""Unpack submitter-provided Cortex-M4 implementations from the NGCC submission zips.

The NGCC mirror (tools/fetch.py in NGCC/) keeps only Reference_Implementation/,
Test_Vectors/, the specification PDFs and READMEs of each submission, so a
submitter's own Cortex-M4 port (usually under Implementations/Additional_Implementation
or Optimized_Implementation) is only available in the original zip. For every manifest
entry with an "m4" block this script extracts

    <zip>:<m4.zip_dir>/**  ->  NGCC/schemes/<folder>/M4_Implementation/**

skipping directories named in m4.zip_exclude (vendored libopencm3 trees, mupq
harnesses, ...). M4_ORIGIN.txt records the zip, its SHA-256 and the sub-directory.
Zips are read from NGCC/tmp/<zip_name> (download them with curl from the zip_url in
NGCC/schemes.json; tools/fetch.py --keep-zips also leaves them there).

    python3 tools/extract_ngcc_m4.py [--ngcc-root NGCC] [--only FOLDER ...] [--force] [--list]
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import sys
import zipfile
from pathlib import Path

M4_SUBDIR = "M4_Implementation"
DEFAULT_EXCLUDE = {"libopencm3", "mupq", ".git", "__pycache__", "elf", "bin", "obj", "benchmarks", "testvectors"}


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def member_name(info: zipfile.ZipInfo) -> str:
    """Zip entry name as the submitter wrote it: entries without the UTF-8 flag are decoded by
    zipfile as cp437, so recover the original bytes and try UTF-8, then GBK."""
    if info.flag_bits & 0x800:
        return info.filename
    raw = info.filename.encode("cp437", errors="replace")
    for enc in ("utf-8", "gbk"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return info.filename


def extract(zip_path: Path, zip_dir: str, exclude: set[str], dest: Path) -> tuple[int, int]:
    prefix = zip_dir.strip("/") + "/"
    dest_root = dest.resolve()
    files = skipped = 0
    with zipfile.ZipFile(zip_path) as z:
        members = [(m, member_name(m)) for m in z.infolist()]
        members = [(m, n) for m, n in members if n.startswith(prefix) and not n.endswith("/")]
        if not members:
            raise SystemExit(f"{zip_path.name}: no entries under {zip_dir!r}")
        for m, name in members:
            rel = name[len(prefix):]
            parts = rel.split("/")
            if any(p in exclude for p in parts[:-1]) or any(p in ("..", "") for p in parts):
                skipped += 1
                continue
            target = (dest / rel).resolve()
            if os.path.commonpath([str(target), str(dest_root)]) != str(dest_root):  # zip-slip guard
                skipped += 1
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            with z.open(m) as src, target.open("wb") as out:
                shutil.copyfileobj(src, out)
            files += 1
    return files, skipped


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--ngcc-root", default=None)
    ap.add_argument("--manifest", default=None)
    ap.add_argument("--only", nargs="*", default=None, help="scheme folders to extract")
    ap.add_argument("--force", action="store_true", help="re-extract even if M4_Implementation exists")
    ap.add_argument("--list", action="store_true")
    args = ap.parse_args(argv)

    repo = Path(__file__).resolve().parent.parent
    ngcc_root = Path(args.ngcc_root).resolve() if args.ngcc_root else repo / "NGCC"
    manifest = json.loads((Path(args.manifest) if args.manifest else repo / "tools" / "ngcc_manifest.json").read_text(encoding="utf-8"))
    schemes = {s["folder"]: s for s in json.loads((ngcc_root / "schemes.json").read_text(encoding="utf-8"))["schemes"]}

    failures = 0
    for folder, cfg in manifest.items():
        if folder.startswith("_") or not isinstance(cfg, dict) or "m4" not in cfg:
            continue
        if args.only and folder not in args.only:
            continue
        m4 = cfg["m4"]
        if m4.get("status") in ("skip", "unsupported"):
            print(f"skip {folder}: {m4.get('reason', '')}")
            continue
        scheme = schemes.get(folder)
        if scheme is None:
            print(f"FAIL {folder}: not in schemes.json"); failures += 1; continue
        zip_path = ngcc_root / "tmp" / scheme["zip_name"]
        dest = ngcc_root / "schemes" / folder / M4_SUBDIR
        if args.list:
            print(f"{folder:28s} {scheme['zip_name']:36s} {m4['zip_dir']} -> {dest.relative_to(ngcc_root)}")
            continue
        marker = dest / "M4_ORIGIN.txt"
        if marker.exists() and not args.force:
            print(f"keep {folder}: {dest.relative_to(ngcc_root)} already extracted (--force to redo)")
            continue
        if not zip_path.exists():
            print(f"FAIL {folder}: zip missing: {zip_path}  (download {scheme['zip_url']})"); failures += 1; continue
        if zip_path.stat().st_size != scheme["zip_size"]:
            print(f"FAIL {folder}: {zip_path.name} is {zip_path.stat().st_size} bytes, expected {scheme['zip_size']} (incomplete download)")
            failures += 1; continue
        digest = sha256(zip_path)
        if scheme.get("zip_sha256") and digest != scheme["zip_sha256"]:
            print(f"FAIL {folder}: {zip_path.name} sha256 {digest} != schemes.json {scheme['zip_sha256']}"); failures += 1; continue
        if dest.exists():
            shutil.rmtree(dest)
        exclude = set(DEFAULT_EXCLUDE) | set(m4.get("zip_exclude", []))
        files, skipped = extract(zip_path, m4["zip_dir"], exclude, dest)
        marker.write_text(
            f"zip_name={scheme['zip_name']}\nzip_sha256={digest}\nzip_dir={m4['zip_dir']}\n"
            f"zip_exclude={' '.join(sorted(exclude))}\nfiles={files}\nskipped={skipped}\n", encoding="utf-8")
        print(f"ok   {folder}: {files} files from {scheme['zip_name']}:{m4['zip_dir']} ({skipped} skipped)")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
