#!/usr/bin/env bash
set -euo pipefail

for skill in api-gateway slack notion; do
  npx clawhub@latest install "$skill"
done
