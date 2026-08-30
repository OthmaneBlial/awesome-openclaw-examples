# Awesome OpenClaw Examples: 300 casi d'uso OpenClaw pronti da eseguire

![Logo di Awesome OpenClaw Use Cases and Examples](../../logo.png)

Leggi questo README in: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Questa panoramica tradotta è sincronizzata con un catalogo di 300 starter. Il README inglese e il catalogo completo sono i riferimenti canonici.

Se hai cercato `openclaw usecases` o `openclaw examples`, probabilmente stai cercando di rispondere a una domanda semplice: cosa si può fare davvero con OpenClaw senza costruire tutto da zero? Questo repo è la mia risposta. Raccoglie 300 starter pack eseguibili basati su ClawHub skills pubbliche, ciascuno con passaggi di setup, prompts, sample output, KPI, note di sicurezza e indicazioni di rollback.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Molti repo di esempi AI sembrano ottimi finché non provi davvero a farli girare.

Ho messo insieme questo repo per team che vogliono qualcosa che possano testare, ispezionare e riutilizzare. Qui non trovi demo vaghe, ma casi d'uso OpenClaw legati a lavoro reale: fare triage delle PR, ripulire inbox, seguire il SEO drift, riassumere redlines, far emergere problemi di sicurezza e trasformare materiale rumoroso in qualcosa di utile.

## Perché le persone tengono questo repo a portata di mano

- Gli esempi sono eseguibili davvero, non solo descritti
- Il repo usa solo ClawHub skills pubbliche che puoi controllare prima di installarle
- Ogni esempio include un sample output per valutare la qualità prima del setup
- Il template include già setup, KPI, note di sicurezza, failure modes e rollback
- Il catalogo copre lavoro reale in engineering, support, research, content, revenue, finance, security e internal ops
- Voglio tenere qui solo esempi che valgano davvero il tempo di setup

## Da dove iniziare in base all'obiettivo

Se vuoi un primo risultato rapido, scegli la riga che assomiglia di più a un problema che hai già oggi.

| Obiettivo | Inizia da | Perché |
| --- | --- | --- |
| Sbloccare più velocemente il lavoro di engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | Lo stato di una PR è facile da capire, quindi basta una run per vedere se il workflow è utile |
| Migliorare la communication delle release | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Le release notes sono facili da rivedere e da confrontare, quindi funzionano bene come pilot |
| Elaborare documenti e voce più in fretta | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF e transcript diventano confusi in fretta, quindi già un buon summary fa risparmiare tempo |
| Intercettare presto il drift dei costi AI | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Se il team paga già per i models, il cost drift è un problema che tutti capiscono subito |
| Trasformare il search drift in opportunità di content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Ottimo use case per marketing, perché ranking drift e refresh opportunities diventano lavoro concreto |
| Dare alla leadership una vista settimanale senza inseguire updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Converte updates sparse in una executive summary pulita |

## Casi d'uso OpenClaw per team

Se hai cercato proprio `openclaw usecases`, inizia da qui. Non è una raccolta casuale di prompts. Sono workflow collegati al lavoro ripetitivo che i team fanno già.

| Team | Esempi forti | Cosa puoi automatizzare |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Visibilità sulle PR, review di flaky tests, pulizia del repo, security triage |
| Support e inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Digests di escalation, pulizia delle code, follow-up VIP, routing delle richieste interne |
| Research e content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, tracciamento dei competitor, repurposing, generazione di FAQ |
| Marketing e SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Scoperta di temi, monitoraggio del search drift, raccolta di proof |
| Revenue e customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal risk, ownership del follow-up, preparazione delle riunioni |
| People e recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Colli di bottiglia nel hiring, onboarding flow, contesto per i colloqui |
| Finance e legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Review delle redlines, follow-up procurement, preparazione board |
| Leadership e operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Allineamento quotidiano, operating cadence, launch readiness, reporting settimanale |

## Top 10 Quick Wins

Per questa lista ho passato in rassegna tutto il catalogo dei 300 esempi. Sono quelli che darei per primi a qualcuno, perché il valore si vede in fretta e l'output è facile da giudicare.

| ID | Esempio | Perché è un quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | Le PR hanno già stati chiari, quindi si capisce subito se il ranking aiuta davvero e se qualcuno lo userà | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Le release notes sono facili da rivedere, condividere e usare per ottenere buy-in senza toccare aree sensibili | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF e transcript diventano disordinati in fretta, quindi già un buon summary fa risparmiare tempo dal primo giorno | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Se il team spende già per i models, il cost drift è uno dei problemi più facili da spiegare e da rendere prioritario | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | La triage dell'inbox è universale, e questo workflow trasforma il peso diffuso delle email in una task list lavorabile | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Ha lo stesso fascino della triage dell'inbox, ma più focalizzato e più critico perché guarda i thread che non puoi perdere | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Buon workflow per marketing, perché ranking drift e refresh opportunities emergono come lavoro concreto, non come strategia vaga | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | I team security possono valutarlo rapidamente perché mostra evidence, non linguaggio astratto sul rischio | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Le sintesi settimanali a mano sono noiose da assemblare, quindi il risparmio di tempo si vede quasi subito | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Le domande interne si ripetono continuamente, quindi routing e riuso delle risposte danno valore molto in fretta | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Standard di qualità degli esempi

Ogni starter accettato in questo repo dovrebbe includere:

- Una definizione chiara del problema e dello scope
- Skill stack e comandi di installazione
- Passi di setup e file di prompts
- Sample output (`sample-output.md`)
- Uno smoke test e un KPI
- Note di sicurezza
- Failure modes
- Indicazioni di rollback

Layout tipico di uno starter:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Avvio rapido

1. Scegli l'esempio più vicino a un problema reale che si ripete ogni settimana, non il titolo più appariscente.
2. Installa le skills necessarie con `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Esegui `scripts/check_prereqs.sh` dell'esempio.
4. Guarda `sample-output.md` per capire come dovrebbe apparire un buon output.
5. Applica il prompt e il setup cron di quell'esempio.
6. Parti con scope ridotto, delivery in draft-only e review umana prima di allargare l'uso.

## Runnable starters (300 in totale)

Il repo include attualmente 300 starter pack OpenClaw eseguibili, raggruppati per il tipo di lavoro che aiutano a gestire.

| Intervallo | Focus | Note |
| --- | --- | --- |
| 01-30 | Foundation set | La libreria iniziale di starter per engineering, support, research e founder workflows. |
| 31-42 | Engineering quality e release operations | Loop su dependencies, CI, ownership, release, hotfix e controllo del comportamento dei models. |
| 43-52 | Revenue, renewals e pipeline control | Renewal risk, segnali di espansione, trials, collections e partner motion. |
| 53-62 | Support, inbox e operator workflows | Bug intake, attenzione VIP, calendar prep, handoffs e operating memos. |
| 63-70 | Research, content e market signals | Competitive intelligence, quote mining, webinar repurposing, SEO e request routing. |
| 71-76 | People, recruiting e onboarding | Candidate briefs, stall tracking, onboarding, policy e source quality. |
| 77-82 | Finance, procurement e board prep | Renewals, redlines, procurement, PO follow-up, expense exceptions e board evidence. |
| 83-101 | Security, IT, governance e internal operations | Access review, secrets, audits, exceptions, IT intake, asset return e meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Vedi l'elenco completo in [examples/catalog.md](../../examples/catalog.md).

## Per chi è questo repo

- Team che vogliono valutare casi d'uso reali di OpenClaw prima di costruire workflow propri
- Utenti OpenClaw che vogliono esempi eseguibili invece di prompts vaghi
- Founders, operators e ICs che vogliono lanciare prima una singola automazione ad alto impatto
- Chiunque voglia controllare la qualità dell'output prima di collegare sistemi di produzione

## Note importanti

- Sono starter contract informati dalla ricerca, non una certificazione del maintainer; valida ogni workflow nel tuo ambiente.
- Questo è un repo mantenuto in modo indipendente, non un programma ufficiale OpenClaw.
- Feedback, fixes ed esempi migliori sono benvenuti.
- Questo repo non accetta workflow crypto o trading.
- Questo repo non accetta custom skills che non siano pubblicate tramite ClawHub.
- ClawHub è un registro pubblico di OpenClaw skills, quindi controlla sempre le skills di terze parti prima di abilitarle.
- Lavora con least privilege, delivery targets affidabili, review umana per le azioni in uscita e percorsi di rollback chiari.

## FAQ OpenClaw

### Che tipo di openclaw usecases ci sono in questo repo?

Questo repo copre engineering, support, research, content, revenue, people ops, finance, security e internal operations. Se hai cercato `openclaw usecases` con un valore di business chiaro, parti dalla tabella dei quick wins o dalla sezione per obiettivi qui sopra.

### Questi OpenClaw examples sono davvero eseguibili?

Sì. Ogni starter eseguibile dovrebbe includere scripts, prompts, passi di setup e sample output. In ogni caso, devi validare ogni workflow nel tuo ambiente prima di usarlo in produzione.

### Perché solo ClawHub skills?

Perché la riproducibilità conta. Limitare il repo a ClawHub skills pubbliche rende questi OpenClaw examples più facili da ispezionare, installare, confrontare e considerare affidabili.

### È un repository ufficiale di OpenClaw?

No. È una raccolta indipendente di esempi OpenClaw mantenuta dal maintainer per aiutare più persone a trovare workflow utili più in fretta.

### Da quale esempio dovrei partire?

Se vuoi una prima esecuzione sicura, inizia da [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) oppure [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), a seconda del tuo team.

## Contributing

Se vuoi aggiungere o migliorare uno starter, leggi [CONTRIBUTING.md](../../CONTRIBUTING.md). Il criterio è semplice: essere riproducibile, onesto, sicuro per default e mostrare valore misurabile.
