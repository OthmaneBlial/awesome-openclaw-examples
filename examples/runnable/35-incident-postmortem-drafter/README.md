# 35 - Incident Postmortem Drafter

Builds a recurring incident postmortem draft from incident timelines, issue links, and operator notes.

## Skill Stack

```bash
openclaw skills install github
openclaw skills install summarize
openclaw skills install notion
```

## What It Does

- Scans incident timelines, issue links, and operator notes across configured engineering tools
- Ranks issues by risk, recurrence, and delivery impact
- Produces an incident postmortem draft for operator review

## Setup

```bash
export TARGET_SCOPE='production incidents'
export LOOKBACK_DAYS='7'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='5 11 * * 1'
export CRON_NAME='Incident Postmortem Drafter'
```

```bash
bash examples/runnable/35-incident-postmortem-drafter/scripts/check_prereqs.sh
bash examples/runnable/35-incident-postmortem-drafter/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the incident postmortem draft includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- time from incident close to draft
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
