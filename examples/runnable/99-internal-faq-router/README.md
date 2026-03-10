# 99 - Internal FAQ Router

Builds a recurring internal FAQ queue from internal FAQ requests that need fast routing or reuse.

## Skill Stack

```bash
npx clawhub@latest install slack
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Collects internal FAQ requests that need fast routing or reuse from configured operational sources
- Flags urgent, stale, or conflicting items
- Produces an internal FAQ queue for daily review

## Setup

```bash
export TEAM_SCOPE='internal support'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='33 11 * * 1-5'
export CRON_NAME='Internal FAQ Router'
```

```bash
bash examples/runnable/99-internal-faq-router/scripts/check_prereqs.sh
bash examples/runnable/99-internal-faq-router/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the internal FAQ queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- first-answer time
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
