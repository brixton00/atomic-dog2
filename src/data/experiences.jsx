import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  MapPin 
} from "lucide-react";

export const experiencesData = [
  {
    id: 1,
    year: "2023 - Aujourd'hui",
    title: "Instructrice en Centre Canin",
    location: "Cours Collectifs",
    description: "Animation de séances de groupe : socialisation, obéissance et gestion des interactions congénères.",
    icon: Briefcase,
    type: "experience"
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Responsable de Pension Canine",
    location: "Navarre (Espagne)",
    description: "Gestion complète d'une structure d'accueil : soins quotidiens, logistique et bien-être animal.",
    icon: MapPin,
    type: "experience"
  },
  {
    id: 3,
    year: "2022",
    title: "Spécialisation Troubles du Comportement",
    location: "Avec Nicolas Greveldinger",
    description: "Formation expert sur la réhabilitation comportementale et la gestion des cas complexes.",
    icon: GraduationCap,
    type: "formation"
  },
  {
    id: 4,
    year: "2020 - 2022",
    title: "Réhabilitation & Accompagnement",
    location: "Refuge Animalier",
    description: "Accompagnement et réhabilitation des chiens sauvés en processus d'adoption (Perros rescatados).",
    icon: HeartHandshake,
    type: "experience"
  },
  {
    id: 5,
    year: "2020",
    title: "Manipulation Chiens de Refuge",
    location: "Formation Spécialisée",
    description: "Techniques de sécurité et d'approche pour les chiens craintifs ou défensifs en milieu confiné.",
    icon: ShieldCheck,
    type: "formation"
  },
  {
    id: 6,
    year: "2019",
    title: "Habilitation Chiens Catégorisés",
    location: "Certification Officielle",
    description: "Formation à la manipulation et à la gestion des chiens dits 'dangereux' (Loi 1999).",
    icon: Award,
    type: "formation"
  },
  {
    id: 7,
    year: "2019",
    title: "Secourisme Canin",
    location: "Formation Certifiante",
    description: "Maîtrise des gestes de premiers secours et soins d'urgence pour chiens.",
    icon: Award,
    type: "formation"
  },
  {
    id: 8,
    year: "2018",
    title: "Diplôme National d'Éducateur Canin",
    location: "France",
    description: "Obtention du diplôme d'État. Socle théorique et pratique de l'éducation canine.",
    icon: GraduationCap,
    type: "formation"
  }
];