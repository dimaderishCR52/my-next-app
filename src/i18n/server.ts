import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

import {
    DEFAULT_NS,
    FALLBACK_LANG,
    LANGUAGES,
} from "./config";

export async function initI18next(
    lang: string,
    ns?: string | string[]
) {
    const i18nInstance = createInstance();

    await i18nInstance
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`../locales/${language}/${namespace}.json`)
            )
        )
        .init({
            lng: lang,
            supportedLngs: LANGUAGES,
            fallbackLng: FALLBACK_LANG,

            defaultNS: DEFAULT_NS,
            fallbackNS: DEFAULT_NS,

            ns,

            interpolation: {
                escapeValue: false,
            },
        });

    return i18nInstance;
}