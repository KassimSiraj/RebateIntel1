import { useEffect, useRef, useState } from "react";

const characteristics = [
  {
    label: "Commercial specificity",
    note: "Clear commercial-and-industrial focus rather than general residential language.",
    weight: 92,
  },
  {
    label: "Detailed project evidence",
    note: "Named projects, system sizes, sectors, and outcomes published on-site.",
    weight: 84,
  },
  {
    label: "Geographic information",
    note: "Explicit service areas, metros, and regional coverage.",
    weight: 76,
  },
  {
    label: "Distinctive attributes",
    note: "Certifications, specialisms, and capabilities that separate one provider from another.",
    weight: 68,
  },
  {
    label: "External corroboration",
    note: "Third-party mentions, directories, and press that confirm the same facts.",
    weight: 61,
  },
];

export function ResearchVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Query grid */}
      <div className="lg:col-span-4">
        <div className="rounded-2xl border border-border bg-background p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Study design
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            20 buyer-intent queries, run in Gemini, focused on the Arizona commercial solar market.
          </p>
          <div className="mt-6 grid grid-cols-5 gap-2" aria-hidden>
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                style={{ transitionDelay: `${i * 55}ms` }}
                className={`h-8 rounded-md border transition-all duration-500 ${
                  active
                    ? "scale-100 border-brand/40 bg-brand/15 opacity-100"
                    : "scale-90 border-border bg-surface opacity-40"
                }`}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            We observed which companies were surfaced most frequently, then looked for shared
            characteristics. These are observations, not published ranking factors.
          </p>
        </div>
      </div>

      {/* Characteristic bars */}
      <div className="lg:col-span-8">
        <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Characteristics observed among frequently mentioned companies
          </div>
          <div className="mt-6 space-y-6">
            {characteristics.map((c, i) => (
              <div key={c.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-foreground">{c.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {i === 0 ? "Most consistent" : i === characteristics.length - 1 ? "Least consistent" : ""}
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface">
                  <div
                    className="h-full rounded-full bg-brand transition-[width] duration-1000 ease-out"
                    style={{
                      width: active ? `${c.weight}%` : "0%",
                      transitionDelay: `${300 + i * 140}ms`,
                    }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Relative consistency across the 20 queries — a qualitative reading of the sample, not a
            measure of any AI system's internal weighting.
          </p>
        </div>
      </div>
    </div>
  );
}
