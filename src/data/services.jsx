import {
  ClipboardList,
  Footprints,
  Dog,
  GraduationCap,
  Home,
  AlertTriangle,
} from "lucide-react";

export const servicesData = [
  {
    id: "bilan",
    title: "Bilan Comportemental",
    shortDesc:
      "Le point de départ obligatoire. Analyse complète de la relation et de l'environnement.",
    fullDesc:
      "Avant toute chose, je dois comprendre qui est votre chien et comment vous vivez ensemble. Ce bilan à domicile nous permet d'identifier les causes profondes des comportements gênants.",
    pricing: {
      unit: "65 €",
      unitDetail: "/ séance",
      packs: []
    },
    duration: "1h30 - 2h",
    icon: ClipboardList,
    isFeatured: true,
    isPopular: true,
    href: "/services#bilan",
    image: "/assets/images/ryan-antooa-VU7q54PiB7U-unsplash.jpg",
    benefits: [
      "Analyse de l'environnement familial",
      "Observation du chien dans son quotidien",
      "Définition des objectifs d'éducation",
      "Mise en place du protocole de travail",
    ],
  },
  {
    id: "chiot",
    title: "École du Chiot",
    shortDesc:
      "Les bonnes bases : propreté, socialisation et gestion des émotions.",
    fullDesc:
      "L'arrivée d'un chiot est un bouleversement. Je vous guide pour partir sur des bases saines. Formule complète pour suivre l'évolution.",
    pricing: {
      unit: "45 €",
      unitDetail: "/ séance",
      packs: [
        { name: "Formule 6 séances (1 an)", price: "270 €", detail: "Suivi complet" }
      ]
    },
    duration: "1h",
    icon: Dog,
    isFeatured: true,
    href: "/services#chiot",
    image: "/assets/images/alvan-nee-T-0EW-SEbsE-unsplash (1).jpg",
    benefits: [
      "Apprentissage de la propreté & solitude",
      "Inhibition de la morsure",
      "Socialisation congénères et humains",
      "Prévention des peurs et anxiété",
    ],
  },
  {
    id: "education",
    title: "Éducation de Base (Adulte)",
    shortDesc:
      "Obéissance, marche en laisse et gestion du calme. Méthode respectueuse.",
    fullDesc:
      "Pour les chiens adultes ayant besoin de revoir les bases ou de corriger de mauvaises habitudes. Un accompagnement complet avec suivi.",
    pricing: {
      unit: "55 €",
      unitDetail: "/ heure",
      packs: [
        { name: "Pack 3 séances", price: "160 €", detail: "soit ~53€/séance" },
        { name: "Pack 6 séances", price: "320 €", detail: "soit ~53€/séance" }
      ]
    },
    duration: "1h à 1h30",
    icon: GraduationCap,
    isFeatured: true,
    href: "/services#education",
    image: "/assets/images/matt-bradford-aunger-t_BNjSfj6Og-unsplash.jpg",
    benefits: [
      "Obéissance : Assis, Reste, Rappel, Marche en laisse",
      "Contrôle des impulsions & Calme",
      "Suivi & Corrections WhatsApp 7j/7",
      "Compte rendu détaillé après chaque séance",
    ],
  },
  {
    id: "balade",
    title: "Balades Éducatives",
    shortDesc:
      "Promenades encadrées pour travailler la socialisation et les codes canins.",
    fullDesc:
      "Votre chien tire en laisse ou réagit aux autres chiens ? Travaillez en situation réelle avec des congénères.",
    pricing: {
      unit: "16 €",
      unitDetail: "/ heure",
      packs: [
        { name: "Pack 5 balades", price: "60 €", detail: "soit 12€ la balade (Promo)" }
      ]
    },
    duration: "1h - 1h30",
    icon: Footprints,
    isFeatured: true,
    href: "/services#balade",
    image: "/assets/images/andrew-leu-arvFL4drLKQ-unsplash.jpg",
    benefits: [
      "Travail de la socialisation",
      "Lecture des codes canins",
      "Dépense physique et mentale",
      "Apprentissage du calme",
    ],
  },
  {
    id: "troubles",
    title: "Modification de Comportement",
    shortDesc:
      "Gestion de la réactivité, agressivité, anxiété, destruction... Solutions aux problèmes complexes.",
    fullDesc:
      "Une expertise ciblée pour résoudre tous les troubles du comportement que peut vivre votre chien.",
    pricing: {
      unit: "60 €",
      unitDetail: "/ séance",
      packs: [
        { name: "Pack 4 séances", price: "235 €", detail: "Suivi intensif" },
        { name: "Pack 8 séances", price: "450 €", detail: "Rééducation complète" },
        { name: "Pack 10 séances", price: "500 €", detail: "Expertise approfondie" }
      ]
    },
    duration: "Personnalisé",
    icon: AlertTriangle,
    isFeatured: false,
    href: "/services#troubles",
    image: "/assets/images/storm.jpg",
    benefits: [
      "Gestion de la réactivité (laisse, congènères, humains, vélos/joggeurs etc.)",
      "Agressivité",
      "Anxiété de séparation & destruction matérielle",
      "Protection de ressources",
      "Peurs et phobies",
      "hyper-attachement ou aboiements excessifs",
      "Suivi quotidien & Gestion émotionnelle",
    ],
  },
  {
    id: "garderie",
    title: "Garde à Domicile",
    shortDesc: "Je prends soin de votre compagnon pendant votre absence.",
    fullDesc:
      "Visites et gardes à votre domicile pour le confort de votre animal. Plusieurs formules adaptées à vos besoins.",
    pricing: {
      unit: "Dès 25 €",
      unitDetail: "",
      packs: [
        { name: "Journée", price: "25 €", detail: "3 promenades + soins" },
        { name: "Nuit", price: "25 €", detail: "Présence nocturne" },
        { name: "Premium (24h)", price: "45 €", detail: "Jour + Nuit inclus" }
      ]
    },
    duration: "Variable",
    icon: Home,
    isFeatured: false,
    href: "/services#garderie",
    image: "/assets/images/ralu-gal-G8cB8hY3yvU-unsplash.jpg",
    benefits: [
      "Pas de stress du changement d'environnement",
      "Promenades incluses",
      "Nouvelles par SMS/Photos",
      "Soins et médicaments si besoin",
    ],
  },
];