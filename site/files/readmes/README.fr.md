# Awesome OpenClaw Examples : 300 cas d'usage OpenClaw prêts à être exécutés

![Logo de Awesome OpenClaw Use Cases and Examples](../../logo.png)

Lire ce README en : [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Cet aperçu traduit est synchronisé avec un catalogue de 300 starters. Le README anglais et le catalogue complet restent les références canoniques.

Si vous avez cherché `openclaw usecases` ou `openclaw examples`, vous essayez sans doute de répondre à une question simple : qu'est-ce qu'on peut vraiment faire avec OpenClaw sans tout reconstruire à partir de zéro ? Ce repo est ma réponse. Il rassemble 300 starter packs exécutables construits sur des ClawHub skills publiques, avec pour chacun les étapes de setup, les prompts, un sample output, des KPI, des notes de sécurité et une procédure de rollback.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Beaucoup de repos d'exemples AI ont l'air solides jusqu'au moment où on essaie vraiment de les lancer.

J'ai construit ce repo pour des équipes qui veulent quelque chose qu'elles puissent tester, inspecter et réutiliser. Au lieu de démos vagues, on trouve ici des cas d'usage OpenClaw reliés à du travail concret : faire la triage des PR, nettoyer des inboxes, suivre le SEO drift, résumer des redlines, faire remonter des problèmes de sécurité et transformer des sources bruyantes en quelque chose d'exploitable.

## Pourquoi les gens gardent ce repo sous la main

- Les exemples sont exécutables, pas seulement décrits
- Le repo se limite à des ClawHub skills publiques que vous pouvez inspecter avant l'installation
- Chaque exemple inclut un sample output pour juger la qualité avant le setup
- Le template intègre déjà setup, KPI, notes de sécurité, failure modes et rollback
- Le catalogue couvre du vrai travail en engineering, support, research, content, revenue, finance, security et internal ops
- Je ne veux garder ici que des exemples qui valent réellement le temps de setup

## Commencer selon votre objectif

Si vous voulez un premier résultat rapidement, prenez la ligne qui ressemble le plus à un problème que vous avez déjà.

| Objectif | Commencer par | Pourquoi |
| --- | --- | --- |
| Débloquer plus vite le travail d'engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | L'état d'une PR est facile à comprendre, donc un seul run suffit souvent pour voir si le workflow est utile |
| Mieux publier la communication de release | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Les release notes sont faciles à comparer et à montrer, donc c'est un bon pilote |
| Traiter plus vite des documents et de la voix | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | Les PDF et les transcripts deviennent vite pénibles, donc un bon résumé fait gagner du temps tout de suite |
| Repérer tôt les dérives de coûts AI | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Si vous payez déjà des models, le cost drift est un problème que tout le monde comprend vite |
| Transformer le search drift en opportunités de content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Bon cas d'usage marketing, parce que ranking drift et refresh opportunities deviennent du travail concret |
| Donner à la leadership un résumé hebdomadaire sans courir après les updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Transforme des updates éparpillées en une executive summary propre |

## Cas d'usage OpenClaw par équipe

Si vous avez tapé exactement `openclaw usecases`, commencez ici. Ce ne sont pas des prompts isolés. Ils correspondent à des tâches répétitives que les équipes font déjà.

| Équipe | Exemples forts | Ce que vous pouvez automatiser |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Visibilité sur les PR, revue de flaky tests, nettoyage de repo, security triage |
| Support et inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Digests d'escalade, nettoyage de files, suivi VIP, routing des demandes internes |
| Research et content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, suivi concurrentiel, repurposing, génération de FAQ |
| Marketing et SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Découverte de sujets, suivi du search drift, collecte de proof |
| Revenue et customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal risk, ownership du follow-up, préparation de meetings |
| People et recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Goulots de recrutement, onboarding flow, contexte pour les entretiens |
| Finance et legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Revue de redlines, suivi procurement, préparation board |
| Leadership et operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Alignement quotidien, operating cadence, launch readiness, reporting hebdomadaire |

## Top 10 Quick Wins

J'ai passé en revue tout le catalogue des 300 exemples pour cette liste. Ce sont les entrées que je donnerais en premier, parce que la valeur apparaît vite et que la qualité du résultat se juge facilement.

| ID | Exemple | Pourquoi c'est un quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | Les PR ont déjà des états clairs, donc on voit vite si le ranking aide vraiment et si quelqu'un s'en servira | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Les release notes sont faciles à relire, à partager et à montrer sans toucher à des sujets sensibles | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | Les PDF et les transcripts deviennent vite compliqués, donc même un bon résumé fait gagner du temps dès le premier jour | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Si votre équipe paie déjà des models, le cost drift est l'un des problèmes les plus simples à expliquer et à justifier | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | La triage d'inbox est universelle, et ce workflow transforme un poids diffus d'emails en task list actionnable | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Même intérêt que l'inbox triage, mais plus resserré et plus critique, parce qu'il vise les threads à ne pas rater | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Bon workflow marketing, parce que ranking drift et refresh opportunities deviennent du travail concret plutôt qu'un discours vague | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Les équipes security peuvent l'évaluer vite, parce qu'il remonte des preuves et pas seulement un langage abstrait sur le risque | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Les résumés hebdomadaires sont pénibles à faire à la main, donc le gain de temps se voit presque immédiatement | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Les questions internes reviennent sans arrêt, donc le routing et la réutilisation des réponses sont utiles très vite | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Niveau de qualité attendu pour les exemples

Chaque starter accepté dans ce repo doit inclure :

- Une définition claire du problème et du périmètre
- Le skill stack et les commandes d'installation
- Les étapes de setup et les fichiers de prompts
- Un sample output (`sample-output.md`)
- Un smoke test et un KPI
- Des notes de sécurité
- Des failure modes
- Une procédure de rollback

Structure type d'un starter :

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Démarrage rapide

1. Choisissez l'exemple qui colle le plus à un vrai problème hebdomadaire, pas celui qui a le titre le plus accrocheur.
2. Installez les skills nécessaires avec `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Lancez `scripts/check_prereqs.sh` de l'exemple.
4. Lisez `sample-output.md` pour voir à quoi ressemble un bon résultat.
5. Appliquez le prompt et le setup cron de cet exemple.
6. Commencez avec un petit scope, une delivery en mode brouillon et une validation humaine avant d'élargir.

## Runnable starters (300 au total)

Le repo contient actuellement 300 starter packs OpenClaw exécutables, regroupés par type de travail.

| Plage | Focus | Notes |
| --- | --- | --- |
| 01-30 | Foundation set | La collection d'origine pour engineering, support, research et founder workflows. |
| 31-42 | Engineering quality et release operations | Boucles autour des dependencies, de la CI, de l'ownership, des releases, des hotfixes et du contrôle du comportement des models. |
| 43-52 | Revenue, renewals et pipeline control | Renewal risk, signaux d'expansion, trials, collections et partner motion. |
| 53-62 | Support, inbox et operator workflows | Bug intake, attention VIP, calendar prep, handoffs et operating memos. |
| 63-70 | Research, content et market signals | Competitive intelligence, quote mining, webinar repurposing, SEO et request routing. |
| 71-76 | People, recruiting et onboarding | Candidate briefs, stall tracking, onboarding, policy et source quality. |
| 77-82 | Finance, procurement et board prep | Renewals, redlines, procurement, PO follow-up, expense exceptions et board evidence. |
| 83-101 | Security, IT, governance et internal operations | Access review, secrets, audits, exceptions, IT intake, asset return et meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Voir la liste complète dans [examples/catalog.md](../../examples/catalog.md).

## À qui s'adresse ce repo

- Aux équipes qui veulent évaluer de vrais cas d'usage OpenClaw avant de construire leurs propres workflows
- Aux utilisateurs OpenClaw qui veulent des exemples exécutables plutôt que des prompts vagues
- Aux founders, operators et ICs qui veulent lancer d'abord une automatisation à fort impact
- À toute personne qui veut inspecter la qualité du résultat avant de brancher des systèmes de production

## Notes importantes

- Ce sont des starter contracts guidés par la recherche, pas une certification du maintainer ; validez chaque workflow dans votre environnement.
- Ce repo est maintenu de manière indépendante ; ce n'est pas un programme officiel OpenClaw.
- Les retours, fixes et meilleurs exemples sont les bienvenus.
- Ce repo n'accepte pas les workflows crypto ou trading.
- Ce repo n'accepte pas les custom skills qui ne sont pas publiées via ClawHub.
- ClawHub est un registre public de OpenClaw skills. Inspectez donc les skills tierces avant de les activer.
- Travaillez avec least privilege, des delivery targets de confiance, une validation humaine pour les actions sortantes et des chemins de rollback clairs.

## FAQ OpenClaw

### Quels types de openclaw usecases trouve-t-on dans ce repo ?

Ce repo couvre engineering, support, research, content, revenue, people ops, finance, security et internal operations. Si vous avez cherché `openclaw usecases` avec une vraie valeur métier, commencez par le tableau des quick wins ou par la section orientée objectifs ci-dessus.

### Ces OpenClaw examples sont-ils vraiment exécutables ?

Oui. Chaque starter exécutable doit inclure des scripts, des prompts, des étapes de setup et un sample output. Vous devez malgré tout valider chaque workflow dans votre propre environnement avant un usage en production.

### Pourquoi seulement des ClawHub skills ?

Parce que la reproductibilité compte. Limiter le repo à des ClawHub skills publiques rend ces OpenClaw examples plus faciles à inspecter, installer, comparer et faire confiance.

### Est-ce un repository officiel OpenClaw ?

Non. C'est une collection indépendante, maintenue par le maintainer, pour aider à trouver plus vite des workflows OpenClaw réellement utiles.

### Avec quel exemple faut-il commencer ?

Si vous voulez un premier run sûr, commencez par [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) ou [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), selon votre équipe.

## Contributing

Si vous voulez ajouter ou améliorer un starter, lisez [CONTRIBUTING.md](../../CONTRIBUTING.md). La barre est simple : être reproductible, honnête, sûr par défaut, et montrer une valeur mesurable.
