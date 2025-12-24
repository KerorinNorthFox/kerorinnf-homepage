import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  type: "content",
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/" }),
  schema: z.object({
    title: z.string(),
    descripton: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    headingImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const productCollection = defineCollection({
  type: "content",
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/" }),
  schema: z.object({
    title: z.string(),
    descripton: z.string(),
    headingImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  product: productCollection,
};
