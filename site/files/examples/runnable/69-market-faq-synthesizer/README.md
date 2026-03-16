# 69 - Market FAQ Synthesizer

Builds a recurring market FAQ packet from frequently asked market questions and recent source material.

## Skill Stack

```bash
npx clawhub@latest install tavily-search
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Gathers frequently asked market questions and recent source material from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a market FAQ packet ready for review

## Setup

```bash
export TOPIC_SCOPE='buyer questions'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='3 13 * * 5'
export CRON_NAME='Market FAQ Synthesizer'
```

```bash
bash examples/runnable/69-market-faq-synthesizer/scripts/check_prereqs.sh
bash examples/runnable/69-market-faq-synthesizer/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the market FAQ packet includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- FAQ refresh cadence
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
