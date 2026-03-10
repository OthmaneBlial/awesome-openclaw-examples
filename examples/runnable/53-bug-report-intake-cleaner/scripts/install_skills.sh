#!/usr/bin/env bash
set -euo pipefail

for skill in typeform summarize todoist; do
  npx clawhub@latest install "$skill"
done
