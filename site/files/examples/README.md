# Runnable Starters

This folder contains 300 runnable OpenClaw starter packs. Each pack keeps the workflow contract inspectable: skill install commands, setup, a prompt, smoke test, KPI, security notes, failure modes, rollback, and an illustrative sample output.

## Start with a small, reviewable workflow

1. Choose a problem with a clear source and a measurable outcome.
2. Install only the listed ClawHub skills and use a narrow scope.
3. Run the prerequisite check, then inspect the sample output before connecting production data.
4. Deliver to a trusted destination in draft-only mode and add a human approval step before any external write.

## A few good entry points

- [01 - PR Radar](runnable/01-pr-radar/README.md)
- [03 - Release Notes Pilot](runnable/03-release-notes-pilot/README.md)
- [06 - PDF Ops Desk](runnable/06-pdf-ops-desk/README.md)
- [11 - Inbox to Action](runnable/11-inbox-to-action/README.md)
- [30 - Founder Daily Control Room](runnable/30-founder-daily-control-room/README.md)
- [66 - SEO Drift Watcher](runnable/66-seo-drift-watcher/README.md)
- [84 - Secrets Leak Triage Digest](runnable/84-secrets-leak-triage-digest/README.md)
- [102 - Customer Research Repository](runnable/102-customer-research-repository/README.md)
- [127 - Customer Onboarding Risk Radar](runnable/127-customer-onboarding-risk-radar/README.md)
- [180 - API Contract Drift Watch](runnable/180-api-contract-drift-watch/README.md)
- [202 - Personal Weekly Review](runnable/202-personal-weekly-review/README.md)
- [291 - Podcast Show Notes Drafter](runnable/291-podcast-show-notes-drafter/README.md)

## Browse by Collection

| Range | Focus |
| --- | --- |
| 01-30 | Foundation set |
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
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

## Full Catalog

- [Full catalog](catalog.md)
- [Contributing rules](../CONTRIBUTING.md)

## Skill Install Pattern

```bash
openclaw skills verify <skill-slug>
openclaw skills install <skill-slug>
```
