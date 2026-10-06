#!/usr/bin/env python3
"""Record the official NGCC web page of every Round-1 submission.

Scrapes the server-rendered ``var articleList = [...]`` array of the NGCC candidate list
(the same page tools/fetch.py in the NGCC mirror uses) and writes tools/ngcc_links.json:

    {"<submission title>": {"page": ".../content_<id>.html", "zip": ".../<title>.zip",
                            "comments": "<mailing-list thread or null>", "pub_date": "..."}}

tools/make_site_data.py attaches these links to every row of the benchmark site, so the
site can be regenerated offline. Re-run this script when the NGCC list changes.

    python3 tools/fetch_ngcc_links.py            # rewrite tools/ngcc_links.json
    python3 tools/fetch_ngcc_links.py --check    # exit 1 if the file is stale
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import urllib.parse
from pathlib import Path

SITE = "https://www.niccs.org.cn"
LIST_URL = SITE + "/niccs/Round1Additional/pc/list.html"
OUT = Path(__file__).resolve().parent / "ngcc_links.json"


def http_get(url: str, timeout: int = 60) -> str:
    # curl, not urllib: the site's WAF answers 405 to python-urllib requests.
    r = subprocess.run(["curl", "-sSL", "--fail", "--max-time", str(timeout), url], capture_output=True)
    if r.returncode != 0:
        raise SystemExit(f"curl failed ({r.returncode}) for {url}: {r.stderr.decode(errors='replace')}")
    return r.stdout.decode("utf-8", errors="replace")


def article_list(html: str) -> list[dict]:
    key = "var articleList = "
    i = html.find(key)
    if i < 0:
        raise SystemExit("articleList not found in the NGCC list page")
    arr, _ = json.JSONDecoder().raw_decode(html[i + len(key):])
    return arr


def scrape() -> dict[str, dict]:
    links: dict[str, dict] = {}
    for a in article_list(http_get(LIST_URL)):
        urls = json.loads(a.get("urls") or "{}")
        page = urls.get("pc")
        if not page:
            print(f"warning: no page URL for {a['title']!r}", file=sys.stderr)
            continue
        files = a.get("articleFiles") or []
        zip_path = files[0].get("cover") if files else None
        meta = a.get("metadata") or {}
        links[a["title"]] = {
            "page": SITE + page,
            "zip": SITE + urllib.parse.quote(zip_path) if zip_path else None,
            "comments": meta.get("viewcommen") or None,
            "pub_date": a.get("pubDate"),
        }
    return dict(sorted(links.items()))


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true", help="compare with the committed file instead of writing it")
    args = ap.parse_args(argv)
    links = scrape()
    text = json.dumps(links, indent=1, ensure_ascii=False) + "\n"
    if args.check:
        current = OUT.read_text(encoding="utf-8") if OUT.exists() else ""
        if current != text:
            print(f"{OUT} is stale ({len(links)} submissions online)", file=sys.stderr)
            return 1
        print(f"{OUT} is up to date ({len(links)} submissions)")
        return 0
    OUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUT} ({len(links)} submissions)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
