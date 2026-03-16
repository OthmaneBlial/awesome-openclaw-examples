#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

SIGNAL_QUERY="${SIGNAL_QUERY:-openclaw agents automation roadmap}"
LOOKBACK_DAYS="${LOOKBACK_DAYS:-7}"
MAX_SIGNALS="${MAX_SIGNALS:-30}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-30 9 * * 1}"
CRON_NAME="${CRON_NAME:-Roadmap Signal Board}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{SIGNAL_QUERY\}/$SIGNAL_QUERY}"
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
