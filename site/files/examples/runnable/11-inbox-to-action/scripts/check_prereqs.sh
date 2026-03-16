#!/usr/bin/env bash
set -euo pipefail

for cmd in openclaw gog todoist; do
  command -v "$cmd" >/dev/null 2>&1 || { echo "Missing command: $cmd"; exit 1; }
done

echo "Prerequisites OK"
