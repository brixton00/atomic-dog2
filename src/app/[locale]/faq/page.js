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
      question: "Qu'est-ce qu'un éducateur canin et à quoi ça sert ?",
      answer:
        "C'est un spécialiste de la relation Homme-Chien. Mon rôle n'est pas de simplement « dresser » votre animal, mais de vous fournir les outils pour le comprendre et communiquer clairement avec lui. Cela sert à établir des règles de vie saines, à résoudre des problèmes du quotidien (propreté, destruction, solitude) et à garantir la sécurité et le bien-être de tous.",
    },
    {
      question: "Qu'est-ce que cela peut m'apporter ?",
      answer:
        "Au-delà de l'obéissance pure, cela vous apporte de la sérénité. Vous apprendrez à décrypter les signaux de votre chien, à prévenir les conflits et à renforcer votre complicité. C'est un investissement pour construire une relation harmonieuse qui durera 10 ou 15 ans.",
    },
    {
      question: "À qui cela s'adresse-t-il ?",
      answer:
        "À tout le monde ! Aux propriétaires de chiots qui veulent partir sur de bonnes bases, aux familles rencontrant des difficultés avec un chien adulte, ou simplement aux passionnés qui veulent approfondir leur lien. Il n'y a pas de « mauvais maître », il n'y a que des binômes qui ont besoin d'ajustements.",
    },
    {
      question: "Quand faire appel à un éducateur canin ?",
      answer:
        "L'idéal est la prévention : dès l'arrivée du chiot ou avant même une adoption. Cependant, il faut consulter dès l'apparition d'un comportement gênant (agressivité, peur, aboiements excessifs). N'attendez pas que la situation s'envenime ; il est toujours plus facile de prévenir que de guérir.",
    },
    {
      question:
        "Est-il encore possible de changer le comportement de mon chien (malgré son âge/passé) ?",
      answer:
        "OUI, absolument. Le cerveau du chien reste plastique toute sa vie. Qu'il ait 5 ans, 10 ans, ou un passé lourd (refuge, maltraitance), on peut toujours modifier des comportements et apaiser des émotions. Cela demande parfois plus de patience qu'avec un chiot, mais les progrès sont toujours possibles.",
    },
    {
      question: "Quelles méthodes utilisez-vous ?",
      answer:
        "Je travaille exclusivement avec des méthodes positives et bienveillantes, basées sur les sciences comportementales (éthologie). Nous utilisons la motivation du chien (jeu, récompenses) pour renforcer les bons comportements. Je refuse tout outil coercitif (collier étrangleur, électrique) ou violence physique/psychologique.",
    },
    {
      question: "Où se déroulent les séances ?",
      answer:
        "Le Bilan Comportemental (1ère séance) se déroule obligatoirement à votre domicile pour observer le chien dans son environnement réel. Les séances de suivi peuvent ensuite avoir lieu à domicile ou en extérieur (parc, ville, forêt) selon les problématiques à travailler (marche en laisse, rappel, congénères).",
    },
    {
      question: "Comment solliciter une première séance ?",
      answer:
        "Vous pouvez me contacter via le formulaire du site ou par téléphone. Nous conviendrons ensemble d'un rendez-vous pour effectuer un Bilan Comportemental (durée 1h30 à 2h). C'est l'étape indispensable pour que je puisse analyser la situation et vous proposer un plan de travail sur-mesure.",
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer:
        "Oui. Le bilan comportemental est à régler le jour même de la séance. En revanche, pour les forfaits d'éducation ou de rééducation, vous avez la possibilité de régler en 2 fois sans frais pour étaler la dépense.",
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
            Comprendre mon métier, mes méthodes et le déroulement des séances.
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
          Chaque situation est unique. N'hésitez pas à me contacter pour en
          discuter de vive voix.
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