#!/usr/bin/env bash
set -euo pipefail

for skill in tavily-search summarize todoist; do
  openclaw skills install "$skill"
done
