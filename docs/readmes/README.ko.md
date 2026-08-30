# Awesome OpenClaw Examples: 바로 실행할 수 있는 OpenClaw 활용 사례 300선

![Awesome OpenClaw Use Cases and Examples 로고](../../logo.png)

이 README를 다른 언어로 읽기: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> 이 번역 개요는 300개 starter 카탈로그와 동기화되어 있습니다. 전체 카탈로그와 영어 README가 기준 문서입니다.

`openclaw usecases` 또는 `openclaw examples`를 찾고 있었다면, 아마 아주 단순한 질문에 답하고 싶은 것일 겁니다. OpenClaw로 실제로 무엇을 할 수 있는가, 그리고 그걸 전부 처음부터 직접 만들지 않고도 가능한가. 이 repo는 그 질문에 대한 제 답입니다. 공개된 ClawHub skills를 바탕으로 만든 300개의 실행 가능한 starter packs를 모아 두었고, 각각에 setup 단계, prompts, sample outputs, KPI, security notes, rollback guidance가 들어 있습니다.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> AI 예제 repo는 실제로 돌려 보기 전까지는 그럴듯해 보이는 경우가 많습니다.

이 repo는 실제로 테스트하고, 뜯어보고, 필요한 부분을 가져다 쓸 수 있는 무언가가 필요한 팀을 위해 만들었습니다. 막연한 demo가 아니라, 실제 업무에 연결되는 OpenClaw 활용 사례를 담았습니다. PR triage, inbox 정리, SEO drift 추적, redlines 요약, security 문제 식별, 그리고 시끄러운 원천 자료를 쓸 만한 결과로 바꾸는 일들입니다.

## 사람들이 이 repo를 저장해 두는 이유

- 예제가 설명만 있는 것이 아니라 실제로 실행됩니다
- 설치 전에 검토할 수 있는 공개 ClawHub skills만 사용합니다
- 모든 예제에 sample output이 있어서 setup 전에 품질을 판단할 수 있습니다
- setup, KPI, security notes, failure modes, rollback이 template에 이미 포함되어 있습니다
- 카탈로그가 engineering, support, research, content, revenue, finance, security, internal ops의 실제 업무를 폭넓게 다룹니다
- setup 시간을 들일 가치가 있는 예제만 남기려고 합니다

## 목표별 시작점

빨리 첫 성과를 보고 싶다면, 지금 이미 겪고 있는 문제와 가장 닮은 줄에서 시작하는 게 좋습니다.

| 목표 | 여기서 시작 | 이유 |
| --- | --- | --- |
| engineering 업무 병목을 빨리 줄이기 | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PR 상태는 원래 이해하기 쉬워서 한 번만 돌려 봐도 workflow가 쓸모 있는지 판단하기 쉽습니다 |
| release communication 정리하기 | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notes는 검토도 쉽고 비교도 쉬워서 pilot로 쓰기 좋습니다 |
| 문서와 음성 입력을 더 빨리 처리하기 | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF와 transcripts는 금방 복잡해지기 때문에 괜찮은 summary 하나만 나와도 바로 시간이 절약됩니다 |
| AI 비용 drift를 더 빨리 찾기 | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | 이미 models에 비용을 쓰고 있는 팀이라면 cost drift는 누구나 바로 이해하는 문제입니다 |
| search drift를 content 기회로 바꾸기 | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | ranking drift와 refresh opportunities가 추상적 전략이 아니라 구체적 업무로 나오기 때문에 강한 marketing use case입니다 |
| updates를 쫓아다니지 않고 leadership 주간 요약 만들기 | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 흩어진 updates를 깔끔한 executive summary로 정리해 줍니다 |

## 팀별 OpenClaw 활용 사례

정말로 `openclaw usecases`를 찾고 있었다면 여기부터 보는 게 맞습니다. 이것은 아무렇게나 모아 둔 prompts가 아니라, 팀이 이미 반복해서 하고 있는 일을 겨냥한 workflows입니다.

| 팀 | 강한 예제 | 자동화할 수 있는 것 |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR 가시성, flaky tests review, repo 정리, security triage |
| Support 및 inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, queue 정리, VIP follow-up, 내부 요청 routing |
| Research 및 content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, 경쟁 추적, repurposing, FAQ 생성 |
| Marketing 및 SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | 주제 발굴, search drift 모니터링, proof 수집 |
| Revenue 및 customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, 미팅 준비 |
| People 및 recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | 채용 병목, onboarding flow, interview context |
| Finance 및 legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review, procurement follow-up, board 준비 |
| Leadership 및 operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 일일 정렬, operating cadence, launch readiness, 주간 reporting |

## Top 10 Quick Wins

이 목록은 전체 300개 예제를 다 보고 고른 것입니다. 가치가 빨리 드러나고, output의 품질도 비교적 쉽게 판단할 수 있어서 먼저 권하기 좋은 항목들입니다.

| ID | 예제 | 왜 quick win인가 | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR은 상태가 원래 분명해서 ranking이 실제로 도움이 되는지, 팀이 정말 쓸지를 금방 판단할 수 있습니다 | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notes는 검토와 공유가 쉬워서 민감한 영역을 건드리지 않고도 buy-in을 얻기 좋습니다 | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF와 transcripts는 금방 복잡해지기 때문에, 괜찮은 summary만 나와도 첫날부터 시간 절약이 보입니다 | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | 팀이 이미 models에 비용을 쓰고 있다면 cost drift는 설명하기도 쉽고 우선순위를 세우기도 쉬운 문제입니다 | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage는 거의 모든 팀에 있고, 이 workflow는 퍼져 있는 메일 부담을 실제로 처리 가능한 task list로 바꿉니다 | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | inbox triage와 비슷한 매력이 있지만, 절대 놓치면 안 되는 threads만 보므로 더 집중적이고 더 시급합니다 | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | ranking drift와 refresh opportunities가 추상적인 전략 얘기가 아니라 실제 해야 할 일로 나오기 때문에 강한 marketing workflow입니다 | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | security 팀은 추상적 위험 언어보다 evidence를 보기 때문에 이 workflow의 가치를 빠르게 판단할 수 있습니다 | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | 주간 요약을 손으로 만드는 일은 번거롭기 때문에 시간 절감 효과가 거의 바로 보입니다 | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | 내부 질문은 계속 반복되기 때문에 routing과 답변 재사용이 빠르게 가치를 만듭니다 | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## 예제 품질 기준

이 repo에 들어오는 starter는 최소한 다음을 포함해야 합니다.

- 명확한 문제 정의와 scope
- skill stack과 설치 명령
- setup 단계와 prompt files
- sample output (`sample-output.md`)
- smoke test와 KPI
- security notes
- failure modes
- rollback guidance

일반적인 starter 구조:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## 빠르게 시작하기

1. 가장 눈에 띄는 제목이 아니라, 실제로 매주 겪는 문제와 가장 가까운 예제를 고릅니다.
2. 필요한 skills를 `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>` 로 설치합니다.
3. 해당 예제의 `scripts/check_prereqs.sh` 를 실행합니다.
4. `sample-output.md` 를 먼저 읽고 좋은 output이 어떤 모습인지 파악합니다.
5. 그 예제의 prompt와 cron setup을 적용합니다.
6. 작은 scope, draft-only delivery, 사람의 review부터 시작한 뒤 점차 넓힙니다.

## Runnable starters (총 300개)

이 repo에는 현재 300개의 실행 가능한 OpenClaw starter packs가 있고, 팀이 처리해야 하는 업무 유형별로 묶여 있습니다.

| 구간 | 초점 | 설명 |
| --- | --- | --- |
| 01-30 | Foundation set | engineering, support, research, founder workflows를 위한 초기 starter 모음입니다. |
| 31-42 | Engineering quality 및 release operations | dependencies, CI, ownership, release, hotfix, model behavior control을 다루는 루프입니다. |
| 43-52 | Revenue, renewals 및 pipeline control | renewal risk, 확장 신호, trials, collections, partner motion을 다룹니다. |
| 53-62 | Support, inbox 및 operator workflows | bug intake, VIP 대응, calendar prep, handoffs, operating memos입니다. |
| 63-70 | Research, content 및 market signals | competitive intelligence, quote mining, webinar repurposing, SEO, request routing입니다. |
| 71-76 | People, recruiting 및 onboarding | candidate briefs, stall tracking, onboarding, policy, source quality입니다. |
| 77-82 | Finance, procurement 및 board prep | renewals, redlines, procurement, PO follow-up, expense exceptions, board evidence입니다. |
| 83-101 | Security, IT, governance 및 internal operations | access review, secrets, audits, exceptions, IT intake, asset return, meeting hygiene입니다. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

전체 목록은 [examples/catalog.md](../../examples/catalog.md) 에서 볼 수 있습니다.

## 이 repo가 맞는 사람

- 자체 workflows를 만들기 전에 실제 OpenClaw 활용 사례를 검토하려는 팀
- 막연한 prompts 대신 실행 가능한 예제를 원하는 OpenClaw 사용자
- 먼저 임팩트 큰 automation 하나를 배포하려는 founders, operators, ICs
- production systems를 연결하기 전에 output 품질을 확인하고 싶은 사람

## 중요한 메모

- 이 예제는 research-informed starter contract이며 maintainer 인증이 아닙니다. 각 workflow를 자신의 환경에서 검증하세요.
- 이것은 독립적으로 운영되는 repo이며, OpenClaw 공식 프로그램이 아닙니다.
- feedback, fixes, 더 나은 예제 제안은 언제나 환영입니다.
- 이 repo는 crypto나 trading workflows를 받지 않습니다.
- 이 repo는 ClawHub에 게시되지 않은 custom skills를 받지 않습니다.
- ClawHub는 OpenClaw skills의 공개 registry이므로 third-party skills는 활성화 전에 꼭 확인해야 합니다.
- least privilege, 신뢰할 수 있는 delivery targets, 외부로 나가는 동작에 대한 사람의 review, 명확한 rollback 경로를 기본으로 두세요.

## OpenClaw FAQ

### 이 repo에는 어떤 openclaw usecases가 있나요?

이 repo는 engineering, support, research, content, revenue, people ops, finance, security, internal operations를 다룹니다. 분명한 비즈니스 가치가 있는 `openclaw usecases`를 찾고 있다면 위의 quick wins 표나 목표별 시작 섹션부터 보면 됩니다.

### 이 OpenClaw examples는 정말 실행 가능한가요?

네. 각 runnable starter에는 scripts, prompts, setup steps, sample output이 포함되는 것을 기준으로 합니다. 그래도 production에 쓰기 전에 각 workflow를 여러분 환경에서 직접 검증해야 합니다.

### 왜 ClawHub skills만 쓰나요?

재현 가능성이 중요하기 때문입니다. repo를 공개 ClawHub skills로 제한하면 이 OpenClaw examples를 더 쉽게 검토하고, 설치하고, 비교하고, 신뢰할 수 있습니다.

### 이것은 OpenClaw 공식 repo인가요?

아니요. 더 많은 사람들이 유용한 OpenClaw workflows를 빨리 찾을 수 있도록 maintainer가 독립적으로 운영하는 예제 모음입니다.

### 어떤 예제부터 시작하면 좋나요?

안전한 첫 실행을 원한다면 팀 상황에 따라 [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md)부터 시작하는 것이 좋습니다.

## Contributing

starter를 추가하거나 개선하고 싶다면 [CONTRIBUTING.md](../../CONTRIBUTING.md) 를 읽어 주세요. 기준은 단순합니다. 재현 가능해야 하고, 정직해야 하고, 기본적으로 안전해야 하며, 측정 가능한 가치를 보여줘야 합니다.
