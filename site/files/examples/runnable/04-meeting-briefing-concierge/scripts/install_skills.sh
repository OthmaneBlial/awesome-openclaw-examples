#!/usr/bin/env bash
set -euo pipefail

for skill in gog summarize notion; do
  openclaw skills install "$skill"
done
