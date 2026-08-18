import { CaseStudy } from "@/components/sections/CaseStudy";
import { Commitments } from "@/components/sections/Commitments";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Materials } from "@/components/sections/Materials";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { Testimonials } from "@/components/sections/Testimonials";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/content";

export default function Home() {
  return (
    <>
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <div className="bg-clay px-5 py-2 text-center text-[0.63rem] font-semibold uppercase leading-4 tracking-[0.12em] text-forest">
        {homeContent.notice}
      </div>
      <Header site={siteConfig} />
      <main id="contenu">
        <Hero content={homeContent.hero} actions={siteConfig.actions} />
        <Commitments items={homeContent.commitments} />
        <Projects content={homeContent.projects} />
        <Services content={homeContent.services} />
        <Process content={homeContent.process} />
        <Studio content={homeContent.studio} />
        <Materials content={homeContent.materials} />
        <CaseStudy content={homeContent.caseStudy} />
        <Testimonials content={homeContent.testimonials} />
        <Faq content={homeContent.faq} />
        <Contact content={homeContent.contact} site={siteConfig} />
      </main>
      <Footer site={siteConfig} content={homeContent.footer} />
    </>
  );
}
