# 16 - Voice Notes to Tasks

Converts fresh voice notes into actionable, prioritized task queues.

## Skill Stack

```bash
openclaw skills install openai-whisper
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans an audio inbox for new notes
- Transcribes and summarizes each note
- Extracts tasks with owners, due dates, and confidence tags

## Setup

```bash
export SOURCE_DIR="$PWD/voice-inbox"
export MAX_FILES='10'
export TRANSCRIPT_LANGUAGE='en'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='*/30 8-20 * * 1-5'
export CRON_NAME='Voice Notes to Tasks'
```

```bash
bash examples/runnable/16-voice-notes-to-tasks/scripts/check_prereqs.sh
bash examples/runnable/16-voice-notes-to-tasks/scripts/install_cron.sh
```

## Smoke Test

1. Drop one short `.m4a` or `.wav` file in `SOURCE_DIR`.
2. Run the cron once manually.
3. Confirm transcription + extracted tasks are output with clear source mapping.

## KPI

- Capture-to-task conversion rate
- Task completion rate from audio-derived tasks
- Time saved on note processing

## Security Notes

- Process only trusted local files.
- Keep transcriptions in private channels/workspaces.

## Rollback

```bash
openclaw cron delete <job-id>
```
