# 56 - Travel-and-Meeting Reshuffler

Builds a recurring travel conflict queue from travel plans and meeting collisions.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install caldav-calendar
npx clawhub@latest install todoist
```

## What It Does

- Collects travel plans and meeting collisions from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a travel conflict queue for daily review

## Setup

```bash
export TEAM_SCOPE='travel week'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='32 8 * * 1-5'
export CRON_NAME='Travel-and-Meeting Reshuffler'
```

```bash
bash examples/runnable/56-travel-and-meeting-reshuffler/scripts/check_prereqs.sh
bash examples/runnable/56-travel-and-meeting-reshuffler/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the travel conflict queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- missed travel conflicts
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
