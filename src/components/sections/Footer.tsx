import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/content";
import type { SiteConfig } from "@/lib/types";

export function Footer({ site, content }: { site: SiteConfig; content: typeof homeContent.footer }) {
  return (
    <footer className="bg-wood text-linen">
      <Container className="grid gap-10 border-b border-linen/15 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.7fr_1fr] lg:gap-12 lg:py-20">
        <div className="max-w-sm">
          <a href="#accueil" className="flex items-center gap-3" aria-label={`${site.name}, retour en haut`}>
            <span className="brand-mark brand-mark-light" aria-hidden="true">S</span>
            <span className="font-display text-2xl">{site.name}</span>
          </a>
          <p className="mt-5 text-sm leading-7 text-linen/60">{content.introduction}</p>
        </div>
        <div>
          <h2 className="footer-title">{content.contactTitle}</h2>
          <address className="mt-5 text-sm not-italic leading-7 text-linen/65">
            {site.contact.address.map((line) => <span key={line} className="block">{line}</span>)}
            <span className="mt-3 block">{site.contact.hours}</span>
            <a href={site.contact.phoneHref} className="mt-3 block hover:text-linen">{site.contact.phone}</a>
            <a href={`mailto:${site.contact.email}`} className="block break-all hover:text-linen">{site.contact.email}</a>
          </address>
        </div>
        <div>
          <h2 className="footer-title">{content.navigationTitle}</h2>
          <ul className="mt-5 space-y-3 text-sm text-linen/65">
            {site.navigation.map((item) => <li key={item.href}><a href={item.href} className="hover:text-linen">{item.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{content.legalTitle}</h2>
          <ul className="mt-5 space-y-3 text-xs leading-5 text-linen/55">
            <li>{site.legal.company}</li>
            <li>{site.legal.registration}</li>
            <li>{site.legal.publication}</li>
            <li>{site.legal.hosting}</li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 py-6 text-[0.65rem] uppercase tracking-[0.1em] text-linen/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{content.copyright}</p>
      </Container>
    </footer>
  );
}
