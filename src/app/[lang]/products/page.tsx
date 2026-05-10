"use client";

import Link from "next/link";
import { Trans } from "react-i18next";

import { useT } from "@/i18n/useT";
import { products } from "@/data/products";

export default function ProductsPage() {
    const { t } = useT("products");

    return (
        <div
            style={{
                padding: 40,
                fontFamily: "Arial",
            }}
        >
            <h1>{t("title")}</h1>

            <p>
                {t("items", {
                    count: products.length,
                })}
            </p>

            <div
                style={{
                    display: "grid",
                    gap: 20,
                    marginTop: 20,
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: 12,
                            padding: 20,
                        }}
                    >
                        <h2>{product.name}</h2>

                        <p>
                            {t("price", {
                                price: product.price,
                            })}
                        </p>

                        <p>
                            <Trans
                                ns="products"
                                i18nKey="richText"
                                components={[
                                    <Link
                                        key="link"
                                        href={`./products/${product.id}`}
                                        style={{
                                            color: "blue",
                                        }}
                                    />,
                                ]}
                            />
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}