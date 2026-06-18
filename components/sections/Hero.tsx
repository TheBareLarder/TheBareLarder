import Image from "next/image";
import taurosBrandSrc from "@/components/resources/TaurosBR.png";
import { brand, credentials } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-kraft min-h-[calc(95svh-3.5rem)] flex items-center overflow-hidden bg-noise"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-6 top-[18%] hidden xl:block font-display text-[min(22vw,280px)] leading-none text-ink/[0.035] select-none"
        aria-hidden="true"
      >
        T
      </div>

      <div className="relative z-[1] mx-auto max-w-content w-full px-5 sm:px-8 lg:px-10 py-20 flex flex-col-reverse lg:flex-row flex-wrap gap-14 items-center justify-between">
        {/* ── Left: brand mark (bull faces right toward copy) ── */}
        <div
          className="flex-1 min-w-[260px] max-w-[580px] mx-auto lg:mx-0 w-full hero-rise"
          style={{ animationDelay: "0.08s" }}
        >
          <Image
            src={taurosBrandSrc}
            alt={`${brand.name} — ${brand.description}`}
            width={444}
            height={299}
            className="w-full block drop-shadow-[8px_8px_0_rgba(26,26,24,0.1)]"
            priority
          />
        </div>

        {/* ── Right: title stack + badges + CTAs ── */}
        <div className="flex-1 min-w-[300px] lg:text-right">
          <p
            className="font-sans text-[10.5px] font-bold tracking-[0.28em] uppercase text-ink/45 mb-4 lg:mr-0.5 hero-rise"
            style={{ animationDelay: "0.12s" }}
          >
            The Original Beef Tallow Crisps
          </p>

          <h1
            id="hero-heading"
            className="font-display leading-[0.82] tracking-[0.02em] text-ink"
          >
            <span className="sr-only">{brand.name} — </span>
            <span
              className="block text-[clamp(72px,11vw,132px)] hero-title-shadow hero-rise"
              style={{ animationDelay: "0.18s" }}
            >
              BULLISH
            </span>
            <span
              className="block text-[clamp(48px,7vw,88px)] mt-1 lg:pr-[1.15em] hero-title-outline hero-rise"
              style={{ animationDelay: "0.28s" }}
            >
              ABOUT
            </span>
            <span
              className="block text-[clamp(72px,11vw,132px)] -mt-0.5 hero-title-shadow hero-rise"
              style={{ animationDelay: "0.38s" }}
            >
              FLAVOUR
              <span className="text-ink/25" aria-hidden="true">
                .
              </span>
            </span>
          </h1>

          <p
            className="font-sans text-[9.5px] font-bold tracking-[0.28em] uppercase text-ink/35 mt-4 lg:mr-0.5 hero-rise"
            style={{ animationDelay: "0.46s" }}
          >
            Natural Sea Salt · 100g · NZ Made
          </p>

          <div
            className="flex items-center gap-3 mt-6 mb-7 lg:justify-end hero-rise"
            style={{ animationDelay: "0.52s" }}
            aria-hidden="true"
          >
            <span className="h-px flex-1 max-w-[72px] bg-ink/20 lg:order-2" />
            <span className="font-display text-[13px] tracking-[0.35em] uppercase text-ink/30 lg:order-1">
              Est. 2026
            </span>
            <span className="h-px flex-1 max-w-[72px] bg-ink/20 lg:order-0" />
          </div>

          {/* Credential badges */}
          <div
            className="flex gap-3.5 flex-wrap mb-10 lg:justify-end hero-rise"
            style={{ animationDelay: "0.58s" }}
            aria-label="Product credentials"
          >
            {credentials.map((c) => (
              <div
                key={c.id}
                className="credential-badge"
                aria-label={c.label}
              >
                <span
                  className="font-sans text-[9.5px] font-extrabold uppercase tracking-[0.05em] text-cream text-center"
                  style={{ whiteSpace: "pre", lineHeight: 1.55 }}
                >
                  {c.lines}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex gap-2.5 flex-wrap lg:justify-end hero-rise"
            style={{ animationDelay: "0.66s" }}
          >
            <a href="#about" className="btn-primary">
              Our Story
            </a>
            <a href="#products" className="btn-outline">
              Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
