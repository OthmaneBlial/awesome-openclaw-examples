#!/usr/bin/env bash
set -euo pipefail

for skill in slack summarize notion; do
  npx clawhub@latest install "$skill"
done
