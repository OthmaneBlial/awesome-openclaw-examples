#!/usr/bin/env bash
set -euo pipefail

for skill in github slack summarize; do
  openclaw skills install "$skill"
done
