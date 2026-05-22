export default function StatsBar() {
  const stats = [
    { value: "15", suffix: "+", label: "Años de Experiencia", desc: "Más de 15 años reparando camiones en California" },
    { value: "500", suffix: "+", label: "Camiones Reparados", desc: "Camiones de todo tipo recuperados y de vuelta en la carretera" },
    { value: "100", suffix: "%", label: "Auditorías Aprobadas", desc: "Nos quedamos hasta que pase la auditoría DOT" },
    { value: "24/7", suffix: "", label: "Disponibilidad", desc: "Siempre listos cuando más nos necesitas en carretera" },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] border-t-4 border-[#C8A545]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8"
          >
            <div className="flex items-end gap-0.5">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="text-2xl font-extrabold text-[#C8A545] mb-1">
                  {stat.suffix}
                </span>
              )}
            </div>
            <p className="text-[#C8A545] font-semibold text-sm mt-1">
              {stat.label}
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