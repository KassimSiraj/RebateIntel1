import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — KMS Signal" },
      { name: "description", content: "How KMS Signal collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — KMS Signal" },
      { property: "og:description", content: "How KMS Signal collects, uses, and protects your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last Updated: July 2026</p>

        <div className="mt-10 space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              KMS Signal respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">We may collect:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>Name</li>
              <li>Business email address</li>
              <li>Company name</li>
              <li>Phone number (if provided)</li>
              <li>Information you submit through our contact or booking forms</li>
              <li>Website analytics (such as page visits and browser type)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">We use your information to:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>Respond to inquiries</li>
              <li>Schedule meetings</li>
              <li>Deliver our services</li>
              <li>Improve our website</li>
              <li>Communicate regarding our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Information Sharing</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We do not sell or rent your personal information.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We may share information only with trusted service providers necessary to operate our business (such as scheduling, analytics, or email platforms).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data Security</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We use commercially reasonable measures to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Third-Party Services</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Our website may use services such as the following:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>Google Analytics</li>
              <li>Google Meet</li>
              <li>Cal.com</li>
            </ul>
            <p className="mt-3 text-muted-foreground leading-relaxed">These services have their own privacy policies.</p>
          </section>
        </div>
      </div>
    </Section>
  );
}
