import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* ============================================================
   Collection : paddles — Avis de raquettes (cœur du site)
   ============================================================ */
const paddles = defineCollection({
  loader: glob({ base: './src/content/paddles', pattern: '**/*.{md,mdx}' }),
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
      amazonAsin:   z.string().optional(), // ex: "B0XXXXXXXX"

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
const comparisons = defineCollection({
  loader: glob({ base: './src/content/comparisons', pattern: '**/*.{md,mdx}' }),
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
          amazonAsin:  z.string().optional(),
          rating:      z.number().min(0).max(10),
          highlighted: z.boolean().default(false),
          pros:        z.array(z.string()),
          cons:        z.array(z.string()),
        })
      ),
    }),
});

/* ============================================================
   Export
   ============================================================ */
export const collections = { paddles, guides, comparisons };
