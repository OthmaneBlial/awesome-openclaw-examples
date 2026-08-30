#!/usr/bin/env bash
set -euo pipefail

for skill in typeform summarize todoist; do
  openclaw skills install "$skill"
done
