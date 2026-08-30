#!/usr/bin/env bash
set -euo pipefail

for skill in github notion summarize; do
  openclaw skills install "$skill"
done
