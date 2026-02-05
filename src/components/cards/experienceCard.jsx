import { experiencesData } from "@/data/experiences";

export default function ExperienceCards() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
      {experiencesData.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="relative flex items-center justify-between group"
          >
            {/* ICÔNE CENTRALE (Alignée à gauche sur la ligne) */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-white shadow shrink-0 z-10">
              <Icon className="w-5 h-5" />
            </div>

            {/* CARTE CONTENU */}
            <div className="w-[calc(100%-4rem)] p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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