# Awesome OpenClaw Examples

![Awesome OpenClaw Examples Logo](logo.png)

100 runnable OpenClaw examples built around real ClawHub skills.

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](examples/catalog.md) · [Runnable Starters](examples/runnable/README.md) · [Contributing](CONTRIBUTING.md)

Awesome OpenClaw Examples is a curated library of practical OpenClaw examples, OpenClaw workflows, and ClawHub skill combinations you can actually run. If you are searching for `openclaw examples`, `openclaw workflows`, `clawhub skills examples`, `openclaw automation ideas`, or `ai agent workflow examples`, this repository is built to help you go from curiosity to first useful setup fast.

This is not a hype list. It is a maintainer-run collection of runnable starter packs with setup steps, prompts, sample outputs, KPIs, security notes, and rollback guidance so technical teams can evaluate real OpenClaw use cases without starting from a blank page.

## Why This Repo Stands Out

- 100 runnable starter packs instead of vague AI-agent ideas
- Built around public ClawHub skills and real OpenClaw workflow patterns
- Sample output for every example so you can judge quality before setup
- Security notes and rollback guidance baked into the examples
- Organized by real team use cases: engineering, support, research, revenue, finance, security, and internal ops
- Reviewed and tested by the maintainer before inclusion

## Example Quality Standard

Every accepted example in this repo is expected to include:

- Problem definition
- Skill stack and install commands
- Setup steps
- Prompt file(s)
- Sample output (`sample-output.md`)
- KPI and smoke test
- Security notes
- Failure modes and rollback

## Fast Start

1. Pick a starter in `examples/runnable/`.
2. Install the required skills:
   - `npx clawhub@latest install <skill-slug>`
3. Run the example's `scripts/check_prereqs.sh`.
4. Apply the prompt and cron setup from that example.
5. Review `sample-output.md` to compare expected output quality.
6. Roll out with least privilege and human review before wider use.

## Top 10 Quick Wins

These are the fastest paths to getting value from the repo.

| ID | Example | Why It Is A Quick Win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | Fast visibility into blocked and stale PRs with an immediate action queue | [Guide](examples/runnable/01-pr-radar/README.md) · [Sample](examples/runnable/01-pr-radar/sample-output.md) |
| 02 | SLA Guardian | Reduces customer response risk with scheduled escalation digests | [Guide](examples/runnable/02-sla-guardian/README.md) · [Sample](examples/runnable/02-sla-guardian/sample-output.md) |
| 03 | Release Notes Pilot | Produces publish-ready weekly release notes in under an hour | [Guide](examples/runnable/03-release-notes-pilot/README.md) · [Sample](examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | Turns document and audio intake into concise summaries and next steps | [Guide](examples/runnable/06-pdf-ops-desk/README.md) · [Sample](examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 07 | CI Flake Doctor | Surfaces recurring flaky failures and turns them into a remediation queue | [Guide](examples/runnable/07-ci-flake-doctor/README.md) · [Sample](examples/runnable/07-ci-flake-doctor/sample-output.md) |
| 10 | Model Cost Command Center | Spots cost anomalies early and recommends practical reductions | [Guide](examples/runnable/10-model-cost-command-center/README.md) · [Sample](examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Converts high-signal inbox threads into ranked execution tasks | [Guide](examples/runnable/11-inbox-to-action/README.md) · [Sample](examples/runnable/11-inbox-to-action/sample-output.md) |
| 14 | Weekly Research Digest | Delivers a concise market and tech scan with clear next actions | [Guide](examples/runnable/14-weekly-research-digest/README.md) · [Sample](examples/runnable/14-weekly-research-digest/sample-output.md) |
| 19 | Support Escalation Digest | Highlights unresolved urgent support threads before SLA breach | [Guide](examples/runnable/19-support-escalation-digest/README.md) · [Sample](examples/runnable/19-support-escalation-digest/sample-output.md) |
| 20 | Product Changelog Curator | Keeps changelogs complete and release communication consistent | [Guide](examples/runnable/20-product-changelog-curator/README.md) · [Sample](examples/runnable/20-product-changelog-curator/sample-output.md) |

## Runnable Starters (100 Total)

The repo currently includes 100 runnable OpenClaw starter packs.

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

See the full list in [examples/catalog.md](examples/catalog.md).

## Who This Repo Is For

- Developers and operators exploring practical OpenClaw automations
- Founders and small teams who want realistic AI workflow starters
- OpenClaw users looking for ClawHub skill combinations that map to real jobs
- Anyone who wants example prompts, setup steps, and output expectations before building their own workflow

## Important Notes

- These examples are reviewed and tested by the maintainer before inclusion.
- This is a maintainer-run repository, not a large community-backed program.
- Feedback, corrections, and improvement ideas are always welcome.
- This repo does not accept crypto or trading workflows.
- This repo does not accept custom skills that are not published through ClawHub.
- ClawHub is a public registry for OpenClaw skills, so inspect third-party skills before enabling them.
- Default to least privilege, trusted delivery targets, human review for outbound actions, and clear rollback paths.

## OpenClaw FAQ

### What is this repository?

This is a curated collection of practical OpenClaw examples focused on real, implementable workflows using ClawHub skills.

### Are these OpenClaw examples tested?

Yes. Examples are reviewed and tested by the maintainer before inclusion, and each runnable starter is expected to include scripts, prompts, and a sample output. You should still validate every workflow in your own environment before production use.

### Why only ClawHub skills?

Because the goal is reproducibility. Limiting examples to public ClawHub skills makes the workflows easier to inspect, install, and validate.

### Is this an official OpenClaw repository?

No. This is an independent, maintainer-run example library built to help more people discover useful OpenClaw workflows faster.

## Contributing

If you want to add or improve a starter, read [CONTRIBUTING.md](CONTRIBUTING.md). The bar is simple: be reproducible, be honest, be safe by default, and include measurable value.
