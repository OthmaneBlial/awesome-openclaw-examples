# 23 - Invoice Follow-up Copilot

Flags overdue invoices and drafts context-aware follow-up actions.

## Skill Stack

```bash
npx clawhub@latest install stripe-api
npx clawhub@latest install gog
npx clawhub@latest install notion
```

## What It Does

- Pulls overdue/open invoice set
- Prioritizes by amount, aging, and account criticality
- Drafts follow-up tasks and communication outlines for review

## Setup

```bash
export MIN_OVERDUE_DAYS='7'
export MAX_CASES='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 11 * * 1-5'
export CRON_NAME='Invoice Follow-up Copilot'
```

```bash
bash examples/runnable/23-invoice-follow-up-copilot/scripts/check_prereqs.sh
bash examples/runnable/23-invoice-follow-up-copilot/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify overdue list includes amount, aging, and suggested action.
- Confirm no messages are sent automatically.

## KPI

- Overdue invoice count
- Average days overdue
- Collection cycle time

## Security Notes

- Keep billing data in restricted channels.
- Start in draft-only mode with human approval required.

## Rollback

```bash
openclaw cron delete <job-id>
```
