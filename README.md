# Bare Larder

Marketing site for Bare Larder — a Christchurch family business selling tallow chips at weekend markets.

Built with **Next.js 15 (App Router)**, **Tailwind CSS 3**, and **TypeScript**. Statically generated, no database.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build & preview

```bash
pnpm build
pnpm start        # or: pnpm preview (build + start in one step)
```

## Deploy

Connect the repo to [Vercel](https://vercel.com). It auto-detects Next.js — no configuration needed. Every push to `main` deploys automatically.

## Project structure

```
app/
  layout.tsx        # root layout, fonts (Fraunces + Nunito Sans), metadata
  page.tsx          # assembles all sections
  globals.css       # Tailwind base, custom utility classes

components/
  sections/         # one file per page section (top to bottom)
    SiteHeader.tsx
    Hero.tsx
    WhyTallow.tsx
    About.tsx
    Products.tsx
    FindUs.tsx
    ContactFooter.tsx
  resources/        # imported image assets

content/
  site.ts           # all copy, product data, market info, social links

tailwind.config.ts  # colour system: forest / honey / stone / clay / ink
```

## Content

Everything the marketing copy team needs to edit lives in [`content/site.ts`](content/site.ts):
- Brand name and tagline
- Nav links
- Product list (title, description, badge)
- Market locations and external links
- Social / contact links

To add a hero video, set `heroVideoSrc` in that file to a path in `/public` (e.g. `/hero-chips.mp4`).
