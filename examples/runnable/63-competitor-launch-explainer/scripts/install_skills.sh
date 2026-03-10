#!/usr/bin/env bash
set -euo pipefail

for skill in tavily-search summarize slack; do
  npx clawhub@latest install "$skill"
done
