# 33 - Release Train Risk Board

Builds a recurring release readiness board from release blockers, merge risk, and cutover readiness.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Scans release blockers, merge risk, and cutover readiness across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a release readiness board for operator review

## Setup

```bash
export TARGET_SCOPE='release train'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='51 9,14 * * 1-5'
export CRON_NAME='Release Train Risk Board'
```

```bash
bash examples/runnable/33-release-train-risk-board/scripts/check_prereqs.sh
bash examples/runnable/33-release-train-risk-board/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the release readiness board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- blocked release items older than 24h
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
