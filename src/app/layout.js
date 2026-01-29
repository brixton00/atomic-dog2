import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { Inter } from "next/font/google"; // Police propre et lisible

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Éducation Canine Positive | [Ville]",
  description:
    "Éducatrice canine comportementaliste. Méthode douce et bienveillante pour chiots et chiens adultes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-neutral-bg text-neutral-text min-h-screen flex flex-col`}
      >
        {/* En-tête fixe */}
        <Navbar />

        {/* Contenu principal qui change selon la page */}
        <main className="flex-grow">{children}</main>

        {/* Footer simple (On pourra le séparer dans un composant plus tard) */}
        <footer className="bg-primary text-white py-6 text-center mt-auto">
          <p className="text-sm">
            © {new Date().getFullYear()} Éducation Canine Positive. Tous droits
            réservés.
          </p>
        </footer>
      </body>
    </html>
  );
}
