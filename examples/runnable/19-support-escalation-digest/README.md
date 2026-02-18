# 19 - Support Escalation Digest

Detects unresolved support threads and builds an urgency-ranked escalation digest.

## Skill Stack

```bash
npx clawhub@latest install slack
npx clawhub@latest install summarize
npx clawhub@latest install todoist
```

## What It Does

- Scans support channels for unanswered/high-friction threads
- Scores urgency by age, sentiment, and customer impact markers
- Outputs escalation digest with owners and next actions

## Setup

```bash
export SUPPORT_CHANNELS='support,urgent-support,vip-support'
export WINDOW_HOURS='48'
export MAX_ESCALATIONS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='*/30 8-20 * * 1-5'
export CRON_NAME='Support Escalation Digest'
```

```bash
bash examples/runnable/19-support-escalation-digest/scripts/check_prereqs.sh
bash examples/runnable/19-support-escalation-digest/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run and verify escalations include links, age, and assigned next action.
- Confirm low-priority resolved threads are excluded.

## KPI

- SLA breach rate
- Median escalation response time
- Aging count of unresolved urgent threads

## Security Notes

- Keep customer-sensitive context in private channels.
- Restrict scope to required support channels.

## Rollback

```bash
openclaw cron delete <job-id>
```
