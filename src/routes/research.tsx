import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { ResearchStory } from "@/components/site/ResearchStory";
import { ResearchVisual } from "@/components/site/ResearchVisual";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Arizona Commercial Solar AI Visibility Research — KMS Signal" },
      {
        name: "description",
        content:
          "KMS Signal research into the Arizona commercial solar market: 20 buyer-intent queries in Gemini, and the characteristics shared by frequently surfaced companies.",
      },
      {
        property: "og:title",
        content: "Arizona Commercial Solar AI Visibility Research — KMS Signal",
      },
      {
        property: "og:description",
        content:
          "What we observed about how AI-powered search surfaces commercial solar companies in Arizona.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const observations = [
  {
    title: "Commercial specificity",
    body: "Companies that clearly presented commercial and industrial work — rather than general or residential language — appeared more often in commercial buyer queries.",
  },
  {
    title: "Detailed project evidence",
    body: "Named projects with sectors, system details, and outcomes gave AI systems concrete material to reference.",
  },
  {
    title: "Geographic information",
    body: "Explicit service areas and regional coverage aligned companies with location-specific queries.",
  },
  {
    title: "Distinctive attributes",
    body: "Certifications, specialisms, and capabilities made some companies easier to distinguish from otherwise similar providers.",
  },
  {
    title: "External corroboration",
    body: "Third-party mentions and directories that repeated the same facts appeared alongside frequently surfaced companies.",
  },
];

function ResearchPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Research</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">
            We research how AI surfaces commercial solar companies.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            KMS Signal conducted research into the Arizona commercial solar market using 20
            buyer-intent queries in Gemini, observing which companies were surfaced most frequently
            and what characteristics appeared among frequently mentioned companies.
          </p>
        </div>
      </Section>

      <Section surface>
        <SectionHeader eyebrow="The study" title="20 queries, one market, repeatable method." />
        <div className="mt-12">
          <ResearchStory />
          <div className="mt-10"><ResearchVisual /></div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Observations" title="What appeared among frequently surfaced companies." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {observations.map((o, i) => (
            <div key={o.title} className="rounded-2xl border border-border bg-background p-8 card-lift">
              <div className="font-mono text-xs font-semibold text-brand">0{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{o.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 md:p-8">
          <h2 className="text-sm font-semibold text-foreground">How to read this research</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            These are observations from a limited sample on one platform in one market. They are not
            official ranking factors, and KMS Signal does not claim to have reverse-engineered any AI
            platform or to control what AI systems recommend. We publish this work to show how we
            think about the market, and because it informs where we look first during an engagement.
          </p>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
