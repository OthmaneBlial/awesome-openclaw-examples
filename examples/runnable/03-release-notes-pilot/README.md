# 03 - Release Notes Pilot

Automatic weekly release-notes drafting from merged PR activity.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Collects merged PRs for a target window
- Groups by labels (`feature`, `fix`, `docs`, `breaking`)
- Posts markdown-ready release notes draft

## Setup

```bash
export REPO="owner/repo"
export SINCE_WINDOW='7 days ago'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 16 * * 5'
export CRON_NAME='Release Notes Pilot'
```

```bash
bash examples/runnable/03-release-notes-pilot/scripts/check_prereqs.sh
bash examples/runnable/03-release-notes-pilot/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run manually and verify markdown output quality.

## KPI

- Time spent preparing weekly release notes.
- Percentage of releases shipped with complete notes.

## Security Notes

- Keep this flow read-only until reviewed by humans.

## Rollback

```bash
openclaw cron delete <job-id>
```
