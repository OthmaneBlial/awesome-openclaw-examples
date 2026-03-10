#!/usr/bin/env bash
set -euo pipefail

for skill in gog notion slack; do
  npx clawhub@latest install "$skill"
done
