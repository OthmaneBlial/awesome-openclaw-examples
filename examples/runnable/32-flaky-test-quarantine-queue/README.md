# 32 - Flaky Test Quarantine Queue

Builds a recurring quarantine-ready flake queue from failing and rerun-prone test signals.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans failing and rerun-prone test signals across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a quarantine-ready flake queue for operator review

## Setup

```bash
export TARGET_SCOPE='ci pipelines'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='44 * * * *'
export CRON_NAME='Flaky Test Quarantine Queue'
```

```bash
bash examples/runnable/32-flaky-test-quarantine-queue/scripts/check_prereqs.sh
bash examples/runnable/32-flaky-test-quarantine-queue/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the quarantine-ready flake queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- repeat flakes resolved per week
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
