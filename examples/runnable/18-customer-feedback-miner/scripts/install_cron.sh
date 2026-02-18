#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

FEEDBACK_CHANNELS="${FEEDBACK_CHANNELS:-support,product-feedback,customer-success}"
WINDOW_HOURS="${WINDOW_HOURS:-168}"
MIN_MENTIONS="${MIN_MENTIONS:-3}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-0 10 * * 1}"
CRON_NAME="${CRON_NAME:-Customer Feedback Miner}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{FEEDBACK_CHANNELS\}/$FEEDBACK_CHANNELS}"
prompt="${prompt//\$\{WINDOW_HOURS\}/$WINDOW_HOURS}"
prompt="${prompt//\$\{MIN_MENTIONS\}/$MIN_MENTIONS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
