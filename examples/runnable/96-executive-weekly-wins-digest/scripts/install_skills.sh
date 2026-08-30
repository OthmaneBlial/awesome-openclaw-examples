#!/usr/bin/env bash
set -euo pipefail

for skill in slack summarize notion; do
  openclaw skills install "$skill"
done
