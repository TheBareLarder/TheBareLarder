import { nutrition } from "@/content/site";

export function NutritionInfo() {
  return (
    <div className="mt-14 mx-auto max-w-md border-2 border-cream/80 bg-cream/[0.03] text-left">
      <div className="border-b-2 border-cream/80 px-5 py-4">
        <h3 className="font-display text-[28px] tracking-[0.08em] text-cream leading-none">
          NUTRITION INFORMATION
        </h3>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 font-sans text-[11px] font-bold tracking-[0.12em] uppercase text-cream/70">
          <dt>Servings per package</dt>
          <dd className="text-right">{nutrition.servingsPerPackage}</dd>
          <dt>Serving size</dt>
          <dd className="text-right">{nutrition.servingSize}</dd>
        </dl>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse font-sans text-[11px] font-bold tracking-[0.08em] uppercase text-cream/80">
          <thead>
            <tr className="border-b border-cream/30">
              <th scope="col" className="px-5 py-3 text-left font-extrabold">
                &nbsp;
              </th>
              <th scope="col" className="px-3 py-3 text-right font-extrabold">
                Per serving
              </th>
              <th scope="col" className="px-5 py-3 text-right font-extrabold">
                Per 100 g
              </th>
            </tr>
          </thead>
          <tbody>
            {nutrition.rows.map((row) => (
              <tr key={row.nutrient} className="border-b border-cream/15 last:border-b-0">
                <th
                  scope="row"
                  className={`px-5 py-2.5 text-left font-extrabold ${"indent" in row && row.indent ? "pl-8 font-bold text-cream/55" : ""}`}
                >
                  {row.nutrient}
                </th>
                <td className="px-3 py-2.5 text-right">{row.perServing}</td>
                <td className="px-5 py-2.5 text-right">{row.per100g}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
