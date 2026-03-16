# 22 - Account Health Snapshot

Builds recurring account-risk snapshots from product and support signals.

## Skill Stack

```bash
npx clawhub@latest install api-gateway
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Pulls key account metrics from configured APIs
- Detects churn-risk patterns and sudden health drops
- Produces prioritized watchlist with suggested interventions

## Setup

```bash
export ACCOUNT_SEGMENT='enterprise'
export LOOKBACK_DAYS='14'
export RISK_THRESHOLD='0.70'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='30 8 * * 1-5'
export CRON_NAME='Account Health Snapshot'
```

```bash
bash examples/runnable/22-account-health-snapshot/scripts/check_prereqs.sh
bash examples/runnable/22-account-health-snapshot/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify at-risk accounts include evidence metrics and proposed actions.
- Confirm healthy accounts are not over-flagged.

## KPI

- Early risk detection coverage
- Time-to-intervention for at-risk accounts
- Net churn trend for watched accounts

## Security Notes

- Keep account-level data in restricted channels.
- Use read-only API scopes for initial rollout.

## Rollback

```bash
openclaw cron delete <job-id>
```
