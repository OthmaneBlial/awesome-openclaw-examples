# 72 - Hiring Pipeline Stall Radar

Builds a recurring hiring stall queue from hiring pipeline stages that are going stale.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install todoist
openclaw skills install slack
```

## What It Does

- Collects hiring pipeline stages that are going stale from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces a hiring stall queue for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='active hiring'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='24 8 * * 1-5'
export CRON_NAME='Hiring Pipeline Stall Radar'
```

```bash
bash examples/runnable/72-hiring-pipeline-stall-radar/scripts/check_prereqs.sh
bash examples/runnable/72-hiring-pipeline-stall-radar/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the hiring stall queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- stage stall duration
- cycle time
- completion rate

## Security Notes

- Limit access to candidate and employee data to approved people-ops spaces.
- Avoid storing sensitive hiring or personnel details in broad delivery channels.

## Failure Modes

- Incomplete notes or scorecards can weaken prioritization.
- Sensitive people data should never be sent to broad channels.

## Rollback

```bash
openclaw cron delete <job-id>
```
