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

## Stack

- Next.js (App Router)
- [`@clerk/nextjs`](https://clerk.com/docs) — authentication + API Keys (enabled in the
  Clerk Dashboard; the "API Keys" tab then appears automatically in `<UserProfile />`,
  no custom key-management UI needed)
