import { NutritionInfo } from "@/components/sections/NutritionInfo";

export function ThreeIngredients() {
  return (
    <section
      id="ingredients"
      className="bg-ink py-[72px] px-5 sm:px-8 lg:px-10"
      aria-labelledby="ingredients-heading"
    >
      <div className="mx-auto max-w-content text-center">
        <p className="font-display text-[13px] tracking-[0.45em] text-cream/28 mb-2.5">
          — WHAT&apos;S INSIDE —
        </p>
        <h2
          id="ingredients-heading"
          className="font-display text-[clamp(48px,8vw,84px)] tracking-[0.03em] text-cream leading-none"
        >
          ONLY 3 INGREDIENTS
        </h2>
        <p className="font-sans text-[clamp(13px,1.8vw,17px)] font-bold tracking-[0.3em] uppercase text-cream/55 mt-5">
          Potatos · Beef Tallow · Sea Salt
        </p>
        <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/20 mt-2">
          Allergens: None
        </p>

        <NutritionInfo />
      </div>
    </section>
  );
}
