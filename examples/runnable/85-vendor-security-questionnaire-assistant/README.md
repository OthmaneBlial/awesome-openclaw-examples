# 85 - Vendor Security Questionnaire Assistant

Builds a recurring questionnaire response packet from vendor security questionnaires and supporting evidence.

## Skill Stack

```bash
openclaw skills install nano-pdf
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Scans vendor security questionnaires and supporting evidence from security and internal tooling
- Flags urgent exposure, review debt, or policy drift
- Produces a questionnaire response packet with evidence and recommended next steps

## Setup

```bash
export SYSTEM_SCOPE='vendor reviews'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='55 13 * * 1'
export CRON_NAME='Vendor Security Questionnaire Assistant'
```

```bash
bash examples/runnable/85-vendor-security-questionnaire-assistant/scripts/check_prereqs.sh
bash examples/runnable/85-vendor-security-questionnaire-assistant/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the questionnaire response packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- questionnaire turnaround time
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
