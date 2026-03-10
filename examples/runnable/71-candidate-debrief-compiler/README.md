# 71 - Candidate Debrief Compiler

Builds a recurring candidate debrief brief from candidate interviews, notes, and scorecard signals.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Collects candidate interviews, notes, and scorecard signals from people workflows
- Flags delays, readiness gaps, and coordination risk
- Produces a candidate debrief brief for hiring or people leads

## Setup

```bash
export TEAM_SCOPE='candidate pipeline'
export MAX_ITEMS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='17 15 * * 1-5'
export CRON_NAME='Candidate Debrief Compiler'
```

```bash
bash examples/runnable/71-candidate-debrief-compiler/scripts/check_prereqs.sh
bash examples/runnable/71-candidate-debrief-compiler/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the candidate debrief brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- interviewer recap latency
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
