#!/usr/bin/env bash
set -euo pipefail

for skill in typeform notion slack summarize; do
  openclaw skills install "$skill"
done
