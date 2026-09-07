import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Section } from "@/components/site/Section";
import { CalInlineEmbed } from "@/components/site/CalInlineEmbed";
import { submitLead } from "@/lib/leads.functions";
import { ArrowRight, Check, Calendar, Loader2 } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — KMS Signal" },
      {
        name: "description",
        content:
          "Share four details and unlock the calendar to book a strategy call with KMS Signal about your AI visibility.",
      },
      { property: "og:title", content: "Book a Strategy Call" },
      {
        property: "og:description",
        content: "Unlock the calendar and book a strategy call with KMS Signal.",
      },
      { property: "og:url", content: "https://kmssignal.com/book" },
    ],
    links: [{ rel: "canonical", href: "https://kmssignal.com/book" }],
  }),
  component: BookPage,
});

type Fields = { name: string; email: string; jobTitle: string; company: string };

function BookPage() {
  const send = useServerFn(submitLead);
  const [fields, setFields] = useState<Fields>({ name: "", email: "", jobTitle: "", company: "" });
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const complete =
    fields.name.trim() !== "" &&
    /\S+@\S+\.\S+/.test(fields.email.trim()) &&
    fields.jobTitle.trim() !== "" &&
    fields.company.trim() !== "";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!complete || status === "saving" || status === "done") return;
    setStatus("saving");
    setError(null);
    try {
      await send({ data: fields });
      setStatus("done");
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      setError(
        message && message.length < 160
          ? message
          : "We couldn't save your details. Please try again.",
      );
      setStatus("idle");
    }
  }

  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">Strategy call</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Book a strategy call.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Tell us who you are and we'll open the calendar. On the call we look at how AI-powered
            search currently discovers, understands, and represents your commercial solar company —
            and what it would take to improve it.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "A live look at how AI-powered search represents your company",
              "An honest read on where your visibility gaps are",
              "Clear next steps — no pressure, no pitch deck",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" /> 15 minutes, no obligation.
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
                  Thanks, {fields.name.split(" ")[0]} — your calendar is unlocked.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pick a 15-minute slot that works for you.
                </p>
                <CalInlineEmbed />
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {error && (
                  <p role="alert" aria-live="polite" className="md:col-span-2 text-sm text-destructive">
                    {error}
                  </p>
                )}

                <div className="md:col-span-2 mt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={!complete || status === "saving"}
                    className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold disabled:opacity-45 disabled:cursor-not-allowed"
                  >
                    {status === "saving" ? (
                      <>
                        Saving <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Book strategy call <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    All four fields are required to unlock the calendar.
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

const autoCompleteMap: Record<string, string> = {
  name: "name",
  email: "email",
  jobTitle: "organization-title",
  company: "organization",
};

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
        autoComplete={autoCompleteMap[name] ?? "on"}
        inputMode={type === "email" ? "email" : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        /* 16px on mobile prevents iOS Safari from zooming on focus */
        className="mt-2 w-full min-h-11 rounded-md border border-border bg-background px-3 py-2.5 text-base md:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
