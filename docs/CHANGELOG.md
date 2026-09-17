# Changelog

Newest first. One entry per shipped phase of `docs/ROADMAP.md`. Every entry was verified with `npm test` and a local render before it was pushed (a push is a deploy).

## 1.5.0 — 2026-09-17 — Phase 4: operations
- GitHub Actions workflow runs `npm test` on every push and pull request. A red X on the repo's Actions tab is the early warning that an admin save produced a broken content file.
- README: FAQ / hero photo / review link / service areas editing notes, CI note, yearly September checklist.
- Roadmap statuses updated: Phases 0–4 shipped; Phase 5 is the shop's list.

**How to test:** on github.com open the repo → Actions; the latest "Site checks" run is green.

## 1.4.0 — 2026-09-17 — Phase 3: accessibility & polish
- Color contrast: small orange text (section labels), the orange buttons, the trust bar and the announcement now use darker oranges that pass WCAG AA (4.9:1 on white). The bright orange stays for the big headline accent and icons.
- Visible keyboard focus rings on links, buttons and FAQ items.
- Print stylesheet: printing the page gives a clean one-pager with the phone, address, services and hours (no nav, form or map).
- Real icon files: favicon.png, apple-touch-icon.png (home-screen icon on iPhone/Android), icon-512.png and site.webmanifest.
- Hero photo overlay darkened slightly so headline text stays readable over any shop photo.
- All text files normalized to Unix line endings.

**How to test:** Tab through the page with the keyboard; every link and button shows an orange outline. Print preview (Ctrl+P) shows a clean page. On a phone, "Add to Home Screen" shows the orange car icon.

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
