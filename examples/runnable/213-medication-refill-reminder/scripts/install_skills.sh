#!/usr/bin/env bash
set -euo pipefail

for skill in gog caldav-calendar todoist; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
