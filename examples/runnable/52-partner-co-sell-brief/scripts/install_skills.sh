#!/usr/bin/env bash
set -euo pipefail

for skill in gog summarize slack; do
  openclaw skills install "$skill"
done
