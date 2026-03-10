#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

ACCOUNT_SCOPE="${ACCOUNT_SCOPE:-purchase orders}"
MAX_ITEMS="${MAX_ITEMS:-20}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-20 8 * * 1-5}"
CRON_NAME="${CRON_NAME:-Overdue PO Follow-up Queue}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="$prompt_template"
prompt="${prompt//\$\{ACCOUNT_SCOPE\}/$ACCOUNT_SCOPE}"
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
