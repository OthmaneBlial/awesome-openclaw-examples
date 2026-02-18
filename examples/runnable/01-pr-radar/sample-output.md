# Sample Output - PR Radar

Run metadata:
- Date: 2026-02-18
- Trigger: cron
- Session mode: isolated
- Delivery channel: slack

## Digest

- Immediate attention: 4 PRs blocked on failing checks or missing review.
- Stale PRs (>48h): 6.
- Merge-ready PRs: 3.
- Main bottleneck: frontend e2e failure in CI on two high-impact PRs.

## Suggested Actions

- Assign reviewers for PR #1842 and PR #1849 by EOD.
- Re-run flaky workflow `ui-e2e` with trace capture.
- Merge PR #1837 after docs label confirmation.

## KPI Snapshot

- Time-to-first-review: 11h (target < 8h)
- PRs stale >48h: 6 (down from 9)
- Merge lead time: 2.6 days
