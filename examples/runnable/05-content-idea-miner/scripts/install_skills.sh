#!/usr/bin/env bash
set -euo pipefail

for skill in tavily-search youtube-watcher summarize notion; do
  npx clawhub@latest install "$skill"
done
