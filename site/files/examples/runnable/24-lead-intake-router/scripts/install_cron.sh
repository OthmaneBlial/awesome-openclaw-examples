#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

MIN_SCORE="${MIN_SCORE:-70}"
LOOKBACK_HOURS="${LOOKBACK_HOURS:-24}"
ROUTING_TEAMS="${ROUTING_TEAMS:-enterprise,midmarket,self-serve}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-*/30 8-18 * * 1-5}"
CRON_NAME="${CRON_NAME:-Lead Intake Router}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{MIN_SCORE\}/$MIN_SCORE}"
prompt="${prompt//\$\{LOOKBACK_HOURS\}/$LOOKBACK_HOURS}"
prompt="${prompt//\$\{ROUTING_TEAMS\}/$ROUTING_TEAMS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
