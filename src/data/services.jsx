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
    price: "65 €",
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
      "L'arrivée d'un chiot est un bouleversement. Je vous guide pour partir sur des bases saines et éviter les erreurs classiques qui créent des problèmes futurs.",
    price: "270 € (Forfait 6 séances)",
    duration: "Suivi sur 1 an",
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
      "Il n'est jamais trop tard pour apprendre. Que ce soit pour acquérir les ordres de base ou perfectionner l'écoute, nous travaillons dans le respect du rythme du chien.",
    price: "50 € / séance",
    duration: "1h",
    icon: GraduationCap,
    isFeatured: true,
    href: "/services#education",
    image: "/assets/images/matt-bradford-aunger-t_BNjSfj6Og-unsplash.jpg",
    benefits: [
      "Marche en laisse détendue",
      "Rappel fiable en toutes circonstances",
      "Positions (Assis, Couché, Pas bouger)",
      "Gestion de l'excitation",
    ],
  },
  {
    id: "balade",
    title: "Balades Éducatives",
    shortDesc:
      "Promenades encadrées pour travailler la socialisation et les codes canins.",
    fullDesc:
      "Votre chien tire en laisse ou réagit aux autres chiens ? Ces balades collectives ou individuelles permettent de travailler en situation réelle.",
    price: "18 € / unité",
    duration: "45 min - 1h",
    icon: Footprints,
    isFeatured: true,
    href: "/services#balade",
    image: "/assets/images/andrew-leu-arvFL4drLKQ-unsplash.jpg",
    benefits: [
      "Lecture des codes canins",
      "Rencontres congénères positives",
      "Dépense physique et mentale",
      "Généralisation des acquis en extérieur",
    ],
  },
  {
    id: "troubles",
    title: "Rééducation Comportementale",
    shortDesc:
      "Gestion de la réactivité, anxiété de séparation, protection de ressources.",
    fullDesc:
      "Pour les problématiques complexes (agressivité, peurs intenses, destruction). Un travail sur mesure pour ramener de la sérénité au foyer.",
    price: "Sur devis",
    duration: "Personnalisé",
    icon: AlertTriangle,
    isFeatured: false,
    href: "/services#troubles",
    image: "/assets/images/storm.jpg", // J'ai utilisé une de tes images 'storm' qui semble correspondre
    benefits: [
      "Désensibilisation progressive",
      "Contre-conditionnement",
      "Gestion de l'environnement",
      "Sécurisation des interactions",
    ],
  },
  {
    id: "garderie",
    title: "Visites à Domicile",
    shortDesc: "Je prends soin de votre compagnon pendant votre absence.",
    fullDesc:
      "Partez l'esprit tranquille. Je passe voir votre animal pour le nourrir, le sortir et jouer avec lui.",
    price: "Dès 18 €",
    duration: "30 min - 1h",
    icon: Home,
    isFeatured: false,
    href: "/services#garderie",
    image: "/assets/images/ralu-gal-G8cB8hY3yvU-unsplash.jpg",
    benefits: [
      "Pas de stress du changement d'environnement",
      "Promenade de quartier incluse",
      "Nouvelles par SMS/Photos",
      "Administration de médicaments si besoin",
    ],
  },
];
