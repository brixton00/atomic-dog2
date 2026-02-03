import Link from "next/link";
import Image from "next/image";
// Fusion des imports d'icônes nécessaires pour les deux codes
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Star } from "lucide-react";
// Assurez-vous que ces chemins sont corrects dans votre projet
import ServiceCard from "@/components/cards/serviceCard";
import { servicesData } from "@/data/services";

export default function Home() {
  // Données pour la section Services (issu du Code 1)
  const featuredServices = servicesData.filter((s) => s.isFeatured);

  return (
    <div className="flex flex-col w-full bg-neutral-bg min-h-screen">
      
      {/* --- 1. HERO SECTION HYBRIDE --- */}
      {/* Structure grand format du Code 2 + Contenu du Code 1 */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond avec overlay sombre (issu du Code 2) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/jay-wennington-CdK2eYhWfQ0-unsplash.jpg" // Image d'ambiance forte du Code 2
            alt="Éducation canine positive et bienveillante"
            fill
            className="object-cover brightness-[0.4]" // Assombri pour la lisibilité du texte blanc
            priority
          />
        </div>

        {/* Contenu central (issu du Code 1, adapté en blanc) */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/90 text-white font-bold text-xs md:text-sm tracking-wider uppercase mb-6 shadow-md">
             Éducation Canine Positive & Bienveillante
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Une relation de confiance avec votre{" "}
            <span className="text-secondary">meilleur ami.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Comportementaliste certifiée, je vous accompagne pour transformer
            les défis du quotidien (réactivité, chiot, solitude) en moments de
            complicité.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              Prendre rendez-vous <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2 text-lg"
            >
              Voir les services
            </Link>
          </div>
        </div>

        {/* Badge flottant "Méthode Positive" (issu du Code 1, intégré dans le Hero) */}
        <div className="absolute bottom-32 right-4 md:right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-[280px] md:max-w-xs z-20 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
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
      </section>


      {/* --- 2. SECTION SERVICES DYNAMIQUES (Issu du Code 1) --- */}
      <section className="bg-white py-24 px-4 relative z-10 rounded-t-[3rem] -mt-10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
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
              className="inline-block text-primary font-bold hover:underline underline-offset-4 text-lg"
            >
              Voir tous les tarifs et détails &rarr;
            </Link>
          </div>
        </div>
      </section>


      {/* --- 3. PRÉSENTATION (Issu du Code 2) --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <Image
            src="/assets/images/0105be0f-9322-4024-8718-7ce79d17e96f.jpg" // Photo personnelle du Code 2
            alt="Éducatrice canine Atomic Dog"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text">
            Bienvenue chez Atomic Dog
          </h2>
          <p className="text-lg text-neutral-text/80 leading-relaxed">
            Je suis éducatrice comportementaliste passionnée. Mon objectif n'est pas de dresser votre chien, mais de vous apprendre à le comprendre.
          </p>
          <p className="text-lg text-neutral-text/80 leading-relaxed">
            Fini les méthodes coercitives. Ici, on travaille avec la motivation, le jeu et le respect des besoins de l'animal pour des résultats durables au quotidien.
          </p>
          <Link href="/about" className="text-primary font-bold hover:underline underline-offset-4 inline-flex items-center gap-2 text-lg">
            En savoir plus sur moi <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>


      {/* --- 4. FOCUS BILAN (Issu du Code 2) --- */}
      <section className="bg-primary py-20 px-4 text-white my-12 rounded-3xl mx-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 order-2 md:order-1">
            <div>
                <div className="inline-block bg-secondary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
                Étape Obligatoire
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Le Bilan Comportemental
                </h2>
                <p className="text-primary-light text-xl leading-relaxed">
                Avant tout cours, nous devons nous rencontrer. Ce rendez-vous de 2h à votre domicile permet d'analyser l'environnement et de définir un plan d'action sur mesure.
                </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 bg-primary-light/10 p-3 rounded-xl">
                <CheckCircle2 className="text-secondary h-7 w-7 flex-shrink-0" />
                <span className="text-lg font-medium">Analyse complète du comportement</span>
              </li>
              <li className="flex items-center gap-3 bg-primary-light/10 p-3 rounded-xl">
                <CheckCircle2 className="text-secondary h-7 w-7 flex-shrink-0" />
                <span className="text-lg font-medium">Identification des causes profondes</span>
              </li>
              <li className="flex items-center gap-3 bg-primary-light/10 p-3 rounded-xl">
                <CheckCircle2 className="text-secondary h-7 w-7 flex-shrink-0" />
                <span className="text-lg font-medium">Mise en place du protocole de travail</span>
              </li>
            </ul>
            <div className="pt-4">
               <Link 
                href="/services#bilan" 
                className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-md inline-block text-lg"
              >
                Tout savoir sur le Bilan
              </Link>
            </div>
          </div>
          {/* Image illustrative Bilan */}
          <div className="flex-1 relative h-[350px] w-full md:h-[500px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl order-1 md:order-2 rotate-1 hover:rotate-0 transition-all duration-500">
            <Image
              src="/assets/images/ryan-antooa-VU7q54PiB7U-unsplash.jpg" // Image bilan du Code 2
              alt="Bilan comportemental chien"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* --- 5. SECTION PHILOSOPHIE (Issu du Code 1) --- */}
      <section className="bg-neutral-bg/50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Philosophie */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/assets/images/pexels-blue-bird-7210748.jpg" // Image philo du Code 1
              alt="Philosophie éducation positive"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-6">
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
                  <span className="text-neutral-text font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
                <Link
                href="/method"
                className="inline-block bg-white border-2 border-gray-200 px-8 py-4 rounded-full text-neutral-text font-bold hover:bg-gray-50 hover:border-primary transition-all shadow-sm text-lg"
                >
                Découvrir ma méthode
                </Link>
            </div>
          </div>
        </div>
      </section>


      {/* --- CTA FINAL (Version Image de Fond) --- */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* 1. Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/443719459_949572787176611_7232919707611566629_n.jpg" // ⚠️ Remplacer par le chemin de votre image (ex: une photo de chien qui court ou un moment complice)
            alt="Complicité maître et chien"
            fill
            className="object-cover"
          />
          {/* 2. Overlay (Voile sombre) pour assurer la lisibilité du texte blanc */}
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </div>

        {/* 3. Contenu (Z-index pour passer au-dessus de l'image) */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-lg">
            Prêt à changer votre quotidien ?
          </h2>
          <p className="text-gray-100 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Le premier pas vers une vie sereine commence par un échange.
            <br />Discutons de votre chien.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-hover text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105 hover:shadow-secondary/50"
          >
            <MessageCircle className="h-7 w-7" /> Contactez-moi
          </Link>
        </div>
      </section>

    </div>
  );
}