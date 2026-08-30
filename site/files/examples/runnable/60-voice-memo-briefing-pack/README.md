# 60 - Voice Memo Briefing Pack

Builds a recurring voice memo briefing packet from voice memos that need conversion into a clean briefing.

## Skill Stack

```bash
openclaw skills install openai-whisper
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Collects voice memos that need conversion into a clean briefing from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a voice memo briefing packet for daily review

## Setup

```bash
export TEAM_SCOPE='voice inbox'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 12 * * 1-5'
export CRON_NAME='Voice Memo Briefing Pack'
```

```bash
bash examples/runnable/60-voice-memo-briefing-pack/scripts/check_prereqs.sh
bash examples/runnable/60-voice-memo-briefing-pack/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the voice memo briefing packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- note-to-action turnaround
- time-to-intervention
- false-positive rate

## Security Notes

- Keep customer or internal operations content in trusted workspaces only.
- Start in draft-only mode and avoid automatic replies until operators trust the workflow.

## Failure Modes

- Stale inbox or task sync can surface outdated items.
- Low-quality inputs can create false urgency without a human review step.

## Rollback

```bash
openclaw cron delete <job-id>
```
