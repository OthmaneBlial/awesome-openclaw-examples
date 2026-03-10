#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

TEAM_SCOPE="${TEAM_SCOPE:-team cadence}"
MAX_ITEMS="${MAX_ITEMS:-20}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-40 12 * * 1}"
CRON_NAME="${CRON_NAME:-Team Ritual Planner}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="$prompt_template"
prompt="${prompt//\$\{TEAM_SCOPE\}/$TEAM_SCOPE}"
prompt="${prompt//\$\{MAX_ITEMS\}/$MAX_ITEMS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
