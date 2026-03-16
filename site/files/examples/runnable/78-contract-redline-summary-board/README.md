# 78 - Contract Redline Summary Board

Builds a recurring contract redline board from contract redlines and changed clauses from reviewed documents.

## Skill Stack

```bash
npx clawhub@latest install nano-pdf
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Pulls contract redlines and changed clauses from reviewed documents from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces a contract redline board for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='active redlines'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='6 14 * * 4'
export CRON_NAME='Contract Redline Summary Board'
```

```bash
bash examples/runnable/78-contract-redline-summary-board/scripts/check_prereqs.sh
bash examples/runnable/78-contract-redline-summary-board/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the contract redline board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- review turnaround time
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
