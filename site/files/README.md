# Awesome OpenClaw Examples: 201 runnable workflows

![Awesome OpenClaw Examples logo](logo.png)

Read this README in: [English](README.md) · [Español](docs/readmes/README.es.md) · [Deutsch](docs/readmes/README.de.md) · [日本語](docs/readmes/README.ja.md) · [Français](docs/readmes/README.fr.md) · [Português](docs/readmes/README.pt.md) · [Русский](docs/readmes/README.ru.md) · [Italiano](docs/readmes/README.it.md) · [Nederlands](docs/readmes/README.nl.md) · [Polski](docs/readmes/README.pl.md) · [中文 (简体)](docs/readmes/README.zh-CN.md) · [中文 (繁體)](docs/readmes/README.zh-TW.md) · [한국어](docs/readmes/README.ko.md) · [Türkçe](docs/readmes/README.tr.md) · [العربية](docs/readmes/README.ar.md) · [Tiếng Việt](docs/readmes/README.vi.md) · [ไทย](docs/readmes/README.th.md) · [Bahasa Indonesia](docs/readmes/README.id.md) · [हिन्दी](docs/readmes/README.hi.md) · [Čeština](docs/readmes/README.cs.md)

If you searched for `openclaw examples` or `openclaw usecases`, this is a practical starting point: 201 inspectable workflow starters built around the repository's documented ClawHub skill stack. Each pack includes a scoped setup, a prompt, a smoke test, a measurable KPI, security notes, failure modes, rollback guidance, and an illustrative output contract.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0b6f68?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples) [![201 Runnable Starters](https://img.shields.io/badge/201-runnable%20starters-17252b?style=for-the-badge)](examples/catalog.md) [![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-cb5b36?style=for-the-badge)](examples/catalog.md)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Full catalog](examples/catalog.md) · [Runnable starter index](examples/runnable/README.md) · [Contributing](CONTRIBUTING.md)

> The useful unit here is not a clever prompt. It is a small workflow with a clear input, an inspectable output, a human checkpoint, and a way to tell whether it helped.

## Table of contents

- [What is in the repo](#what-is-in-the-repo)
- [Start by outcome](#start-by-outcome)
- [Browse by team](#browse-by-team)
- [Top 10 quick wins](#top-10-quick-wins)
- [Quality contract](#quality-contract)
- [Start safely](#start-safely)
- [Catalog map](#catalog-map)
- [Languages](#languages)
- [Contributing](#contributing)
- [FAQ](#faq)

## What is in the repo

The catalog covers engineering, customer operations, research, content, revenue, data, people operations, finance, security, governance, personal admin, learning, and media workflows. It is intentionally biased toward reviewable read-and-draft flows: the starter can prepare a recommendation or artifact, but it does not silently send, edit, delete, purchase, or approve anything.

The live [Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples/docs.html) makes the library searchable by title, collection, skill, and quick-win status. Open an example to inspect the guide, sample output, prompt, and helper scripts without leaving the browser.

## Start by outcome

| If you want to... | Start with | Why it is a good first run |
| --- | --- | --- |
| Reduce engineering review lag | [01 - PR Radar](examples/runnable/01-pr-radar/README.md) | PR state and CI results are easy to compare before and after. |
| Turn documents into reviewable evidence | [06 - PDF Ops Desk](examples/runnable/06-pdf-ops-desk/README.md) | The sample makes quality and missing citations visible quickly. |
| Make inbox work actionable | [11 - Inbox to Action](examples/runnable/11-inbox-to-action/README.md) | It creates a bounded queue instead of taking action on your behalf. |
| Understand customer evidence | [102 - Customer Research Repository](examples/runnable/102-customer-research-repository/README.md) | Sources, tags, and confidence can be reviewed independently. |
| Improve customer onboarding visibility | [127 - Customer Onboarding Risk Radar](examples/runnable/127-customer-onboarding-risk-radar/README.md) | Blockers and owners have a concrete review cadence. |
| Catch content or search drift | [66 - SEO Drift Watcher](examples/runnable/66-seo-drift-watcher/README.md) | The output is a short queue of pages and evidence to verify. |

## Browse by team

| Team or job | Strong entry points | Typical output |
| --- | --- | --- |
| Engineering and release | [01 - PR Radar](examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](examples/runnable/07-ci-flake-doctor/README.md), [33 - Release Train Risk Board](examples/runnable/33-release-train-risk-board/README.md), [180 - API Contract Drift Watch](examples/runnable/180-api-contract-drift-watch/README.md) | Triage queues, risk briefs, ownership maps, and evidence-linked checks |
| Data and knowledge | [102 - Customer Research Repository](examples/runnable/102-customer-research-repository/README.md), [107 - Metric Anomaly Narrator](examples/runnable/107-metric-anomaly-narrator/README.md), [119 - FAQ Coverage Gap Finder](examples/runnable/119-faq-coverage-gap-finder/README.md) | Evidence indexes, anomaly narratives, definitions, and gap lists |
| Customer success and sales | [43 - Renewal Risk Explainer](examples/runnable/43-renewal-risk-explainer/README.md), [127 - Customer Onboarding Risk Radar](examples/runnable/127-customer-onboarding-risk-radar/README.md), [148 - Forecast Commit Evidence Pack](examples/runnable/148-forecast-commit-evidence-pack/README.md) | Account briefs, milestone digests, and draft-only review queues |
| Marketing and content | [05 - Content Idea Miner](examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](examples/runnable/66-seo-drift-watcher/README.md), [161 - Content Brief Quality Gate](examples/runnable/161-content-brief-quality-gate/README.md) | Source-backed briefs, drift queues, and review checklists |
| People and collaboration | [71 - Candidate Debrief Compiler](examples/runnable/71-candidate-debrief-compiler/README.md), [73 - Onboarding Checklist Concierge](examples/runnable/73-onboarding-checklist-concierge/README.md), [48 - Meeting Follow-up Enforcer](examples/runnable/48-meeting-follow-up-enforcer/README.md) | Handoffs, checklists, agendas, and aging action lists |
| Finance, legal, security | [78 - Contract Redline Summary Board](examples/runnable/78-contract-redline-summary-board/README.md), [84 - Secrets Leak Triage Digest](examples/runnable/84-secrets-leak-triage-digest/README.md), [98 - Security Exception Register](examples/runnable/98-security-exception-register/README.md) | Evidence packs, exception queues, and escalation-ready summaries |
| Personal, learning, and media | [30 - Founder Daily Control Room](examples/runnable/30-founder-daily-control-room/README.md), [16 - Voice Notes to Tasks](examples/runnable/16-voice-notes-to-tasks/README.md), [15 - YouTube Research Desk](examples/runnable/15-youtube-research-desk/README.md) | Private review notes, study plans, and draft media artifacts |

## Top 10 Quick Wins

These are the first workflows to try when you want a small, observable pilot. A quick win is not a promise of ROI; it is a workflow where the input, output, and review criteria are easy to inspect.

| ID | Example | Why It Is A Quick Win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PRs have clear states, so ranking quality is easy to judge in one run. | [Guide](examples/runnable/01-pr-radar/README.md) · [Sample](examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | The result is visible and reviewable before it reaches customers. | [Guide](examples/runnable/03-release-notes-pilot/README.md) · [Sample](examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | Messy documents reveal missing evidence and summary quality quickly. | [Guide](examples/runnable/06-pdf-ops-desk/README.md) · [Sample](examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Cost changes have concrete baselines and thresholds. | [Guide](examples/runnable/10-model-cost-command-center/README.md) · [Sample](examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | It turns an inbox into a queue while keeping sends behind review. | [Guide](examples/runnable/11-inbox-to-action/README.md) · [Sample](examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | The scope is narrow enough to validate alerts without ingesting everything. | [Guide](examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Ranking changes become a concrete list of pages to verify. | [Guide](examples/runnable/66-seo-drift-watcher/README.md) · [Sample](examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | It surfaces evidence and keeps remediation behind a human gate. | [Guide](examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 102 | Customer Research Repository | Source links and confidence labels make the output auditable. | [Guide](examples/runnable/102-customer-research-repository/README.md) · [Sample](examples/runnable/102-customer-research-repository/sample-output.md) |
| 127 | Customer Onboarding Risk Radar | Milestones, owners, and blockers map cleanly to a weekly review. | [Guide](examples/runnable/127-customer-onboarding-risk-radar/README.md) · [Sample](examples/runnable/127-customer-onboarding-risk-radar/sample-output.md) |

## Quality contract

Every runnable pack must make these details visible:

- a clear problem, scope, input, and expected output;
- real ClawHub skill references and current installation/verification commands;
- setup steps with a narrow first-run scope;
- a prompt with an explicit output contract and no invented evidence;
- a smoke test and a KPI that a human can measure;
- security notes for credentials, untrusted content, permissions, and delivery;
- failure modes, escalation rules, and a reversible rollback path;
- a clearly labelled illustrative sample output, unless a contributor has documented a real run.

Typical layout:

```text
examples/runnable/<id>-<slug>/
  README.md
  sample-output.md
  prompts/cron_prompt.txt
  scripts/check_prereqs.sh
  scripts/install_cron.sh
  scripts/install_skills.sh
```

## Start safely

1. Install OpenClaw and connect only the channel or account needed for the pilot.
2. Pick one workflow with a bounded source and a measurable outcome.
3. Review each listed skill and its trust/status information before installing it:

   ```bash
   openclaw skills verify <skill-slug>
   openclaw skills install <skill-slug>
   ```

4. Use an isolated session, read-only permissions where possible, a trusted delivery target, and draft-only output.
5. Compare the sample contract with the real run. Keep source links and unknowns visible.
6. Add a standing order or broader automation only after a human has reviewed several runs. OpenClaw's official docs are the authority for current CLI and policy details.

This repository does not claim that a starter has been validated against every provider, channel, account, or model. The packs are inspectable starting points; validate integrations and permissions in your own environment.

## Runnable Starters (201 Total)

### Catalog map

| Range | Focus |
| --- | --- |
| 01-30 | Foundation workflows |
| 31-42 | Engineering quality and release operations |
| 43-52 | Revenue, renewals, and pipeline control |
| 53-62 | Support, inbox, and operator workflows |
| 63-70 | Research, content, and market signals |
| 71-76 | People, recruiting, and onboarding |
| 77-82 | Finance, procurement, and board prep |
| 83-101 | Security, IT, governance, and internal operations |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |

Browse all rows in the [full catalog](examples/catalog.md), or use the [Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples/docs.html) to filter by skill and collection.

## Languages

The localized README entry points are kept in `docs/readmes/` and remain linked above. The English README and [full catalog](examples/catalog.md) are canonical for the complete example list; localized files preserve the multilingual overview and may trail the English catalog between translation updates.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Good additions are concrete, scoped, source-backed, measurable, safe by default, and honest about what was actually tested. Crypto and trading workflows are intentionally out of scope.

## FAQ

### Is this an official OpenClaw repository?

No. This is an independent, maintainer-run collection. Use the [official OpenClaw documentation](https://docs.openclaw.ai/) for the current product, CLI, channel, skill, and security contract.

### Are all examples production-ready?

No. They are runnable starter contracts, not a certification. Each one gives you a setup path, a smoke test, a KPI, safety boundaries, and an illustrative output so you can validate it before production use.

### Why use ClawHub skills?

The repository keeps its skill dependencies inspectable and discoverable. Verify every third-party skill before installation, pin versions when your deployment requires reproducibility, and keep secrets out of prompts and logs.

### How should I choose an example?

Start with the smallest recurring problem you can measure. Use the [quick wins](#top-10-quick-wins), search the [Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples/docs.html), then run one narrow pilot before adding more authority or integrations.

### Where did the new workflow categories come from?

The expansion is informed by the official OpenClaw capability, automation, security, memory, media, and showcase documentation. The working notes are in [research_openclaw_examples](research_openclaw_examples/findings_openclaw_patterns.md).
