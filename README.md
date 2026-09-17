# Mac Auto & Collision — website

Static site, no build step. `index.html` is the page. Content that changes (hours, about text, announcements, gallery photos, customer reviews) lives in `content/*.json` and is edited through the admin page at `/admin/`.

```
index.html              the site
content/settings.json   phone, email, hours, announcement, about text
content/gallery.json    photo gallery (single photos and before/after pairs)
content/testimonials.json
images/uploads/         photos uploaded through /admin land here
admin/                  Decap CMS admin page + its config
netlify.toml            hosting config
serve.js                local preview only
PHOTO_SHOT_LIST.md      what photos to take
```

## Preview locally
```
node serve.js
```
then open http://localhost:5199. The admin page needs the site to be live on Netlify to log in; locally it only loads.

## Go live (one-time, about 30 minutes)
1. **Buy the domain.** Recommended: `macautoandcollision.com` (available at the time of writing). See the domain notes below.
2. **Put this folder in a GitHub repo.** Create a new private repo named `mac-auto-collision-site`, then in this folder:
   ```
   git init
   git add .
   git commit -m "Mac Auto & Collision website"
   git branch -M main
   git remote add origin https://github.com/<your-account>/mac-auto-collision-site.git
   git push -u origin main
   ```
3. **Create a free Netlify account** (netlify.com) → "Add new site" → "Import an existing project" → pick the GitHub repo. Leave build command blank, publish directory `.`. Deploy.
4. **Turn on the admin login.** In the Netlify site: *Site configuration → Identity → Enable Identity*. Then *Identity → Registration → Invite only*. Then *Identity → Services → Git Gateway → Enable*.
5. **Invite the editors.** *Identity → Invite users* → enter the shop email (macautocollision@earthlink.net) and anyone else who should edit. They click the email link, set a password, and land on `/admin/`.
6. **Point the domain at Netlify.** *Domain management → Add a domain* → follow the DNS steps at the registrar. Netlify issues the HTTPS certificate automatically.
7. **Update the domain in the files** if you chose a name other than `macautoandcollision.com`: it appears in `index.html` (canonical link, JSON-LD `url`) and `admin/config.yml` (`site_url`, `display_url`).

## Adding photos and editing content (day to day)
Go to `https://<your-domain>/admin/`, log in.
- **Photo Gallery** → *Photos* → *Add photos* → choose "Before & After" and upload both photos, or "Our Work" / "The Shop" and upload one. Add a caption like "2019 Silverado, driver-side collision repair". Click **Publish**. The site updates in about a minute.
- **Contact, Hours & About** → change hours, the about text, or put a message in *Announcement banner* (for holidays). **Publish**.
- **Customer Reviews** → add a name and the review text. **Publish**.

Every publish is saved as a commit in the GitHub repo, so nothing is ever lost and any change can be undone.

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

## New address: directory cleanup
The shop is now at **8716 Circle Dr, Bessemer, AL 35022**. The site, the map and the search-engine data all use the new address, and the announcement banner says "We have moved" (clear it in the admin page whenever you like).

Online directories still show the old Brooklane Dr address and will send customers to the wrong place. Update or claim these:
- Google Business Profile (most important: it drives the map pin in search)
- BBB profile, Yellow Pages, Yahoo Local, Alignable, Manta
- Yelp already shows the correct address and phone, (205) 746-1847. The other directories list the old number, (205) 491-2611, so update that at the same time.

## Things still to confirm
- **Hours.** Directories disagree (8:00 vs 9:00 open). Site says 8:00–5:00. Change it in the admin page once live, or in `content/settings.json`.
- **Map pin.** The map searches the street address. Verify it lands on the shop.
- **Google Business Profile.** Claim or update it and link it from the About section when ready.
