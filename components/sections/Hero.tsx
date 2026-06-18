import Image from "next/image";
import taurosLogoSrc from "@/components/resources/TaurosLogo.png";
import { brand, credentials } from "@/content/site";
export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-kraft min-h-[calc(95svh-3.5rem)] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-[1] mx-auto max-w-content w-full px-5 sm:px-8 lg:px-10 py-20 flex flex-col-reverse lg:flex-row flex-wrap gap-14 items-center justify-between">
        {/* ── Left: brand mark (bull faces right toward copy) ── */}
        <div className="flex-1 min-w-[260px] max-w-[520px] mx-auto lg:mx-0 w-full">
          <Image
            src={taurosLogoSrc}
            alt="Tauros — The Original Beef Tallow Crisps"
            width={444}
            height={299}
            className="w-full block shadow-stamp"
            priority
          />
          <p className="font-sans text-[9.5px] font-bold tracking-[0.28em] uppercase text-ink/35 mt-2.5 text-left">
            Natural Sea Salt · 100g · NZ Made
          </p>
        </div>

        {/* ── Right: headline + badges + CTAs ── */}
        <div className="flex-1 min-w-[300px] lg:text-right">
          <p className="font-sans text-[10.5px] font-bold tracking-[0.28em] uppercase text-ink/45 mb-3 lg:mr-0.5">
            The Original Beef Tallow Crisps
          </p>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(96px,14vw,168px)] tracking-[0.02em] text-ink leading-[0.87]"
          >
            {brand.name.toUpperCase()}
          </h1>
          <p className="font-display text-[clamp(20px,2.6vw,30px)] tracking-[0.14em] text-ink/65 mt-3.5 lg:mr-0.5">
            BULLISH ABOUT FLAVOUR
          </p>
          <div
            className="w-11 h-[2.5px] bg-ink mt-5 mb-7 lg:ml-auto lg:mr-0.5"
            aria-hidden="true"
          />

          {/* Credential badges */}
          <div
            className="flex gap-3.5 flex-wrap mb-10 lg:justify-end"
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
          <div className="flex gap-2.5 flex-wrap lg:justify-end">
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
