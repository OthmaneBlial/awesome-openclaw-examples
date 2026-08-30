#!/usr/bin/env bash
set -euo pipefail

for skill in notion summarize todoist; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
