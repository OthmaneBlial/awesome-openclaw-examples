#!/usr/bin/env bash
set -euo pipefail

for skill in nano-pdf summarize notion; do
  npx clawhub@latest install "$skill"
done
