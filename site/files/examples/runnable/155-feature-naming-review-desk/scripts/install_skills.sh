#!/usr/bin/env bash
set -euo pipefail

for skill in gog summarize tavily-search; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
