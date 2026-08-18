import { Container } from "@/components/ui/Container";
import { ProjectForm } from "@/components/sections/ProjectForm";
import { homeContent } from "@/content/content";
import type { SiteConfig } from "@/lib/types";

export function Contact({ content, site }: { content: typeof homeContent.contact; site: SiteConfig }) {
  return (
    <section id="contact" className="section-space relative overflow-hidden bg-forest text-linen">
      <div className="contact-circle absolute -right-40 -top-40 size-[36rem] rounded-full border border-linen/10" aria-hidden="true" />
      <Container className="relative grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-accent-soft">{content.eyebrow}</p>
          <h2 className="mt-5 max-w-xl font-display text-5xl leading-[.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{content.title}</h2>
          <p className="mt-7 max-w-lg leading-8 text-linen/70">{content.introduction}</p>
          <div className="mt-9 border-l border-accent pl-5 text-sm leading-7 text-linen/70">
            <p>{site.contact.region}</p>
            <a href={site.contact.phoneHref} className="block hover:text-linen">{site.contact.phone}</a>
            <a href={`mailto:${site.contact.email}`} className="block break-all hover:text-linen">{site.contact.email}</a>
          </div>
        </div>
        <div className="border border-linen/20 bg-linen/[.04] p-6 sm:p-8 lg:p-10">
          <h3 className="mb-7 font-display text-3xl">{content.formTitle}</h3>
          <ProjectForm content={content} recipient={site.contact.email} />
        </div>
      </Container>
    </section>
  );
}
