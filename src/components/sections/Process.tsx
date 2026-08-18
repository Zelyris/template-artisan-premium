import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Process({ content }: { content: typeof homeContent.process }) {
  return (
    <section id="methode" className="section-space relative overflow-hidden bg-forest text-linen">
      <div className="process-lines absolute inset-0 opacity-20" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} inverse />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {content.steps.map((step, index) => (
            <li key={step.number} className="relative border-l border-linen/20 pl-6 lg:min-h-72 lg:pr-8">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex size-11 items-center justify-center border border-accent-soft font-display text-xl text-accent-soft">{step.number}</span>
                {index < content.steps.length - 1 ? <span className="hidden h-px flex-1 bg-linen/20 lg:block" aria-hidden="true" /> : null}
              </div>
              <p className="text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-accent-soft">{step.timing}</p>
              <h3 className="mt-3 font-display text-4xl">{step.title}</h3>
              <p className="mt-5 text-sm leading-7 text-linen/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
