const steps = [
  {
    num: "1",
    icon: "ri-phone-line",
    title: "Llámanos o Contáctanos",
    desc: "Cuando tu camión falla o necesita una auditoría DOT, contáctanos de inmediato. Estamos disponibles para atenderte rápidamente en San Bernardino y áreas cercanas.",
  },
  {
    num: "2",
    icon: "ri-truck-line",
    title: "Evaluación y Diagnóstico",
    desc: "Nuestro equipo evalúa completamente tu camión con diagnóstico por computadora. Identificamos el problema exacto y te damos un presupuesto claro y honesto.",
  },
  {
    num: "3",
    icon: "ri-tools-line",
    title: "Reparación Profesional",
    desc: "Nuestros mecánicos expertos reparan todo tipo de fallas — DPF, transmisiones, motor, frenos, auditorías — con herramientas profesionales y repuestos de calidad.",
  },
  {
    num: "4",
    icon: "ri-road-map-line",
    title: "De Vuelta en la Carretera",
    desc: "Hacemos pruebas exhaustivas antes de entregarte tu camión. Para auditorías DOT, nos quedamos hasta que pases. Tu unidad sale lista para trabajar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A545] border border-[#C8A545]/40 rounded-full px-4 py-1 mb-4">
          Cómo Funciona
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-14">
          Tu Camión de Vuelta en la Carretera en 4 Pasos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-[#1a1a1a] border border-white/5 hover:border-[#C8A545]/30 rounded-2xl px-6 py-8 text-center flex flex-col items-center cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 mt-2 bg-[#C8A545]/15 group-hover:bg-[#C8A545]/25 transition-colors">
                <i className={`${step.icon} text-[#C8A545] text-2xl`}></i>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A545] text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center">
                {step.num}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}