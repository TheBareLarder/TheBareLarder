/** Central copy — Tauros beef tallow crisps. */

export const brand = {
  name: "Tauros",
  tagline: "Bullish About Flavour.",
  description:
    "The Original Beef Tallow Crisps. Made in Christchurch, New Zealand.",
} as const;

export const navLinks = [
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#find-us", label: "Find Us" },
  { href: "#contact", label: "Contact" },
] as const;

/**
 * Credential badges — rendered in the Hero and About sections.
 * `lines` is a newline-separated string for the badge text display.
 */
export const credentials = [
  { id: "no-seed-oils", label: "No Seed Oils", lines: "NO\nSEED\nOILS" },
  { id: "non-gmo", label: "Non-GMO", lines: "NON\nGMO" },
  { id: "grass-fed", label: "100% Grass-Fed", lines: "100%\nGRASS\nFED" },
] as const;

export const nutrition = {
  servingsPerPackage: 2,
  servingSize: "50 g",
  rows: [
    { nutrient: "Energy", perServing: "361 kJ", per100g: "723 kJ" },
    { nutrient: "Protein", perServing: "2.3 g", per100g: "4.6 g" },
    { nutrient: "Fat, total", perServing: "3.8 g", per100g: "7.5 g" },
    {
      nutrient: "Saturated",
      perServing: "1.8 g",
      per100g: "3.7 g",
      indent: true,
    },
    { nutrient: "Carbohydrate", perServing: "16.2 g", per100g: "32.3 g" },
    { nutrient: "Sugars", perServing: "0.3 g", per100g: "0.6 g", indent: true },
    { nutrient: "Sodium", perServing: "21 mg", per100g: "42 mg" },
  ],
} as const;

export const products = [
  {
    id: "natural-sea-salt",
    title: "Natural Sea Salt",
    size: "100g",
    description:
      "Agria potatos fried in 100% grass-fed NZ beef tallow, finished with natural sea salt. Three ingredients. That is it.",
    badge: "Available Now",
    available: true,
  },
  {
    id: "more-flavours",
    title: "More Flavours",
    size: "Coming Soon",
    description:
      "Working through options on the bench. Nothing named yet — we cook it until it earns its spot.",
    badge: "In Development",
    available: false,
  },
] as const;

export const markets = [
  {
    id: "lyttelton-farmers-market",
    name: "Lyttelton Farmers Market",
    schedule: "Saturday mornings · 10am–1pm",
    location: "London Street, Lyttelton, Christchurch",
    detail:
      "One of our first stalls. Trading dates still TBC — follow us on Facebook for updates.",
    infoHref: "https://www.lytteltoninfocentre.nz/lyttelton-farmers-market",
    infoLabel: "Lyttelton Info Centre",
  },
  {
    id: "ferrymead-night-market",
    name: "Ferrymead Night Market",
    schedule: "Stall dates TBC",
    location: "Ferrymead, Christchurch",
    detail:
      "Also planning to trade here as we get going. Check the council page for the current market schedule.",
    infoHref:
      "https://ccc.govt.nz/news-and-events/whats-on/event/ferrymead-night-market-11",
    infoLabel: "Christchurch City Council",
  },
] as const;

export const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "mailto:hello@tauros.co.nz", label: "Email" },
] as const;
