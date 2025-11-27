#!/usr/bin/env python3
"""
apply_image_mapping.py

Usage:
  python3 apply_image_mapping.py [mapping-file]

This script reads a JSON mapping file (default: ./assets/image-mapping.json)
with structure: { "mappings": { "<original-string>": "<replacement-path>", ... } }

It searches the project files (index.html, script.js, styles.css) and replaces
all exact occurrences of each original-string with replacement-path. Before
editing, it creates a backup copy of each file (filename + .bak).

This is a conservative, textual replace tool. Provide exact URLs/strings to
replace (including query params) so only intended matches are changed.
"""
import json
import os
import shutil
import sys
from datetime import datetime

ROOT = os.path.dirname(__file__)
DEFAULT_MAPPING = os.path.join(ROOT, 'assets', 'image-mapping.json')
FILES = [
    os.path.join(ROOT, 'index.html'),
    os.path.join(ROOT, 'script.js'),
    os.path.join(ROOT, 'styles.css'),
]


def load_mapping(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    mappings = data.get('mappings') or {}
    # filter out comment-like keys
    return {k: v for k, v in mappings.items() if not k.strip().startswith('#')}


def backup_file(path):
    ts = datetime.now().strftime('%Y%m%d%H%M%S')
    bak = f"{path}.bak.{ts}"
    shutil.copy2(path, bak)
    return bak


def apply_mappings(mapping_path):
    if not os.path.isfile(mapping_path):
        print(f"Mapping file not found: {mapping_path}")
        sys.exit(1)
    mappings = load_mapping(mapping_path)
    if not mappings:
        print("No mappings found in mapping file. Nothing to do.")
        return

    summary = {}
    for fpath in FILES:
        if not os.path.isfile(fpath):
            print(f"Skipping missing file: {fpath}")
            continue
        print(f"Processing: {fpath}")
        bak = backup_file(fpath)
        print(f"  Backup created: {bak}")
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        file_changes = 0
        for orig, new in mappings.items():
            if orig in content:
                content = content.replace(orig, new)
                file_changes += 1
                summary.setdefault(fpath, []).append((orig, new))

        if file_changes:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  Replaced {file_changes} mapping(s) in {os.path.basename(fpath)}")
        else:
            print(f"  No occurrences found in {os.path.basename(fpath)}")

    print('\nSummary of applied mappings:')
    if not summary:
        print('  No replacements were made.')
        print('If you expected changes, ensure the mapping keys exactly match the strings in source files (URLs include query strings).')
        return
    for fpath, changes in summary.items():
        print(f"\nIn {os.path.relpath(fpath, ROOT)}:")
        for orig, new in changes:
            print(f"  {orig}  ->  {new}")


if __name__ == '__main__':
    mapping_file = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_MAPPING
    apply_mappings(mapping_file)
