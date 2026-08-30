#!/usr/bin/env bash
set -euo pipefail

for skill in gog github todoist slack; do
  openclaw skills install "$skill"
done
