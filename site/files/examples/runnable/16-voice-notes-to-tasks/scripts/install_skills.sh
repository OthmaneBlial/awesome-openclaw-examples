#!/usr/bin/env bash
set -euo pipefail

for skill in openai-whisper summarize todoist; do
  openclaw skills install "$skill"
done
