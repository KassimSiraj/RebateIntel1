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

function BookPage() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border bg-background p-4 md:p-8 shadow-card min-h-[600px]">
          <CalInlineEmbed />
        </div>
      </div>
    </Section>
  );
}
