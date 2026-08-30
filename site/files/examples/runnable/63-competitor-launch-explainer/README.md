# 63 - Competitor Launch Explainer

Builds a recurring competitive launch brief from competitor launches, pricing moves, and product changes.

## Skill Stack

```bash
openclaw skills install tavily-search
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Gathers competitor launches, pricing moves, and product changes from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a competitive launch brief ready for review

## Setup

```bash
export TOPIC_SCOPE='ai agent competitors'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='21 15 * * 4'
export CRON_NAME='Competitor Launch Explainer'
```

```bash
bash examples/runnable/63-competitor-launch-explainer/scripts/check_prereqs.sh
bash examples/runnable/63-competitor-launch-explainer/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the competitive launch brief includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- time to competitive response
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
