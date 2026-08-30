#!/usr/bin/env bash
set -euo pipefail

for skill in gog todoist summarize; do
  openclaw skills install "$skill"
done
