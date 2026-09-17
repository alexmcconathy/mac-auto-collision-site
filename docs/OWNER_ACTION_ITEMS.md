# Owner action items — Mac Auto & Collision website

Plain-language to-do list for the shop, in the order that gets the most benefit soonest. Written 2026-09-17. Tick items off here or in the Word manual.

Website: https://www.macautoandcollision.com · Admin page: https://www.macautoandcollision.com/admin/

---

## 1. Set up your admin login (15 minutes, one time, each person who will edit)
- [ ] Create a free GitHub account at https://github.com/signup if you don't have one. Use the shop email or your own; write the password in the shop password book.
- [ ] Ask Alex to add you as a collaborator on the repo (he does: github.com → mac-auto-collision-site → Settings → Collaborators → Add people → your username). Accept the invitation email.
- [ ] Open https://www.macautoandcollision.com/admin/ and click **Sign In Using Access Token**.
- [ ] Click the link it shows to create a token. On GitHub: name it `shop website`, expiration **1 year**, under Repository access choose **Only select repositories** → `mac-auto-collision-site`, under Permissions → Repository permissions set **Contents** to **Read and write**. Click Generate token.
- [ ] Copy the token (it starts with `github_pat_`), paste it into the admin page. Done. The browser remembers it.
- [ ] Put a reminder on the calendar for one year from today: "renew website token".

## 2. Confirm the hours (2 minutes)
- [ ] Admin page → **Contact, Hours & About** → check *Weekday open* (site says 8:00 AM) and *Weekday close* (5:00 PM). Fix if wrong → **Save**.

## 3. Forward the .net domain to the .com (5 minutes)
- [ ] Log in at https://porkbun.com → Domain Management.
- [ ] On the `macautoandcollision.net` row click **Details** (the dropdown on the right) → **URL Forwarding**.
- [ ] Forward to `https://www.macautoandcollision.com`, type **Permanent (301)**, leave "Include path" unchecked → **Add** / **Save**.
- [ ] Test: type macautoandcollision.net in a browser; it should land on the real site within an hour.

## 4. Google Business Profile (the most important marketing task, 30 minutes plus a verification wait)
This is the listing that shows on Google Maps and in the box on the right when someone searches the shop name. Good news: it already shows the right address and phone, 4.4 stars from 18 reviews, and opens at 8 AM. But it says **"Own this business?"**, meaning nobody has claimed it, and it lists **no website**.
- [x] Review link: already done. The site's "Review us on Google" buttons point at this listing.
- [ ] Go to https://business.google.com and sign in with a Google account the shop controls (create one at accounts.google.com if needed; write it in the password book).
- [ ] Search for "Mac Auto & Collision Inc Bessemer" and click **Claim this business** / **Manage now**.
- [ ] Complete verification. Google usually offers a phone call, a text, a short video walkthrough of the shop, or a postcard (takes about a week). Follow the prompts.
- [ ] Once verified: add the website `https://www.macautoandcollision.com`, set category `Auto body shop` (add `Auto repair shop` as a second category), confirm hours Mon–Fri 8:00 AM–5:00 PM, and set the shop name to `Mac Auto & Collision` (drop the "Inc" if you prefer).
- [ ] Upload 5 to 10 photos (storefront, sign, bays, a finished car), add the services list, and refresh the description (it still mentions "Mac Snap On-Site Estimating"; copy the About text from the website if that program is no longer offered).
- [ ] Reply to a few of the existing reviews with a short thank-you. Google ranks responsive businesses higher.
- [ ] Check the map pin lands on the shop. If not, drag it in the profile's Location section.

## 5. Fix the other directories (20 minutes total, all still show Brooklane Dr and the old number)
For each one: search the site for "Mac Auto & Collision Bessemer", open the listing, look for **Claim this business**, **Edit**, **Suggest an edit** or **Update**, and set address `8716 Circle Dr, Bessemer, AL 35022` and phone `(205) 746-1847`. Some email a confirmation link; click it.
- [ ] BBB: https://www.bbb.org/us/al/bessemer/profile/auto-body-repair-and-painting/mac-auto-collision-0463-54000644 → "Update this profile" or call BBB Central & South Alabama.
- [ ] Yellow Pages: https://www.yellowpages.com → find the listing → **Claim this listing** (or https://claim.yp.com).
- [ ] Yahoo Local: the listing comes from a data provider; the free fix is to submit the correct address at https://www.yext.com/pl/scan or leave it, Google is what matters.
- [ ] Alignable: https://www.alignable.com → sign in or claim the `Mac Auto & Collision Inc` page → edit the address.
- [ ] Manta: https://www.manta.com → find listing → **Claim**.
- [ ] Facebook page (Mac Auto & Collision, Hueytown): Page → Edit details → update address, phone, website, hours.
- [ ] Yelp is already correct. Add the website URL to the Yelp listing if it isn't there (https://biz.yelp.com).

## 6. Photos (an afternoon)
- [ ] Open `PHOTO_SHOT_LIST.md` (in the website folder or ask Alex) and take the nine must-have shots with a phone, wide/landscape, in good light.
- [ ] Set the background photo: admin page → **Contact, Hours & About** → *Background photo* → upload the storefront shot → **Save**. The top of the site shows it faded behind the headline. *Background photo fade* sets how dark the tint is (Light shows the most photo).
- [ ] Use the **original photo from the phone**, not a downsized or texted copy. At least 1600 pixels wide looks sharp on big screens; the current red-and-white car photo is only 371 pixels and looks soft. A **wide (landscape)** shot fills the whole banner; a tall or square one is shown in the middle with a blurred fill on the sides.
- [ ] Add gallery photos the quick way: admin page → **Photo Gallery** → **Quick photos** → pick as many photos as you like in one go (or drag them in) → **Save**. They show as plain photos, no captions needed.
- [ ] For a repair you want to show off: **Photo Gallery** → **Captioned photos and Before & After pairs** → **Add**. Choose **Before & After** and upload both. Title like "2019 Silverado, driver side", caption like "Collision repair, blend and paint". **Save**.
- [ ] The gallery section appears on the site as soon as the first photo is saved (the Black Ford is already there).

## 7. Customer reviews (ongoing)
- [ ] Ask three to five recent happy customers for a sentence or two (text message is fine). Get their OK to use first name and last initial.
- [ ] Admin page → **Customer Reviews** → **Add** → name, review, vehicle → **Save**. The reviews section appears after the first one.
- [ ] Better still: send them the Google review link from step 4. Google reviews count toward search ranking.

## 8. Read the FAQ once (5 minutes)
- [ ] Admin page → **FAQ**. The nine answers were written from public info. Change anything the shop actually does differently (repair times, towing, what to bring) → **Save**.

## 9. Retire the "We have moved" banner (when ready, about six months after the move)
- [ ] Admin page → **Contact, Hours & About** → clear the *Announcement banner* box → **Save**. Use the same box later for holiday closures.

## 10. Estimate form delivery through Formspree (10 minutes, no code)
Today the form opens the visitor's own email app. With Formspree the request is emailed to the shop directly and the visitor sees a thank-you. Free plan: 50 requests a month.
- [ ] Go to https://formspree.io and click **Get Started** / **Sign up**. Use the shop email (macautocollision@earthlink.net) and a password; write it in the password book. Confirm the email Formspree sends.
- [ ] Click **+ New form**. Name: `Estimate requests`. Send emails to: `macautocollision@earthlink.net`. Create.
- [ ] Formspree shows the form's endpoint, a link like `https://formspree.io/f/abcdwxyz`. Copy it.
- [ ] Open the website admin page → **Contact, Hours & About** → paste it into **Estimate form delivery address** → **Save**.
- [ ] Two minutes later, fill in the estimate form on the website with your own details and click **Request My Free Estimate**. You should see "Thanks, ... We got your request", and the email should arrive at the shop address within a minute (check spam the first time and mark it "not spam").
- [ ] In Formspree, open the form → **Settings** and make sure **Restrict to domain** lists `macautoandcollision.com` so nobody else can use the form address.

## 11. One-click admin login (optional, 20 minutes, only if several people will edit)
- [ ] Follow `docs/ONE_CLICK_LOGIN.md` in the website folder (or ask Alex). It is a free Cloudflare account plus a GitHub "OAuth App"; no monthly cost. After it, editors click **Sign in with GitHub** instead of pasting a token.

## 11b. Point the Yelp listing at the website and keep the Yelp card current (10 minutes)
- [ ] Go to https://biz.yelp.com and sign in (or click **Claim** if the page has never been claimed; Yelp verifies by phone call to (205) 746-1847 or by email).
- [ ] Left menu → **Business Information** → **Edit** next to *Website* → enter `https://www.macautoandcollision.com` → **Save**. Yelp reviews edits before they show; allow a day or two.
- [ ] While there, confirm the address, phone and hours match the site, and upload a couple of the same photos.
- [ ] Optional, to show a real Yelp review on the site: on yelp.com open one of the shop's reviews → click the **⋯** menu on the review → **Embed review** → in the code shown, copy the value after `data-review-id="` → website admin page → **Contact, Hours & About** → **Yelp embedded reviews** → **Add** → paste → **Save**.
- [ ] Whenever the Yelp rating or review count changes, update **Yelp rating** and **Yelp review count** in the admin page (currently 5.0 and 1).

## 12. Turn on traffic monitoring (10 minutes, free)
Recommended pair: Google Search Console (what people searched to find you) and Cloudflare Web Analytics (how many visits, from where, which pages). Both free, no cookie banner needed.
- [ ] **Cloudflare Web Analytics**: sign in at https://dash.cloudflare.com (free account) → **Web Analytics** → **Add a site** → enter `macautoandcollision.com` → choose "JS snippet" → copy the 32-character token from the snippet (`"token":"..."`). Admin page → **Contact, Hours & About** → paste into **Cloudflare Web Analytics token** → **Save**. Visits show in the Cloudflare dashboard within a day.
- [ ] **Google Search Console**: sign in at https://search.google.com/search-console with the shop's Google account → **Add property** → **URL prefix** → `https://www.macautoandcollision.com` → choose the **HTML file** method → download the file → send it to Alex to put in the site folder (or use the DNS method at Porkbun) → click **Verify**. Then **Sitemaps** → add `sitemap.xml`.
- [ ] Optional: **Microsoft Clarity** (free heatmaps and session replays): https://clarity.microsoft.com → sign in → **Add new project** → copy the Project ID → paste into **Microsoft Clarity project ID** in the admin page → **Save**.

## 13. Decisions for the new message (answered 17 Sept unless marked open)
- [x] **Deductibles**: site says "Ask us how to reduce your deductible" plus in-house financing. (Alex's note: no legal check was done on "reduce"; if an insurer or agent ever objects, the fallback wording is "ask about your deductible options".)
- [x] **Text messages**: (205) 746-1847 receives texts. Text Us buttons are live.
- [x] **On-site estimates**: no charge, within 40 miles of Bessemer, call to schedule. On the site.
- [x] **Pickup and delivery**: offered; terms stay "ask when you call".
- [x] **Deductible financing**: in-house; site says so.
- [ ] **Allen's insurance background**: framework is in place, nothing published. When ready, type one or two sentences into admin → Contact, Hours & About → *Owner's insurance background* and it appears under the "Who does your body shop work for?" comparison.
- [ ] **Team** (names, roles, years, photos): still open. Send them and Alex adds a team section.
- [x] **Warranty**: no claim on the site. Honesty instead.
- [x] **Turnaround**: left general (depends on shop load and repair type).
- [x] **Vehicle security**: nothing claimed.
- [x] **Commercial/fleet accounts**: new "Businesses & fleets" section, FAQ entry and a form checkbox. No customer names.
- [x] **"Mac Snap"**: dropped. Update the Google Business Profile description to match (item 4).
- [ ] **Modern-car photos**: as of the evening of 17 Sept the gallery still holds the six photos uploaded at 7:08 AM (one modern: the red hatchback in the booth). If more were uploaded, they didn't save. In the admin page, after choosing photos, the blue **Save** button at the top must be clicked; the site updates about two minutes later.

## 14. Later ideas (ask Alex)
- [ ] **Spanish page**, **online drop-off request**, **insurance partner logos**: see `docs/ROADMAP.md` Phase 6.

## Every September (domain renews 17 Sept)
- [ ] Porkbun: auto-renew ON for both domains, card on file not expired.
- [ ] Editors renew their GitHub tokens (they expire yearly).
- [ ] Check hours on the site, swap in a few fresh gallery photos.

## If something breaks
Open the Word manual, section 6 (Troubleshooting), or `README.md` in the website folder. The backup address https://alexmcconathy.github.io/mac-auto-collision-site/ always works even if the domain has a problem.
