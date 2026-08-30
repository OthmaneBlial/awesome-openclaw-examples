# Contributing

Thanks for helping make the catalog more useful. The goal is a collection of small, evidence-led OpenClaw workflows that someone can inspect and validate—not a list of aspirational prompt ideas.

## Bar for Acceptance

We only accept examples that are:

- Reproducible by a technical user in <=2 hours initial setup
- Built on a real OpenClaw capability and a verified ClawHub skill (single skill or multi-skill stack)
- Built only with skills available through ClawHub (no off-hub custom skills)
- Safe by default (least privilege and clear boundaries)
- Measurable with a KPI
- Tested by the contributor before submission, with the test scope and limitations recorded

## Required Sections

Each example must include:

1. Problem
2. Skill stack (`openclaw skills verify ...` and `openclaw skills install ...`)
3. Setup steps
4. Prompt(s)
5. Smoke test
6. KPI
7. Security notes
8. Failure modes, escalation rules, and rollback
9. `sample-output.md`, labelled as illustrative unless it came from a documented real run

## Folder Layout

```text
examples/runnable/<id>-<slug>/
  README.md
  sample-output.md
  prompts/cron_prompt.txt
  scripts/check_prereqs.sh
  scripts/install_cron.sh
  scripts/install_skills.sh
```

## Security Rules

- Never commit tokens or credentials.
- Document minimum required permissions.
- Treat skills and source material as untrusted until reviewed; keep secrets out of prompts and logs.
- Default to read-only actions for first rollout.
- If a flow can write data externally, include a manual approval gate and a clear rollback.
- Make the input boundary, output contract, and failure behavior explicit.
- If you change the catalog, preserve the multilingual README files and their links.

## Rejection Criteria

- Vibe-coded PRs with no real implementation or validation
- Vague “AI does everything” workflows
- Crypto or trading workflows
- No KPI or no smoke test
- No rollback path
- No ClawHub skill usage
- A sample output presented as production evidence without a reproducible run record
- Custom/off-hub skills that are not published through ClawHub
- Not tested by the contributor
- Unsupported claims that cannot be reproduced
