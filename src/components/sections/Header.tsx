import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";

export function Header({ site }: { site: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/95 backdrop-blur-md">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-5 lg:min-h-24">
        <a href="#accueil" className="group flex shrink-0 items-center gap-3" aria-label={`${site.name}, retour en haut`}>
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>
            <span className="block font-display text-xl leading-none tracking-[-0.02em] lg:text-2xl">{site.name}</span>
            <span className="mt-1 hidden text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-muted sm:block">
              {site.descriptor}
            </span>
          </span>
        </a>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.12em] text-muted xl:gap-9">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link py-3 transition-colors hover:text-foreground" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:block">
          <ActionLink {...site.actions.project} className="min-h-11 px-5" />
        </div>
        <details className="mobile-menu relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-line" aria-label="Ouvrir le menu">
            <span className="menu-icon" aria-hidden="true" />
          </summary>
          <nav aria-label="Navigation mobile" className="absolute right-0 top-[calc(100%+.75rem)] w-[min(19rem,calc(100vw-2.5rem))] border border-line bg-surface p-5 shadow-[var(--site-shadow)]">
            <ul className="space-y-1">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <a className="block border-b border-line py-3 text-sm font-semibold" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <ActionLink {...site.actions.project} className="mt-5 w-full sm:hidden" />
          </nav>
        </details>
      </Container>
    </header>
  );
}
