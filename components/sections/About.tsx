export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-warm"
      aria-labelledby="about-heading"
    >
      <div className="relative mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <p className="section-eyebrow">Our story</p>
        <h2
          id="about-heading"
          className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-forest sm:text-4xl lg:text-5xl"
        >
          From our kitchen
          <br className="hidden sm:inline" /> to the weekend stall
        </h2>

        <p className="text-display-hook mt-8 max-w-4xl text-balance-safe">
          Home-batch energy, food done properly.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
          {/* Story copy */}
          <div className="space-y-5 font-sans text-lg font-medium leading-relaxed text-ink-soft sm:text-xl">
            <p>
              Bare Larder started at home: pots on, labels written at the table,
              a short list of ingredients you can point to. Same energy we want
              when we load the car and head out to markets.
            </p>
            <p>
              The seasoning and the cook time only settled once we had run
              enough bags past family and friends. We were chasing a clear
              flavour and a texture we could repeat, not a clever line on a
              packet.
            </p>
            <p>
              The homemade vibe matters to us, but so does the paperwork —
              everything is prepared to meet New Zealand food safety standards.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <blockquote className="mt-10 border-l-4 border-honey pl-6 font-sans text-xl font-semibold leading-relaxed text-forest sm:text-2xl">
          Small batches from Christchurch. Messy in the best way, never
          anonymous.
        </blockquote>
      </div>
    </section>
  );
}
