# 97 - Board Question Tracker

Builds a recurring board question queue from open board questions and unanswered follow-ups.

## Skill Stack

```bash
npx clawhub@latest install notion
npx clawhub@latest install todoist
npx clawhub@latest install slack
npx clawhub@latest install summarize
```

## What It Does

- Pulls open board questions and unanswered follow-ups from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces a board question queue for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='board prep'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='19 9 * * 3'
export CRON_NAME='Board Question Tracker'
```

```bash
bash examples/runnable/97-board-question-tracker/scripts/check_prereqs.sh
bash examples/runnable/97-board-question-tracker/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the board question queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- questions closed before board meeting
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
