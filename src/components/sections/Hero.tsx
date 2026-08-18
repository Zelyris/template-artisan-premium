import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";

type HeroProps = {
  content: {
    eyebrow: string;
    title: string;
    introduction: string;
    note: string;
    visual: { src: string; alt: string };
    visualCaption: string;
  };
  actions: SiteConfig["actions"];
};

export function Hero({ content, actions }: HeroProps) {
  return (
    <section id="accueil" className="relative overflow-hidden border-b border-line">
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative grid min-h-[calc(100svh-4.75rem)] items-center gap-12 py-12 md:py-16 lg:grid-cols-[.86fr_1.14fr] lg:py-20">
        <div className="relative z-10 lg:py-12">
          <p className="eyebrow text-brand">{content.eyebrow}</p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(3.25rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
            {content.title}
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            {content.introduction}
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ActionLink {...actions.project} />
            <ActionLink {...actions.work} variant="text" />
          </div>
          <p className="mt-9 max-w-lg border-l border-brand pl-4 text-xs leading-5 text-muted">{content.note}</p>
        </div>
        <figure className="relative mx-auto w-full max-w-3xl lg:mx-0">
          <div className="hero-frame relative overflow-hidden bg-clay-light">
            <Image src={content.visual.src} alt={content.visual.alt} width={1200} height={1000} sizes="(max-width: 1024px) 100vw, 55vw" className="h-auto w-full" fetchPriority="high" />
          </div>
          <figcaption className="mt-4 flex items-center gap-3 text-xs leading-5 text-muted">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            {content.visualCaption}
          </figcaption>
          <div className="joinery-mark absolute -bottom-4 -right-2 hidden size-24 sm:block" aria-hidden="true" />
        </figure>
      </Container>
    </section>
  );
}
