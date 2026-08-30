#!/usr/bin/env bash
set -euo pipefail

for skill in gog nano-pdf notion; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
