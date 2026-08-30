#!/usr/bin/env bash
set -euo pipefail

for skill in nano-pdf summarize openai-whisper; do
  openclaw skills install "$skill"
done
