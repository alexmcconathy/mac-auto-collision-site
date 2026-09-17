# Changelog

Newest first. One entry per shipped phase of `docs/ROADMAP.md`. Every entry was verified with `npm test` and a local render before it was pushed (a push is a deploy).

## 1.3.0 — 2026-09-17 — Phase 2: conversion & trust
- Hero photo slot: set *Hero photo* in `/admin/` → Contact, Hours & About and the top of the site shows the shop behind a dark overlay. Empty = the current dark background.
- "Review us on Google" buttons (About section and under reviews), hidden until *Google review link* is filled in.
- Service areas are editable (*Service areas* list) and drive the contact intro and footer text. Default adds Pleasant Grove.
- "Easy to find" line with a Get directions link in the hero card.
- Estimate form gained "Best time to call you"; it is included in the email.

**How to test:** in `/admin/` → Contact, Hours & About, upload a wide shop photo as Hero photo and Save; the top of the site shows it. Paste a Google review link and Save; an orange "Review us on Google" button appears in the About section. Fill the estimate form; the pre-filled email includes the best time to call.

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
