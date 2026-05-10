"use client";

import { useParams } from "next/navigation";
import {
    useTranslation,
} from "react-i18next";

import i18next from "./client";
import {
    useEffect,
    useState,
} from "react";

export function useT(ns?: string) {
    const params = useParams();

    const lang = params.lang;

    if (typeof lang !== "string") {
        throw new Error(
            "useT работает только внутри [lang]"
        );
    }

    const [activeLng, setActiveLng] =
        useState(i18next.resolvedLanguage);

    useEffect(() => {
        if (
            activeLng === i18next.resolvedLanguage
        ) {
            return;
        }

        setActiveLng(i18next.resolvedLanguage);
    }, [activeLng]);

    useEffect(() => {
        if (
            !lang ||
            i18next.resolvedLanguage === lang
        ) {
            return;
        }

        i18next.changeLanguage(lang);
    }, [lang]);

    return useTranslation(ns);
}