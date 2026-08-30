#!/usr/bin/env bash
set -euo pipefail

for skill in github api-gateway slack; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
