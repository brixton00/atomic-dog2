import {
  BrainCircuit,
  Footprints,
  Dog,
  GraduationCap,
  Home,
} from "lucide-react";

export const servicesData = [
  {
    id: "bilan",
    title: "Bilan Comportemental",
    shortDesc:
      "Le point de départ obligatoire. Analyse complète de la relation et de l'environnement.",
    price: "65 € / séance",
    icon: BrainCircuit,
    isFeatured: true,
    isPopular: true, // Pour mettre un badge "Recommandé"
    href: "/services#bilan",
  },
  {
    id: "chiot",
    title: "École du Chiot",
    shortDesc:
      "Les bonnes bases : propreté, socialisation et gestion des émotions.",
    price: "270 € (Forfait 6 séances)",
    icon: Dog,
    isFeatured: true,
    href: "/services#chiot",
  },
  {
    id: "education",
    title: "Éducation Adulte",
    shortDesc:
      "Marche en laisse, rappel, pas bouger. Méthode douce sans contrainte.",
    price: "50 € / séance",
    icon: GraduationCap,
    isFeatured: true,
    href: "/services#education",
  },
  {
    id: "balade",
    title: "Balades Éducatives",
    shortDesc:
      "Promenades encadrées pour travailler la socialisation et les codes canins.",
    price: "18 € / unité",
    icon: Footprints,
    isFeatured: true,
    href: "/services#balade",
  },
  {
    id: "garderie",
    title: "Visites à Domicile",
    shortDesc:
      "Cuidado / Guardería. Je prends soin de votre compagnon pendant votre absence.",
    price: "Dès 18 €",
    icon: Home,
    isFeatured: false, // Accessible via la page services complète
    href: "/services#garderie",
  },
];
