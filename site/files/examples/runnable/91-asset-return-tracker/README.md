# 91 - Asset Return Tracker

Builds a recurring asset return queue from offboarding tasks tied to returned devices and revoked access.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install todoist
openclaw skills install slack
```

## What It Does

- Collects offboarding tasks tied to returned devices and revoked access from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces an asset return queue for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='offboarding'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='37 11 * * 2'
export CRON_NAME='Asset Return Tracker'
```

```bash
bash examples/runnable/91-asset-return-tracker/scripts/check_prereqs.sh
bash examples/runnable/91-asset-return-tracker/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the asset return queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- asset return completion rate
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
