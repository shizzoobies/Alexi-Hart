import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    membersOnly: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

const members = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog, members };
