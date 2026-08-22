import { createFileRoute } from "@tanstack/react-router";
import { Radar, ScanSearch, Wrench, Activity } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — KMS Signal" },
      {
        name: "description",
        content:
          "Audit, identify, optimize, monitor, improve: how KMS Signal runs AI visibility optimization for commercial solar companies.",
      },
      { property: "og:title", content: "Methodology — KMS Signal" },
      {
        property: "og:description",
        content: "A single continuous cycle: audit → identify → optimize → monitor → improve.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MethodologyPage,
});

const steps = [
  {
    n: "01",
    icon: Radar,
    title: "Audit",
    body: "After the engagement begins, KMS Signal establishes the company's current AI visibility and examines its website and broader online presence.",
    detail: [
      "Baseline visibility across relevant buyer-intent queries",
      "Technical accessibility and machine-readable information review",
      "Entity, content, and evidence review across the open web",
    ],
  },
  {
    n: "02",
    icon: ScanSearch,
    title: "Identify",
    body: "We identify the highest-impact gaps affecting how the company is discovered, understood, and represented.",
    detail: [
      "Gaps ranked by expected impact and effort",
      "Comparison against companies surfaced for the same queries",
      "A prioritised working plan",
    ],
  },
  {
    n: "03",
    icon: Wrench,
    title: "Optimize",
    body: "KMS Signal implements the highest-priority improvements across the relevant technical, content, entity, evidence, and external areas.",
    detail: [
      "Technical and structured-data improvements",
      "Commercial, geographic, and topical content work",
      "Entity consistency and external corroboration",
    ],
  },
  {
    n: "04",
    icon: Activity,
    title: "Monitor",
    body: "We test relevant buyer-intent queries, monitor visibility and competitors, and use the results to guide further improvement.",
    detail: [
      "Repeat query testing over time",
      "Competitor movement in the same query set",
      "Findings feed straight back into the next optimization round",
    ],
  },
];

function MethodologyPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Methodology</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">
            Audit → Identify → Optimize → Monitor → Improve
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            One continuous service. Each round of monitoring informs the next round of optimization,
            so visibility work compounds rather than ending at a report.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="space-y-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="grid gap-8 rounded-2xl border border-border bg-background p-6 md:grid-cols-12 md:p-10 card-lift"
            >
              <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-brand">{s.n}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <ul className="space-y-3">
                  {s.detail.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
