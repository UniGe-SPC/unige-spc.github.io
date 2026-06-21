import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const subjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['core', 'elective']),
    code: z.string(),
    cfu: z.number(),
    semester: z.string(),
    lecturers: z.array(z.string()),
    hours: z.string(),
    sector: z.string(),
  }),
});

export const collections = {
  subjects,
};
