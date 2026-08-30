# 06 - PDF Ops Desk

Automated document intake flow for PDF/audio-heavy operations.

## Skill Stack

```bash
openclaw skills install nano-pdf
openclaw skills install summarize
openclaw skills install openai-whisper
```

## What It Does

- Scans a working directory for new PDF/audio files
- Summarizes new documents
- Suggests edit actions for PDFs
- Transcribes audio notes and appends action items

## Setup

```bash
export SOURCE_DIR="$PWD/inbox"
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 10 * * 1-5'
export CRON_NAME='PDF Ops Desk'
```

```bash
bash examples/runnable/06-pdf-ops-desk/scripts/check_prereqs.sh
bash examples/runnable/06-pdf-ops-desk/scripts/install_cron.sh
```

## Smoke Test

1. Place one PDF in `SOURCE_DIR`.
2. Trigger the cron run manually.
3. Confirm summary + suggested edit instructions are produced.

## KPI

- Time from file arrival to reviewed summary
- Manual editing effort per document

## Security Notes

- Process only trusted files from controlled directories.
- Keep summaries in private channels if documents contain sensitive data.

## Rollback

```bash
openclaw cron delete <job-id>
```
