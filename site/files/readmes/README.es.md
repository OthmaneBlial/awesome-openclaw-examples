# Awesome OpenClaw Examples: 300 casos de uso de OpenClaw listos para ejecutar

![Logo de Awesome OpenClaw Use Cases and Examples](../../logo.png)

Lee este README en: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Este resumen traducido está sincronizado con un catálogo de 300 starters. El README en inglés y el catálogo completo son la referencia canónica.

Si buscaste `openclaw usecases` o `openclaw examples`, probablemente intentas responder una pregunta bastante simple: ¿qué puedo hacer realmente con OpenClaw sin construirlo todo desde cero? Este repo es mi respuesta. Reúne 300 starter packs ejecutables basados en skills públicas de ClawHub, cada uno con pasos de setup, prompts, salidas de ejemplo, KPI, notas de seguridad y guía de rollback.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Muchos repos de ejemplos de AI se ven bien hasta que intentas ejecutarlos.

Construí esto para equipos que quieren algo que puedan probar, inspeccionar y adaptar. En lugar de demos vagas, aquí tienes casos de uso de OpenClaw ligados a trabajo real: triage de PRs, limpieza de inboxes, seguimiento de SEO drift, resúmenes de redlines, detección de problemas de seguridad y transformación de material ruidoso en algo útil.

## Por qué la gente guarda este repo

- Los ejemplos se pueden ejecutar de verdad; no solo están descritos
- El repo se limita a skills públicas de ClawHub que puedes inspeccionar antes de instalar
- Cada ejemplo incluye salida de muestra para que evalúes la calidad antes del setup
- El template ya incluye setup, KPI, notas de seguridad, failure modes y rollback
- El catálogo cubre trabajo real en engineering, support, research, content, revenue, finance, security e internal ops
- Solo quiero ejemplos aquí si son lo bastante útiles como para justificar el tiempo de setup

## Empieza según tu objetivo

Si quieres una primera victoria rápida, elige la fila que más se parezca a una molestia que ya tengas.

| Objetivo | Empieza con | Por qué |
| --- | --- | --- |
| Desbloquear trabajo de engineering más rápido | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | El estado de un PR es fácil de entender, así que con una sola ejecución ya sabes si el workflow sirve |
| Publicar release communication más limpia | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Las release notes son visibles para todos, así que este piloto es fácil de evaluar y comparar |
| Procesar documentos y voz con menos fricción | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | Los PDFs y las transcripciones se vuelven caóticos muy rápido, así que una sola buena ejecución ya ahorra tiempo |
| Detectar pronto el descontrol del gasto en AI | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Si ya pagas por modelos, el cost drift es un problema que cualquiera reconoce enseguida |
| Convertir el search drift en oportunidades de content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Buen caso para marketing porque ranking drift y refresh opportunities son trabajo concreto, no estrategia vacía |
| Dar a leadership una visión semanal sin perseguir updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Convierte updates dispersas en un resumen ejecutivo limpio |

## Casos de uso de OpenClaw por equipo

Si buscaste literalmente `openclaw usecases`, empieza aquí. No son prompts sueltos. Están alineados con trabajo repetitivo que los equipos ya hacen.

| Equipo | Ejemplos fuertes | Lo que puedes automatizar |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Visibilidad de PRs, revisión de flaky tests, limpieza de repos, triage de seguridad |
| Support e inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Digests de escalación, limpieza de colas, seguimiento VIP, routing de solicitudes internas |
| Research y content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, seguimiento de competidores, repurposing, generación de FAQ |
| Marketing y SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Descubrimiento de temas, seguimiento de search drift, recopilación de proof |
| Revenue y customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Riesgo de renovación, ownership del follow-up, preparación de reuniones |
| People y recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Cuellos de botella de hiring, flujo de onboarding, contexto para entrevistas |
| Finance y legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Revisión de redlines, seguimiento de procurement, preparación para board |
| Leadership y operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Alineación diaria, ritmo operativo, launch readiness, reporting semanal |

## Top 10 Quick Wins

Revisé el catálogo completo de 300 ejemplos para esta lista. Son los que yo pondría primero delante de alguien porque el valor aparece rápido y la salida es fácil de juzgar.

| ID | Ejemplo | Por qué es un quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | Los PRs ya tienen estados claros, así que enseguida puedes ver si el ranking ayuda y si alguien lo usaría | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Las release notes son fáciles de revisar, fáciles de compartir y sirven para ganar buy-in sin tocar nada sensible | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | Los PDFs y las transcripciones se complican rápido, así que incluso un buen resumen ya ahorra tiempo desde el primer día | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Si tu equipo ya gasta en modelos, el cost drift es uno de los problemas más fáciles de explicar y justificar | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | El inbox triage es universal, y esto convierte peso difuso del email en una lista de tareas que alguien sí puede cerrar | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Tiene el mismo atractivo que inbox triage, pero más enfocado y con más presión porque mira justo los hilos que no puedes perder | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Buen workflow de marketing porque ranking drift y refresh opportunities se convierten en trabajo concreto, no en discurso vacío | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Los equipos de security pueden juzgarlo rápido porque muestra evidencia, no lenguaje abstracto sobre riesgo | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Los resúmenes semanales son tediosos de montar a mano, así que el tiempo ahorrado se nota casi de inmediato | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Las preguntas internas se repiten todo el tiempo, así que el routing y la reutilización de respuestas dan valor muy rápido | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Estándar de calidad de los ejemplos

Cada starter aceptado en este repo debe incluir:

- Una definición clara del problema y del alcance
- Skill stack y comandos de instalación
- Pasos de setup y archivos de prompts
- Sample output (`sample-output.md`)
- Un smoke test y un KPI
- Notas de seguridad
- Failure modes
- Guía de rollback

Layout típico de un starter:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Inicio rápido

1. Elige el ejemplo más cercano a un problema semanal real, no el que tenga el título más llamativo.
2. Instala las skills necesarias con `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Ejecuta `scripts/check_prereqs.sh` del ejemplo.
4. Revisa `sample-output.md` para entender cómo debería verse una buena salida.
5. Aplica el prompt y el setup de cron de ese ejemplo.
6. Empieza con un alcance pequeño, entrega en modo borrador y revisión humana antes de ampliarlo.

## Runnable starters (300 en total)

El repo incluye ahora 300 starter packs ejecutables de OpenClaw, agrupados según el tipo de trabajo que ayudan a resolver.

| Rango | Enfoque | Notas |
| --- | --- | --- |
| 01-30 | Foundation set | La biblioteca original de starters para engineering, support, research y workflows de founders. |
| 31-42 | Engineering quality y release operations | Bucles de dependencias, CI, ownership, release, hotfix y control del comportamiento de modelos. |
| 43-52 | Revenue, renewals y pipeline control | Riesgo de renovación, señales de expansión, trials, cobros y movimiento de partners. |
| 53-62 | Support, inbox y operator workflows | Intake de bugs, atención VIP, calendar prep, handoffs y operating memos. |
| 63-70 | Research, content y market signals | Competitive intelligence, quote mining, webinar repurposing, SEO y request routing. |
| 71-76 | People, recruiting y onboarding | Briefs de candidatos, stall tracking, onboarding, policy y source quality. |
| 77-82 | Finance, procurement y board prep | Renewals, redlines, procurement, seguimiento de PO, expense exceptions y board evidence. |
| 83-101 | Security, IT, governance e internal operations | Access review, secrets, audits, exceptions, IT intake, asset return y meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Consulta la lista completa en [examples/catalog.md](../../examples/catalog.md).

## Para quién es este repo

- Equipos que quieren evaluar casos de uso reales de OpenClaw antes de construir workflows propios
- Usuarios de OpenClaw que quieren ejemplos ejecutables en lugar de prompts vagos
- Founders, operators e ICs que buscan una automatización de alto impacto para lanzar primero
- Cualquiera que quiera inspeccionar la calidad de la salida antes de conectar sistemas de producción

## Notas importantes

- Son starter contracts informados por research, no una certificación del maintainer; valida cada workflow en tu propio entorno.
- Este es un repositorio mantenido de forma independiente; no es un programa oficial de OpenClaw.
- Feedback, fixes y mejores ejemplos son bienvenidos.
- Este repo no acepta workflows de crypto ni de trading.
- Este repo no acepta custom skills que no estén publicadas en ClawHub.
- ClawHub es un registro público de skills de OpenClaw, así que inspecciona las skills de terceros antes de habilitarlas.
- Usa least privilege, delivery targets de confianza, revisión humana para acciones salientes y rutas de rollback claras.

## FAQ de OpenClaw

### ¿Qué tipo de openclaw usecases hay en este repo?

Este repo cubre engineering, support, research, content, revenue, people ops, finance, security e internal operations. Si buscaste `openclaw usecases` con valor de negocio claro, empieza por la tabla de quick wins o por la sección orientada a objetivos.

### ¿Estos OpenClaw examples son realmente ejecutables?

Sí. Cada starter ejecutable debe incluir scripts, prompts, pasos de setup y una sample output. Aun así, debes validar cada workflow en tu propio entorno antes de usarlo en producción.

### ¿Por qué solo ClawHub skills?

Porque la reproducibilidad importa. Limitar el repo a skills públicas de ClawHub hace que estos OpenClaw examples sean más fáciles de inspeccionar, instalar, comparar y confiar.

### ¿Es este un repositorio oficial de OpenClaw?

No. Es una colección independiente y mantenida por el maintainer para ayudar a encontrar workflows útiles de OpenClaw más rápido.

### ¿Con qué ejemplo debería empezar primero?

Si quieres una primera ejecución segura, empieza por [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) o [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), según tu equipo.

## Contributing

Si quieres añadir o mejorar un starter, lee [CONTRIBUTING.md](../../CONTRIBUTING.md). El criterio es simple: sé reproducible, sé honesto, parte de la seguridad por defecto y muestra valor medible.
