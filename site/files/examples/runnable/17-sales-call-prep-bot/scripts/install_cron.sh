#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

LOOKAHEAD_HOURS="${LOOKAHEAD_HOURS:-48}"
TARGET_SEGMENT="${TARGET_SEGMENT:-enterprise}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-0 7 * * 1-5}"
CRON_NAME="${CRON_NAME:-Sales Call Prep Bot}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{LOOKAHEAD_HOURS\}/$LOOKAHEAD_HOURS}"
prompt="${prompt//\$\{TARGET_SEGMENT\}/$TARGET_SEGMENT}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
