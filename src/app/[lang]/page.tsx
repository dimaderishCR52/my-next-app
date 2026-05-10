"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import { useParams } from "next/navigation";

import i18n from "@/i18n/client";
import { useT } from "@/i18n/useT";

export default function HomePage() {
    const { t } = useT();

    const params = useParams();

    const lang = params.lang as string;

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (lang && i18n.resolvedLanguage !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return (
        <div style={{ padding: 40 }}>
            <h1>
                {t("welcome", {
                    name: "Дима",
                })}
            </h1>

            <p>{t("description")}</p>

            {/* pluralization */}
            <p>{t("items", { count })}</p>

            <button
                onClick={() => setCount((c) => c + 1)}
            >
                +
            </button>

            {/* Trans */}
            <p>
                <Trans
                    i18nKey="richText"
                    components={[
                        <Link
                            key="link"
                            href={`/${lang}/products`}
                            style={{
                                color: "blue",
                            }}
                        />,
                    ]}
                />
            </p>

            <div style={{ marginTop: 20 }}>
                <Link href="/ru">RU</Link>
                {" | "}
                <Link href="/en">EN</Link>
            </div>
        </div>
    );
}