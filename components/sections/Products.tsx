import { products } from "@/content/site";

export function Products() {
  return (
    <section
      id="products"
      className="bg-cream"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <p className="section-eyebrow text-ink">WHAT WE MAKE</p>
        <div className="mt-2 flex flex-wrap gap-4 items-end justify-between mb-12">
          <h2
            id="products-heading"
            className="text-display text-ink"
          >
            PRODUCTS
          </h2>
          <p className="max-w-xs font-sans text-[14px] font-medium text-ink/50">
            One flavour. Made properly. More when they earn their spot.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {products.map((product) => (
            <li key={product.id}>
              <article className="border-2 border-ink p-9 bg-cream flex flex-col gap-4 h-full">
                <span className="font-sans text-[10px] font-extrabold tracking-[0.22em] uppercase text-cream bg-ink px-3 py-1 self-start">
                  {product.badge}
                </span>
                <div>
                  <p className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-ink/35 mb-1.5">
                    {product.size}
                  </p>
                  <h3 className="font-display text-[38px] tracking-[0.03em] text-ink leading-none">
                    {product.title.toUpperCase()}
                  </h3>
                </div>
                <p className="font-sans text-[15px] font-medium leading-relaxed text-ink/60 flex-1">
                  {product.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
