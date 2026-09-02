import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  Brain,
  Fingerprint,
  Quote,
  Radar,
  ScanSearch,
  Wrench,
  Activity,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ResearchStory } from "@/components/site/ResearchStory";
import { ResearchVisual } from "@/components/site/ResearchVisual";
import { AIFan } from "@/components/site/AIFan";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KMS Signal — AI Visibility for Commercial Solar" },
      {
        name: "description",
        content:
          "KMS Signal helps commercial solar companies improve how they are discovered, understood, and represented across AI-powered search and recommendation systems.",
      },
      { property: "og:title", content: "KMS Signal — AI Visibility for Commercial Solar" },
      {
        property: "og:description",
        content:
          "AI visibility optimization for commercial solar companies: discoverability, understanding, evidence, and differentiation.",
      },
      { property: "og:url", content: "https://kmssignal.com/" },
    ],
    links: [{ rel: "canonical", href: "https://kmssignal.com/" }],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Search,
    title: "Discoverability",
    body: "Technical accessibility and machine-readable information, so AI systems can reach and parse what you publish.",
  },
  {
    icon: Brain,
    title: "Understanding",
    body: "Entity clarity, commercial relevance, and geographic precision, so your company is interpreted correctly.",
  },
  {
    icon: Quote,
    title: "Evidence",
    body: "Topical depth, project evidence, and external corroboration that supports what you claim.",
  },
  {
    icon: Fingerprint,
    title: "Differentiation",
    body: "Distinctive attributes and actual AI visibility, so you are distinguishable from similar providers.",
  },
];

const steps = [
  {
    n: "01",
    icon: Radar,
    title: "Audit",
    body: "After the engagement begins, KMS Signal establishes the company's current AI visibility and examines its website and broader online presence.",
  },
  {
    n: "02",
    icon: ScanSearch,
    title: "Identify",
    body: "We identify the highest-impact gaps affecting how the company is discovered, understood, and represented.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Optimize",
    body: "KMS Signal implements the highest-priority improvements across the relevant technical, content, entity, evidence, and external areas.",
  },
  {
    n: "04",
    icon: Activity,
    title: "Monitor",
    body: "We test relevant buyer-intent queries, monitor visibility and competitors, and use the results to guide further improvement.",
  },
];

const audience = [
  "Commercial solar installers",
  "Commercial EPC companies",
  "Industrial solar providers",
  "Solar + storage providers serving businesses",
  "Companies pursuing commercial projects",
];

const deliverables = [
  {
    title: "Visibility Baseline",
    body: "Understand the company's current visibility and identify gaps.",
  },
  {
    title: "Optimization",
    body: "Implement the highest-impact improvements.",
  },
  {
    title: "Ongoing Monitoring",
    body: "Measure changes in AI visibility and continue improving based on the findings.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-backdrop" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[420px] brand-glow" />
        <div className="container-page relative py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7 fade-up">
              <div className="eyebrow mb-5">AI Visibility Optimization</div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance">
                Get Your Commercial Solar Company Seen in AI Search.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                KMS Signal helps commercial solar companies improve how they are discovered,
                understood, and represented across AI-powered search and recommendation systems.
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
            <div className="lg:col-span-5 lg:translate-x-6">
              <AIFan />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="The problem"
              title="Your customers are asking AI who they should consider."
            />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center gap-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Commercial buyers increasingly use AI-powered search and recommendation systems to
              research companies, compare providers, and find solutions. The question is no longer
              whether you have a website.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {["Discover you", "Understand you", "Distinguish you", "Represent you accurately"].map(
                (s, i) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                      {s}
                    </span>
                    {i < 3 && <ArrowRight className="h-3.5 w-3.5 text-brand" />}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <SectionHeader
          eyebrow="The KMS Signal solution"
          title="We optimize the signals behind your AI visibility."
          description="KMS Signal examines and improves the information and signals that influence how a company can be discovered, understood, represented, and surfaced across AI-powered search."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-background p-7 card-lift">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section surface>
        <SectionHeader
          eyebrow="Methodology"
          title="One continuous cycle, not four separate products."
          description="Audit → Identify → Optimize → Monitor → Improve."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-background p-7 card-lift">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-brand">{s.n}</span>
                  <s.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/methodology"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand"
          >
            See the full methodology <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      {/* Research */}
      <Section id="research">
        <SectionHeader
          eyebrow="Research"
          title="We research how AI surfaces commercial solar companies."
          description="KMS Signal conducted research into the Arizona commercial solar market using 20 buyer-intent queries in Gemini to observe which companies were surfaced most frequently, and what characteristics appeared among frequently mentioned companies."
        />
        <div className="mt-14">
          <ResearchStory />
          <div className="mt-10">
            <ResearchVisual />
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand"
          >
            Read the research <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      {/* Who it's for */}
      <Section surface>
        <SectionHeader eyebrow="Who it's for" title="Built for commercial solar companies." />
        <ul className="mt-10 flex flex-wrap gap-3">
          {audience.map((a) => (
            <li
              key={a}
              className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>

      {/* What the client gets */}
      <Section>
        <SectionHeader
          eyebrow="What you get"
          title="One continuous AI visibility optimization service."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {deliverables.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-background p-8 card-lift">
                <div className="font-mono text-xs font-semibold text-brand">0{i + 1}</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          The initial visibility audit is part of the engagement — it is not offered as a standalone
          or free public service.
        </p>
      </Section>

      <FinalCTA />
    </>
  );
}
