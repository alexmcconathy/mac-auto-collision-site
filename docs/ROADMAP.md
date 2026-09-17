# Mac Auto & Collision website — improvement roadmap ✅ | ✅ | ✅ | ✅ | ✅ |

Written 2026-09-17, the day the site went live at https://www.macautoandcollision.com.
Each phase is small enough to ship on its own. Every push to `main` goes live within two minutes, so each phase is verified locally (`npm test` + a rendered check) before it is pushed.

Status key: ✅ shipped · 🔧 in progress · ⏳ queued (needs the shop) · ⬜ not started

Phases 0–4 shipped 2026-09-17 (v1.1.0–v1.5.0, see CHANGELOG). Phase 5 is the shop's list. Phase 6 is unscheduled.

| # | Phase | Goal | Status |
|---|-------|------|--------|
| 0 | Foundations | A test gate (`npm test`), a changelog, this roadmap | ⬜ |
| 1 | Findability | Get found on Google for "collision repair Bessemer": sitemap, robots, social preview image, FAQ with structured data, 404 page | ⬜ |
| 2 | Conversion & trust | Hero photo slot, Google review button, directions link, service-area list, all editable from /admin | ⬜ |
| 3 | Accessibility & polish | Color contrast to WCAG AA, visible keyboard focus, print view, icons for phones/home screens | ⬜ |
| 4 | Operations | CI check on every push, README/manual updates, yearly checklist | ⬜ |
| 5 | Owner tasks | Photos, reviews, Google Business Profile, directory cleanup, .net forwarding, form service, hours | ⏳ |
| 6 | Later ideas | Spanish page, online appointment request, financing/insurance partner logos, blog posts for SEO | ⬜ |

## Phase 0 — Foundations
- `package.json` with `npm test` → `test.js` (no dependencies). Checks: content JSON parses and has required fields; `index.html` has every section id, no stale address/phone, valid JSON-LD; every local file the page references exists; `admin/config.yml` names the right repo.
- `docs/CHANGELOG.md`: one entry per shipped phase, newest first.
- This roadmap.

## Phase 1 — Findability (local SEO)
- `robots.txt` (allow all, point to sitemap) and `sitemap.xml`.
- `404.html` in the site's style, with the phone number and a link home.
- Social preview: `og:image` / Twitter card meta + a generated 1200×630 `social-card.png` so a shared link on Facebook or text messages shows a proper card.
- FAQ section, editable from /admin (`content/faq.json`), rendered with `FAQPage` structured data so Google can show the questions under the listing.
- Extra structured data: `sameAs` links (Yelp, BBB), `areaServed` already present.
- Not possible from here: Google Business Profile and Search Console verification need the shop's Google account (Phase 5).

## Phase 2 — Conversion & trust
- Hero background photo: optional `hero_image` in settings; when set, the hero shows the shop photo behind a dark overlay. Until then the current gradient stays.
- "Review us on Google" button: optional `google_review_url` in settings; hidden until set.
- "Get directions" link in the hero card and mobile bar.
- Service-area list editable (`service_areas` in settings) and rendered in the footer + structured data.
- Estimate form: add a "best time to call" field; keep the mailto fallback (a form service needs the shop's sign-up, Phase 5).

## Phase 3 — Accessibility & polish
- Fix orange-on-white small text (eyebrows, links) to pass WCAG AA 4.5:1.
- Visible focus outlines for keyboard users on buttons and links.
- Print stylesheet (hide nav/map/form chrome, keep phone and address).
- `apple-touch-icon.png` and `favicon.png` so the site looks right when saved to a phone home screen; `site.webmanifest`.
- Reduced-motion already respected; confirm no horizontal scroll at 320px.

## Phase 4 — Operations
- GitHub Actions workflow: run `npm test` on every push and pull request (free on public repos). A red X on GitHub is the early warning if an admin-page save produces bad JSON.
- README and the Word manual updated with anything Phases 1–3 added.
- Yearly checklist (September): domain auto-renew and card on file, token expiry for editors, hours check, photo refresh.

## Phase 5 — Owner tasks (queued, need the shop)
- Take and upload the photos on `PHOTO_SHOT_LIST.md`; set the hero photo.
- Collect 3–5 customer reviews; add via /admin.
- Claim/update Google Business Profile (address, phone, hours, photos) and paste its review link into settings.
- Update BBB, Yellow Pages, Yahoo Local, Alignable, Manta with the new address and phone.
- Porkbun: forward macautoandcollision.net → https://www.macautoandcollision.com (301).
- Confirm opening hours (8:00 vs 9:00).
- Optional: Formspree endpoint for the estimate form; Sveltia authenticator for one-click login.

## Phase 6 — Later ideas (not scheduled)
- Spanish-language version of the page.
- Online appointment / drop-off request with date picker.
- Insurance partner and certification logos (only once the shop confirms which apply).
- Short "what happened / what we did" posts per repair for search traffic.
