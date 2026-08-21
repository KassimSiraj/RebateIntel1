import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/service", label: "Core Service" },
  { to: "/methodology", label: "Methodology" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md hairline-b">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/favicon.png" alt="KMS Signal" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-foreground">KMS Signal</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/book"
            className="liquid-glass inline-flex items-center justify-center px-5 py-2 text-sm font-semibold"
          >
            Start a Conversation
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden hairline-t">
          <div className="container-page py-3 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="liquid-glass mt-3 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
