# 90 - Change Freeze Guard

Builds a recurring change freeze alert brief from changes that collide with a freeze window.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install slack
npx clawhub@latest install summarize
```

## What It Does

- Scans changes that collide with a freeze window from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces a change freeze alert brief with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='freeze windows'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='30 10 * * 1-5'
export CRON_NAME='Change Freeze Guard'
```

```bash
bash examples/runnable/90-change-freeze-guard/scripts/check_prereqs.sh
bash examples/runnable/90-change-freeze-guard/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the change freeze alert brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- unauthorized changes during freeze
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
