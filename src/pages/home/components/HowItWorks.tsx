import { useSiteContent } from "@/hooks/useSiteContent";
import { useSteps } from "@/hooks/useSteps";

export default function HowItWorks() {
  const { getValue } = useSiteContent();
  const { steps, loading } = useSteps();

  const fallbackSteps = [
    { id: 1, title: "Llámanos o Contáctanos", description: "Cuando tu camión falla o necesita una auditoría DOT, contáctanos de inmediato. Estamos disponibles para atenderte rápidamente en San Bernardino y áreas cercanas.", icon: "ri-phone-line" },
    { id: 2, title: "Evaluación y Diagnóstico", description: "Nuestro equipo evalúa completamente tu camión con diagnóstico por computadora. Identificamos el problema exacto y te damos un presupuesto claro y honesto.", icon: "ri-truck-line" },
    { id: 3, title: "Reparación Profesional", description: "Nuestros mecánicos expertos reparan todo tipo de fallas — DPF, transmisiones, motor, frenos, auditorías — con herramientas profesionales y repuestos de calidad.", icon: "ri-tools-line" },
    { id: 4, title: "De Vuelta en la Carretera", description: "Hacemos pruebas exhaustivas antes de entregarte tu camión. Para auditorías DOT, nos quedamos hasta que pases. Tu unidad sale lista para trabajar.", icon: "ri-road-map-line" },
  ];

  const displaySteps = steps.length > 0 ? steps : fallbackSteps;

  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A545] border border-[#C8A545]/40 rounded-full px-4 py-1 mb-4">
          {getValue("hiw", "hiw_badge", "Cómo Funciona")}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-14">
          {getValue("hiw", "hiw_title", "Tu Camión de Vuelta en la Carretera en 4 Pasos")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displaySteps.map((step, index) => (
            <div
              key={step.id ?? index}
              className="group relative bg-[#1a1a1a] border border-white/5 hover:border-[#C8A545]/30 rounded-2xl px-6 py-8 text-center flex flex-col items-center cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 mt-2 bg-[#C8A545]/15 group-hover:bg-[#C8A545]/25 transition-colors">
                <i className={`${step.icon} text-[#C8A545] text-2xl`}></i>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A545] text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">
                {getValue("hiw", `step${index + 1}_title`, step.title)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {getValue("hiw", `step${index + 1}_desc`, step.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}