# 75 - Interview Prep Brief

Builds a recurring interview prep packet from interview panels and candidate context for upcoming interviews.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Collects interview panels and candidate context for upcoming interviews from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces an interview prep packet for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='upcoming interviews'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='45 11 * * 1-5'
export CRON_NAME='Interview Prep Brief'
```

```bash
bash examples/runnable/75-interview-prep-brief/scripts/check_prereqs.sh
bash examples/runnable/75-interview-prep-brief/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the interview prep packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- prep time per interview
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
