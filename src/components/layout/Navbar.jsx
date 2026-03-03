"use client";

import { useState } from "react";
import Link from "next/link";
// On importe useRouter pour pouvoir changer d'URL lors du changement de langue
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, PawPrint, Globe } from "lucide-react";

// Le composant reçoit le dictionnaire et la locale actuelle en props depuis le Layout serveur
export default function Navbar({ dict, currentLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = () => {
    setIsOpen(false);
    setIsLangOpen(false);
  };

  // Les liens sont générés dynamiquement via le dictionnaire
  // On préfixe le href avec currentLocale pour rester dans la bonne langue
  const navLinks = [
    { name: dict.links.home, href: `/${currentLocale}` },
    { name: dict.links.about, href: `/${currentLocale}/about` },
    { name: dict.links.method, href: `/${currentLocale}/method` },
    { name: dict.links.services, href: `/${currentLocale}/services` },
    { name: dict.links.faq, href: `/${currentLocale}/faq` },
    { name: dict.links.contact, href: `/${currentLocale}/contact` },
  ];

  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
  ];

  // Vérifie si le chemin correspond, en tenant compte du préfixe de langue
  const isActive = (path) =>
    pathname === path ||
    (path !== `/${currentLocale}` && pathname.startsWith(path));

  // Fonction de redirection Next.js pour le changement de langue
  const changeLanguage = (newLocale) => {
    if (!pathname) return;

    // On découpe l'URL (ex: "/fr/about" -> ["", "fr", "about"])
    const segments = pathname.split("/");
    // On remplace le segment de la langue par la nouvelle locale choisie
    segments[1] = newLocale;
    // On reforme l'URL (ex: "/en/about")
    const newPath = segments.join("/");

    setIsLangOpen(false);
    // On déclenche la navigation
    router.push(newPath);
  };

  return (
    <nav className="bg-neutral-bg/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO */}
          <Link
            href={`/${currentLocale}`}
            className="flex items-center gap-2 text-primary hover:opacity-80 transition group"
          >
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              <PawPrint className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-text">
              Atomic<span className="text-secondary">Dog</span>
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors duration-200 py-2 border-b-2 
                  ${
                    isActive(link.href)
                      ? "text-primary border-primary"
                      : "text-neutral-text/70 hover:text-primary border-transparent hover:border-primary/30"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* SÉLECTEUR DE LANGUE DESKTOP */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm font-bold text-neutral-text/70 hover:text-primary transition-colors focus:outline-none uppercase"
                aria-label={dict.accessibility.changeLanguage}
              >
                <Globe className="h-5 w-5" />
                <span>{currentLocale}</span>
              </button>

              {/* Menu déroulant absolu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors
                        ${currentLocale === lang.code ? "bg-primary/10 text-primary font-bold" : "text-gray-700 hover:bg-gray-50 hover:text-primary"}
                      `}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* BOUTON BURGER MOBILE */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-text hover:text-primary focus:outline-none p-2"
              aria-label={
                isOpen
                  ? dict.accessibility.closeMenu
                  : dict.accessibility.openMenu
              }
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-lg font-bold w-full text-center rounded-xl transition-colors
                  ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-neutral-text hover:text-primary hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* SÉLECTEUR DE LANGUE MOBILE */}
            <div className="w-full pt-4 mt-2 border-t border-gray-100 flex justify-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-4 py-2 rounded-lg font-bold transition-colors uppercase
                    ${currentLocale === lang.code ? "bg-primary text-white" : "bg-gray-100 text-neutral-text hover:bg-gray-200"}
                  `}
                >
                  {lang.code}
                </button>
              ))}
            </div>

            <Link
              href={`/${currentLocale}/contact`}
              onClick={closeMenu}
              className="mt-6 w-full bg-secondary text-white font-bold py-3 rounded-xl text-center shadow-md active:scale-95 transition-transform"
            >
              {dict.actions.book}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
