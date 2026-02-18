#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

LOOKAHEAD_DAYS="${LOOKAHEAD_DAYS:-14}"
MIN_BUFFER_MINUTES="${MIN_BUFFER_MINUTES:-15}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-15 7 * * 1-5}"
CRON_NAME="${CRON_NAME:-Calendar Conflict Resolver}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{LOOKAHEAD_DAYS\}/$LOOKAHEAD_DAYS}"
prompt="${prompt//\$\{MIN_BUFFER_MINUTES\}/$MIN_BUFFER_MINUTES}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
