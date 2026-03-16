# 68 - Social Proof Collector

Builds a recurring social proof board from customer proof points worth reusing in go-to-market motion.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Gathers customer proof points worth reusing in go-to-market motion from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a social proof board ready for review

## Setup

```bash
export TOPIC_SCOPE='customer proof'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='56 12 * * 1-5'
export CRON_NAME='Social Proof Collector'
```

```bash
bash examples/runnable/68-social-proof-collector/scripts/check_prereqs.sh
bash examples/runnable/68-social-proof-collector/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the social proof board includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- social proof assets collected
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
