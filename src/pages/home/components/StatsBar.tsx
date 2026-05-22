import { useSiteContent } from "@/hooks/useSiteContent";

export default function StatsBar() {
  const { getValue } = useSiteContent();

  const stats = [
    { valueKey: "hero_stat1_value", labelKey: "hero_stat1_label", desc: "Más de 15 años reparando camiones en California" },
    { valueKey: "hero_stat2_value", labelKey: "hero_stat2_label", desc: "Camiones de todo tipo recuperados y de vuelta en la carretera" },
    { valueKey: "hero_stat3_value", labelKey: "hero_stat3_label", desc: "Nos quedamos hasta que pase la auditoría DOT" },
    { valueKey: "hero_stat4_value", labelKey: "hero_stat4_label", desc: "Siempre listos cuando más nos necesitas en carretera" },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] border-t-4 border-[#C8A545]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {stats.map((stat) => (
          <div
            key={stat.labelKey}
            className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8"
          >
            <div className="flex items-end gap-0.5">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                {getValue("hero", stat.valueKey, "")}
              </span>
            </div>
            <p className="text-[#C8A545] font-semibold text-sm mt-1">
              {getValue("hero", stat.labelKey, "")}
            </p>
            <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}