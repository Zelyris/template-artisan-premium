import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Materials({ content }: { content: typeof homeContent.materials }) {
  return (
    <section className="section-space border-y border-line bg-background">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
          <div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {content.items.map((material) => (
                <li key={material.name}>
                  <div className={`material-swatch material-${material.swatch} aspect-[4/5] border border-line`} aria-hidden="true">
                    <span className="grain-line grain-line-one" />
                    <span className="grain-line grain-line-two" />
                  </div>
                  <h3 className="mt-4 font-display text-xl sm:text-2xl">{material.name}</h3>
                  <p className="mt-1 text-xs text-muted">{material.finish}</p>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-l border-clay pl-4 text-xs leading-5 text-muted">{content.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
