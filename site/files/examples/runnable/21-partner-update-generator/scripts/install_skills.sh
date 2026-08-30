#!/usr/bin/env bash
set -euo pipefail

for skill in gog summarize; do
  openclaw skills install "$skill"
done
