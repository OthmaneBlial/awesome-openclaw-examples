# 58 - Approval Exception Queue

Builds a recurring approval exception board from approvals that are stalled or missing context.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Collects approvals that are stalled or missing context from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces an approval exception board for daily review

## Setup

```bash
export TEAM_SCOPE='cross-functional approvals'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='46 10 * * 1-5'
export CRON_NAME='Approval Exception Queue'
```

```bash
bash examples/runnable/58-approval-exception-queue/scripts/check_prereqs.sh
bash examples/runnable/58-approval-exception-queue/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the approval exception board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- approval cycle time
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
