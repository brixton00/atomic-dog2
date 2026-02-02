import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Heart,
  Microscope,
  MessageCircle,
  ClipboardCheck,
  Map,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function MethodPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Une Approche Scientifique & Bienveillante
        </h1>
        <p className="text-primary-light text-xl max-w-3xl mx-auto">
          L'éducation canine a évolué. Oubliez la dominance et la force. Ma
          méthode repose sur l'éthologie et les lois de l'apprentissage pour des
          résultats durables.
        </p>
      </section>

      {/* --- PHILOSOPHIE & SCIENCE --- */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bloc Texte Explicatif */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-secondary">
              <h2 className="text-3xl font-bold text-neutral-text mb-4 flex items-center gap-3">
                <Heart className="text-secondary h-8 w-8" />
                L'Éducation Bienveillante
              </h2>
              <p className="text-neutral-text/80 leading-relaxed mb-4">
                Loin d'être une méthode "permissive", l'éducation bienveillante
                est une approche rigoureuse qui respecte l'intégrité physique et
                émotionnelle du chien. Nous ne cherchons pas à soumettre
                l'animal, mais à obtenir sa{" "}
                <strong>coopération volontaire</strong>.
              </p>
              <p className="text-neutral-text/80 leading-relaxed">
                Concrètement, nous renforçons les bons comportements
                (récompenses, jeux, félicitations) pour qu'ils se répètent, et
                nous gérons l'environnement pour éviter les erreurs, sans jamais
                utiliser la peur ou la douleur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-neutral-text mb-4 flex items-center gap-3">
                <Microscope className="text-primary h-8 w-8" />
                Validé par la Science
              </h2>
              <p className="text-neutral-text/80 leading-relaxed">
                Ma pratique s'appuie sur des données factuelles issues de
                l'éthologie (l'étude du comportement) et de la psychologie
                comportementale.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <Brain className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="text-neutral-text/90">
                    <strong>Conditionnement Opérant (Skinner) :</strong> Le
                    chien apprend par les conséquences de ses actes. Une
                    conséquence agréable renforce le comportement.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Brain className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="text-neutral-text/90">
                    <strong>Respect de l'individualité :</strong> Chaque chien a
                    ses propres motivations, ses peurs et son seuil de
                    tolérance. Pas de "recette magique", mais du sur-mesure.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Illustration */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            {/* Utilisation d'une image existante pertinente */}
            <Image
              src="/assets/images/isabel-vittrup-pallier-yy03FLwEWAw-unsplash.jpg"
              alt="Complicité entre un chien et son humain"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- LE PROCESSUS (PDF Page 1) --- */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Un Accompagnement en 4 Étapes
            </h2>
            <p className="text-lg text-neutral-text/60">
              De la prise de contact à l'autonomie, voici comment nous allons
              travailler ensemble.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Étape 1 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <MessageCircle className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Premier Contact</h3>
              <p className="text-sm text-neutral-text/70">
                Échange téléphonique pour cerner vos besoins et vérifier que je
                suis la bonne personne pour vous aider.
              </p>
              {/* Connecteur visuel (Desktop uniquement) */}
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            {/* Étape 2 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <ClipboardCheck className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Le Bilan</h3>
              <p className="text-sm text-neutral-text/70">
                (Évaluation Comportementale). À votre domicile, analyse complète
                de l'environnement et du chien (2h).
              </p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            {/* Étape 3 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Map className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Plan Personnalisé</h3>
              <p className="text-sm text-neutral-text/70">
                Mise en place d'un protocole d'exercices adapté à VOTRE
                quotidien et à VOTRE chien.
              </p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            {/* Étape 4 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <TrendingUp className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Suivi & Évolution</h3>
              <p className="text-sm text-neutral-text/70">
                Séances pratiques pour ajuster, progresser et valider les acquis
                jusqu'à l'autonomie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="bg-primary-light/20 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-text mb-6">
          Prêt à changer de regard sur votre chien ?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-hover transition-all transform hover:scale-105 shadow-lg"
        >
          Commencer par un bilan <ArrowRight className="h-6 w-6" />
        </Link>
      </section>
    </div>
  );
}
