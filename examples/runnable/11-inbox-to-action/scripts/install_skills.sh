#!/usr/bin/env bash
set -euo pipefail

for skill in gog summarize todoist; do
  openclaw skills install "$skill"
done
