import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { Section } from "@/components/site/Section";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KMS Signal" },
      {
        name: "description",
        content:
          "Start a conversation with KMS Signal about your commercial solar company's visibility across AI-powered search, or book a strategy call.",
      },
      { property: "og:title", content: "Contact — KMS Signal" },
      {
        property: "og:description",
        content: "Send a short message or book a strategy call with KMS Signal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type Fields = {
  name: string;
  email: string;
  jobTitle: string;
  company: string;
  message: string;
};

function ContactPage() {
  const send = useServerFn(submitLead);
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const complete =
    fields.name.trim() !== "" &&
    /\S+@\S+\.\S+/.test(fields.email.trim()) &&
    fields.jobTitle.trim() !== "" &&
    fields.company.trim() !== "";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!complete || status === "saving") return;
    setStatus("saving");
    setError(null);
    try {
      await send({ data: fields });
      setStatus("done");
    } catch {
      setError("We couldn't send your message. Please try again.");
      setStatus("idle");
    }
  }

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">Contact</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Start a conversation.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Tell us about your commercial solar company and what you're seeing in AI-powered search.
            We'll come back with a straight answer on whether we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/book"
              className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Book a strategy call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" /> kassim@kmssignal.com
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-card">
            {status === "done" ? (
              <div className="py-10 text-center">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-brand">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  Thanks, {fields.name.split(" ")[0]} — message received.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  If you'd rather talk sooner, you can book a strategy call directly.
                </p>
                <Link
                  to="/book"
                  className="liquid-glass mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                  Book a strategy call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label="Full name"
                  name="name"
                  value={fields.name}
                  onChange={(v) => setFields((f) => ({ ...f, name: v }))}
                />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={(v) => setFields((f) => ({ ...f, email: v }))}
                />
                <Field
                  label="Job title"
                  name="jobTitle"
                  value={fields.jobTitle}
                  onChange={(v) => setFields((f) => ({ ...f, jobTitle: v }))}
                />
                <Field
                  label="Company name"
                  name="company"
                  value={fields.company}
                  onChange={(v) => setFields((f) => ({ ...f, company: v }))}
                />

                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={2000}
                    value={fields.message}
                    onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {error && <p className="md:col-span-2 text-sm text-destructive">{error}</p>}

                <div className="md:col-span-2 mt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={!complete || status === "saving"}
                    className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {status === "saving" ? (
                      <>
                        Sending <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Name, work email, job title, and company are required.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} <span className="text-brand">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={200}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
