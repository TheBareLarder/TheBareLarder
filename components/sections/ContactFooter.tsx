import { brand, navLinks, socialLinks } from "@/content/site";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink-deep text-cream">
      <div className="mx-auto max-w-content px-5 py-[72px] sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 pb-14 border-b border-cream/[0.08]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-[40px] tracking-[0.06em] text-cream leading-none mb-3">
              {brand.name.toUpperCase()}
            </p>
            <p className="font-sans text-[13px] font-medium leading-relaxed text-cream/38 max-w-[200px]">
              {brand.tagline} Three ingredients. Proudly made in Christchurch,
              New Zealand.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-[10px] font-extrabold tracking-[0.25em] uppercase text-cream/22 mb-5">
              Menu
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-[13px] font-medium text-cream/42 hover:text-cream/90 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-sans text-[10px] font-extrabold tracking-[0.25em] uppercase text-cream/22 mb-5">
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[13px] font-medium text-cream/42 hover:text-cream/90 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap gap-4 justify-between items-center pt-6">
          <p className="font-sans text-[12px] text-cream/20">
            © {year} Tauros. Made in Christchurch, New Zealand.
          </p>
          <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-cream/14">
            NZ Food Safety Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
