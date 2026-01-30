"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PawPrint } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Qui suis-je ?", href: "/about" },
    { name: "Méthode", href: "/method" },
    { name: "Services", href: "/services" },
    { name: "Tarifs", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-neutral-bg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* logo + nom du site */}
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:opacity-80 transition"
          >
            <PawPrint className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight text-neutral-text">
              Atomic<span className="text-secondary">Dog</span>
            </span>
          </Link>

          {/* menu desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-text hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* menu burger mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-text hover:text-primary focus:outline-none"
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

      {/* menu mobile*/}
      {/* affichage conditionnel du bloc si isOpen === true */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block px-3 py-4 text-lg font-medium text-neutral-text hover:text-primary hover:bg-gray-50 w-full text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
