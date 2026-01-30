import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";

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
        {/* en tête fixe*/}
        <Navbar />

        {/* contenu principal - change selon la page */}
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
