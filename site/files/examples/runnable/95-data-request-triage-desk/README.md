# 95 - Data Request Triage Desk

Builds a recurring data request queue from data access or export requests entering the queue.

## Skill Stack

```bash
openclaw skills install typeform
openclaw skills install notion
openclaw skills install slack
openclaw skills install summarize
```

## What It Does

- Pulls data access or export requests entering the queue from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces a data request queue for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='data requests'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='5 15 * * 1-5'
export CRON_NAME='Data Request Triage Desk'
```

```bash
bash examples/runnable/95-data-request-triage-desk/scripts/check_prereqs.sh
bash examples/runnable/95-data-request-triage-desk/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the data request queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- request fulfillment lead time
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
