#!/usr/bin/env bash
set -euo pipefail

for skill in gog caldav-calendar summarize; do
  npx clawhub@latest install "$skill"
done
