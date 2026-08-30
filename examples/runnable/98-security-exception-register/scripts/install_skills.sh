#!/usr/bin/env bash
set -euo pipefail

for skill in notion slack summarize gog; do
  openclaw skills install "$skill"
done
