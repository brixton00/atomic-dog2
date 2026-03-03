// Importation indispensable de ta feuille de style globale
import "@/app/globals.css";

// Importation de tes composants structurels
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Je note que tu as un Footer dans ton architecture

// Importation de notre utilitaire de récupération des dictionnaires serveur
import { getDictionary } from "@/dictionaries/dictionaries";

// 1. DÉFINITION DES MÉTADONNÉES (Critère SEO - BC03)
// Idéalement, ces métadonnées devraient aussi être traduites via la fonction generateMetadata() de Next.js,
// mais nous commençons par une base solide.
export const metadata = {
  title: "Atomic Dog - Éducateur Canin",
  description: "Accompagnement et éducation canine comportementale.",
};

// 2. COMPOSANT LAYOUT (Server Component)
// Next.js injecte la prop "params" automatiquement dans les routes dynamiques comme [locale]
export default async function RootLayout({ children, params }) {
  // Extraction de la locale demandée dans l'URL (ex: "fr", "en", "es")
  const { locale } = params;

  // Chargement asynchrone du bon fichier JSON côté serveur
  const dict = await getDictionary(locale);

  return (
    // Injection dynamique de la langue pour l'accessibilité (Lecteurs d'écran) et le SEO
    <html lang={locale}>
      {/* Le body structure l'ensemble du site. 
        L'utilisation de flex et min-h-screen permet de repousser le Footer toujours en bas de page.
      */}
      <body className="antialiased min-h-screen flex flex-col bg-neutral-bg">
        {/* Injection ciblée (Prop Drilling) : 
          On ne transmet à la Navbar QUE la section du dictionnaire dont elle a besoin, 
          ainsi que la locale active pour gérer ses redirections.
        */}
        <Navbar dict={dict.navbar} currentLocale={locale} />

        {/* La balise <main> accueille le contenu spécifique de chaque page (ex: page.js) 
          La classe flex-grow lui demande de prendre tout l'espace disponible entre Navbar et Footer.
        */}
        <main className="flex-grow">{children}</main>

        {/* Ton composant Footer existant (à traduire ultérieurement selon la même logique) */}
        <Footer />
      </body>
    </html>
  );
}
