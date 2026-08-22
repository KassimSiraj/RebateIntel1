import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KMS Signal" },
      {
        name: "description",
        content:
          "KMS Signal is an AI visibility optimization company focused on commercial solar: research-driven, technical, and measurement-led.",
      },
      { property: "og:title", content: "About — KMS Signal" },
      {
        property: "og:description",
        content:
          "Why KMS Signal exists, how we work, and what we will and won't claim about AI visibility.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Research first",
    body: "We test real buyer-intent queries before we recommend anything, and we keep testing after the work ships.",
  },
  {
    title: "Technical, but understandable",
    body: "The work is technical. The reporting isn't — you should always know what changed and why it mattered.",
  },
  {
    title: "Honest about limits",
    body: "AI systems don't publish their logic. We improve the signals we can influence and measure the outcome; we don't promise rankings.",
  },
  {
    title: "One focused market",
    body: "Commercial solar first. Depth in one market beats shallow coverage of many.",
  },
];

function AboutPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">About</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">
            AI visibility optimization, built for commercial solar.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            KMS Signal exists because the way commercial buyers find providers has changed. Buyers
            now ask AI-powered search and recommendation systems who they should consider — and many
            capable commercial solar companies are not consistently discovered, understood, or
            represented in those answers.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Our work is to examine and improve the signals behind that visibility: technical
            accessibility, entity clarity, commercial and geographic relevance, evidence, and
            external corroboration — then measure what changes across relevant buyer-intent queries.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="How we work" title="Principles that shape every engagement." />
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="The company" title="Independent, focused, and small by design." />
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              KMS Signal is a specialist practice rather than a full-service agency. We take on a
              limited number of commercial solar engagements at a time so that each one gets real
              research, real implementation, and continuous monitoring.
            </p>
            <p>
              Every engagement starts the same way: establish the baseline, identify the gaps that
              matter, improve them in priority order, and keep measuring. Nothing about that process
              depends on buzzwords or guarantees.
            </p>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
