import { getCollection, type CollectionEntry } from "astro:content";

type BlogLang = CollectionEntry<"blog">["data"]["lang"];

const site = "https://bondlio.com";

const blogBasePaths: Record<BlogLang, string> = {
    tr: "/bilgi-defteri",
    en: "/en/infobook",
    tl: "/tl/aklat-ng-kaalaman",
};

export function getBlogPostUrl(post: CollectionEntry<"blog">) {
    return `${site}${blogBasePaths[post.data.lang]}/${post.id}/`;
}

// Hreflang alternates of a post: itself plus the posts sharing its translationKey.
// Languages without a translation are left out instead of pointing to a guessed URL.
export async function getBlogAlternates(post: CollectionEntry<"blog">) {
    const alternates: Partial<Record<BlogLang, string>> = {
        [post.data.lang]: getBlogPostUrl(post),
    };

    const key = post.data.translationKey;
    if (!key) return alternates;

    const posts = await getCollection("blog");
    for (const other of posts) {
        if (other.id === post.id || other.data.translationKey !== key) continue;
        if (other.data.lang === post.data.lang) {
            throw new Error(
                `translationKey "${key}" is used by two "${other.data.lang}" posts: ${post.id}, ${other.id}`
            );
        }
        alternates[other.data.lang] = getBlogPostUrl(other);
    }

    return alternates;
}
