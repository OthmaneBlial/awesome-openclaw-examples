#!/usr/bin/env bash
set -euo pipefail

for skill in github summarize notion; do
  openclaw skills install "$skill"
done
