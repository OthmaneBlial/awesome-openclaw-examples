# 47 - Champion Change Detector

Builds a recurring champion-change alert brief from stakeholder or champion changes inside active accounts.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Pulls stakeholder or champion changes inside active accounts from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a champion-change alert brief for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='strategic accounts'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='29 15 * * 1-5'
export CRON_NAME='Champion Change Detector'
```

```bash
bash examples/runnable/47-champion-change-detector/scripts/check_prereqs.sh
bash examples/runnable/47-champion-change-detector/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the champion-change alert brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- accounts with owner change detected
- owner follow-up SLA
- coverage of high-value accounts

## Security Notes

- Keep account, pipeline, and commercial data in restricted channels only.
- Require human approval before any outbound customer or partner communication.

## Failure Modes

- Incomplete CRM or account data can hide risk or overstate opportunity.
- Outbound actions should remain draft-only until operators trust the ranking.

## Rollback

```bash
openclaw cron delete <job-id>
```
