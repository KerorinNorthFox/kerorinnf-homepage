import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    headingImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const productCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "content/product" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headingImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  product: productCollection,
};
