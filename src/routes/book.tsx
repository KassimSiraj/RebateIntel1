import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CalInlineEmbed } from "@/components/site/CalInlineEmbed";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — KMS Signal" },
      {
        name: "description",
        content:
          "Book a 30-minute strategy call with KMS Signal to see how AI-powered search discovers, understands, and represents your commercial solar company.",
      },
      { property: "og:title", content: "Book a Strategy Call" },
      {
        property: "og:description",
        content: "Book a 30-minute strategy call with KMS Signal.",
      },
      { property: "og:url", content: "https://kmssignal.com/book" },
    ],
    links: [{ rel: "canonical", href: "https://kmssignal.com/book" }],
  }),
  component: BookPage,
});

const REASSURANCE = [
  {
    title: "Focused on your market",
    body: "We talk about the regions and buyers your projects actually depend on.",
  },
  {
    title: "Built around your company's actual AI visibility",
    body: "The conversation starts from how AI-powered search currently represents you.",
  },
  {
    title: "No generic sales pitch",
    body: "A direct discussion about fit, scope, and what would be involved.",
  },
];

function BookPage() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl">
        <header className="max-w-3xl">
          <div className="eyebrow mb-4">Start here</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Start a Conversation
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Tell us a little about your company, your market, and what you're looking to
            understand about your visibility across AI-powered search.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            We'll use the conversation to determine whether KMS Signal's AI Visibility
            Optimization service is a relevant fit for your company.
          </p>
        </header>

        <div className="mt-10 md:mt-14 rounded-2xl border border-border bg-background p-4 md:p-8 shadow-card min-h-[600px]">
          <CalInlineEmbed />
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            What to expect
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REASSURANCE.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
