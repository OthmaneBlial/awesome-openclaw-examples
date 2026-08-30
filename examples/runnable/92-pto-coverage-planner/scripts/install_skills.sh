#!/usr/bin/env bash
set -euo pipefail

for skill in gog caldav-calendar summarize slack; do
  openclaw skills install "$skill"
done
