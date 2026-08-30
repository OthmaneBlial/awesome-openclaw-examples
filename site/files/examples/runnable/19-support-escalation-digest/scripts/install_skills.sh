#!/usr/bin/env bash
set -euo pipefail

for skill in slack summarize todoist; do
  openclaw skills install "$skill"
done
