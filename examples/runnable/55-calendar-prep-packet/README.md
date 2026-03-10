# 55 - Calendar Prep Packet

Builds a recurring calendar prep packet from next-day calendars, notes, and pre-read material.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install caldav-calendar
npx clawhub@latest install summarize
```

## What It Does

- Collects next-day calendars, notes, and pre-read material from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a calendar prep packet for daily review

## Setup

```bash
export TEAM_SCOPE='next-day meetings'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='25 15 * * 1-5'
export CRON_NAME='Calendar Prep Packet'
```

```bash
bash examples/runnable/55-calendar-prep-packet/scripts/check_prereqs.sh
bash examples/runnable/55-calendar-prep-packet/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the calendar prep packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- prep time per meeting
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
