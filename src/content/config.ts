import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    source: z.string(),
    website: z.string().optional(),
    status: z.enum(['in-progress', 'completed']),
  }),
});

export const collections = {
  'projects': projectCollection,
};