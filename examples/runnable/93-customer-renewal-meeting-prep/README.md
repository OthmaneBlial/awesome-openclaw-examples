# 93 - Customer Renewal Meeting Prep

Builds a recurring renewal prep packet from renewal meetings that need a concise prep packet.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Pulls renewal meetings that need a concise prep packet from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a renewal prep packet for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='renewal calls'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='51 13 * * 1-5'
export CRON_NAME='Customer Renewal Meeting Prep'
```

```bash
bash examples/runnable/93-customer-renewal-meeting-prep/scripts/check_prereqs.sh
bash examples/runnable/93-customer-renewal-meeting-prep/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the renewal prep packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- prep time per renewal call
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
