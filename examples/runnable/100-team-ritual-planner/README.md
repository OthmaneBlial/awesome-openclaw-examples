# 100 - Team Ritual Planner

Builds a recurring team ritual packet from team rituals, meeting hygiene, and operating cadence signals.

## Skill Stack

```bash
openclaw skills install caldav-calendar
openclaw skills install gog
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Collects team rituals, meeting hygiene, and operating cadence signals from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces a team ritual packet for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='team cadence'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='40 12 * * 1'
export CRON_NAME='Team Ritual Planner'
```

```bash
bash examples/runnable/100-team-ritual-planner/scripts/check_prereqs.sh
bash examples/runnable/100-team-ritual-planner/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the team ritual packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- ritual attendance consistency
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
