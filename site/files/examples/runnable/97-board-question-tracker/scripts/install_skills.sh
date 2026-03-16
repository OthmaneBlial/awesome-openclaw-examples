#!/usr/bin/env bash
set -euo pipefail

for skill in notion todoist slack summarize; do
  npx clawhub@latest install "$skill"
done
