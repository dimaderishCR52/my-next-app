"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

import {
    DEFAULT_NS,
    FALLBACK_LANG,
    LANGUAGES,
} from "./config";

if (!i18next.isInitialized) {
    i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`../locales/${language}/${namespace}.json`)
            )
        );

    i18next.init({
        supportedLngs: LANGUAGES,
        fallbackLng: FALLBACK_LANG,

        fallbackNS: DEFAULT_NS,
        defaultNS: DEFAULT_NS,

        interpolation: {
            escapeValue: false,
        },
    });
}

export default i18next;