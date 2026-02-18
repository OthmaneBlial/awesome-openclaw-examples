#!/usr/bin/env bash
set -euo pipefail

for cmd in openclaw gh jq; do
  command -v "$cmd" >/dev/null 2>&1 || { echo "Missing command: $cmd"; exit 1; }
done

gh auth status >/dev/null 2>&1 || { echo "gh is not authenticated"; exit 1; }

echo "Prerequisites OK"
