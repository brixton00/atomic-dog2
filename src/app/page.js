// src/app/page.js
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* --- SECTION HERO --- */}
      <section className="bg-neutral-bg py-12 px-4 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonne Texte */}
          <div className="flex flex-col items-start text-left z-10">
            <span className="text-primary font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
              Éducation Canine Positive
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-text mb-6 leading-tight">
              Une relation harmonieuse avec votre <br />
              <span className="text-secondary">meilleur ami.</span>
            </h1>
            <p className="text-lg text-neutral-text/80 mb-8 max-w-lg leading-relaxed">
              Comportementaliste certifiée, je vous accompagne avec douceur pour
              transformer les défis du quotidien en moments de complicité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Prendre rendez-vous <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold transition-all text-center"
              >
                Découvrir les services
              </Link>
            </div>
          </div>

          {/* Colonne Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
            <Image
              src="/assets/images/pexels-edgar-daniel-hernández-cervantes-3628100.jpg"
              alt="Complicité entre un maître et son chien"
              fill
              className="object-cover"
              priority // Charge cette image en priorité pour le LCP (Core Web Vitals)
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Badge flottant optionnel pour ajouter du dynamisme */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-secondary max-w-xs hidden sm:block">
              <p className="text-sm font-bold text-neutral-text">
                Méthode 100% Positive
              </p>
              <p className="text-xs text-gray-600">
                Respect du bien-être animal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION VALEURS --- */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-text mb-4">
              Ma philosophie
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Heart className="h-10 w-10 text-secondary" />,
                title: "Bien-être",
                desc: "Une approche centrée sur l'état physique et émotionnel de votre compagnon.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "Respect",
                desc: "Zéro contrainte, zéro douleur. Une méthode bienveillante pour des résultats durables.",
              },
              {
                icon: <Sparkles className="h-10 w-10 text-accent" />,
                title: "Écoute",
                desc: "Un accompagnement sur mesure adapté à votre mode de vie et au caractère du chien.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-neutral-bg/30 hover:bg-neutral-bg/60 transition-colors border border-transparent hover:border-primary/10"
              >
                <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-text">
                  {val.title}
                </h3>
                <p className="text-neutral-text/70 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION APPEL À L'ACTION (CTA) --- */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous rencontrez des difficultés avec votre compagnon ?
          </h2>
          <p className="text-primary-light text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Réactivité, anxiété, ou simplement besoin de bases solides pour
            votre chiot... Parlons-en ensemble lors d'un premier bilan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" /> Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  );
}
