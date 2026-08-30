# 31 - Dependency Drift Watchtower

Builds a recurring prioritized dependency-risk queue from dependency updates and unresolved package drift.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans dependency updates and unresolved package drift across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a prioritized dependency-risk queue for operator review

## Setup

```bash
export TARGET_SCOPE='core services'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='37 15 * * 1-5'
export CRON_NAME='Dependency Drift Watchtower'
```

```bash
bash examples/runnable/31-dependency-drift-watchtower/scripts/check_prereqs.sh
bash examples/runnable/31-dependency-drift-watchtower/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the prioritized dependency-risk queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- vulnerable items older than SLA
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
