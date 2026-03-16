# 44 - Expansion Opportunity Brief

Builds a recurring expansion shortlist brief from accounts with clear expansion or upsell signals.

## Skill Stack

```bash
npx clawhub@latest install api-gateway
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Pulls accounts with clear expansion or upsell signals from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces an expansion shortlist brief for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='growth accounts'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='8 12 * * 1-5'
export CRON_NAME='Expansion Opportunity Brief'
```

```bash
bash examples/runnable/44-expansion-opportunity-brief/scripts/check_prereqs.sh
bash examples/runnable/44-expansion-opportunity-brief/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the expansion shortlist brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- expansion leads accepted by CS
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
