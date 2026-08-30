# 70 - Campaign Asset Request Router

Builds a recurring campaign request queue from campaign asset requests that need prioritization and routing.

## Skill Stack

```bash
openclaw skills install typeform
openclaw skills install notion
openclaw skills install slack
```

## What It Does

- Gathers campaign asset requests that need prioritization and routing from research and content signals
- Clusters themes, openings, and follow-up opportunities
- Produces a campaign request queue ready for review

## Setup

```bash
export TOPIC_SCOPE='marketing requests'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='10 14 * * 1-5'
export CRON_NAME='Campaign Asset Request Router'
```

```bash
bash examples/runnable/70-campaign-asset-request-router/scripts/check_prereqs.sh
bash examples/runnable/70-campaign-asset-request-router/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the campaign request queue includes evidence-backed prioritization.
- Confirm weak or low-confidence findings are called out instead of being presented as fact.

## KPI

- request turnaround time
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
