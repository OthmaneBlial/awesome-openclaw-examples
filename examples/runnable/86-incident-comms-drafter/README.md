# 86 - Incident Comms Drafter

Builds a recurring incident comms draft from incident updates that need customer-facing communication drafts.

## Skill Stack

```bash
openclaw skills install slack
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Scans incident updates that need customer-facing communication drafts from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces an incident comms draft with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='customer incidents'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='2 14 * * 1-5'
export CRON_NAME='Incident Comms Drafter'
```

```bash
bash examples/runnable/86-incident-comms-drafter/scripts/check_prereqs.sh
bash examples/runnable/86-incident-comms-drafter/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the incident comms draft includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- time to first customer comms draft
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
