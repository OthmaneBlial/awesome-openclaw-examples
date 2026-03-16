#!/usr/bin/env bash
set -euo pipefail

for skill in typeform notion slack summarize; do
  npx clawhub@latest install "$skill"
done
