#!/usr/bin/env bash
set -euo pipefail

for skill in api-gateway summarize slack; do
  npx clawhub@latest install "$skill"
done
