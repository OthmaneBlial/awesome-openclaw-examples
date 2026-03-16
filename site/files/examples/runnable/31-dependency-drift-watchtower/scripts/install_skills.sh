#!/usr/bin/env bash
set -euo pipefail

for skill in github summarize todoist; do
  npx clawhub@latest install "$skill"
done
