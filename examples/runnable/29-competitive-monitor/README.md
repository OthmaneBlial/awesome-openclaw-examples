# 29 - Competitive Monitor

Tracks competitor product moves and creates action-ready response suggestions.

## Skill Stack

```bash
openclaw skills install tavily-search
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Collects weekly competitor updates across selected domains
- Clusters updates by theme (pricing, packaging, product, GTM)
- Recommends actionable responses with confidence and urgency

## Setup

```bash
export COMPETITOR_QUERY='agent automation platform pricing launch'
export LOOKBACK_DAYS='7'
export MAX_SIGNALS='40'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 8 * * 1'
export CRON_NAME='Competitive Monitor'
```

```bash
bash examples/runnable/29-competitive-monitor/scripts/check_prereqs.sh
bash examples/runnable/29-competitive-monitor/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify grouped themes include source links and timestamps.
- Confirm low-confidence rumors are separated from high-confidence updates.

## KPI

- Time from market signal to internal response
- False-positive signal rate
- Strategic actions generated per report

## Security Notes

- Use public-source evidence only unless explicitly authorized.
- Keep response planning internal.

## Rollback

```bash
openclaw cron delete <job-id>
```
