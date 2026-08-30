#!/usr/bin/env bash
set -euo pipefail

for skill in youtube-watcher summarize notion slack; do
  openclaw skills install "$skill"
done
