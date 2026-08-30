#!/usr/bin/env bash
set -euo pipefail

for skill in summarize notion openai-whisper; do
  openclaw skills verify "$skill"
  openclaw skills install "$skill"
done
