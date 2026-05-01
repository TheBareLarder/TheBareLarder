import { markets } from "@/content/site";

export function FindUs() {
  return (
    <section
      id="find-us"
      className="relative overflow-hidden bg-forest"
      aria-labelledby="find-us-heading"
    >
      <div className="relative mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <p className="section-eyebrow-light">Weekend markets</p>
        <h2
          id="find-us-heading"
          className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-stone sm:text-4xl"
        >
          Find us
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-lg font-medium text-stone/65">
          Planning to start at{" "}
          <span className="font-semibold text-stone/90">Lyttelton Farmers Market</span>{" "}
          and the{" "}
          <span className="font-semibold text-stone/90">Ferrymead Night Market</span>. Our stall dates are still TBC.
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {markets.map((m) => (
            <li key={m.id}>
              <div className="rounded-2xl bg-white p-8 shadow-lift sm:p-9">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-forest-mist px-3 py-1">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-forest-light">
                    Christchurch market
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-forest">{m.name}</h3>
                <p className="mt-3 font-sans leading-relaxed text-ink-muted">{m.detail}</p>
                {"infoHref" in m && m.infoHref ? (
                  <p className="mt-5">
                    <a
                      href={m.infoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.infoLabel} (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-forest transition-colors hover:text-honey-deep"
                    >
                      {m.infoLabel}
                      <span aria-hidden>→</span>
                    </a>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
