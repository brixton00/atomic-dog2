import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import ServiceCard from "@/components/cards/serviceCard"; // Assure-toi que le chemin est bon
import { servicesData } from "@/data/services"; // Assure-toi que le chemin est bon

export default function Home() {
  // On filtre uniquement les services marqués comme "à la une"
  const featuredServices = servicesData.filter((s) => s.isFeatured);

  return (
    <div className="flex flex-col w-full">
      {/* --- SECTION HERO --- */}
      <section className="bg-neutral-bg py-12 px-4 md:py-20 lg:py-24 overflow-hidden relative">
        {/* Forme décorative d'arrière-plan (Optionnel mais joli) */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Colonne Texte */}
          <div className="flex flex-col items-start text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs md:text-sm tracking-wider uppercase mb-6">
              Éducation Canine Positive & Bienveillante
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-text mb-6 leading-[1.1]">
              Une relation de confiance avec votre{" "}
              <span className="text-secondary">meilleur ami.</span>
            </h1>
            <p className="text-lg text-neutral-text/80 mb-8 max-w-lg leading-relaxed">
              Comportementaliste certifiée, je vous accompagne pour transformer
              les défis du quotidien (réactivité, chiot, solitude) en moments de
              complicité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Prendre rendez-vous <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                Voir les services
              </Link>
            </div>
          </div>

          {/* Colonne Image */}
          <div className="relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-4 border-white">
            <Image
              src="/assets/images/pexels-edgar-daniel-hernández-cervantes-3628100.jpg"
              alt="Éducatrice canine avec un chien heureux"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Badge flottant Hero */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-bold text-neutral-text">
                  Méthode 100% Positive
                </p>
              </div>
              <p className="text-xs text-gray-600 leading-snug">
                Respect du bien-être physique et émotionnel de l'animal. Zéro
                coercition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SERVICES (Dynamique) --- */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Mes accompagnements sur-mesure
            </h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-neutral-text/70 text-lg">
              Que vous ayez un chiot à éduquer ou un chien adulte avec des
              comportements gênants, j'ai une solution adaptée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block text-primary font-bold hover:underline underline-offset-4"
            >
              Voir tous les tarifs et détails &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION PHILOSOPHIE --- */}
      <section className="bg-neutral-bg/50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Philosophie (Tu pourras changer l'image ici) */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/assets/images/pexels-blue-bird-7210748.jpg"
              alt="Philosophie éducation positive"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-neutral-text mb-6">
              Pourquoi choisir l'éducation positive ?
            </h2>
            <p className="text-lg text-neutral-text/80 mb-8 leading-relaxed">
              Loin des méthodes punitives d'antan, je base mon travail sur la
              science de l'apprentissage et l'éthologie canine.
            </p>

            <ul className="space-y-4">
              {[
                "Comprendre plutôt que contraindre",
                "Renforcer les bons comportements",
                "Développer la confiance mutuelle",
                "Résultats durables et respectueux",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-neutral-text font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/method"
              className="mt-8 inline-block bg-white border border-gray-200 px-6 py-3 rounded-full text-neutral-text font-bold hover:bg-gray-50 transition shadow-sm"
            >
              Découvrir ma méthode
            </Link>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern-paw.png')] opacity-5"></div>{" "}
        {/* Idée pour plus tard : pattern */}
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Prêt à changer votre quotidien ?
          </h2>
          <p className="text-primary-light text-xl mb-10 max-w-2xl mx-auto font-light">
            Le premier pas vers une vie sereine commence par un échange.
            Discutons de votre chien.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-hover text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" /> Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  );
}
