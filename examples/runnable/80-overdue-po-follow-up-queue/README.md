# 80 - Overdue PO Follow-up Queue

Builds a recurring overdue PO queue from purchase orders that are overdue or blocked.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install todoist
npx clawhub@latest install slack
```

## What It Does

- Pulls purchase orders that are overdue or blocked from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces an overdue PO queue for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='purchase orders'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='20 8 * * 1-5'
export CRON_NAME='Overdue PO Follow-up Queue'
```

```bash
bash examples/runnable/80-overdue-po-follow-up-queue/scripts/check_prereqs.sh
bash examples/runnable/80-overdue-po-follow-up-queue/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the overdue PO queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- overdue PO backlog
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
