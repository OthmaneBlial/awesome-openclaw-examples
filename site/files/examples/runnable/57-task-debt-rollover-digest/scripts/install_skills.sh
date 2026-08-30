#!/usr/bin/env bash
set -euo pipefail

for skill in todoist summarize slack; do
  openclaw skills install "$skill"
done
