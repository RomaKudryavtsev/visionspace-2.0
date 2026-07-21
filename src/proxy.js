import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';
import { i18n } from './i18n-conf';

const PUBLIC_FILE = /\.[^/.]+$/;

function getLocale(request) {
    // Negotiator expects a plain object, so transform headers.
    const negotiatorHeaders = {};
    for (const [key, value] of request.headers.entries()) {
        negotiatorHeaders[key] = value;
    }

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        i18n.locales,
    );
    return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

export function proxy(request) {
    const pathname = request.nextUrl.pathname;

     // Do not localize static/public files (e.g. /vector/*.svg, /images/*.png).
    if (PUBLIC_FILE.test(pathname)) {
        return;
    }

    // Skip Next.js internal paths (e.g. /ru/_next/image, /_next/static) regardless of locale prefix.
    if (pathname.includes('/_next/')) {
        return;
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        const pathWithoutRootSlash = pathname === '/' ? '' : pathname;
        return NextResponse.redirect(
            new URL(`/${locale}${pathWithoutRootSlash}`, request.url),
        );
    }
}