// src/proxy.js

import { NextResponse } from "next/server";

// 1. Définition stricte de nos langues supportées (Whitelist de sécurité)
const locales = ["fr", "en", "es"];
// 2. Langue de repli si aucune n'est trouvée ou demandée
const defaultLocale = "es";

// ⚠️ CHANGEMENT ICI : La fonction s'appelle désormais "proxy" et non plus "middleware"
export function proxy(request) {
  // On récupère le chemin de l'URL demandée (ex: "/about" ou "/en/contact")
  const { pathname } = request.nextUrl;

  // 3. OPTIMISATION DE PERFORMANCE (Crucial pour le jury)
  if (
    pathname.startsWith("/_next") || // Fichiers internes Next.js
    pathname.includes("/api/") || // Tes routes d'API backend
    pathname.match(/\.(.*)$/) // Fichiers avec extension (.jpg, .svg, .ico)
  ) {
    return;
  }

  // 4. Vérification : L'URL contient-elle déjà une langue valide ?
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Si oui, on ne fait rien, on laisse la requête continuer son chemin
  if (pathnameHasLocale) return;

  // 5. Redirection : L'URL n'a pas de langue, on la rajoute.
  // Exemple : demande "/method" -> devient "/fr/method"
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  // NextResponse.redirect renvoie un code HTTP 307 (Temporary Redirect)
  return NextResponse.redirect(request.nextUrl);
}

// 6. LE MATCHER (Filtre au niveau du moteur Next.js)
export const config = {
  matcher: [
    // Expression régulière : on matche TOUTES les routes...
    // SAUF celles commençant par api, _next/static, _next/image, et le favicon
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
