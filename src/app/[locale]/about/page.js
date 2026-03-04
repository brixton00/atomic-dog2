import Image from "next/image";
import Link from "next/link";
import { Award, Heart, BookOpen, GraduationCap, Quote } from "lucide-react";
// Import du composant Timeline existant
import ExperienceCards from "@/components/cards/experienceCard";

export default function About() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* --- SECTION 1 : HERO & STORY --- */}
      <section className="relative pt-20 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md aspect-[4/5] lg:aspect-square">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] rotate-6 transform translate-y-4 translate-x-4"></div>
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/images/insta_profile_circle_zoomed_more.png"
                alt="Portrait de l'éducatrice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-bg flex items-center gap-3 animate-bounce-slow">
              <Heart className="text-secondary fill-secondary h-6 w-6" />
              <span className="font-bold text-neutral-text text-sm">
                Passionnée &<br />
                Certifiée
              </span>
            </div>
          </div>

          {/* Colonne Texte */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                À propos de moi
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-text mb-6">
                Plus qu'un métier,{" "}
                <span className="text-secondary">une vocation.</span>
              </h1>
            </div>

            <div className="space-y-6 text-lg text-neutral-text/80 leading-relaxed">
              <p>
                Bonjour ! Je suis une éducatrice canine passionnée, dédiée à
                renforcer le lien unique qui unit chaque chien à son humain.
              </p>
              <p>
                Mon approche ne se limite pas à "apprendre des ordres". Mon
                objectif est de vous donner les clés pour{" "}
                <strong>comprendre</strong> votre compagnon : ses besoins, ses
                émotions et son langage.
              </p>
              <p>
                Loin des méthodes coercitives d'autrefois, je défends une
                éducation <strong>100% positive et bienveillante</strong>, basée
                sur les dernières avancées scientifiques en éthologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : MES VALEURS --- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-text mb-6">
              Ma vision de l'éducation
            </h2>
            <p className="text-neutral-text/70 text-lg">
              Chaque chien est un individu à part entière. Il n'existe pas de
              "méthode magique", mais une adaptation constante guidée par trois
              piliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-bg/30 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-neutral-bg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-text mb-2">
                Bienveillance Absolue
              </h3>
              <p className="text-neutral-text/70 text-sm leading-relaxed">
                Aucune violence, ni physique ni psychologique. Nous travaillons
                avec la motivation du chien (jeu, friandises, félicitations)
                pour créer une coopération joyeuse.
              </p>
            </div>

            <div className="bg-neutral-bg/30 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-neutral-bg">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-text mb-2">
                Expertise Scientifique
              </h3>
              <p className="text-neutral-text/70 text-sm leading-relaxed">
                Je me forme continuellement aux nouvelles découvertes en
                éthologie canine pour vous proposer des solutions modernes,
                éthiques et efficaces.
              </p>
            </div>

            <div className="bg-neutral-bg/30 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:bg-neutral-bg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-text mb-2">
                Sur-Mesure
              </h3>
              <p className="text-neutral-text/70 text-sm leading-relaxed">
                Votre vie, votre environnement et votre chien sont uniques.
                J'adapte chaque exercice pour qu'il soit réalisable et pertinent
                dans votre quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : PARCOURS & FORMATIONS (CONDENSÉE) --- */}
      <section className="py-12 px-4 bg-neutral-bg/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Bloc En-tête : Titre + Intro + Image (Layout compact horizontal) */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white p-6 rounded-3xl shadow-sm">
            {/* Partie Texte (2/3) */}
            <div className="w-full md:w-2/3 text-left">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-secondary/10 rounded-full">
                   <GraduationCap className="h-6 w-6 text-secondary" />
                 </div>
                 <h2 className="text-2xl md:text-3xl font-bold text-neutral-text">
                   Mon Parcours
                 </h2>
              </div>
              <p className="text-neutral-text/70 text-base leading-relaxed">
                L'éducation canine exige une formation continue rigoureuse.
                De mon diplôme d'État aux spécialisations en comportement,
                voici les étapes clés qui ont forgé mon expertise et ma méthode
                sur le terrain.
              </p>
            </div>
            
            {/* Partie Image (1/3) - Format paysage compact */}
            <div className="w-full md:w-1/3 relative h-40 md:h-full min-h-[160px] rounded-2xl overflow-hidden shadow-inner">
               <Image
                  src="/assets/images/rick-gebhardt-_c7hWYN28m8-unsplash.jpg"
                  alt="En pleine séance d'éducation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
          </div>

          {/* Timeline - Pleine largeur pour réduire la hauteur des cartes */}
          <div className="w-full">
            <ExperienceCards />
          </div>
          
        </div>
      </section>

      {/* --- SECTION 4 : CTA --- */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="h-10 w-10 text-secondary mx-auto mb-4 opacity-80" />
          <p className="text-xl md:text-3xl font-serif font-medium leading-snug mb-8">
            "Mon but n'est pas de dresser un chien parfait, mais de vous aider à
            construire une relation parfaite avec votre chien."
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-neutral-bg px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}