# 57 - Task Debt Rollover Digest

Builds a recurring task rollover digest from overdue tasks and unfinished carry-over work.

## Skill Stack

```bash
npx clawhub@latest install todoist
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Collects overdue tasks and unfinished carry-over work from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a task rollover digest for daily review

## Setup

```bash
export TEAM_SCOPE='execution backlog'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='39 9 * * 1-5'
export CRON_NAME='Task Debt Rollover Digest'
```

```bash
bash examples/runnable/57-task-debt-rollover-digest/scripts/check_prereqs.sh
bash examples/runnable/57-task-debt-rollover-digest/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the task rollover digest includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- overdue task reduction
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
