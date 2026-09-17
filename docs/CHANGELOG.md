# Changelog

Newest first. One entry per shipped phase of `docs/ROADMAP.md`. Every entry was verified with `npm test` and a local render before it was pushed (a push is a deploy).

## 1.7.2 — 2026-09-17 — Background photo scaling
- A tall or square background photo used to be blown up to fill the wide banner, so only a zoomed slice showed. Now the site checks the photo's shape: wide photos still fill the banner; tall or square ones are shown whole, centered, over a blurred copy of themselves that fills the rest. On phones the photo fills the (tall) hero as before.
- Tip for the shop: the sharper the original, the better. A photo at least 1600 px wide is ideal; the current one is 371 px and will look soft on large screens.

**How to test:** with a square photo set as Background photo, the whole car is visible in the middle of the banner with a soft blurred version behind it. Upload a wide landscape photo and it fills edge to edge.

## 1.7.1 — 2026-09-17 — Lighter photo fade, admin control of the background photo
- The tint over the top photo is lighter, so more of the picture shows. Headline and text keep a soft shadow for readability; the checklist card is a little more opaque.
- Admin → Contact, Hours & About: the upload field is now called **Background photo**, and a new **Background photo fade** choice (Light, Medium, Dark) sets the tint. Light is the default.

**How to test:** open the site; the car photo is clearly visible behind the headline. In /admin/ change the fade to Dark and Save; two minutes later the photo is much darker. Upload a different photo; the top of the site changes.

## 1.7.0 — 2026-09-17 — New look: Garage Red palette, Workshop layout
- Colors: black page (#141414), graphite cards (#1B1B1B), red accent (#D7261E), silver text. Chosen by the shop from five mockups.
- Layout unchanged: headline left, accident checklist right, same sections. The *Hero photo* from the admin page now shows as a faded full-width picture behind the headline, darkest on the left so the text stays readable.
- Icons, favicon, social preview card and the 404 page re-colored to match. All text/background pairs checked at 5:1 or better.
- Hero photo defaults to the Black Ford until a storefront shot is uploaded.

**How to test:** open the site; dark page, red buttons, the shop photo faded behind the headline with the checklist card on the right. Shrink to phone width: nothing runs off the right edge. Share the link in a text message: the preview card is black and red.

## 1.6.1 — 2026-09-17 — Header overlap fix, quick photo upload
- Header: between about 900 and 1140 px wide (small laptop windows) the seven menu links, the phone button and the logo no longer fit, so the logo wrapped onto three lines and overlapped the bar above. The menu now collapses to the ☰ button below 1140 px and the logo never wraps. Checked at 340, 950, 1140, 1141 and 1280 px.
- Gallery: new **Quick photos** field in `/admin/` → Photo Gallery. Select or drag in many photos at once; they appear in the gallery as plain photos. The structured list stays for captions and Before & After pairs.

**How to test:** shrink the browser window slowly from wide to narrow; the menu turns into ☰ before anything overlaps. In `/admin/` → Photo Gallery → Quick photos, pick three photos at once, Save; they appear in the gallery.

## 1.6.0 — 2026-09-17 — Form delivery, Google review link, one-click login prep
- Estimate form delivery is now a field in `/admin/` → Contact, Hours & About (*Estimate form delivery address*). Paste a Formspree form URL and the form posts directly and shows a thank-you; leave it empty and the email-app fallback stays. Only Formspree/Basin/Getform/FormSubmit URLs are accepted. Hidden honeypot field against spam bots. Subject line now includes the vehicle and the name; the visitor's email is set as reply-to.
- Google review link set from the shop's Google listing (place id ChIJj00a7NPgiIgRLxuwtT-dvrw), so the "Review us on Google" buttons are live. The Google Maps listing is added to the structured data.
- One-click login: `docs/ONE_CLICK_LOGIN.md` step-by-step; `admin/config.yml` carries the two lines as comments; the site test accepts either token-only or authenticator setups.

**How to test:** "Review us on Google" button in the About section opens Google's review box for the shop. Admin → Contact, Hours & About shows the *Estimate form delivery address* field. With a Formspree URL saved, submitting the form shows "Thanks, … We got your request".

## 1.5.1 — 2026-09-17 — Admin sign-in fix
- The admin page showed a "Sign In with GitHub" button that dead-ended on a Netlify "Not Found" page (that method needs an authenticator service this site does not use). The page now shows only **Sign In Using Access Token**. A test guards it.

**How to test:** open /admin/; there is a single sign-in button, "Sign In Using Access Token".

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
