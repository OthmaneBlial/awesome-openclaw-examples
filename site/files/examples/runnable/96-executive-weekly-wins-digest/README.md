# 96 - Executive Weekly Wins Digest

Builds a recurring weekly wins digest from notable weekly wins and forward momentum across teams.

## Skill Stack

```bash
openclaw skills install slack
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Collects notable weekly wins and forward momentum across teams from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a weekly wins digest for daily review

## Setup

```bash
export TEAM_SCOPE='team updates'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='12 8 * * 2'
export CRON_NAME='Executive Weekly Wins Digest'
```

```bash
bash examples/runnable/96-executive-weekly-wins-digest/scripts/check_prereqs.sh
bash examples/runnable/96-executive-weekly-wins-digest/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the weekly wins digest includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- weekly status prep time
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
