# 20 - Product Changelog Curator

Builds a clear internal changelog from merged PR activity and release labels.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Pulls merged PRs for a release window
- Groups changes into features/fixes/internal updates
- Generates a clean changelog draft with links and owner notes

## Setup

```bash
export REPO='owner/repo'
export SINCE_WINDOW='7 days ago'
export CHANGELOG_SECTIONS='features,fixes,docs,internal,breaking'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 15 * * 5'
export CRON_NAME='Product Changelog Curator'
```

```bash
bash examples/runnable/20-product-changelog-curator/scripts/check_prereqs.sh
bash examples/runnable/20-product-changelog-curator/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify each entry is linked to a real PR.
- Confirm unclassified PRs are surfaced for manual labeling.

## KPI

- Changelog prep time
- Coverage rate of shipped changes
- Number of unlabeled PRs per release

## Security Notes

- Start read-only with minimal repo scopes.
- Keep draft notes internal until approved.

## Rollback

```bash
openclaw cron delete <job-id>
```
