# 76 - Recruiting Source Quality Digest

Builds a recurring source quality memo from candidate source performance and conversion quality.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Collects candidate source performance and conversion quality from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces a source quality memo for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='recruiting sources'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='52 12 * * 2'
export CRON_NAME='Recruiting Source Quality Digest'
```

```bash
bash examples/runnable/76-recruiting-source-quality-digest/scripts/check_prereqs.sh
bash examples/runnable/76-recruiting-source-quality-digest/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the source quality memo includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- interview-to-offer ratio by source
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
