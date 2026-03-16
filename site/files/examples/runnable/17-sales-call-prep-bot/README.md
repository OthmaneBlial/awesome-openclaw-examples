# 17 - Sales Call Prep Bot

Builds concise pre-call briefs from account history, calendar context, and open threads.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Pulls upcoming external meetings
- Collects relevant email and notes context
- Generates structured pre-call brief with risks and objectives

## Setup

```bash
export LOOKAHEAD_HOURS='48'
export TARGET_SEGMENT='enterprise'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 7 * * 1-5'
export CRON_NAME='Sales Call Prep Bot'
```

```bash
bash examples/runnable/17-sales-call-prep-bot/scripts/check_prereqs.sh
bash examples/runnable/17-sales-call-prep-bot/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run and verify briefs include objective, stakeholder context, and open opportunities.
- Confirm missing context is explicitly called out.

## KPI

- Prep time per call
- Conversion rate for prepared calls vs unprepared calls
- Follow-up completion rate

## Security Notes

- Keep customer data in private channels.
- Use least-privilege scopes for mail/calendar access.

## Rollback

```bash
openclaw cron delete <job-id>
```
