# Awesome OpenClaw Examples: 300 готовых к запуску сценариев использования OpenClaw

![Логотип Awesome OpenClaw Use Cases and Examples](../../logo.png)

Читайте этот README на: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Этот переводный обзор синхронизирован с каталогом из 300 starter-сценариев. Английский README и полный каталог являются основными источниками.

Если вы искали `openclaw usecases` или `openclaw examples`, то, скорее всего, хотите ответить на простой вопрос: что реально можно сделать с OpenClaw, не собирая всё с нуля? Этот repo и есть мой ответ. Здесь собраны 300 исполняемых starter packs на базе публичных ClawHub skills, и у каждого есть шаги setup, prompts, sample output, KPI, security notes и rollback guidance.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Многие AI-репозитории с примерами выглядят убедительно ровно до тех пор, пока вы не пытаетесь их запустить.

Я собрал этот repo для команд, которым нужно что-то проверяемое, понятное и пригодное для повторного использования. Здесь не абстрактные демо, а реальные сценарии OpenClaw: triage для PR, разбор inbox, отслеживание SEO drift, сводки по redlines, выявление security problems и превращение шумных источников в полезный результат.

## Почему этот repo сохраняют

- Примеры действительно можно запускать, а не просто читать о них
- Repo опирается только на публичные ClawHub skills, которые можно проверить до установки
- У каждого примера есть sample output, так что качество видно ещё до setup
- В template уже входят setup, KPI, security notes, failure modes и rollback
- Каталог покрывает реальную работу в engineering, support, research, content, revenue, finance, security и internal ops
- Я стараюсь держать здесь только те примеры, которые реально оправдывают время на setup

## С чего начать по цели

Если нужен быстрый первый результат, выбирайте строку, которая больше всего похожа на уже существующую у вас проблему.

| Цель | Начать с | Почему |
| --- | --- | --- |
| Быстрее разбирать блокировки в engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | Статусы PR понятны сразу, поэтому уже после одного запуска видно, полезен workflow или нет |
| Сделать communication по release чище | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes легко сравнивать и показывать другим, поэтому это удобный pilot |
| Быстрее обрабатывать документы и голос | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF и transcripts быстро превращаются в беспорядок, так что даже один хороший summary уже экономит время |
| Раньше замечать drift затрат на AI | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Если команда уже платит за models, проблему cost drift все понимают очень быстро |
| Превращать search drift в задачи для content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Сильный marketing use case: ranking drift и refresh opportunities становятся конкретной работой, а не абстрактной стратегией |
| Давать leadership еженедельную картину без погони за updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Превращает разрозненные updates в аккуратную executive summary |

## Сценарии OpenClaw по командам

Если вы буквально искали `openclaw usecases`, начните отсюда. Это не случайный набор prompts. Это сценарии под повторяющуюся работу, которую команды и так выполняют каждый день.

| Команда | Сильные примеры | Что можно автоматизировать |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Видимость по PR, разбор flaky tests, уборка repo, security triage |
| Support и inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Digests по эскалациям, чистка очередей, VIP follow-up, routing внутренних запросов |
| Research и content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, отслеживание конкурентов, repurposing, генерация FAQ |
| Marketing и SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Поиск тем, мониторинг search drift, сбор proof |
| Revenue и customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal risk, ownership follow-up, подготовка к встречам |
| People и recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Узкие места в hiring, onboarding flow, контекст для interview |
| Finance и legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Review redlines, procurement follow-up, подготовка к board |
| Leadership и operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Ежедневное выравнивание, operating cadence, launch readiness, weekly reporting |

## Top 10 Quick Wins

Для этого списка я просмотрел весь каталог из 300 примеров. Это те варианты, которые я бы дал в первую очередь, потому что ценность видна быстро, а качество output легко оценить.

| ID | Пример | Почему это quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | У PR уже есть понятные статусы, поэтому быстро видно, помогает ли ranking и будет ли им кто-то пользоваться | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes легко проверить и показать другим, не затрагивая чувствительные процессы | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF и transcripts быстро становятся неудобными, так что даже один хороший summary экономит время уже в первый день | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Если команда уже тратит деньги на models, cost drift легко объяснить и обосновать как проблему | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Triage inbox есть у всех, а этот workflow превращает расплывчатую email-нагрузку в task list, по которой можно реально работать | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Похоже на triage inbox, но уже и жёстче, потому что фокус только на threads, которые действительно нельзя пропустить | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Сильный marketing workflow, потому что ranking drift и refresh opportunities превращаются в конкретные действия, а не в туманные разговоры | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Команды security быстро понимают ценность, потому что здесь есть evidence, а не абстрактные разговоры про риск | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Еженедельные сводки вручную делать утомительно, поэтому экономия времени заметна почти сразу | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Внутренние вопросы повторяются постоянно, поэтому routing и повторное использование ответов быстро дают ощутимую пользу | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Стандарт качества для примеров

Каждый starter, который попадает в этот repo, должен включать:

- Чёткое описание проблемы и scope
- Skill stack и команды установки
- Шаги setup и файлы prompts
- Sample output (`sample-output.md`)
- Smoke test и KPI
- Security notes
- Failure modes
- Rollback guidance

Типовая структура starter:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Быстрый старт

1. Выбирайте пример, который ближе к реальной еженедельной проблеме, а не просто к самому громкому названию.
2. Установите нужные skills через `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Запустите `scripts/check_prereqs.sh` у выбранного примера.
4. Посмотрите `sample-output.md`, чтобы заранее понимать, как выглядит хороший output.
5. Примените prompt и cron setup из этого примера.
6. Начинайте с узкого scope, draft-only delivery и обязательной человеческой проверки, а уже потом расширяйте использование.

## Runnable starters (всего 300)

Сейчас в repo есть 300 исполняемых starter packs для OpenClaw, сгруппированных по типам задач, которые они помогают делать.

| Диапазон | Фокус | Примечания |
| --- | --- | --- |
| 01-30 | Foundation set | Базовая библиотека starter packs для engineering, support, research и founder workflows. |
| 31-42 | Engineering quality и release operations | Cycles для dependencies, CI, ownership, releases, hotfixes и контроля поведения models. |
| 43-52 | Revenue, renewals и pipeline control | Renewal risk, сигналы расширения, trials, collections и partner motion. |
| 53-62 | Support, inbox и operator workflows | Bug intake, VIP-внимание, calendar prep, handoffs и operating memos. |
| 63-70 | Research, content и market signals | Competitive intelligence, quote mining, webinar repurposing, SEO и request routing. |
| 71-76 | People, recruiting и onboarding | Candidate briefs, stall tracking, onboarding, policy и source quality. |
| 77-82 | Finance, procurement и board prep | Renewals, redlines, procurement, PO follow-up, expense exceptions и board evidence. |
| 83-101 | Security, IT, governance и internal operations | Access review, secrets, audits, exceptions, IT intake, asset return и meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Полный список смотрите в [examples/catalog.md](../../examples/catalog.md).

## Для кого этот repo

- Для команд, которые хотят оценить реальные сценарии OpenClaw до того, как строить свои workflows
- Для пользователей OpenClaw, которым нужны исполняемые примеры, а не размытые prompts
- Для founders, operators и ICs, которые хотят сначала запустить одну automation с высоким эффектом
- Для тех, кто хочет проверить качество output до подключения production systems

## Важные замечания

- Это starter contracts, основанные на research, а не сертификация maintainer; проверяйте каждый workflow в своей среде.
- Это независимый repo, а не официальная программа OpenClaw.
- Feedback, fixes и лучшие примеры приветствуются.
- Repo не принимает workflows для crypto и trading.
- Repo не принимает custom skills, которые не опубликованы через ClawHub.
- ClawHub — публичный registry для OpenClaw skills, поэтому перед включением проверяйте сторонние skills.
- Используйте least privilege, доверенные delivery targets, человеческую проверку для исходящих действий и понятные пути rollback.

## FAQ по OpenClaw

### Какие openclaw usecases есть в этом repo?

Repo охватывает engineering, support, research, content, revenue, people ops, finance, security и internal operations. Если вы ищете `openclaw usecases` с понятной бизнес-ценностью, начните с таблицы quick wins или раздела по целям выше.

### Эти OpenClaw examples действительно можно запускать?

Да. Каждый исполняемый starter должен содержать scripts, prompts, setup steps и sample output. Но перед production всё равно проверьте каждый workflow в своей среде.

### Почему только ClawHub skills?

Потому что важна воспроизводимость. Ограничение repo публичными ClawHub skills делает эти OpenClaw examples проще для проверки, установки, сравнения и доверия.

### Это официальный репозиторий OpenClaw?

Нет. Это независимая коллекция примеров OpenClaw, которую поддерживает maintainer, чтобы полезные workflows находились быстрее.

### С какого примера лучше начать?

Если нужен безопасный первый запуск, начните с [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) или [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) — в зависимости от команды.

## Contributing

Если хотите добавить новый starter или улучшить существующий, прочитайте [CONTRIBUTING.md](../../CONTRIBUTING.md). Планка простая: воспроизводимость, честность, безопасность по умолчанию и измеримая ценность.
