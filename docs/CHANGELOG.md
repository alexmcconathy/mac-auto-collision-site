# Changelog

Newest first. One entry per shipped phase of `docs/ROADMAP.md`. Every entry was verified with `npm test` and a local render before it was pushed (a push is a deploy).

## 1.2.0 — 2026-09-17 — Phase 1: findability
- `robots.txt`, `sitemap.xml`, styled `404.html`.
- Social preview: `og:image` / Twitter card meta and a generated 1200×630 `social-card.png`, so a shared link shows a proper card in Facebook, Messages and Teams.
- FAQ section (nine questions), editable from `/admin/` → "FAQ", rendered with `FAQPage` structured data.
- Structured data now carries the social image and `sameAs` links to the Yelp and BBB profiles.
- `favicon.svg` as a real file (was inline).

**How to test:** open the site, click **FAQ** in the menu, expand a question. Paste the site link into a text message or Facebook post and check the preview card shows the orange "Collision repair done right" image. `/robots.txt` and `/sitemap.xml` load.

## 1.1.0 — 2026-09-17 — Phase 0: foundations
- `npm test` gate (`test.js`, no dependencies): content files parse and have the fields the page expects, no stale address/phone, every tap-to-call link dials the shop, structured data parses, every referenced local file exists, admin config points at the right repo.
- `docs/ROADMAP.md` and this changelog.

**How to test:** in the site folder run `npm test`; expect "All checks passed."

## 1.0.0 — 2026-09-17 — Site live
- Single-page site, editable content via Sveltia CMS at `/admin/`, hosted on GitHub Pages at https://www.macautoandcollision.com with HTTPS enforced.
