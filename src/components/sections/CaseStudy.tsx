import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/content";

export function CaseStudy({ content }: { content: typeof homeContent.caseStudy }) {
  return (
    <section className="section-space bg-clay-light">
      <Container>
        <div className="mb-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-clay" aria-hidden="true" />
          <p className="eyebrow text-brand">{content.eyebrow}</p>
        </div>
        <div className="grid overflow-hidden bg-forest text-linen shadow-[var(--site-shadow)] lg:grid-cols-[1.18fr_.82fr]">
          <figure className="relative min-h-[22rem] lg:min-h-[43rem]">
            <Image src={content.image.src} alt={content.image.alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent px-6 pb-5 pt-16 text-xs text-linen/70 sm:px-8">{content.caption}</figcaption>
          </figure>
          <div className="p-7 sm:p-10 lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
            <div>
              <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl xl:text-6xl">{content.title}</h2>
              <div className="mt-10 space-y-7">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">{content.challengeTitle}</h3>
                  <p className="mt-3 leading-7 text-linen/70">{content.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">{content.responseTitle}</h3>
                  <p className="mt-3 leading-7 text-linen/70">{content.response}</p>
                </div>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 border-t border-linen/20 pt-6">
              {content.details.map((detail) => (
                <div key={detail.label} className="border-b border-linen/15 py-4 pr-3">
                  <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-accent-soft">{detail.label}</dt>
                  <dd className="mt-2 text-xs leading-5 text-linen/75">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
