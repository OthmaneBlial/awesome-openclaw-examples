# 09 - Weekly Incident Brief

Friday incident summary and postmortem follow-up for engineering leadership.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Pulls incident-tagged issues/PRs
- Summarizes open vs closed incident state
- Flags missing postmortems and stale follow-up tasks

## Setup

```bash
export REPO='owner/repo'
export INCIDENT_LABELS='incident,sev1,sev2'
export SINCE_WINDOW='7 days ago'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 16 * * 5'
export CRON_NAME='Weekly Incident Brief'
```

```bash
bash examples/runnable/09-weekly-incident-brief/scripts/check_prereqs.sh
bash examples/runnable/09-weekly-incident-brief/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify incident links, owners, and unresolved actions are listed.
- Confirm missing postmortem items are explicitly called out.

## KPI

- Postmortem completion rate
- Incident follow-up aging
- Repeat incident ratio

## Security Notes

- Keep reports in private engineering channels.
- Avoid including customer-sensitive payloads.

## Rollback

```bash
openclaw cron delete <job-id>
```
