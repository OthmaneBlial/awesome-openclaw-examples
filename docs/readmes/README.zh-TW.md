# Awesome OpenClaw Examples：300 個可直接執行的 OpenClaw 用例

![Awesome OpenClaw Use Cases and Examples 標誌](../../logo.png)

閱讀此 README： [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> 這份翻譯版概覽已與包含 300 個 starter 的目錄同步。英文 README 與完整目錄是 canonical reference。

如果你搜尋的是 `openclaw usecases` 或 `openclaw examples`，那你多半是在問一個很直接的問題：不用從零開始整套重建，OpenClaw 到底能做什麼？這個 repo 就是我的答案。這裡整理了 300 個基於公開 ClawHub skills 的可執行 starter packs，每個都包含 setup 步驟、prompts、sample outputs、KPI、security notes 和 rollback guidance。

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> 很多 AI 範例 repo 看起來都不錯，直到你真的試著把它跑起來。

我做這個 repo，是給那些想真正測試、檢查、拆解並沿用內容的團隊。這裡不是空泛 demo，而是直接對應真實工作的 OpenClaw 用例：PR triage、整理 inbox、追蹤 SEO drift、彙整 redlines、找出 security 問題，還有把很雜亂的來源資料整理成真正有用的結果。

## 為什麼大家會留著這個 repo

- 這些範例真的能執行，不只是寫在文件裡
- repo 只使用公開的 ClawHub skills，你可以先檢查再安裝
- 每個範例都有 sample output，setup 前就能先看品質
- setup、KPI、security notes、failure modes 和 rollback 已經是 template 的一部分
- 目錄涵蓋 engineering、support、research、content、revenue、finance、security 和 internal ops 的真實工作
- 我只想留下那些真的值得花 setup 時間去試的範例

## 依目標開始

如果你想先快速拿到一個成果，就從最像你目前痛點的那一列開始。

| 目標 | 從這裡開始 | 為什麼 |
| --- | --- | --- |
| 更快解除 engineering 阻塞 | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PR 狀態本來就很清楚，所以跑一次就能看出這個 workflow 有沒有幫助 |
| 整理好 release communication | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notes 很容易 review，也適合拿來做 pilot |
| 更快處理文件與語音內容 | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF 和 transcripts 很快就會變亂，所以哪怕只有一份不錯的 summary 也能馬上省時間 |
| 更早發現 AI 成本漂移 | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | 如果團隊已經在為 models 付費，cost drift 是大家很快就能理解的問題 |
| 把 search drift 轉成 content 機會 | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | 這是很實用的 marketing use case，因為 ranking drift 和 refresh opportunities 會直接變成具體工作 |
| 不用到處追 updates，也能給 leadership 週報 | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 它可以把分散的 updates 整理成清楚的 executive summary |

## 依團隊看的 OpenClaw 用例

如果你搜尋的就是 `openclaw usecases`，先看這裡。這不是零散的 prompts 集合，而是直接對應團隊日常重複工作的 workflows。

| 團隊 | 強烈推薦的範例 | 可以自動化什麼 |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR 可視化、flaky tests review、repo 清理、security triage |
| Support 與 inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests、佇列清理、VIP follow-up、內部請求 routing |
| Research 與 content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring、競品追蹤、repurposing、FAQ 生成 |
| Marketing 與 SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | 主題發掘、search drift 監控、proof 蒐集 |
| Revenue 與 customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk、follow-up ownership、會議準備 |
| People 與 recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | 招聘瓶頸、onboarding flow、面試脈絡 |
| Finance 與 legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review、procurement follow-up、board 準備 |
| Leadership 與 operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 每日對齊、operating cadence、launch readiness、每週 reporting |

## Top 10 Quick Wins

我看完整個 300 篇範例目錄後，才整理出這份清單。這些是我最願意先拿給別人試的項目，因為價值出現得快，output 的品質也很容易判斷。

| ID | 範例 | 為什麼它是 quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR 本來就有清楚的狀態，所以很快就能看出 ranking 是否有幫助，以及團隊會不會真的使用它 | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notes 容易 review、容易分享，也容易在不碰敏感流程的前提下拿到 buy-in | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF 和 transcripts 很快會變複雜，所以只要有一份不錯的 summary，從第一天起就能省時間 | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | 如果團隊已經在 models 上花錢，cost drift 是最容易解釋、也最容易建立優先順序的問題之一 | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage 幾乎每個團隊都會遇到，這個 workflow 會把模糊的郵件壓力轉成可執行的 task list | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | 它和 inbox triage 一樣實用，但更聚焦、更關鍵，因為它盯的是那些絕對不能漏掉的 threads | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | 這是很強的 marketing workflow，因為 ranking drift 和 refresh opportunities 會變成具體工作，而不是空泛的策略討論 | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | security 團隊很容易判斷它是否有價值，因為這裡提供的是 evidence，而不是抽象風險語言 | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | 手動拼每週摘要很耗人，所以節省的時間幾乎立刻就看得見 | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | 內部問題會一再重複出現，所以 routing 與答案重用很快就能帶來價值 | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## 範例品質標準

進入這個 repo 的每個 starter，至少都應該包含：

- 明確的問題定義與 scope
- skill stack 與安裝命令
- setup 步驟與 prompt files
- sample output (`sample-output.md`)
- smoke test 與 KPI
- security notes
- failure modes
- rollback guidance

典型 starter 結構：

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## 快速開始

1. 選最接近你真實每週問題的範例，而不是標題最花俏的那個。
2. 用 `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>` 安裝需要的 skills。
3. 執行該範例的 `scripts/check_prereqs.sh`。
4. 先看 `sample-output.md`，確認好的 output 應該長什麼樣子。
5. 套用該範例的 prompt 和 cron setup。
6. 先從小 scope、draft-only delivery 和人工 review 開始，再逐步擴大。

## Runnable starters（共 300 個）

這個 repo 目前包含 300 個可執行的 OpenClaw starter packs，依照它們幫助團隊完成的工作類型來分組。

| 範圍 | 重點 | 說明 |
| --- | --- | --- |
| 01-30 | Foundation set | 最初的一批 starter，涵蓋 engineering、support、research 和 founder workflows。 |
| 31-42 | Engineering quality 與 release operations | 圍繞 dependencies、CI、ownership、release、hotfix 和 model behavior control 的閉環。 |
| 43-52 | Revenue、renewals 與 pipeline control | renewal risk、擴張訊號、trials、collections 和 partner motion。 |
| 53-62 | Support、inbox 與 operator workflows | bug intake、VIP 關注、calendar prep、handoffs 和 operating memos。 |
| 63-70 | Research、content 與 market signals | competitive intelligence、quote mining、webinar repurposing、SEO 和 request routing。 |
| 71-76 | People、recruiting 與 onboarding | candidate briefs、stall tracking、onboarding、policy 和 source quality。 |
| 77-82 | Finance、procurement 與 board prep | renewals、redlines、procurement、PO follow-up、expense exceptions 和 board evidence。 |
| 83-101 | Security、IT、governance 與 internal operations | access review、secrets、audits、exceptions、IT intake、asset return 和 meeting hygiene。 |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

完整清單請見 [examples/catalog.md](../../examples/catalog.md)。

## 這個 repo 適合誰

- 想在自己建立 workflows 之前，先評估真實 OpenClaw 用例的團隊
- 想找可執行範例，而不是空泛 prompts 的 OpenClaw 使用者
- 想先落地一個高影響 automation 的 founders、operators 和 ICs
- 想在連接 production systems 前先確認 output 品質的人

## 重要說明

- 這些是以 research 為基礎的 starter contract，不代表 maintainer 認證；請在自己的環境中驗證每個 workflow。
- 這是一個獨立維護的 repo，不是 OpenClaw 官方專案。
- 歡迎 feedback、fixes 和更好的範例。
- 這個 repo 不接受 crypto 或 trading workflows。
- 這個 repo 不接受未透過 ClawHub 發布的 custom skills。
- ClawHub 是 OpenClaw skills 的公開 registry，所以啟用 third-party skills 前請先檢查。
- 請堅持 least privilege、可信任的 delivery targets、對外動作的人工作業審核，以及清楚的 rollback 路徑。

## OpenClaw FAQ

### 這個 repo 裡有哪些 openclaw usecases？

這個 repo 涵蓋 engineering、support、research、content、revenue、people ops、finance、security 和 internal operations。如果你找的是有明確商業價值的 `openclaw usecases`，可以先從上面的 quick wins 表格或依目標開始的段落看起。

### 這些 OpenClaw examples 真的可以執行嗎？

可以。每個可執行 starter 都要求包含 scripts、prompts、setup steps 和 sample output。不過在用於 production 前，你還是應該先在自己的環境裡驗證每個 workflow。

### 為什麼只使用 ClawHub skills？

因為可重現性很重要。把 repo 限定在公開的 ClawHub skills 內，會讓這些 OpenClaw examples 更容易檢查、安裝、比較，也更容易建立信任。

### 這是 OpenClaw 官方 repo 嗎？

不是。這是一個由 maintainer 獨立維護的 OpenClaw 範例集合，目的是讓更多人更快找到真正有用的 OpenClaw workflows。

### 我應該先從哪個範例開始？

如果你想先跑一個相對穩妥的範例，可以依照團隊情況先試 [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md)、[06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md)、[11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) 或 [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md)。

## Contributing

如果你想新增或改進某個 starter，請先閱讀 [CONTRIBUTING.md](../../CONTRIBUTING.md)。標準很簡單：要可重現、要誠實、預設安全，而且要能展示可衡量的價值。
