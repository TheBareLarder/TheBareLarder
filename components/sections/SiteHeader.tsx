import { brand, navLinks } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/[0.08] bg-stone/80 shadow-[0_1px_0_rgba(15,35,24,0.06)] backdrop-blur-2xl supports-[backdrop-filter]:bg-stone/65">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label={`${brand.name} — go to top`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest sm:h-9 sm:w-9">
            <span className="font-serif text-[0.5625rem] font-normal tracking-[0.12em] text-stone/90 sm:text-[0.625rem]">
              BL
            </span>
          </span>
          <span className="hidden font-serif text-sm font-normal tracking-[0.14em] text-forest sm:inline">
            {brand.name}
          </span>
        </a>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1 rounded-full bg-white/60 px-1.5 py-1 font-sans text-[0.8125rem] font-medium text-ink-muted shadow-card ring-1 ring-forest/[0.07] sm:px-2 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-3 py-1.5 transition-colors hover:bg-forest hover:text-stone"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
