# 53 - Bug Report Intake Cleaner

Builds a recurring clean bug intake queue from incoming bug reports that need cleanup and routing.

## Skill Stack

```bash
openclaw skills install typeform
openclaw skills install summarize
openclaw skills install todoist
```

## What It Does

- Collects incoming bug reports that need cleanup and routing from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a clean bug intake queue for daily review

## Setup

```bash
export TEAM_SCOPE='product intake'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='11 13 * * 1-5'
export CRON_NAME='Bug Report Intake Cleaner'
```

```bash
bash examples/runnable/53-bug-report-intake-cleaner/scripts/check_prereqs.sh
bash examples/runnable/53-bug-report-intake-cleaner/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the clean bug intake queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- invalid bug reports reduced
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
