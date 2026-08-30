#!/usr/bin/env bash
set -euo pipefail

for skill in gog todoist slack; do
  openclaw skills install "$skill"
done
