#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROMPT_FILE="${PROMPT_FILE:-$ROOT/prompts/cron_prompt.txt}"

REPO="${REPO:-}"
SINCE_WINDOW="${SINCE_WINDOW:-7 days ago}"
CHANGELOG_SECTIONS="${CHANGELOG_SECTIONS:-features,fixes,docs,internal,breaking}"
DELIVERY_CHANNEL="${DELIVERY_CHANNEL:-slack}"
DELIVERY_TARGET="${DELIVERY_TARGET:-}"
CRON_EXPR="${CRON_EXPR:-0 15 * * 5}"
CRON_NAME="${CRON_NAME:-Product Changelog Curator}"

[[ -n "$REPO" ]] || { echo "Set REPO=owner/repo"; exit 1; }
[[ -n "$DELIVERY_TARGET" ]] || { echo "Set DELIVERY_TARGET"; exit 1; }

prompt_template="$(cat "$PROMPT_FILE")"
prompt="${prompt_template//\$\{REPO\}/$REPO}"
prompt="${prompt//\$\{SINCE_WINDOW\}/$SINCE_WINDOW}"
prompt="${prompt//\$\{CHANGELOG_SECTIONS\}/$CHANGELOG_SECTIONS}"

openclaw cron add \
  --name "$CRON_NAME" \
  --cron "$CRON_EXPR" \
  --session isolated \
  --message "$prompt" \
  --announce \
  --channel "$DELIVERY_CHANNEL" \
  --to "$DELIVERY_TARGET"

echo "Installed: $CRON_NAME"
