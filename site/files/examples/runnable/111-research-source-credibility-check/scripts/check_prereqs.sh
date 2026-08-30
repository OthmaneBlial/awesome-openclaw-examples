#!/usr/bin/env bash
set -euo pipefail

for cmd in openclaw; do
  command -v "$cmd" >/dev/null 2>&1 || { echo "Missing command: $cmd"; exit 1; }
done

openclaw --version >/dev/null 2>&1 || { echo "openclaw is not ready"; exit 1; }
echo "Prerequisites OK: openclaw is available"
