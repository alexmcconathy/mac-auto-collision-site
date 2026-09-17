# Changelog

Newest first. One entry per shipped phase of `docs/ROADMAP.md`. Every entry was verified with `npm test` and a local render before it was pushed (a push is a deploy).

## 1.1.0 — 2026-09-17 — Phase 0: foundations
- `npm test` gate (`test.js`, no dependencies): content files parse and have the fields the page expects, no stale address/phone, every tap-to-call link dials the shop, structured data parses, every referenced local file exists, admin config points at the right repo.
- `docs/ROADMAP.md` and this changelog.

**How to test:** in the site folder run `npm test`; expect "All checks passed."

## 1.0.0 — 2026-09-17 — Site live
- Single-page site, editable content via Sveltia CMS at `/admin/`, hosted on GitHub Pages at https://www.macautoandcollision.com with HTTPS enforced.
