# 61 - Customer Handoff Builder

Builds a recurring customer handoff packet from customer cases that need a shift or owner handoff.

## Skill Stack

```bash
npx clawhub@latest install slack
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Collects customer cases that need a shift or owner handoff from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a customer handoff packet for daily review

## Setup

```bash
export TEAM_SCOPE='handoff cases'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='7 13 * * 1-5'
export CRON_NAME='Customer Handoff Builder'
```

```bash
bash examples/runnable/61-customer-handoff-builder/scripts/check_prereqs.sh
bash examples/runnable/61-customer-handoff-builder/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the customer handoff packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- handoff completeness rate
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
