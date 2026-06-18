export function About() {
  return (
    <section
      id="about"
      className="bg-kraft-warm"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <p className="section-eyebrow text-ink">OUR STORY</p>
        <h2 id="about-heading" className="text-display text-ink mt-2">
          FROM OUR KITCHEN
          <br className="hidden sm:inline" />
          TO THE STALL
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[3fr_2fr] lg:gap-16 items-start">
          {/* Story copy */}
          <div>
            <div className="flex flex-col gap-5">
              <p className="font-sans text-[17px] font-medium leading-[1.72] text-ink-mid">
                Tauros started in our Christchurch kitchen. Fed up with boring
                seed oils , we went back to what worked: potatos fried in proper
                beef fat, finished with sea salt.
              </p>
              <p className="font-sans text-[17px] font-medium leading-[1.72] text-ink-mid">
                The cook time and the seasoning only settled once we had run
                enough bags past family and friends. We were chasing a clear
                flavour and a crunch we could repeat.
              </p>
              <p className="font-sans text-[17px] font-medium leading-[1.72] text-ink-mid">
                The homemade energy matters to us, but so does the paperwork —
                everything is prepared to meet New Zealand food safety
                standards.
              </p>
            </div>
            <blockquote className="mt-8 pl-5 border-l-[3px] border-ink font-sans text-[19px] font-bold leading-snug text-ink">
              Small batches from Christchurch. Three ingredients. No shortcuts.
            </blockquote>
          </div>

          {/* Info panels */}
          <div className="flex flex-col gap-4">
            <div className="border-2 border-ink p-8 bg-cream">
              <p className="section-eyebrow text-ink mb-2">MADE IN</p>
              <p className="font-display text-[44px] tracking-[0.03em] text-ink leading-none">
                NEW
                <br />
                ZEALAND
              </p>
              <p className="font-sans text-[12px] font-semibold tracking-[0.12em] uppercase text-ink/45 mt-3.5">
                Christchurch · Est. 2026
              </p>
            </div>
            <div className="border-2 border-ink p-8 bg-cream">
              <p className="section-eyebrow text-ink mb-2">CONSUME WITHIN</p>
              <p className="font-display text-[44px] tracking-[0.03em] text-ink leading-none">
                5 DAYS
                <br />
                OF OPENING
              </p>
              <p className="font-sans text-[12px] font-semibold tracking-[0.12em] uppercase text-ink/45 mt-3.5">
                No preservatives. Keep it fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
