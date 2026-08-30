# 92 - PTO Coverage Planner

Builds a recurring PTO coverage packet from planned PTO overlap and missing coverage signals.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install caldav-calendar
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Collects planned PTO overlap and missing coverage signals from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces a PTO coverage packet for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='team calendars'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='44 12 * * 3'
export CRON_NAME='PTO Coverage Planner'
```

```bash
bash examples/runnable/92-pto-coverage-planner/scripts/check_prereqs.sh
bash examples/runnable/92-pto-coverage-planner/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the PTO coverage packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- uncovered time blocks
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
