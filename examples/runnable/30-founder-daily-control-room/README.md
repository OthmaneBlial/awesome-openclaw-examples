# 30 - Founder Daily Control Room

Daily executive operating brief across product, operations, and scheduling.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install github
openclaw skills install todoist
openclaw skills install weather
```

## What It Does

- Aggregates top priorities from email, calendar, repo, and tasks
- Highlights strategic risks, blockers, and deadlines
- Produces a compact daily control-room brief

## Setup

```bash
export PRIORITY_FOCUS='product launch'
export LOCATION='San Francisco, CA'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 7 * * 1-5'
export CRON_NAME='Founder Daily Control Room'
```

```bash
bash examples/runnable/30-founder-daily-control-room/scripts/check_prereqs.sh
bash examples/runnable/30-founder-daily-control-room/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify brief includes priorities, risks, calendar conflicts, and task focus.
- Confirm recommendations remain concise and actionable.

## KPI

- Daily priority completion rate
- Time spent assembling executive context
- Escaped high-priority misses

## Security Notes

- Keep founder brief in private channels only.
- Minimize broad sharing of combined operational context.

## Rollback

```bash
openclaw cron delete <job-id>
```
