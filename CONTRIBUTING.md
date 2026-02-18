# Contributing

## Bar for Acceptance

We only accept examples that are:

- Reproducible by a technical user in <=2 hours initial setup
- Built on real ClawHub skill capabilities (single skill or multi-skill stack)
- Built only with skills available through ClawHub (no off-hub custom skills)
- Safe by default (least privilege and clear boundaries)
- Measurable with a KPI
- Tested by the contributor before submission

## Required Sections

Each example must include:

1. Problem
2. Skill stack (`npx clawhub@latest install ...`)
3. Setup steps
4. Prompt(s)
5. Smoke test
6. KPI
7. Security notes
8. Failure modes and rollback

## Folder Layout

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
```

## Security Rules

- Never commit tokens or credentials.
- Document minimum required permissions.
- Default to read-only actions for first rollout.
- If a flow can write data externally, include a manual approval gate.

## Rejection Criteria

- Vibe-coded PRs with no real implementation or validation
- Vague “AI does everything” workflows
- Crypto or trading workflows
- No KPI or no smoke test
- No rollback path
- No ClawHub skill usage
- Custom/off-hub skills that are not published through ClawHub
- Not tested by the contributor
- Unsupported claims that cannot be reproduced
