#!/usr/bin/env bash
set -euo pipefail

for skill in stripe-api gog notion; do
  npx clawhub@latest install "$skill"
done
