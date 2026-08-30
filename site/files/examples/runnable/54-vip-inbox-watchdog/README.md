# 54 - VIP Inbox Watchdog

Builds a recurring VIP inbox alert brief from VIP inbox threads that need fast attention.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Collects VIP inbox threads that need fast attention from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a VIP inbox alert brief for daily review

## Setup

```bash
export TEAM_SCOPE='vip threads'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='18 * * * *'
export CRON_NAME='VIP Inbox Watchdog'
```

```bash
bash examples/runnable/54-vip-inbox-watchdog/scripts/check_prereqs.sh
bash examples/runnable/54-vip-inbox-watchdog/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the VIP inbox alert brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- first response time for VIP threads
- time-to-intervention
- false-positive rate

## Security Notes

- Keep customer or internal operations content in trusted workspaces only.
- Start in draft-only mode and avoid automatic replies until operators trust the workflow.

## Failure Modes

- Stale inbox or task sync can surface outdated items.
- Low-quality inputs can create false urgency without a human review step.

## Rollback

```bash
openclaw cron delete <job-id>
```
