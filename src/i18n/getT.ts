import { initI18next } from "./server";

export async function getT(
    ns?: string | string[],
    lang: string = "ru"
) {
    const i18n = await initI18next(lang, ns);

    return {
        t: i18n.getFixedT(lang, ns),
        i18n,
    };
}