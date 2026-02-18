# 27 - Design Sprint Assistant

Coordinates design sprint inputs and outputs into a single decision-ready brief.

## Skill Stack

```bash
npx clawhub@latest install frontend-design
npx clawhub@latest install notion
npx clawhub@latest install slack
```

## What It Does

- Collects sprint goals, constraints, and feedback artifacts
- Summarizes candidate directions and tradeoffs
- Produces prioritized next-step plan for design/engineering

## Setup

```bash
export SPRINT_TOPIC='agent onboarding UX'
export REVIEW_WINDOW_DAYS='5'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='0 17 * * 5'
export CRON_NAME='Design Sprint Assistant'
```

```bash
bash examples/runnable/27-design-sprint-assistant/scripts/check_prereqs.sh
bash examples/runnable/27-design-sprint-assistant/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify output includes options, tradeoffs, and recommended next experiment.
- Confirm unresolved assumptions are explicitly listed.

## KPI

- Design decision cycle time
- Experiment throughput per sprint
- Rework rate after design sign-off

## Security Notes

- Keep pre-release design artifacts in restricted spaces.
- Clearly separate approved output from draft explorations.

## Rollback

```bash
openclaw cron delete <job-id>
```
