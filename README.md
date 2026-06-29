# West Estimating — Cloudflare Pages Edition

A full-stack marketing site for **West Estimating**. Designed and built by **Rana Mehtab**.

- **Frontend** — React 18 + Vite, deployed as static assets to Cloudflare Pages
- **Backend** — Cloudflare Pages Functions (no separate server, no cold starts, no monthly bill)
- **Domain** — Cloudflare DNS pointing `westestimating.com` at the Pages project

Everything below assumes you're on Windows and you already have the project unzipped.

---

## Part 1 — Run it locally first

This proves the build works on your machine before you push it to the internet.

### One-time setup

```powershell
cd west-estimating\frontend
npm install
```

This installs React, Vite, and Wrangler (the Cloudflare CLI).

### Start the dev server

```powershell
npm run dev
```

This runs `wrangler pages dev -- vite`. Wrangler boots Vite for the frontend AND serves your Pages Functions on the same port. Open the URL it prints (usually `http://localhost:8788`).

**Quick sanity check:**
- Home page loads with hero, services, stats, FAQ, etc.
- Click any service card — `/services/quantity-takeoff` should render the detail page
- Fill the contact form — submit should return "Thanks for reaching out…"
- Visit `http://localhost:8788/api/health` — should return `{"status":"ok",...}`

If everything works, you're ready to deploy.

---

## Part 2 — Push to GitHub

Cloudflare Pages deploys directly from a GitHub repo. Every push to `main` auto-builds and deploys.

### Create the repo

1. Go to **https://github.com/new** and create a new repo called `west-estimating`
   - Public or private, both work with Cloudflare's free plan
   - Don't add a README, .gitignore, or license — we already have those
2. Copy the repo URL (e.g. `https://github.com/ranamehtab/west-estimating.git`)

### Push the code

From the project root (the `west-estimating` folder containing `frontend/`):

```powershell
git init
git add .
git commit -m "Initial commit — West Estimating site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/west-estimating.git
git push -u origin main
```

If GitHub asks for a password, use a **Personal Access Token**, not your account password (https://github.com/settings/tokens, "Generate new token (classic)", check `repo` scope).

---

## Part 3 — Deploy to Cloudflare Pages

### Create the Pages project

1. Sign up / log in at **https://dash.cloudflare.com** (free, no credit card needed)
2. In the left sidebar click **Workers & Pages**
3. Click **Create application** → **Pages** tab → **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Pick the `west-estimating` repo

### Configure the build

On the setup screen, fill in **exactly** these values:

| Setting              | Value                              |
| -------------------- | ---------------------------------- |
| Project name         | `west-estimating`                  |
| Production branch    | `main`                             |
| Framework preset     | `Vite`                             |
| Build command        | `npm run build`                    |
| Build output dir     | `dist`                             |
| Root directory (advanced) | `frontend`                    |
| Node version (env var)    | `NODE_VERSION` = `20`         |

The "Root directory" of `frontend` is important — that's where Cloudflare looks for `package.json` and where it expects the build to happen. The Pages Functions live inside that root at `functions/`.

Click **Save and Deploy**.

Cloudflare runs `npm install && npm run build` in your `frontend` folder, then deploys `frontend/dist/` plus the Functions. Takes about 90 seconds the first time.

When it finishes, you'll get a free `*.pages.dev` URL like `west-estimating.pages.dev` — open it and verify the site works exactly like local.

---

## Part 4 — Hook up your domain (westestimating.com)

### Step 1 — Move your domain to Cloudflare DNS

(This step is **only** if your domain is not already on Cloudflare. If you bought it through Cloudflare or already migrated it, skip to Step 2.)

1. In the Cloudflare dashboard click **Add a site** at the top
2. Type `westestimating.com` and pick the **Free** plan
3. Cloudflare scans your current DNS records — review and click **Continue**
4. Cloudflare gives you **two nameservers** (e.g. `aria.ns.cloudflare.com`, `kurt.ns.cloudflare.com`)
5. Go to wherever you bought the domain (GoDaddy / Namecheap / etc.) and **replace the existing nameservers** with the two Cloudflare ones
6. Wait. DNS propagation usually takes 5–30 minutes; sometimes a few hours. Cloudflare emails you when it's active.

### Step 2 — Attach the domain to your Pages project

1. Open your `west-estimating` Pages project in the Cloudflare dashboard
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Type `westestimating.com` → **Continue** → **Activate domain**
5. Repeat for `www.westestimating.com`

Cloudflare automatically creates the DNS records and provisions an SSL certificate (free). Within 1–5 minutes, **https://westestimating.com** serves your site.

---

## Part 5 — Where contact form messages go

By default, contact submissions are logged inside Cloudflare. You can view them in real time:

```powershell
cd frontend
npx wrangler pages deployment tail --project-name=west-estimating
```

That streams all `console.log` output. Search for `[contact]` lines.

### Send submissions to your email (free option)

The cleanest free option is a service like **Formspree** or **Web3Forms** — they receive JSON and email it to you.

1. Sign up at https://web3forms.com (free, no card needed)
2. Create an "access key" tied to your email
3. They give you a webhook URL like `https://api.web3forms.com/submit`
4. In your Pages project: **Settings → Environment variables → Production** → add:
   - Variable name: `FORM_WEBHOOK`
   - Value: the webhook URL with your access key
5. Redeploy (push any commit, or click "Retry deployment" in the dashboard)

Now every contact form submission gets emailed to you.

---

## Updating the site

Edit any file locally, then:

```powershell
git add .
git commit -m "Describe your change"
git push
```

Cloudflare detects the push and redeploys automatically. Usually live within 90 seconds.

---

## Project structure (reference)

```
west-estimating/
├── README.md               ← this file
└── frontend/
    ├── package.json        ← Vite + Wrangler scripts
    ├── vite.config.js
    ├── index.html
    ├── public/
    │   ├── favicon.svg
    │   └── _redirects      ← SPA fallback for React Router
    ├── functions/          ← Cloudflare Pages Functions = your backend
    │   ├── _data.js        ← shared services data
    │   └── api/
    │       ├── health.js
    │       ├── contact.js
    │       └── services/
    │           ├── index.js   → GET /api/services
    │           └── [slug].js  → GET /api/services/:slug
    └── src/                ← React app source
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── api.js
        ├── components/
        ├── pages/
        ├── data/
        └── hooks/
```

---

## Costs

| Item                                   | Cost      |
| -------------------------------------- | --------- |
| Cloudflare Pages hosting               | $0        |
| Cloudflare Pages Functions (100k/day)  | $0        |
| Cloudflare DNS                         | $0        |
| SSL certificate                        | $0        |
| Your domain (`westestimating.com`)     | already paid |

**Total monthly:** $0.

Cloudflare's free tier easily handles tens of thousands of visitors per month for this kind of site.

---

## Troubleshooting

**"Failed to load PostCSS config" on `npm run dev`**
A text editor on your machine saved a JSON file with a UTF-8 BOM. The fix is already in `vite.config.js` (`css: { postcss: { plugins: [] } }`) — if you still see the error, make sure that line is there.

**`wrangler` command not found**
You skipped `npm install` in the `frontend` folder. Run it.

**Custom domain stuck on "Verifying"**
Means DNS hasn't propagated yet. Wait 30 minutes and refresh. If still stuck after a few hours, double-check the nameservers at your registrar match what Cloudflare gave you.

**Build fails on Cloudflare with "command not found"**
Make sure "Root directory" in build settings is set to `frontend` (not blank, not `/`).

**Contact form submission returns an error**
Open browser DevTools → Network tab → look at the `/api/contact` request. Likely a validation error (name too short, missing email, message under 10 chars).

---

Built by **Rana Mehtab**.
