#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

ACCOUNT_SEGMENT="${ACCOUNT_SEGMENT:-renewal calls}"
MAX_ITEMS="${MAX_ITEMS:-25}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-51 13 * * 1-5}"
CRON_NAME="${CRON_NAME:-Customer Renewal Meeting Prep}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="$prompt_template"
prompt="${prompt//\$\{ACCOUNT_SEGMENT\}/$ACCOUNT_SEGMENT}"
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
