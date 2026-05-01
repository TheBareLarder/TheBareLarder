import { brand, navLinks, socialLinks } from "@/content/site";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-forest-deep text-stone">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest">
                <span className="font-serif text-xs font-normal tracking-[0.12em] text-stone/90">
                  BL
                </span>
              </span>
              <span className="font-serif text-lg tracking-[0.12em] text-stone">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs font-sans text-sm font-medium leading-relaxed text-stone/55">
              {brand.tagline} Christchurch-made tallow chips.
            </p>
          </div>

          {/* Site nav */}
          <div>
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-honey/70">
              Menu
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-medium text-stone/65 transition-colors hover:text-stone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / contact */}
          <div>
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-honey/70">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-medium text-stone/65 transition-colors hover:text-honey"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-2 border-t border-forest-mid/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm text-stone/35">
            © {year} {brand.name}. Made in Christchurch, New Zealand.
          </p>
          <p className="font-sans text-xs uppercase tracking-wider text-stone/25">
            NZ Food Safety Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
