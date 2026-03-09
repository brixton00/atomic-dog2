import { getDictionary } from "@/dictionaries/dictionaries";
import ContactClient from "@/components/forms/ContactClient";

export default async function Contact({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="bg-neutral-bg min-h-screen">
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- HEADER SERVEUR --- */}
      <section className="bg-primary py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {dict.contactPage.hero.title}
          </h1>
          <p className="text-primary-light text-xl">
            {dict.contactPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* --- FORMULAIRE CLIENT (On passe le dictionnaire en prop) --- */}
      <ContactClient dict={dict.contactPage} />
    </div>
  );
}
