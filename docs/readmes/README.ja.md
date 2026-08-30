# Awesome OpenClaw Examples: 300のすぐ実行できるOpenClawユースケース

![Awesome OpenClaw Use Cases and Examples のロゴ](../../logo.png)

このREADMEの言語: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> この翻訳版の概要は300個のstarter catalogと同期しています。完全なcatalogと英語READMEがcanonical referenceです。

`openclaw usecases` や `openclaw examples` を探してここに来たなら、たぶん知りたいのは一つです。OpenClawで実際に何ができるのか。しかも全部をゼロから組まずに。これはその答えとして作ったrepoです。公開されているClawHub skillsを使った300個の実行可能なstarter packをまとめていて、それぞれにsetup手順、prompts、sample output、KPI、security notes、rollback guidanceがあります。

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> AI系のサンプルrepoは、実際に動かそうとするまでは立派に見えることが多いです。

このrepoは、試せること、確認できること、必要ならそのまま流用できることを重視するチーム向けに作りました。曖昧なデモではなく、実際の仕事に結びつくOpenClawユースケースを集めています。PRのtriage、inboxの整理、SEO driftの監視、redlinesの要約、security issuesの把握、ノイズの多い素材を使える形に変えること。そういう仕事です。

## このrepoを手元に残しておく理由

- 例は説明だけではなく、実際に実行できます
- インストール前に確認できる公開ClawHub skillsだけを使っています
- すべての例にsample outputがあるので、setup前に品質を見られます
- setup、KPI、security notes、failure modes、rollbackがtemplateに含まれています
- engineering、support、research、content、revenue、finance、security、internal opsの実務を広くカバーしています
- setupの手間に見合う価値があると思える例だけを入れています

## 目的別の入り口

最初に一つ成果を出したいなら、いま困っていることに一番近い行から始めるのが早いです。

| 目的 | まず見るもの | 理由 |
| --- | --- | --- |
| engineeringの詰まりを早く減らす | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PRの状態は分かりやすいので、1回動かすだけでworkflowが役立つか判断しやすいです |
| release communicationを整える | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notesは見比べやすく、pilotとしても評価しやすいです |
| documentsや音声入力をもっと早く処理する | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDFやtranscriptはすぐ散らかるので、1回でも良いsummaryが出れば時間を節約できます |
| AIコストの崩れを早めに見つける | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | すでにmodelsを使っているチームなら、cost driftはすぐ伝わる問題です |
| search driftをcontentの機会に変える | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | ranking driftやrefresh opportunitiesが具体的な作業として出るので、marketing向けのuse caseとして分かりやすいです |
| leadership向けの週次サマリーを楽に作る | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | scattered updatesをきれいなexecutive summaryにまとめられます |

## チーム別のOpenClawユースケース

`openclaw usecases` をそのまま探していたなら、まずここを見てください。単なるprompt集ではありません。チームが繰り返しやっている仕事にそのまま対応しています。

| チーム | 強い例 | 自動化できること |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PRの可視化、flaky testsの確認、repoの整理、security triage |
| Support / inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests、queue整理、VIP follow-up、internal request routing |
| Research / content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring、競合追跡、repurposing、FAQ生成 |
| Marketing / SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | topic discovery、search drift監視、proof収集 |
| Revenue / customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk、follow-up ownership、meeting準備 |
| People / recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | hiring bottlenecks、onboarding flow、interview context |
| Finance / legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review、procurement follow-up、board prep |
| Leadership / operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | 日次の整列、operating cadence、launch readiness、週次reporting |

## Top 10 Quick Wins

この一覧は300例すべてを見たうえで選びました。価値がすぐ見えて、outputの良し悪しも判断しやすいものを先に置いています。

| ID | 例 | Quick Winである理由 | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PRは状態が明確なので、rankingが役立つか、実際に使われるかをすぐ判断できます | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notesは確認もしやすく共有もしやすいので、sensitiveな領域に触れずにbuy-inを取りやすいです | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDFやtranscriptはすぐ複雑になるので、まともなsummaryが出るだけでも初日から時間を節約できます | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | すでにmodelsにコストを払っているチームなら、cost driftは説明しやすく優先順位もつけやすい問題です | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triageはどのチームにもあるので、ぼんやりしたメール負荷を実行可能なtask listに変えられます | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | inbox triageに近い魅力がありますが、見逃せないthreadsだけに絞るので、より切実で分かりやすいです | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | ranking driftやrefresh opportunitiesが曖昧な戦略論ではなく、具体的な作業として出てくるのが強みです | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | security teamは抽象的なリスク説明ではなく、evidenceが出るので判断が速いです | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | 週次サマリーを手で組み立てるのは面倒なので、時間短縮の効果がすぐ分かります | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | 社内の質問は何度も繰り返されるので、routingとanswer reuseがすぐ役に立ちます | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## 例の品質基準

このrepoに入るstarterには、少なくとも次が必要です。

- 問題設定とscopeが明確であること
- skill stackとinstall commands
- setup手順とprompt files
- sample output (`sample-output.md`)
- smoke testとKPI
- security notes
- failure modes
- rollback guidance

典型的なstarterの構成:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## クイックスタート

1. いちばん派手なタイトルではなく、実際に毎週起きている問題に近い例を選びます。
2. 必要なskillsを `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>` で入れます。
3. その例の `scripts/check_prereqs.sh` を実行します。
4. `sample-output.md` を見て、良いoutputの形を先に把握します。
5. その例のpromptとcron setupを適用します。
6. まずはscopeを狭くし、draft-only deliveryと人のレビュー前提で始めてから広げます。

## Runnable Starters（合計300）

このrepoには、チームの実務に合わせて使える300個のOpenClaw starter packがあります。

| 範囲 | フォーカス | メモ |
| --- | --- | --- |
| 01-30 | Foundation set | engineering、support、research、founder workflows向けの初期コレクションです。 |
| 31-42 | Engineering quality と release operations | dependencies、CI、ownership、release、hotfix、model behavior controlのループです。 |
| 43-52 | Revenue、renewals と pipeline control | renewal risk、expansion signals、trials、collections、partner motionを扱います。 |
| 53-62 | Support、inbox と operator workflows | bug intake、VIP対応、calendar prep、handoffs、operating memosです。 |
| 63-70 | Research、content と market signals | competitive intelligence、quote mining、webinar repurposing、SEO、request routingです。 |
| 71-76 | People、recruiting と onboarding | candidate briefs、stall tracking、onboarding、policy、source qualityです。 |
| 77-82 | Finance、procurement と board prep | renewals、redlines、procurement、PO follow-up、expense exceptions、board evidenceです。 |
| 83-101 | Security、IT、governance と internal operations | access review、secrets、audits、exceptions、IT intake、asset return、meeting hygieneです。 |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

一覧全体は [examples/catalog.md](../../examples/catalog.md) を見てください。

## このrepoが向いている人

- 自前のworkflowを作る前に、現実的なOpenClawユースケースを評価したいチーム
- 曖昧なpromptではなく、実行できる例を見たいOpenClawユーザー
- まず一つ、効果の大きいautomationから始めたいfounders、operators、ICs
- production systemsをつなぐ前にoutput品質を確認したい人

## 重要な注意点

- これはresearchに基づくstarter contractであり、maintainerによる認証ではありません。各workflowを自分の環境で検証してください。
- これは独立して運営しているrepoで、OpenClaw公式プログラムではありません。
- feedback、fixes、より良い例の提案は歓迎です。
- このrepoではcryptoやtradingのworkflowは受け付けません。
- ClawHubで公開されていないcustom skillsは受け付けません。
- ClawHubはOpenClaw skillsの公開registryなので、third-party skillsは有効化前に確認してください。
- least privilege、信頼できるdelivery targets、outbound actionsへの人のレビュー、明確なrollback pathを前提にしてください。

## OpenClaw FAQ

### このrepoにはどんな openclaw usecases がありますか。

engineering、support、research、content、revenue、people ops、finance、security、internal operationsをカバーしています。ビジネス価値のある `openclaw usecases` を探しているなら、上のquick wins表か、目的別セクションから始めるのが早いです。

### このOpenClaw examplesは本当に実行できますか。

はい。各starterにはscripts、prompts、setup steps、sample outputが入る前提です。ただし、本番利用の前に自分の環境で必ず検証してください。

### なぜClawHub skillsだけなのですか。

再現性を重視しているからです。公開ClawHub skillsに絞ることで、これらのOpenClaw examplesは確認しやすく、導入しやすく、比較しやすくなります。

### これはOpenClaw公式のrepoですか。

いいえ。OpenClawの役に立つworkflowをもっと早く見つけられるように作った、独立運営のexamples collectionです。

### 最初にどの例から始めるべきですか。

最初の安全な1本なら、チームに合わせて [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md)、[06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md)、[11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md)、[66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) あたりから始めるのがおすすめです。

## Contributing

starterを追加したり改善したりしたいなら、[CONTRIBUTING.md](../../CONTRIBUTING.md) を読んでください。基準は単純です。再現できること、正直であること、安全がデフォルトであること、そして測れる価値を示すことです。
