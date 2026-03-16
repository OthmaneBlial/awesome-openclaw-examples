# 45 - Trial-to-Paid Nudger

Builds a recurring trial conversion follow-up queue from trial accounts nearing conversion deadlines.

## Skill Stack

```bash
npx clawhub@latest install typeform
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Pulls trial accounts nearing conversion deadlines from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a trial conversion follow-up queue for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='self-serve trials'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='15 13 * * 1-5'
export CRON_NAME='Trial-to-Paid Nudger'
```

```bash
bash examples/runnable/45-trial-to-paid-nudger/scripts/check_prereqs.sh
bash examples/runnable/45-trial-to-paid-nudger/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the trial conversion follow-up queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- trial conversion rate
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
