#!/usr/bin/env bash
set -euo pipefail

for skill in xquik-x-twitter-scraper tweetclaw summarize; do
  npx clawhub@latest install "$skill"
done
