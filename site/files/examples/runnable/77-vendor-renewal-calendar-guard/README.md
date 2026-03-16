# 77 - Vendor Renewal Calendar Guard

Builds a recurring vendor renewal alert brief from vendor renewals and upcoming commercial deadlines.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Pulls vendor renewals and upcoming commercial deadlines from finance and procurement systems
- Ranks exceptions by aging, value, and operational impact
- Produces a vendor renewal alert brief for controlled follow-up

## Setup

```bash
export ACCOUNT_SCOPE='vendor contracts'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='59 13 * * 3'
export CRON_NAME='Vendor Renewal Calendar Guard'
```

```bash
bash examples/runnable/77-vendor-renewal-calendar-guard/scripts/check_prereqs.sh
bash examples/runnable/77-vendor-renewal-calendar-guard/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the vendor renewal alert brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- surprise renewals prevented
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
