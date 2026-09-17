# One-click admin login ("Sign in with GitHub")

Today editors sign in to `/admin/` by pasting a GitHub token. That is fine for one or two people. If several people will edit, this upgrade replaces the token with a single **Sign in with GitHub** button. It uses the free Sveltia CMS Authenticator running on Cloudflare Workers (free tier, no card needed) plus a GitHub "OAuth App" that says "this website is allowed to ask GitHub who you are".

Cost: $0. Time: about 20 minutes. Needs: the alexmcconathy GitHub login and a Cloudflare account (free, sign up at dash.cloudflare.com with the shop or Alex's email).

The site is already prepared: `admin/config.yml` has the two lines ready to uncomment (step 4), and the site test accepts either setup.

## Step 1 — Deploy the authenticator to Cloudflare (5 minutes)
1. Sign in at https://dash.cloudflare.com (create the free account first if needed).
2. Open https://github.com/sveltia/sveltia-cms-auth and click the **Deploy to Cloudflare Workers** button near the top of the README.
3. Follow the prompts, keep the defaults, click **Deploy**.
4. When it finishes, copy the Worker URL. It looks like `https://sveltia-cms-auth.<something>.workers.dev`. Paste it into a notepad; you need it twice.

## Step 2 — Register the OAuth App on GitHub (3 minutes)
1. Signed in as alexmcconathy, open https://github.com/settings/applications/new
2. Fill in:
   - Application name: `Mac Auto website admin`
   - Homepage URL: `https://www.macautoandcollision.com`
   - Authorization callback URL: the Worker URL from Step 1 followed by `/callback`, for example `https://sveltia-cms-auth.abc.workers.dev/callback`
3. Click **Register application**.
4. Copy the **Client ID** shown.
5. Click **Generate a new client secret**, copy the secret immediately (it is shown once).

## Step 3 — Give the Worker its settings (3 minutes)
1. Back at Cloudflare: **Workers & Pages** → click `sveltia-cms-auth` → **Settings** → **Variables and Secrets**.
2. Add these, one at a time (**Add** → name, value → **Save**):
   - `GITHUB_CLIENT_ID` = the Client ID from Step 2 (type: text)
   - `GITHUB_CLIENT_SECRET` = the client secret from Step 2 (type: **Secret** / encrypt)
   - `ALLOWED_DOMAINS` = `www.macautoandcollision.com,macautoandcollision.com,alexmcconathy.github.io`
3. Click **Deploy** if Cloudflare asks to redeploy.

## Step 4 — Turn it on in the site (2 minutes, Alex)
In `admin/config.yml`, under `backend:`, replace the token-only lines with:
```yaml
  base_url: https://sveltia-cms-auth.<something>.workers.dev
  auth_methods: [oauth, token]
```
Run `npm test`, commit, push. Two minutes later `/admin/` shows **Sign in with GitHub** (and still the token option as a fallback).

## Step 5 — Each editor
1. Has a GitHub account and is a collaborator on the repo (Alex adds them: repo → Settings → Collaborators).
2. Opens `/admin/`, clicks **Sign in with GitHub**, approves the "Mac Auto website admin" app once. Done.

## If it doesn't work
- "redirect_uri mismatch": the callback URL in Step 2 must be exactly the Worker URL + `/callback`.
- Popup closes with an error about domain: add the domain you opened the admin page from to `ALLOWED_DOMAINS`.
- Still stuck: the token button is still there and still works.

## Undo
Remove the two lines from Step 4 (back to `auth_methods: [token]`). The Worker and OAuth App can stay; they cost nothing.
