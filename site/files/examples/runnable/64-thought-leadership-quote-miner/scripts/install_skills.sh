#!/usr/bin/env bash
set -euo pipefail

for skill in youtube-watcher summarize notion; do
  npx clawhub@latest install "$skill"
done
