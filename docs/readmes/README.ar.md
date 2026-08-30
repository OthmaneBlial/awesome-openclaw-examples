# Awesome OpenClaw Examples: 300 حالة استخدام لـ OpenClaw جاهزة للتشغيل

![شعار Awesome OpenClaw Use Cases and Examples](../../logo.png)

اقرأ هذا README بهذه اللغات: [English](../../README.md) · [Español](README.es.md) · [Deutsch](README.de.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [中文 (简体)](README.zh-CN.md) · [中文 (繁體)](README.zh-TW.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [العربية](README.ar.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [हिन्दी](README.hi.md) · [Čeština](README.cs.md)

> تمت مزامنة هذا الملخص المترجم مع كتالوج يضم 300 starter. README الإنجليزي والكتالوج الكامل هما المرجع الأساسي.

إذا كنت تبحث عن `openclaw usecases` أو `openclaw examples`، فغالباً أنت تحاول الإجابة عن سؤال بسيط: ماذا يمكن أن أفعل فعلاً باستخدام OpenClaw من دون أن أبني كل شيء من الصفر؟ هذا الـ repo هو إجابتي على ذلك. ستجد هنا 300 starter packs قابلة للتشغيل مبنية على ClawHub skills عامة، وكل واحدة تتضمن خطوات setup، وprompts، وsample outputs، وKPI، وsecurity notes، وrollback guidance.

[![Live Docs Explorer](https://img.shields.io/badge/live-docs%20explorer-0a6b6b?style=for-the-badge)](https://othmaneblial.github.io/awesome-openclaw-examples)
![300 Runnable Starters](https://img.shields.io/badge/300-runnable%20starters-201811?style=for-the-badge)
![10 Quick Wins](https://img.shields.io/badge/10-quick%20wins-bb5b2c?style=for-the-badge)
![Research Informed](https://img.shields.io/badge/research-informed-ff8360?style=for-the-badge)

[Live Docs Explorer](https://othmaneblial.github.io/awesome-openclaw-examples) · [Browse Full Catalog](../../examples/catalog.md) · [Runnable Starters](../../examples/runnable/README.md) · [Contributing](../../CONTRIBUTING.md)

> كثير من repos أمثلة AI تبدو ممتازة إلى أن تحاول تشغيلها فعلاً.

أنشأت هذا الـ repo للفرق التي تريد شيئاً يمكنها اختباره وفحصه والاستفادة منه عملياً. لن تجد هنا demos مبهمة، بل حالات استخدام لـ OpenClaw مرتبطة بعمل حقيقي: PR triage، وتنظيف inbox، ومتابعة SEO drift، وتلخيص redlines، وإظهار مشكلات security، وتحويل المواد المليئة بالضجيج إلى مخرجات مفيدة.

## لماذا يحتفظ الناس بهذا الـ repo

- الأمثلة قابلة للتشغيل فعلاً وليست مجرد وصف نظري
- الـ repo يلتزم بـ ClawHub skills عامة يمكنك فحصها قبل التثبيت
- كل مثال يحتوي على sample output لتقييم الجودة قبل setup
- setup وKPI وsecurity notes وfailure modes وrollback موجودة ضمن template من الأساس
- الفهرس يغطي عملاً حقيقياً في engineering وsupport وresearch وcontent وrevenue وfinance وsecurity وinternal ops
- هدفي أن تبقى هنا فقط الأمثلة التي تستحق فعلاً وقت الـ setup

## ابدأ حسب الهدف

إذا كنت تريد أول فائدة بسرعة، فابدأ من السطر الأقرب إلى مشكلة تعيشها بالفعل الآن.

| الهدف | ابدأ من هنا | لماذا |
| --- | --- | --- |
| إزالة عوائق engineering بسرعة أكبر | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) | حالة الـ PR واضحة بطبيعتها، لذلك من السهل أن ترى بعد تشغيل واحد إن كان الـ workflow مفيداً |
| تحسين release communication | [03 - Release Notes Pilot](../../examples/runnable/03-release-notes-pilot/README.md) | release notes سهلة المراجعة والمقارنة، لذلك تصلح جداً كـ pilot |
| معالجة المستندات والصوت بسرعة أكبر | [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) | ملفات PDF وtranscripts تصبح فوضوية بسرعة، لذلك حتى summary جيد واحد يوفر وقتاً من اليوم الأول |
| اكتشاف drift في تكلفة AI مبكراً | [10 - Model Cost Command Center](../../examples/runnable/10-model-cost-command-center/README.md) | إذا كان فريقك يدفع فعلاً مقابل models، فمشكلة cost drift مفهومة مباشرة |
| تحويل search drift إلى فرص content | [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md) | هذا marketing use case قوي لأن ranking drift وrefresh opportunities يظهران كعمل واضح لا كحديث استراتيجي مبهم |
| إعطاء leadership صورة أسبوعية من دون مطاردة updates | [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | يحول updates المبعثرة إلى executive summary مرتبة |

## حالات استخدام OpenClaw حسب الفريق

إذا كان بحثك حرفياً هو `openclaw usecases`، فابدأ من هنا. هذه ليست مجموعة prompts عشوائية، بل workflows مرتبطة بالعمل المتكرر الذي تقوم به الفرق أصلاً.

| الفريق | أمثلة قوية | ما الذي يمكن أتمتته |
| --- | --- | --- |
| Engineering | [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md), [07 - CI Flake Doctor](../../examples/runnable/07-ci-flake-doctor/README.md), [37 - Repo Hygiene Janitor](../../examples/runnable/37-repo-hygiene-janitor/README.md), [84 - Secrets Leak Triage Digest](../../examples/runnable/84-secrets-leak-triage-digest/README.md) | وضوح حالة PR، ومراجعة flaky tests، وتنظيف repo، وsecurity triage |
| Support وinbox ops | [02 - SLA Guardian](../../examples/runnable/02-sla-guardian/README.md), [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md), [54 - VIP Inbox Watchdog](../../examples/runnable/54-vip-inbox-watchdog/README.md), [99 - Internal FAQ Router](../../examples/runnable/99-internal-faq-router/README.md) | escalation digests، وتنظيف الطوابير، وVIP follow-up، وrouting للطلبات الداخلية |
| Research وcontent | [14 - Weekly Research Digest](../../examples/runnable/14-weekly-research-digest/README.md), [63 - Competitor Launch Explainer](../../examples/runnable/63-competitor-launch-explainer/README.md), [65 - Webinar Repurposing Desk](../../examples/runnable/65-webinar-repurposing-desk/README.md), [69 - Market FAQ Synthesizer](../../examples/runnable/69-market-faq-synthesizer/README.md) | monitoring، ومتابعة المنافسين، وrepurposing، وتوليد FAQ |
| Marketing وSEO | [05 - Content Idea Miner](../../examples/runnable/05-content-idea-miner/README.md), [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md), [68 - Social Proof Collector](../../examples/runnable/68-social-proof-collector/README.md) | اكتشاف المواضيع، ومراقبة search drift، وجمع proof |
| Revenue وcustomer success | [43 - Renewal Risk Explainer](../../examples/runnable/43-renewal-risk-explainer/README.md), [48 - Meeting Follow-up Enforcer](../../examples/runnable/48-meeting-follow-up-enforcer/README.md), [93 - Customer Renewal Meeting Prep](../../examples/runnable/93-customer-renewal-meeting-prep/README.md) | renewal risk، وfollow-up ownership، والتحضير للاجتماعات |
| People وrecruiting | [72 - Hiring Pipeline Stall Radar](../../examples/runnable/72-hiring-pipeline-stall-radar/README.md), [73 - Onboarding Checklist Concierge](../../examples/runnable/73-onboarding-checklist-concierge/README.md), [75 - Interview Prep Brief](../../examples/runnable/75-interview-prep-brief/README.md) | اختناقات التوظيف، وonboarding flow، وinterview context |
| Finance وlegal | [78 - Contract Redline Summary Board](../../examples/runnable/78-contract-redline-summary-board/README.md), [80 - Overdue PO Follow-up Queue](../../examples/runnable/80-overdue-po-follow-up-queue/README.md), [82 - Board Packet Evidence Collector](../../examples/runnable/82-board-packet-evidence-collector/README.md) | redline review، وprocurement follow-up، والتحضير للـ board |
| Leadership وoperations | [30 - Founder Daily Control Room](../../examples/runnable/30-founder-daily-control-room/README.md), [62 - Daily Operating Memo](../../examples/runnable/62-daily-operating-memo/README.md), [94 - Product Launch Readiness Board](../../examples/runnable/94-product-launch-readiness-board/README.md), [96 - Executive Weekly Wins Digest](../../examples/runnable/96-executive-weekly-wins-digest/README.md) | الاصطفاف اليومي، وoperating cadence، وlaunch readiness، والتقارير الأسبوعية |

## Top 10 Quick Wins

راجعت الكتالوج الكامل الذي يحتوي على 300 مثال قبل أن أضع هذه القائمة. هذه هي العناصر التي سأعطيها لشخص ما أولاً، لأن قيمتها تظهر بسرعة، كما أن جودة الـ output فيها سهلة التقييم.

| ID | المثال | لماذا يُعد quick win | Links |
| --- | --- | --- | --- |
| 01 | PR Radar | لأن حالات PR واضحة أصلاً، فمن السهل أن ترى سريعاً هل ranking مفيد وهل سيستخدمه الفريق فعلاً | [Guide](../../examples/runnable/01-pr-radar/README.md) · [Sample](../../examples/runnable/01-pr-radar/sample-output.md) |
| 03 | Release Notes Pilot | release notes سهلة review والمشاركة، وهي طريقة جيدة للحصول على buy-in من دون لمس شيء حساس | [Guide](../../examples/runnable/03-release-notes-pilot/README.md) · [Sample](../../examples/runnable/03-release-notes-pilot/sample-output.md) |
| 06 | PDF Ops Desk | ملفات PDF وtranscripts تتعقد بسرعة، لذلك حتى summary جيد واحد يعطي وفراً في الوقت من اليوم الأول | [Guide](../../examples/runnable/06-pdf-ops-desk/README.md) · [Sample](../../examples/runnable/06-pdf-ops-desk/sample-output.md) |
| 10 | Model Cost Command Center | إذا كان الفريق يدفع بالفعل مقابل models، فـ cost drift من أسهل المشكلات شرحاً وترتيباً من حيث الأولوية | [Guide](../../examples/runnable/10-model-cost-command-center/README.md) · [Sample](../../examples/runnable/10-model-cost-command-center/sample-output.md) |
| 11 | Inbox to Action | inbox triage حاجة مشتركة تقريباً لدى الجميع، وهذا workflow يحول عبء البريد المبعثر إلى task list قابلة للتنفيذ | [Guide](../../examples/runnable/11-inbox-to-action/README.md) · [Sample](../../examples/runnable/11-inbox-to-action/sample-output.md) |
| 54 | VIP Inbox Watchdog | يمتلك نفس جاذبية inbox triage، لكنه أضيق وأكثر حساسية لأنه يركز على threads التي لا يجوز تفويتها | [Guide](../../examples/runnable/54-vip-inbox-watchdog/README.md) · [Sample](../../examples/runnable/54-vip-inbox-watchdog/sample-output.md) |
| 66 | SEO Drift Watcher | workflow قوي في marketing لأن ranking drift وrefresh opportunities تظهر كعمل ملموس لا كحديث استراتيجي عام | [Guide](../../examples/runnable/66-seo-drift-watcher/README.md) · [Sample](../../examples/runnable/66-seo-drift-watcher/sample-output.md) |
| 84 | Secrets Leak Triage Digest | تستطيع فرق security تقييمه بسرعة لأنه يقدم evidence، لا لغة مجردة عن المخاطر | [Guide](../../examples/runnable/84-secrets-leak-triage-digest/README.md) · [Sample](../../examples/runnable/84-secrets-leak-triage-digest/sample-output.md) |
| 96 | Executive Weekly Wins Digest | إعداد الملخصات الأسبوعية يدوياً متعب، لذلك يظهر أثر توفير الوقت بسرعة كبيرة | [Guide](../../examples/runnable/96-executive-weekly-wins-digest/README.md) · [Sample](../../examples/runnable/96-executive-weekly-wins-digest/sample-output.md) |
| 99 | Internal FAQ Router | الأسئلة الداخلية تتكرر باستمرار، لذلك فإن routing وإعادة استخدام الإجابات يعطيان قيمة بسرعة | [Guide](../../examples/runnable/99-internal-faq-router/README.md) · [Sample](../../examples/runnable/99-internal-faq-router/sample-output.md) |

## معيار جودة الأمثلة

كل starter يدخل هذا الـ repo يجب أن يتضمن على الأقل:

- تعريفاً واضحاً للمشكلة ولـ scope
- Skill stack وأوامر التثبيت
- خطوات setup وprompt files
- sample output (`sample-output.md`)
- smoke test وKPI
- security notes
- failure modes
- rollback guidance

البنية المعتادة لأي starter:

```text
examples/runnable/<id>-<slug>/
  README.md
  prompts/
  scripts/
  sample-output.md
```

## بداية سريعة

1. اختر المثال الأقرب إلى مشكلة حقيقية تتكرر كل أسبوع، لا المثال الذي يملك العنوان الأكثر لفتاً للنظر.
2. ثبّت skills المطلوبة باستخدام `openclaw skills verify <skill-slug> && openclaw skills install <skill-slug>`.
3. شغّل `scripts/check_prereqs.sh` الخاص بذلك المثال.
4. راجع `sample-output.md` أولاً حتى تعرف كيف يبدو output الجيد.
5. طبّق الـ prompt وcron setup من ذلك المثال.
6. ابدأ بـ scope ضيق، وdraft-only delivery، ومراجعة بشرية قبل التوسّع.

## Runnable starters (300 بالمجموع)

يحتوي هذا الـ repo حالياً على 300 OpenClaw starter packs قابلة للتشغيل، مجمّعة بحسب نوع العمل الذي تساعد الفرق على إنجازه.

| النطاق | التركيز | ملاحظات |
| --- | --- | --- |
| 01-30 | Foundation set | المجموعة الأصلية من starters عبر engineering وsupport وresearch وfounder workflows. |
| 31-42 | Engineering quality وrelease operations | حلقات حول dependencies وCI وownership وrelease وhotfix والتحكم في سلوك models. |
| 43-52 | Revenue وrenewals وpipeline control | renewal risk، وإشارات التوسّع، وtrials، وcollections، وpartner motion. |
| 53-62 | Support وinbox وoperator workflows | bug intake، واهتمام VIP، وcalendar prep، وhandoffs، وoperating memos. |
| 63-70 | Research وcontent وmarket signals | competitive intelligence، وquote mining، وwebinar repurposing، وSEO، وrequest routing. |
| 71-76 | People وrecruiting وonboarding | candidate briefs، وstall tracking، وonboarding، وpolicy، وsource quality. |
| 77-82 | Finance وprocurement وboard prep | renewals، وredlines، وprocurement، وPO follow-up، وexpense exceptions، وboard evidence. |
| 83-101 | Security وIT وgovernance وinternal operations | access review، وsecrets، وaudits، وexceptions، وIT intake، وasset return، وmeeting hygiene. |
| 102-126 | Data, metrics, and knowledge operations |
| 127-151 | Customer success, sales, and revenue execution |
| 152-176 | Product, marketing, and content operations |
| 177-201 | Engineering, platform, and reliability operations |
| 202-226 | Personal admin, home, and learning workflows |
| 227-251 | Collaboration, communications, and community workflows |
| 252-276 | Governance, security, and IT operations |
| 277-300 | Education, creative, and media workflows |

للاطلاع على القائمة الكاملة انظر [examples/catalog.md](../../examples/catalog.md).

## لمن هذا الـ repo

- للفرق التي تريد تقييم حالات استخدام OpenClaw حقيقية قبل بناء workflows خاصة بها
- لمستخدمي OpenClaw الذين يريدون أمثلة قابلة للتشغيل بدلاً من prompts مبهمة
- للـ founders والـ operators والـ ICs الذين يريدون إطلاق automation واحدة عالية الأثر أولاً
- لكل من يريد فحص جودة الـ output قبل ربط production systems

## ملاحظات مهمة

- هذه starter contracts مستندة إلى research وليست شهادة من maintainer؛ تحقّق من كل workflow في بيئتك الخاصة.
- هذا repo يُدار بشكل مستقل، وليس برنامجاً رسمياً من OpenClaw.
- Feedback وfixes والأمثلة الأفضل مرحّب بها دائماً.
- هذا الـ repo لا يقبل workflows تخص crypto أو trading.
- هذا الـ repo لا يقبل custom skills غير المنشورة عبر ClawHub.
- ClawHub هو registry عام لـ OpenClaw skills، لذلك افحص third-party skills قبل تفعيلها.
- اعمل دائماً وفق least privilege، وdelivery targets موثوقة، ومراجعة بشرية للإجراءات الصادرة، ومسارات rollback واضحة.

## OpenClaw FAQ

### ما نوع openclaw usecases الموجودة في هذا الـ repo؟

يغطي هذا الـ repo مجالات engineering وsupport وresearch وcontent وrevenue وpeople ops وfinance وsecurity وinternal operations. إذا كنت تبحث عن `openclaw usecases` ذات قيمة عملية واضحة، فابدأ بجدول quick wins أو بقسم البدء حسب الهدف أعلاه.

### هل هذه OpenClaw examples قابلة للتشغيل فعلاً؟

نعم. يُفترض أن يتضمن كل starter قابل للتشغيل scripts وprompts وsetup steps وsample output. ومع ذلك يجب عليك التحقق من كل workflow داخل بيئتك أنت قبل استخدامه في production.

### لماذا ClawHub skills فقط؟

لأن قابلية إعادة الإنتاج مهمة. حصر الـ repo في ClawHub skills عامة يجعل هذه OpenClaw examples أسهل في الفحص والتثبيت والمقارنة والثقة.

### هل هذا repository رسمي لـ OpenClaw؟

لا. هذه مجموعة مستقلة من أمثلة OpenClaw يديرها maintainer لمساعدة الناس على الوصول إلى OpenClaw workflows مفيدة بسرعة أكبر.

### بأي مثال يجب أن أبدأ أولاً؟

إذا كنت تريد أول تشغيل آمن نسبياً، فابدأ بحسب فريقك مع [01 - PR Radar](../../examples/runnable/01-pr-radar/README.md) أو [06 - PDF Ops Desk](../../examples/runnable/06-pdf-ops-desk/README.md) أو [11 - Inbox to Action](../../examples/runnable/11-inbox-to-action/README.md) أو [66 - SEO Drift Watcher](../../examples/runnable/66-seo-drift-watcher/README.md).

## Contributing

إذا كنت تريد إضافة starter جديد أو تحسين واحد موجود، فاقرأ [CONTRIBUTING.md](../../CONTRIBUTING.md). المعيار بسيط: أن يكون قابلاً لإعادة الإنتاج، وصادقاً، وآمناً افتراضياً، ويُظهر قيمة قابلة للقياس.
