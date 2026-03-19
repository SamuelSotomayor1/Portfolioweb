import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const skills = defineCollection({
  loader: glob({ pattern: "list.json", base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = { skills };