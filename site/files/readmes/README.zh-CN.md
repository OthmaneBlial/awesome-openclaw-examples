# Awesome OpenClaw Examples：300 个可直接运行的 OpenClaw 用例

![Awesome OpenClaw Use Cases and Examples 标志](../../logo.png)

阅读此 README： [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> 这份翻译版概览已与包含 300 个 starter 的目录同步。英文 README 和完整目录是 canonical reference。

如果你搜索的是 `openclaw usecases` 或 `openclaw examples`，那你大概率想回答一个很直接的问题：不用从零开始搭一整套系统，OpenClaw 到底能做什么？这个 repo 就是我的回答。这里收集了 300 个基于公开 ClawHub skills 的可运行 starter packs，每个都包含 setup 步骤、prompts、sample outputs、KPI、security notes 和 rollback guidance。

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> 很多 AI 示例 repo 看起来都很漂亮，直到你真的动手去跑。

我做这个 repo，是给那些想真正测试、检查并复用内容的团队看的。这里不是空泛 demo，而是和真实工作直接对应的 OpenClaw 用例：PR triage、清理 inbox、跟踪 SEO drift、总结 redlines、发现 security 问题，以及把噪声很多的原始材料整理成真正有用的结果。

## 为什么大家会把这个 repo 留着

- 这些示例真的可以运行，不只是写在文档里
- repo 只使用公开的 ClawHub skills，你可以先检查再安装
- 每个示例都带有 sample output，setup 前就能判断质量
- setup、KPI、security notes、failure modes 和 rollback 已经是模板的一部分
- 目录覆盖 engineering、support、research、content、revenue、finance、security 和 internal ops 的真实工作
- 我只想保留那些值得你花 setup 时间去试的示例

## 按目标开始

如果你想尽快拿到第一个成果，就从最像你当前痛点的那一行开始。

| 目标 | 从这里开始 | 为什么 |
| --- | --- | --- |
| 更快解除 engineering 阻塞 | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PR 状态本来就很清晰，所以跑一次就能看出这个 workflow 有没有用 |
| 更好地整理 release communication | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notes 很容易 review，也方便拿来做 pilot |
| 更快处理文档和语音内容 | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF 和 transcripts 很快就会变乱，所以哪怕一个靠谱的 summary 也能立刻省时间 |
| 更早发现 AI 成本漂移 | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | 如果团队已经在为 models 付费，cost drift 是一个所有人都能马上理解的问题 |
| 把 search drift 变成 content 机会 | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | 这是很实用的 marketing use case，因为 ranking drift 和 refresh opportunities 会直接变成具体工作 |
| 不再到处追着人要 updates，也能给 leadership 周报 | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 它能把分散的 updates 整理成清晰的 executive summary |

## 按团队看的 OpenClaw 用例

如果你搜索的就是 `openclaw usecases`，那先看这里。这不是随便堆的一组 prompts，而是和团队日常重复性工作直接对应的 workflows。

| 团队 | 强推荐示例 | 可以自动化什么 |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR 可见性、flaky tests review、repo 清理、security triage |
| Support 与 inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests、队列清理、VIP follow-up、内部请求 routing |
| Research 与 content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring、竞品跟踪、repurposing、FAQ 生成 |
| Marketing 与 SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | 主题发现、search drift 监控、proof 收集 |
| Revenue 与 customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk、follow-up ownership、会议准备 |
| People 与 recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | 招聘瓶颈、onboarding flow、面试上下文 |
| Finance 与 legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review、procurement follow-up、board 准备 |
| Leadership 与 operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 日常对齐、operating cadence、launch readiness、周度 reporting |

## Top 10 Quick Wins

我看过完整的 300 个示例目录后才做了这个列表。它们是我最愿意先推荐给别人的，因为价值出现得快，输出质量也容易判断。

| ID | 示例 | 为什么它是 quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR 本来就有清晰状态，所以很快就能看出 ranking 是否有帮助，以及团队会不会真的用它 | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notes 容易 review、容易分享，也容易在不碰敏感流程的前提下拿到 buy-in | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF 和 transcripts 很快会变复杂，所以哪怕一个不错的 summary 从第一天起就能省时间 | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | 如果团队已经在 models 上花钱，cost drift 是最容易解释、也最容易建立优先级的问题之一 | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage 几乎每个团队都有，这个 workflow 会把模糊的邮件压力变成可执行的 task list | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | 和 inbox triage 一样实用，但更聚焦、更有压力，因为它盯的是那些绝对不能漏掉的 threads | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | 这是很强的 marketing workflow，因为 ranking drift 和 refresh opportunities 会变成具体工作，而不是空泛策略讨论 | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | security 团队很容易判断它是否有价值，因为这里给的是 evidence，而不是抽象风险表述 | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | 手动拼周报很耗人，所以节省的时间几乎是立刻可见的 | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | 内部问题会反复出现，因此 routing 和答案复用能很快带来价值 | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## 示例质量标准

进入这个 repo 的每个 starter，至少都应该包含：

- 明确的问题定义和 scope
- skill stack 与安装命令
- setup 步骤和 prompt files
- sample output (`sample-output.md`)
- smoke test 和 KPI
- security notes
- failure modes
- rollback guidance

典型 starter 结构：

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## 快速开始

1. 选择最接近你真实每周问题的示例，而不是标题最花哨的那个。
2. 用 `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>` 安装所需 skills。
3. 运行该示例的 `scripts/check_prereqs.sh`。
4. 先看 `sample-output.md`，确认一份好的输出应该长什么样。
5. 按该示例应用对应的 prompt 和 cron setup。
6. 先从小 scope、draft-only delivery 和人工 review 开始，再逐步放大。

## Runnable starters（共 300 个）

这个 repo 目前包含 300 个可运行的 OpenClaw starter packs，按它们帮助团队完成的工作类型分组。

| 范围 | 重点 | 说明 |
| --- | --- | --- |
| 01-30 | Foundation set | 最初的一组 starter，覆盖 engineering、support、research 和 founder workflows。 |
| 31-42 | Engineering quality 与 release operations | 围绕 dependencies、CI、ownership、release、hotfix 和 model behavior control 的闭环。 |
| 43-52 | Revenue、renewals 与 pipeline control | renewal risk、扩展信号、trials、collections 和 partner motion。 |
| 53-62 | Support、inbox 与 operator workflows | bug intake、VIP 关注、calendar prep、handoffs 和 operating memos。 |
| 63-70 | Research、content 与 market signals | competitive intelligence、quote mining、webinar repurposing、SEO 和 request routing。 |
| 71-76 | People、recruiting 与 onboarding | candidate briefs、stall tracking、onboarding、policy 和 source quality。 |
| 77-82 | Finance、procurement 与 board prep | renewals、redlines、procurement、PO follow-up、expense exceptions 和 board evidence。 |
| 83-101 | Security、IT、governance 与 internal operations | access review、secrets、audits、exceptions、IT intake、asset return 和 meeting hygiene。 |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

完整列表见 [examples/catalog.md](../../examples/catalog.md)。

## 这个 repo 适合谁

- 想在自己构建 workflow 之前先评估真实 OpenClaw 用例的团队
- 想找可运行示例，而不是空泛 prompts 的 OpenClaw 用户
- 想先落地一个高影响 automation 的 founders、operators 和 ICs
- 想在接入 production systems 之前先看清 output 质量的人

## 重要说明

- 这些是基于 research 的 starter contract，不代表 maintainer 认证；请在自己的环境中验证每个 workflow。
- 这是一个独立维护的 repo，不是 OpenClaw 官方项目。
- 欢迎反馈、fixes 和更好的示例。
- 这个 repo 不接受 crypto 或 trading workflows。
- 这个 repo 不接受未通过 ClawHub 发布的 custom skills。
- ClawHub 是 OpenClaw skills 的公开 registry，所以启用 third-party skills 之前要先检查。
- 请坚持 least privilege、可信的 delivery targets、对外动作进行人工 review，以及清晰的 rollback 路径。

## OpenClaw FAQ

### 这个 repo 里有哪些 openclaw usecases？

这个 repo 覆盖 engineering、support、research、content、revenue、people ops、finance、security 和 internal operations。如果你搜索的是有明确业务价值的 `openclaw usecases`，可以先从上面的 quick wins 表格或按目标开始的部分看起。

### 这些 OpenClaw examples 真的可以运行吗？

可以。每个可运行 starter 都要求包含 scripts、prompts、setup steps 和 sample output。不过在用于 production 之前，你仍然应该先在自己的环境里验证每个 workflow。

### 为什么只使用 ClawHub skills？

因为可复现性很重要。把 repo 限定在公开的 ClawHub skills 范围内，会让这些 OpenClaw examples 更容易检查、安装、比较和建立信任。

### 这是 OpenClaw 官方 repo 吗？

不是。这是一个由 maintainer 独立维护的 OpenClaw 示例集合，目的是让更多人更快找到真正有用的 OpenClaw workflows。

### 我应该先从哪个示例开始？

如果你想先跑一个相对稳妥的示例，可以根据团队情况先试 [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md)、[06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md)、[11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) 或 [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md)。

## Contributing

如果你想新增或改进某个 starter，请先阅读 [CONTRIBUTING.md](../../CONTRIBUTING.md)。标准很简单：要可复现、要诚实、默认安全，而且要能展示可衡量的价值。
