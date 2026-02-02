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
      "Avant toute chose, je dois comprendre qui est votre chien et comment vous vivez ensemble. Ce bilan à domicile (durée max 2h) nous permet d'identifier les causes profondes des comportements gênants.",
    price: "65 € / séance", // [cite: 71]
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
    title: "École du Chiot (Curso Cachorro)",
    shortDesc:
      "Les bonnes bases : propreté, socialisation et gestion des émotions.",
    fullDesc:
      "L'arrivée d'un chiot est un bouleversement. Je vous guide pour partir sur des bases saines. Formule complète de 6 séances réparties sur 1 an pour suivre l'évolution.",
    price: "270 € (Forfait)", // [cite: 77]
    duration: "6 séances sur 1 an",
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
    title: "Éducation Adulte",
    shortDesc:
      "Marche en laisse, rappel, pas bouger. Méthode douce sans contrainte.",
    fullDesc:
      "Il n'est jamais trop tard pour apprendre. Tarifs dégressifs disponibles : Pack 4 séances à 195€ ou Pack 8 séances à 380€.",
    price: "50 € / séance", // [cite: 78, 80, 82]
    duration: "1h",
    icon: GraduationCap,
    isFeatured: true,
    href: "/services#education",
    image: "/assets/images/matt-bradford-aunger-t_BNjSfj6Og-unsplash.jpg",
    benefits: [
      "Séance à l'unité : 50 €",
      "Pack 4 séances : 195 € (au lieu de 200€)",
      "Pack 8 séances : 380 € (au lieu de 400€)",
      "Rappel, Marche en laisse, Positions",
    ],
  },
  {
    id: "balade",
    title: "Balades Éducatives",
    shortDesc:
      "Promenades encadrées pour travailler la socialisation et les codes canins.",
    fullDesc:
      "Votre chien tire en laisse ou réagit aux autres chiens ? Travaillez en situation réelle. Disponible à l'unité ou en Pack de 5 balades pour 60€.",
    price: "18 € / heure", // [cite: 72, 73]
    duration: "45 min - 1h",
    icon: Footprints,
    isFeatured: true,
    href: "/services#balade",
    image: "/assets/images/andrew-leu-arvFL4drLKQ-unsplash.jpg",
    benefits: [
      "Séance à l'unité : 18 €",
      "Pack 5 balades : 60 €",
      "Lecture des codes canins",
      "Dépense physique et mentale",
    ],
  },
  {
    id: "troubles",
    title: "Modification de Comportement", // [cite: 52]
    shortDesc:
      "Gestion de la réactivité, anxiété, agressivité. Travail sur mesure.",
    fullDesc:
      "Pour les problématiques complexes nécessitant un suivi rigoureux. Tarifs avantageux en pack : 3 séances (165€), 5 séances (270€) ou 10 séances (500€).",
    price: "55 € / séance", // [cite: 83, 84, 85, 86]
    duration: "Personnalisé",
    icon: AlertTriangle,
    isFeatured: false,
    href: "/services#troubles",
    image: "/assets/images/storm.jpg",
    benefits: [
      "Séance à l'unité : 55 €",
      "Pack 3 séances : 165 €",
      "Pack 5 séances : 270 €",
      "Pack 10 séances : 500 €",
    ],
  },
  {
    id: "garderie",
    title: "Garde à Domicile (Guardería)",
    shortDesc: "Je prends soin de votre compagnon pendant votre absence.",
    fullDesc:
      "Visites à domicile pour nourrir, sortir et jouer avec votre animal. Tarif à partir de 18€, session complète à 45€.",
    price: "Dès 18 €", // [cite: 74, 75]
    duration: "Variable",
    icon: Home,
    isFeatured: false,
    href: "/services#garderie",
    image: "/assets/images/ralu-gal-G8cB8hY3yvU-unsplash.jpg",
    benefits: [
      "Session standard : 45 €",
      "Pas de stress du changement d'environnement",
      "Promenade de quartier incluse",
      "Nouvelles par SMS/Photos",
    ],
  },
];
