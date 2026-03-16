#!/usr/bin/env bash
set -euo pipefail

for skill in typeform slack todoist; do
  npx clawhub@latest install "$skill"
done
