import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

export const AppLanguage = {
  English: "en",
  Arabic: "ar-AE",
};

const intlMiddleware = createMiddleware({
  locales: ["en", "ar-AE"],
  defaultLocale: "ar-AE",
  localeDetection: false,
});

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/lp-static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const country =
    request.geo?.country || request.headers.get("x-vercel-ip-country");

  // ✅ IMPORTANT: avoid loop for both "/not-available" and "/ar-AE/not-available"
  const isNotAvailablePage =
    pathname === "/not-available" || pathname.endsWith("/not-available");

  if (country !== "IQ" && !isNotAvailablePage) {
    const url = request.nextUrl.clone();
    url.pathname = "/not-available";
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|lp-static|.*\\..*).*)"],
};
