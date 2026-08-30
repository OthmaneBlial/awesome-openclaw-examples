# 25 - Feature Request Triage

Converts incoming feature requests into an evidence-ranked engineering queue.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Pulls new feature issues and related discussion context
- Deduplicates overlapping requests
- Outputs prioritized triage list with rationale and proposed next action

## Setup

```bash
export REPO='owner/repo'
export ISSUE_LABEL='feature-request'
export WINDOW_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 14 * * 1-5'
export CRON_NAME='Feature Request Triage'
```

```bash
bash examples/runnable/25-feature-request-triage/scripts/check_prereqs.sh
bash examples/runnable/25-feature-request-triage/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run and verify duplicate requests are grouped.
- Confirm each priority item has issue link + action recommendation.

## KPI

- Median issue triage time
- Duplicate request ratio
- Time-to-first-response for feature requests

## Security Notes

- Keep repo access read-only for analysis phase.
- Avoid exposing private issues in broad channels.

## Rollback

```bash
openclaw cron delete <job-id>
```
