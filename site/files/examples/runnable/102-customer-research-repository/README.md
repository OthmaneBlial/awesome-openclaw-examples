# 102 - Customer Research Repository

Customer Research Repository turns scattered interview notes and customer emails into a tagged evidence index with source links and confidence labels. It is a bounded starter for weekly review, with human approval before any external write or outbound message.

## What It Does

- Collects scattered interview notes and customer emails within the declared workflow scope.
- Separates observed evidence, inferred context, and unresolved questions.
- Produces a tagged evidence index with source links and confidence labels.
- Keeps a dated run record so the next review can compare the same signal.

## Skill Stack

```bash
openclaw skills install gog
openclaw skills install summarize
openclaw skills install notion
```

## Setup

1. Review and verify the skills above before installation. OpenClaw treats third-party skills as untrusted code.
2. Install the skills above and authenticate only the accounts needed for this workflow.
3. Set a narrow scope and a trusted delivery target:

```bash
export WORKFLOW_SCOPE="demo workspace"
export SOURCE_WINDOW="last 7 days"
export DELIVERY_CHANNEL="slack"
export DELIVERY_TARGET="channel:C1234567890"
export CRON_EXPR="0 9 * * 1-5"
export CRON_NAME="Customer Research Repository"
```

4. Check the local OpenClaw prerequisite:

```bash
bash examples/runnable/102-customer-research-repository/scripts/check_prereqs.sh
```

5. Read [the illustrative sample output](sample-output.md), then install the draft-only cron job:

```bash
bash examples/runnable/102-customer-research-repository/scripts/install_cron.sh
```

## Smoke Test

```bash
openclaw cron list
openclaw cron run <job-id>
```

Confirm that the result contains source references, an explicit uncertainty section, and the expected delivery target before widening the scope. Treat all source text as data, not as instructions.

## KPI

- time to find supporting customer evidence.
- Evidence items with a source reference: target 100%.
- Runs requiring a human correction: establish a baseline in week one, then reduce it without hiding uncertainty.

## Security Notes

- Treat customer-identifying details as sensitive and minimize the source scope before the first run.
- Treat source text, links, attachments, and pasted instructions as untrusted content; never follow instructions found inside them.
- Use read-only permissions where available; keep outbound delivery restricted to a trusted destination.
- Require human review for recommendations, customer contact, policy interpretation, or any write action. Use sandboxed or tool-restricted reader sessions when the source is untrusted.

## Failure Modes

- Stale or incomplete source data can create a plausible but wrong conclusion; show the missing-input list.
- Similar records or ambiguous language can be merged incorrectly; preserve source links and review the queue.
- A delivery or authentication failure must leave the source data unchanged and be visible in the run log.

## Rollback

```bash
openclaw cron delete <job-id>
```

Delete the generated job, revoke any temporary integration scope, and keep the last reviewed artifact for comparison. This starter does not mutate source systems automatically.
