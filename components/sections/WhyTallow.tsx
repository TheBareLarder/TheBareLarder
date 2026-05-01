import Image from "next/image";
import tallowSaltSrc from "@/components/resources/Tallow&Salt.png";

export function WhyTallow() {
  return (
    <section
      id="why-tallow"
      className="relative overflow-hidden bg-stone"
      aria-labelledby="why-tallow-heading"
    >
      {/* Background image — CSS-masked so it is transparent at the top and
          fully visible at the bottom, letting the stone section bleed into it */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to top, black 35%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 35%, transparent 80%)",
        }}
        aria-hidden
      >
        <Image
          src={tallowSaltSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
        {/* Warm depth vignette over the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
      </div>

      {/* Content sits above the transparent zone of the mask */}
      <div className="relative z-[1] mx-auto max-w-content px-5 pb-44 pt-20 sm:px-8 sm:pb-56 sm:pt-24 lg:px-10 lg:pb-72 lg:pt-28">
        <p className="section-eyebrow">Liquid gold</p>
        <h2
          id="why-tallow-heading"
          className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-forest sm:text-4xl lg:text-5xl"
        >
          Why tallow?
        </h2>
        <div className="mt-8 max-w-xl space-y-5 font-sans text-lg font-medium leading-relaxed text-ink-soft sm:text-xl">
          <p>
            Tallow is rendered beef fat. It gets ripping hot, carries heat
            evenly, and browns an Agria chip the way you actually want; crisp at
            the edges, proper savour underneath.
          </p>
        </div>
      </div>
    </section>
  );
}
