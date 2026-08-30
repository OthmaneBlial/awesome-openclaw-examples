#!/usr/bin/env bash
set -euo pipefail

for skill in tavily-search notion slack; do
  openclaw skills install "$skill"
done
