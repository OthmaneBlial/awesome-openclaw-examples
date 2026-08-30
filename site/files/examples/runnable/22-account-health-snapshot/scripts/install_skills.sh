#!/usr/bin/env bash
set -euo pipefail

for skill in api-gateway notion slack; do
  openclaw skills install "$skill"
done
