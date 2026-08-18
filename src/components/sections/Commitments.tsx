import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/content";

export function Commitments({ items }: { items: typeof homeContent.commitments }) {
  return (
    <section aria-label="Nos engagements" className="bg-forest py-7 text-linen sm:py-9">
      <Container>
        <ul className="grid gap-7 md:grid-cols-3 md:gap-0">
          {items.map((item) => (
            <li key={item.number} className="grid grid-cols-[auto_1fr] gap-4 border-l border-linen/20 pl-5 md:pr-7 lg:gap-6 lg:pl-7">
              <span className="font-display text-2xl text-accent-soft" aria-hidden="true">{item.number}</span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-linen/65">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
