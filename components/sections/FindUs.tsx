import { markets } from "@/content/site";

export function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-ink"
      aria-labelledby="find-us-heading"
    >
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <p className="section-eyebrow text-cream">WEEKEND MARKETS</p>
        <h2
          id="find-us-heading"
          className="text-display text-cream mt-2 mb-12"
        >
          FIND US
        </h2>

        <ul className="grid gap-5 sm:grid-cols-2">
          {markets.map((m) => (
            <li key={m.id}>
              <div className="border border-cream/15 p-9 bg-cream/[0.03] flex flex-col gap-3 h-full">
                <span className="font-sans text-[10px] font-extrabold tracking-[0.22em] uppercase text-cream/35 border border-cream/15 px-2.5 py-1 self-start">
                  Christchurch
                </span>
                <h3 className="font-display text-[32px] tracking-[0.03em] text-cream leading-tight">
                  {m.name}
                </h3>
                <p className="font-sans text-[12px] font-bold tracking-[0.18em] uppercase text-cream/38">
                  {m.schedule}
                </p>
                <p className="font-sans text-[15px] font-medium leading-relaxed text-cream/55 flex-1">
                  {m.detail}
                </p>
                {"infoHref" in m && m.infoHref ? (
                  <a
                    href={m.infoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.infoLabel} (opens in a new tab)`}
                    className="font-sans text-[11px] font-extrabold tracking-[0.18em] uppercase text-cream/65 hover:text-cream transition-colors mt-2 inline-flex items-center gap-1.5"
                  >
                    {m.infoLabel} →
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        {/* Facebook follow CTA */}
        <div className="mt-5 border border-cream/15 p-8 sm:p-9 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <p className="font-display text-[30px] tracking-[0.04em] text-cream leading-none">
              FOLLOW FOR STALL DATES
            </p>
            <p className="font-sans text-[14px] font-medium text-cream/40 mt-2">
              We announce our dates on Facebook as they&apos;re confirmed.
            </p>
          </div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] font-extrabold tracking-[0.2em] uppercase text-ink bg-cream px-7 py-4 border-2 border-cream shrink-0 hover:opacity-90 transition-opacity"
          >
            Find Us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
