# Flude account

Minimal account-management frontend for Flude. Sign in with your GitHub, GitLab, or
Bitbucket account and create an API key to use with the [Flude GitHub
Action](https://github.com/Flude-team/flude-action) (or the GitLab CI / Bitbucket Pipe
equivalents).

This is not the product itself — it exists solely to issue and manage API keys via
[Clerk](https://clerk.com)'s `<UserProfile />` component. Deployed on
[Netlify](https://netlify.com) at `app.flude.guide` (chosen over Vercel/Cloudflare Pages —
see `DEL-B41` in `Delivery_ToDo.md` for the full reasoning: Vercel's Hobby tier ToS covers
commercial projects regardless of current billing status, Cloudflare's SSR path is
Workers-via-beta-adapter with an unresolved Next.js 16 middleware conflict, and static
export is a non-starter for Clerk).

## Local development

```bash
cp .env.example .env.local
# fill in real Clerk keys in .env.local
npm install
npm run dev
```

## Deploying to Netlify

Not yet done — needs the owner's Netlify/Clerk/registrar access, so this is written as exact
steps rather than performed:

1. Netlify dashboard → **Add new site → Import an existing project** → pick
   `Flude-team/flude-app`. Netlify's own Next.js Runtime auto-detects the App Router build; a
   `netlify.toml` in this repo pins the Node version (`20`, matching CI) and the build command
   explicitly so the deploy doesn't depend on Netlify's shifting defaults.
2. Site settings → **Environment variables**, add the same two Clerk keys `.env.local` uses
   locally (real values, from the Clerk Dashboard, not the `.env.example` placeholders):
   `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`.
3. Site settings → **Domain management → Add a domain** → `app.flude.guide`. Netlify gives a
   CNAME/ALIAS target; add that record at whichever DNS host currently manages `flude.guide`
   (Cloudflare, per earlier decisions — DNS-only/grey-cloud is fine, this doesn't require
   moving the whole domain's nameservers to Netlify).
4. Enable the **API Keys** feature for this Clerk application in the Clerk Dashboard first (see
   `DEL-B41` — a separate one-time toggle, not a code change) so the "API Keys" tab actually
   appears in `<UserProfile />` once real users sign in.

## Stack

- Next.js (App Router)
- [`@clerk/nextjs`](https://clerk.com/docs) — authentication + API Keys (enabled in the
  Clerk Dashboard; the "API Keys" tab then appears automatically in `<UserProfile />`,
  no custom key-management UI needed)
