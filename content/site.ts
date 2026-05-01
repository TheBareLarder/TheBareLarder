/** Central copy and placeholders — extend as the brand grows. */

export const brand = {
  name: "Bare Larder",
  tagline: "Just the good stuff.",
} as const;

/** Set to a file in `/public` (e.g. `/hero-chips.mp4`) when the hero clip is ready. */
export const heroVideoSrc: string | null = null;

export const navLinks = [
  { href: "#why-tallow", label: "Why tallow?" },
  { href: "#about", label: "Our story" },
  { href: "#products", label: "Products" },
  { href: "#find-us", label: "Find us" },
  { href: "#contact", label: "Contact" },
] as const;

export const products = [
  {
    id: "chips-lightly-salted",
    title: "Lightly salted tallow chips",
    description:
      "Agria potatoes fried in NZ beef tallow, with salt kept light so the potato and the fat do more of the talking.",
    badge: "Core range",
  },
  {
    id: "chips-salted",
    title: "Salted tallow chips",
    description:
      "Same cook and same tallow, with a heavier hand on the salt for a straight-up chip-shop hit.",
    badge: "Core range",
  },
  {
    id: "flavours-research",
    title: "More flavours",
    description:
      "We are trying other seasonings and blends on the bench. Nothing we are ready to name or sell yet, just honest R&D.",
    badge: "Under research",
  },
] as const;

export const markets = [
  {
    id: "lyttelton-farmers-market",
    name: "Lyttelton Farmers Market",
    detail:
      "Likely one of our first stalls when we open. We do not have our own trading dates yet. The market is Saturday mornings, 10am to 1pm, on London Street, Lyttelton.",
    infoHref: "https://www.lytteltoninfocentre.nz/lyttelton-farmers-market",
    infoLabel: "Lyttelton Info Centre",
  },
  {
    id: "ferrymead-night-market",
    name: "Ferrymead Night Market",
    detail:
      "We are also planning to trade at Ferrymead night markets as we get going. Our stall dates are still TBC; the council page has the current schedule for the market itself.",
    infoHref: "https://ccc.govt.nz/news-and-events/whats-on/event/ferrymead-night-market-11",
    infoLabel: "Christchurch City Council",
  },
] as const;

export const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Email" },
] as const;
