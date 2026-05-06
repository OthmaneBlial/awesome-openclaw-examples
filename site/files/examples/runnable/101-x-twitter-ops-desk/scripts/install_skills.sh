#!/usr/bin/env bash
set -euo pipefail

for skill in tweetclaw summarize; do
  npx clawhub@latest install "$skill"
done
