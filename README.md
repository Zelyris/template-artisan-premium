# Atelier Sillage — Template Artisan Premium

Template commercial fictif pour un atelier français d’ébénisterie contemporaine. L’ensemble a été conçu comme une démonstration réutilisable, chaleureuse et haut de gamme, avec des contenus explicitement signalés comme exemples.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript strict
- Tailwind CSS 4
- pnpm

## Organisation

- `src/config/site.ts` centralise l’identité, les coordonnées, la navigation, les appels à l’action et les mentions.
- `src/content/content.ts` centralise tous les textes, projets, témoignages et contenus métier.
- `src/styles/themes.css` contient la palette et les variables visuelles du thème Artisan Premium.
- `src/components/sections` regroupe les sections réutilisables de la page.
- `src/components/ui` contient les briques d’interface partagées.
- `public/atelier-sillage` contient les illustrations SVG originales et locales.

## Formulaire de projet

Le formulaire ne comporte aucun service serveur. À la validation, il construit un lien `mailto:` avec un sujet et un message préremplis, puis ouvre le logiciel de messagerie de la personne. Aucune donnée n’est envoyée au site, stockée ou associée à un faux message de réussite.

L’adresse utilise volontairement le domaine réservé `.example`. Remplacez-la dans `src/config/site.ts` avant toute mise en ligne réelle.

## Contenus fictifs

L’entreprise, les personnes, les réalisations, les témoignages, les statistiques, les tarifs indicatifs, les coordonnées, les numéros d’entreprise et l’étude de cas sont fictifs. Les mentions sont intégrées directement dans l’interface et doivent être adaptées avant utilisation commerciale.

## Ressources visuelles

Les six illustrations sont des SVG originaux créés pour ce template. Elles sont servies localement, sans hotlink ni ressource tierce. Les typographies reposent sur des piles système afin d’éviter tout téléchargement externe.

## Développement

```bash
pnpm install
pnpm dev
```

Le site est ensuite accessible sur `http://localhost:3000`.

## Contrôles

```bash
pnpm lint
pnpm build
```

Le template inclut des repères de focus visibles, une navigation clavier, des alternatives textuelles, des composants HTML sémantiques et une réduction des animations via `prefers-reduced-motion`.

## Avant publication

1. Remplacer tous les contenus d’exemple et supprimer les mentions de démonstration devenues inutiles.
2. Renseigner des coordonnées, mentions légales et informations d’hébergement exactes.
3. Remplacer l’adresse e-mail `.example` par une adresse active.
4. Vérifier les offres, délais, budgets, zones d’intervention et déclarations environnementales.
5. Réaliser une dernière revue juridique, éditoriale et d’accessibilité.
