# 24 - Lead Intake Router

Routes new leads by fit and urgency, with a clear follow-up queue.

## Skill Stack

```bash
openclaw skills install typeform
openclaw skills install notion
openclaw skills install slack
```

## What It Does

- Pulls recent lead submissions
- Applies fit-score routing logic
- Produces owner assignments and follow-up priority queue

## Setup

```bash
export MIN_SCORE='70'
export LOOKBACK_HOURS='24'
export ROUTING_TEAMS='enterprise,midmarket,self-serve'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='*/30 8-18 * * 1-5'
export CRON_NAME='Lead Intake Router'
```

```bash
bash examples/runnable/24-lead-intake-router/scripts/check_prereqs.sh
bash examples/runnable/24-lead-intake-router/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify top leads include score rationale and assigned owner/team.
- Confirm low-score leads are queued appropriately, not discarded silently.

## KPI

- Lead response time
- Qualified lead routing accuracy
- Conversion rate by routing bucket

## Security Notes

- Treat lead PII as sensitive and keep restricted.
- Use minimal form/workspace scopes.

## Rollback

```bash
openclaw cron delete <job-id>
```
