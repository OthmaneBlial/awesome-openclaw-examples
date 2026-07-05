# Awesome OpenClaw Examples: 101 Runnable OpenClaw Use Cases

![Awesome OpenClaw Use Cases and Examples Logo](logo.png)

Read this README in: [English](README.md) · [Español](docs/readmes/README.es.md) · [Deutsch](docs/readmes/README.de.md) · [日本語](docs/readmes/README.ja.md) · [Français](docs/readmes/README.fr.md) · [Português](docs/readmes/README.pt.md) · [Русский](docs/readmes/README.ru.md) · [Italiano](docs/readmes/README.it.md) · [Nederlands](docs/readmes/README.nl.md) · [Polski](docs/readmes/README.pl.md) · [中文 (简体)](docs/readmes/README.zh-CN.md) · [中文 (繁體)](docs/readmes/README.zh-TW.md) · [한국어](docs/readmes/README.ko.md) · [Türkçe](docs/readmes/README.tr.md) · [العربية](docs/readmes/README.ar.md) · [Tiếng Việt](docs/readmes/README.vi.md) · [ไทย](docs/readmes/README.th.md) · [Bahasa Indonesia](docs/readmes/README.id.md) · [हिन्दी](docs/readmes/README.hi.md) · [Čeština](docs/readmes/README.cs.md)

If you searched for `openclaw usecases` or `openclaw examples`, you are probably trying to answer a simple question: what can I actually do with OpenClaw without building everything from scratch? This repo is my answer. It collects 101 runnable starter packs built on public ClawHub skills, each with setup steps, prompts, sample outputs, KPIs, security notes, and rollback guidance.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![101 Runnable Starters](https://img.shields.io/badge/101-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Maintainer Tested](https://img.shields.io/badge/reviewed-maintainer%20tested-244f78?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](examples/catalog.md) · [Runnable Starters](examples/runnable/README.md) · [Contributing](CONTRIBUTING.md)

> A lot of AI example repos look good right up until you try to run them.

I built this for teams that want something they can test, inspect, and steal parts from. Instead of vague demos, you get OpenClaw use cases tied to real jobs: triaging PRs, cleaning up inboxes, watching SEO drift, summarizing redlines, surfacing security issues, and turning noisy source material into something useful.

## Why people keep this repo around

- The examples are runnable, not just described
- The repo sticks to public ClawHub skills you can inspect before installing
- Sample output for every example so you can judge quality before setup
- Setup, KPI, security notes, failure modes, and rollback are part of the template
- The catalog covers real work across engineering, support, research, content, revenue, finance, security, and internal ops
- I only want examples here if they are useful enough to justify the setup time

## Start here by goal

If you want a first win quickly, pick the row that sounds closest to an annoyance you already have.

| Goal | Start Here | Why |
| --- | --- | --- |
| Unblock engineering work faster | [01 - PR Radar](examples/runnable/01-pr-radar/README.md) | PR state is easy to understand, so you can tell in one run whether the workflow is useful |
| Ship cleaner release communication | [03 - Release Notes Pilot](examples/runnable/03-release-notes-pilot/README.md) | Release notes are visible to everyone, which makes this an easy pilot with clear before-and-after output |
| Process documents and voice input faster | [06 - PDF Ops Desk](examples/runnable/06-pdf-ops-desk/README.md) | Messy PDFs and transcripts are painful enough that even one decent run saves time |
| Catch AI spend drift early | [10 - Model Cost Command Center](examples/runnable/10-model-cost-command-center/README.md) | If you are already paying for models, cost drift is a problem people recognize immediately |
| Turn search drift into content opportunities | [66 - SEO Drift Watcher](examples/runnable/66-seo-drift-watcher/README.md) | Good marketing use case because ranking drift and refresh opportunities are concrete, not hand-wavy |
| Give leadership a weekly pulse without status-chasing | [96 - Executive Weekly Wins Digest](examples/runnable/96-executive-weekly-wins-digest/README.md) | Converts scattered updates into a clean executive summary |

## OpenClaw usecases by team

If your search was literally `openclaw usecases`, start here. These are not random prompt dumps. They line up with the kinds of repeat work teams already do.

| Team | Strong Examples | What You Can Automate |
| --- | --- | --- |
| Engineering | [01 - PR Radar](examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](examples/runnable/84-secrets-leak-triage-digest/README.md) | PR visibility, flaky test review, repo cleanup, security triage |
| Support and Inbox Ops | [02 - SLA Guardian](examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](examples/runnable/99-internal-faq-router/README.md) | Escalation digests, queue cleanup, VIP follow-up, internal request routing |
| Research and Content | [14 - Weekly Research Digest](examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, competitor tracking, repurposing, FAQ generation |
| Marketing and SEO | [05 - Content Idea Miner](examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](examples/runnable/68-social-proof-collector/README.md), [101 - X/Twitter Ops Desk](examples/runnable/101-x-twitter-ops-desk/README.md) | Topic discovery, search drift monitoring, proof gathering, social signal triage |
| Revenue and Customer Success | [43 - Renewal Risk Explainer](examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal risk, follow-up ownership, meeting prep |
| People and Recruiting | [72 - Hiring Pipeline Stall Radar](examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](examples/runnable/75-interview-prep-brief/README.md) | Hiring bottlenecks, onboarding flow, interview context |
| Finance and Legal | [78 - Contract Redline Summary Board](examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](examples/runnable/82-board-packet-evidence-collector/README.md) | Redline review, procurement follow-up, board prep |
| Leadership and Operations | [30 - Founder Daily Control Room](examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](examples/runnable/96-executive-weekly-wins-digest/README.md) | Daily alignment, operating cadence, launch readiness, weekly reporting |

## Top 10 Quick Wins

I went through the full 101-example catalog for this list. These are the ones I would hand someone first because the value shows up quickly and the output is easy to judge.

| ID | Example | Why It Is A Quick Win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PRs already have clear states, so you can tell fast whether the ranking is helpful and whether anyone will use it | [Guide](examples/runnable/01-pr-radar/README.md) · [Sample](examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes are easy to review, easy to share, and a good way to get buy-in without touching anything sensitive | [Guide](examples/runnable/03-release-notes-pilot/README.md) · [Sample](examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDFs and transcripts get messy quickly, so even a decent summary can save real time on day one | [Guide](examples/runnable/06-pdf-ops-desk/README.md) · [Sample](examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | If your team already spends on models, cost drift is one of the easiest problems to explain and justify fixing | [Guide](examples/runnable/10-model-cost-command-center/README.md) · [Sample](examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Inbox triage is universal, and this turns vague email weight into a task list someone can actually work through | [Guide](examples/runnable/11-inbox-to-action/README.md) · [Sample](examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Same appeal as inbox triage, but tighter and higher stakes because it focuses on the threads you really cannot miss | [Guide](examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Good marketing workflow because ranking drift and refresh opportunities show up as concrete work, not vague strategy talk | [Guide](examples/runnable/66-seo-drift-watcher/README.md) · [Sample](examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Security teams can judge this one quickly because it surfaces evidence, not abstract risk language | [Guide](examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Weekly summaries are tedious to assemble by hand, so the time saved is obvious almost immediately | [Guide](examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Internal questions repeat all the time, so routing and answer reuse make this useful faster than most workflow ideas | [Guide](examples/runnable/99-internal-faq-router/README.md) · [Sample](examples/runnable/99-internal-faq-router/sample-output.md) |

## Example Quality Standard

Every accepted starter in this repo is expected to include:

- A clear problem definition and scope
- Skill stack and install commands
- Setup steps and prompt files
- Sample output (`sample-output.md`)
- A smoke test and KPI
- Security notes
- Failure modes
- Rollback guidance

Typical starter layout:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Fast Start

1. Pick the example closest to an existing weekly problem, not the one with the flashiest title.
2. Install the required skills with `npx clawhub@latest install <skill-slug>`.
3. Run the example's `scripts/check_prereqs.sh`.
4. Review `sample-output.md` so you know what good output should look like.
5. Apply the prompt and cron setup from that example.
6. Start with narrow scope, draft-only delivery, and human review before wider rollout.

## Runnable Starters (101 Total)

The repo currently includes 101 runnable OpenClaw starter packs, grouped by the kind of job they help teams get done.

| Range | Focus | Notes |
| --- | --- | --- |
| 01-30 | Foundation set | The original starter library across engineering, support, research, and founder workflows. |
| 31-42 | Engineering quality and release operations | Dependency, CI, ownership, release, hotfix, and model-behavior control loops. |
| 43-52 | Revenue, renewals, and pipeline control | Renewal risk, expansion signals, trials, collections, and partner motion. |
| 53-62 | Support, inbox, and operator workflows | Bug intake, VIP attention, calendar prep, handoffs, and operating memos. |
| 63-70 | Research, content, and market signals | Competitive intelligence, quote mining, webinar repurposing, SEO, and request routing. |
| 71-76 | People, recruiting, and onboarding | Candidate briefs, stall tracking, onboarding, policy, and source-quality workflows. |
| 77-82 | Finance, procurement, and board prep | Renewals, redlines, procurement, PO follow-up, expense exceptions, and board evidence. |
| 83-101 | Security, IT, governance, internal operations, and social ops | Access review, secrets, audits, exceptions, IT intake, asset return, meeting hygiene, and X/Twitter signal triage. |

See the full list in [examples/catalog.md](examples/catalog.md).

## Who this repo is for

- Teams evaluating real OpenClaw use cases before building custom workflows
- OpenClaw users who want runnable examples instead of vague prompts
- Founders, operators, and ICs looking for one high-signal automation to ship first
- Anyone who wants to inspect output quality before connecting production systems

## Important notes

- These examples are reviewed and tested by the maintainer before inclusion.
- This is a maintainer-run repository, not an official OpenClaw program.
- Feedback, fixes, and better examples are welcome.
- This repo does not accept crypto or trading workflows.
- This repo does not accept custom skills that are not published through ClawHub.
- ClawHub is a public registry for OpenClaw skills, so inspect third-party skills before enabling them.
- Default to least privilege, trusted delivery targets, human review for outbound actions, and clear rollback paths.

## OpenClaw FAQ

### What kind of openclaw usecases are in this repo?

This repo covers engineering, support, research, content, revenue, people ops, finance, security, and internal operations. If you searched for `openclaw usecases` with clear business value, start with the quick wins table or the by-goal section above.

### Are these OpenClaw examples actually runnable?

Yes. Every runnable starter is expected to include scripts, prompts, setup steps, and a sample output. You should still validate each workflow in your own environment before production use.

### Why only ClawHub skills?

Because reproducibility matters. Limiting the repo to public ClawHub skills makes these OpenClaw examples easier to inspect, install, compare, and trust.

### Is this an official OpenClaw repository?

No. This is an independent, maintainer-run collection of OpenClaw examples built to help people find useful OpenClaw workflows faster.

### Which example should I start with first?

If you want the safest first run, start with [01 - PR Radar](examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](examples/runnable/11-inbox-to-action/README.md), or [66 - SEO Drift Watcher](examples/runnable/66-seo-drift-watcher/README.md), depending on your team.

## Contributing

If you want to add or improve a starter, read [CONTRIBUTING.md](CONTRIBUTING.md). The bar is simple: be reproducible, be honest, be safe by default, and show measurable value.

- **[Context Kit](https://github.com/JDDavenport/context-kit)** — Personal Context Artifacts: 4 Markdown templates (wiki, mental-models, voice, protocols) + 5 Claude Code skills. Solves context amnesia — every session starts context-full. MIT, one-command install.