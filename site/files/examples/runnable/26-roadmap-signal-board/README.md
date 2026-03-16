# 26 - Roadmap Signal Board

Transforms external signal noise into prioritized roadmap opportunities.

## Skill Stack

```bash
npx clawhub@latest install tavily-search
npx clawhub@latest install summarize
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Tracks market/competitor signals for target themes
- Clusters signals into product opportunity buckets
- Produces a board-ready summary with suggested bets

## Setup

```bash
export SIGNAL_QUERY='openclaw agents automation roadmap'
export LOOKBACK_DAYS='7'
export MAX_SIGNALS='30'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='30 9 * * 1'
export CRON_NAME='Roadmap Signal Board'
```

```bash
bash examples/runnable/26-roadmap-signal-board/scripts/check_prereqs.sh
bash examples/runnable/26-roadmap-signal-board/scripts/install_cron.sh
```

## Smoke Test

- Run once and confirm each recommendation cites external evidence.
- Verify repeated stories are deduplicated into single themes.

## KPI

- Signal-to-roadmap conversion rate
- Time from external signal to internal decision
- Ratio of low-signal false positives

## Security Notes

- Keep external data provenance clear in outputs.
- Do not include private competitor intel unless properly sourced.

## Rollback

```bash
openclaw cron delete <job-id>
```
