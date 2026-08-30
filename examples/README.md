# Runnable Starters

This folder contains 201 runnable OpenClaw starter packs. Each pack keeps the workflow contract inspectable: skill install commands, setup, a prompt, smoke test, KPI, security notes, failure modes, rollback, and an illustrative sample output.

## Start with a small, reviewable workflow

1. Choose a problem with a clear source and a measurable outcome.
2. Install only the listed ClawHub skills and use a narrow scope.
3. Run the prerequisite check, then inspect the sample output before connecting production data.
4. Deliver to a trusted destination in draft-only mode and add a human approval step before any external write.

## A few good entry points

- [102 - Customer Research Repository](runnable/102-customer-research-repository/README.md)
- [103 - Data Quality Incident Brief](runnable/103-data-quality-incident-brief/README.md)
- [104 - KPI Definition Librarian](runnable/104-kpi-definition-librarian/README.md)
- [105 - Spreadsheet Formula Explainer](runnable/105-spreadsheet-formula-explainer/README.md)
- [106 - Database Query Review Desk](runnable/106-database-query-review-desk/README.md)
- [107 - Metric Anomaly Narrator](runnable/107-metric-anomaly-narrator/README.md)
- [108 - Experiment Results Interpreter](runnable/108-experiment-results-interpreter/README.md)
- [109 - Survey Theme Mapper](runnable/109-survey-theme-mapper/README.md)
- [110 - User Interview Evidence Index](runnable/110-user-interview-evidence-index/README.md)
- [111 - Research Source Credibility Check](runnable/111-research-source-credibility-check/README.md)
- [112 - Market Sizing Workbook Reviewer](runnable/112-market-sizing-workbook-reviewer/README.md)
- [113 - Data Dictionary Steward](runnable/113-data-dictionary-steward/README.md)

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

## Full Catalog

- [Full catalog](catalog.md)
- [Contributing rules](../CONTRIBUTING.md)

## Skill Install Pattern

```bash
openclaw skills verify <skill-slug>
openclaw skills install <skill-slug>
```
