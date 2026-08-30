#!/usr/bin/env bash
set -euo pipefail

for skill in tavily-search summarize notion; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
