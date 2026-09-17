# Mac Auto & Collision — website

Static site, no build step. `index.html` is the page. Content that changes (hours, about text, announcements, gallery photos, customer reviews) lives in `content/*.json` and is edited through the admin page at `/admin/`.

```
index.html              the site
content/settings.json   phone, email, hours, announcement, about text
content/gallery.json    photo gallery (single photos and before/after pairs)
content/testimonials.json
images/uploads/         photos uploaded through /admin land here
admin/                  Sveltia CMS admin page + its config
serve.js                local preview only
PHOTO_SHOT_LIST.md      what photos to take
```

## Cost
| Item | Provider | Cost |
|------|----------|------|
| Code + hosting | GitHub (repo `alexmcconathy/mac-auto-collision-site`, GitHub Pages) | $0 |
| Admin / photo uploads | Sveltia CMS, logs in with GitHub | $0 |
| Domain | Cloudflare Registrar (sold at cost) or Porkbun | about $11/year |
| HTTPS certificate | GitHub Pages, automatic | $0 |

Total: about **$11 a year**, all of it the domain.

## Preview locally
```
node serve.js
```
then open http://localhost:5199.

## Live
- Site: https://www.macautoandcollision.com (GitHub Pages, repo public, custom domain attached, certificate issued 2026-09-17)
- Admin: https://www.macautoandcollision.com/admin/
- Bare `macautoandcollision.com` redirects to `www`.
- `macautoandcollision.net` is also owned (Porkbun). Forward it to the .com at Porkbun: domain → Details → URL Forwarding → `https://www.macautoandcollision.com`, type Permanent (301).

If the domain ever needs to change: GitHub → repo → Settings → Pages → Custom domain, plus the `canonical`/JSON-LD `url` in `index.html` and `site_url`/`display_url` in `admin/config.yml`. DNS records for GitHub Pages are the four `A` records 185.199.108–111.153 on the bare domain and a `CNAME` `www` → `alexmcconathy.github.io`.

## Adding photos and editing content (day to day)
Go to https://www.macautoandcollision.com/admin/

**First time, each editor:**
1. Needs a free GitHub account, added as a collaborator on the repo: github.com → repo → Settings → Collaborators → Add people (or ask Alex).
2. On the admin page click **Sign In Using Access Token**, follow the link to create a GitHub personal access token (fine-grained, repository `mac-auto-collision-site`, permission *Contents: Read and write*), paste it in. The browser remembers it.

**Then:**
- **Photo Gallery** → *Photos* → *Add* → choose "Before & After" and upload both photos, or "Our Work" / "The Shop" and upload one. Add a caption like "2019 Silverado, driver-side collision repair". Click **Save**. The site updates within a couple of minutes.
- **Contact, Hours & About** → change hours, the about text, or put a message in *Announcement banner* (holidays, moving notices). **Save**.
- **Customer Reviews** → add a name and the review text. **Save**.
- **FAQ** → edit or add questions and answers. They show in the FAQ section and as structured data for Google. **Save**.
- **Contact, Hours & About** also holds: *Background photo* (a wide shop photo shown faded behind the headline; empty = plain black) and *Background photo fade* (Light, Medium or Dark tint), *Google review link* (from Google Business Profile → "Ask for reviews"; the "Review us on Google" buttons appear once it is set), and *Service areas* (the towns listed in the contact and footer text).

Every save is a commit in the GitHub repo, so nothing is ever lost and any change can be undone. GitHub also runs `npm test` on every save (Actions tab); a red X there means a content file is broken and the page may not read it.

## Design
Chosen by the shop on 2026-09-17 from five rendered mockups: black page (#141414), graphite cards (#1B1B1B), red accent (#D7261E), silver text; layout unchanged from launch. The look lives in the `/* ===== Theme` block at the end of the `<style>` in `index.html`; the rules above it are the original orange look, so a re-skin is a matter of editing that block. Mockup images: `C:\AMAC_REPO\Mac Auto design mockups\` (not in the repo).

**Message** (since v1.8.0, from the 17 Sept 2026 meeting): headline "We work for you, not your insurance company", on-site estimating band, "Who does your body shop work for?" comparison, AI-estimate and deductible bullets/FAQs. Deductible wording is deliberately limited to financing until the shop's agent or attorney confirms what else may be advertised. Headline and sub-headline can be overridden in admin → Contact, Hours & About.

**Rotating headlines** (v1.9.0): admin → Contact, Hours & About → *Rotating headlines* is a list of line 1 / line 2 (red) / sentence. The hero cycles through them every *Seconds between headlines* (default 7) with a fade, dots to jump, pause on hover, and no motion when the visitor prefers reduced motion. The first item is what search engines and the social card see.

**Yelp block** (v1.9.0): the Reviews section shows a Yelp card when *Yelp rating* is filled in (rating and count are typed in by the shop; there is no live API on a static site). *Yelp embedded reviews* takes Yelp review IDs (Yelp → a review → ⋯ → Embed review → the `data-review-id` value); up to three render through Yelp's official `widgets.js`. Update the rating/count whenever the Yelp page changes.

**Text Us buttons** appear only when *Text-message number* is filled in (the number must be able to receive SMS).

**Traffic monitoring**: admin → Contact, Hours & About → paste a *Cloudflare Web Analytics token* and/or a *Microsoft Clarity project ID*; the page loads the matching script only when a value is present and looks valid. Google Search Console needs a one-time HTML file in the repo root or a DNS TXT record at Porkbun (ask Alex).

**Background photo** (admin → Contact, Hours & About): shown faded behind the headline. Wide photos fill the banner; tall or square ones are shown whole over a blurred copy (decided automatically from the photo's shape). *Background photo fade* picks Light / Medium / Dark. Ask the shop for originals of 1600 px or wider; small files look soft.

## Roadmap, changelog and yearly checklist
- `docs/ROADMAP.md` — what is planned and what is waiting on the shop. `docs/CHANGELOG.md` — what shipped, with a "How to test" line per entry.
- **Every September** (domain renews 17 Sept): confirm Porkbun auto-renew is on and the card on file is current; ask editors to renew their GitHub tokens (they expire yearly); check the hours on the site; refresh a few gallery photos.

Optional upgrade later: one-click "Sign in with GitHub" instead of a token, by deploying the free [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) on Cloudflare Workers and adding its URL as `base_url` under `backend` in `admin/config.yml`.

## Estimate form
Two delivery modes, chosen by the *Estimate form delivery address* field in `/admin/` → Contact, Hours & About:
- **Empty (default):** the form opens the visitor's email app with the request pre-filled, addressed to the shop email. Works with no account, but depends on the visitor having email set up.
- **Formspree URL filled in:** the form posts straight to Formspree, which emails the request to the shop and shows the visitor a thank-you. Free tier is 50 submissions a month, plenty for a body shop. Setup is in `docs/OWNER_ACTION_ITEMS.md` (item 10). A hidden honeypot field drops spam bots.

## One-click admin login
Optional. Replaces the token paste with a "Sign in with GitHub" button, using the free Sveltia authenticator on Cloudflare Workers. Step-by-step in `docs/ONE_CLICK_LOGIN.md`; the config lines are already in `admin/config.yml` as comments.

## Domain notes (checked against the registries on 2026-09-16)
Taken:
- `macautocollision.com` — registered 2026-07-30 through a Japanese reseller (Onamae.com), parked on Cloudflare. Looks like a squatter; it may be for sale.
- `macautocollision.net` — registered 2026-04-21 at GoDaddy for 10 years. Worth checking whether someone at the shop already owns this.
- `macautobody.com`, `macbodyshop.com`

Available:
- **`macautoandcollision.com`** (recommended: the full business name)
- `macautocollisioninc.com`, `macautocollisionrepair.com`, `macautocollisionbessemer.com`
- `maccollision.com`, `maccollisionrepair.com` (short)
- `macautobessemer.com`, `macautoal.com`
- `bessemercollision.com`, `bessemerautobody.com` (good for search, less brandable)
- `macautocollision.co` / `.us` / `.repair` / `.auto` / `.shop`

If you pick a different name, change it in `index.html` (canonical link, JSON-LD `url`) and `admin/config.yml` (`site_url`, `display_url`).

## New address: directory cleanup
The shop is at **8716 Circle Dr, Bessemer, AL 35022**, phone **(205) 746-1847**. The site, the map and the search-engine data use these, and the announcement banner says "We have moved" (clear it in the admin page whenever you like).

Online directories still show the old Brooklane Dr address and the old (205) 491-2611 number and will send customers to the wrong place. Update or claim these:
- Google Business Profile (most important: it drives the map pin in search)
- BBB profile, Yellow Pages, Yahoo Local, Alignable, Manta
- Yelp is already correct.

## Things still to confirm
- **Hours.** Directories disagree (8:00 vs 9:00 open). Site says 8:00–5:00. Change it in the admin page.
- **Map pin.** The map searches the street address. Verify it lands on the shop.
- **Google Business Profile.** Claim or update it and link it from the About section when ready.
