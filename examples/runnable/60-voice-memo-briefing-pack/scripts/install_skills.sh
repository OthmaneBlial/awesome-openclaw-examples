#!/usr/bin/env bash
set -euo pipefail

for skill in openai-whisper summarize notion; do
  npx clawhub@latest install "$skill"
done
