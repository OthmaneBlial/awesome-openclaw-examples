#!/usr/bin/env bash
set -euo pipefail

for skill in notion slack summarize gog; do
  npx clawhub@latest install "$skill"
done
