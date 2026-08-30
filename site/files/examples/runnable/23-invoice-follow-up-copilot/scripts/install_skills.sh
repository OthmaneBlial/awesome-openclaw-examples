#!/usr/bin/env bash
set -euo pipefail

for skill in stripe-api gog notion; do
  openclaw skills install "$skill"
done
