# 48 - Meeting Follow-up Enforcer

Builds a recurring meeting follow-up queue from sales meetings missing explicit follow-up ownership.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install todoist
openclaw skills install summarize
```

## What It Does

- Pulls sales meetings missing explicit follow-up ownership from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a meeting follow-up queue for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='active deals'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='36 8 * * 1-5'
export CRON_NAME='Meeting Follow-up Enforcer'
```

```bash
bash examples/runnable/48-meeting-follow-up-enforcer/scripts/check_prereqs.sh
bash examples/runnable/48-meeting-follow-up-enforcer/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the meeting follow-up queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- follow-up SLA adherence
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
