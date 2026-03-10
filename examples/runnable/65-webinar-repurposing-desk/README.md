# 65 - Webinar Repurposing Desk

Builds a recurring webinar repurposing packet from webinar recordings that can be repurposed into downstream assets.

## Skill Stack

```bash
npx clawhub@latest install youtube-watcher
npx clawhub@latest install summarize
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Gathers webinar recordings that can be repurposed into downstream assets from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a webinar repurposing packet ready for review

## Setup

```bash
export TOPIC_SCOPE='recent webinars'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='35 9 * * 1'
export CRON_NAME='Webinar Repurposing Desk'
```

```bash
bash examples/runnable/65-webinar-repurposing-desk/scripts/check_prereqs.sh
bash examples/runnable/65-webinar-repurposing-desk/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the webinar repurposing packet includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- days from webinar to derivative content
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
