import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Projects({ content }: { content: typeof homeContent.projects }) {
  return (
    <section id="realisations" className="section-space bg-surface">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
          <p className="shrink-0 border border-clay px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-brand">{content.exampleLabel}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {content.items.map((project, index) => (
            <article key={project.title} className={`project-card group ${index === 0 ? "lg:col-span-5 lg:row-span-2" : "lg:col-span-7"}`}>
              <figure>
                <div className={`relative overflow-hidden bg-clay-light ${index === 0 ? "aspect-[4/5]" : "aspect-[16/9]"}`}>
                  <Image src={project.image.src} alt={project.image.alt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 1024px) 100vw, 58vw"} className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                  <span className="absolute left-4 top-4 bg-background/92 px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand backdrop-blur-sm">{content.exampleLabel}</span>
                </div>
                <figcaption className="grid gap-3 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{project.category}</p>
                    <h3 className="mt-2 font-display text-3xl tracking-[-0.025em] sm:text-4xl">{project.title}</h3>
                  </div>
                  <div className="text-left text-xs leading-5 text-muted sm:text-right">
                    <p>{project.material}</p>
                    <p>{project.location}</p>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
