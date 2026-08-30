#!/usr/bin/env bash
set -euo pipefail

for skill in gog caldav-calendar summarize todoist; do
  openclaw skills install "$skill"
done
