import { NextRequest, NextResponse } from "next/server";

const locales = ["ru", "en"];

const defaultLocale = "ru";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // проверяем есть ли локаль
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) ||
            pathname === `/${locale}`
    );

    // если локаль уже есть → пропускаем
    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // иначе редирект на язык по умолчанию
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};