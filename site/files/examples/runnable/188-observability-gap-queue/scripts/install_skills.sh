#!/usr/bin/env bash
set -euo pipefail

for skill in github api-gateway notion; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
