# Awesome OpenClaw Examples: OpenClaw के 300 ऐसे use cases जो सीधे चलाए जा सकते हैं

![Awesome OpenClaw Use Cases and Examples का लोगो](../../logo.png)

यह README इन भाषाओं में पढ़ें: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> यह अनुवादित overview 300 starters वाले catalog के साथ sync है। पूरा catalog और English README canonical reference हैं।

अगर आपने `openclaw usecases` या `openclaw examples` खोजा है, तो संभव है कि आप एक सीधा सवाल पूछ रहे हों: OpenClaw से वास्तव में क्या किया जा सकता है, वह भी बिना सब कुछ शुरू से बनाए? यही repo उस सवाल का मेरा जवाब है। इसमें 300 runnable starter packs हैं, जो public ClawHub skills पर बने हैं, और हर एक में setup steps, prompts, sample outputs, KPI, security notes और rollback guidance शामिल हैं।

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> बहुत-से AI example repos तब तक अच्छे लगते हैं, जब तक आप उन्हें सच में चलाने की कोशिश नहीं करते।

मैंने यह repo उन teams के लिए बनाया है जो ऐसी चीज़ चाहती हैं जिसे वे test कर सकें, inspect कर सकें, और ज़रूरत पड़ने पर reuse कर सकें। यहाँ vague demos नहीं हैं। यहाँ OpenClaw के ऐसे use cases हैं जो असली काम से जुड़े हैं: PR triage, inbox साफ करना, SEO drift देखना, redlines summarize करना, security issues को सामने लाना, और noisy source material को किसी काम की output में बदलना।

## लोग यह repo क्यों संभाल कर रखते हैं

- यहाँ के examples सच में runnable हैं, सिर्फ लिखे हुए नहीं
- repo सिर्फ public ClawHub skills पर टिका है, जिन्हें आप install करने से पहले inspect कर सकते हैं
- हर example के साथ sample output है, ताकि setup से पहले quality समझी जा सके
- setup, KPI, security notes, failure modes और rollback पहले से template का हिस्सा हैं
- catalog engineering, support, research, content, revenue, finance, security और internal ops के असली काम को cover करता है
- मैं यहाँ वही examples रखना चाहता हूँ जो setup के समय के लायक हों

## लक्ष्य के हिसाब से शुरू करें

अगर आपको जल्दी पहला नतीजा चाहिए, तो उस पंक्ति से शुरू करें जो आपकी मौजूदा समस्या से सबसे ज़्यादा मिलती हो।

| लक्ष्य | यहाँ से शुरू करें | क्यों |
| --- | --- | --- |
| engineering का काम जल्दी unblock करना | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PR की state समझना आसान होता है, इसलिए एक run में ही पता चल जाता है कि workflow काम का है या नहीं |
| release communication को साफ़ करना | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notes review करना और compare करना आसान है, इसलिए यह अच्छा pilot है |
| documents और voice input जल्दी process करना | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF और transcripts जल्दी messy हो जाते हैं, इसलिए एक अच्छा summary भी तुरंत time बचाता है |
| AI खर्च का drift जल्दी पकड़ना | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | अगर team पहले से models पर खर्च कर रही है, तो cost drift ऐसा issue है जिसे हर कोई जल्दी समझ लेता है |
| search drift को content opportunity में बदलना | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | यह एक मजबूत marketing use case है क्योंकि ranking drift और refresh opportunities concrete काम बन जाते हैं |
| leadership के लिए weekly picture बनाना, बिना updates के पीछे भागे | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | यह बिखरी हुई updates को एक साफ executive summary में बदल देता है |

## टीम के हिसाब से OpenClaw use cases

अगर आपने सचमुच `openclaw usecases` ही खोजा है, तो पहले यह सेक्शन देखें। यह random prompts का ढेर नहीं है। यह उन workflows का सेट है जो teams के रोज़ के दोहराए जाने वाले काम से जुड़े हैं।

| टीम | मज़बूत examples | क्या automate किया जा सकता है |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR visibility, flaky tests review, repo cleanup, security triage |
| Support और inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, queue cleanup, VIP follow-up, internal request routing |
| Research और content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, competitor tracking, repurposing, FAQ generation |
| Marketing और SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | topic discovery, search drift monitoring, proof gathering |
| Revenue और customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, meeting prep |
| People और recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | hiring bottlenecks, onboarding flow, interview context |
| Finance और legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review, procurement follow-up, board prep |
| Leadership और operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | daily alignment, operating cadence, launch readiness, weekly reporting |

## Top 10 Quick Wins

मैंने यह list बनाने से पहले पूरे 300-example catalog को देखा। ये वही entries हैं जिन्हें मैं सबसे पहले किसी को दूँगा, क्योंकि इनकी value जल्दी दिखती है और output की quality भी आसानी से judge की जा सकती है।

| ID | Example | यह quick win क्यों है | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR की states पहले से clear होती हैं, इसलिए जल्दी समझ आता है कि ranking useful है या नहीं, और लोग इसे इस्तेमाल करेंगे या नहीं | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notes review और share करना आसान है, इसलिए sensitive चीज़ों को छुए बिना buy-in लाने का अच्छा तरीका है | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF और transcripts जल्दी complex हो जाते हैं, इसलिए एक अच्छा summary भी पहले दिन से time बचा सकता है | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | अगर team पहले से models पर खर्च कर रही है, तो cost drift उन समस्याओं में से है जिन्हें explain करना और prioritize करना आसान है | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage हर जगह common है, और यह workflow scattered email load को ऐसी task list में बदल देता है जिस पर कोई काम कर सके | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | inbox triage जैसी ही value, लेकिन ज़्यादा focused और ज़्यादा critical, क्योंकि यह उन्हीं threads को देखता है जिन्हें miss नहीं किया जा सकता | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | मजबूत marketing workflow है क्योंकि ranking drift और refresh opportunities vague strategy talk नहीं, बल्कि concrete काम बनकर सामने आते हैं | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | security teams इसे जल्दी judge कर सकती हैं क्योंकि यह abstract risk language की जगह evidence देता है | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | weekly summaries हाथ से बनाना थकाने वाला होता है, इसलिए time saved लगभग तुरंत दिखता है | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | internal questions बार-बार दोहराए जाते हैं, इसलिए routing और answer reuse बहुत जल्दी value देते हैं | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Example quality standard

इस repo में आने वाले हर starter में कम से कम यह होना चाहिए:

- problem और scope की साफ definition
- skill stack और install commands
- setup steps और prompt files
- sample output (`sample-output.md`)
- smoke test और KPI
- security notes
- failure modes
- rollback guidance

एक typical starter layout:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Quick start

1. वह example चुनें जो आपके real weekly problem के सबसे करीब हो, न कि सिर्फ सबसे flashy title वाला।
2. ज़रूरी skills को `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>` से install करें।
3. उस example का `scripts/check_prereqs.sh` चलाएँ।
4. पहले `sample-output.md` देखें, ताकि समझ सकें कि अच्छा output कैसा दिखना चाहिए।
5. उसी example का prompt और cron setup लागू करें।
6. पहले छोटा scope, draft-only delivery और human review रखें, फिर धीरे-धीरे expand करें।

## Runnable starters (कुल 300)

इस repo में अभी 300 runnable OpenClaw starter packs हैं, जिन्हें उस तरह के काम के हिसाब से group किया गया है जिसे वे teams के लिए आसान बनाते हैं।

| Range | Focus | Notes |
| --- | --- | --- |
| 01-30 | Foundation set | engineering, support, research और founder workflows के लिए शुरुआती starter library |
| 31-42 | Engineering quality और release operations | dependencies, CI, ownership, release, hotfix और model behavior control के loops |
| 43-52 | Revenue, renewals और pipeline control | renewal risk, expansion signals, trials, collections और partner motion |
| 53-62 | Support, inbox और operator workflows | bug intake, VIP attention, calendar prep, handoffs और operating memos |
| 63-70 | Research, content और market signals | competitive intelligence, quote mining, webinar repurposing, SEO और request routing |
| 71-76 | People, recruiting और onboarding | candidate briefs, stall tracking, onboarding, policy और source quality |
| 77-82 | Finance, procurement और board prep | renewals, redlines, procurement, PO follow-up, expense exceptions और board evidence |
| 83-101 | Security, IT, governance और internal operations | access review, secrets, audits, exceptions, IT intake, asset return और meeting hygiene |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

पूरी सूची [examples/catalog.md](../../examples/catalog.md) में देखें।

## यह repo किनके लिए है

- वे teams जो अपने workflows बनाने से पहले real OpenClaw use cases evaluate करना चाहती हैं
- वे OpenClaw users जो vague prompts नहीं, runnable examples चाहते हैं
- वे founders, operators और ICs जो पहले high-impact automation ship करना चाहते हैं
- वे लोग जो production systems जोड़ने से पहले output quality inspect करना चाहते हैं

## ज़रूरी notes

- ये research-informed starter contracts हैं, maintainer certification नहीं; हर workflow को अपने environment में validate करें।
- यह independently maintained repo है, कोई official OpenClaw program नहीं।
- feedback, fixes और बेहतर examples हमेशा welcome हैं।
- यह repo crypto या trading workflows accept नहीं करता।
- यह repo ऐसे custom skills accept नहीं करता जो ClawHub पर publish न हों।
- ClawHub OpenClaw skills का public registry है, इसलिए third-party skills को enable करने से पहले inspect करें।
- least privilege, trusted delivery targets, outbound actions पर human review, और clear rollback paths को default मानें।

## OpenClaw FAQ

### इस repo में किस तरह के openclaw usecases हैं?

यह repo engineering, support, research, content, revenue, people ops, finance, security और internal operations को cover करता है। अगर आप clear business value वाले `openclaw usecases` ढूँढ रहे हैं, तो ऊपर का quick wins table या goal-based section अच्छा starting point है।

### क्या ये OpenClaw examples सच में runnable हैं?

हाँ। हर runnable starter से उम्मीद की जाती है कि उसमें scripts, prompts, setup steps और sample output हों। फिर भी production से पहले हर workflow को अपनी environment में validate करना चाहिए।

### सिर्फ ClawHub skills ही क्यों?

क्योंकि reproducibility मायने रखती है। repo को public ClawHub skills तक सीमित रखने से इन OpenClaw examples को inspect करना, install करना, compare करना और trust करना आसान हो जाता है।

### क्या यह OpenClaw का official repo है?

नहीं। यह OpenClaw examples का एक independently maintained collection है, जिसे maintainer इसीलिए चला रहा है ताकि लोग useful OpenClaw workflows जल्दी खोज सकें।

### मुझे पहले किस example से शुरू करना चाहिए?

अगर आप safe first run चाहते हैं, तो अपनी team के हिसाब से [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) या [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) से शुरू करें।

## Contributing

अगर आप कोई starter जोड़ना या बेहतर बनाना चाहते हैं, तो [CONTRIBUTING.md](../../CONTRIBUTING.md) पढ़ें। बार बहुत सीधी है: reproducible हो, honest हो, default से safe हो, और measurable value दिखाए।
