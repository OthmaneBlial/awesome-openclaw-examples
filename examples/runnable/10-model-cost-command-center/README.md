# 10 - Model Cost Command Center

Daily model-usage and spend anomaly monitoring.

## Skill Stack

```bash
npx clawhub@latest install model-usage
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Pulls latest model usage metrics
- Breaks down spend by model/provider
- Flags abnormal cost spikes and likely drivers

## Setup

```bash
export COST_WINDOW='24h'
export ANOMALY_THRESHOLD_PERCENT='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 8 * * 1-5'
export CRON_NAME='Model Cost Command Center'
```

```bash
bash examples/runnable/10-model-cost-command-center/scripts/check_prereqs.sh
bash examples/runnable/10-model-cost-command-center/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run and verify usage totals + model breakdown are present.
- Confirm at least one anomaly rule evaluation appears in output.

## KPI

- Week-over-week cost variance
- Cost per successful workflow
- Share of spend on top 2 models

## Security Notes

- Treat usage data as internal operational telemetry.
- Keep digests in restricted channels.

## Rollback

```bash
openclaw cron delete <job-id>
```
