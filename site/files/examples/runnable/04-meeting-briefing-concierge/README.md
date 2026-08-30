# 04 - Meeting Briefing Concierge

Automatically prepares context briefs before scheduled meetings.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Reads upcoming meetings from calendar
- Pulls related emails/docs/notes
- Produces one-page briefing per meeting

## Setup

```bash
export LOOKAHEAD_HOURS='24'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 * * * 1-5'
export CRON_NAME='Meeting Briefing Concierge'
```

```bash
bash examples/runnable/04-meeting-briefing-concierge/scripts/check_prereqs.sh
bash examples/runnable/04-meeting-briefing-concierge/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run and verify that briefs include meeting objective, participants, prior context, and open questions.

## KPI

- Meeting prep time
- Decision closure rate after meetings

## Security Notes

- Keep briefing delivery to private channels.
- Avoid sending sensitive meeting notes to broad groups.

## Rollback

```bash
openclaw cron delete <job-id>
```
