import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Studio({ content }: { content: typeof homeContent.studio }) {
  return (
    <section id="atelier" className="section-space bg-surface">
      <Container className="grid gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-20">
        <figure className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden bg-clay-light">
            <Image src={content.image.src} alt={content.image.alt} width={1000} height={1250} sizes="(max-width: 1024px) 100vw, 48vw" className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-4 text-xs leading-5 text-muted">{content.caption}</figcaption>
          <div className="absolute -bottom-5 -left-5 hidden h-32 w-24 border-b border-l border-clay md:block" aria-hidden="true" />
        </figure>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <div className="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-7 font-display text-2xl italic text-brand">{content.signature}</p>
          <dl className="mt-10 grid gap-6 border-t border-line pt-7 sm:grid-cols-3">
            {content.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-3xl text-brand sm:text-4xl">{fact.value}</dt>
                <dd className="mt-2 text-xs leading-5 text-muted">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
