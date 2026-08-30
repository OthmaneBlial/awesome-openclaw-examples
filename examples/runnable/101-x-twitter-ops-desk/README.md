# 101 - X/Twitter Ops Desk

Builds a read-first X/Twitter operating desk that turns target accounts, search queries, and trends into a reviewed action brief.

## Skill Stack

```bash
openclaw skills install xquik-x-twitter-scraper
openclaw skills install tweetclaw
```

## What It Does

- Reviews X/Twitter signals for a bounded account and query scope
- Uses the Xquik skill for API, MCP, webhook, and approval-gated action guidance
- Produces a prioritized brief with evidence, source links, confidence, and suggested next steps
- Drafts optional post or reply ideas without publishing them
- Requires explicit human approval before any write action

## Setup

```bash
export TARGET_ACCOUNTS='@openclaw,@xquik'
export SEARCH_QUERIES='openclaw plugin,tweetclaw'
export LOOKBACK_HOURS='24'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='30 13 * * 1-5'
export CRON_NAME='X/Twitter Ops Desk'
```

Configure TweetClaw and the Xquik skill with the required Xquik API key through your normal OpenClaw plugin or skill configuration. Do not paste secrets into the cron prompt.

```bash
bash examples/runnable/101-x-twitter-ops-desk/scripts/install_skills.sh
bash examples/runnable/101-x-twitter-ops-desk/scripts/check_prereqs.sh
bash examples/runnable/101-x-twitter-ops-desk/scripts/install_cron.sh
```

## Smoke Test

- Run once with one target account and one search query.
- Confirm the output includes source links, confidence limits, and no published posts.
- Confirm any suggested write action is draft-only and asks for explicit approval before execution.

## KPI

- useful signals per run
- time-to-brief
- draft acceptance rate
- unauthorized write attempts

## Security Notes

- Default to read-only mode for first rollout.
- Never include API keys, cookies, tokens, or private account data in prompts or output.
- Do not post, reply, like, follow, DM, delete, or change profiles without exact user approval for that action.
- Include confidence limits when signals are sparse, stale, or ambiguous.

## Failure Modes

- Broad queries can produce noisy briefs with weak prioritization.
- Rate limits or unavailable upstream data can leave gaps; report gaps explicitly.
- Draft suggestions can drift from brand voice if the target audience is not specified.

## Rollback

```bash
openclaw cron delete <job-id>
```
