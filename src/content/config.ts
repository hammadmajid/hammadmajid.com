import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    ogImage: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    source: z.string(),
    website: z.string().optional(),
    status: z.enum(['In progress', 'Completed']),
  }),
});

export const collections = {
  projects: projectCollection,
  posts: postsCollection,
};
