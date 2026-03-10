# 94 - Product Launch Readiness Board

Builds a recurring launch readiness board from launch blockers, approvals, and readiness signals.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install notion
npx clawhub@latest install slack
npx clawhub@latest install summarize
```

## What It Does

- Gathers launch blockers, approvals, and readiness signals from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a launch readiness board ready for review

## Setup

```bash
export TOPIC_SCOPE='launch week'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='58 14 * * 1-5'
export CRON_NAME='Product Launch Readiness Board'
```

```bash
bash examples/runnable/94-product-launch-readiness-board/scripts/check_prereqs.sh
bash examples/runnable/94-product-launch-readiness-board/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the launch readiness board includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- launch blocker burn-down
- time-to-brief
- follow-up conversion rate

## Security Notes

- Cite sources clearly and keep low-confidence claims out of publish-ready output.
- Require human review before publishing external-facing content or competitive claims.

## Failure Modes

- Weak external signals can create noisy themes if the scope is too broad.
- Source freshness matters; stale material should be called out explicitly.

## Rollback

```bash
openclaw cron delete <job-id>
```
