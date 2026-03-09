// src/dictionaries/dictionaries.js

// Définition d'un objet associant la locale à la promesse de chargement du JSON
// L'utilisation d'import() dynamique permet le Code Splitting : on ne charge que le fichier nécessaire.
const dictionaries = {
  fr: () => import("./fr.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  // ⚠️ CORRECTION : Sécurité : fallback sur 'es' (espagnol) au lieu de 'fr'
  // Si un utilisateur tape une locale invalide, on force le chargement du dictionnaire espagnol.
  const loadDict = dictionaries[locale] || dictionaries.es;

  return loadDict();
};
