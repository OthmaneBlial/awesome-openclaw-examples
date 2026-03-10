#!/usr/bin/env bash
set -euo pipefail

for skill in github slack notion; do
  npx clawhub@latest install "$skill"
done
