#!/usr/bin/env bash
set -euo pipefail

for skill in caldav-calendar gog summarize; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
