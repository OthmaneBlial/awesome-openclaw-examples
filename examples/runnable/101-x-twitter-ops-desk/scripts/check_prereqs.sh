#!/usr/bin/env bash
set -euo pipefail

command -v openclaw >/dev/null 2>&1 || { echo "Missing command: openclaw"; exit 1; }
[[ -n "${TARGET_ACCOUNTS:-}" ]] || { echo "Set TARGET_ACCOUNTS"; exit 1; }
[[ -n "${SEARCH_QUERIES:-}" ]] || { echo "Set SEARCH_QUERIES"; exit 1; }

echo "Prerequisites OK"
