#!/usr/bin/env bash
set -euo pipefail

for skill in frontend-design notion slack; do
  openclaw skills install "$skill"
done
