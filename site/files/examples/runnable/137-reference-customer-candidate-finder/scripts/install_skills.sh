#!/usr/bin/env bash
set -euo pipefail

for skill in api-gateway gog notion; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
