import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl transition-all duration-300 border overflow-hidden
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
      <div className="p-6 pb-2 flex flex-col items-center text-center">
        {/* En-tête avec Icône */}
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-bg text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-neutral-text mb-3">
          {service.title}
        </h3>

        <p className="text-neutral-text/70 text-sm leading-relaxed mb-4 min-h-[60px]">
          {service.shortDesc}
        </p>
      </div>

      {/* Partie Centrale : Image Standardisée */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay dégradé pour que le texte du prix ressorte si besoin, ou juste esthétique */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

        {/* Prix incrusté sur l'image en bas */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/95 text-primary font-bold text-sm shadow-md backdrop-blur-sm">
            {service.price}
          </span>
        </div>
      </div>

      {/* Partie Inférieure : Action */}
      <div className="p-6 pt-4 mt-auto text-center">
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
