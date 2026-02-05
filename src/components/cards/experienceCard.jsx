import { experiencesData } from "@/data/experiences";

export default function ExperienceCards() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:-translate-x-px md:before:h-full md:before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
      {experiencesData.map((item, index) => {
        const Icon = item.icon;
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.id}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* ICÔNE CENTRALE */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Icon className="w-5 h-5" />
            </div>

            {/* CARTE CONTENU */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                <span className="font-bold text-primary text-lg">
                  {item.title}
                </span>
                <span className="text-xs font-semibold px-2 py-1 bg-neutral-bg text-neutral-text/60 rounded-full w-fit">
                  {item.year}
                </span>
              </div>

              <div className="text-sm text-secondary font-medium mb-2 flex items-center gap-1">
                {item.location}
              </div>

              <p className="text-neutral-text/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}