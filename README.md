# Tauros

Marketing site for Tauros — the original beef tallow crisps, made in Christchurch, New Zealand.

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
  layout.tsx        # root layout, fonts (Bebas Neue + Nunito Sans), metadata
  page.tsx          # assembles all sections
  globals.css       # Tailwind base, custom utility classes

components/
  sections/         # one file per page section (top to bottom)
    SiteHeader.tsx
    Hero.tsx
    ThreeIngredients.tsx
    About.tsx
    Products.tsx
    FindUs.tsx
    ContactFooter.tsx
  resources/        # imported image assets (e.g. TaurosLogo.png)

content/
  site.ts           # all copy, products, nutrition, markets, social links

tailwind.config.ts  # colour system: ink / kraft / cream
```

## Content

Everything the marketing copy team needs to edit lives in [`content/site.ts`](content/site.ts):

- Brand name and tagline
- Nav links and credential badges
- Nutrition panel data
- Product list (title, description, badge)
- Market locations and external links
- Social / contact links
