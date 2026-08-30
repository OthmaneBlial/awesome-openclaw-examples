#!/usr/bin/env bash
set -euo pipefail

for skill in openai-whisper summarize notion; do
  openclaw skills install "$skill"
done
