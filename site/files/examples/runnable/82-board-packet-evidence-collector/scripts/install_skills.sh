#!/usr/bin/env bash
set -euo pipefail

for skill in github gog notion summarize; do
  npx clawhub@latest install "$skill"
done
