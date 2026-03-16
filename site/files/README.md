# Awesome OpenClaw Examples

![Awesome OpenClaw Examples Logo](logo.png)

Practical OpenClaw examples built around real ClawHub skills, with clear setup, KPIs, sample outputs, and security guardrails.

If you searched for `awesome openclaw`, `openclaw examples`, `openclaw workflows`, or `clawhub skills examples`, this repository is built for that exact use case.

## What This Repo Is

- A practical example library, not a hype list
- Built from fresh research on OpenClaw docs and ClawHub skill usage data
- Focused on workflows teams can deploy quickly
- Structured as runnable starter packs instead of vague automation ideas

## Important Note

- Examples in this repo are designed as runnable starters; validate them in your own environment before production rollout.
- This is a maintainer-driven project, not a large backed community effort.
- Feedback from your real-world usage is very welcome, including corrections and proposed improvements.
- We do not accept crypto or trading examples in this repository.
- We do not accept custom skills that are not published through ClawHub.
- ClawHub is a public registry, so inspect third-party skills before enabling them.
- Safety policy: default to least privilege, trusted delivery targets, human review for outbound actions, and clear rollback paths.

## Fast Start

1. Pick a runnable example in `examples/runnable/`.
2. Install required skills:
   - `npx clawhub@latest install <skill-slug>`
3. Run the example's `scripts/check_prereqs.sh`.
4. Apply the prompt and cron setup from that example.
5. Review `sample-output.md` in the example folder to see expected output quality.

## OpenClaw FAQ

### What is this awesome OpenClaw repository?

This is a curated collection of practical OpenClaw examples focused on real, implementable workflows using ClawHub skills.

### Are these OpenClaw examples tested?

They are reviewed and tested by the maintainer before inclusion, with scripts, prompts, and sample outputs provided for each starter. This is still a maintainer-run repository rather than a community-backed program, so you should validate each workflow in your own environment and feedback is always welcome.

### Do you accept crypto workflows or off-hub custom skills?

No. This repo does not accept crypto or trading automations or custom skills that are not published through ClawHub.

## Top 10 Quick Wins

| ID | Example | Why It Is A Quick Win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | Fast visibility into blocked and stale PRs with immediate action queue | [Guide](examples/runnable/01-pr-radar/README.md) · [Sample](examples/runnable/01-pr-radar/sample-output.md) |
| 02 | SLA Guardian | Reduces customer response risk with scheduled escalation digest | [Guide](examples/runnable/02-sla-guardian/README.md) · [Sample](examples/runnable/02-sla-guardian/sample-output.md) |
| 03 | Release Notes Pilot | Produces publish-ready weekly release notes in under an hour | [Guide](examples/runnable/03-release-notes-pilot/README.md) · [Sample](examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | Converts document and audio intake into concise summaries and tasks | [Guide](examples/runnable/06-pdf-ops-desk/README.md) · [Sample](examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 07 | CI Flake Doctor | Surfaces recurring flaky failures and turns them into remediation queue | [Guide](examples/runnable/07-ci-flake-doctor/README.md) · [Sample](examples/runnable/07-ci-flake-doctor/sample-output.md) |
| 10 | Model Cost Command Center | Spots cost anomalies early and recommends practical reductions | [Guide](examples/runnable/10-model-cost-command-center/README.md) · [Sample](examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Turns high-signal inbox threads into ranked execution tasks | [Guide](examples/runnable/11-inbox-to-action/README.md) · [Sample](examples/runnable/11-inbox-to-action/sample-output.md) |
| 14 | Weekly Research Digest | Delivers a concise market/tech scan with clear next actions | [Guide](examples/runnable/14-weekly-research-digest/README.md) · [Sample](examples/runnable/14-weekly-research-digest/sample-output.md) |
| 19 | Support Escalation Digest | Highlights unresolved urgent support threads before SLA breach | [Guide](examples/runnable/19-support-escalation-digest/README.md) · [Sample](examples/runnable/19-support-escalation-digest/sample-output.md) |
| 20 | Product Changelog Curator | Keeps changelogs complete and release communication consistent | [Guide](examples/runnable/20-product-changelog-curator/README.md) · [Sample](examples/runnable/20-product-changelog-curator/sample-output.md) |

## Runnable Starters (100 Total)

Browse the full catalog in `examples/catalog.md`. The repository is organized into focused collections so the root docs stay readable.

| Range | Focus | Notes |
| --- | --- | --- |
| 01-30 | Foundation set | The original starter library across engineering, support, research, and founder workflows. |
| 31-42 | Engineering quality and release operations | Dependency, CI, ownership, release, hotfix, and model-behavior control loops. |
| 43-52 | Revenue, renewals, and pipeline control | Renewal risk, expansion signals, trials, collections, and partner motion. |
| 53-62 | Support, inbox, and operator workflows | Bug intake, VIP attention, calendar prep, handoffs, and operating memos. |
| 63-70 | Research, content, and market signals | Competitive intelligence, quote mining, webinar repurposing, SEO, and request routing. |
| 71-76 | People, recruiting, and onboarding | Candidate briefs, stall tracking, onboarding, policy, and source-quality workflows. |
| 77-82 | Finance, procurement, and board prep | Renewals, redlines, procurement, PO follow-up, expense exceptions, and board evidence. |
| 83-100 | Security, IT, governance, and internal operations | Access review, secrets, audits, exceptions, IT intake, asset return, and meeting hygiene. |

## Example Quality Standard

Every example in this repo must include:

- Problem definition
- Skill stack and install commands
- Setup steps
- Prompt file(s)
- Sample output (`sample-output.md`)
- Security notes
- Failure modes and rollback
- KPI and smoke test

## Contributing

See `CONTRIBUTING.md`.
