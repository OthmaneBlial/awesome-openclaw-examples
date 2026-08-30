#!/usr/bin/env bash
set -euo pipefail

for skill in gog caldav-calendar summarize; do
  openclaw skills install "$skill"
done
