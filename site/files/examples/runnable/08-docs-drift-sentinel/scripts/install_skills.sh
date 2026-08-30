#!/usr/bin/env bash
set -euo pipefail

for skill in github notion; do
  openclaw skills install "$skill"
done
