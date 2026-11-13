import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        h1: z.string().optional(),
        publishDate: z.date(),
        modifiedDate: z.date().optional(),
        lang: z.enum(["tr", "en", "tl"]),
        category: z.enum(["nanny", "caregiver", "cleaner", "general"]),
        // Same value on every language version of a post (used for hreflang)
        translationKey: z.string().optional(),
        coverImage: image(),
        // true: sayfa sadece linkle açılır (listelerde ve sitemap'te görünmez, noindex)
        unlisted: z.boolean().optional(),
    }),
});

export const collections = { blog };