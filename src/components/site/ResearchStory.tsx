import { useEffect, useMemo, useRef, useState } from "react";

const platforms = [
  { name: "ChatGPT", domain: "openai.com" },
  { name: "Gemini", domain: "gemini.google.com" },
  { name: "Perplexity", domain: "perplexity.ai" },
  { name: "Claude", domain: "claude.ai" },
  { name: "Copilot", domain: "microsoft.com" },
];

/** Decorative logo tiles that sit behind the clear glass panel. */
const tiles = [
  { i: 0, size: 96, style: { top: "-6%", left: "-4%" } },
  { i: 1, size: 132, style: { top: "26%", right: "-7%" } },
  { i: 2, size: 74, style: { bottom: "-5%", left: "16%" } },
  { i: 3, size: 88, style: { top: "58%", left: "-5%" } },
  { i: 4, size: 64, style: { top: "-4%", right: "22%" } },
];

const companies = ["Provider A", "Provider B", "Provider C", "Provider D", "Provider E"] as const;
type Company = (typeof companies)[number];

type Query = { text: string; results: Company[] };

const queries: Query[] = [
  { text: "best commercial solar installers in Arizona", results: ["Provider A", "Provider B", "Provider C"] },
  { text: "who installs rooftop solar for warehouses in Phoenix", results: ["Provider A", "Provider D"] },
  { text: "commercial solar EPC companies Tucson", results: ["Provider B", "Provider A", "Provider E"] },
  { text: "solar plus storage for manufacturing facilities Arizona", results: ["Provider A", "Provider C"] },
  { text: "top rated industrial solar contractors Phoenix metro", results: ["Provider B", "Provider A", "Provider D"] },
  { text: "who can install 1 MW solar for a distribution center", results: ["Provider A", "Provider C", "Provider E"] },
  { text: "commercial solar companies with cold storage experience", results: ["Provider C", "Provider A"] },
  { text: "solar carport installers for Arizona office parks", results: ["Provider D", "Provider B"] },
  { text: "which solar companies serve Arizona school districts", results: ["Provider B", "Provider A", "Provider C"] },
  { text: "commercial solar provider with NABCEP certified crew", results: ["Provider A", "Provider E"] },
  { text: "best solar company for Arizona agricultural operations", results: ["Provider C", "Provider A", "Provider D"] },
  { text: "commercial solar O&M providers in Arizona", results: ["Provider A", "Provider B"] },
  { text: "solar developers for Arizona municipal buildings", results: ["Provider B", "Provider E", "Provider A"] },
  { text: "who handles interconnection for commercial solar in AZ", results: ["Provider A", "Provider C"] },
  { text: "commercial solar companies experienced with APS and SRP", results: ["Provider A", "Provider B", "Provider D"] },
  { text: "solar contractors for Arizona data centers", results: ["Provider C", "Provider A"] },
  { text: "commercial solar financing partners Arizona", results: ["Provider E", "Provider A", "Provider B"] },
  { text: "who installs bifacial modules on commercial roofs in AZ", results: ["Provider A", "Provider C", "Provider D"] },
  { text: "commercial solar companies serving all of Arizona", results: ["Provider A", "Provider B", "Provider C"] },
  { text: "which solar company should a Phoenix business shortlist", results: ["Provider A", "Provider B"] },
];

const TYPE_MS = 26;
const HOLD_MS = 900;

/**
 * Tracks visibility continuously so the typing loop can pause while the panel is
 * off-screen — an always-running timer causes scroll jank elsewhere on the page.
 */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export function ResearchStory() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const cursor = useRef(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setIndex(queries.length - 1);
      setTyped(queries[queries.length - 1].text.length);
      setShowResults(true);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let i = cursor.current;

    const runQuery = () => {
      cursor.current = i;
      if (cancelled) return;
      setIndex(i);
      setShowResults(false);
      setTyped(0);
      const text = queries[i].text;
      let c = 0;
      const typeNext = () => {
        if (cancelled) return;
        c += 1;
        setTyped(c);
        if (c < text.length) {
          timer = setTimeout(typeNext, TYPE_MS);
        } else {
          timer = setTimeout(() => {
            if (cancelled) return;
            setShowResults(true);
            timer = setTimeout(() => {
              i = (i + 1) % queries.length;
              runQuery();
            }, HOLD_MS + 700);
          }, 260);
        }
      };
      timer = setTimeout(typeNext, 220);
    };

    runQuery();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [inView]);

  const current = queries[index];

  /** Cumulative mentions across the queries observed so far. */
  const mentions = useMemo(() => {
    const counts = new Map<Company, number>(companies.map((c) => [c, 0]));
    const upTo = showResults ? index : index - 1;
    for (let q = 0; q <= upTo; q++) {
      for (const c of queries[q].results) counts.set(c, (counts.get(c) ?? 0) + 1);
    }
    return counts;
  }, [index, showResults]);

  const max = Math.max(1, ...companies.map((c) => mentions.get(c) ?? 0));
  const activeSet = new Set(showResults ? current.results : []);

  return (
    <div ref={ref} className="relative overflow-x-clip">
      {/* Logo tiles behind the glass */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-8 brand-glow rounded-[3rem] blur-2xl" />
        {tiles.map((t) => {
          const p = platforms[t.i];
          return (
            <div
              key={p.name}
              className="logo-drift absolute"
              style={{ ...t.style, animationDelay: `${t.i * 900}ms`, animationDuration: `${10 + t.i}s` }}
            >
              <div
                className="flex items-center justify-center rounded-[1.6rem] border border-brand/25 bg-brand/15 shadow-[0_18px_44px_-22px_oklch(0.7_0.14_84/0.7)]"
                style={{ width: t.size, height: t.size }}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={64}
                  height={64}
                  style={{ width: t.size * 0.44, height: t.size * 0.44 }}
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Clear glass panel */}
      <div className="glass-panel relative p-6 md:p-10">
        <span aria-hidden className="glass-panel-edge" />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Query terminal */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Buyer-intent query
              </div>
              <div className="flex items-baseline gap-1.5 font-mono text-sm text-muted-foreground">
                <span className="text-xl font-semibold tabular-nums text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>/ 20</span>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-border/70 bg-background/70 p-5 md:p-6">
              <p className="min-h-[3.5rem] font-mono text-sm leading-relaxed text-foreground md:min-h-[3rem] md:text-base">
                <span className="mr-1.5 text-brand">›</span>
                {current.text.slice(0, typed)}
                <span aria-hidden className="type-caret ml-0.5" />
              </p>

              <div
                className="mt-5 border-t border-border/70 pt-4 transition-opacity duration-500"
                style={{ opacity: showResults ? 1 : 0.25 }}
              >
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Companies surfaced
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.results.map((c, i) => (
                    <span
                      key={c}
                      style={{ transitionDelay: `${i * 90}ms` }}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-500 ${
                        showResults
                          ? "border-brand/45 bg-brand/15 text-foreground opacity-100"
                          : "border-border bg-surface text-muted-foreground opacity-0"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-10 gap-1.5" aria-hidden>
              {queries.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-colors duration-500 ${
                    i <= index ? "bg-brand/70" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              20 buyer-intent queries, run in Gemini across the Arizona commercial solar market.
            </p>
          </div>

          {/* Pattern column */}
          <div className="relative lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Repeated mentions
            </div>

            <div className="relative mt-5">
              {/* thin connector lines between repeated mentions */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-8"
                viewBox="0 0 32 260"
                preserveAspectRatio="none"
              >
                {companies.map((c, i) => {
                  if (!activeSet.has(c)) return null;
                  const y = 22 + i * 52;
                  return (
                    <path
                      key={`${index}-${c}`}
                      d={`M2 130 C 16 130, 16 ${y}, 30 ${y}`}
                      className="connector-line"
                      fill="none"
                      stroke="var(--color-brand)"
                      strokeOpacity="0.55"
                      strokeWidth="1"
                    />
                  );
                })}
                <circle cx="2" cy="130" r="2.5" fill="var(--color-brand)" fillOpacity="0.7" />
              </svg>

              <ul className="space-y-4 pl-10">
                {companies.map((c) => {
                  const count = mentions.get(c) ?? 0;
                  const active = activeSet.has(c);
                  return (
                    <li key={c} className="h-[52px]">
                      <div className="flex items-baseline justify-between gap-3">
                        <span
                          className={`text-sm font-medium transition-colors duration-300 ${
                            active ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          <span
                            className={`rounded-md px-1.5 py-0.5 transition-colors duration-500 ${
                              active ? "bg-brand/20" : "bg-transparent"
                            }`}
                          >
                            {c}
                          </span>
                        </span>
                        <span className="font-mono text-xs tabular-nums text-muted-foreground">
                          {count}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border/70">
                        <div
                          className="h-full rounded-full bg-brand transition-[width] duration-700 ease-out"
                          style={{ width: `${(count / max) * 100}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Company names are anonymised. Counts show how often the same providers reappeared —
              the pattern we then examine for shared characteristics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
