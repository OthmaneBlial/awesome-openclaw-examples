#!/usr/bin/env bash
set -euo pipefail

command -v openclaw >/dev/null 2>&1 || { echo "Missing command: openclaw"; exit 1; }

echo "Prerequisites OK"
