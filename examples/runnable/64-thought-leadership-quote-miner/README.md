# 64 - Thought-Leadership Quote Miner

Builds a recurring quote bank board from high-signal quotes and takeaways from industry voices.

## Skill Stack

```bash
openclaw skills install youtube-watcher
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Gathers high-signal quotes and takeaways from industry voices from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a quote bank board ready for review

## Setup

```bash
export TOPIC_SCOPE='industry experts'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='28 8 * * 5'
export CRON_NAME='Thought-Leadership Quote Miner'
```

```bash
bash examples/runnable/64-thought-leadership-quote-miner/scripts/check_prereqs.sh
bash examples/runnable/64-thought-leadership-quote-miner/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the quote bank board includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- content reuse rate
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
