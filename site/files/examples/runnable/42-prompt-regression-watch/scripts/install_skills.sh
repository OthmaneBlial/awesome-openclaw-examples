#!/usr/bin/env bash
set -euo pipefail

for skill in model-usage summarize slack; do
  npx clawhub@latest install "$skill"
done
