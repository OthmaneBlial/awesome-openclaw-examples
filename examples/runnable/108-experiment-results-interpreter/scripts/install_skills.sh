#!/usr/bin/env bash
set -euo pipefail

for skill in notion summarize gog; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
