# 74 - Policy Acknowledgment Tracker

Builds a recurring policy acknowledgment queue from missing policy acknowledgments and stale compliance tasks.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Collects missing policy acknowledgments and stale compliance tasks from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces a policy acknowledgment queue for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='people policies'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='38 10 * * 5'
export CRON_NAME='Policy Acknowledgment Tracker'
```

```bash
bash examples/runnable/74-policy-acknowledgment-tracker/scripts/check_prereqs.sh
bash examples/runnable/74-policy-acknowledgment-tracker/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the policy acknowledgment queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- overdue acknowledgments
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
