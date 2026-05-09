#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

TARGET_ACCOUNTS="${TARGET_ACCOUNTS:-@openclaw,@xquik}"
SEARCH_QUERIES="${SEARCH_QUERIES:-openclaw plugin,tweetclaw}"
LOOKBACK_HOURS="${LOOKBACK_HOURS:-24}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-30 13 * * 1-5}"
CRON_NAME="${CRON_NAME:-X/Twitter Ops Desk}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="$prompt_template"
prompt="${prompt//\$\{TARGET_ACCOUNTS\}/$TARGET_ACCOUNTS}"
prompt="${prompt//\$\{SEARCH_QUERIES\}/$SEARCH_QUERIES}"
prompt="${prompt//\$\{LOOKBACK_HOURS\}/$LOOKBACK_HOURS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
