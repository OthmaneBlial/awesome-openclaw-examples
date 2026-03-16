# 40 - Hotfix Readiness Monitor

Builds a recurring hotfix readiness board from hotfix candidates, approvals, and deployment blockers.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Scans hotfix candidates, approvals, and deployment blockers across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a hotfix readiness board for operator review

## Setup

```bash
export TARGET_SCOPE='urgent fixes'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='40 */4 * * *'
export CRON_NAME='Hotfix Readiness Monitor'
```

```bash
bash examples/runnable/40-hotfix-readiness-monitor/scripts/check_prereqs.sh
bash examples/runnable/40-hotfix-readiness-monitor/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the hotfix readiness board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- time to hotfix ship
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
