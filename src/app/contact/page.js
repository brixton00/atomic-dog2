"use client";

import { useState, useEffect } from "react";
// import Link from "next/link"; 
import dynamic from "next/dynamic";
import Image from "next/image"; 
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Instagram,
  ArrowUpRight,
  Info // Ajout de l'icône Info pour l'encart déplacé
} from "lucide-react";

// 🛡️ IMPORT DYNAMIQUE : Charge la carte uniquement côté client
const InterventionMap = dynamic(
  () => import("@/components/ui/interventionMap"), // Attention à la casse du nom de fichier (InterventionMap vs interventionMap)
  { 
    loading: () => <div className="h-64 w-full bg-neutral-200 animate-pulse rounded-2xl flex items-center justify-center text-neutral-500 text-sm">Chargement de la carte...</div>,
    ssr: false 
  }
);

// --- CONFIGURATION INSTAGRAM ---
// ⚠️ Collez ici l'URL JSON fournie par un service tiers (ex: Behold.so)
// Si vide, le site utilisera les images de secours ci-dessous.
const INSTAGRAM_FEED_URL = ""; 

// Images de secours (Fallback) si l'API ne répond pas ou n'est pas configurée
const FALLBACK_POSTS = [
  "/assets/images/443719459_949572787176611_7232919707611566629_n.jpg",
  "/assets/images/480884701_933148905688266_2285257989744581531_n.jpg",
  "/assets/images/489292102_1206368131497074_6617977029715989235_n.jpg",
  "/assets/images/489696551_1206368011497086_6796632461418678929_n.jpg",
  "/assets/images/jay-wennington-CdK2eYhWfQ0-unsplash.jpg", 
  "/assets/images/ryan-antooa-VU7q54PiB7U-unsplash.jpg"
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  // État pour stocker les posts (vrais ou fallback)
  const [instaPosts, setInstaPosts] = useState(FALLBACK_POSTS);

  // 1. Logique de récupération des VRAIS posts
  useEffect(() => {
    async function fetchInstagram() {
      if (!INSTAGRAM_FEED_URL) return; // Si pas d'URL configurée, on garde les fallbacks

      try {
        const response = await fetch(INSTAGRAM_FEED_URL);
        if (!response.ok) throw new Error("Erreur fetch Instagram");
        
        const data = await response.json();
        
        // Adaptation selon le format reçu (exemple générique compatible Behold.so)
        // On s'assure de ne récupérer que les URLs des images
        const cleanPosts = data.map(post => post.mediaUrl || post.media_url || post.imageUrl);
        
        // On ne met à jour que si on a trouvé des images valides
        if (cleanPosts.length > 0) {
          setInstaPosts(cleanPosts);
        }
      } catch (error) {
        console.warn("Impossible de charger le flux Instagram réel, utilisation du fallback.", error);
        // On ne fait rien, l'état initial (FALLBACK_POSTS) reste actif
      }
    }

    fetchInstagram();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* Injection CSS locale pour le scroll */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite; /* Ralenti un peu pour la lisibilité (20s -> 30s) */
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- HEADER --- */}
      <section className="bg-primary py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Parlons de votre chien
          </h1>
          <p className="text-primary-light text-xl">
            Une question ? Un problème de comportement ? Remplissez ce
            formulaire ou contactez-moi directement pour une première approche.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* --- COLONNE GAUCHE : Coordonnées & Instagram --- */}
        <div className="space-y-8">
          
          {/* Carte Coordonnées */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/10">
            <h2 className="text-2xl font-bold text-neutral-text mb-8">
              Mes coordonnées
            </h2>
            <div className="space-y-8">
              {/* WhatsApp / Téléphone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-neutral-text">
                    Téléphone & WhatsApp
                  </p>
                  <a
                    href="tel:+34632977059"
                    className="text-lg text-neutral-text/80 hover:text-primary transition-colors font-medium"
                  >
                    +34 632 97 70 59
                  </a>
                  <p className="text-xs text-gray-400 mt-1">
                    Réponse sous 24h (laissez un message)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-neutral-text">Email</p>
                  <a
                    href="mailto:atomicdog.canina@gmail.com"
                    className="text-lg text-neutral-text/80 hover:text-primary transition-colors font-medium break-all"
                  >
                    atomicdog.canina@gmail.com
                  </a>
                </div>
              </div>

              {/* Zone d'intervention AVEC CARTE */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-bg rounded-xl text-neutral-text shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <p className="font-bold text-neutral-text">
                    Zone d'intervention
                  </p>
                  <p className="text-neutral-text/70 mb-4">
                    Je me déplace à votre domicile dans un rayon de 50km environ autour
                    de ma localisation (Alcanadre).
                  </p>
                  
                  <div className="h-64 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative z-0">
                    <InterventionMap />
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Alcanadre", "Logroño", "Estella-Lizarra", "Tafalla", "Calahorra", "Pamplona", "Navarre", "La Rioja"].map((ville, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                          {ville}
                        </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp Direct */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-md"
              >
                <MessageCircle className="h-5 w-5" />
                Discuter sur WhatsApp
              </a>
            </div>
          </div>

          {/* --- MODULE INSTAGRAM (Vrais posts via useEffect) --- */}
          <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-white rounded-[22px] overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-pink-50 p-2.5 rounded-full text-[#E1306C]">
                            <Instagram className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-text leading-tight">Suivez le quotidien</p>
                            <a href="https://instagram.com/atomicdog.k9" target="_blank" className="text-sm text-neutral-text/60 hover:text-[#E1306C] transition-colors">@atomicdog.k9</a>
                        </div>
                    </div>
                    <a href="https://instagram.com/atomicdog.k9" target="_blank" className="text-[#E1306C] hover:bg-pink-50 p-2 rounded-full transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                    </a>
                </div>
                
                {/* Zone de défilement automatique */}
                <div className="py-6 overflow-hidden relative">
                    <div className="animate-scroll flex gap-4 px-4">
                        {/* On boucle sur instaPosts (qui contient soit les vrais, soit les fallbacks) */}
                        {[...instaPosts, ...instaPosts].map((src, i) => (
                            <div key={i} className="relative h-32 w-32 shrink-0 rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                                {/* Attention: Si src est une URL externe, il faut configurer next.config.mjs pour autoriser le domaine (ex: scontent.cdninstagram.com) */}
                                {/* Sinon, utiliser <img /> standard au lieu de <Image /> pour éviter les erreurs Next.js Image Optimization */}
                                <img 
                                    src={src} 
                                    alt="Instagram post" 
                                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          {/* L'encart "Pourquoi demander un bilan ?" a été déplacé à droite ! */}
        </div>

        {/* --- COLONNE DROITE : Info Bilan + Formulaire --- */}
        <div className="flex flex-col gap-6"> {/* Ajout d'un conteneur flex pour espacer l'encart du formulaire */}
          
          {/* --- 2. ENCART DÉPLACÉ ICI --- */}
          <div className="bg-neutral-bg border-l-4 border-primary p-6 rounded-r-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                <Info className="h-6 w-6" />
              </div>
              <div>
                 <h3 className="font-bold text-primary mb-2 text-lg">
                  Pourquoi demander un bilan ?
                </h3>
                <p className="text-neutral-text/80 leading-relaxed">
                  Le bilan comportemental est la première étape indispensable. Il ne
                  vous engage pas sur un forfait, mais vous apporte déjà des
                  réponses concrètes et un plan d'action adapté à votre chien.
                </p>
              </div>
            </div>
          </div>

          {/* --- FORMULAIRE --- */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden h-fit">
            {formStatus === "success" ? (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-text mb-2">
                  Message envoyé !
                </h3>
                <p className="text-neutral-text/70 mb-8">
                  Merci de m'avoir contactée. Je reviens vers vous très vite
                  (généralement sous 24h).
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="text-primary font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : null}

            <h2 className="text-2xl font-bold text-neutral-text mb-6">
              Envoyez-moi un message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nom & Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-bold text-neutral-text/80"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-bold text-neutral-text/80"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Email & Tel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-neutral-text/80"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="exemple@mail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-neutral-text/80"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="06 00 00 00 00"
                  />
                </div>
              </div>

              {/* Sujet (Select) */}
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-bold text-neutral-text/80"
                >
                  Je suis intéressé(e) par...
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="bilan">Bilan Comportemental (Recommandé)</option>
                  <option value="chiot">École du Chiot</option>
                  <option value="education">Éducation Adulte</option>
                  <option value="balade">Balades Éducatives</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-neutral-text/80"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Racontez-moi brièvement les difficultés que vous rencontrez avec votre chien..."
                ></textarea>
              </div>

              {/* Bouton Submit */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer ma demande <Send className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                En soumettant ce formulaire, vous acceptez d'être recontacté(e)
                dans le cadre de votre demande. Vos données restent
                confidentielles.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}