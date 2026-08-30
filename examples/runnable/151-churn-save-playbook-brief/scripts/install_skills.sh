#!/usr/bin/env bash
set -euo pipefail

for skill in api-gateway notion summarize; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
