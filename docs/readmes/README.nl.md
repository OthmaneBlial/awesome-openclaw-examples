# Awesome OpenClaw Examples: 300 uitvoerbare OpenClaw-use-cases

![Logo van Awesome OpenClaw Use Cases and Examples](../../logo.png)

Lees deze README in: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Dit vertaalde overzicht is gesynchroniseerd met een catalogus van 300 starters. De Engelse README en de volledige catalogus zijn leidend.

Als je op `openclaw usecases` of `openclaw examples` hebt gezocht, probeer je waarschijnlijk een eenvoudige vraag te beantwoorden: wat kun je met OpenClaw echt doen zonder alles vanaf nul op te bouwen? Dit repo is mijn antwoord daarop. Het bundelt 300 uitvoerbare starter packs op basis van publieke ClawHub skills, elk met setup-stappen, prompts, sample output, KPI, security notes en rollback-richtlijnen.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Veel AI-voorbeeldrepo's zien er goed uit, tot je ze echt probeert te draaien.

Ik heb dit repo gemaakt voor teams die iets willen dat ze kunnen testen, inspecteren en hergebruiken. Geen vage demo's, maar OpenClaw-use-cases voor echt werk: PR-triage, inboxes opruimen, SEO drift volgen, redlines samenvatten, security-problemen zichtbaar maken en rommelig bronmateriaal omzetten in iets bruikbaars.

## Waarom mensen dit repo bewaren

- De voorbeelden zijn echt uitvoerbaar en niet alleen beschreven
- Het repo gebruikt alleen publieke ClawHub skills die je vooraf kunt inspecteren
- Elk voorbeeld heeft sample output, zodat je de kwaliteit vóór setup kunt beoordelen
- Setup, KPI, security notes, failure modes en rollback zitten al in het template
- De catalogus dekt echt werk in engineering, support, research, content, revenue, finance, security en internal ops
- Ik wil hier alleen voorbeelden houden die de setup-tijd ook echt waard zijn

## Begin op basis van je doel

Als je snel een eerste resultaat wilt, kies dan de rij die het meest lijkt op een probleem dat je nu al hebt.

| Doel | Begin met | Waarom |
| --- | --- | --- |
| Engineering-werk sneller deblokkeren | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | De status van een PR is makkelijk te begrijpen, dus na één run zie je al of de workflow helpt |
| Strakkere release communication versturen | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes zijn makkelijk te beoordelen en te delen, dus dit is een sterke pilot |
| Documenten en spraak sneller verwerken | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF's en transcripts worden snel rommelig, dus zelfs één goede summary bespaart tijd |
| AI-kosten eerder uit de bocht zien lopen | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Als je team al voor models betaalt, begrijpt iedereen cost drift meteen |
| Search drift omzetten in content-kansen | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Sterke marketing use case, omdat ranking drift en refresh opportunities concreet werk opleveren |
| Leadership een weekoverzicht geven zonder overal achteraan te gaan | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Maakt van verspreide updates een nette executive summary |

## OpenClaw-use-cases per team

Als je letterlijk op `openclaw usecases` zocht, begin dan hier. Dit is geen losse stapel prompts. Het sluit aan op terugkerend werk dat teams toch al doen.

| Team | Sterke voorbeelden | Wat je kunt automatiseren |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR-zichtbaarheid, review van flaky tests, repo-opruiming, security triage |
| Support en inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Escalation digests, queue-opruiming, VIP follow-up, routing van interne verzoeken |
| Research en content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, concurrentie volgen, repurposing, FAQ-generatie |
| Marketing en SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Topic discovery, search drift volgen, proof verzamelen |
| Revenue en customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal risk, follow-up ownership, meetingvoorbereiding |
| People en recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Hiring-knelpunten, onboarding flow, interviewcontext |
| Finance en legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Review van redlines, procurement follow-up, boardvoorbereiding |
| Leadership en operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Dagelijkse afstemming, operating cadence, launch readiness, wekelijkse reporting |

## Top 10 Quick Wins

Ik heb voor deze lijst de volledige catalogus met 300 voorbeelden doorgelopen. Dit zijn de items die ik als eerste zou geven, omdat de waarde snel zichtbaar is en de output makkelijk te beoordelen blijft.

| ID | Voorbeeld | Waarom dit een quick win is | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR's hebben al duidelijke statussen, dus je ziet snel of de ranking helpt en of iemand dit echt gaat gebruiken | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes zijn makkelijk te reviewen en te delen, dus je kunt buy-in krijgen zonder iets gevoeligs aan te raken | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF's en transcripts worden snel onoverzichtelijk, dus zelfs één goede summary levert meteen tijdwinst op | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Als je team al geld uitgeeft aan models, is cost drift een van de makkelijkste problemen om uit te leggen en te prioriteren | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Inbox-triage is universeel, en deze workflow zet vage maildruk om in een task list waar iemand echt mee aan de slag kan | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Zelfde aantrekkingskracht als inbox-triage, maar strakker en urgenter omdat het juist kijkt naar de threads die je niet mag missen | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Sterke marketingworkflow, omdat ranking drift en refresh opportunities als concreet werk terugkomen en niet als vaag strategiepraatje | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Security-teams kunnen dit snel beoordelen, omdat het evidence geeft in plaats van abstract risicotaal | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Wekelijkse samenvattingen met de hand maken kost moeite, dus de tijdswinst is bijna direct zichtbaar | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Interne vragen blijven terugkomen, dus routing en hergebruik van antwoorden leveren snel waarde op | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Kwaliteitsstandaard voor voorbeelden

Elke starter die in dit repo wordt opgenomen, hoort het volgende te bevatten:

- Een duidelijke probleemdefinitie en scope
- Skill stack en installatiecommando's
- Setup-stappen en promptbestanden
- Sample output (`sample-output.md`)
- Een smoke test en een KPI
- Security notes
- Failure modes
- Rollback-richtlijnen

Typische starterstructuur:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Snel starten

1. Kies het voorbeeld dat het dichtst bij een echt wekelijks probleem ligt, niet de titel die het hardst schreeuwt.
2. Installeer de benodigde skills met `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Voer `scripts/check_prereqs.sh` uit voor dat voorbeeld.
4. Lees `sample-output.md`, zodat je vooraf weet hoe goede output eruitziet.
5. Neem de prompt en cron-setup van dat voorbeeld over.
6. Begin met een kleine scope, draft-only delivery en menselijke review voordat je opschaalt.

## Runnable starters (300 totaal)

Het repo bevat nu 300 uitvoerbare OpenClaw starter packs, gegroepeerd op het soort werk dat ze teams helpen doen.

| Reeks | Focus | Notities |
| --- | --- | --- |
| 01-30 | Foundation set | De oorspronkelijke starterbibliotheek voor engineering, support, research en founder workflows. |
| 31-42 | Engineering quality en release operations | Lussen rond dependencies, CI, ownership, release, hotfix en controle op modelgedrag. |
| 43-52 | Revenue, renewals en pipeline control | Renewal risk, uitbreidingssignalen, trials, collections en partner motion. |
| 53-62 | Support, inbox en operator workflows | Bug intake, VIP-aandacht, calendar prep, handoffs en operating memos. |
| 63-70 | Research, content en market signals | Competitive intelligence, quote mining, webinar repurposing, SEO en request routing. |
| 71-76 | People, recruiting en onboarding | Candidate briefs, stall tracking, onboarding, policy en source quality. |
| 77-82 | Finance, procurement en board prep | Renewals, redlines, procurement, PO follow-up, expense exceptions en board evidence. |
| 83-101 | Security, IT, governance en internal operations | Access review, secrets, audits, exceptions, IT intake, asset return en meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

De volledige lijst staat in [examples/catalog.md](../../examples/catalog.md).

## Voor wie dit repo bedoeld is

- Teams die echte OpenClaw-use-cases willen beoordelen voordat ze zelf workflows bouwen
- OpenClaw-gebruikers die uitvoerbare voorbeelden willen in plaats van vage prompts
- Founders, operators en ICs die eerst één automation met hoge impact willen uitrollen
- Iedereen die outputkwaliteit wil controleren voordat production systems worden gekoppeld

## Belangrijke notities

- Dit zijn research-informed starter contracts, geen certificering door de maintainer; valideer elke workflow in je eigen omgeving.
- Dit is een onafhankelijk onderhouden repo, geen officieel OpenClaw-programma.
- Feedback, fixes en betere voorbeelden zijn welkom.
- Dit repo accepteert geen crypto- of tradingworkflows.
- Dit repo accepteert geen custom skills die niet via ClawHub zijn gepubliceerd.
- ClawHub is een openbaar register voor OpenClaw skills, dus controleer third-party skills voordat je ze inschakelt.
- Werk met least privilege, vertrouwde delivery targets, menselijke review op uitgaande acties en duidelijke rollback-paden.

## OpenClaw-FAQ

### Wat voor openclaw usecases staan in dit repo?

Dit repo dekt engineering, support, research, content, revenue, people ops, finance, security en internal operations. Als je naar `openclaw usecases` zocht met duidelijke bedrijfswaarde, begin dan met de quick-wins-tabel of de doelgerichte sectie hierboven.

### Zijn deze OpenClaw examples echt uitvoerbaar?

Ja. Van elke uitvoerbare starter wordt verwacht dat er scripts, prompts, setup-stappen en sample output aanwezig zijn. Je moet elke workflow alsnog in je eigen omgeving valideren voordat je hem in productie gebruikt.

### Waarom alleen ClawHub skills?

Omdat reproduceerbaarheid ertoe doet. Door het repo te beperken tot publieke ClawHub skills worden deze OpenClaw examples makkelijker te inspecteren, installeren, vergelijken en vertrouwen.

### Is dit een officieel OpenClaw-repository?

Nee. Dit is een onafhankelijke verzameling OpenClaw-voorbeelden die door de maintainer wordt bijgehouden, zodat nuttige OpenClaw-workflows sneller gevonden worden.

### Met welk voorbeeld moet ik beginnen?

Als je een veilige eerste run wilt, begin dan met [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) of [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), afhankelijk van je team.

## Contributing

Als je een starter wilt toevoegen of verbeteren, lees dan [CONTRIBUTING.md](../../CONTRIBUTING.md). De lat is eenvoudig: reproduceerbaar zijn, eerlijk zijn, standaard veilig zijn en meetbare waarde laten zien.
