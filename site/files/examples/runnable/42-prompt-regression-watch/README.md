# 42 - Prompt Regression Watch

Builds a recurring prompt regression brief from model cost and behavior anomalies after prompt or configuration changes.

## Skill Stack

```bash
npx clawhub@latest install model-usage
npx clawhub@latest install summarize
npx clawhub@latest install slack
```

## What It Does

- Scans model cost and behavior anomalies after prompt or configuration changes across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a prompt regression brief for operator review

## Setup

```bash
export TARGET_SCOPE='high-traffic prompts'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='54 10 * * 1-5'
export CRON_NAME='Prompt Regression Watch'
```

```bash
bash examples/runnable/42-prompt-regression-watch/scripts/check_prereqs.sh
bash examples/runnable/42-prompt-regression-watch/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the prompt regression brief includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- regressions caught before rollout
- triage latency
- repeat issue escape rate

## Security Notes

- Use read-only repository or analytics scopes for the first rollout.
- Deliver only to trusted engineering channels and require human review for follow-up writes.

## Failure Modes

- Missing repository scopes can hide critical context.
- Noisy data can over-rank low-value issues unless thresholds are tuned.

## Rollback

```bash
openclaw cron delete <job-id>
```
