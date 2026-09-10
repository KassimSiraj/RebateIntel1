import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

const CANONICAL =
  "https://kmssignal.com/research/arizona-commercial-solar-ai-visibility";

const TITLE = "Arizona Commercial Solar AI Visibility Benchmark | KMS Signal";
const DESCRIPTION =
  "KMS Signal's observational benchmark of commercial solar company visibility across Arizona buyer-intent searches in Gemini.";

export const Route = createFileRoute(
  "/research_/arizona-commercial-solar-ai-visibility",
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "Arizona Commercial Solar AI Visibility Benchmark",
          description: DESCRIPTION,
          url: CANONICAL,
          creator: { "@type": "Organization", name: "KMS Signal" },
          measurementTechnique: "Gemini prompt testing",
          variableMeasured: "Number of tested prompts in which a company was mentioned",
        }),
      },
    ],
  }),
  component: BenchmarkPage,
});

const queryGroups = [
  {
    title: "General commercial solar",
    queries: [
      "P01 — Best commercial solar companies in Arizona",
      "P02 — Top commercial solar installers in Arizona",
      "P03 — Which companies provide commercial solar installation in Arizona?",
      "P04 — Who are the leading commercial solar contractors in Arizona?",
    ],
  },
  {
    title: "Phoenix commercial solar",
    queries: [
      "P05 — Best commercial solar companies in Phoenix, Arizona",
      "P06 — Who installs commercial solar for businesses in Phoenix?",
      "P07 — Best commercial solar installer for a business in Phoenix",
      "P08 — Which solar companies in Phoenix specialize in commercial projects?",
    ],
  },
  {
    title: "Commercial property types",
    queries: [
      "P09 — Best solar company for warehouses in Arizona",
      "P10 — Who installs rooftop solar for commercial buildings in Arizona?",
      "P11 — Best solar companies for manufacturing facilities in Arizona",
      "P12 — Who installs commercial solar carports in Arizona?",
    ],
  },
  {
    title: "Commercial solar services",
    queries: [
      "P13 — Best commercial solar EPC companies in Arizona",
      "P14 — Which Arizona solar companies provide turnkey commercial EPC services?",
      "P15 — Which companies handle engineering, procurement, and construction for commercial solar in Arizona?",
    ],
  },
  {
    title: "EPC and large-scale projects",
    queries: [
      "P16 — Best commercial solar companies in Arizona for large-scale projects",
      "P17 — What are the best commercial solar companies in Arizona and why?",
    ],
  },
  {
    title: "Reputation / consideration",
    queries: [
      "P18 — Which commercial solar companies should a business in Arizona consider?",
      "P20 — Which commercial solar companies in Arizona have the strongest reputation for commercial projects?",
    ],
  },
];

const ranking = [
  { rank: 1, company: "Sun Valley Solar Solutions", prompts: 18 },
  { rank: 2, company: "SunRenu Solar", prompts: 16 },
  { rank: 3, company: "Commercial Solar Arizona (CSA)", prompts: 15 },
  { rank: 4, company: "Solar Gain, Inc.", prompts: 14 },
  { rank: 5, company: "SOLON Corporation", prompts: 13 },
  { rank: 6, company: "American Solar & Roofing", prompts: 12 },
  { rank: 7, company: "Watt Masters", prompts: 11 },
  { rank: 8, company: "Elevation Solar", prompts: 9 },
  { rank: 9, company: "Rosendin Electric (Renewables)", prompts: 8 },
  { rank: 10, company: "Solar Topps", prompts: 7 },
];

const MAX_PROMPTS = 18;

const limitations = [
  "The research covers the specific prompts tested.",
  "The research used Gemini and does not represent every AI search or recommendation system.",
  "AI-generated responses can change.",
  "The research measures observed mentions and positions, not business quality or actual customer performance.",
  "Mention frequency should not be interpreted as a definitive ranking of the companies.",
  "The research does not establish causation between individual website signals and AI visibility.",
];

function BenchmarkPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">KMS Signal Research</div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
            Arizona Commercial Solar AI Visibility Benchmark
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            An observational study of how commercial solar companies in Arizona appeared
            across buyer-intent searches in Gemini.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              What We Studied
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              KMS Signal tested Gemini using commercial-solar buyer-intent queries focused
              on Arizona, including queries specific to Phoenix, commercial property types,
              and EPC services.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              The research examines which companies were surfaced in those results and where
              they appeared. It is observational: it records what the responses contained
              during the research period.
            </p>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Methodology
            </h2>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground leading-relaxed">
              <li>The research used Gemini.</li>
              <li>Commercial-solar buyer-intent prompts were tested.</li>
              <li>Queries covered Arizona and Phoenix commercial solar.</li>
              <li>
                The dataset recorded whether each company was mentioned and, where
                applicable, its position among the top five results.
              </li>
              <li>The study compares observed visibility across the tested prompts.</li>
            </ul>
            <p className="mt-6 rounded-xl border border-border bg-background p-5 text-sm text-muted-foreground leading-relaxed">
              AI-generated results can change over time. These findings represent
              observations from the research period and should not be interpreted as a
              permanent ranking or a complete representation of Gemini's behavior.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Queries Tested
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {queryGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background p-6 md:p-7"
            >
              <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.queries.map((q) => (
                  <li
                    key={q}
                    className="text-sm text-muted-foreground leading-relaxed break-words"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Key Findings
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          The ten most frequently mentioned commercial solar companies across the tested
          prompts. "Prompts mentioned in" is the number of tested prompts in which the
          company appeared.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <caption className="sr-only">
              Top 10 most mentioned commercial solar companies across the tested Gemini
              prompts
            </caption>
            <thead className="hairline-b">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold text-foreground">
                  Rank
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-foreground">
                  Company
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-foreground">
                  Prompts Mentioned In
                </th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((row) => (
                <tr key={row.company} className="hairline-t">
                  <td className="px-5 py-4 font-mono text-xs text-brand">{row.rank}</td>
                  <td className="px-5 py-4 text-foreground">{row.company}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.prompts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Company Mention Ranking
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          Each bar shows the number of tested prompts in which the company appeared.
        </p>
        <ol className="mt-10 space-y-5">
          {ranking.map((row) => (
            <li key={row.company} className="grid gap-2 sm:grid-cols-[3rem_1fr_4rem] sm:items-center">
              <span className="font-mono text-xs font-semibold text-brand">
                {String(row.rank).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">
                  {row.company}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2 block h-2 w-full rounded-full bg-surface"
                >
                  <span
                    className="block h-2 rounded-full bg-brand"
                    style={{ width: `${(row.prompts / MAX_PROMPTS) * 100}%` }}
                  />
                </span>
              </span>
              <span className="text-sm text-muted-foreground sm:text-right">
                {row.prompts} prompts
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section surface>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Observations
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Observed visibility varied across the tested prompts. No company appeared in
              every prompt, and companies that appeared frequently in one category of
              queries were not necessarily mentioned in every other query.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              The spread between the most and least frequently mentioned companies in the
              top ten was substantial: 18 prompts at the top compared with 7 at position
              ten. The dataset records these mentions and positions only; it does not
              establish why any company appeared.
            </p>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Limitations
            </h2>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground leading-relaxed">
              {limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            What This Research Shows
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Across the prompts tested, commercial solar companies in Arizona had materially
            different levels of visibility in AI-generated buyer-intent searches. Some
            companies were surfaced in most of the tested prompts, while others appeared in
            only a portion of them.
          </p>
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <p className="text-base font-medium text-foreground">
              Want to understand how your company appears in AI search?
            </p>
            <Link
              to="/book"
              className="liquid-glass mt-5 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold text-foreground">KMS Signal Research</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Arizona Commercial Solar AI Visibility Benchmark
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Research based on Gemini prompt testing conducted by KMS Signal.
          </p>
        </div>
      </Section>
    </>
  );
}
