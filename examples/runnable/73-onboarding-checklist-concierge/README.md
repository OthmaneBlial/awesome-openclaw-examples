# 73 - Onboarding Checklist Concierge

Builds a recurring onboarding readiness digest from new-hire onboarding tasks and readiness checks.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install todoist
npx clawhub@latest install slack
```

## What It Does

- Collects new-hire onboarding tasks and readiness checks from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces an onboarding readiness digest for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='new hires'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='31 9 * * 4'
export CRON_NAME='Onboarding Checklist Concierge'
```

```bash
bash examples/runnable/73-onboarding-checklist-concierge/scripts/check_prereqs.sh
bash examples/runnable/73-onboarding-checklist-concierge/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the onboarding readiness digest includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- onboarding tasks completed on time
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
