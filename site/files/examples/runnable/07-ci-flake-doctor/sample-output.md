# Sample Output - CI Flake Doctor

Run metadata:
- Date: 2026-02-18
- Trigger: cron
- Session mode: isolated
- Delivery channel: slack

## Digest

- Failed runs analyzed: 73.
- Recurring signatures identified: 8.
- Likely flaky tests: 5.
- Highest rerun cost cluster: `tests/ui/search.spec.ts`.

## Suggested Actions

- Open remediation task for top 3 flaky signatures.
- Add retry guard to unstable UI suite temporarily.
- Capture deterministic repro for top flaky cluster.

## KPI Snapshot

- Flaky failures/week: 18 (down from 27)
- CI rerun rate: 14%
- Mean time to flake resolution: 3.2 days
