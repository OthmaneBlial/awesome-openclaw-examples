# 43 - Renewal Risk Explainer

Builds a recurring renewal risk brief from renewal accounts showing health or adoption decline.

## Skill Stack

```bash
openclaw skills install api-gateway
openclaw skills install notion
openclaw skills install slack
```

## What It Does

- Pulls renewal accounts showing health or adoption decline from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a renewal risk brief for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='enterprise renewals'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='1 11 * * 1-5'
export CRON_NAME='Renewal Risk Explainer'
```

```bash
bash examples/runnable/43-renewal-risk-explainer/scripts/check_prereqs.sh
bash examples/runnable/43-renewal-risk-explainer/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the renewal risk brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- early-risk coverage
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
