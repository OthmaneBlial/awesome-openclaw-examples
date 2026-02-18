#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

REPO="${REPO:-}"
SHIFT_WINDOW_HOURS="${SHIFT_WINDOW_HOURS:-12}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-0 */12 * * *}"
CRON_NAME="${CRON_NAME:-On-call Handoff Builder}"

[[ -n "$REPO" ]] || { echo "Set REPO=owner/repo"; exit 1; }
[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{REPO\}/$REPO}"
prompt="${prompt//\$\{SHIFT_WINDOW_HOURS\}/$SHIFT_WINDOW_HOURS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
