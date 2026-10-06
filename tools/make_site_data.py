#!/usr/bin/env python3
"""Generate the data files for the ngccm4 benchmark website (docs/).

Inputs (all read-only):
  Out/benchmark_speed_<platform>.csv   cycle counts (speed app)
  Out/benchmark_speed_<platform>.md    measurement conditions, hand-written target
                                        status table, code-size tables
  Out/benchmark_sizes/<target>.txt      arm-none-eabi-size output (code-size fallback)
  Out/benchmark_raw/<target>_stack.run1.txt   stack usage per operation
  Out/kat_summary.md                    KAT check results (QEMU)
  Out/kat_raw/<target>_testvectors.txt  device hex dumps (key-size fallback)
  tools/ngcc_manifest.json              import rules, unsupported schemes + reasons
  ../NGCC/schemes.json, schemes/*/Test_Vectors/KAT_*.txt, results/*/*.json
                                        NGCC candidate list, official KAT files
                                        (key sizes), host-side observed sizes

Outputs:
  docs/data/benchmark.json
  docs/data/data.js        (window.NGCCM4_DATA = {...}; lets docs/index.html work from file://)

Usage:
  python3 tools/make_site_data.py [--ngcc-root ../NGCC] [--platform nucleo-l4r5zi] [--strict]
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
import re
import subprocess
import sys
from collections import Counter, OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

import benchmark_schemes  # noqa: E402
import build_schemes  # noqa: E402
import kat_check  # noqa: E402

CATEGORY_OF_FAMILY = kat_check.CATEGORY_OF_FAMILY
CATEGORY_KEY = {"KEM": "kem", "KEX": "kex", "SIG": "sig"}
FAMILY_OF_CATEGORY = {v: k for k, v in CATEGORY_OF_FAMILY.items()}

FAMILY_OPS = {
    "crypto_kem": ["keypair", "encaps", "decaps"],
    "crypto_sign": ["keypair", "sign", "verify"],
    "crypto_kex": ["init_a", "init_b", "pass1", "pass2", "pass3", "pass4", "pass5", "derive_a", "derive_b"],
}
assert all(op in benchmark_schemes.OPERATIONS for ops in FAMILY_OPS.values() for op in ops)

SIZE_FIELDS = {
    "kem": ["pk", "sk", "ct", "ss"],
    "sig": ["pk", "sk", "sig_max", "sig_min", "msg"],
    "kex": ["pk_a", "sk_a", "pk_b", "sk_b", "msg_total", "ss", "passes"],
}

# Hand-ported directories (no NGCC_ORIGIN.txt): dir prefix -> (NGCC folder, instance name pattern)
HAND_PORTED = {
    "ZEN": ("ZEN", "ZEN_{n}"),
    "DKE": ("DKEM", "DKEM-{n}"),
    "DKEX": ("DKEX", "DKEX-{n}"),
    "ADKEX": ("ADKEX", "ADKEX-{n}"),
}

BOARD = "STM32L4R5ZI (Nucleo-L4R5ZI, Cortex-M4, 640 KB SRAM, 2 MB flash)"


# --------------------------------------------------------------------------- helpers

def to_int(text: str) -> int:
    return int(text.replace(",", "").strip())


def norm(text: str) -> str:
    return re.sub(r"[^a-z0-9]", "", text.lower())


def git_rev() -> str | None:
    try:
        out = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=ROOT, capture_output=True, text=True, check=True)
        return out.stdout.strip() or None
    except Exception:
        return None


def warn(msg: str) -> None:
    print(f"warning: {msg}", file=sys.stderr)


# --------------------------------------------------------------------------- inputs

def load_schemes_json(ngcc_root: Path) -> dict:
    data = json.loads((ngcc_root / "schemes.json").read_text(encoding="utf-8"))
    by_folder = {s["folder"]: s for s in data["schemes"]}
    return {"source": data.get("source"), "schemes": data["schemes"], "by_folder": by_folder}


def load_manifest() -> dict:
    data = json.loads((ROOT / "tools" / "ngcc_manifest.json").read_text(encoding="utf-8"))
    return {k: v for k, v in data.items() if k != "_comment"}


def load_rows(schemes: dict) -> "OrderedDict[str, dict]":
    rows: OrderedDict[str, dict] = OrderedDict()
    for impl in build_schemes.discover_implementations(ROOT, set()):
        origin = kat_check.read_origin(impl)
        folder = origin.get("ngcc_scheme")
        instance = origin.get("ngcc_instance")
        if not folder:
            prefix, _, n = impl.scheme.partition("-")
            if prefix in HAND_PORTED and n:
                folder, pattern = HAND_PORTED[prefix]
                instance = pattern.format(n=n)
        if not folder or folder not in schemes["by_folder"]:
            raise SystemExit(f"{impl.stem}: cannot map to an NGCC scheme (folder={folder!r})")
        scheme_json = schemes["by_folder"][folder]
        inst_json = next((i for i in scheme_json["instances"] if i["name"] == instance), None)
        if inst_json is None:
            raise SystemExit(f"{impl.stem}: NGCC instance {instance!r} not in schemes.json folder {folder}")
        category = CATEGORY_OF_FAMILY[impl.family]
        rows[impl.stem] = {
            "id": impl.stem,
            "family": impl.family,
            "category": CATEGORY_KEY[category],
            "scheme": impl.scheme,
            "impl": impl.name,
            "tier": impl.tier,
            "hand_ported": not bool(origin),
            "ngcc": {
                "folder": folder,
                "instance": instance,
                "title": scheme_json.get("title", folder),
                "pub_date": scheme_json.get("pub_date"),
            },
            "_impl": impl,
            "_origin": origin,
            "cycles": {},
            "notes": [],
        }
    return rows


def parse_speed_csv(path: Path, platform: str) -> dict[str, dict[str, dict]]:
    out: dict[str, dict[str, dict]] = {}
    with path.open(newline="", encoding="utf-8") as fh:
        for rec in csv.DictReader(fh):
            if rec["platform"] != platform:
                raise SystemExit(f"{path}: unexpected platform {rec['platform']}")
            if rec["app"] != "speed" or not rec["metric"].endswith("_cycles"):
                continue
            stem = f"{rec['family']}_{rec['scheme']}_{rec['implementation']}"
            op = rec["metric"][: -len("_cycles")]
            out.setdefault(stem, {})[op] = {
                "avg": to_int(rec["average"]),
                "median": to_int(rec["median"]),
                "min": to_int(rec["min"]),
                "max": to_int(rec["max"]),
                "count": to_int(rec["count"]),
            }
    return out


STATUS_RE = re.compile(r"^\| (crypto_(?:kem|kex|sign))_(.+)_(ref|m4)_speed \| (.*) \|$")
CODE_RE = re.compile(r"^\| ([^|]+) \| (ref|m4) \| ([\d,]+) \| ([\d,]+) \| ([\d,]+) \| ([\d,]+) \|$")


def parse_md(path: Path) -> tuple[list[str], dict[str, str], dict[str, dict]]:
    conditions: list[str] = []
    status: dict[str, str] = {}
    code: dict[str, dict] = {}
    family = None
    in_code = False
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            continue
        if line.startswith("## target status"):
            family = "status"
            continue
        if line.startswith("## "):
            family = line[3:].strip()
            in_code = False
            continue
        if family is None:
            text = line.strip()
            if text:
                # the report wraps sentences over several lines: glue a line onto the
                # previous one unless that one ended a sentence
                if conditions and not conditions[-1].endswith("."):
                    conditions[-1] += " " + text
                else:
                    conditions.append(text)
            continue
        if family == "status":
            m = STATUS_RE.match(line)
            if m:
                status[f"{m.group(1)}_{m.group(2)}_{m.group(3)}"] = m.group(4).strip()
            continue
        if line.startswith("**"):
            in_code = line.startswith("**code size")
            continue
        if in_code:
            m = CODE_RE.match(line)
            if m:
                stem = f"{family}_{m.group(1).strip()}_{m.group(2)}"
                code[stem] = {
                    "text": to_int(m.group(3)),
                    "data": to_int(m.group(4)),
                    "bss": to_int(m.group(5)),
                    "total": to_int(m.group(6)),
                    "source": "report",
                }
    return conditions, status, code


def code_from_size_files(size_dir: Path, rows: dict) -> dict[str, dict]:
    out: dict[str, dict] = {}
    if not size_dir.is_dir():
        return out
    for path in sorted(size_dir.glob("*_speed.txt")):
        stem = path.name[: -len("_speed.txt")]
        if stem not in rows:
            continue
        try:
            sections = benchmark_schemes.parse_code_size(path.read_text(encoding="utf-8", errors="replace"))
        except ValueError:
            continue
        out[stem] = {
            "text": sections[".text"],
            "data": sections[".data"],
            "bss": sections[".bss"],
            "total": sections[".text"] + sections[".data"] + sections[".bss"],
            "source": "size-file",
        }
    return out


def parse_stack(raw_dir: Path, rows: dict) -> tuple[dict[str, dict[str, int]], int]:
    out: dict[str, dict[str, int]] = {}
    skipped = 0
    if not raw_dir.is_dir():
        return out, skipped
    for path in sorted(raw_dir.glob("*_stack.run*.txt")):
        stem = path.name.split("_stack.run")[0]
        if stem not in rows:
            skipped += 1
            continue
        metrics = benchmark_schemes.parse_metrics(path.read_text(encoding="utf-8", errors="replace"))
        for name, values in metrics.items():
            if name.endswith("_stack_bytes"):
                op = name[: -len("_stack_bytes")]
                out.setdefault(stem, {})[op] = max(values)
    return out, skipped


KAT_ROW_RE = re.compile(r"^\| (crypto_\w+) \| ([^|]+) \| (ref|m4) \| ([^|]+) \| (.*) \|$")


def parse_kat_summary(path: Path) -> tuple[dict[str, dict], list[str]]:
    results: dict[str, dict] = {}
    notes: list[str] = []
    in_notes = False
    if not path.is_file():
        return results, notes
    for line in path.read_text(encoding="utf-8").splitlines():
        m = KAT_ROW_RE.match(line)
        if m:
            stem = f"{m.group(1)}_{m.group(2).strip()}_{m.group(3)}"
            results[stem] = {"status": m.group(4).strip(), "detail": m.group(5).strip()}
            continue
        if line.startswith("Remaining non-matches"):
            in_notes = True
            continue
        if in_notes and line.startswith("- "):
            notes.append(line[2:].strip())
    return results, notes


# --------------------------------------------------------------------------- status classification

FAILURE_KINDS = [
    ("link failed", "link-overflow"),
    ("hardfault", "hardfault"),
    ("timeout", "timeout"),
    ("needed more than 4 mib", "ram-qemu-evidence"),
    ("hangs", "hangs"),
    ("too slow", "too-slow"),
    ("partial", "partial"),
]


def classify_status(text: str) -> str:
    low = text.lower()
    for needle, kind in FAILURE_KINDS:
        if needle in low:
            return kind
    return "other"


def completed_ops_from_status(text: str) -> list[str]:
    m = re.search(r"completed ([a-z_/, ]+?)(?:;|$|\))", text)
    if m:
        ops = re.split(r"[/, ]+", m.group(1).strip())
        return [op for op in ops if op and op != "none"]
    m = re.search(r"^partial: ([a-z_/]+) measured", text)
    if m:
        return [op for op in m.group(1).split("/") if op]
    return []


# --------------------------------------------------------------------------- key sizes

LOWER_KEYS = {"pklen": "PK_Len", "sklen": "SK_Len", "ctlen": "CT_Len", "sslen": "SS_Len",
              "snlen": "Sn_Len", "siglen": "Sn_Len", "mlen": "M_Len", "seedlen": "Seed_Len"}


def parse_kat_lengths(path: Path) -> tuple[list[dict[str, int]], bool]:
    """Return per-count dicts of *_Len fields (ints) and whether the file used lowercase hex keys."""
    text = path.read_text(encoding="utf-8", errors="replace")
    lowercase = bool(re.search(r"^count\s*=", text, re.M)) and not re.search(r"^Count\s*=", text, re.M)
    counts: list[dict[str, int]] = []
    current: dict[str, int] | None = None
    for raw in text.splitlines():
        line = raw.strip()
        key, sep, value = line.partition("=")
        if not sep:
            continue
        key = key.strip()
        value = value.strip()
        if key.lower() == "count":
            current = {}
            counts.append(current)
            continue
        if current is None:
            continue
        if lowercase:
            if key in LOWER_KEYS:
                try:
                    current[LOWER_KEYS[key]] = int(value, 16)
                except ValueError:
                    pass
        elif key.endswith("_Len") or key == "Pass_Num":
            try:
                current[key] = int(value)
            except ValueError:
                pass
    return counts, lowercase


def sizes_from_kat(path: Path, category: str) -> dict | None:
    counts, lowercase = parse_kat_lengths(path)
    counts = [c for c in counts if c]
    if not counts:
        return None
    first = counts[0]
    out: dict = {}
    if category == "KEM":
        for key, field in (("PK_Len", "pk"), ("SK_Len", "sk"), ("CT_Len", "ct"), ("SS_Len", "ss")):
            if key in first:
                out[field] = first[key]
    elif category == "SIG":
        for key, field in (("PK_Len", "pk"), ("SK_Len", "sk"), ("M_Len", "msg")):
            if key in first:
                out[field] = first[key]
        sns = [c["Sn_Len"] for c in counts if "Sn_Len" in c]
        if sns:
            out["sig_max"] = max(sns)
            out["sig_min"] = min(sns)
    else:
        passes = first.get("Pass_Num")
        if passes is not None:
            out["passes"] = passes
        for key, field in (("PKa_Len", "pk_a"), ("SKa_Len", "sk_a"), ("PKb_Len", "pk_b"), ("SKb_Len", "sk_b"),
                           ("Init_Sta_Len", "init_st_a"), ("Init_Stb_Len", "init_st_b"), ("SS_Len", "ss")):
            if key in first:
                out[field] = first[key]
        if passes:
            msgs = []
            for i in range(1, passes + 1):
                key = f"M{i}_Len"
                msgs.append(max((c.get(key, 0) for c in counts), default=0))
            out["msgs"] = msgs
            out["msg_total"] = sum(msgs)
    if not out:
        return None
    out["source"] = "kat"
    out["lowercase_kat"] = lowercase
    return out


def sizes_from_results(ngcc_root: Path, folder: str, instance: str, category: str, variant_hint: str = "") -> dict | None:
    res_dir = ngcc_root / "results" / folder
    if not res_dir.is_dir():
        return None
    candidates = [res_dir / f"{instance}.json"] + sorted(res_dir.glob(f"{instance}__*.json"))
    if variant_hint:
        candidates.sort(key=lambda p: 0 if norm(variant_hint) in norm(p.stem) else 1)
    for path in candidates:
        if not path.is_file():
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except ValueError:
            continue
        sizes = data.get("sizes")
        if not sizes:
            continue
        out: dict = {}
        if category == "KEM":
            for f in ("pk", "sk", "ct", "ss"):
                if f in sizes:
                    out[f] = sizes[f]
        elif category == "SIG":
            for src, f in (("pk", "pk"), ("sk", "sk"), ("sig", "sig_max"), ("msg", "msg")):
                if src in sizes:
                    out[f] = sizes[src]
        else:
            passes = sizes.get("passes_observed", sizes.get("passes"))
            if passes is not None:
                out["passes"] = passes
            # the results JSON reports one pk/sk size (the API getter) and the maximum message buffer
            for src, f in (("pk", "pk_a"), ("pk", "pk_b"), ("sk", "sk_a"), ("sk", "sk_b"), ("ss", "ss"),
                           ("total_msg", "msg_max")):
                if src in sizes:
                    out[f] = sizes[src]
            if passes and any(f"m{i}" in sizes for i in range(1, passes + 1)):
                out["msgs"] = [sizes.get(f"m{i}", 0) for i in range(1, passes + 1)]
                out["msg_total"] = sum(out["msgs"])
        if out:
            out["source"] = "ngcc_results"
            out["results_path"] = str(path.relative_to(ngcc_root))
            return out
    return None


def sizes_from_kat_raw(kat_raw: Path, stem: str, category: str) -> dict | None:
    path = kat_raw / f"{stem}_testvectors.txt"
    if not path.is_file():
        return None
    counts = kat_check.parse_driver_output(path.read_text(encoding="utf-8", errors="replace"), category)
    counts = [c for c in counts if c and "_errors" not in c]
    if not counts:
        return None
    first = counts[0]

    def hexlen(name: str, c: dict = first) -> int | None:
        v = c.get(name)
        return len(v) // 2 if isinstance(v, str) and kat_check.HEX_RE.match(v) else None

    out: dict = {}
    if category == "KEM":
        for name, f in (("PK", "pk"), ("SK", "sk"), ("CT", "ct"), ("SS", "ss")):
            v = hexlen(name)
            if v is not None:
                out[f] = v
    elif category == "SIG":
        for name, f in (("PK", "pk"), ("SK", "sk")):
            v = hexlen(name)
            if v is not None:
                out[f] = v
        sns = [hexlen("Sn", c) for c in counts]
        sns = [s for s in sns if s is not None]
        if sns:
            out["sig_max"], out["sig_min"] = max(sns), min(sns)
        if "M_Len" in first:
            try:
                out["msg"] = int(first["M_Len"])
            except ValueError:
                pass
    else:
        for name, f in (("PKa", "pk_a"), ("SKa", "sk_a"), ("PKb", "pk_b"), ("SKb", "sk_b"), ("SSa", "ss")):
            v = hexlen(name)
            if v is not None:
                out[f] = v
        msgs = []
        i = 1
        while f"M{i}" in first:
            msgs.append(max(hexlen(f"M{i}", c) or 0 for c in counts))
            i += 1
        if msgs:
            out["passes"] = len(msgs)
            out["msgs"] = msgs
            out["msg_total"] = sum(msgs)
    if not out:
        return None
    out["source"] = "kat_raw"
    return out


def kat_candidates(ngcc_root: Path, folder: str) -> list[Path]:
    base = ngcc_root / "schemes" / folder
    if not base.is_dir():
        return []
    files = set(base.rglob("KAT_*.txt")) | set((base / "Test_Vectors").rglob("*.txt")) if (base / "Test_Vectors").is_dir() else set(base.rglob("KAT_*.txt"))
    return sorted(files)


def match_kat_by_name(ngcc_root: Path, folder: str, instance: str, category: str) -> Path | None:
    targets = {norm(instance), norm(instance.split("__")[-1]), norm(f"KAT_{category}_{instance}")}
    targets.discard("")
    prefix = norm(f"KAT_{category}_")
    hits: list[Path] = []
    for path in kat_candidates(ngcc_root, folder):
        stem = norm(path.stem)
        bare = stem[len(prefix):] if stem.startswith(prefix) else stem
        if stem in targets or bare in targets:
            hits.append(path)
    if not hits:
        return None
    # prefer Test_Vectors/ and shorter paths (reference over optimized variants)
    hits.sort(key=lambda p: (0 if "Test_Vectors" in p.parts else 1, len(p.parts), str(p)))
    return hits[0]


def resolve_kat_path(ngcc_root: Path, row: dict, manifest: dict) -> Path | None:
    folder = row["ngcc"]["folder"]
    instance = row["ngcc"]["instance"]
    origin = row.get("_origin") or {}
    if origin.get("kat_file"):
        p = ngcc_root / "schemes" / folder / origin["kat_file"]
        if p.is_file():
            return p
    inst_rule = (manifest.get(folder, {}).get("instances") or {}).get(instance)
    if isinstance(inst_rule, dict) and inst_rule.get("kat"):
        p = ngcc_root / "schemes" / folder / "Test_Vectors" / inst_rule["kat"]
        if p.is_file():
            return p
    if row.get("_impl") is not None:
        p = kat_check.find_kat_file(ngcc_root, row["_impl"], origin)
        if p is not None:
            return p
    return match_kat_by_name(ngcc_root, folder, instance, FAMILY_OF_CATEGORY_KEY[row["category"]])


FAMILY_OF_CATEGORY_KEY = {"kem": "KEM", "kex": "KEX", "sig": "SIG"}


SOURCE_LABEL = {"kat_raw": "benchmarked binary (QEMU testvectors dump)", "ngcc_results": "host build of the reference code",
                "kat": "official KAT file"}
COMPARE_KEYS = {"kem": ("pk", "sk", "ct"), "sig": ("pk", "sk", "sig_max"), "kex": ("msg_total", "passes")}


def merge_sizes(category_key: str, *candidates: dict | None) -> tuple[dict | None, list[str]]:
    """Pick the first available source (callers pass them in priority order) and
    report where a lower-priority source disagrees on the headline sizes."""
    notes: list[str] = []
    available = [c for c in candidates if c]
    if not available:
        return None, notes
    chosen = available[0]
    for alt in available[1:]:
        diffs = [f"{key} {alt[key]}" for key in COMPARE_KEYS[category_key]
                 if key in chosen and key in alt and chosen[key] != alt[key]]
        if diffs:
            notes.append(f"{SOURCE_LABEL[alt['source']]} reports different sizes: " + ", ".join(diffs)
                         + f" (shown: {SOURCE_LABEL[chosen['source']]})")
    return chosen, notes


def resolve_sizes(ngcc_root: Path, kat_raw: Path, row: dict, manifest: dict) -> None:
    category = FAMILY_OF_CATEGORY_KEY[row["category"]]
    kat_path = resolve_kat_path(ngcc_root, row, manifest)
    from_kat = sizes_from_kat(kat_path, category) if kat_path else None
    if from_kat is not None:
        from_kat["kat_path"] = str(kat_path.relative_to(ngcc_root))
    variant_hint = row["scheme"][len(row["ngcc"]["instance"]):] if row["scheme"].startswith(row["ngcc"]["instance"]) else ""
    from_results = sizes_from_results(ngcc_root, row["ngcc"]["folder"], row["ngcc"]["instance"], category, variant_hint)
    from_raw = sizes_from_kat_raw(kat_raw, row["id"], category) if row.get("_impl") is not None else None
    sizes, notes = merge_sizes(row["category"], from_raw, from_results, from_kat)
    if sizes is not None and from_kat is not None and sizes is not from_kat:
        sizes["kat_path"] = from_kat["kat_path"]
    row["sizes"] = sizes
    row["notes"].extend(notes)
    row["_kat_lowercase"] = bool(from_kat and from_kat.get("lowercase_kat"))
    if sizes is not None:
        sizes.pop("lowercase_kat", None)


# --------------------------------------------------------------------------- security level

BITS_RE = re.compile(r"(?<!\d)(128|160|192|256|384|512)(?!\d)")
VARIANT_RE = re.compile(r"(?<!\d)(?:128|160|192|256|384|512)([fFsS])(?![A-Za-z])")

LEVEL_OVERRIDES: list[tuple[str, str]] = [
    (r"^(?:YuanYang-KEM|yuanyang)-(\d+)$", "n={1}"),
    (r"^DTRU-(.+)$", "{1}"),
    (r"^OAEP-NTRU-(\d+)$", "n={1}"),
    (r"^TRIKE-(\d)$", "{1}"),
    (r"^NEV(?:-AKE)?-([CDR]\d)(-c)?$", "{1}"),
    (r"^Aigis-(?:Enc|Sig)\+?-(I+)$", "{1}"),
    (r"^Lore-(?:SHAKE|SM3)(?:__Lore)?-L(\d)$", "L{1}"),
    (r"^CTL-(\d+)-(\d+)$", "q={1} n={2}"),
    (r"^POLARLAC-Light$", "Light"),
    (r"^(?:sqisign2d|SQIsignTriangle)_lvl(\d)$", "lvl{1}"),
    (r"^SQISign2Dsquare-Level(\d)-(eff|sec)$", "Level{1}-{2}"),
    (r"^hep-qc-(\d)$", "{1}"),
    (r"^HEP-QC$|^QIMEN-PIKE$|^NIIKE$|^BIKE_MLThre$", "-"),
]


def security_level(name: str, defines: dict | None) -> dict:
    defines = defines or {}
    for key, value in defines.items():
        if key.upper() == "SECURITY_LEVEL" and str(value).isdigit():
            return {"label": str(value), "bits": int(value), "variant": None, "source": "manifest"}
    for pattern, fmt in LEVEL_OVERRIDES:
        m = re.match(pattern, name)
        if m:
            label = fmt
            for i, g in enumerate(m.groups(), start=1):
                label = label.replace("{%d}" % i, g or "")
            return {"label": label, "bits": None, "variant": None, "source": "override"}
    bits = BITS_RE.search(name)
    variant = VARIANT_RE.search(name)
    if bits:
        v = variant.group(1).lower() if variant else None
        return {"label": bits.group(1) + (v or ""), "bits": int(bits.group(1)), "variant": v, "source": "name"}
    return {"label": "-", "bits": None, "variant": None, "source": "none"}


# --------------------------------------------------------------------------- assembly

def expected_ops(row: dict) -> list[str]:
    if row["family"] != "crypto_kex":
        return FAMILY_OPS[row["family"]]
    passes = (row.get("sizes") or {}).get("passes")
    if passes is None:
        seen = [int(op[4:]) for op in row["cycles"] if op.startswith("pass")]
        passes = max(seen) if seen else 0
    return ["init_a", "init_b"] + [f"pass{i}" for i in range(1, passes + 1)] + ["derive_a", "derive_b"]


def finish_row(row: dict, status_text: str | None) -> None:
    ops = expected_ops(row)
    bad = [op for op in row["cycles"] if op not in FAMILY_OPS[row["family"]] or op not in ops]
    for op in bad:
        row["notes"].append(f"ignored CSV metric '{op}_cycles' (not an operation of this scheme; mis-parsed driver output)")
        del row["cycles"][op]
    measured = [op for op in ops if op in row["cycles"]]
    row["expected_ops"] = ops
    row["measured_ops"] = measured
    row["status_text"] = status_text
    row["failure_kind"] = classify_status(status_text) if status_text else None
    row["completed_ops"] = completed_ops_from_status(status_text) if status_text else []
    if measured and len(measured) == len(ops):
        row["run_status"] = "measured"
    elif measured:
        row["run_status"] = "partial"
    elif status_text:
        row["run_status"] = "failed"
    else:
        row["run_status"] = "not-run"
    row["cycles_total"] = sum(row["cycles"][op]["avg"] for op in ops) if row["run_status"] == "measured" else None
    if status_text and row["run_status"] == "measured":
        row["notes"].append(status_text)


def build_not_benchmarked(schemes: dict, manifest: dict, rows: dict, ngcc_root: Path, kat_raw: Path) -> tuple[dict, list[str]]:
    unsupported: list[dict] = []
    footnotes: list[str] = []
    imported = {(r["ngcc"]["folder"], r["ngcc"]["instance"]) for r in rows.values()}
    skipped_components: list[str] = []
    unaccounted: list[str] = []
    for scheme in schemes["schemes"]:
        folder = scheme["folder"]
        rule = manifest.get(folder, {})
        scheme_status = rule.get("status", "supported")
        for inst in scheme["instances"]:
            name = inst["name"]
            if inst.get("component"):
                skipped_components.append(f"{folder}/{name}")
                continue
            if (folder, name) in imported:
                continue
            inst_rule = (rule.get("instances") or {}).get(name)
            if scheme_status == "unsupported":
                reason, scope = rule.get("reason", ""), "scheme"
            elif isinstance(inst_rule, dict) and inst_rule.get("status") == "unsupported":
                reason, scope = inst_rule.get("reason", ""), "instance"
            elif rule.get("only_instances") and name not in rule["only_instances"]:
                reason = rule.get("_note") or (
                    "not imported: the import manifest restricts this submission to "
                    + ", ".join(rule["only_instances"]))
                scope = "instance"
            else:
                unaccounted.append(f"{folder}/{name}")
                reason, scope = "not imported (no reason recorded in the manifest)", "unknown"
            category = scheme["category"]
            entry = {
                "folder": folder,
                "title": scheme.get("title", folder),
                "category": CATEGORY_KEY[category],
                "instance": name,
                "reason": reason,
                "reason_scope": scope,
                "pub_date": scheme.get("pub_date"),
                "level": security_level(name, inst_rule.get("defines") if isinstance(inst_rule, dict) else None),
                "ngcc": {"folder": folder, "instance": name, "title": scheme.get("title", folder)},
                "category_name": category,
                "scheme": name,
                "notes": [],
                "_origin": {},
            }
            resolve_sizes(ngcc_root, kat_raw, entry, manifest)
            entry.pop("_origin", None)
            entry.pop("_kat_lowercase", None)
            entry.pop("category_name", None)
            unsupported.append(entry)
    if skipped_components:
        footnotes.append(
            f"{len(skipped_components)} instances listed in schemes.json are components of another submission "
            f"(CreTAKE's BiT/ZEN/POLARLAC building blocks, benchmarked under their own submissions) and are not counted: "
            + ", ".join(skipped_components)
        )
    return {"unsupported": unsupported, "unaccounted": unaccounted}, footnotes


def strip_private(row: dict) -> dict:
    return {k: v for k, v in row.items() if not k.startswith("_")}


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--ngcc-root", type=Path, default=ROOT.parent / "NGCC")
    ap.add_argument("--out", type=Path, default=ROOT / "Out")
    ap.add_argument("--docs", type=Path, default=ROOT / "docs")
    ap.add_argument("--platform", default="nucleo-l4r5zi")
    ap.add_argument("--strict", action="store_true", help="fail if any implementation has no key sizes")
    args = ap.parse_args(argv)

    ngcc_root: Path = args.ngcc_root.resolve()
    out_dir: Path = args.out.resolve()
    csv_path = out_dir / f"benchmark_speed_{args.platform}.csv"
    md_path = out_dir / f"benchmark_speed_{args.platform}.md"
    for p in (csv_path, md_path, ngcc_root / "schemes.json"):
        if not p.is_file():
            raise SystemExit(f"missing input: {p}")

    schemes = load_schemes_json(ngcc_root)
    manifest = load_manifest()
    rows = load_rows(schemes)
    cycles = parse_speed_csv(csv_path, args.platform)
    conditions, status, code_md = parse_md(md_path)
    code_files = code_from_size_files(out_dir / "benchmark_sizes", rows)
    stack, stack_skipped = parse_stack(out_dir / "benchmark_raw", rows)
    kat_results, kat_notes = parse_kat_summary(out_dir / "kat_summary.md")
    kat_raw = out_dir / "kat_raw"

    unknown_csv = sorted(set(cycles) - set(rows))
    unknown_status = sorted(set(status) - set(rows))
    if unknown_csv or unknown_status:
        raise SystemExit(f"targets without an implementation directory: csv={unknown_csv} status={unknown_status}")

    for stem, row in rows.items():
        row["cycles"] = cycles.get(stem, {})
        row["code"] = code_md.get(stem) or code_files.get(stem)
        row["stack"] = stack.get(stem)
        inst_rule = (manifest.get(row["ngcc"]["folder"], {}).get("instances") or {}).get(row["ngcc"]["instance"])
        row["level"] = security_level(row["scheme"], inst_rule.get("defines") if isinstance(inst_rule, dict) else None)
        resolve_sizes(ngcc_root, kat_raw, row, manifest)
        kat = kat_results.get(stem)
        if kat is None:
            row["kat"] = {"status": "not-checked", "detail": "", "caveat": None}
        else:
            caveat = None
            if row["_kat_lowercase"]:
                caveat = ("the official KAT file uses lowercase keys, which kat_check.py does not parse; "
                          "the recorded 'match' compared nothing")
            row["kat"] = {"status": kat["status"], "detail": kat["detail"], "caveat": caveat}
        finish_row(row, status.get(stem))

    not_bench, footnotes = build_not_benchmarked(schemes, manifest, rows, ngcc_root, kat_raw)

    # ---- accounting / assertions
    by_status = Counter((r["category"], r["run_status"]) for r in rows.values())
    by_tier = Counter((r["category"], r["tier"]) for r in rows.values())
    non_skip_set = {(s["folder"], i["name"]) for s in schemes["schemes"] for i in s["instances"] if not i.get("component")}
    non_skip = len(non_skip_set)
    imported_instances = {(r["ngcc"]["folder"], r["ngcc"]["instance"]) for r in rows.values()}
    unsupported_instances = {(e["folder"], e["instance"]) for e in not_bench["unsupported"]}
    n_unsupported = len(unsupported_instances)
    problems: list[str] = []
    if imported_instances & unsupported_instances:
        problems.append("instances both imported and unsupported: " + ", ".join(map(str, sorted(imported_instances & unsupported_instances))))
    missing = non_skip_set - imported_instances - unsupported_instances
    if missing:
        problems.append("NGCC instances neither imported nor unsupported: " + ", ".join(map(str, sorted(missing))))
    folders_covered = {f for f, _ in imported_instances | unsupported_instances}
    if folders_covered != set(schemes["by_folder"]):
        problems.append("NGCC folders not covered: " + ", ".join(sorted(set(schemes["by_folder"]) - folders_covered)))
    if not_bench["unaccounted"]:
        problems.append("instances neither imported nor marked unsupported: " + ", ".join(not_bench["unaccounted"]))
    for r in rows.values():
        if r["run_status"] == "not-run" and (r["tier"] != "qemu" or r["family"] == "crypto_sign"):
            problems.append(f"{r['id']}: not-run but tier={r['tier']} family={r['family']}")
    no_sizes = [r["id"] for r in rows.values() if not r.get("sizes")]
    if no_sizes:
        msg = f"{len(no_sizes)} implementations without key sizes: " + ", ".join(no_sizes)
        if args.strict:
            problems.append(msg)
        else:
            warn(msg)
    nb_no_sizes = [f"{e['folder']}/{e['instance']}" for e in not_bench["unsupported"] if not e.get("sizes")]
    if nb_no_sizes:
        warn(f"{len(nb_no_sizes)} unsupported instances without key sizes: " + ", ".join(nb_no_sizes))

    print("implementations:", len(rows))
    for cat in ("kem", "kex", "sig"):
        line = {s: by_status.get((cat, s), 0) for s in ("measured", "partial", "failed", "not-run")}
        print(f"  {cat}: {line}  tiers={{board: {by_tier.get((cat, 'board'), 0)}, qemu: {by_tier.get((cat, 'qemu'), 0)}}}")
    print("csv targets:", len(cycles), " status rows:", len(status), " overlap:", len(set(cycles) & set(status)))
    print("code size rows:", sum(1 for r in rows.values() if r["code"]), " stack rows:", len(stack), f"(skipped {stack_skipped} raw files without a directory)")
    print("kat rows:", len(kat_results), " unsupported instances:", n_unsupported, " non-skip NGCC instances:", non_skip)
    if problems:
        for p in problems:
            print("error:", p, file=sys.stderr)
        return 1

    # ---- output
    ops_by_cat = {
        "kem": FAMILY_OPS["crypto_kem"],
        "sig": FAMILY_OPS["crypto_sign"],
        "kex": [op for op in FAMILY_OPS["crypto_kex"] if op in {o for r in rows.values() if r["category"] == "kex" for o in r["expected_ops"]}],
    }
    fetched = sorted({s.get("fetched_at", "")[:10] for s in schemes["schemes"] if s.get("fetched_at")})
    data = {
        "meta": {
            "generator": "tools/make_site_data.py",
            "generated_on": dt.date.today().isoformat(),
            "git_rev": git_rev(),
            "platform": args.platform,
            "board": BOARD,
            "conditions": conditions,
            "ngcc": {
                "source": schemes["source"],
                "schemes": len(schemes["schemes"]),
                "instances": non_skip,
                "fetched": [fetched[0], fetched[-1]] if fetched else [],
            },
            "counts": {
                "implementations": len(rows),
                "by_category": {cat: sum(1 for r in rows.values() if r["category"] == cat) for cat in ("kem", "kex", "sig")},
                "by_status": {f"{cat}.{s}": n for (cat, s), n in sorted(by_status.items())},
                "by_tier": {f"{cat}.{t}": n for (cat, t), n in sorted(by_tier.items())},
                "kat": dict(Counter(r["kat"]["status"] for r in rows.values())),
                "unsupported_instances": n_unsupported,
            },
            "kat_notes": kat_notes,
            "footnotes": footnotes,
            "sources": {
                "speed_csv": str(csv_path.relative_to(ROOT)),
                "speed_md": str(md_path.relative_to(ROOT)),
                "kat_summary": "Out/kat_summary.md",
                "manifest": "tools/ngcc_manifest.json",
            },
            "repo": "https://github.com/JunhaoHuang/ngccm4",
        },
        "categories": {
            cat: {
                "ops": ops_by_cat[cat],
                "size_fields": SIZE_FIELDS[cat],
                "rows": [strip_private(r) for r in rows.values() if r["category"] == cat],
            }
            for cat in ("kem", "kex", "sig")
        },
        "not_benchmarked": {
            "unsupported": not_bench["unsupported"],
            "qemu_tier": [r["id"] for r in rows.values() if r["run_status"] == "not-run"],
            "failed": [r["id"] for r in rows.values() if r["run_status"] in ("failed", "partial")],
        },
    }
    docs_data = args.docs / "data"
    docs_data.mkdir(parents=True, exist_ok=True)
    text = json.dumps(data, indent=1, sort_keys=True, ensure_ascii=False)
    (docs_data / "benchmark.json").write_text(text + "\n", encoding="utf-8")
    (docs_data / "data.js").write_text("window.NGCCM4_DATA = " + text + ";\n", encoding="utf-8")
    print(f"wrote {docs_data / 'benchmark.json'} ({len(text) // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
