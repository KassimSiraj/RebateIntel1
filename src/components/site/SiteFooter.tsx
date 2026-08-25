import kmsLogo from "@/assets/kms-logo.png";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="hairline-t bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" aria-label="KMS Signal — home" className="flex items-center">
              <img src={kmsLogo} alt="KMS Signal" className="h-9 w-auto" />
            </Link>

            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              AI visibility optimization for commercial solar companies — improving how they are
              discovered, understood, and represented across AI-powered search.
            </p>
          </div>

          <FooterCol title="Service">
            <FooterLink to="/service">AI Visibility Optimization</FooterLink>
            <FooterLink to="/methodology">Methodology</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Resources">
            <FooterLink to="/research">Research</FooterLink>
            <FooterLink to="/book">Start a Conversation</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 pt-6 hairline-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 KMS Signal. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  );
}
