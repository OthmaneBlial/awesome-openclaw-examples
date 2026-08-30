# 83 - Access Review Prep Bot

Builds a recurring access review packet from access review data and unresolved permission questions.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install notion
openclaw skills install slack
```

## What It Does

- Scans access review data and unresolved permission questions from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces an access review packet with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='access review'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='41 11 1 * *'
export CRON_NAME='Access Review Prep Bot'
```

```bash
bash examples/runnable/83-access-review-prep-bot/scripts/check_prereqs.sh
bash examples/runnable/83-access-review-prep-bot/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the access review packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- access review prep hours saved
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
