# 21 - Partner Update Generator

Generates concise partner updates from recent internal activity and milestones.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
```

## What It Does

- Pulls recent project/customer signals from selected inbox and docs context
- Drafts partner-friendly weekly update with risks and asks
- Separates confirmed updates from pending items

## Setup

```bash
export UPDATE_SCOPE='partnership alpha'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 12 * * 5'
export CRON_NAME='Partner Update Generator'
```

```bash
bash examples/runnable/21-partner-update-generator/scripts/check_prereqs.sh
bash examples/runnable/21-partner-update-generator/scripts/install_cron.sh
```

## Smoke Test

- Trigger one run and verify final draft has clear sections: wins, blockers, next week.
- Confirm uncertain items are marked as pending, not stated as done.

## KPI

- Time to produce weekly partner update
- Partner clarification requests per update
- On-time update delivery rate

## Security Notes

- Keep external-facing drafts in review mode until approved.
- Filter out confidential internal details by default.

## Rollback

```bash
openclaw cron delete <job-id>
```
