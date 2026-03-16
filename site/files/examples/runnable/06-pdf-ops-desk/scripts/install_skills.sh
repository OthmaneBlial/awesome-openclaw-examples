#!/usr/bin/env bash
set -euo pipefail

for skill in nano-pdf summarize openai-whisper; do
  npx clawhub@latest install "$skill"
done
