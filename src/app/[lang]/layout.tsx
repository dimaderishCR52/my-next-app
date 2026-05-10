import "@/i18n/client";

export async function generateStaticParams() {
    return [
        { lang: "ru" },
        { lang: "en" },
    ];
}

export default async function LangLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang}>
        <body>{children}</body>
        </html>
    );
}