#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

TARGET_SCOPE="${TARGET_SCOPE:-core services}"
LOOKBACK_DAYS="${LOOKBACK_DAYS:-7}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-37 15 * * 1-5}"
CRON_NAME="${CRON_NAME:-Dependency Drift Watchtower}"

[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="$prompt_template"
prompt="${prompt//\$\{TARGET_SCOPE\}/$TARGET_SCOPE}"
prompt="${prompt//\$\{LOOKBACK_DAYS\}/$LOOKBACK_DAYS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
