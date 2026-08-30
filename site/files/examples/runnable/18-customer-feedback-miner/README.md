# 18 - Customer Feedback Miner

Aggregates feedback signals, clusters themes, and produces product-ready action briefs.

## Skill Stack

```bash
openclaw skills install slack
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Pulls feedback from target channels/threads
- Clusters repeated pain points and requests
- Produces prioritized themes with evidence and suggested owners

## Setup

```bash
export FEEDBACK_CHANNELS='support,product-feedback,customer-success'
export WINDOW_HOURS='168'
export MIN_MENTIONS='3'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 10 * * 1'
export CRON_NAME='Customer Feedback Miner'
```

```bash
bash examples/runnable/18-customer-feedback-miner/scripts/check_prereqs.sh
bash examples/runnable/18-customer-feedback-miner/scripts/install_cron.sh
```

## Smoke Test

- Run once and confirm themes include supporting message links.
- Verify low-signal one-off comments are separated from repeated patterns.

## KPI

- Time to identify top recurring complaints
- Feedback-to-roadmap mapping rate
- Resolution progress for top recurring themes

## Security Notes

- Keep private customer identifiers out of public channels.
- Restrict channel read permissions to required scopes.

## Rollback

```bash
openclaw cron delete <job-id>
```
