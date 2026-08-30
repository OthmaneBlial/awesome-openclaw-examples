#!/usr/bin/env bash
set -euo pipefail

for skill in notion todoist slack summarize; do
  openclaw skills install "$skill"
done
