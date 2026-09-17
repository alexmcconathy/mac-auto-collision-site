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

## Go live
Already done: the folder is a git repo, pushed to GitHub at `alexmcconathy/mac-auto-collision-site`, and the admin page is configured to edit that repo.

Left to do:
1. **Make the repo public and turn on GitHub Pages** (free plans only serve Pages from public repos; the site has no secrets in it):
   ```
   gh repo edit alexmcconathy/mac-auto-collision-site --visibility public --accept-visibility-change-consequences
   gh api repos/alexmcconathy/mac-auto-collision-site/pages -X POST -f "source[branch]=main" -f "source[path]=/"
   ```
   About a minute later the site is live at https://alexmcconathy.github.io/mac-auto-collision-site/
2. **Buy the domain.** Recommended `macautoandcollision.com`. Cheapest at Cloudflare Registrar (dash.cloudflare.com → Domain Registration) or Porkbun.
3. **Point the domain at GitHub Pages.** At the registrar's DNS page add:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `alexmcconathy.github.io`
   (If the DNS is at Cloudflare, set the proxy to "DNS only" for these records.)
4. **Tell GitHub the domain** (also creates the `CNAME` file in the repo):
   ```
   gh api repos/alexmcconathy/mac-auto-collision-site/pages -X PUT -f cname=www.macautoandcollision.com -F https_enforced=true
   ```
   The `https_enforced` step can take up to a day while GitHub issues the certificate. Retry it if it errors the first time.

## Adding photos and editing content (day to day)
Go to `https://<your-domain>/admin/` (or the github.io address above followed by `admin/`).

**First time, each editor:**
1. Needs a free GitHub account, added as a collaborator on the repo: github.com → repo → Settings → Collaborators → Add people (or ask Alex).
2. On the admin page click **Sign in with Token**, follow the link to create a GitHub personal access token (fine-grained, repository `mac-auto-collision-site`, permission *Contents: Read and write*), paste it in. The browser remembers it.

**Then:**
- **Photo Gallery** → *Photos* → *Add* → choose "Before & After" and upload both photos, or "Our Work" / "The Shop" and upload one. Add a caption like "2019 Silverado, driver-side collision repair". Click **Save**. The site updates within a couple of minutes.
- **Contact, Hours & About** → change hours, the about text, or put a message in *Announcement banner* (holidays, moving notices). **Save**.
- **Customer Reviews** → add a name and the review text. **Save**.

Every save is a commit in the GitHub repo, so nothing is ever lost and any change can be undone.

Optional upgrade later: one-click "Sign in with GitHub" instead of a token, by deploying the free [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) on Cloudflare Workers and adding its URL as `base_url` under `backend` in `admin/config.yml`.

## Estimate form
The form opens the visitor's email app with the request pre-filled, addressed to the email in *Contact, Hours & About* (currently macautocollision@earthlink.net). If you want requests delivered without relying on the visitor's email app, sign up for a form service (Formspree, free tier is enough) and paste its endpoint URL into `FORM_ENDPOINT` near the bottom of `index.html`. The form then posts directly and shows a thank-you message.

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
