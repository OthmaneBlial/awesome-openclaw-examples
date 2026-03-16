# 41 - Alert Noise Deduper

Builds a recurring noise-reduction queue from repeated alert patterns and noisy failure signals.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install summarize
npx clawhub@latest install todoist
```

## What It Does

- Scans repeated alert patterns and noisy failure signals across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a noise-reduction queue for operator review

## Setup

```bash
export TARGET_SCOPE='on-call alerts'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='47 9 * * 1-5'
export CRON_NAME='Alert Noise Deduper'
```

```bash
bash examples/runnable/41-alert-noise-deduper/scripts/check_prereqs.sh
bash examples/runnable/41-alert-noise-deduper/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the noise-reduction queue includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- repeated alerts reduced
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
