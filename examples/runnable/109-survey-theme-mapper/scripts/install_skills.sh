#!/usr/bin/env bash
set -euo pipefail

for skill in typeform summarize notion; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
