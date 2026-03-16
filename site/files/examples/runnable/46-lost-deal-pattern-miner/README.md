# 46 - Lost Deal Pattern Miner

Builds a recurring lost-deal pattern memo from closed-lost deals and objection patterns.

## Skill Stack

```bash
npx clawhub@latest install gog
npx clawhub@latest install summarize
npx clawhub@latest install notion
```

## What It Does

- Pulls closed-lost deals and objection patterns from configured go-to-market systems
- Highlights risk, opportunity, and missing follow-up
- Produces a lost-deal pattern memo for revenue owners

## Setup

```bash
export ACCOUNT_SEGMENT='closed-lost opportunities'
export MAX_ITEMS='25'
export DELIVERY_CHANNEL='slack'
export DELIVERY_TARGET='channel:C1234567890'
export CRON_EXPR='22 14 * * 2'
export CRON_NAME='Lost Deal Pattern Miner'
```

```bash
bash examples/runnable/46-lost-deal-pattern-miner/scripts/check_prereqs.sh
bash examples/runnable/46-lost-deal-pattern-miner/scripts/install_cron.sh
```

## Smoke Test

- Run once and verify the lost-deal pattern memo includes evidence-backed prioritization.
- Confirm no external action is taken automatically and any draft output stays reviewable.

## KPI

- repeat objections reduced
- owner follow-up SLA
- coverage of high-value accounts

## Security Notes

- Keep account, pipeline, and commercial data in restricted channels only.
- Require human approval before any outbound customer or partner communication.

## Failure Modes

- Incomplete CRM or account data can hide risk or overstate opportunity.
- Outbound actions should remain draft-only until operators trust the ranking.

## Rollback

```bash
openclaw cron delete <job-id>
```
