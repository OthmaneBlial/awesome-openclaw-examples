#!/usr/bin/env bash
set -euo pipefail

for skill in model-usage summarize slack; do
  openclaw skills install "$skill"
done
