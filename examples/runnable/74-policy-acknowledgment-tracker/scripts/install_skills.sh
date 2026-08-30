#!/usr/bin/env bash
set -euo pipefail

for skill in gog notion slack; do
  openclaw skills install "$skill"
done
