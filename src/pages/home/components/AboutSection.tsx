import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

const badges = [
  { icon: "ri-shield-check-line", label: "Licenciado y Asegurado" },
  { icon: "ri-translate-2", label: "Bilingüe (Español / Inglés)" },
  { icon: "ri-price-tag-3-line", label: "Cotizaciones Honestas" },
  { icon: "ri-truck-line", label: "Todo Tipo de Camiones" },
];

export default function AboutSection() {
  const { getValue } = useSiteContent();

  return (
    <section className="py-20 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="w-full lg:w-[55%] flex justify-center">
            <div className="relative w-full max-w-[580px] flex items-center justify-center">
              <img
                alt="Plascencia Road Services - Propietario"
                className="w-full h-auto max-h-[720px] object-contain object-top rounded-2xl"
                src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/411ee539-af7b-491c-afdd-32dee3a6f9ff_magnific_me-puedes-poner-este-nuev_jSXgn1kLD0-1.png?v=74d72c235e9ce40025f7880b0cbb8b8a"
              />
              <div className="absolute bottom-6 left-6 bg-[#0d0d0d] border border-[#C8A545]/40 text-white px-5 py-4 rounded-xl">
                <p className="text-3xl font-extrabold text-[#C8A545]">15+</p>
                <p className="text-xs text-white/70 mt-0.5">Años de Excelencia</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <span className="text-[#C8A545] text-xs font-semibold uppercase tracking-widest">
              {getValue("about", "about_badge", "Sobre Nosotros")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
              {getValue("about", "about_title", "Especialistas de Confianza en Reparación de Camiones en California")}
            </h2>
            <p className="text-gray-400 mt-5 text-base leading-relaxed">
              {getValue("about", "about_para1", "Plascencia Road Services nació del sueño compartido de dos familias que decidieron unir fuerzas para crear algo más grande que un simple taller. Lo que comenzó como una conversación entre amigos apasionados por los camiones y la mecánica, se convirtió en un negocio familiar dedicado a servir a los transportistas de California.")}
            </p>
            <p className="text-gray-400 mt-3 text-base leading-relaxed">
              {getValue("about", "about_para2", "Con más de 15 años de experiencia, nos especializamos en diagnóstico por computadora, reprogramación de ECU, cancelación y reinstalación de sistemas DPF, transmisiones automáticas y estándar, auditorías DOT con inspecciones de 90 días y anuales, y mecánica general. Nos quedamos en el lugar hasta que tu camión pase la auditoría.")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#C8A545]/15 rounded-lg shrink-0">
                    <i className={`${b.icon} text-[#C8A545] text-base`}></i>
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-[#C8A545] hover:bg-[#B8963A] text-black font-semibold px-7 py-3.5 rounded-full text-sm transition-colors cursor-pointer mt-8"
            >
              Conoce Más Sobre Nosotros <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}