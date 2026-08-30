# Awesome OpenClaw Examples: Çalıştırılabilir 300 OpenClaw kullanım senaryosu

![Awesome OpenClaw Use Cases and Examples logosu](../../logo.png)

Bu README'yi şu dillerde okuyun: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> Bu çevrilmiş özet 300 starter içeren katalogla senkronizedir. İngilizce README ve tam katalog kanonik referanstır.

`openclaw usecases` ya da `openclaw examples` diye aradıysanız, muhtemelen tek bir soruya cevap arıyorsunuz: Her şeyi sıfırdan kurmadan OpenClaw ile gerçekten ne yapılabilir? Bu repo benim buna verdiğim cevap. Burada, herkese açık ClawHub skills üzerine kurulu 300 çalıştırılabilir starter packs var; her birinde setup adımları, prompts, sample outputs, KPI, security notes ve rollback guidance bulunuyor.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> Birçok AI örnek reposu, gerçekten çalıştırmayı deneyene kadar iyi görünür.

Bu repoyu, test edebileceği, inceleyebileceği ve gerektiğinde parça alıp kullanabileceği bir şeye ihtiyaç duyan ekipler için hazırladım. Burada belirsiz demo fikirleri değil, gerçek işe bağlı OpenClaw kullanım senaryoları var: PR triage, inbox temizliği, SEO drift takibi, redlines özetleme, security sorunlarını görünür kılma ve gürültülü kaynak materyali işe yarar bir çıktıya dönüştürme.

## İnsanlar neden bu repoyu elinin altında tutuyor

- Örnekler gerçekten çalıştırılabilir; sadece anlatılmış değiller
- Repo, yüklemeden önce inceleyebileceğiniz herkese açık ClawHub skills kullanıyor
- Her örnekte sample output var; kaliteyi setup öncesinde görebiliyorsunuz
- setup, KPI, security notes, failure modes ve rollback zaten template'in parçası
- Katalog engineering, support, research, content, revenue, finance, security ve internal ops tarafındaki gerçek işleri kapsıyor
- Burada yalnızca setup süresine gerçekten değen örnekler kalsın istiyorum

## Hedefe göre başlayın

İlk faydayı hızlı görmek istiyorsanız, şu an yaşadığınız probleme en çok benzeyen satırdan başlayın.

| Hedef | Buradan başlayın | Neden |
| --- | --- | --- |
| Engineering işindeki tıkanıklıkları daha hızlı açmak | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | PR durumu zaten anlaşılır olduğu için, tek çalıştırmada workflow'un işinize yarayıp yaramadığını görürsünüz |
| Release communication'ı daha temiz hale getirmek | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | Release notes kolayca gözden geçirilebilir ve karşılaştırılabilir, bu yüzden iyi bir pilot örneğidir |
| Belgeleri ve sesli girdileri daha hızlı işlemek | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | PDF'ler ve transcripts hızla dağılır; bu yüzden iyi bir summary bile ilk günden zaman kazandırır |
| AI maliyet drift'ini erken yakalamak | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | Ekibiniz zaten models için ödeme yapıyorsa, cost drift herkesin hemen anlayacağı bir sorundur |
| Search drift'i content fırsatına çevirmek | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | Güçlü bir marketing use case, çünkü ranking drift ve refresh opportunities soyut strateji değil, somut iş olarak ortaya çıkar |
| Leadership için haftalık görünümü status peşinde koşmadan oluşturmak | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | Dağınık updates'i temiz bir executive summary'ye dönüştürür |

## Takıma göre OpenClaw kullanım senaryoları

Eğer gerçekten `openclaw usecases` diye aradıysanız, önce buraya bakın. Bu rastgele bir prompts yığını değil. Ekiplerin zaten tekrar tekrar yaptığı işlere bağlı workflows bunlar.

| Takım | Güçlü örnekler | Neleri otomatikleştirebilirsiniz |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | PR görünürlüğü, flaky tests review, repo temizliği, security triage |
| Support ve inbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests, kuyruk temizliği, VIP follow-up, iç taleplerin routing'i |
| Research ve content | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring, rakip takibi, repurposing, FAQ üretimi |
| Marketing ve SEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | Konu keşfi, search drift izleme, proof toplama |
| Revenue ve customer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk, follow-up ownership, toplantı hazırlığı |
| People ve recruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | işe alım darboğazları, onboarding flow, interview context |
| Finance ve legal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review, procurement follow-up, board hazırlığı |
| Leadership ve operations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | günlük hizalama, operating cadence, launch readiness, haftalık reporting |

## Top 10 Quick Wins

Bu liste için 300 örneğin tamamını gözden geçirdim. Bunlar birine önce vereceğim örnekler olurdu, çünkü değer hızlı ortaya çıkıyor ve output kalitesi kolay değerlendiriliyor.

| ID | Örnek | Neden quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | PR'lerin durumu zaten net olduğu için, ranking'in gerçekten işe yarayıp yaramadığını ve ekipte kullanılıp kullanılmayacağını hızla anlarsınız | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | Release notes kolayca review edilir ve paylaşılır; bu yüzden hassas alanlara dokunmadan buy-in toplamak için iyidir | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | PDF'ler ve transcripts hızla karmaşık hale gelir; bu yüzden iyi bir summary ilk günden zaman kazandırır | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | Ekibiniz zaten models için bütçe ayırıyorsa, cost drift açıklaması ve önceliklendirmesi en kolay problemlerden biridir | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage evrensel bir ihtiyaçtır ve bu workflow dağınık email yükünü gerçekten çalışılabilir bir task list'e dönüştürür | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | Inbox triage ile aynı çekiciliğe sahip ama daha dar ve daha kritik; çünkü tam olarak kaçırılmaması gereken threads'e bakıyor | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | Güçlü bir marketing workflow, çünkü ranking drift ve refresh opportunities soyut strateji konuşması değil, somut iş olarak çıkar | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | security ekipleri bunu hızlı değerlendirir; çünkü soyut risk dili yerine doğrudan evidence sunar | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | Haftalık özetleri elle hazırlamak yorucudur; bu yüzden zaman kazancı neredeyse hemen görünür | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | İç sorular sürekli tekrarlandığı için routing ve cevapların yeniden kullanılması çok hızlı değer üretir | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## Örnek kalite standardı

Bu repoya giren her starter en azından şunları içermeli:

- Açık bir problem tanımı ve scope
- Skill stack ve kurulum komutları
- setup adımları ve prompt files
- sample output (`sample-output.md`)
- smoke test ve KPI
- security notes
- failure modes
- rollback guidance

Tipik starter yapısı:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## Hızlı başlangıç

1. En gösterişli başlığı değil, her hafta yaşadığınız gerçek probleme en yakın örneği seçin.
2. Gerekli skills'i `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>` ile kurun.
3. Örneğin `scripts/check_prereqs.sh` dosyasını çalıştırın.
4. İyi bir output nasıl görünmeli önce anlamak için `sample-output.md` dosyasına bakın.
5. O örnekteki prompt ve cron setup'ı uygulayın.
6. Önce dar scope, draft-only delivery ve insan review ile başlayın; sonra genişletin.

## Runnable starters (toplam 300)

Repo şu anda, ekiplerin yaptığı iş türlerine göre gruplanmış 300 çalıştırılabilir OpenClaw starter packs içeriyor.

| Aralık | Odak | Notlar |
| --- | --- | --- |
| 01-30 | Foundation set | engineering, support, research ve founder workflows için ilk starter kütüphanesi. |
| 31-42 | Engineering quality ve release operations | dependencies, CI, ownership, release, hotfix ve model behavior control döngüleri. |
| 43-52 | Revenue, renewals ve pipeline control | renewal risk, genişleme sinyalleri, trials, collections ve partner motion. |
| 53-62 | Support, inbox ve operator workflows | bug intake, VIP dikkat, calendar prep, handoffs ve operating memos. |
| 63-70 | Research, content ve market signals | competitive intelligence, quote mining, webinar repurposing, SEO ve request routing. |
| 71-76 | People, recruiting ve onboarding | candidate briefs, stall tracking, onboarding, policy ve source quality. |
| 77-82 | Finance, procurement ve board prep | renewals, redlines, procurement, PO follow-up, expense exceptions ve board evidence. |
| 83-101 | Security, IT, governance ve internal operations | access review, secrets, audits, exceptions, IT intake, asset return ve meeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

Tam liste için [examples/catalog.md](../../examples/catalog.md) dosyasına bakın.

## Bu repo kimler için

- Kendi workflows'unu kurmadan önce gerçek OpenClaw kullanım senaryolarını değerlendirmek isteyen ekipler
- Belirsiz prompts yerine çalıştırılabilir örnekler isteyen OpenClaw kullanıcıları
- Önce yüksek etkili tek bir automation yayınlamak isteyen founders, operators ve ICs
- production systems bağlamadan önce output kalitesini görmek isteyen herkes

## Önemli notlar

- Bunlar research-informed starter contract örnekleridir, maintainer sertifikası değildir; her workflowu kendi ortamınızda doğrulayın.
- Bu bağımsız olarak sürdürülen bir repo; resmi bir OpenClaw programı değil.
- Feedback, fixes ve daha iyi örnekler her zaman memnuniyetle karşılanır.
- Bu repo crypto ya da trading workflows kabul etmez.
- Bu repo ClawHub üzerinden yayımlanmamış custom skills kabul etmez.
- ClawHub, OpenClaw skills için herkese açık bir registry olduğu için third-party skills'i açmadan önce inceleyin.
- least privilege, güvenilir delivery targets, dışa giden aksiyonlarda insan review ve net rollback yolları ile çalışın.

## OpenClaw SSS

### Bu repoda hangi tür openclaw usecases var?

Bu repo engineering, support, research, content, revenue, people ops, finance, security ve internal operations alanlarını kapsıyor. İş değeri net olan `openclaw usecases` arıyorsanız, yukarıdaki quick wins tablosu ya da hedefe göre başlangıç bölümü iyi bir başlangıçtır.

### Bu OpenClaw examples gerçekten çalıştırılabilir mi?

Evet. Her runnable starter için scripts, prompts, setup steps ve sample output bulunması beklenir. Yine de production'a almadan önce her workflow'u kendi ortamınızda doğrulamalısınız.

### Neden sadece ClawHub skills?

Çünkü yeniden üretilebilirlik önemli. Repoyu herkese açık ClawHub skills ile sınırlamak, bu OpenClaw examples'ı incelemeyi, kurmayı, karşılaştırmayı ve güvenmeyi kolaylaştırıyor.

### Bu resmi bir OpenClaw reposu mu?

Hayır. Bu, insanların faydalı OpenClaw workflows'u daha hızlı bulabilmesi için maintainer tarafından bağımsız biçimde sürdürülen bir OpenClaw örnek koleksiyonu.

### İlk hangi örnekle başlamalıyım?

Güvenli bir ilk deneme istiyorsanız, ekibinize göre [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) ya da [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) ile başlayın.

## Contributing

Bir starter eklemek ya da geliştirmek istiyorsanız [CONTRIBUTING.md](../../CONTRIBUTING.md) dosyasını okuyun. Ölçüt basit: yeniden üretilebilir, dürüst, varsayılan olarak güvenli ve ölçülebilir değer gösteren bir iş olmalı.
