#!/usr/bin/env bash
set -euo pipefail

for skill in github notion; do
  npx clawhub@latest install "$skill"
done
