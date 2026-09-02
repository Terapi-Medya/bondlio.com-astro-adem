import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        lang: z.enum(["tr", "en", "tl"]),
        category: z.enum(["nanny", "caregiver", "cleaner", "general"]),
        coverImage: image(),
    }),
});

export const collections = { blog };