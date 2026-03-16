# 01 - PR Radar

Continuous PR triage digest for one or more repositories.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Scans open PRs and recent CI runs
- Highlights blocked, stale, and merge-ready PRs
- Posts an action-oriented digest to Slack/Telegram

## Setup

1. Authenticate GitHub CLI:
```bash
gh auth status
```

2. Set environment:
```bash
export REPO="owner/repo"
export DELIVERY_CHANNEL="slack"
export DELIVERY_TARGET="channel:C1234567890"
export CRON_EXPR="5 * * * *"
export CRON_NAME="PR Radar"
```

3. Validate prerequisites:
```bash
bash examples/runnable/01-pr-radar/scripts/check_prereqs.sh
```

4. Install cron job:
```bash
bash examples/runnable/01-pr-radar/scripts/install_cron.sh
```

## Smoke Test

```bash
openclaw cron list
openclaw cron run <job-id>
```

## KPI

- Time-to-first-review
- PRs stale >48h
- Merge lead time

## Security Notes

- Use read-only GitHub scope for first rollout.
- Restrict message delivery channel to trusted team spaces.
- Keep control-plane tools denied in untrusted inbound contexts.

## Rollback

```bash
openclaw cron delete <job-id>
```

