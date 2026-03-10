# 38 - Docs Snippet Verifier

Builds a recurring docs verification packet from documentation snippets that may no longer match shipped behavior.

## Skill Stack

```bash
npx clawhub@latest install github
npx clawhub@latest install notion
npx clawhub@latest install summarize
```

## What It Does

- Scans documentation snippets that may no longer match shipped behavior across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces a docs verification packet for operator review

## Setup

```bash
export TARGET_SCOPE='developer docs'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='26 14 * * 4'
export CRON_NAME='Docs Snippet Verifier'
```

```bash
bash examples/runnable/38-docs-snippet-verifier/scripts/check_prereqs.sh
bash examples/runnable/38-docs-snippet-verifier/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the docs verification packet includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- docs mismatches caught pre-release
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
