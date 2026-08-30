#!/usr/bin/env bash
set -euo pipefail

for skill in api-gateway slack notion; do
  openclaw skills install "$skill"
done
