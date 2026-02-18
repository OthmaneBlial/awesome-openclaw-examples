# Awesome OpenClaw Examples

![Awesome OpenClaw Examples Logo](logo.png)

Battle-tested OpenClaw examples built around real ClawHub skills, with clear setup, KPIs, and security guardrails.

If you searched for `awesome openclaw`, `openclaw examples`, `openclaw workflows`, or `clawhub skills examples`, this repository is built for that exact use case.

## What This Repo Is

- A practical example library, not a hype list
- Built from fresh research on OpenClaw docs and ClawHub skill usage data
- Focused on workflows teams can deploy quickly

## Important Note

- Every example in this repo has been personally tested by the maintainer before being published.
- This is a maintainer-driven project, not a large backed community effort.
- Feedback from your real-world experience is very welcome, including corrections and proposed improvements.
- We do not accept crypto/trading examples in this repository.
- We do not accept custom skills that are not published through ClawHub.
- Safety policy: we keep examples inside the ClawHub skill trust boundary because published skills go through ClawHub security checks with maintainer oversight.

## Fast Start

1. Pick a runnable example in `examples/runnable/`.
2. Install required skills:
   - `npx clawhub@latest install <skill-slug>`
3. Run the example's `scripts/check_prereqs.sh`.
4. Apply the prompt and cron setup from that example.
5. Review `sample-output.md` in the example folder to see expected output quality.

## OpenClaw FAQ

### What is this awesome OpenClaw repository?

This is a curated, tested collection of OpenClaw examples focused on real, implementable workflows using ClawHub skills.

### Are these OpenClaw examples tested?

Yes. Examples are personally tested by the maintainer before publication, and contributors must also test before PR acceptance.

### Do you accept crypto workflows or off-hub custom skills?

No. This repo does not accept crypto/trading automations or custom skills that are not published through ClawHub.

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

## Runnable Starters (Ready Now)

| ID | Example | Core Skills | Setup Time | Outcome |
| --- | --- | --- | --- | --- |
| 01 | [PR Radar](examples/runnable/01-pr-radar/README.md) | `github`, `summarize`, `slack` | 30-45 min | PR triage feed with priority ordering |
| 02 | [SLA Guardian](examples/runnable/02-sla-guardian/README.md) | `gog`, `todoist`, `slack` | 45-60 min | Escalation list for unanswered customer threads |
| 03 | [Release Notes Pilot](examples/runnable/03-release-notes-pilot/README.md) | `github`, `summarize`, `slack` | 30-45 min | Weekly release notes draft from merged PRs |
| 04 | [Meeting Briefing Concierge](examples/runnable/04-meeting-briefing-concierge/README.md) | `gog`, `summarize`, `notion` | 45-75 min | Automated pre-meeting briefs |
| 05 | [Content Idea Miner](examples/runnable/05-content-idea-miner/README.md) | `tavily-search`, `youtube-watcher`, `notion` | 45-75 min | Weekly idea pipeline with source-backed outlines |
| 06 | [PDF Ops Desk](examples/runnable/06-pdf-ops-desk/README.md) | `nano-pdf`, `summarize`, `openai-whisper` | 20-40 min | End-to-end document intake and transformation |
| 07 | [CI Flake Doctor](examples/runnable/07-ci-flake-doctor/README.md) | `github`, `summarize`, `todoist` | 45-60 min | Recurring CI flake queue with evidence-backed priorities |
| 08 | [Docs Drift Sentinel](examples/runnable/08-docs-drift-sentinel/README.md) | `github`, `notion` | 40-60 min | Drift report linking code changes to missing docs updates |
| 09 | [Weekly Incident Brief](examples/runnable/09-weekly-incident-brief/README.md) | `github`, `summarize`, `slack` | 45-60 min | Weekly incident leadership summary with follow-up gaps |
| 10 | [Model Cost Command Center](examples/runnable/10-model-cost-command-center/README.md) | `model-usage`, `summarize`, `slack` | 30-45 min | Daily usage + spend anomalies with optimization actions |
| 11 | [Inbox to Action](examples/runnable/11-inbox-to-action/README.md) | `gog`, `summarize`, `todoist` | 45-60 min | Important inbox threads converted into ranked action queue |
| 12 | [Calendar Conflict Resolver](examples/runnable/12-calendar-conflict-resolver/README.md) | `gog`, `caldav-calendar`, `summarize`, `todoist` | 60-90 min | Conflict detection and rebooking decision queue |
| 13 | [Personal CRM Lite](examples/runnable/13-personal-crm-lite/README.md) | `gog`, `summarize`, `notion` | 45-60 min | Contact memory briefs with follow-up suggestions |
| 14 | [Weekly Research Digest](examples/runnable/14-weekly-research-digest/README.md) | `tavily-search`, `summarize`, `slack` | 30-45 min | Weekly high-signal research brief with actions |
| 15 | [YouTube Research Desk](examples/runnable/15-youtube-research-desk/README.md) | `youtube-watcher`, `summarize`, `notion`, `slack` | 45-60 min | Transcript-backed video intelligence reports |
| 16 | [Voice Notes to Tasks](examples/runnable/16-voice-notes-to-tasks/README.md) | `openai-whisper`, `summarize`, `todoist` | 30-45 min | Audio inbox converted into prioritized execution tasks |
| 17 | [Sales Call Prep Bot](examples/runnable/17-sales-call-prep-bot/README.md) | `gog`, `summarize`, `notion` | 45-60 min | Pre-call account briefs with risks and next actions |
| 18 | [Customer Feedback Miner](examples/runnable/18-customer-feedback-miner/README.md) | `slack`, `summarize`, `notion` | 45-60 min | Thematic feedback clustering for roadmap decisions |
| 19 | [Support Escalation Digest](examples/runnable/19-support-escalation-digest/README.md) | `slack`, `summarize`, `todoist` | 45-60 min | Urgency-ranked unresolved support escalation feed |
| 20 | [Product Changelog Curator](examples/runnable/20-product-changelog-curator/README.md) | `github`, `summarize`, `notion` | 30-45 min | Publication-ready changelog draft from merged PRs |
| 21 | [Partner Update Generator](examples/runnable/21-partner-update-generator/README.md) | `gog`, `summarize` | 30-45 min | Weekly partner update drafts with clear risk flags |
| 22 | [Account Health Snapshot](examples/runnable/22-account-health-snapshot/README.md) | `api-gateway`, `notion`, `slack` | 45-75 min | Account-risk watchlist with intervention recommendations |
| 23 | [Invoice Follow-up Copilot](examples/runnable/23-invoice-follow-up-copilot/README.md) | `stripe-api`, `gog`, `notion` | 45-60 min | Prioritized overdue invoice follow-up queue |
| 24 | [Lead Intake Router](examples/runnable/24-lead-intake-router/README.md) | `typeform`, `notion`, `slack` | 45-60 min | Fit-scored lead routing and owner assignment digest |
| 25 | [Feature Request Triage](examples/runnable/25-feature-request-triage/README.md) | `github`, `summarize`, `todoist` | 45-60 min | Evidence-ranked product request queue |
| 26 | [Roadmap Signal Board](examples/runnable/26-roadmap-signal-board/README.md) | `tavily-search`, `summarize`, `notion`, `slack` | 45-60 min | Market-signal clustering for roadmap bets |
| 27 | [Design Sprint Assistant](examples/runnable/27-design-sprint-assistant/README.md) | `frontend-design`, `notion`, `slack` | 45-60 min | Sprint tradeoff brief with execution next steps |
| 28 | [On-call Handoff Builder](examples/runnable/28-on-call-handoff-builder/README.md) | `github`, `summarize`, `slack` | 30-45 min | Shift handoff summary with carry-over risk checklist |
| 29 | [Competitive Monitor](examples/runnable/29-competitive-monitor/README.md) | `tavily-search`, `summarize`, `todoist` | 45-60 min | Weekly competitor signal digest with response actions |
| 30 | [Founder Daily Control Room](examples/runnable/30-founder-daily-control-room/README.md) | `gog`, `github`, `todoist`, `weather` | 45-60 min | Daily executive brief across product, ops, and schedule |

## Example Quality Standard

Every example in this repo must include:

- Problem definition
- Skill stack and install commands
- Setup steps
- Sample output (`sample-output.md`)
- Security and failure modes
- KPI and smoke test

## Contributing

See `CONTRIBUTING.md`.
