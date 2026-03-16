#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

SOURCE_DIR="${SOURCE_DIR:-$PWD/voice-inbox}"
MAX_FILES="${MAX_FILES:-10}"
TRANSCRIPT_LANGUAGE="${TRANSCRIPT_LANGUAGE:-en}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-*/30 8-20 * * 1-5}"
CRON_NAME="${CRON_NAME:-Voice Notes to Tasks}"

[[ -d "$SOURCE_DIR" ]] || { echo "SOURCE_DIR does not exist: $SOURCE_DIR"; exit 1; }
[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{SOURCE_DIR\}/$SOURCE_DIR}"
prompt="${prompt//\$\{MAX_FILES\}/$MAX_FILES}"
prompt="${prompt//\$\{TRANSCRIPT_LANGUAGE\}/$TRANSCRIPT_LANGUAGE}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
