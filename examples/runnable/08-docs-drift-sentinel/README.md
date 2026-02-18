# 08 - Docs Drift Sentinel

Detects code/documentation drift before it becomes support debt.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install notion
```

## What It Does

- Reviews recent merged PRs in key code paths
- Flags changes that likely require docs updates
- Produces a ranked drift queue with suggested doc owners

## Setup

```bash
export REPO='owner/repo'
export CODE_PATHS='src/,api/,sdk/'
export DOCS_PATH='docs/'
export WINDOW_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='30 10 * * 1-5'
export CRON_NAME='Docs Drift Sentinel'
```

```bash
bash examples/runnable/08-docs-drift-sentinel/scripts/check_prereqs.sh
bash examples/runnable/08-docs-drift-sentinel/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the output includes drift candidates with evidence.
- Confirm each candidate has a concrete docs action proposal.

## KPI

- Drift alerts resolved within 7 days
- Support tickets linked to stale docs
- Time from code merge to docs update

## Security Notes

- Keep GitHub access read-only.
- Route reports to private team channels.

## Rollback

```bash
openclaw cron delete <job-id>
```
