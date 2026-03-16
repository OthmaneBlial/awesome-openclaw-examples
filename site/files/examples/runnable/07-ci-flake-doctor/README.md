# 07 - CI Flake Doctor

Recurring CI flake detection and remediation queue builder.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install todoist
```

## What It Does

- Scans recent failed CI runs
- Clusters failures by test path/signature
- Identifies likely flakes using repeat + intermittency
- Creates prioritized remediation tasks and posts digest

## Setup

```bash
export REPO='owner/repo'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='15 9 * * 1-5'
export CRON_NAME='CI Flake Doctor'
```

```bash
bash examples/runnable/07-ci-flake-doctor/scripts/check_prereqs.sh
bash examples/runnable/07-ci-flake-doctor/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run manually and verify recurring failures are grouped by signature.
- Confirm output includes at least one concrete remediation action.

## KPI

- Flaky failure count per week
- CI rerun rate
- Mean time to flake resolution

## Security Notes

- Keep GitHub access read-only for first deployment.
- Require human review before creating high-priority tasks.

## Rollback

```bash
openclaw cron delete <job-id>
```
