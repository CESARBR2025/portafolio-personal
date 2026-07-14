import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (pathLocale) {
    const newPath = pathname.replace(`/${pathLocale}`, "") || "/";
    const response = NextResponse.rewrite(new URL(newPath, request.url));
    response.cookies.set("locale", pathLocale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|images|favicon.ico).*)"],
};
