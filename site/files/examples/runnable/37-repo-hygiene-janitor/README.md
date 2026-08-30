# 37 - Repo Hygiene Janitor

Builds a recurring maintenance backlog queue from stale branches, issues, and neglected maintenance tasks.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans stale branches, issues, and neglected maintenance tasks across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a maintenance backlog queue for operator review

## Setup

```bash
export TARGET_SCOPE='main engineering repositories'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='19 13 * * 3'
export CRON_NAME='Repo Hygiene Janitor'
```

```bash
bash examples/runnable/37-repo-hygiene-janitor/scripts/check_prereqs.sh
bash examples/runnable/37-repo-hygiene-janitor/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the maintenance backlog queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- hygiene backlog burn-down
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
