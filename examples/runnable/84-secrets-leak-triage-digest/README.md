# 84 - Secrets Leak Triage Digest

Builds a recurring secrets triage digest from potential secret exposure and suspicious repository findings.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Scans potential secret exposure and suspicious repository findings from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces a secrets triage digest with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='repo secrets'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='48 12 * * 1-5'
export CRON_NAME='Secrets Leak Triage Digest'
```

```bash
bash examples/runnable/84-secrets-leak-triage-digest/scripts/check_prereqs.sh
bash examples/runnable/84-secrets-leak-triage-digest/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the secrets triage digest includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- leak response time
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
