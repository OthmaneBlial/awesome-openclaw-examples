# 12 - Calendar Conflict Resolver

Finds scheduling conflicts and creates a clean resolution queue.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install caldav-calendar
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Scans upcoming events across calendars
- Detects overlaps and impossible transitions
- Suggests rebooking options and tracks unresolved items

## Setup

```bash
export LOOKAHEAD_DAYS='14'
export MIN_BUFFER_MINUTES='15'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='15 7 * * 1-5'
export CRON_NAME='Calendar Conflict Resolver'
```

```bash
bash examples/runnable/12-calendar-conflict-resolver/scripts/check_prereqs.sh
bash examples/runnable/12-calendar-conflict-resolver/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify at least one of: overlap, no-buffer transition, or double booking is detected.
- Confirm each conflict has a concrete resolution suggestion.

## KPI

- Calendar conflict count per week
- Mean time to conflict resolution
- On-time attendance rate

## Security Notes

- Limit calendar access to required scopes/calendars.
- Keep personal event details in private channels.

## Rollback

```bash
openclaw cron delete <job-id>
```
