# 87 - Audit Evidence Collector

Builds a recurring audit evidence packet from audit evidence requests across systems and teams.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install gog
npx clawhub@latest install notion
npx clawhub@latest install summarize
```

## What It Does

- Scans audit evidence requests across systems and teams from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces an audit evidence packet with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='audit prep'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='9 15 * * 3'
export CRON_NAME='Audit Evidence Collector'
```

```bash
bash examples/runnable/87-audit-evidence-collector/scripts/check_prereqs.sh
bash examples/runnable/87-audit-evidence-collector/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the audit evidence packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- evidence collection lead time
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
