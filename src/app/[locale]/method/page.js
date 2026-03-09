import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Heart,
  Microscope,
  MessageCircle,
  ClipboardCheck,
  Map,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { getDictionary } from "@/dictionaries/dictionaries";

export default async function MethodPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const m = dict.method; // Alias pour raccourcir le code

  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-primary py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{m.hero.title}</h1>
        <p className="text-primary-light text-xl max-w-3xl mx-auto">
          {m.hero.subtitle}
        </p>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-secondary">
              <h2 className="text-3xl font-bold text-neutral-text mb-4 flex items-center gap-3">
                <Heart className="text-secondary h-8 w-8" />
                {m.philosophy.title1}
              </h2>
              <p className="text-neutral-text/80 leading-relaxed mb-4">
                {m.philosophy.p1}
                <strong>{m.philosophy.p1Strong}</strong>.
              </p>
              <p className="text-neutral-text/80 leading-relaxed mb-6">
                {m.philosophy.p2}
              </p>

              <div className="bg-neutral-bg/50 p-4 rounded-xl border border-secondary/20 flex gap-3 items-start">
                <ShieldCheck className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-text text-sm mb-1">
                    {m.philosophy.frameTitle}
                  </h3>
                  <p className="text-sm text-neutral-text/80 leading-relaxed">
                    {m.philosophy.frameDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-neutral-text mb-4 flex items-center gap-3">
                <Microscope className="text-primary h-8 w-8" />
                {m.philosophy.title2}
              </h2>
              <p className="text-neutral-text/80 leading-relaxed">
                {m.philosophy.p3}
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <Brain className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="text-neutral-text/90">
                    <strong>{m.philosophy.point1Title}</strong>
                    {m.philosophy.point1Desc}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Brain className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="text-neutral-text/90">
                    <strong>{m.philosophy.point2Title}</strong>
                    {m.philosophy.point2Desc}
                  </span>
                </li>
                <li className="flex gap-3 bg-primary/5 p-3 rounded-lg -mx-3">
                  <Lightbulb className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="text-neutral-text/90">
                    <strong>{m.philosophy.point3Title}</strong>
                    {m.philosophy.point3Desc}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/assets/images/isabel-vittrup-pallier-yy03FLwEWAw-unsplash.jpg"
              alt="Complicité"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              {m.process.title}
            </h2>
            <p className="text-lg text-neutral-text/60">{m.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <MessageCircle className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {m.process.steps[0].title}
              </h3>
              <p className="text-sm text-neutral-text/70">
                {m.process.steps[0].desc}
              </p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <ClipboardCheck className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {m.process.steps[1].title}
              </h3>
              <p className="text-sm text-neutral-text/70">
                {m.process.steps[1].desc}
              </p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Map className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {m.process.steps[2].title}
              </h3>
              <p className="text-sm text-neutral-text/70">
                {m.process.steps[2].desc}
              </p>
              <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-neutral-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <TrendingUp className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {m.process.steps[3].title}
              </h3>
              <p className="text-sm text-neutral-text/70">
                {m.process.steps[3].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-light/20 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-text mb-6">
          {m.cta.title}
        </h2>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-hover transition-all transform hover:scale-105 shadow-lg"
        >
          {m.cta.btn} <ArrowRight className="h-6 w-6" />
        </Link>
      </section>
    </div>
  );
}
