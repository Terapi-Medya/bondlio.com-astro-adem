import { tr } from "./tr";
import { en } from "./en";
import { tl } from "./tl";
import type { Translation } from "./types";

const translations: Record<string, Translation> = {
    tr,
    en,
    tl,
};

export function getLangContent(lang: string): Translation {
    return translations[lang] ?? translations.tr;
}