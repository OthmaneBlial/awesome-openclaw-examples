# 36 - Bug-to-Customer Impact Mapper

Builds a recurring customer-impact bug board from open bugs with customer-facing impact evidence.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install slack
npx clawhub@latest install notion
```

## What It Does

- Scans open bugs with customer-facing impact evidence across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a customer-impact bug board for operator review

## Setup

```bash
export TARGET_SCOPE='enterprise customer bugs'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='12 12 * * 1-5'
export CRON_NAME='Bug-to-Customer Impact Mapper'
```

```bash
bash examples/runnable/36-bug-to-customer-impact-mapper/scripts/check_prereqs.sh
bash examples/runnable/36-bug-to-customer-impact-mapper/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the customer-impact bug board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- customer-linked bugs surfaced
- triage latency
- repeat issue escape rate

## Security Notes

- Use read-only repository or analytics scopes for the first rollout.
- Deliver only to trusted engineering channels and require human review for follow-up writes.

## Failure Modes

- Missing repository scopes can hide critical context.
- Noisy data can over-rank low-value issues unless thresholds are tuned.

## Rollback

```bash
openclaw cron delete <job-id>
```
