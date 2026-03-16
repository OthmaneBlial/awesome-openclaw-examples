# 28 - On-call Handoff Builder

Generates shift handoff summaries with unresolved risk and action continuity.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Pulls incident/ticket/PR context from current shift window
- Summarizes unresolved items and operational risk
- Produces next-shift handoff checklist with owners and due times

## Setup

```bash
export REPO='owner/repo'
export SHIFT_WINDOW_HOURS='12'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 */12 * * *'
export CRON_NAME='On-call Handoff Builder'
```

```bash
bash examples/runnable/28-on-call-handoff-builder/scripts/check_prereqs.sh
bash examples/runnable/28-on-call-handoff-builder/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify unresolved items include links, status, and owners.
- Confirm carry-over tasks are clearly distinguished from newly discovered items.

## KPI

- Handoff completeness score
- Reopened incident ratio due to handoff gaps
- Mean time to regain context for incoming on-call

## Security Notes

- Restrict handoff summaries to on-call channels.
- Redact sensitive incident payload data when not needed.

## Rollback

```bash
openclaw cron delete <job-id>
```
