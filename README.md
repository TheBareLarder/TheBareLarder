# Tauros

Marketing site for Tauros — the original beef tallow crisps, made in Christchurch, New Zealand.

Built with **Next.js 16 (App Router)**, **Tailwind CSS 4**, and **TypeScript**. Statically generated, no database.

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

Hosted on [Vercel](https://vercel.com) (Hobby). The repo is linked for automatic deploys — push to `main` and Vercel builds with Next.js, no extra config.

**Deployment hygiene:** deployments are set to expire after about 30 days without a fresh build. That keeps old URLs tidy, but a quiet repo can look offline until something is deployed again. Push any change to `main`, or redeploy from the Vercel dashboard, to publish a new build.

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
    NutritionInfo.tsx
    About.tsx
    Products.tsx
    FindUs.tsx
    ContactFooter.tsx
  resources/        # imported image assets (e.g. TaurosLogo.png)

content/
  site.ts           # all copy, products, nutrition, markets, social links

app/globals.css     # Tailwind v4 theme (ink / kraft / cream) and utilities
```

## Content

Everything the marketing copy team needs to edit lives in [`content/site.ts`](content/site.ts):

- Brand name and tagline
- Nav links and credential badges
- Nutrition panel data
- Product list (title, description, badge)
- Market locations and external links
- Social / contact links
