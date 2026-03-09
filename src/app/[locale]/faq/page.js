import Link from "next/link";
import FaqList from "@/components/ui/FaqList";
import { MessageCircle, HelpCircle } from "lucide-react";
import { getDictionary } from "@/dictionaries/dictionaries";

export default async function FAQ({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-primary py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern-paw.png')] opacity-5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 text-secondary">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {dict.faqPage.hero.title}
          </h1>
          <p className="text-primary-light text-xl">
            {dict.faqPage.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-20">
        {/* On passe les données traduites au composant Client */}
        <FaqList items={dict.faqPage.questions} />
      </section>

      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-neutral-text mb-4">
          {dict.faqPage.cta.title}
        </h2>
        <p className="text-neutral-text/70 mb-8">{dict.faqPage.cta.desc}</p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
        >
          <MessageCircle className="w-5 h-5" />
          {dict.faqPage.cta.btn}
        </Link>
      </section>
    </div>
  );
}
