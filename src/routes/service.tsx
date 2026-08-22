import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "AI Visibility Optimization — KMS Signal" },
      {
        name: "description",
        content:
          "One continuous engagement that improves how a commercial solar company is discovered, understood, represented, and surfaced across AI-powered search.",
      },
      { property: "og:title", content: "AI Visibility Optimization — KMS Signal" },
      {
        property: "og:description",
        content:
          "Visibility baseline, optimization, and ongoing monitoring for commercial solar companies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicePage,
});

const areas = [
  {
    title: "Technical accessibility",
    body: "Crawlability, structure, and machine-readable information so AI systems can reach and parse your content.",
  },
  {
    title: "Entity clarity",
    body: "A consistent, unambiguous picture of who your company is across your site and the wider web.",
  },
  {
    title: "Commercial relevance",
    body: "Language and content that clearly reflect commercial and industrial work, not general residential messaging.",
  },
  {
    title: "Geographic precision",
    body: "Explicit service areas, metros, and regional coverage.",
  },
  {
    title: "Topical depth",
    body: "Substantive content on the questions commercial buyers actually ask.",
  },
  {
    title: "Project evidence",
    body: "Documented projects, sectors, system details, and outcomes that support your claims.",
  },
  {
    title: "External corroboration",
    body: "Third-party sources that confirm the same facts about your company.",
  },
  {
    title: "Distinctive attributes",
    body: "Certifications, specialisms, and capabilities that make you distinguishable.",
  },
];

const phases = [
  {
    title: "Visibility Baseline",
    body: "We establish current AI visibility and examine your website and broader online presence to identify the gaps that matter most. This initial audit is part of the engagement.",
  },
  {
    title: "Optimization",
    body: "We implement the highest-priority improvements across the relevant technical, content, entity, evidence, and external areas.",
  },
  {
    title: "Ongoing Monitoring",
    body: "We test buyer-intent queries, monitor visibility and competitors, and use the results to guide further improvement.",
  },
];

function ServicePage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Core service</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">
            AI Visibility Optimization
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            One continuous engagement, not a menu of products. KMS Signal examines and improves the
            information and signals that influence how your commercial solar company is discovered,
            understood, represented, and surfaced across AI-powered search and recommendation
            systems.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The engagement begins with an initial visibility audit. That audit is part of the work —
            it is not sold or promoted as a standalone or free offer.
          </p>
          <div className="mt-9">
            <Link
              to="/book"
              className="liquid-glass inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeader
          eyebrow="How the engagement runs"
          title="Baseline, optimize, monitor — continuously."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phases.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-background p-8 card-lift">
              <div className="font-mono text-xs font-semibold text-brand">0{i + 1}</div>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="What we work on"
          title="The signal areas we examine and improve."
          description="Which areas take priority depends on what the baseline finds. We work on the gaps with the highest expected impact first."
        />
        <div className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {areas.map((a) => (
            <div key={a.title} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          AI systems do not publish their ranking logic, and no one can guarantee placement in an AI
          answer. Our work is to make your company as discoverable, understandable, well-evidenced,
          and distinguishable as possible — and to measure what changes.
        </p>
      </Section>

      <FinalCTA />
    </>
  );
}
