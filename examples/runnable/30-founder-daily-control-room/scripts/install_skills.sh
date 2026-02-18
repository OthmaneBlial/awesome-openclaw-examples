#!/usr/bin/env bash
set -euo pipefail

for skill in gog github todoist weather; do
  npx clawhub@latest install "$skill"
done
