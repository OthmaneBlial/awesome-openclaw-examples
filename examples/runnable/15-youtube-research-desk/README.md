# 15 - YouTube Research Desk

Turns targeted YouTube monitoring into structured, actionable research notes.

## Skill Stack

```bash
npx clawhub@latest install youtube-watcher
npx clawhub@latest install summarize
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Watches tracked channels/topics for new videos
- Summarizes transcript-based insights
- Publishes structured notes with key takeaways and action ideas

## Setup

```bash
export YOUTUBE_TOPIC='agentic automation'
export LOOKBACK_DAYS='7'
export MAX_VIDEOS='12'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='30 9 * * 1'
export CRON_NAME='YouTube Research Desk'
```

```bash
bash examples/runnable/15-youtube-research-desk/scripts/check_prereqs.sh
bash examples/runnable/15-youtube-research-desk/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify each summary references a real video link.
- Confirm output separates facts, opinions, and speculative claims.

## KPI

- Research synthesis time
- High-value insight capture rate
- Content ideas generated from monitored videos

## Security Notes

- Use only public videos unless you have permission.
- Keep internal interpretation notes in private workspaces.

## Rollback

```bash
openclaw cron delete <job-id>
```
