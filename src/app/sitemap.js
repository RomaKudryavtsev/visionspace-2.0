import { i18n } from "@/i18n-conf";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

function buildLanguageAlternates(path) {
    const alternates = {};
    for (const locale of i18n.locales) {
        alternates[locale] = `${SITE_URL}/${locale}${path}`;
    }
    return alternates;
}

export default function sitemap() {
    const lastModified = new Date();
    const urls = [];
    const { locales } = i18n;

    // Home page — one entry per locale with hreflang alternates
    for (const locale of locales) {
        urls.push({
            url: `${SITE_URL}/${locale}`,
            lastModified,
            changeFrequency: "daily",
            priority: 1.0,
            alternates: {
                languages: buildLanguageAlternates(""),
            },
        });
    }

    for (const locale of locales) {
        urls.push(
            // Discuss page
            {
                url: `${SITE_URL}/${locale}/discuss`,
                lastModified,
                changeFrequency: "daily",
                priority: 0.8,
                alternates: {
                    languages: buildLanguageAlternates("/discuss"),
                },
            },
            // Lead generation page
            {
                url: `${SITE_URL}/${locale}/lead-generation`,
                lastModified,
                changeFrequency: "daily",
                priority: 0.8,
                alternates: {
                    languages: buildLanguageAlternates("/lead-generation"),
                },
            }
        );
    }

    return urls;
}
