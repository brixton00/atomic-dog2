import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 border border-transparent 
      ${
        service.isPopular
          ? "bg-white shadow-xl border-primary/20 scale-105 z-10"
          : "bg-white/50 hover:bg-white hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {/* Badge Populaire */}
      {service.isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Point de départ
        </span>
      )}

      {/* En-tête avec Icône */}
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-bg text-primary">
        <Icon className="w-6 h-6" />
      </div>

      {/* Contenu */}
      <h3 className="text-xl font-bold text-neutral-text mb-2">
        {service.title}
      </h3>
      <p className="text-neutral-text/70 mb-4 text-sm flex-grow">
        {service.shortDesc}
      </p>

      {/* Prix */}
      <div className="text-primary font-bold text-lg mb-6">{service.price}</div>

      {/* Bouton */}
      <Link
        href={service.href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-hover transition-colors"
      >
        En savoir plus <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
