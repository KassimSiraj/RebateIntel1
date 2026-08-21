import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-8 py-16 md:px-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-balance">
              Ready to improve your AI visibility?
            </h2>
            <p className="mt-5 text-lg text-background/70 max-w-xl">
              Start a conversation with KMS Signal about your commercial solar company's visibility
              across AI-powered search and recommendation systems.
            </p>
            <div className="mt-8">
              <Link
                to="/book"
                className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                Book a strategy call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full border border-background/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full border border-background/10"
          />
        </div>
      </div>
    </section>
  );
}
