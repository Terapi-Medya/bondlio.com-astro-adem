import { readFileSync } from "node:fs";
import { join } from "node:path";

type BlogPost = {
    id: string;
};

function plainText(value: string) {
    return value
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/__([^_]+)__/g, "$1")
        .replace(/`([^`]+)`/g, "$1")
        .trim();
}

export function getFaqSchema(post: BlogPost, pageUrl: string) {
    let source: string;

    try {
        const filename = post.id.endsWith(".mdx") ? post.id : `${post.id}.mdx`;
        source = readFileSync(
            join(process.cwd(), "src", "content", "blog", filename),
            "utf8"
        );
    } catch {
        return undefined;
    }

    const faqHeading = source.match(/^## .*?(?:Sorulan Sorular|Asked Questions|Madalas Itanong).*$/m);
    if (!faqHeading || faqHeading.index === undefined) return undefined;

    const faqStart = faqHeading.index;
    const nextSection = source.slice(faqStart + faqHeading[0].length).search(/^## /m);
    const faqEnd = nextSection === -1
        ? source.length
        : faqStart + faqHeading[0].length + nextSection;
    const faqSection = source.slice(faqStart, faqEnd);

    const questions = [...faqSection.matchAll(/^### (.+)$/gm)];
    const mainEntity = questions
        .map((question, index) => {
            const answerStart = question.index! + question[0].length;
            const answerEnd = questions[index + 1]?.index ?? faqSection.length;
            const answer = faqSection.slice(answerStart, answerEnd).trim();

            return {
                "@type": "Question",
                name: plainText(question[1]),
                acceptedAnswer: {
                    "@type": "Answer",
                    text: plainText(answer)
                }
            };
        })
        .filter((question) => question.acceptedAnswer.text);

    if (!mainEntity.length) return undefined;

    return {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity
    };
}