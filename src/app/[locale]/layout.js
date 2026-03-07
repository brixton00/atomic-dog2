import "@/app/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { getDictionary } from "@/dictionaries/dictionaries";

export const metadata = {
  title: "Atomic Dog - Éducateur Canin",
  description: "Accompagnement et éducation canine comportementale.",
};

export default async function RootLayout({ children, params }) {
  // 1. CORRECTION NEXT.JS 16 : On DOIT "await" les params avant de les détruire
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="antialiased min-h-screen flex flex-col bg-neutral-bg">
        <Navbar dict={dict.navbar} currentLocale={locale} />

        <main className="flex-grow">{children}</main>

        {/* 2. CORRECTION DU FOOTER : On lui passe enfin son dictionnaire et sa locale */}
        <Footer dict={dict.footer} currentLocale={locale} />
      </body>
    </html>
  );
}
