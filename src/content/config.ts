import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    // 記事のタイトル
    title: z.string(),
    // 記事の説明
    description: z.string(),
    // 記事の公開日
    publishedDate: z.coerce.date(),
    // 記事の更新日
    updatedDate: z.coerce.date().optional(),
    // 見出し画像
    headingImage: z.string().optional(),
    // タグ
    tag: z.array(z.string()).optional(),
    // 関連記事
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const productCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.array(z.string()).optional(),
    headingImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  product: productCollection,
};
