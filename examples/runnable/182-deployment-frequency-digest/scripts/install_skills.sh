#!/usr/bin/env bash
set -euo pipefail

for skill in github summarize slack; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
