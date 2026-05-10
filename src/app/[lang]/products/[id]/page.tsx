import Link from "next/link";
import { notFound } from "next/navigation";

import { getT } from "@/i18n/getT";
import { products } from "@/data/products";

type Props = {
    params: Promise<{
        lang: string;
        id: string;
    }>;
};

export default async function ProductPage({
                                              params,
                                          }: Props) {
    const { lang, id } = await params;

    const { t } = await getT(
        "products",
        lang
    );

    const product = products.find(
        (p) => p.id === Number(id)
    );

    if (!product) {
        notFound();
    }

    return (
        <div
            style={{
                padding: 40,
                fontFamily: "Arial",
            }}
        >
            <h1>
                {product.name}
            </h1>

            <p>{t("description")}</p>

            <p>
                {t("price", {
                    price: product.price,
                })}
            </p>

            <Link href={`/${lang}/products`}>
                {t("backText")}
            </Link>
        </div>
    );
}