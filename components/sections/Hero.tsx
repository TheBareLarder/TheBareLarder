import { brand } from "@/content/site";

function HeroWave() {
  return (
    <svg
      className="absolute bottom-0 left-0 z-[4] w-full text-stone"
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0 40L80 36C160 32 320 26 480 29C640 32 800 46 960 48C1120 50 1280 38 1360 32L1440 26V80H0V40Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(92svh,820px)] flex-col overflow-hidden bg-forest-deep"
      aria-labelledby="hero-heading"
    >
      {/* Atmospheric radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_25%,rgba(200,155,42,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-forest-deep/60 to-transparent" />
      </div>

      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise-faint opacity-50" aria-hidden />

      {/* Main content */}
      <div className="relative z-[2] flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-24 sm:pb-32 sm:pt-28">
        {/* Provenance badge */}
        <div
          className="mb-10 flex items-center gap-2.5 rounded-full border border-honey/25 bg-honey/10 px-5 py-2"
          aria-label="NZ Made, Christchurch, Family Recipe"
        >
          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-honey" aria-hidden />
          <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-honey/90">
            NZ Made&nbsp;&nbsp;·&nbsp;&nbsp;Christchurch&nbsp;&nbsp;·&nbsp;&nbsp;Family Recipe
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-hero mx-auto max-w-2xl text-center font-serif font-normal tracking-tight text-stone text-balance-safe"
        >
          {brand.tagline}
        </h1>

        {/* Brand name */}
        <p className="mt-5 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-stone/30">
          {brand.name}
        </p>

        {/* Description */}
        <p className="mt-7 max-w-md text-center font-sans text-base font-medium leading-relaxed text-stone/65 sm:text-lg">
          Christchurch Agria potatoes fried in NZ beef tallow. The seasoning locked in after enough rounds with family and friends.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#why-tallow"
            className="inline-flex items-center justify-center rounded-full bg-honey px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-forest-deep shadow-glow transition-all hover:bg-honey-light hover:-translate-y-0.5"
          >
            Why tallow?
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full border border-stone/20 px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-stone/90 transition-all hover:border-stone/35 hover:bg-stone/[0.08] hover:-translate-y-0.5"
          >
            View products
          </a>
        </div>
      </div>

      <HeroWave />
    </section>
  );
}
