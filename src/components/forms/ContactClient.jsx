"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Instagram,
  ArrowUpRight,
  Info,
  User,
  Dog,
  Map,
} from "lucide-react";

const InterventionMap = dynamic(
  () => import("@/components/ui/interventionMap"),
  {
    loading: () => (
      <div className="h-64 w-full bg-neutral-200 animate-pulse rounded-2xl flex items-center justify-center text-neutral-500 text-sm">
        Chargement de la carte...
      </div>
    ),
    ssr: false,
  },
);

const INSTAGRAM_FEED_URL = "";
const FALLBACK_POSTS = [
  "/assets/images/443719459_949572787176611_7232919707611566629_n.jpg",
  "/assets/images/480884701_933148905688266_2285257989744581531_n.jpg",
  "/assets/images/489292102_1206368131497074_6617977029715989235_n.jpg",
  "/assets/images/489696551_1206368011497086_6796632461418678929_n.jpg",
  "/assets/images/jay-wennington-CdK2eYhWfQ0-unsplash.jpg",
  "/assets/images/ryan-antooa-VU7q54PiB7U-unsplash.jpg",
];

export default function ContactClient({ dict }) {
  const [formStatus, setFormStatus] = useState("idle");
  const [instaPosts, setInstaPosts] = useState(FALLBACK_POSTS);

  useEffect(() => {
    async function fetchInstagram() {
      if (!INSTAGRAM_FEED_URL) return;
      try {
        const response = await fetch(INSTAGRAM_FEED_URL);
        if (!response.ok) throw new Error("Erreur fetch Instagram");
        const data = await response.json();
        const cleanPosts = data.map(
          (post) => post.mediaUrl || post.media_url || post.imageUrl,
        );
        if (cleanPosts.length > 0) setInstaPosts(cleanPosts);
      } catch (error) {
        console.warn("Utilisation du fallback Instagram.", error);
      }
    }
    fetchInstagram();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      <div className="space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-neutral-text mb-8">
            {dict.info.title}
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-neutral-text">
                  {dict.info.phoneTitle}
                </p>
                <a
                  href="tel:+34632977059"
                  className="text-lg text-neutral-text/80 hover:text-primary transition-colors font-medium"
                >
                  +34 632 97 70 59
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  {dict.info.phoneDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-neutral-text">
                  {dict.info.emailTitle}
                </p>
                <a
                  href="mailto:atomicdog.canina@gmail.com"
                  className="text-lg text-neutral-text/80 hover:text-primary transition-colors font-medium break-all"
                >
                  atomicdog.canina@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-neutral-bg rounded-xl text-neutral-text shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="w-full">
                <p className="font-bold text-neutral-text">
                  {dict.info.zoneTitle}
                </p>
                <p className="text-neutral-text/70 mb-4">
                  {dict.info.zoneDesc}
                </p>
                <div className="h-64 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative z-0">
                  <InterventionMap />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Alcanadre",
                    "Logroño",
                    "Estella-Lizarra",
                    "Tafalla",
                    "Calahorra",
                    "Pamplona",
                    "Navarre",
                    "La Rioja",
                  ].map((ville, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600"
                    >
                      {ville}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <a
              href="https://wa.me/34632977059"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-md"
            >
              <MessageCircle className="h-5 w-5" />
              {dict.info.whatsappBtn}
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-white rounded-[22px] overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-pink-50 p-2.5 rounded-full text-[#E1306C]">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-neutral-text leading-tight">
                    {dict.info.instaTitle}
                  </p>
                  <a
                    href="https://instagram.com/atomicdog.k9"
                    target="_blank"
                    className="text-sm text-neutral-text/60 hover:text-[#E1306C] transition-colors"
                  >
                    @atomicdog.k9
                  </a>
                </div>
              </div>
              <a
                href="https://instagram.com/atomicdog.k9"
                target="_blank"
                className="text-[#E1306C] hover:bg-pink-50 p-2 rounded-full transition-colors"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
            <div className="py-6 overflow-hidden relative">
              <div className="animate-scroll flex gap-4 px-4">
                {[...instaPosts, ...instaPosts].map((src, i) => (
                  <div
                    key={i}
                    className="relative h-32 w-32 shrink-0 rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
                  >
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
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-neutral-bg border-l-4 border-primary p-6 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2 text-lg">
                {dict.form.whyTitle}
              </h3>
              <p className="text-neutral-text/80 leading-relaxed">
                {dict.form.whyDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden h-fit">
          {formStatus === "success" ? (
            <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-text mb-2">
                {dict.form.successTitle}
              </h3>
              <p className="text-neutral-text/70 mb-8">
                {dict.form.successDesc}
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="text-primary font-bold hover:underline"
              >
                {dict.form.successBtn}
              </button>
            </div>
          ) : null}

          <h2 className="text-2xl font-bold text-neutral-text mb-6">
            {dict.form.title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-secondary" />
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">
                  {dict.form.section1}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstname"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.firstName}
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastname"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.lastName}
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="text-xs font-bold text-neutral-text/70"
                >
                  {dict.form.city}
                </label>
                <div className="relative">
                  <Map className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-dashed border-gray-100">
              <div className="flex items-center gap-2 mb-2 pt-2">
                <Dog className="h-4 w-4 text-secondary" />
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">
                  {dict.form.section2}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-1">
                  <label
                    htmlFor="dogName"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.dogName}
                  </label>
                  <input
                    type="text"
                    id="dogName"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-1">
                  <label
                    htmlFor="dogAge"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.dogAge}
                  </label>
                  <input
                    type="text"
                    id="dogAge"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-1">
                  <label
                    htmlFor="dogBreed"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.dogBreed}
                  </label>
                  <input
                    type="text"
                    id="dogBreed"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-dashed border-gray-100">
              <div className="flex items-center gap-2 mb-2 pt-2">
                <Mail className="h-4 w-4 text-secondary" />
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">
                  {dict.form.section3}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold text-neutral-text/70"
                  >
                    {dict.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-xs font-bold text-neutral-text/70"
                >
                  {dict.form.subject}
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all appearance-none"
                >
                  <option value="bilan">
                    {dict.form.subjectOptions.bilan}
                  </option>
                  <option value="chiot">
                    {dict.form.subjectOptions.chiot}
                  </option>
                  <option value="education">
                    {dict.form.subjectOptions.education}
                  </option>
                  <option value="balade">
                    {dict.form.subjectOptions.balade}
                  </option>
                  <option value="autre">
                    {dict.form.subjectOptions.autre}
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-neutral-text/70"
                >
                  {dict.form.message}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-bg border border-gray-200 focus:border-primary outline-none transition-all resize-none"
                  placeholder={dict.form.messagePlaceholder}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
            >
              {formStatus === "submitting" ? (
                dict.form.submittingBtn
              ) : (
                <>
                  {dict.form.submitBtn} <Send className="h-5 w-5" />
                </>
              )}
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">
              {dict.form.disclaimer}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
