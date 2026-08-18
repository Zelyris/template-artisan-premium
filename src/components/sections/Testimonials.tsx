import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/content";

export function Testimonials({ content }: { content: typeof homeContent.testimonials }) {
  return (
    <section className="section-space overflow-hidden bg-surface">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <p className="max-w-sm border-l border-clay pl-4 text-xs leading-5 text-muted">{content.notice}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {content.items.map((testimonial, index) => (
            <figure key={testimonial.author} className={`border border-line p-7 sm:p-9 ${index === 1 ? "lg:-translate-y-5 lg:bg-background" : "bg-surface"}`}>
              <span className="font-display text-6xl leading-none text-clay" aria-hidden="true">“</span>
              <blockquote className="mt-2 font-display text-2xl leading-9 text-foreground">{testimonial.quote}</blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="text-sm font-semibold">{testimonial.author}</p>
                <p className="mt-1 text-xs text-muted">{testimonial.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
