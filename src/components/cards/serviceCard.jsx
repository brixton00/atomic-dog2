import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  // Déterminer le prix à afficher en "Une"
  // Si pricing.unit existe on l'utilise, sinon fallback sur price (vieux format)
  const mainPrice = service.pricing?.unit || service.price;
  const hasPacks = service.pricing?.packs?.length > 0;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl transition-all duration-300 border overflow-hidden h-full
      ${
        service.isPopular
          ? "bg-white shadow-xl border-primary/20 scale-105 z-10"
          : "bg-white border-transparent hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {/* Badge Populaire */}
      {service.isPopular && (
        <span className="absolute top-4 right-4 z-20 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          Recommandé
        </span>
      )}

      {/* Partie Supérieure : Contenu Centré */}
      <div className="p-6 pb-2 flex flex-col items-center text-center flex-grow">
        {/* En-tête avec Icône */}
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-bg text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-neutral-text mb-3">
          {service.title}
        </h3>

        <p className="text-neutral-text/70 text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {/* NOUVEAU: Affichage des tarifs compact */}
        <div className="mt-auto pt-4 w-full">
            <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
                <span>{mainPrice}</span>
                {service.pricing?.unitDetail && <span className="text-sm font-normal text-gray-500">{service.pricing.unitDetail}</span>}
            </div>
            {hasPacks && (
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {/* On affiche juste un petit badge "Packs dispo" ou les 2 premiers packs pour ne pas surcharger la carte */}
                    <span className="inline-flex items-center gap-1 text-[10px] bg-secondary/10 text-secondary px-2 py-1 rounded-md font-medium">
                        <Tag className="w-3 h-3" />
                        Packs disponibles
                    </span>
                </div>
            )}
        </div>
      </div>

      {/* Partie Centrale : Image */}
      <div className="relative w-full h-40 overflow-hidden mt-4">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Partie Inférieure : Action */}
      <div className="p-4 text-center border-t border-gray-50">
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-bold text-neutral-text hover:text-secondary transition-colors"
        >
          En savoir plus <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}