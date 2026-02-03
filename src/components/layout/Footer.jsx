import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  PawPrint,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Changement ici : bg-primary au lieu de bg-neutral-text + suppression de la div SVG "Vague"
    <footer className="bg-primary text-white mt-12 border-t border-white/10">
      {/* Padding réduit : py-8 au lieu de pb-12 pt-12 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Gap réduit : gap-8 au lieu de gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* COLONNE 1 : Marque & Mission */}
          <div className="space-y-4">
            {" "}
            {/* space-y réduit */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-secondary transition-colors">
                <PawPrint className="h-5 w-5 text-secondary group-hover:text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Atomic<span className="text-secondary">Dog</span>
              </span>
            </Link>
            <p className="text-primary-light/90 text-xs leading-relaxed">
              Éducation et comportement canin en méthode 100% positive. Relation
              de confiance et respect mutuel.
            </p>
            <div className="flex gap-2 pt-1">
              <SocialLink
                href="https://instagram.com/atomicdog.k9"
                icon={Instagram}
                label="Instagram"
              />
            </div>
          </div>

          {/* COLONNE 2 : Accès Rapide */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-1 bg-secondary rounded-full"></span> Nos
              Services
            </h3>
            <ul className="space-y-2">
              {" "}
              {/* espacement réduit */}
              <FooterLink href="/services#bilan" label="Bilan Comportemental" />
              <FooterLink href="/services#chiot" label="École du Chiot" />
              <FooterLink href="/services#education" label="Éducation Adulte" />
              <FooterLink href="/services#balade" label="Balades Collectives" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>

          {/* COLONNE 3 : Infos Pratiques */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-1 bg-secondary rounded-full"></span> Infos
              Pratiques
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">
                    Zone d'intervention
                  </span>
                  <span className="text-primary-light">
                    Alcanadre, Logroño, Estella-Lizarra, Tafalla, Calahorra, Pamplona, Navarre, La Rioja etc.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Horaires</span>
                  <div className="text-primary-light space-y-0.5 mt-0.5">
                    <p className="flex justify-between w-full min-w-[120px]">
                      <span>Lun - Ven :</span> <span>9h30 - 20h30</span>
                    </p>
                    <p className="flex justify-between w-full min-w-[120px]">
                      <span>Sam - Dim :</span> <span>9h30 - 19h30</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-1 bg-secondary rounded-full"></span>{" "}
              Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="tel:+34632977059"
                  className="flex items-center gap-2 hover:text-white text-primary-light transition-colors"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="font-medium">+34 632 97 70 59</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:atomicdog.canina@gmail.com"
                  className="flex items-center gap-2 hover:text-white text-primary-light transition-colors"
                >
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="font-medium">atomicdog.canina@gmail.com</span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-4 py-2 rounded-full font-bold transition-all text-xs hover:-translate-y-0.5 shadow-md"
                >
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Copyright & Mentions --- */}
        <div className="border-t border-white/10 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-primary-light/60">
          <p>© {currentYear} Atomic Dog. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link
              href="/legal/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/legal/cgv"
              className="hover:text-white transition-colors"
            >
              CGV
            </Link>
            <Link
              href="/legal/confidentialite"
              className="hover:text-white transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Composants utilitaires (Taille ajustée)
function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-primary-light hover:text-white transition-colors text-xs"
      >
        <ChevronRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 text-secondary" />
        {label}
      </Link>
    </li>
  );
}
