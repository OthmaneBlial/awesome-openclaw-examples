#!/usr/bin/env bash
set -euo pipefail

for skill in gog summarize todoist; do
  npx clawhub@latest install "$skill"
done
