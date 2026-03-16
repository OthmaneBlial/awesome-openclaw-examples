# 50 - Invoice Dispute Summarizer

Builds a recurring invoice dispute board from invoice disputes, aging, and context from billing systems.

## Skill Stack

```bash
npx clawhub@latest install stripe-api
npx clawhub@latest install gog
npx clawhub@latest install notion
```

## What It Does

- Pulls invoice disputes, aging, and context from billing systems from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces an invoice dispute board for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='overdue invoices'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='50 10 * * 1-5'
export CRON_NAME='Invoice Dispute Summarizer'
```

```bash
bash examples/runnable/50-invoice-dispute-summarizer/scripts/check_prereqs.sh
bash examples/runnable/50-invoice-dispute-summarizer/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the invoice dispute board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- dispute resolution time
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
