# 62 - Daily Operating Memo

Builds a recurring daily operating memo from daily operating signals across schedule, tasks, and delivery.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install github
npx clawhub@latest install todoist
npx clawhub@latest install slack
```

## What It Does

- Collects daily operating signals across schedule, tasks, and delivery from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a daily operating memo for daily review

## Setup

```bash
export TEAM_SCOPE='daily operations'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='14 14 * * 1-5'
export CRON_NAME='Daily Operating Memo'
```

```bash
bash examples/runnable/62-daily-operating-memo/scripts/check_prereqs.sh
bash examples/runnable/62-daily-operating-memo/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the daily operating memo includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- time spent building daily brief
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
