import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* ============================================================
   Collection : paddles — Avis de raquettes (cœur du site)
   ============================================================ */
const raquettes = defineCollection({
  loader: glob({ base: './src/content/raquettes', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title:       z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author:      z.string(),
      draft:       z.boolean().default(false),
      featured:    z.boolean().default(false),

      image: z.object({
        src: image(),
        alt: z.string(),
      }),

      tags:  z.array(z.string()),
      brand: z.string(),
      model: z.string(),

      specs: z.object({
        weight: z.string(),           // ex: "7.9oz"
        grip:   z.string(),           // ex: "4.25\""
        core:   z.string(),           // ex: "Polymer honeycomb"
        face:   z.string(),           // ex: "Fiberglass"
        price:  z.number().positive(),
      }),

      affiliateUrl: z.url(),

      rating: z.object({
        overall: z.number().min(0).max(10),
        power:   z.number().min(0).max(10),
        control: z.number().min(0).max(10),
        spin:    z.number().min(0).max(10),
        touch:   z.number().min(0).max(10),
      }),

      pros:    z.array(z.string()),
      cons:    z.array(z.string()),
      verdict: z.string(),
    }),
});

/* ============================================================
   Collection : guides — Informationnel pur
   ============================================================ */
const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title:       z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author:      z.string(),
      draft:       z.boolean().default(false),
      featured:    z.boolean().default(false),

      image: z.object({
        src: image(),
        alt: z.string(),
      }),

      tags: z.array(z.string()),

      level: z.enum(['beginner', 'intermediate', 'advanced']),
      category: z.enum(['rules', 'strategy', 'technique', 'gear']),
    }),
});

/* ============================================================
   Collection : comparisons — Comparatifs produits
   ============================================================ */
const comparatifs = defineCollection({
  loader: glob({ base: './src/content/comparatifs', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title:       z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author:      z.string(),
      draft:       z.boolean().default(false),
      featured:    z.boolean().default(false),

      image: z.object({
        src: image(),
        alt: z.string(),
      }),

      tags:    z.array(z.string()),
      verdict: z.string(),

      products: z.array(
        z.object({
          name:        z.string(),
          brand:       z.string(),
          affiliateUrl: z.url(),
          rating:      z.number().min(0).max(10),
          highlighted: z.boolean().default(false),
          pros:        z.array(z.string()),
          cons:        z.array(z.string()),
        })
      ),
    }),
});

/* ============================================================
   Collection : auteurs — Profils des rédacteurs
   ============================================================ */
const auteurs = defineCollection({
  loader: glob({ base: './src/content/auteurs', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name:     z.string(),
      role:     z.string(),
      shortBio: z.string(),
      avatar:   image().optional(),
      social: z.object({
        twitter:   z.string().optional(),
        linkedin:  z.string().optional(),
        instagram: z.string().optional(),
      }).optional(),
    }),
});

/* ============================================================
   Export
   ============================================================ */
export const collections = { raquettes, guides, comparatifs, auteurs };
