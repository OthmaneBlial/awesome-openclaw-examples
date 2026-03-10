#!/usr/bin/env bash
set -euo pipefail

for skill in gog todoist summarize; do
  npx clawhub@latest install "$skill"
done
