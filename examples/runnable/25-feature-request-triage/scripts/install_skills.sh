#!/usr/bin/env bash
set -euo pipefail

for skill in github summarize todoist; do
  openclaw skills install "$skill"
done
