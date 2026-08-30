#!/usr/bin/env bash
set -euo pipefail

for skill in typeform slack todoist; do
  openclaw skills install "$skill"
done
