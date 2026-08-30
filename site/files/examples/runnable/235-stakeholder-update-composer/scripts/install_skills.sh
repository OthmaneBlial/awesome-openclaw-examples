#!/usr/bin/env bash
set -euo pipefail

for skill in gog slack summarize; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
