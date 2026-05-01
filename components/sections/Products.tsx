import { products } from "@/content/site";

export function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-stone"
      aria-labelledby="products-heading"
    >
      <div className="relative mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <p className="section-eyebrow">What we make</p>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="products-heading"
            className="font-serif text-3xl font-medium leading-tight tracking-tight text-forest sm:text-4xl"
          >
            Products
          </h2>
          <p className="max-w-xs font-sans text-base text-ink-muted sm:text-right">
            Two flavour profiles of tallow chips. More planned.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <article className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-forest/[0.07] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 font-sans text-[0.6875rem] font-semibold uppercase tracking-wide ${
                    product.badge === "Core range"
                      ? "bg-honey-glow text-forest ring-1 ring-honey/30"
                      : "bg-stone-warm text-ink-muted ring-1 ring-stone-border"
                  }`}
                >
                  {product.badge}
                </span>
                <h3 className="mt-5 font-serif text-xl font-medium text-forest">
                  {product.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-base leading-relaxed text-ink-muted">
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
