import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, CalendarDays } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* --- Header de Page --- */}
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Mes Services & Tarifs
        </h1>
        <p className="text-primary-light text-xl max-w-2xl mx-auto">
          De l'éducation du chiot à la rééducation comportementale, je vous
          propose un accompagnement adapté à vos besoins et à ceux de votre
          chien.
        </p>
      </section>

      {/* --- Liste des Services --- */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0; // Pour alterner gauche/droite

          return (
            <div
              key={service.id}
              id={service.id} // Permet les ancres (ex: /services#bilan)
              className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenu */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-text">
                    {service.title}
                  </h2>
                </div>

                <div className="text-2xl font-bold text-primary">
                  {service.price}
                  <span className="text-base font-normal text-neutral-text/60 ml-2">
                    • Durée : {service.duration}
                  </span>
                </div>

                <p className="text-lg text-neutral-text/80 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Liste des bénéfices */}
                <ul className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-text font-medium text-sm md:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-neutral-text text-white px-6 py-3 rounded-full font-bold hover:bg-primary transition-colors"
                  >
                    <CalendarDays className="h-5 w-5" />
                    Réserver ce service
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- CTA Bas de page --- */}
      <section className="bg-white py-16 px-4 text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold text-neutral-text mb-6">
          Vous ne savez pas quel service choisir ?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary text-xl font-bold hover:underline underline-offset-4"
        >
          Contactez-moi pour en discuter <ArrowRight className="h-6 w-6" />
        </Link>
      </section>
    </div>
  );
}
