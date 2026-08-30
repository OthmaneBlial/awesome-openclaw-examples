# 51 - Pipeline Hygiene Monitor

Builds a recurring pipeline hygiene queue from stale opportunities and missing pipeline next steps.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Pulls stale opportunities and missing pipeline next steps from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a pipeline hygiene queue for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='open pipeline'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='57 11 * * 1-5'
export CRON_NAME='Pipeline Hygiene Monitor'
```

```bash
bash examples/runnable/51-pipeline-hygiene-monitor/scripts/check_prereqs.sh
bash examples/runnable/51-pipeline-hygiene-monitor/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the pipeline hygiene queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- stale deals reduced
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
