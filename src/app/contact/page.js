"use client"; // Nécessaire pour gérer l'état du formulaire (onSubmit)

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  // État pour gérer la soumission du formulaire (simulation)
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'submitting', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulation d'un envoi réseau (ex: vers EmailJS ou API)
    setTimeout(() => {
      setFormStatus("success");
      // Ici, tu pourras ajouter la vraie logique d'envoi plus tard
    }, 1500);
  };

  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* --- HEADER --- */}
      <section className="bg-primary py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern-paw.png')] opacity-5"></div>
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
        {/* --- COLONNE GAUCHE : Coordonnées & Info --- */}
        <div className="space-y-12">
          {/* Carte Coordonnées */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/10">
            <h2 className="text-2xl font-bold text-neutral-text mb-8">
              Mes coordonnées
            </h2>
            <div className="space-y-6">
              {/* WhatsApp / Téléphone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-neutral-text">
                    Téléphone & WhatsApp
                  </p>
                  <a
                    href="tel:+33600000000"
                    className="text-neutral-text/70 hover:text-primary transition-colors"
                  >
                    06 00 00 00 00
                  </a>
                  <p className="text-xs text-gray-400 mt-1">
                    Réponse sous 24h (laissez un message)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-neutral-text">Email</p>
                  <a
                    href="mailto:contact@atomic-dog.fr"
                    className="text-neutral-text/70 hover:text-primary transition-colors"
                  >
                    contact@atomic-dog.fr
                  </a>
                </div>
              </div>

              {/* Zone (Map placeholder) */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-bg rounded-xl text-neutral-text">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-neutral-text">
                    Zone d'intervention
                  </p>
                  <p className="text-neutral-text/70 mb-2">
                    Je me déplace à votre domicile dans un rayon de 30km autour
                    de ma localisation.
                  </p>
                  {/* Badge de villes (Exemple) */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                      Ville A
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                      Ville B
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                      Région C
                    </span>
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

          {/* Encart "Pourquoi me contacter ?" */}
          <div className="bg-neutral-bg border border-primary/20 p-6 rounded-2xl">
            <h3 className="font-bold text-primary mb-2">
              Pourquoi demander un bilan ?
            </h3>
            <p className="text-sm text-neutral-text/80">
              Le bilan comportemental est la première étape indispensable. Il ne
              vous engage pas sur un forfait, mais vous apporte déjà des
              réponses concrètes et un plan d'action.
            </p>
          </div>
        </div>

        {/* --- COLONNE DROITE : Formulaire --- */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Message de succès après envoi */}
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
  );
}
