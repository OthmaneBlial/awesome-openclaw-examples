#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

SUPPORT_CHANNELS="${SUPPORT_CHANNELS:-support,urgent-support,vip-support}"
WINDOW_HOURS="${WINDOW_HOURS:-48}"
MAX_ESCALATIONS="${MAX_ESCALATIONS:-20}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-*/30 8-20 * * 1-5}"
CRON_NAME="${CRON_NAME:-Support Escalation Digest}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{SUPPORT_CHANNELS\}/$SUPPORT_CHANNELS}"
prompt="${prompt//\$\{WINDOW_HOURS\}/$WINDOW_HOURS}"
prompt="${prompt//\$\{MAX_ESCALATIONS\}/$MAX_ESCALATIONS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
