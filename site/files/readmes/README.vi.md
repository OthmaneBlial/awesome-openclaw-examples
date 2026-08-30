# Awesome OpenClaw Examples: 300 trường hợp sử dụng OpenClaw có thể chạy ngay

![Logo Awesome OpenClaw Use Cases and Examples](../../logo.png)

Đọc README này bằng: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Phần tổng quan đã dịch này được đồng bộ với catalog gồm 300 starter. README tiếng Anh và catalog đầy đủ là nguồn chuẩn.

Nếu bạn tìm `openclaw usecases` hoặc `openclaw examples`, có lẽ bạn đang cố trả lời một câu hỏi rất đơn giản: thật ra có thể làm gì với OpenClaw mà không phải xây mọi thứ từ đầu? Repo này là câu trả lời của tôi. Nó gom lại 300 starter packs có thể chạy được, dựa trên các ClawHub skills công khai, và mỗi cái đều có setup steps, prompts, sample outputs, KPI, security notes và rollback guidance.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Nhiều repo ví dụ về AI trông rất ổn cho đến khi bạn thật sự thử chạy chúng.

Tôi làm repo này cho những nhóm cần thứ gì đó họ có thể test, inspect và tái sử dụng. Ở đây không phải là các demo mơ hồ, mà là các trường hợp sử dụng OpenClaw gắn với công việc thật: triage PR, dọn inbox, theo dõi SEO drift, tóm tắt redlines, bề mặt hóa các vấn đề security, và biến nguồn dữ liệu lộn xộn thành thứ có ích.

## Vì sao mọi người giữ repo này lại

- Các ví dụ thật sự chạy được, không chỉ được mô tả
- Repo chỉ dùng ClawHub skills công khai mà bạn có thể inspect trước khi cài
- Ví dụ nào cũng có sample output để bạn đánh giá chất lượng trước khi setup
- setup, KPI, security notes, failure modes và rollback đã là một phần của template
- Catalog bao phủ công việc thật trong engineering, support, research, content, revenue, finance, security và internal ops
- Tôi chỉ muốn giữ lại những ví dụ thật sự đáng để bỏ thời gian setup

## Bắt đầu theo mục tiêu

Nếu bạn muốn có kết quả đầu tiên thật nhanh, hãy chọn dòng nào giống vấn đề bạn đang gặp nhất.

| Mục tiêu | Bắt đầu với | Vì sao |
| --- | --- | --- |
| Gỡ tắc công việc engineering nhanh hơn | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | Trạng thái PR vốn đã dễ hiểu, nên chỉ cần chạy một lần là biết workflow có hữu ích hay không |
| Làm release communication gọn hơn | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes dễ review, dễ so sánh, nên rất hợp để pilot |
| Xử lý tài liệu và giọng nói nhanh hơn | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF và transcripts rất nhanh trở nên lộn xộn, nên chỉ một summary tốt cũng đã tiết kiệm thời gian |
| Phát hiện drift chi phí AI sớm hơn | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Nếu đội của bạn đã trả tiền cho models, cost drift là vấn đề ai cũng hiểu ngay |
| Biến search drift thành cơ hội content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Đây là marketing use case mạnh vì ranking drift và refresh opportunities hiện ra như công việc cụ thể |
| Tạo góc nhìn hàng tuần cho leadership mà không phải đi đòi updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Nó biến những updates rời rạc thành một executive summary gọn gàng |

## OpenClaw usecases theo đội ngũ

Nếu bạn thật sự gõ đúng `openclaw usecases`, hãy bắt đầu từ đây. Đây không phải đống prompts rời rạc. Chúng bám vào công việc lặp lại mà các team vốn đã làm.

| Team | Ví dụ mạnh | Có thể tự động hóa gì |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Hiển thị PR, review flaky tests, dọn repo, security triage |
| Support và inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, dọn queue, VIP follow-up, routing yêu cầu nội bộ |
| Research và content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, theo dõi đối thủ, repurposing, tạo FAQ |
| Marketing và SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Tìm chủ đề, theo dõi search drift, thu thập proof |
| Revenue và customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, chuẩn bị cuộc họp |
| People và recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Nút thắt tuyển dụng, onboarding flow, interview context |
| Finance và legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | review redlines, procurement follow-up, chuẩn bị board |
| Leadership và operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Căn chỉnh hằng ngày, operating cadence, launch readiness, reporting hàng tuần |

## Top 10 Quick Wins

Tôi đã xem toàn bộ catalog 300 ví dụ để làm danh sách này. Đây là những thứ tôi sẽ đưa cho ai đó trước, vì giá trị của chúng xuất hiện nhanh và chất lượng output cũng dễ đánh giá.

| ID | Ví dụ | Vì sao đây là quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR vốn đã có trạng thái rõ ràng, nên bạn nhanh chóng thấy ranking có giúp gì không và liệu team có dùng nó không | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes dễ review và dễ chia sẻ, nên đây là cách tốt để lấy buy-in mà không đụng vào phần nhạy cảm | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF và transcripts rất nhanh thành mớ hỗn độn, nên chỉ một summary tốt cũng đã tiết kiệm thời gian ngay từ ngày đầu | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Nếu team đã chi tiền cho models, cost drift là một trong những vấn đề dễ giải thích và dễ ưu tiên nhất | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Inbox triage là nhu cầu chung, và workflow này biến gánh nặng email mơ hồ thành task list có thể xử lý thật | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Nó hấp dẫn như inbox triage nhưng hẹp hơn và quan trọng hơn, vì nó tập trung vào những threads không được bỏ lỡ | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Workflow marketing rất mạnh vì ranking drift và refresh opportunities hiện ra như việc cụ thể, không phải lời nói chiến lược mơ hồ | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Team security có thể đánh giá nó rất nhanh vì workflow này đưa ra evidence, không phải ngôn ngữ rủi ro trừu tượng | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Việc tự ráp báo cáo tuần rất mệt, nên phần thời gian tiết kiệm được thấy gần như ngay lập tức | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Câu hỏi nội bộ lặp lại liên tục, nên routing và tái sử dụng câu trả lời đem lại giá trị rất nhanh | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Tiêu chuẩn chất lượng cho ví dụ

Mỗi starter được chấp nhận trong repo này cần có ít nhất:

- Mô tả rõ vấn đề và scope
- Skill stack và lệnh cài đặt
- setup steps và prompt files
- sample output (`sample-output.md`)
- smoke test và KPI
- security notes
- failure modes
- rollback guidance

Cấu trúc starter điển hình:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Bắt đầu nhanh

1. Chọn ví dụ gần nhất với một vấn đề thật đang lặp lại hằng tuần, đừng chọn chỉ vì tiêu đề nghe hay.
2. Cài các skills cần thiết bằng `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Chạy `scripts/check_prereqs.sh` của ví dụ đó.
4. Đọc `sample-output.md` trước để biết một output tốt sẽ trông như thế nào.
5. Áp dụng prompt và cron setup của ví dụ đó.
6. Bắt đầu với scope hẹp, draft-only delivery và review của con người trước khi mở rộng.

## Runnable starters (tổng cộng 300)

Repo hiện có 300 OpenClaw starter packs có thể chạy được, được nhóm theo loại công việc mà chúng giúp các team xử lý.

| Khoảng | Trọng tâm | Ghi chú |
| --- | --- | --- |
| 01-30 | Foundation set | Bộ starter ban đầu cho engineering, support, research và founder workflows. |
| 31-42 | Engineering quality và release operations | Các vòng lặp liên quan đến dependencies, CI, ownership, release, hotfix và kiểm soát model behavior. |
| 43-52 | Revenue, renewals và pipeline control | renewal risk, tín hiệu mở rộng, trials, collections và partner motion. |
| 53-62 | Support, inbox và operator workflows | bug intake, chú ý VIP, calendar prep, handoffs và operating memos. |
| 63-70 | Research, content và market signals | competitive intelligence, quote mining, webinar repurposing, SEO và request routing. |
| 71-76 | People, recruiting và onboarding | candidate briefs, stall tracking, onboarding, policy và source quality. |
| 77-82 | Finance, procurement và board prep | renewals, redlines, procurement, PO follow-up, expense exceptions và board evidence. |
| 83-101 | Security, IT, governance và internal operations | access review, secrets, audits, exceptions, IT intake, asset return và meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Xem danh sách đầy đủ tại [examples/catalog.md](../../examples/catalog.md).

## Repo này dành cho ai

- Các team muốn đánh giá các trường hợp sử dụng OpenClaw thật trước khi tự xây workflow
- Người dùng OpenClaw muốn ví dụ chạy được thay vì prompts mơ hồ
- founders, operators và ICs muốn triển khai trước một automation có tác động lớn
- Bất kỳ ai muốn inspect chất lượng output trước khi nối vào production systems

## Ghi chú quan trọng

- Đây là starter contract dựa trên research, không phải chứng nhận của maintainer; hãy validate từng workflow trong môi trường của bạn.
- Đây là repo được duy trì độc lập, không phải chương trình chính thức của OpenClaw.
- Feedback, fixes và ví dụ tốt hơn đều được chào đón.
- Repo này không nhận crypto hay trading workflows.
- Repo này không nhận custom skills chưa được xuất bản qua ClawHub.
- ClawHub là registry công khai cho OpenClaw skills, vì vậy hãy inspect third-party skills trước khi bật.
- Hãy làm việc với least privilege, delivery targets đáng tin cậy, review của con người cho hành động outbound, và các đường rollback rõ ràng.

## OpenClaw FAQ

### Repo này có những loại openclaw usecases nào?

Repo này bao phủ engineering, support, research, content, revenue, people ops, finance, security và internal operations. Nếu bạn đang tìm `openclaw usecases` với giá trị kinh doanh rõ ràng, hãy bắt đầu bằng bảng quick wins hoặc phần bắt đầu theo mục tiêu ở trên.

### Những OpenClaw examples này có thật sự chạy được không?

Có. Mỗi runnable starter đều được kỳ vọng có scripts, prompts, setup steps và sample output. Dù vậy, bạn vẫn nên xác minh từng workflow trong môi trường của mình trước khi đưa vào production.

### Vì sao chỉ dùng ClawHub skills?

Vì khả năng tái lập là quan trọng. Giới hạn repo vào các ClawHub skills công khai giúp các OpenClaw examples này dễ inspect, dễ cài, dễ so sánh và dễ tin hơn.

### Đây có phải repo chính thức của OpenClaw không?

Không. Đây là bộ sưu tập ví dụ OpenClaw do maintainer duy trì độc lập để giúp mọi người tìm thấy các OpenClaw workflows hữu ích nhanh hơn.

### Tôi nên bắt đầu với ví dụ nào trước?

Nếu bạn muốn lần chạy đầu tiên an toàn, hãy bắt đầu với [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) hoặc [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), tùy theo team của bạn.

## Contributing

Nếu bạn muốn thêm hoặc cải thiện một starter, hãy đọc [CONTRIBUTING.md](../../CONTRIBUTING.md). Tiêu chuẩn rất đơn giản: phải tái lập được, trung thực, an toàn theo mặc định và cho thấy giá trị đo được.
