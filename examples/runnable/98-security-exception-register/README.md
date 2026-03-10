# 98 - Security Exception Register

Builds a recurring security exception board from approved and pending security exceptions.

## Skill Stack

```bash
npx clawhub@latest install notion
npx clawhub@latest install slack
npx clawhub@latest install summarize
npx clawhub@latest install gog
```

## What It Does

- Scans approved and pending security exceptions from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces a security exception board with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='security governance'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='26 10 * * 4'
export CRON_NAME='Security Exception Register'
```

```bash
bash examples/runnable/98-security-exception-register/scripts/check_prereqs.sh
bash examples/runnable/98-security-exception-register/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the security exception board includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- exception aging
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
