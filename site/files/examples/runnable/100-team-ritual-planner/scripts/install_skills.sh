#!/usr/bin/env bash
set -euo pipefail

for skill in caldav-calendar gog summarize slack; do
  npx clawhub@latest install "$skill"
done
