# Awesome OpenClaw Examples: 300 casos de uso de OpenClaw prontos para executar

![Logo de Awesome OpenClaw Use Cases and Examples](../../logo.png)

Leia este README em: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Este resumo traduzido está sincronizado com um catálogo de 300 starters. O README em inglês e o catálogo completo são a referência canônica.

Se você buscou `openclaw usecases` ou `openclaw examples`, provavelmente está tentando responder a uma pergunta simples: o que dá para fazer com OpenClaw de verdade sem montar tudo do zero? Este repo é a minha resposta. Ele reúne 300 starter packs executáveis baseados em ClawHub skills públicas, cada um com passos de setup, prompts, sample output, KPI, notas de segurança e orientação de rollback.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Muitos repos de exemplos de AI parecem ótimos até a hora de tentar rodar.

Eu montei este repo para equipes que querem algo que possam testar, inspecionar e reaproveitar. Em vez de demos vagas, aqui você encontra casos de uso de OpenClaw ligados a trabalho real: triagem de PRs, limpeza de inboxes, acompanhamento de SEO drift, resumo de redlines, exposição de problemas de segurança e transformação de material barulhento em algo útil.

## Por que as pessoas guardam este repo

- Os exemplos são executáveis de verdade, não apenas descritos
- O repo fica em ClawHub skills públicas que você pode inspecionar antes de instalar
- Todo exemplo traz sample output para avaliar a qualidade antes do setup
- O template já inclui setup, KPI, notas de segurança, failure modes e rollback
- O catálogo cobre trabalho real em engineering, support, research, content, revenue, finance, security e internal ops
- Eu só quero exemplos aqui se eles realmente compensarem o tempo de setup

## Comece pelo objetivo

Se você quer um primeiro ganho rápido, escolha a linha que mais parece com um problema que sua equipe já sente hoje.

| Objetivo | Comece por | Por quê |
| --- | --- | --- |
| Destravar trabalho de engineering mais rápido | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | O estado de uma PR é fácil de entender, então uma única execução já mostra se o workflow ajuda |
| Melhorar a comunicação de release | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes são fáceis de revisar e comparar, então funcionam bem como piloto |
| Processar documentos e voz com menos esforço | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDFs e transcripts ficam bagunçados rápido, então um bom resumo já economiza tempo no primeiro dia |
| Detectar cedo a deriva de custos de AI | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Se sua equipe já paga por models, cost drift é um problema que todo mundo entende rápido |
| Transformar search drift em oportunidades de content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Bom caso para marketing porque ranking drift e refresh opportunities viram trabalho concreto |
| Dar visibilidade semanal para a leadership sem correr atrás de updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Converte updates espalhadas em uma executive summary limpa |

## Casos de uso de OpenClaw por equipe

Se a sua busca foi literalmente `openclaw usecases`, comece aqui. Não é uma coleção solta de prompts. São workflows ligados ao trabalho repetitivo que as equipes já fazem.

| Equipe | Exemplos fortes | O que dá para automatizar |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Visibilidade de PRs, revisão de flaky tests, limpeza de repos, security triage |
| Support e inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | Digests de escalonamento, limpeza de filas, acompanhamento VIP, routing de pedidos internos |
| Research e content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | Monitoring, rastreamento de concorrentes, repurposing, geração de FAQ |
| Marketing e SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Descoberta de temas, monitoramento de search drift, coleta de proof |
| Revenue e customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | Renewal risk, ownership de follow-up, preparação de reuniões |
| People e recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Gargalos de contratação, fluxo de onboarding, contexto para entrevistas |
| Finance e legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | Revisão de redlines, acompanhamento de procurement, preparação de board |
| Leadership e operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Alinhamento diário, operating cadence, launch readiness, reporting semanal |

## Top 10 Quick Wins

Eu revisei o catálogo completo de 300 exemplos para montar esta lista. São os itens que eu mostraria primeiro para alguém, porque o valor aparece rápido e o output é fácil de julgar.

| ID | Exemplo | Por que é um quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PRs já têm estados claros, então dá para ver rápido se o ranking ajuda e se alguém vai usar aquilo | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes são fáceis de revisar, compartilhar e usar para conseguir buy-in sem mexer em áreas sensíveis | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDFs e transcripts ficam confusos rápido, então até um bom resumo já gera economia de tempo no primeiro dia | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Se sua equipe já gasta com models, cost drift é um dos problemas mais fáceis de explicar e priorizar | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Triagem de inbox é universal, e este workflow transforma peso difuso de email em uma task list que alguém consegue fechar | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Tem o mesmo apelo da triagem de inbox, mas com recorte mais estreito e mais crítico porque foca nos threads que não podem passar | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Bom workflow de marketing porque ranking drift e refresh opportunities aparecem como trabalho concreto, não discurso vago | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Times de security conseguem avaliar rápido porque o workflow mostra evidência, não linguagem abstrata sobre risco | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Resumos semanais dão trabalho para montar na mão, então o ganho de tempo fica claro quase imediatamente | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Perguntas internas se repetem o tempo todo, então routing e reaproveitamento de respostas ajudam muito rápido | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Padrão de qualidade dos exemplos

Todo starter aceito neste repo deve incluir:

- Uma definição clara do problema e do escopo
- Skill stack e comandos de instalação
- Passos de setup e arquivos de prompts
- Sample output (`sample-output.md`)
- Um smoke test e um KPI
- Notas de segurança
- Failure modes
- Orientação de rollback

Layout típico de um starter:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Início rápido

1. Escolha o exemplo mais próximo de um problema semanal real, não o título mais chamativo.
2. Instale as skills necessárias com `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Rode o `scripts/check_prereqs.sh` do exemplo.
4. Leia `sample-output.md` para entender como um bom output deve parecer.
5. Aplique o prompt e o setup de cron desse exemplo.
6. Comece com escopo pequeno, delivery em modo rascunho e revisão humana antes de ampliar.

## Runnable starters (300 no total)

O repo hoje inclui 300 starter packs executáveis de OpenClaw, agrupados pelo tipo de trabalho que ajudam as equipes a fazer.

| Faixa | Foco | Notas |
| --- | --- | --- |
| 01-30 | Foundation set | A biblioteca original de starters para engineering, support, research e workflows de founder. |
| 31-42 | Engineering quality e release operations | Loops de dependencies, CI, ownership, release, hotfix e controle do comportamento de models. |
| 43-52 | Revenue, renewals e pipeline control | Renewal risk, sinais de expansão, trials, collections e partner motion. |
| 53-62 | Support, inbox e operator workflows | Bug intake, atenção VIP, calendar prep, handoffs e operating memos. |
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

Veja a lista completa em [examples/catalog.md](../../examples/catalog.md).

## Para quem este repo é

- Equipes que querem avaliar casos de uso reais de OpenClaw antes de construir workflows próprios
- Usuários de OpenClaw que querem exemplos executáveis em vez de prompts vagos
- Founders, operators e ICs que querem lançar primeiro uma automação de alto impacto
- Qualquer pessoa que queira inspecionar a qualidade do output antes de conectar sistemas de produção

## Notas importantes

- Estes são starter contracts informados por research, não uma certificação do maintainer; valide cada workflow no seu ambiente.
- Este é um repo mantido de forma independente; não é um programa oficial da OpenClaw.
- Feedback, fixes e exemplos melhores são bem-vindos.
- Este repo não aceita workflows de crypto nem de trading.
- Este repo não aceita custom skills que não estejam publicadas via ClawHub.
- ClawHub é um registro público de OpenClaw skills, então inspecione skills de terceiros antes de habilitá-las.
- Trabalhe com least privilege, delivery targets confiáveis, revisão humana para ações de saída e caminhos claros de rollback.

## FAQ de OpenClaw

### Que tipo de openclaw usecases existem neste repo?

Este repo cobre engineering, support, research, content, revenue, people ops, finance, security e internal operations. Se você buscou `openclaw usecases` com valor de negócio claro, comece pela tabela de quick wins ou pela seção orientada por objetivo acima.

### Esses OpenClaw examples são realmente executáveis?

Sim. Espera-se que cada starter executável inclua scripts, prompts, passos de setup e sample output. Mesmo assim, você deve validar cada workflow no seu próprio ambiente antes de usar em produção.

### Por que só ClawHub skills?

Porque reprodutibilidade importa. Limitar o repo a ClawHub skills públicas torna estes OpenClaw examples mais fáceis de inspecionar, instalar, comparar e confiar.

### Este é um repositório oficial da OpenClaw?

Não. Esta é uma coleção independente, mantida pelo maintainer, para ajudar mais gente a encontrar workflows úteis de OpenClaw mais rápido.

### Com qual exemplo eu devo começar?

Se você quer uma primeira execução segura, comece por [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) ou [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), dependendo da sua equipe.

## Contributing

Se você quer adicionar ou melhorar um starter, leia [CONTRIBUTING.md](../../CONTRIBUTING.md). A barra é simples: ser reproduzível, honesto, seguro por padrão e mostrar valor mensurável.
