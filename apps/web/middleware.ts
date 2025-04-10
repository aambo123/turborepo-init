import { NextResponse,NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { auth } from "@/lib/auth";
let locales = ['en', 'ko']

// Get the preferred locale, similar to the above or using a library
function getLocale(request:NextRequest) {
   
  let headers = { 'accept-language': 'en,ko;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
  let locales = ['ko','en']
  let defaultLocale = 'en'
  
  return match(languages, locales, defaultLocale) // -> 'en-US'
}
 
export default auth((request: NextRequest)=>{
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
})
 
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],

}