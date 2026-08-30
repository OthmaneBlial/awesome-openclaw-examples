#!/usr/bin/env bash
set -euo pipefail

for skill in xquik-x-twitter-scraper tweetclaw; do
  openclaw skills install "$skill"
done
