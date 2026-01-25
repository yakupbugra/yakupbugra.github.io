import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      publishTime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }), 
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/books" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      status: z.enum(["Reading", "Read", "To Read"]),
      rating: z.number().min(1).max(5).optional(),
      cover: z.string().or(image()).optional(),
      link: z.string().optional(),
      description: z.string().optional(),
    }),
});

export const collections = { blog, books };
