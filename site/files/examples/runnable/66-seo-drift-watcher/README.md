# 66 - SEO Drift Watcher

Builds a recurring SEO drift memo from SEO and search-result drift around priority topics.

## Skill Stack

```bash
npx clawhub@latest install tavily-search
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Gathers SEO and search-result drift around priority topics from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a SEO drift memo ready for review

## Setup

```bash
export TOPIC_SCOPE='priority keywords'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='42 10 * * 2'
export CRON_NAME='SEO Drift Watcher'
```

```bash
bash examples/runnable/66-seo-drift-watcher/scripts/check_prereqs.sh
bash examples/runnable/66-seo-drift-watcher/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the SEO drift memo includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- refreshes triggered by drift
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
