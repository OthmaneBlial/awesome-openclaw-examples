#!/usr/bin/env bash
set -euo pipefail

for skill in openai-whisper summarize todoist; do
  npx clawhub@latest install "$skill"
done
