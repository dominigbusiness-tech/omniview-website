import { NextResponse, type NextRequest } from "next/server"
import { LANG_COOKIE, LOCALE_HEADER, SPANISH_SPEAKING_COUNTRIES } from "@/lib/language"

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isSpanishPath = pathname === "/es" || pathname.startsWith("/es/")

  // Automatic first-visit redirect only applies to the true root route,
  // and only when the visitor has never made a manual language choice.
  if (pathname === "/") {
    const manualLang = request.cookies.get(LANG_COOKIE)?.value

    if (manualLang === "es") {
      const url = request.nextUrl.clone()
      url.pathname = "/es"
      return NextResponse.redirect(url)
    }

    if (!manualLang) {
      const country = request.headers.get("x-vercel-ip-country")
      if (country && SPANISH_SPEAKING_COUNTRIES.has(country)) {
        const url = request.nextUrl.clone()
        url.pathname = "/es"
        return NextResponse.redirect(url)
      }
    }
  }

  // Propagate the resolved locale to Server Components via a request header
  // so the root layout can set <html lang> without a client-side flash.
  const headers = new Headers(request.headers)
  headers.set(LOCALE_HEADER, isSpanishPath ? "es" : "en")
  return NextResponse.next({ request: { headers } })
}
