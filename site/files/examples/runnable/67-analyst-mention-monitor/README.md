# 67 - Analyst Mention Monitor

Builds a recurring analyst mention queue from analyst mentions and external references worth follow-up.

## Skill Stack

```bash
openclaw skills install tavily-search
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Gathers analyst mentions and external references worth follow-up from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces an analyst mention queue ready for review

## Setup

```bash
export TOPIC_SCOPE='category analysts'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='49 11 * * 3'
export CRON_NAME='Analyst Mention Monitor'
```

```bash
bash examples/runnable/67-analyst-mention-monitor/scripts/check_prereqs.sh
bash examples/runnable/67-analyst-mention-monitor/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the analyst mention queue includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- analyst mentions actioned
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
