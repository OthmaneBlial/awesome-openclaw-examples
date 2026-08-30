#!/usr/bin/env bash
set -euo pipefail

for skill in nano-pdf summarize notion; do
  openclaw skills install "$skill"
done
