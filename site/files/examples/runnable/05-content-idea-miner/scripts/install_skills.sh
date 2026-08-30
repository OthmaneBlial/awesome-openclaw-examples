#!/usr/bin/env bash
set -euo pipefail

for skill in tavily-search youtube-watcher summarize notion; do
  openclaw skills install "$skill"
done
