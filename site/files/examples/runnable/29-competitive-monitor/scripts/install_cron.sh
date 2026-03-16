#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

COMPETITOR_QUERY="${COMPETITOR_QUERY:-agent automation platform pricing launch}"
LOOKBACK_DAYS="${LOOKBACK_DAYS:-7}"
MAX_SIGNALS="${MAX_SIGNALS:-40}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-0 8 * * 1}"
CRON_NAME="${CRON_NAME:-Competitive Monitor}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{COMPETITOR_QUERY\}/$COMPETITOR_QUERY}"
prompt="${prompt//\$\{LOOKBACK_DAYS\}/$LOOKBACK_DAYS}"
prompt="${prompt//\$\{MAX_SIGNALS\}/$MAX_SIGNALS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
