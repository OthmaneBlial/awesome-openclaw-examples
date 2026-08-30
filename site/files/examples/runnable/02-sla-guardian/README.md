# 02 - SLA Guardian

Escalation digest for customer conversations at risk of SLA breach.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install todoist
openclaw skills install slack
```

## What It Does

- Scans support inbox queries on a schedule
- Flags old threads with no outbound response
- Creates escalation tasks and posts a digest

## Setup

1. Configure `gog` OAuth for Gmail.
2. Configure Todoist token.
3. Set environment:
```bash
export SUPPORT_QUERY='in:inbox newer_than:2d -from:me'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='*/30 8-20 * * 1-5'
export CRON_NAME='SLA Guardian'
```

4. Run checks:
```bash
bash examples/runnable/02-sla-guardian/scripts/check_prereqs.sh
```

5. Install schedule:
```bash
bash examples/runnable/02-sla-guardian/scripts/install_cron.sh
```

## Smoke Test

Run once and confirm:
- Slack digest posted
- At-risk items are listed with next actions

## KPI

- SLA breach rate
- Median first response time

## Security Notes

- Start with draft/escalation mode (no auto replies).
- Keep OAuth scopes minimal.

## Rollback

```bash
openclaw cron delete <job-id>
```

