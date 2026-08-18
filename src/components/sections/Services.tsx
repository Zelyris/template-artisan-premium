import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Services({ content }: { content: typeof homeContent.services }) {
  return (
    <section id="prestations" className="section-space border-y border-line bg-background">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
        <div className="mt-12 border-t border-line lg:mt-16">
          {content.items.map((service) => (
            <article key={service.number} className="service-row grid gap-5 border-b border-line py-8 sm:grid-cols-[4rem_1fr] lg:grid-cols-[6rem_.7fr_1fr] lg:items-start lg:py-10">
              <p className="font-display text-3xl text-clay" aria-hidden="true">{service.number}</p>
              <div>
                <h3 className="font-display text-4xl tracking-[-0.03em] sm:text-5xl">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-muted lg:hidden">{service.description}</p>
              </div>
              <div className="sm:col-start-2 lg:col-start-auto">
                <p className="hidden max-w-xl leading-7 text-muted lg:block">{service.description}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-brand lg:mt-6">
                  {service.details.map((detail) => <li key={detail} className="flex items-center gap-2"><span className="size-1 bg-clay" aria-hidden="true" />{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
