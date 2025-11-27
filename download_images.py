#!/usr/bin/env python3
"""
Simple downloader: extract image URLs from index.html and script.js and download them
into assets/images/ with filenames of the form <category>_<brand>_<n>.<ext>.
This script uses only the Python standard library.
"""
import os
import re
import sys
from urllib.parse import urlparse
from urllib.request import urlopen, Request

ROOT = os.path.dirname(__file__)
ASSETS_DIR = os.path.join(ROOT, 'assets', 'images')
if not os.path.isdir(ASSETS_DIR):
    os.makedirs(ASSETS_DIR, exist_ok=True)

html_path = os.path.join(ROOT, 'index.html')
js_path = os.path.join(ROOT, 'script.js')

def slug(s):
    s = s or ''
    s = s.strip().lower()
    s = re.sub(r"[^a-z0-9]+", '-', s)
    s = re.sub(r"-+", '-', s).strip('-')
    return s or 'unknown'

# Read files
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()
with open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

# Helper to choose extension
def choose_ext(url):
    p = urlparse(url)
    path = p.path
    if '.' in path:
        return os.path.splitext(path)[1]
    # fallback - many unsplash urls have no extension; treat as .jpg
    return '.jpg'

# Collect mappings: list of (url, category, brand)
mappings = []
seen_urls = set()

# 1) Extract presence logos from index.html: look for <article class="presence__card"> blocks
presence_blocks = re.findall(r'<article[^>]*class="presence__card"[\s\S]*?<\/article>', html)
for block in presence_blocks:
    # find img src
    m = re.search(r'<img[^>]+src="([^"]+)"[^>]*>', block)
    if not m: continue
    url = m.group(1)
    # find span text (brand name)
    m2 = re.search(r'<span>([^<]+)<\/span>', block)
    brand = m2.group(1).strip() if m2 else None
    if url in seen_urls: continue
    seen_urls.add(url)
    mappings.append((url, 'marketplace', brand or slug(url)))

# 2) Extract brand blocks and their brandImage and items from script.js.
# We will find blocks like {\n    id: "Putrika", ... brandImage: "URL", items: [ ... ] }
brand_block_re = re.compile(r"\{\s*id:\s*\"([^\"]+)\"([\s\S]*?)\}\s*,?\s*\n", re.MULTILINE)
# But script.js contains multiple objects; we'll find by scanning for 'id: "<id>"' and then extracting until the closing '],\n  },' pattern
brands = re.findall(r"id:\s*\"([^\"]+)\"([\s\S]*?)items:\s*\[([\s\S]*?)\]\s*\,\n\s*\},", js)
if not brands:
    # fallback: looser approach
    brands = re.findall(r"id:\s*\"([^\"]+)\"([\s\S]*?)brandImage:\s*\"([^\"]+)\"", js)

for b in brands:
    try:
        brand_id = b[0]
        body = b[1]
        items_block = b[2]
    except Exception:
        continue
    brand = brand_id
    # brandImage
    m = re.search(r'brandImage:\s*\"([^\"]+)\"', body)
    if m:
        url = m.group(1)
        if url not in seen_urls:
            seen_urls.add(url)
            mappings.append((url, 'brand', brand))
    # items: find each item object inside items_block
    item_re = re.compile(r"\{([\s\S]*?)\}\s*,?\n")
    items = item_re.findall(items_block)
    idx = 1
    for item in items:
        mm = re.search(r'media:\s*\"([^\"]+)\"', item)
        mt = re.search(r'tag:\s*\"([^\"]+)\"', item)
        if not mm: continue
        url = mm.group(1)
        tag = mt.group(1) if mt else 'product'
        if url in seen_urls: continue
        seen_urls.add(url)
        mappings.append((url, tag, brand))
        idx += 1

# 3) Also capture any <img src="./assets/..."> local images (skip) and other images within templates
img_srcs = re.findall(r'<img[^>]+src="([^"]+)"', html)
for src in img_srcs:
    if src.startswith('./assets'):
        continue
    if src.startswith('data:'):
        continue
    if src.startswith('http') and src not in seen_urls:
        seen_urls.add(src)
        mappings.append((src, 'uncategorized', slug(src)))

print(f'Found {len(mappings)} unique remote image URLs to process...')

# Now download each mapping
for i, (url, category, brand) in enumerate(mappings, start=1):
    ext = choose_ext(url)
    cat = slug(category)
    br = slug(brand)
    filename = f"{cat}_{br}_{i}{ext}"
    outpath = os.path.join(ASSETS_DIR, filename)
    if os.path.exists(outpath):
        print(f'[{i}/{len(mappings)}] SKIP exists: {filename}')
        continue
    print(f'[{i}/{len(mappings)}] Downloading {url} -> {filename}')
    try:
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req, timeout=30) as resp, open(outpath, 'wb') as out:
            data = resp.read()
            out.write(data)
    except Exception as e:
        print(f'  ERROR downloading {url}: {e}')

print('Done. Images saved to assets/images/')
