# 11 - Inbox to Action

Turns important inbox items into actionable task queues.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans a focused inbox query
- Extracts actions, due dates, and dependencies
- Creates a ranked action queue with confidence levels

## Setup

```bash
export INBOX_QUERY='in:inbox newer_than:2d -category:promotions -from:me'
export MAX_TASKS='15'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 */2 * * 1-5'
export CRON_NAME='Inbox to Action'
```

```bash
bash examples/runnable/11-inbox-to-action/scripts/check_prereqs.sh
bash examples/runnable/11-inbox-to-action/scripts/install_cron.sh
```

## Smoke Test

- Run once and confirm extracted actions map to real emails.
- Validate due dates are explicit or clearly marked as uncertain.

## KPI

- Email-to-task conversion latency
- Backlog size of unprocessed important emails
- Task completion rate from inbox-derived items

## Security Notes

- Use minimal Gmail scopes.
- Never send outbound emails automatically in this flow.

## Rollback

```bash
openclaw cron delete <job-id>
```
