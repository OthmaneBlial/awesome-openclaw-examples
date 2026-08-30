# 79 - Procurement Intake Scorer

Builds a recurring procurement intake queue from incoming procurement requests and fit/risk details.

## Skill Stack

```bash
openclaw skills install typeform
openclaw skills install notion
openclaw skills install slack
```

## What It Does

- Pulls incoming procurement requests and fit/risk details from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces a procurement intake queue for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='procurement intake'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='13 15 * * 1-5'
export CRON_NAME='Procurement Intake Scorer'
```

```bash
bash examples/runnable/79-procurement-intake-scorer/scripts/check_prereqs.sh
bash examples/runnable/79-procurement-intake-scorer/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the procurement intake queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- procurement cycle time
- exception aging
- manual review time

## Security Notes

- Keep billing, procurement, and board-prep data in restricted channels only.
- Require human approval for any outbound or system-changing action tied to money or contracts.

## Failure Modes

- Partial source data can distort value or aging calculations.
- Approval and contract workflows should remain human-controlled.

## Rollback

```bash
openclaw cron delete <job-id>
```
