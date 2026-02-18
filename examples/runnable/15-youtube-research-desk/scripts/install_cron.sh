#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

YOUTUBE_TOPIC="${YOUTUBE_TOPIC:-agentic automation}"
LOOKBACK_DAYS="${LOOKBACK_DAYS:-7}"
MAX_VIDEOS="${MAX_VIDEOS:-12}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-30 9 * * 1}"
CRON_NAME="${CRON_NAME:-YouTube Research Desk}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{YOUTUBE_TOPIC\}/$YOUTUBE_TOPIC}"
prompt="${prompt//\$\{LOOKBACK_DAYS\}/$LOOKBACK_DAYS}"
prompt="${prompt//\$\{MAX_VIDEOS\}/$MAX_VIDEOS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
