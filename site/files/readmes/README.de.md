# Awesome OpenClaw Examples: 300 ausführbare OpenClaw-Anwendungsfälle

![Logo von Awesome OpenClaw Use Cases and Examples](../../logo.png)

Lies dieses README in: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Diese übersetzte Übersicht ist mit einem Katalog von 300 Startern synchronisiert. Das englische README und der vollständige Katalog sind maßgeblich.

Wenn du nach `openclaw usecases` oder `openclaw examples` gesucht hast, willst du wahrscheinlich eine ziemlich einfache Frage beantworten: Was kann ich mit OpenClaw tatsächlich tun, ohne alles von null aufzubauen? Dieses Repo ist meine Antwort darauf. Es bündelt 300 ausführbare Starter Packs auf Basis öffentlicher ClawHub-Skills, jeweils mit Setup-Schritten, Prompts, Beispielausgaben, KPI, Sicherheitsnotizen und Rollback-Hinweisen.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Viele AI-Beispiel-Repos sehen gut aus, bis man versucht, sie wirklich auszuführen.

Ich habe das hier für Teams gebaut, die etwas testen, prüfen und an ihre eigenen Bedürfnisse anpassen wollen. Statt vager Demos bekommst du OpenClaw-Anwendungsfälle für echte Arbeit: PR-Triage, Inbox-Aufräumen, SEO Drift beobachten, Redlines zusammenfassen, Sicherheitsprobleme sichtbar machen und aus unübersichtlichem Material etwas Brauchbares machen.

## Warum Leute dieses Repo behalten

- Die Beispiele sind wirklich ausführbar und nicht nur beschrieben
- Das Repo beschränkt sich auf öffentliche ClawHub-Skills, die du vor der Installation prüfen kannst
- Jedes Beispiel hat Beispielausgaben, damit du die Qualität vor dem Setup einschätzen kannst
- Setup, KPI, Sicherheitsnotizen, Failure Modes und Rollback gehören schon zum Template
- Der Katalog deckt echte Arbeit in Engineering, Support, Research, Content, Revenue, Finance, Security und Internal Ops ab
- Ich will hier nur Beispiele haben, die den Setup-Aufwand auch wirklich rechtfertigen

## Einstieg nach Ziel

Wenn du schnell einen ersten Nutzen sehen willst, nimm die Zeile, die am ehesten zu einem Problem passt, das du ohnehin schon hast.

| Ziel | Starte mit | Warum |
| --- | --- | --- |
| Engineering-Arbeit schneller entblocken | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PR-Status ist leicht zu verstehen, daher merkst du nach einem Lauf sofort, ob der Workflow etwas taugt |
| Sauberere Release-Kommunikation verschicken | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release Notes sind für alle sichtbar und damit ein einfacher Pilot mit klar vergleichbarem Output |
| Dokumente und Spracheingaben schneller verarbeiten | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDFs und Transkripte werden schnell chaotisch, daher spart schon ein guter Lauf echte Zeit |
| AI-Ausgaben früh unter Kontrolle bringen | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Wenn dein Team bereits Modelle nutzt, versteht jeder das Problem von Cost Drift sofort |
| Aus Search Drift konkrete Content-Chancen machen | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Starker Marketing-Use-Case, weil Ranking Drift und Refresh Opportunities konkrete Arbeit statt vager Strategie ergeben |
| Leadership einen Wochenüberblick geben, ohne Updates hinterherzulaufen | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Macht aus verstreuten Updates eine saubere Executive Summary |

## OpenClaw use cases nach Team

Wenn du wirklich nach `openclaw usecases` gesucht hast, fang hier an. Das sind keine losen Prompt-Sammlungen. Sie passen zu wiederkehrender Arbeit, die Teams ohnehin erledigen müssen.

| Team | Starke Beispiele | Was du automatisieren kannst |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR-Transparenz, Flaky-Test-Review, Repo-Aufräumen, Security-Triage |
| Support und Inbox Ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Eskalations-Digests, Queue-Aufräumen, VIP-Follow-up, Routing interner Anfragen |
| Research und Content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, Wettbewerbsbeobachtung, Repurposing, FAQ-Erstellung |
| Marketing und SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Themenfindung, Search Drift beobachten, Proof sammeln |
| Revenue und Customer Success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal Risk, Follow-up-Ownership, Meeting-Vorbereitung |
| People und Recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Hiring-Engpässe, Onboarding-Ablauf, Interview-Kontext |
| Finance und Legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Redline-Review, Procurement-Follow-up, Board-Vorbereitung |
| Leadership und Operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Tägliche Abstimmung, Operating Cadence, Launch Readiness, wöchentliches Reporting |

## Top 10 Quick Wins

Ich bin für diese Liste den kompletten Katalog mit 300 Beispielen durchgegangen. Das sind die Einträge, die ich jemandem zuerst geben würde, weil der Nutzen schnell sichtbar wird und sich der Output leicht beurteilen lässt.

| ID | Beispiel | Warum das ein Quick Win ist | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PRs haben bereits klare Zustände, daher siehst du schnell, ob das Ranking hilft und ob es jemand nutzen würde | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release Notes lassen sich leicht prüfen und teilen und sind ein guter Weg, ohne sensible Daten Buy-in zu bekommen | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDFs und Transkripte werden schnell unübersichtlich, deshalb spart schon eine brauchbare Zusammenfassung ab Tag eins Zeit | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Wenn dein Team bereits Geld für Modelle ausgibt, ist Cost Drift eines der einfachsten Probleme, die man erklären und priorisieren kann | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Inbox-Triage ist universell, und dieser Workflow macht aus diffusem E-Mail-Gewicht eine Task-Liste, die wirklich abgearbeitet werden kann | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Ähnlich wie Inbox-Triage, aber enger gefasst und mit höherem Druck, weil genau die Threads beobachtet werden, die du nicht verpassen darfst | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Starkes Marketing-Workflow, weil Ranking Drift und Refresh Opportunities als konkrete Arbeit statt als vage Strategierede auftauchen | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Security-Teams können das schnell beurteilen, weil der Workflow Belege liefert und nicht nur abstrakt über Risiko spricht | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Wöchentliche Zusammenfassungen sind von Hand mühsam; die Zeitersparnis ist daher fast sofort sichtbar | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Interne Fragen wiederholen sich ständig, daher liefert Routing plus Wiederverwendung von Antworten schnell echten Nutzen | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Qualitätsstandard für Beispiele

Jeder akzeptierte Starter in diesem Repo soll enthalten:

- Eine klare Problembeschreibung und einen klaren Scope
- Skill Stack und Installationsbefehle
- Setup-Schritte und Prompt-Dateien
- Sample Output (`sample-output.md`)
- Einen Smoke Test und einen KPI
- Sicherheitsnotizen
- Failure Modes
- Rollback-Hinweise

Typisches Layout eines Starters:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Schnellstart

1. Wähle das Beispiel, das am ehesten zu einem echten wöchentlichen Problem passt, nicht das mit dem auffälligsten Titel.
2. Installiere die benötigten Skills mit `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Führe `scripts/check_prereqs.sh` des Beispiels aus.
4. Schau dir `sample-output.md` an, damit du weißt, wie guter Output aussehen soll.
5. Übernimm den Prompt und das Cron-Setup aus diesem Beispiel.
6. Starte mit engem Scope, Draft-only Delivery und menschlicher Prüfung, bevor du den Einsatz ausweitest.

## Runnable Starters (300 insgesamt)

Das Repo enthält aktuell 300 ausführbare OpenClaw-Starter Packs, gruppiert nach der Art von Arbeit, die sie Teams abnehmen.

| Bereich | Fokus | Hinweise |
| --- | --- | --- |
| 01-30 | Foundation set | Die ursprüngliche Starter-Bibliothek für Engineering, Support, Research und Founder-Workflows. |
| 31-42 | Engineering Quality und Release Operations | Schleifen für Dependencies, CI, Ownership, Releases, Hotfixes und Kontrolle des Modellverhaltens. |
| 43-52 | Revenue, Renewals und Pipeline Control | Renewal Risk, Expansion Signals, Trials, Collections und Partner Motion. |
| 53-62 | Support, Inbox und Operator Workflows | Bug Intake, VIP-Aufmerksamkeit, Calendar Prep, Handoffs und Operating Memos. |
| 63-70 | Research, Content und Market Signals | Competitive Intelligence, Quote Mining, Webinar Repurposing, SEO und Request Routing. |
| 71-76 | People, Recruiting und Onboarding | Candidate Briefs, Stall Tracking, Onboarding, Policy und Source Quality. |
| 77-82 | Finance, Procurement und Board Prep | Renewals, Redlines, Procurement, PO-Follow-up, Expense Exceptions und Board Evidence. |
| 83-101 | Security, IT, Governance und Internal Operations | Access Review, Secrets, Audits, Exceptions, IT Intake, Asset Return und Meeting Hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Die komplette Liste findest du in [examples/catalog.md](../../examples/catalog.md).

## Für wen dieses Repo gedacht ist

- Teams, die echte OpenClaw-Anwendungsfälle bewerten wollen, bevor sie eigene Workflows bauen
- OpenClaw-Nutzer, die ausführbare Beispiele statt vager Prompts suchen
- Founders, Operators und ICs, die zuerst eine einzelne hochwirksame Automatisierung ausrollen wollen
- Alle, die die Output-Qualität prüfen möchten, bevor Produktionssysteme angebunden werden

## Wichtige Hinweise

- Dies sind research-informierte Starter-Verträge, keine Maintainer-Zertifizierung; prüfe jeden Workflow in deiner eigenen Umgebung.
- Das hier ist ein unabhängig gepflegtes Repo und kein offizielles OpenClaw-Programm.
- Feedback, Fixes und bessere Beispiele sind willkommen.
- Dieses Repo akzeptiert keine Crypto- oder Trading-Workflows.
- Dieses Repo akzeptiert keine Custom Skills, die nicht über ClawHub veröffentlicht sind.
- ClawHub ist ein öffentliches Register für OpenClaw-Skills. Prüfe Drittanbieter-Skills daher, bevor du sie aktivierst.
- Arbeite mit Least Privilege, vertrauenswürdigen Delivery Targets, menschlicher Prüfung bei ausgehenden Aktionen und klaren Rollback-Pfaden.

## OpenClaw-FAQ

### Welche Art von openclaw usecases gibt es in diesem Repo?

Dieses Repo deckt Engineering, Support, Research, Content, Revenue, People Ops, Finance, Security und Internal Operations ab. Wenn du nach `openclaw usecases` mit klarem Geschäftswert suchst, starte mit der Quick-Wins-Tabelle oder dem zielorientierten Einstieg weiter oben.

### Sind diese OpenClaw examples wirklich ausführbar?

Ja. Von jedem ausführbaren Starter werden Scripts, Prompts, Setup-Schritte und ein Sample Output erwartet. Du solltest trotzdem jeden Workflow in deiner eigenen Umgebung validieren, bevor du ihn produktiv einsetzt.

### Warum nur ClawHub-Skills?

Weil Reproduzierbarkeit wichtig ist. Die Beschränkung auf öffentliche ClawHub-Skills macht diese OpenClaw examples leichter prüfbar, installierbar, vergleichbar und vertrauenswürdiger.

### Ist das ein offizielles OpenClaw-Repository?

Nein. Das ist eine unabhängige, vom Maintainer gepflegte Sammlung von OpenClaw-Beispielen, damit Leute nützliche OpenClaw-Workflows schneller finden.

### Mit welchem Beispiel sollte ich zuerst anfangen?

Wenn du einen sicheren ersten Lauf willst, starte mit [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) oder [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), je nach Team.

## Contributing

Wenn du einen Starter ergänzen oder verbessern willst, lies [CONTRIBUTING.md](../../CONTRIBUTING.md). Die Messlatte ist einfach: reproduzierbar, ehrlich, standardmäßig sicher und mit messbarem Nutzen.
