# 39 - Changelog-to-Customer Impact Mapper

Builds a recurring customer-impact release brief from recent changelog items with customer-facing consequences.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Scans recent changelog items with customer-facing consequences across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a customer-impact release brief for operator review

## Setup

```bash
export TARGET_SCOPE='current release'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='33 15 * * 5'
export CRON_NAME='Changelog-to-Customer Impact Mapper'
```

```bash
bash examples/runnable/39-changelog-to-customer-impact-mapper/scripts/check_prereqs.sh
bash examples/runnable/39-changelog-to-customer-impact-mapper/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the customer-impact release brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- release comms turnaround time
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
