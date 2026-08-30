# 13 - Personal CRM Lite

Builds a lightweight contact memory system from recent email and calendar activity.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Pulls recent interactions for key contacts
- Summarizes relationship context and open loops
- Produces brief-ready notes for upcoming meetings

## Setup

```bash
export CONTACT_FILTER='from:important@ OR to:important@'
export LOOKBACK_DAYS='30'
export MAX_CONTACTS='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 7 * * 1-5'
export CRON_NAME='Personal CRM Lite'
```

```bash
bash examples/runnable/13-personal-crm-lite/scripts/check_prereqs.sh
bash examples/runnable/13-personal-crm-lite/scripts/install_cron.sh
```

## Smoke Test

- Run once and confirm summaries include last interaction, open commitments, and next follow-up.
- Verify no fabricated relationship details appear in output.

## KPI

- Pre-meeting prep time
- Follow-up completion rate
- Missed commitments per month

## Security Notes

- Restrict output delivery to private channels.
- Keep Gmail scopes minimal.

## Rollback

```bash
openclaw cron delete <job-id>
```
