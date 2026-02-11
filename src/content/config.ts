// src/content/config.ts
import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['zh-CN', 'en']),
    tags: z.array(z.string()),
    date: z.date(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
