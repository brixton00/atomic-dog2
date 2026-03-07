import Image from "next/image";
import Link from "next/link";
import { Award, Heart, BookOpen, GraduationCap, Quote } from "lucide-react";
import ExperienceCards from "@/components/cards/experienceCard";

// Import de la fonction d'extraction du dictionnaire
import { getDictionary } from "@/dictionaries/dictionaries";

export default async function About({ params }) {
  // 1. Extraction de la locale depuis l'URL
  const { locale } = await params;

  // 2. Chargement du dictionnaire correspondant
  const dict = await getDictionary(locale);

  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* --- SECTION 1 : HERO & STORY --- */}
      <section className="relative pt-20 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative mx-auto lg:mx-0 w-full max-w-md aspect-[4/5] lg:aspect-square">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] rotate-6 transform translate-y-4 translate-x-4"></div>
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/images/insta_profile_circle_zoomed_more.png"
                alt={dict.about.hero.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-bg flex items-center gap-3 animate-bounce-slow">
              <Heart className="text-secondary fill-secondary h-6 w-6" />
              <span className="font-bold text-neutral-text text-sm">
                {dict.about.hero.badgeLine1}
                <br />
                {dict.about.hero.badgeLine2}
              </span>
            </div>
          </div>

          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                {dict.about.hero.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-text mb-6">
                {dict.about.hero.title1}{" "}
                <span className="text-secondary">
                  {dict.about.hero.titleHighlight}
                </span>
              </h1>
            </div>

            <div className="space-y-6 text-lg text-neutral-text/80 leading-relaxed">
              <p>{dict.about.hero.p1}</p>
              <p>{dict.about.hero.p2}</p>
              <p>{dict.about.hero.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : MES VALEURS --- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-text mb-6">
              {dict.about.values.title}
            </h2>
            <p className="text-neutral-text/70 text-lg">
              {dict.about.values.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-bg/30 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-neutral-bg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-text mb-2">
                {dict.about.values.val1Title}
              </h3>
              <p className="text-neutral-text/70 text-sm leading-relaxed">
                {dict.about.values.val1Desc}
              </p>
            </div>

            <div className="bg-neutral-bg/30 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-neutral-bg">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-text mb-2">
                {dict.about.values.val2Title}
              </h3>
              <p className="text-neutral-text/70 text-sm leading-relaxed">
                {dict.about.values.val2Desc}
              </p>
            </div>

            <div className="bg-neutral-bg/30 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-neutral-bg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-text mb-2">
                {dict.about.values.val3Title}
              </h3>
              <p className="text-neutral-text/70 text-sm leading-relaxed">
                {dict.about.values.val3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : PARCOURS --- */}
      <section className="py-12 px-4 bg-neutral-bg/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white p-6 rounded-3xl shadow-sm">
            <div className="w-full md:w-2/3 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-text">
                  {dict.about.journey.title}
                </h2>
              </div>
              <p className="text-neutral-text/70 text-base leading-relaxed">
                {dict.about.journey.desc}
              </p>
            </div>

            <div className="w-full md:w-1/3 relative h-40 md:h-full min-h-[160px] rounded-2xl overflow-hidden shadow-inner">
              <Image
                src="/assets/images/rick-gebhardt-_c7hWYN28m8-unsplash.jpg"
                alt={dict.about.journey.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="w-full">
            {/* Attention : ExperienceCards devra lui aussi être converti selon la même logique que services.jsx */}
            <ExperienceCards />
          </div>
        </div>
      </section>

      {/* --- SECTION 4 : CTA --- */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="h-10 w-10 text-secondary mx-auto mb-4 opacity-80" />
          <p className="text-xl md:text-3xl font-serif font-medium leading-snug mb-8">
            "{dict.about.cta.quote}"
          </p>
          <div className="flex justify-center">
            {/* Correction critique : Le lien utilise désormais la locale */}
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary hover:bg-neutral-bg px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {dict.about.cta.btn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
