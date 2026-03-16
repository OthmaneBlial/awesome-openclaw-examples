# 82 - Board Packet Evidence Collector

Builds a recurring board evidence packet from board-prep evidence pulled from finance, product, and operations tools.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install gog
npx clawhub@latest install notion
npx clawhub@latest install summarize
```

## What It Does

- Pulls board-prep evidence pulled from finance, product, and operations tools from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces a board evidence packet for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='board prep'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='34 10 * * 3'
export CRON_NAME='Board Packet Evidence Collector'
```

```bash
bash examples/runnable/82-board-packet-evidence-collector/scripts/check_prereqs.sh
bash examples/runnable/82-board-packet-evidence-collector/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the board evidence packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- packet prep time
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
