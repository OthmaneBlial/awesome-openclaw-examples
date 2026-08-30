# Awesome OpenClaw Examples: 300 use case OpenClaw yang bisa langsung dijalankan

![Logo Awesome OpenClaw Use Cases and Examples](../../logo.png)

Baca README ini dalam: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Ringkasan terjemahan ini disinkronkan dengan katalog berisi 300 starter. README bahasa Inggris dan katalog lengkap adalah referensi kanonik.

Kalau Anda mencari `openclaw usecases` atau `openclaw examples`, kemungkinan Anda sedang mencoba menjawab satu pertanyaan sederhana: apa yang benar-benar bisa dilakukan dengan OpenClaw tanpa membangun semuanya dari nol? Repo ini adalah jawaban saya. Di sini ada 300 starter packs yang bisa dijalankan, dibangun di atas ClawHub skills publik, dan masing-masing dilengkapi setup steps, prompts, sample outputs, KPI, security notes, dan rollback guidance.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Banyak repo contoh AI terlihat meyakinkan sampai Anda benar-benar mencoba menjalankannya.

Saya menyusun repo ini untuk tim yang butuh sesuatu yang bisa diuji, diperiksa, dan dipakai ulang. Di sini bukan kumpulan demo yang samar, melainkan use case OpenClaw yang terhubung ke pekerjaan nyata: triage PR, merapikan inbox, memantau SEO drift, merangkum redlines, memunculkan masalah security, dan mengubah sumber yang berisik menjadi output yang berguna.

## Kenapa orang menyimpan repo ini

- Contohnya benar-benar bisa dijalankan, bukan cuma dijelaskan
- Repo ini memakai ClawHub skills publik yang bisa Anda inspect sebelum menginstal
- Setiap contoh punya sample output, jadi kualitasnya bisa dinilai sebelum setup
- setup, KPI, security notes, failure modes, dan rollback sudah jadi bagian dari template
- Katalognya mencakup pekerjaan nyata di engineering, support, research, content, revenue, finance, security, dan internal ops
- Saya hanya ingin menyimpan contoh yang memang layak untuk waktu setup Anda

## Mulai berdasarkan tujuan

Kalau Anda ingin cepat melihat hasil pertama, pilih baris yang paling mirip dengan masalah yang sedang Anda hadapi sekarang.

| Tujuan | Mulai dari | Kenapa |
| --- | --- | --- |
| Membuka bottleneck engineering lebih cepat | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | Status PR sudah jelas, jadi dari satu kali run saja Anda cepat tahu apakah workflow ini berguna |
| Merapikan release communication | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes mudah direview dan dibandingkan, jadi cocok sebagai pilot |
| Memproses dokumen dan suara lebih cepat | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF dan transcripts cepat sekali jadi berantakan, jadi satu summary yang baik saja sudah menghemat waktu |
| Menangkap drift biaya AI lebih awal | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Kalau tim Anda sudah membayar models, cost drift adalah masalah yang langsung dipahami semua orang |
| Mengubah search drift menjadi peluang content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Ini use case marketing yang kuat karena ranking drift dan refresh opportunities muncul sebagai pekerjaan nyata |
| Memberi leadership ringkasan mingguan tanpa mengejar updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Ia mengubah updates yang tersebar menjadi executive summary yang rapi |

## OpenClaw use cases menurut tim

Kalau yang Anda cari memang `openclaw usecases`, mulailah dari sini. Ini bukan tumpukan prompts acak. Ini workflows yang nyambung langsung dengan pekerjaan berulang yang memang sudah dikerjakan tim.

| Tim | Contoh kuat | Apa yang bisa diotomatisasi |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | Visibilitas PR, review flaky tests, pembersihan repo, security triage |
| Support dan inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, pembersihan antrean, VIP follow-up, routing permintaan internal |
| Research dan content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, pelacakan kompetitor, repurposing, pembuatan FAQ |
| Marketing dan SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Penemuan topik, pemantauan search drift, pengumpulan proof |
| Revenue dan customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, persiapan meeting |
| People dan recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | Hambatan hiring, onboarding flow, interview context |
| Finance dan legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | review redlines, procurement follow-up, persiapan board |
| Leadership dan operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Penyelarasan harian, operating cadence, launch readiness, reporting mingguan |

## Top 10 Quick Wins

Saya meninjau katalog lengkap yang berisi 300 contoh untuk menyusun daftar ini. Inilah yang paling layak saya berikan lebih dulu ke seseorang, karena nilainya cepat terlihat dan kualitas output-nya juga mudah dinilai.

| ID | Contoh | Kenapa ini quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR sudah punya status yang jelas, jadi cepat terlihat apakah ranking ini membantu dan apakah orang akan memakainya | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes mudah direview dan dibagikan, jadi bagus untuk mendapatkan buy-in tanpa menyentuh area sensitif | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF dan transcripts cepat jadi rumit, jadi satu summary yang bagus saja sudah memberi penghematan waktu sejak hari pertama | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Kalau tim Anda sudah mengeluarkan biaya untuk models, cost drift adalah salah satu masalah termudah untuk dijelaskan dan diprioritaskan | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | Inbox triage itu universal, dan workflow ini mengubah beban email yang kabur menjadi task list yang benar-benar bisa dikerjakan | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Daya tariknya mirip inbox triage, tapi lebih sempit dan lebih kritis karena fokus pada threads yang tidak boleh terlewat | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Workflow marketing yang kuat karena ranking drift dan refresh opportunities muncul sebagai pekerjaan konkret, bukan strategi yang kabur | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | Tim security bisa menilainya cepat karena workflow ini memberi evidence, bukan bahasa risiko yang abstrak | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Menyusun ringkasan mingguan secara manual itu melelahkan, jadi penghematan waktunya terlihat hampir seketika | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | Pertanyaan internal terus berulang, jadi routing dan penggunaan ulang jawaban memberi nilai sangat cepat | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Standar kualitas contoh

Setiap starter yang diterima di repo ini seharusnya punya:

- Definisi masalah dan scope yang jelas
- Skill stack dan perintah instalasi
- setup steps dan prompt files
- sample output (`sample-output.md`)
- smoke test dan KPI
- security notes
- failure modes
- rollback guidance

Struktur starter yang umum:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Mulai cepat

1. Pilih contoh yang paling dekat dengan masalah nyata mingguan Anda, bukan yang judulnya paling mencolok.
2. Instal skills yang diperlukan dengan `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. Jalankan `scripts/check_prereqs.sh` untuk contoh tersebut.
4. Lihat `sample-output.md` lebih dulu supaya Anda tahu seperti apa output yang baik.
5. Terapkan prompt dan cron setup dari contoh itu.
6. Mulai dengan scope kecil, draft-only delivery, dan review manusia sebelum diperluas.

## Runnable starters (300 total)

Repo ini sekarang berisi 300 OpenClaw starter packs yang bisa dijalankan, dikelompokkan berdasarkan jenis pekerjaan yang mereka bantu selesaikan.

| Rentang | Fokus | Catatan |
| --- | --- | --- |
| 01-30 | Foundation set | Kumpulan starter awal untuk engineering, support, research, dan founder workflows. |
| 31-42 | Engineering quality dan release operations | Loop seputar dependencies, CI, ownership, release, hotfix, dan kontrol perilaku models. |
| 43-52 | Revenue, renewals, dan pipeline control | renewal risk, sinyal ekspansi, trials, collections, dan partner motion. |
| 53-62 | Support, inbox, dan operator workflows | bug intake, perhatian VIP, calendar prep, handoffs, dan operating memos. |
| 63-70 | Research, content, dan market signals | competitive intelligence, quote mining, webinar repurposing, SEO, dan request routing. |
| 71-76 | People, recruiting, dan onboarding | candidate briefs, stall tracking, onboarding, policy, dan source quality. |
| 77-82 | Finance, procurement, dan board prep | renewals, redlines, procurement, PO follow-up, expense exceptions, dan board evidence. |
| 83-101 | Security, IT, governance, dan internal operations | access review, secrets, audits, exceptions, IT intake, asset return, dan meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Lihat daftar lengkapnya di [examples/catalog.md](../../examples/catalog.md).

## Repo ini cocok untuk siapa

- Tim yang ingin menilai use case OpenClaw yang nyata sebelum membangun workflows sendiri
- Pengguna OpenClaw yang ingin contoh yang bisa dijalankan, bukan prompts yang samar
- founders, operators, dan ICs yang ingin meluncurkan satu automation berdampak tinggi lebih dulu
- Siapa pun yang ingin inspect kualitas output sebelum menghubungkan production systems

## Catatan penting

- Ini adalah starter contract berbasis research, bukan sertifikasi maintainer; validasi setiap workflow di environment Anda sendiri.
- Ini repo yang dipelihara secara independen, bukan program resmi OpenClaw.
- Feedback, fixes, dan contoh yang lebih baik sangat diterima.
- Repo ini tidak menerima crypto atau trading workflows.
- Repo ini tidak menerima custom skills yang tidak dipublikasikan lewat ClawHub.
- ClawHub adalah registry publik untuk OpenClaw skills, jadi inspect third-party skills sebelum diaktifkan.
- Bekerjalah dengan least privilege, delivery targets tepercaya, review manusia untuk aksi keluar, dan jalur rollback yang jelas.

## OpenClaw FAQ

### Jenis openclaw usecases apa yang ada di repo ini?

Repo ini mencakup engineering, support, research, content, revenue, people ops, finance, security, dan internal operations. Jika Anda mencari `openclaw usecases` dengan nilai bisnis yang jelas, mulai dari tabel quick wins atau bagian tujuan di atas.

### Apakah OpenClaw examples ini benar-benar bisa dijalankan?

Ya. Setiap runnable starter diharapkan memiliki scripts, prompts, setup steps, dan sample output. Tetap saja, Anda perlu memvalidasi setiap workflow di environment Anda sendiri sebelum dipakai di production.

### Kenapa hanya ClawHub skills?

Karena reproducibility itu penting. Membatasi repo pada ClawHub skills publik membuat OpenClaw examples ini lebih mudah di-inspect, diinstal, dibandingkan, dan dipercaya.

### Apakah ini repo resmi OpenClaw?

Bukan. Ini adalah kumpulan contoh OpenClaw yang dipelihara secara independen oleh maintainer agar orang lebih cepat menemukan OpenClaw workflows yang berguna.

### Saya sebaiknya mulai dari contoh yang mana?

Jika Anda ingin first run yang aman, mulailah dari [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), atau [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), tergantung tim Anda.

## Contributing

Kalau Anda ingin menambah atau memperbaiki starter, baca [CONTRIBUTING.md](../../CONTRIBUTING.md). Standarnya sederhana: harus reproducible, jujur, aman secara default, dan menunjukkan nilai yang bisa diukur.
