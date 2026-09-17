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
This is the listing that shows on Google Maps and in the box on the right when someone searches the shop name. It currently shows the OLD address and phone.
- [ ] Go to https://business.google.com and sign in with a Google account the shop controls (create one at accounts.google.com if needed; write it in the password book).
- [ ] Search for "Mac Auto & Collision Bessemer". If it says the listing exists, click **Claim** or **Request access**. If it doesn't exist, click **Add your business**.
- [ ] Enter: name `Mac Auto & Collision`, category `Auto body shop` (add `Auto repair shop` as a second category), address `8716 Circle Dr, Bessemer, AL 35022`, phone `(205) 746-1847`, website `https://www.macautoandcollision.com`, hours Mon–Fri 8:00 AM–5:00 PM.
- [ ] Complete verification. Google usually offers a phone call, a text, a short video walkthrough of the shop, or a postcard (takes about a week). Follow the prompts.
- [ ] Once verified: upload 5 to 10 photos (storefront, sign, bays, a finished car), add the services list, and write a two-sentence description (copy the About text from the website).
- [ ] Get the review link: in the profile click **Ask for reviews** (or "Get more reviews"), copy the short link.
- [ ] Admin page → **Contact, Hours & About** → paste it into *Google review link* → **Save**. The "Review us on Google" buttons appear on the site.
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
- [ ] Set the hero photo: admin page → **Contact, Hours & About** → *Hero photo* → upload the storefront shot → **Save**. The top of the site now shows the shop.
- [ ] Add gallery photos: admin page → **Photo Gallery** → **Photos** → **Add**. For a repair, choose **Before & After** and upload both. Title like "2019 Silverado, driver side", caption like "Collision repair, blend and paint". **Save**.
- [ ] Repeat for two or three more jobs. The gallery section appears on the site as soon as the first photo is saved.

## 7. Customer reviews (ongoing)
- [ ] Ask three to five recent happy customers for a sentence or two (text message is fine). Get their OK to use first name and last initial.
- [ ] Admin page → **Customer Reviews** → **Add** → name, review, vehicle → **Save**. The reviews section appears after the first one.
- [ ] Better still: send them the Google review link from step 4. Google reviews count toward search ranking.

## 8. Read the FAQ once (5 minutes)
- [ ] Admin page → **FAQ**. The nine answers were written from public info. Change anything the shop actually does differently (repair times, towing, what to bring) → **Save**.

## 9. Retire the "We have moved" banner (when ready, about six months after the move)
- [ ] Admin page → **Contact, Hours & About** → clear the *Announcement banner* box → **Save**. Use the same box later for holiday closures.

## 10. Optional upgrades (ask Alex)
- [ ] **Estimate form delivery**: today the form opens the visitor's own email app. A free Formspree account makes it send directly and show a thank-you. Alex pastes one line into the site.
- [ ] **One-click admin login** instead of the token: a free Cloudflare Worker. Only worth it if several people will edit.
- [ ] **Spanish page**, **online drop-off request**, **insurance partner logos**: see `docs/ROADMAP.md` Phase 6.

## Every September (domain renews 17 Sept)
- [ ] Porkbun: auto-renew ON for both domains, card on file not expired.
- [ ] Editors renew their GitHub tokens (they expire yearly).
- [ ] Check hours on the site, swap in a few fresh gallery photos.

## If something breaks
Open the Word manual, section 6 (Troubleshooting), or `README.md` in the website folder. The backup address https://alexmcconathy.github.io/mac-auto-collision-site/ always works even if the domain has a problem.
