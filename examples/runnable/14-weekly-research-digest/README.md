# 14 - Weekly Research Digest

Creates a high-signal weekly digest from web search, with concise implications.

## Skill Stack

```bash
openclaw skills install tavily-search
openclaw skills install summarize
openclaw skills install slack
```

## What It Does

- Collects fresh sources for your tracked topics
- Ranks findings by signal and novelty
- Produces a brief with implications and next actions

## Setup

```bash
export TOPIC_QUERY='openclaw automation trends'
export RESULT_LIMIT='20'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 9 * * 1'
export CRON_NAME='Weekly Research Digest'
```

```bash
bash examples/runnable/14-weekly-research-digest/scripts/check_prereqs.sh
bash examples/runnable/14-weekly-research-digest/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify links are current and non-duplicated.
- Confirm each key finding includes one practical implication.

## KPI

- Digest open/read engagement
- Time saved on market scanning
- Action items generated per digest

## Security Notes

- Keep API keys in environment variables.
- Avoid including private documents unless explicitly allowed.

## Rollback

```bash
openclaw cron delete <job-id>
```
