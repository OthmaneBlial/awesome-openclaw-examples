#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"
WORKFLOW_SCOPE="${WORKFLOW_SCOPE:-demo workspace}"
SOURCE_WINDOW="${SOURCE_WINDOW:-last 7 days}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-0 9 * * 1-5}"
CRON_NAME="${CRON_NAME:-Recognition Roundup}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }
[[ -f "$PROMPT_FILE" ]] || { echo "Prompt file not found: $PROMPT_FILE"; exit 1; }

prompt_template="$(<"$PROMPT_FILE")"
prompt="${prompt_template//{{WORKFLOW_SCOPE}}/$WORKFLOW_SCOPE}"
prompt="${prompt//{{SOURCE_WINDOW}}/$SOURCE_WINDOW}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME (241-recognition-roundup)"
