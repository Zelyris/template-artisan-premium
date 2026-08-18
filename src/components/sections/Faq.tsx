import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Faq({ content }: { content: typeof homeContent.faq }) {
  return (
    <section id="faq" className="section-space border-y border-line bg-background">
      <Container className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
        <div className="border-t border-line">
          {content.items.map((item, index) => (
            <details key={item.question} className="faq-item group border-b border-line" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl sm:text-2xl">
                <span>{item.question}</span>
                <span className="faq-plus flex size-8 shrink-0 items-center justify-center border border-clay text-brand transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-muted sm:text-base">{item.answer}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
