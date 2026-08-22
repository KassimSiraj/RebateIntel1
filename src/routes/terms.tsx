import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — KMS Signal" },
      { name: "description", content: "Terms governing use of the KMS Signal website and services." },
      { property: "og:title", content: "Terms of Service — KMS Signal" },
      { property: "og:description", content: "Terms governing use of the KMS Signal website and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last Updated: July 2026</p>

        <div className="mt-10 space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-semibold">Acceptance</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              By using the KMS Signal website, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Services</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              KMS Signal provides AI positioning and digital strategy consulting for commercial solar companies.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Information on this website is for informational purposes only and does not constitute legal, financial, or engineering advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Intellectual Property</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              All content on this website belongs to KMS Signal unless otherwise stated.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Content may not be copied or reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">No Guarantee</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              While we strive to improve clients' digital presence and AI positioning, we do not guarantee specific rankings, recommendations, or business outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Third-Party Platforms</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Our services may involve third-party platforms including:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>ChatGPT</li>
              <li>Google AI</li>
              <li>Gemini</li>
              <li>Perplexity</li>
            </ul>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              These platforms are independently operated and may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Limitation of Liability</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              KMS Signal shall not be liable for indirect or consequential damages arising from use of this website or our services.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
