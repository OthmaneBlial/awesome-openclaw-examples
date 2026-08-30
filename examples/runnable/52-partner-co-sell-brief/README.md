# 52 - Partner Co-sell Brief

Builds a recurring partner co-sell brief from partner motions that need a co-sell update.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Pulls partner motions that need a co-sell update from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a partner co-sell brief for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='active partners'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='4 12 * * 3'
export CRON_NAME='Partner Co-sell Brief'
```

```bash
bash examples/runnable/52-partner-co-sell-brief/scripts/check_prereqs.sh
bash examples/runnable/52-partner-co-sell-brief/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the partner co-sell brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- partner update prep time
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
