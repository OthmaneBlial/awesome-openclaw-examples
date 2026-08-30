# 59 - Knowledge Base Freshness Scan

Builds a recurring knowledge freshness queue from knowledge articles that may be stale or thin.

## Skill Stack

```bash
openclaw skills install nano-pdf
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Collects knowledge articles that may be stale or thin from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces a knowledge freshness queue for daily review

## Setup

```bash
export TEAM_SCOPE='support knowledge'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='53 11 * * 5'
export CRON_NAME='Knowledge Base Freshness Scan'
```

```bash
bash examples/runnable/59-knowledge-base-freshness-scan/scripts/check_prereqs.sh
bash examples/runnable/59-knowledge-base-freshness-scan/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the knowledge freshness queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- KB freshness score
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
