# Pickleball Blog — Blog d'affiliation

Blog d'affiliation dédié au pickleball : avis de raquettes, guides techniques et comparatifs produits.

## Stack

| Outil | Version | Rôle |
|---|---|---|
| [Astro](https://astro.build) | ^6 | Framework SSG |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Styles utilitaires |
| [MDX](https://mdxjs.com) | via @astrojs/mdx | Contenu riche |
| [astro-seo](https://github.com/jonasmerlin/astro-seo) | ^1 | Balises SEO / OG |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | ^3 | Sitemap XML |
| TypeScript | strict | Typage |

**Déploiement** : build statique (`dist/`) uploadé sur Hostinger via FTP.

---

## Structure des collections

### `paddles` — Avis de raquettes
Fichiers dans `src/content/paddles/*.mdx`

Frontmatter obligatoire :
```yaml
title: "Avis Selkirk Vanguard 2.0"
description: "Notre test complet..."
publishDate: 2024-01-15
author: "Rédaction"
draft: false
featured: false
image:
  src: "../../assets/paddles/selkirk-vanguard.jpg"
  alt: "Selkirk Vanguard 2.0"
tags: ["selkirk", "intermediate"]
brand: "Selkirk"
model: "Vanguard 2.0"
specs:
  weight: "7.9oz"
  grip: "4.25\""
  core: "Polymer honeycomb"
  face: "Fiberglass"
  price: 129
affiliateUrl: "https://..."
rating:
  overall: 8.5
  power: 8
  control: 9
  spin: 8.5
  touch: 9
pros: ["Excellent contrôle", "Finition premium"]
cons: ["Prix élevé"]
verdict: "Meilleur choix pour les joueurs intermédiaires..."
```

### `guides` — Guides informationnels
Fichiers dans `src/content/guides/*.mdx`

Frontmatter obligatoire :
```yaml
title: "Règles du pickleball pour débutants"
description: "..."
publishDate: 2024-01-10
author: "Rédaction"
draft: false
featured: false
image:
  src: "../../assets/guides/regles-debutant.jpg"
  alt: "..."
tags: ["règles", "débutant"]
level: "beginner"         # beginner | intermediate | advanced
category: "rules"         # rules | strategy | technique | gear
```

### `comparisons` — Comparatifs
Fichiers dans `src/content/comparisons/*.mdx`

Frontmatter obligatoire :
```yaml
title: "Selkirk vs Joola : lequel choisir ?"
description: "..."
publishDate: 2024-01-20
author: "Rédaction"
draft: false
featured: false
image:
  src: "../../assets/comparisons/selkirk-vs-joola.jpg"
  alt: "..."
tags: ["comparatif", "selkirk", "joola"]
verdict: "Le Selkirk s'impose pour le contrôle, le Joola pour la puissance."
products:
  - name: "Selkirk Vanguard 2.0"
    brand: "Selkirk"
    affiliateUrl: "https://..."
    rating: 8.5
    highlighted: true
    pros: ["Contrôle supérieur"]
    cons: ["Plus cher"]
  - name: "Joola Ben Johns"
    brand: "Joola"
    affiliateUrl: "https://..."
    rating: 8.2
    highlighted: false
    pros: ["Excellent rapport qualité/prix"]
    cons: ["Moins de finesse"]
```

---

## Ajouter un article

1. **Choisir la collection** : `paddles`, `guides` ou `comparisons`
2. **Créer le fichier** : `src/content/<collection>/mon-article.mdx`
3. **Remplir le frontmatter** selon le schéma ci-dessus (tous les champs obligatoires)
4. **Ajouter les images** dans `src/assets/<collection>/`
   — Utiliser `<Image />` Astro (jamais de `<img>` brut)
5. **Passer `draft: false`** pour publier (les drafts sont exclus du sitemap et du build)
6. **Build et déploiement** :
   ```sh
   npm run build        # génère dist/
   # uploader dist/ via FTP sur Hostinger
   ```

## Commandes

```sh
npm run dev      # Serveur local → http://localhost:4321
npm run build    # Build production dans dist/
npm run preview  # Prévisualiser le build
```

---

## Disclosure affilié

Ce site contient des liens affiliés (Amazon Associates et partenaires directs). Les achats effectués via ces liens peuvent générer une commission, sans surcoût pour l'acheteur.
