# 81 - Expense Exception Digest

Builds a recurring expense exception digest from spend or expense exceptions that need review.

## Skill Stack

```bash
npx clawhub@latest install api-gateway
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Pulls spend or expense exceptions that need review from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces an expense exception digest for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='spend review'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='27 9 * * 2'
export CRON_NAME='Expense Exception Digest'
```

```bash
bash examples/runnable/81-expense-exception-digest/scripts/check_prereqs.sh
bash examples/runnable/81-expense-exception-digest/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the expense exception digest includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- exception review time
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
