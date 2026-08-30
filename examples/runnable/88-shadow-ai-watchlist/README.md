# 88 - Shadow-AI Watchlist

Builds a recurring shadow-AI watch queue from shadow-AI usage or unapproved tooling chatter.

## Skill Stack

```bash
openclaw skills install slack
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans shadow-AI usage or unapproved tooling chatter from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces a shadow-AI watch queue with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='internal tooling'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='16 8 * * 4'
export CRON_NAME='Shadow-AI Watchlist'
```

```bash
bash examples/runnable/88-shadow-ai-watchlist/scripts/check_prereqs.sh
bash examples/runnable/88-shadow-ai-watchlist/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the shadow-AI watch queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- shadow tool incidents surfaced
- time-to-review
- critical items surfaced

## Security Notes

- Use least-privilege scopes and restricted delivery targets for security and IT workflows.
- Do not auto-remediate accounts, hosts, or credentials without explicit operator approval.

## Failure Modes

- Incomplete telemetry can hide the most important issues.
- Aggressive automation without approvals can create more risk than it removes.

## Rollback

```bash
openclaw cron delete <job-id>
```
