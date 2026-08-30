# Awesome OpenClaw Examples: 300 praktických use cases pro OpenClaw, které lze rovnou spustit

![Logo Awesome OpenClaw Use Cases and Examples](../../logo.png)

Přečtěte si toto README v jazyce: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Tento přeložený přehled je synchronizován s katalogem 300 starterů. Anglický README a úplný katalog jsou kanonické.

Pokud jste hledali `openclaw usecases` nebo `openclaw examples`, pravděpodobně si chcete odpovědět na jednoduchou otázku: co se dá s OpenClaw opravdu dělat, aniž byste všechno stavěli od nuly? Tohle repo je moje odpověď. Shromažďuje 300 spustitelných starter packs postavených na veřejných ClawHub skills. Každý z nich obsahuje setup steps, prompts, sample outputs, KPI, security notes a rollback guidance.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Spousta AI repozitářů s ukázkami vypadá dobře jen do chvíle, než je skutečně zkusíte spustit.

Tohle repo jsem dal dohromady pro týmy, které chtějí něco, co si mohou otestovat, projít a případně znovu použít. Nejde o vágní demo nápady, ale o OpenClaw use cases napojené na skutečnou práci: PR triage, úklid inboxu, sledování SEO drift, shrnování redlines, zviditelnění security problémů a proměnu hlučných zdrojů na užitečný výstup.

## Proč si tohle repo lidé nechávají po ruce

- Příklady jsou opravdu spustitelné, nejsou jen popsané
- Repo stojí na veřejných ClawHub skills, které si můžete před instalací zkontrolovat
- Každý příklad má sample output, takže kvalitu vidíte ještě před setup
- setup, KPI, security notes, failure modes a rollback jsou už součástí template
- Katalog pokrývá reálnou práci v engineering, support, research, content, revenue, finance, security a internal ops
- Chci tu nechávat jen příklady, které opravdu stojí za čas vložený do setup

## Začněte podle cíle

Jestli chcete rychle první výsledek, sáhněte po řádku, který se nejvíc podobá problému, který už teď řešíte.

| Cíl | Začněte zde | Proč |
| --- | --- | --- |
| Rychleji odblokovat práci v engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | Stav PR je srozumitelný, takže už po jednom spuštění poznáte, jestli workflow pomáhá |
| Uklidit release communication | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes se snadno kontrolují a porovnávají, takže jde o dobrý pilot |
| Rychleji zpracovat dokumenty a hlas | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF a transcripts se rychle znepřehlední, takže i jeden dobrý summary šetří čas |
| Včas zachytit drift nákladů na AI | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Pokud už tým platí za models, cost drift je problém, který všichni pochopí hned |
| Proměnit search drift v content příležitosti | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Silný marketing use case, protože ranking drift a refresh opportunities se promění v konkrétní práci |
| Dát leadership týdenní přehled bez honění updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Mění roztroušené updates na čistou executive summary |

## OpenClaw use cases podle týmů

Pokud jste doslova hledali `openclaw usecases`, začněte tady. Není to náhodná hromada prompts. Jsou to workflows navázané na opakující se práci, kterou týmy už stejně dělají.

| Tým | Silné příklady | Co lze automatizovat |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Viditelnost PR, review flaky tests, úklid repo, security triage |
| Support a inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, čištění front, VIP follow-up, routing interních požadavků |
| Research a content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, sledování konkurence, repurposing, generování FAQ |
| Marketing a SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Objevování témat, monitoring search drift, sběr proof |
| Revenue a customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, příprava meetingů |
| People a recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Náborová úzká místa, onboarding flow, interview context |
| Finance a legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | review redlines, procurement follow-up, příprava board |
| Leadership a operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Denní sladění, operating cadence, launch readiness, týdenní reporting |

## Top 10 Quick Wins

Kvůli tomuto seznamu jsem prošel celý katalog 300 příkladů. Jsou to položky, které bych někomu dal jako první, protože jejich hodnota se ukáže rychle a kvalita output se dá snadno posoudit.

| ID | Příklad | Proč je to quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR už mají jasné stavy, takže rychle poznáte, jestli ranking pomáhá a jestli to lidé opravdu využijí | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes se snadno reviewují a sdílejí, takže je to dobrý způsob, jak získat buy-in bez zásahu do citlivých oblastí | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF a transcripts se rychle zamotají, takže už jeden dobrý summary šetří čas hned od začátku | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Pokud už tým utrácí za models, cost drift je jeden z nejjednodušších problémů na vysvětlení i prioritizaci | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage je univerzální potřeba a tento workflow mění rozptýlenou emailovou zátěž na task list, na které se dá opravdu pracovat | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Má podobnou sílu jako inbox triage, ale je užší a kritičtější, protože sleduje právě ty threads, které nesmíte minout | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Silný marketing workflow, protože ranking drift a refresh opportunities se vracejí jako konkrétní práce, ne jako vágní strategie | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Security týmy ho umí rychle posoudit, protože nabízí evidence, ne abstraktní řeči o riziku | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Ruční skládání týdenních shrnutí je únavné, takže úspora času je vidět téměř okamžitě | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Interní otázky se opakují pořád dokola, takže routing a znovupoužití odpovědí přinášejí hodnotu velmi rychle | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Standard kvality příkladů

Každý starter přijatý do tohoto repo by měl obsahovat alespoň:

- Jasnou definici problému a scope
- Skill stack a instalační příkazy
- setup steps a prompt files
- sample output (`sample-output.md`)
- smoke test a KPI
- security notes
- failure modes
- rollback guidance

Typická struktura starter:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Rychlý start

1. Vyberte příklad, který je nejblíž vašemu skutečnému opakovanému problému, ne ten s nejvýraznějším názvem.
2. Nainstalujte potřebné skills pomocí `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Spusťte `scripts/check_prereqs.sh` u daného příkladu.
4. Podívejte se nejdřív na `sample-output.md`, ať víte, jak má dobrý output vypadat.
5. Použijte prompt a cron setup z daného příkladu.
6. Začněte s úzkým scope, draft-only delivery a lidským review, teprve potom rozšiřujte.

## Runnable starters (celkem 300)

Repo teď obsahuje 300 spustitelných OpenClaw starter packs, seskupených podle typu práce, kterou týmům pomáhají řešit.

| Rozsah | Zaměření | Poznámky |
| --- | --- | --- |
| 01-30 | Foundation set | Původní knihovna starterů pro engineering, support, research a founder workflows. |
| 31-42 | Engineering quality a release operations | Smyčky kolem dependencies, CI, ownership, release, hotfix a kontroly chování models. |
| 43-52 | Revenue, renewals a pipeline control | renewal risk, expanzní signály, trials, collections a partner motion. |
| 53-62 | Support, inbox a operator workflows | bug intake, VIP pozornost, calendar prep, handoffs a operating memos. |
| 63-70 | Research, content a market signals | competitive intelligence, quote mining, webinar repurposing, SEO a request routing. |
| 71-76 | People, recruiting a onboarding | candidate briefs, stall tracking, onboarding, policy a source quality. |
| 77-82 | Finance, procurement a board prep | renewals, redlines, procurement, PO follow-up, expense exceptions a board evidence. |
| 83-101 | Security, IT, governance a internal operations | access review, secrets, audits, exceptions, IT intake, asset return a meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Plný seznam najdete v [examples/catalog.md](../../examples/catalog.md).

## Pro koho tohle repo je

- Pro týmy, které chtějí vyhodnotit skutečné OpenClaw use cases ještě předtím, než si postaví vlastní workflows
- Pro uživatele OpenClaw, kteří chtějí spustitelné příklady místo vágních prompts
- Pro founders, operators a ICs, kteří chtějí nejdřív nasadit jednu vysoce užitečnou automation
- Pro každého, kdo si chce ověřit kvalitu output dřív, než propojí production systems

## Důležité poznámky

- Jde o starter contracts vycházející z research, nikoli o certifikaci maintainerem; každý workflow ověřte ve vlastním prostředí.
- Jde o nezávisle udržované repo, ne o oficiální program OpenClaw.
- Feedback, fixes a lepší příklady jsou vítány.
- Toto repo nepřijímá crypto ani trading workflows.
- Toto repo nepřijímá custom skills, které nejsou publikované přes ClawHub.
- ClawHub je veřejný registry pro OpenClaw skills, proto si third-party skills před zapnutím zkontrolujte.
- Pracujte s least privilege, důvěryhodnými delivery targets, lidským review pro odchozí akce a jasnými rollback cestami.

## OpenClaw FAQ

### Jaké openclaw usecases v tomto repo jsou?

Repo pokrývá engineering, support, research, content, revenue, people ops, finance, security a internal operations. Pokud hledáte `openclaw usecases` s jasnou byznysovou hodnotou, začněte tabulkou quick wins nebo sekcí podle cíle nahoře.

### Jsou tyto OpenClaw examples opravdu spustitelné?

Ano. U každého runnable starter se očekává, že bude mít scripts, prompts, setup steps a sample output. Přesto byste měli každý workflow před production ověřit ve vlastním prostředí.

### Proč jen ClawHub skills?

Protože důležitá je reprodukovatelnost. Omezení repo na veřejné ClawHub skills dělá tyto OpenClaw examples snazšími na kontrolu, instalaci, porovnání i důvěru.

### Je to oficiální repo OpenClaw?

Ne. Je to nezávislá kolekce OpenClaw příkladů udržovaná maintainer, aby lidé rychleji našli užitečné OpenClaw workflows.

### Kterým příkladem mám začít?

Pokud chcete bezpečný první běh, začněte podle svého týmu s [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) nebo [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md).

## Contributing

Pokud chcete přidat nový starter nebo vylepšit existující, přečtěte si [CONTRIBUTING.md](../../CONTRIBUTING.md). Laťka je jednoduchá: musí to být reprodukovatelné, poctivé, bezpečné ve výchozím stavu a s měřitelnou hodnotou.
