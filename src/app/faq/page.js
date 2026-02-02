"use client";
import { useState } from "react";
import Link from "next/link";
import AccordionItem from "@/components/ui/accordionItem";
import { MessageCircle, HelpCircle } from "lucide-react";

export default function FAQ() {
  // Gestion de l'état : quelle question est ouverte ? (null = aucune)
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "À quel âge peut-on commencer l'éducation d'un chiot ?",
      answer:
        "Dès son arrivée à la maison (généralement 2 mois) ! Contrairement aux idées reçues, il ne faut pas attendre 6 mois. Plus on commence tôt, plus on évite les mauvais comportements. L'école du chiot est spécialement conçue pour les apprentissages précoces (propreté, mordillements, solitude).",
    },
    {
      question: "Combien de temps dure un bilan comportemental ?",
      answer:
        "Le bilan dure généralement entre 1h30 et 2h. C'est un entretien approfondi qui se déroule à votre domicile pour observer le chien dans son environnement habituel. Cela nous permet d'établir un diagnostic précis et un plan de travail personnalisé.",
    },
    {
      question: "Quelle est votre méthode de travail ?",
      answer:
        "J'utilise exclusivement des méthodes positives et bienveillantes. Cela signifie que nous renforçons les bons comportements (récompenses, jeu, caresses) au lieu de punir les mauvais. Nous n'utilisons aucun outil coercitif (collier étrangleur, électrique, etc.). L'objectif est la coopération, pas la soumission.",
    },
    {
      question:
        "Mon chien est agressif avec ses congénères, pouvez-vous m'aider ?",
      answer:
        "Oui, la réactivité congénères est un motif fréquent de consultation. Nous travaillerons d'abord sur la gestion de l'environnement et les distances de confort, puis nous mettrons en place des protocoles de désensibilisation. Attention, pour les cas de morsure grave sur humain, merci de me le préciser dès le premier contact.",
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer:
        "Oui, pour les forfaits (École du Chiot, Éducation Adulte), il est possible de régler en 2 ou 3 fois sans frais. Le bilan comportemental est quant à lui à régler à la fin de la séance.",
    },
    {
      question: "Où se déroulent les séances ?",
      answer:
        "Le bilan et les premières leçons se déroulent généralement à votre domicile (Paris & Banlieue proche). Ensuite, selon les besoins du chien, nous pourrons travailler en extérieur (parc, ville, forêt) pour travailler avec des distractions réelles.",
    },
    {
      question: "Que faire si je dois annuler un rendez-vous ?",
      answer:
        "Tout rendez-vous peut être annulé ou déplacé sans frais jusqu'à 24h à l'avance. En deçà de ce délai, la séance sera considérée comme due, sauf cas de force majeure (sur présentation de justificatif).",
    },
  ];

  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern-paw.png')] opacity-5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 text-secondary">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-primary-light text-xl">
            Vous avez des interrogations sur mes méthodes ou mes services ? Les
            réponses se trouvent probablement ici.
          </p>
        </div>
      </section>

      {/* Accordéon */}
      <section className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </section>

      {/* CTA "Pas trouvé ?" */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-neutral-text mb-4">
          Vous n'avez pas trouvé votre réponse ?
        </h2>
        <p className="text-neutral-text/70 mb-8">
          N'hésitez pas à me contacter directement, je serai ravie de vous
          renseigner.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
        >
          <MessageCircle className="w-5 h-5" />
          Me poser une question
        </Link>
      </section>
    </div>
  );
}
