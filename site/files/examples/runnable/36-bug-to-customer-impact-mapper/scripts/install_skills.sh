#!/usr/bin/env bash
set -euo pipefail

for skill in github slack notion; do
  openclaw skills install "$skill"
done
