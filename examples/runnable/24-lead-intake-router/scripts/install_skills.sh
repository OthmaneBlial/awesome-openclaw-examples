#!/usr/bin/env bash
set -euo pipefail

for skill in typeform notion slack; do
  openclaw skills install "$skill"
done
