import { useState, useRef, useEffect } from "react";

const metrics = [
  { label: "Tasa de Satisfacción del Cliente", value: 99 },
  { label: "Tasa de Entrega a Tiempo", value: 97 },
  { label: "Auditorías DOT Aprobadas", value: 100 },
  { label: "Clientes que Nos Recomiendan", value: 96 },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[520px] bg-black flex items-center justify-center cursor-pointer group rounded-2xl overflow-hidden">
          <img
            src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/56e3501d-548a-4dec-98b6-139fc8bbd33d_magnific_puedes-poner-este-camion-_swoXyTzl8e.png?v=4769d1adf42c402e603ac1c9d1e0df8a"
            alt="Plascencia Road Services - Trabajo real de reparación de camiones"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
            <span className="bg-black/60 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
              Trabajo Real — Plascencia Road Services
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className="w-full lg:w-1/2 bg-[#0d0d0d] flex flex-col justify-center px-8 md:px-16 py-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A545] border border-[#C8A545]/40 rounded-full px-4 py-1 mb-5 w-fit">
            Por Qué Elegirnos
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
            Excelencia en Reparación de Camiones Respaldada por Resultados Reales
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            Nuestros resultados hablan por sí solos. En Plascencia Road Services nos especializamos en diagnóstico por computadora, DPF, auditorías DOT y transmisiones. Nos exigimos los más altos estándares en cada camión.
          </p>

          <div className="space-y-5">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    {m.label}
                  </span>
                  <span className="text-sm font-extrabold text-[#C8A545]">{m.value}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#8B6914] to-[#C8A545] transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${m.value}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}