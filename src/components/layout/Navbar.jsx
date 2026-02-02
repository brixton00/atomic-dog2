"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Nouveau hook pour l'état actif
import { Menu, X, PawPrint } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Permet de savoir sur quelle page on est

  const closeMenu = () => setIsOpen(false);

  // Liste mise à jour selon l'avancement du projet
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Qui suis-je ?", href: "/about" },
    { name: "Méthode", href: "/method" }, // Cette page reste à créer
    { name: "Services & Tarifs", href: "/services" }, // Fusionné
    { name: "FAQ", href: "/faq" }, // Ajouté
    { name: "Contact", href: "/contact" },
  ];

  // Fonction utilitaire pour vérifier si le lien est actif
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-neutral-bg/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO */}
          <Link
            href="/"
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
          <div className="hidden md:flex space-x-8">
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
          </div>

          {/* BOUTON BURGER MOBILE */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-text hover:text-primary focus:outline-none p-2"
              aria-label="Ouvrir le menu"
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

      {/* MENU MOBILE (Full width) */}
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
            {/* CTA Mobile supplémentaire */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 w-full bg-secondary text-white font-bold py-3 rounded-xl text-center shadow-md active:scale-95 transition-transform"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
