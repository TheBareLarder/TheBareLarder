import Image from "next/image";
import taurosLogoSrc from "@/components/resources/TaurosLogo.png";
import { brand, navLinks } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/[0.07]">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-10 h-14 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="inline-flex items-center shrink-0 transition-opacity hover:opacity-80"
          aria-label={`${brand.name} — go to top`}
        >
          <Image
            src={taurosLogoSrc}
            alt={brand.name}
            width={444}
            height={299}
            className="h-10 w-auto block"
            priority
          />
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-sans text-[10.5px] font-bold tracking-[0.2em] uppercase text-cream/45 px-3 py-2 transition-colors hover:text-cream/90"
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
