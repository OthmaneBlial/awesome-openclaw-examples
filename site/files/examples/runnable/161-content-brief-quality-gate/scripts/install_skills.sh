#!/usr/bin/env bash
set -euo pipefail

for skill in notion summarize tavily-search; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
