# Awesome OpenClaw Examples: 300 กรณีใช้งาน OpenClaw ที่รันได้จริง

![โลโก้ Awesome OpenClaw Use Cases and Examples](../../logo.png)

อ่าน README นี้เป็นภาษา: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> ภาพรวมฉบับแปลนี้ซิงค์กับแคตตาล็อกที่มี starter 300 รายการ โดย English README และแคตตาล็อกฉบับเต็มเป็นแหล่งอ้างอิงหลัก

ถ้าคุณค้นหา `openclaw usecases` หรือ `openclaw examples` คุณน่าจะกำลังพยายามตอบคำถามง่าย ๆ ข้อหนึ่ง: จริง ๆ แล้ว OpenClaw เอาไปทำอะไรได้บ้าง โดยไม่ต้องสร้างทุกอย่างใหม่ตั้งแต่ต้น? repo นี้คือคำตอบของผม มันรวบรวม starter packs ที่รันได้จริง 300 ชุด ซึ่งสร้างบน ClawHub skills แบบสาธารณะ และแต่ละชุดมี setup steps, prompts, sample outputs, KPI, security notes และ rollback guidance ครบ

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> repo ตัวอย่าง AI หลายอันดูดีมาก จนกระทั่งคุณลองรันมันจริง ๆ

ผมทำ repo นี้ไว้สำหรับทีมที่ต้องการของที่เอาไปลอง ใช้ตรวจสอบ และหยิบไปต่อยอดได้จริง ที่นี่ไม่มีแค่ demo ลอย ๆ แต่เป็นกรณีใช้งาน OpenClaw ที่ผูกกับงานจริง เช่น PR triage, การจัดการ inbox, การตาม SEO drift, การสรุป redlines, การดึงปัญหา security ขึ้นมาให้เห็น และการเปลี่ยนข้อมูลดิบที่ยุ่ง ๆ ให้กลายเป็นผลลัพธ์ที่ใช้งานได้

## ทำไมคนถึงเก็บ repo นี้ไว้

- ตัวอย่างเหล่านี้รันได้จริง ไม่ได้มีแค่คำอธิบาย
- repo นี้ใช้เฉพาะ ClawHub skills แบบสาธารณะที่คุณตรวจสอบได้ก่อนติดตั้ง
- ทุกตัวอย่างมี sample output ให้ดูคุณภาพก่อน setup
- setup, KPI, security notes, failure modes และ rollback อยู่ใน template อยู่แล้ว
- catalog ครอบคลุมงานจริงใน engineering, support, research, content, revenue, finance, security และ internal ops
- ผมอยากเก็บไว้เฉพาะตัวอย่างที่คุ้มกับเวลาที่ใช้ setup จริง ๆ

## เริ่มตามเป้าหมาย

ถ้าคุณอยากได้ผลลัพธ์แรกเร็ว ๆ ให้เลือกแถวที่ใกล้กับปัญหาที่คุณกำลังเจอที่สุด

| เป้าหมาย | เริ่มจาก | เพราะอะไร |
| --- | --- | --- |
| ปลดคอขวดงาน engineering ให้เร็วขึ้น | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | สถานะ PR เข้าใจง่ายอยู่แล้ว จึงดูออกได้เร็วมากว่า workflow นี้ช่วยได้จริงไหม |
| ทำ release communication ให้ดีขึ้น | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notes รีวิวง่าย เทียบง่าย และเหมาะกับการทำ pilot |
| จัดการเอกสารและเสียงได้เร็วขึ้น | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF และ transcripts มักยุ่งเร็วมาก แค่มี summary ที่ดีสักครั้งก็ช่วยประหยัดเวลาได้แล้ว |
| จับ drift ของต้นทุน AI ให้เร็วขึ้น | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | ถ้าทีมคุณจ่ายค่า models อยู่แล้ว cost drift เป็นปัญหาที่อธิบายได้ง่ายมาก |
| เปลี่ยน search drift ให้เป็นโอกาสของ content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | เป็น marketing use case ที่ดี เพราะ ranking drift และ refresh opportunities ออกมาเป็นงานที่จับต้องได้ |
| ทำสรุปรายสัปดาห์ให้ leadership โดยไม่ต้องวิ่งตาม updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | มันเปลี่ยน updates ที่กระจัดกระจายให้กลายเป็น executive summary ที่อ่านง่าย |

## OpenClaw usecases ตามทีม

ถ้าคุณพิมพ์ค้นหาตรง ๆ ว่า `openclaw usecases` ให้เริ่มจากตรงนี้ นี่ไม่ใช่กอง prompts แบบสุ่ม แต่เป็น workflows ที่ผูกกับงานซ้ำ ๆ ที่ทีมทำอยู่แล้ว

| ทีม | ตัวอย่างเด่น | อะไรที่ทำให้เป็นอัตโนมัติได้ |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | การมองเห็น PR, รีวิว flaky tests, ทำความสะอาด repo, security triage |
| Support และ inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, ทำความสะอาดคิว, VIP follow-up, routing คำขอภายใน |
| Research และ content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, การตามคู่แข่ง, repurposing, สร้าง FAQ |
| Marketing และ SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | ค้นหา topics, เฝ้าดู search drift, เก็บ proof |
| Revenue และ customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, เตรียมประชุม |
| People และ recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | คอขวดในการจ้างงาน, onboarding flow, interview context |
| Finance และ legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | review redlines, procurement follow-up, เตรียม board |
| Leadership และ operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | การจัดแนวรายวัน, operating cadence, launch readiness, รายงานรายสัปดาห์ |

## Top 10 Quick Wins

ผมดู catalog ครบทั้ง 300 ตัวอย่างก่อนคัดรายการนี้ออกมา นี่คือชุดที่ผมจะหยิบให้คนลองก่อน เพราะเห็นคุณค่าเร็ว และคุณภาพของ output ก็ตัดสินได้ง่าย

| ID | ตัวอย่าง | ทำไมถึงเป็น quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR มีสถานะชัดอยู่แล้ว จึงเห็นได้เร็วว่า ranking ช่วยจริงไหม และทีมจะใช้ไหม | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notes รีวิวและแชร์ง่าย จึงเหมาะมากถ้าต้องการ buy-in โดยไม่แตะพื้นที่ที่อ่อนไหว | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF และ transcripts มักซับซ้อนเร็ว ดังนั้นแค่ summary ที่ดีหนึ่งครั้งก็ช่วยประหยัดเวลาได้ทันที | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | ถ้าทีมใช้เงินกับ models อยู่แล้ว cost drift คือหนึ่งในปัญหาที่อธิบายและจัดลำดับความสำคัญได้ง่ายที่สุด | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage เป็นเรื่องสากล และ workflow นี้เปลี่ยนภาระ email ที่กระจัดกระจายให้กลายเป็น task list ที่ลงมือทำได้จริง | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | มันมีเสน่ห์แบบเดียวกับ inbox triage แต่โฟกัสกว่าและสำคัญกว่า เพราะจับเฉพาะ threads ที่พลาดไม่ได้ | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | เป็น marketing workflow ที่ดีเพราะ ranking drift และ refresh opportunities กลายเป็นงานที่ชัด ไม่ใช่คำพูดยุทธศาสตร์ลอย ๆ | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | ทีม security ประเมินค่าได้เร็วเพราะ workflow นี้ให้ evidence ไม่ใช่ภาษาความเสี่ยงแบบนามธรรม | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | การประกอบสรุปรายสัปดาห์ด้วยมือเหนื่อยมาก ดังนั้นเวลาที่ประหยัดได้จึงเห็นผลแทบจะทันที | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | คำถามภายในเกิดซ้ำตลอด จึงได้คุณค่าเร็วมากจาก routing และการนำคำตอบกลับมาใช้ซ้ำ | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## มาตรฐานคุณภาพของตัวอย่าง

starter ทุกตัวที่เข้ามาอยู่ใน repo นี้ควรมีอย่างน้อย:

- นิยามปัญหาและ scope ที่ชัดเจน
- Skill stack และคำสั่งติดตั้ง
- setup steps และ prompt files
- sample output (`sample-output.md`)
- smoke test และ KPI
- security notes
- failure modes
- rollback guidance

โครงสร้าง starter แบบทั่วไป:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## เริ่มต้นอย่างรวดเร็ว

1. เลือกตัวอย่างที่ใกล้กับปัญหาจริงที่เกิดซ้ำทุกสัปดาห์ที่สุด ไม่ใช่ตัวที่มีชื่อหวือหวาที่สุด
2. ติดตั้ง skills ที่ต้องใช้ด้วย `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. รัน `scripts/check_prereqs.sh` ของตัวอย่างนั้น
4. ดู `sample-output.md` ก่อนเพื่อเข้าใจว่า output ที่ดีควรหน้าตาแบบไหน
5. ใช้ prompt และ cron setup ของตัวอย่างนั้น
6. เริ่มจาก scope แคบ, draft-only delivery และ review โดยมนุษย์ก่อน แล้วค่อยขยาย

## Runnable starters (ทั้งหมด 300 รายการ)

repo นี้ตอนนี้มี OpenClaw starter packs ที่รันได้จริง 300 รายการ และจัดกลุ่มตามประเภทงานที่มันช่วยทีมทำ

| ช่วง | โฟกัส | หมายเหตุ |
| --- | --- | --- |
| 01-30 | Foundation set | starter ชุดแรกสำหรับ engineering, support, research และ founder workflows |
| 31-42 | Engineering quality และ release operations | ลูปเกี่ยวกับ dependencies, CI, ownership, release, hotfix และ model behavior control |
| 43-52 | Revenue, renewals และ pipeline control | renewal risk, สัญญาณการขยายตัว, trials, collections และ partner motion |
| 53-62 | Support, inbox และ operator workflows | bug intake, การดูแล VIP, calendar prep, handoffs และ operating memos |
| 63-70 | Research, content และ market signals | competitive intelligence, quote mining, webinar repurposing, SEO และ request routing |
| 71-76 | People, recruiting และ onboarding | candidate briefs, stall tracking, onboarding, policy และ source quality |
| 77-82 | Finance, procurement และ board prep | renewals, redlines, procurement, PO follow-up, expense exceptions และ board evidence |
| 83-101 | Security, IT, governance และ internal operations | access review, secrets, audits, exceptions, IT intake, asset return และ meeting hygiene |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

ดูรายการทั้งหมดได้ที่ [examples/catalog.md](../../examples/catalog.md)

## repo นี้เหมาะกับใคร

- ทีมที่อยากประเมิน use cases ของ OpenClaw แบบใช้งานจริงก่อนจะสร้าง workflows เอง
- ผู้ใช้ OpenClaw ที่อยากได้ตัวอย่างที่รันได้ ไม่ใช่ prompts แบบกว้าง ๆ
- founders, operators และ ICs ที่อยากปล่อย automation ที่มีผลกระทบสูงก่อนหนึ่งตัว
- ทุกคนที่อยากตรวจคุณภาพ output ก่อนเชื่อมต่อ production systems

## หมายเหตุสำคัญ

- ตัวอย่างเหล่านี้เป็น research-informed starter contracts ไม่ใช่การรับรองจาก maintainer โปรด validate ทุก workflow ใน environment ของคุณเอง
- นี่คือ repo ที่ดูแลแบบอิสระ ไม่ใช่โปรแกรมทางการของ OpenClaw
- Feedback, fixes และตัวอย่างที่ดีกว่ายินดีเสมอ
- repo นี้ไม่รับ workflows ด้าน crypto หรือ trading
- repo นี้ไม่รับ custom skills ที่ไม่ได้เผยแพร่ผ่าน ClawHub
- ClawHub เป็น registry สาธารณะของ OpenClaw skills ดังนั้นควร inspect third-party skills ก่อนเปิดใช้
- ควรทำงานด้วย least privilege, delivery targets ที่เชื่อถือได้, review โดยมนุษย์สำหรับการกระทำขาออก และ rollback paths ที่ชัดเจน

## OpenClaw FAQ

### repo นี้มี openclaw usecases แบบไหนบ้าง?

repo นี้ครอบคลุม engineering, support, research, content, revenue, people ops, finance, security และ internal operations ถ้าคุณกำลังหา `openclaw usecases` ที่มี business value ชัดเจน ให้เริ่มจากตาราง quick wins หรือส่วนเริ่มตามเป้าหมายด้านบน

### OpenClaw examples เหล่านี้รันได้จริงหรือไม่?

ได้จริง แต่ละ runnable starter คาดว่าจะมี scripts, prompts, setup steps และ sample output อย่างครบถ้วน อย่างไรก็ตาม คุณควรทดสอบแต่ละ workflow ใน environment ของคุณเองก่อนนำไปใช้ใน production

### ทำไมใช้เฉพาะ ClawHub skills?

เพราะความสามารถในการทำซ้ำมีความสำคัญ การจำกัด repo ให้อยู่กับ ClawHub skills แบบสาธารณะ ทำให้ OpenClaw examples เหล่านี้ inspect, install, compare และ trust ได้ง่ายขึ้น

### นี่เป็น repo ทางการของ OpenClaw หรือไม่?

ไม่ใช่ นี่คือชุดตัวอย่าง OpenClaw ที่ maintainer ดูแลอย่างอิสระ เพื่อช่วยให้คนหา OpenClaw workflows ที่มีประโยชน์ได้เร็วขึ้น

### ควรเริ่มจากตัวอย่างไหนก่อน?

ถ้าคุณอยากได้ first run ที่ปลอดภัย ให้เริ่มจาก [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) หรือ [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) ตามทีมของคุณ

## Contributing

ถ้าคุณอยากเพิ่มหรือปรับปรุง starter ใด ๆ ให้เริ่มจากอ่าน [CONTRIBUTING.md](../../CONTRIBUTING.md) เกณฑ์นั้นง่ายมาก: ต้องทำซ้ำได้, ซื่อสัตย์, ปลอดภัยโดยค่าเริ่มต้น และแสดงคุณค่าที่วัดได้
