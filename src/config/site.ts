import type { SiteConfig } from "@/lib/types";

export const siteConfig = {
  name: "Atelier Sillage",
  shortName: "Sillage",
  descriptor: "Ébénisterie contemporaine",
  description:
    "Template de démonstration pour un atelier français d’ébénisterie contemporaine : mobilier, agencement et restauration sur mesure.",
  locale: "fr",
  theme: "artisan-premium",
  navigation: [
    { label: "Réalisations", href: "#realisations" },
    { label: "Savoir-faire", href: "#prestations" },
    { label: "Méthode", href: "#methode" },
    { label: "L’atelier", href: "#atelier" },
    { label: "FAQ", href: "#faq" },
  ],
  actions: {
    project: {
      label: "Parler de votre projet",
      href: "#contact",
      ariaLabel: "Parler de votre projet avec Atelier Sillage",
    },
    work: {
      label: "Imaginer une pièce",
      href: "#contact",
    },
  },
  contact: {
    email: "bonjour@atelier-sillage.example",
    phone: "+33 (0)2 40 00 00 00",
    phoneHref: "tel:+33240000000",
    address: ["18, passage des Compagnons", "44000 Nantes, France"],
    region: "Nantes · Loire-Atlantique",
    hours: "Du lundi au vendredi, sur rendez-vous",
  },
  legal: {
    company: "Atelier Sillage — entreprise fictive de démonstration",
    registration: "SIRET 000 000 000 00000 — exemple",
    publication: "Direction de la publication : Camille Renaud — identité fictive",
    hosting: "Hébergement à renseigner avant mise en ligne",
  },
} as const satisfies SiteConfig;
