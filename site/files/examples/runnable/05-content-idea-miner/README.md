# 05 - Content Idea Miner

Weekly content pipeline that turns fresh web/video signals into production-ready idea briefs.

## Skill Stack

```bash
openclaw skills install tavily-search
openclaw skills install youtube-watcher
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Collects latest signals from web and YouTube
- Filters duplicates and weak ideas
- Produces ranked ideas with source-backed angles

## Setup

```bash
export TOPIC='openclaw automation'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 9 * * 1'
export CRON_NAME='Content Idea Miner'
```

```bash
bash examples/runnable/05-content-idea-miner/scripts/check_prereqs.sh
bash examples/runnable/05-content-idea-miner/scripts/install_cron.sh
```

## Smoke Test

- Manual run should output 5-10 ranked ideas with sources and one suggested hook each.

## KPI

- Idea-to-publish conversion rate
- Average time from idea to first draft

## Security Notes

- Keep API keys in environment variables, never in prompt text.
- Store only public-source links unless internal permission is explicit.

## Rollback

```bash
openclaw cron delete <job-id>
```
