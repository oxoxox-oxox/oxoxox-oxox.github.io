import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string().optional(),
    excerpt: z.string(),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts };
