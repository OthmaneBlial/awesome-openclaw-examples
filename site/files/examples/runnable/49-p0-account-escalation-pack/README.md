# 49 - P0 Account Escalation Pack

Builds a recurring account rescue packet from priority accounts that require coordinated rescue action.

## Skill Stack

```bash
npx clawhub@latest install api-gateway
npx clawhub@latest install slack
npx clawhub@latest install notion
```

## What It Does

- Pulls priority accounts that require coordinated rescue action from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces an account rescue packet for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='tier-one accounts'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='43 * * * *'
export CRON_NAME='P0 Account Escalation Pack'
```

```bash
bash examples/runnable/49-p0-account-escalation-pack/scripts/check_prereqs.sh
bash examples/runnable/49-p0-account-escalation-pack/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the account rescue packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- intervention time for P0 accounts
- owner follow-up SLA
- coverage of high-value accounts

## Security Notes

- Keep account, pipeline, and commercial data in restricted channels only.
- Require human approval before any outbound customer or partner communication.

## Failure Modes

- Incomplete CRM or account data can hide risk or overstate opportunity.
- Outbound actions should remain draft-only until operators trust the ranking.

## Rollback

```bash
openclaw cron delete <job-id>
```
