#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

REPO="${REPO:-}"
CODE_PATHS="${CODE_PATHS:-src/,api/,sdk/}"
DOCS_PATH="${DOCS_PATH:-docs/}"
WINDOW_DAYS="${WINDOW_DAYS:-7}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-30 10 * * 1-5}"
CRON_NAME="${CRON_NAME:-Docs Drift Sentinel}"

[[ -n "$REPO" ]] || { echo "Set REPO=owner/repo"; exit 1; }
[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{REPO\}/$REPO}"
prompt="${prompt//\$\{CODE_PATHS\}/$CODE_PATHS}"
prompt="${prompt//\$\{DOCS_PATH\}/$DOCS_PATH}"
prompt="${prompt//\$\{WINDOW_DAYS\}/$WINDOW_DAYS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
