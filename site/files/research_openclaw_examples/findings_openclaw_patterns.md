# Findings: OpenClaw patterns for the example expansion

Research date: 2026-08-30

## 1. OpenClaw is a capability stack, not only a prompt runner

Official docs distinguish tools, skills, and plugins: tools expose callable actions, skills provide repeatable operating instructions, and plugins add runtime capabilities such as channels, providers, hooks, and packaged skills. That means each example should name the capability surface it assumes and avoid implying that a skill alone creates a new integration.

Source: https://docs.openclaw.ai/tools

## 2. Skills need explicit trust and scope

The official skills guide documents workspace installation, skill allowlists, dependency gating, and `openclaw skills verify`. It also says third-party skills should be treated as untrusted code, secrets should stay out of prompts and logs, and allowlists are not a host-shell authorization boundary. Example packs should therefore include a narrow scope, least-privilege setup, trust review, and an explicit human gate for writes or outbound communication.

Source: https://github.com/openclaw/openclaw/blob/main/docs/tools/skills.md

## 3. Recurring work has multiple execution shapes

OpenClaw documents automations/cron for scheduled work, standing orders for durable authority and boundaries, background tasks for execution records, and Task Flow for multi-step orchestration. A simple starter should stay a single isolated scheduled run; multi-step or side-effecting workflows should document approvals and use Task Flow or Lobster only when that complexity is justified.

Sources:
- https://docs.openclaw.ai/automation/standing-orders
- https://docs.openclaw.ai/automation/tasks
- https://docs.openclaw.ai/automation/taskflow
- https://docs.openclaw.ai/tools/lobster

## 4. Untrusted input is a threat surface

OpenClaw's security guidance explicitly treats emails, web results, browser pages, attachments, pasted logs, and documents as possible prompt-injection carriers. Safe examples should separate fact extraction from action, preserve source references, avoid secret exposure, restrict tools for reader workflows, and stop for approval before an external side effect.

Source: https://docs.openclaw.ai/security

## 5. The official showcase suggests broader, evidence-led coverage

The showcase includes coding loops, mobile and chat-native workflows, home automation, voice systems, devtools, knowledge/memory workflows, and domain-specific assistants. This supports expanding the catalog beyond the existing business-ops cluster into learning, personal admin, media, accessibility, governance, and operational review—while keeping the repository's no-crypto/no-trading boundary intact.

Source: https://docs.openclaw.ai/start/showcase

## 6. Revision rules applied to the new packs

- Prefer one clear source, one decision or artifact, and one measurable outcome per example.
- Use only the repository's already documented ClawHub skill names until a new skill is independently verified.
- Keep examples draft-only by default; never imply that `cron add` is permission to send, edit, delete, purchase, or approve.
- Include source links or stable identifiers, confidence/unknowns, and a bounded rollback path in every sample contract.
- Add multilingual README preservation to the acceptance checklist; the English README remains canonical for the full catalog while localized entry points stay linked and visible.
