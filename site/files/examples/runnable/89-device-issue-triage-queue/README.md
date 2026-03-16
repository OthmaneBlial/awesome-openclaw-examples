# 89 - Device Issue Triage Queue

Builds a recurring IT issue triage queue from incoming device and workplace IT issues.

## Skill Stack

```bash
npx clawhub@latest install typeform
npx clawhub@latest install slack
npx clawhub@latest install todoist
```

## What It Does

- Scans incoming device and workplace IT issues from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces an IT issue triage queue with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='employee devices'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='23 9 * * 1-5'
export CRON_NAME='Device Issue Triage Queue'
```

```bash
bash examples/runnable/89-device-issue-triage-queue/scripts/check_prereqs.sh
bash examples/runnable/89-device-issue-triage-queue/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the IT issue triage queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- first assignment time
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
