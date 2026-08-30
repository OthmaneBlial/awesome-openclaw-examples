# 34 - Codeowners Coverage Sentinel

Builds a recurring ownership gap report from changed paths without clear code ownership.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Scans changed paths without clear code ownership across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces an ownership gap report for operator review

## Setup

```bash
export TARGET_SCOPE='backend and platform repos'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='58 10 * * 1-5'
export CRON_NAME='Codeowners Coverage Sentinel'
```

```bash
bash examples/runnable/34-codeowners-coverage-sentinel/scripts/check_prereqs.sh
bash examples/runnable/34-codeowners-coverage-sentinel/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the ownership gap report includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- unowned changed paths
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
