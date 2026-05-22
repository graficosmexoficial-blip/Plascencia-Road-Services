import { Link } from "react-router-dom";

const services = [
  {
    icon: "ri-file-shield-line",
    title: "Auditorías DOT — 90 Días y Anuales",
    desc: "Cubrimos auditorías DOT completas con inspecciones de 90 días y anuales. Nos quedamos en el lugar hasta que tu camión pase la auditoría. No te dejamos solo en el proceso.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/11592b82-17dd-44ac-b76a-8e0e1859045e_WhatsApp-Image-2026-05-19-at-10.02.50-PM.jpeg?v=3b2cae39fa1622316f192a9db7c2836e",
  },
  {
    icon: "ri-computer-line",
    title: "Diagnóstico por Computadora",
    desc: "Escaneo electrónico avanzado para identificar fallas exactas en motor, transmisión, sensores y sistemas electrónicos. Evitamos reparaciones innecesarias y ahorramos tu dinero.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/8e5b46dd-a5d1-427d-9cd7-1ecd9d011be2_WhatsApp-Image-2026-05-19-at-9.14.34-PM.jpeg?v=6b8a4422b2b61e1537a788241e3277eb",
  },
  {
    icon: "ri-cpu-line",
    title: "Reprogramación y DPF",
    desc: "Reprogramación de ECU, cancelación e instalación de sistemas DPF para camiones modernos. Optimizamos rendimiento, corregimos códigos de error y restauramos funcionamiento correcto.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/6a427748-fce7-46d7-b790-7838d23fa15a_WhatsApp-Image-2026-05-19-at-9.46.07-PM.jpeg?v=b8dd4220ba16a5f31fa5e14f47807936",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-14">
          <div className="flex-1">
            <span className="text-[#C8A545] text-xs font-semibold uppercase tracking-widest">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight max-w-md">
              Todo Lo Que Tu Camión Necesita en Un Solo Lugar
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
              Desde auditorías DOT hasta reprogramación de computadoras y cancelación de DPF. Cubrimos diagnóstico, transmisiones, motor, frenos y mecánica general.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#C8A545]/30 text-white px-6 py-3.5 rounded-xl mt-7">
              <i className="ri-emotion-happy-line text-[#C8A545] text-xl"></i>
              <div>
                <span className="text-2xl font-extrabold text-[#C8A545]">500+</span>
                <span className="text-white font-semibold text-sm ml-2">Camiones Reparados</span>
                <p className="text-white/50 text-xs mt-0.5">De vuelta en la carretera funcionando</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
              <img
                alt="Plascencia Road Services trabajo profesional"
                className="w-full h-full object-cover object-center"
                src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/c7dc5582-be2f-457c-9990-ee6e7d1c299a_magnific_puedes-poner-este-camion-_LUBdOS8swO.png?v=f13b7079e54fe352089dae9d037e1f34"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-5 right-5 flex flex-col gap-3 w-64">
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#C8A545]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#C8A545]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-shield-check-line text-[#C8A545] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">Auditorías Garantizadas</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    Nos quedamos contigo hasta que tu camión pase la auditoría DOT. Sin excusas.
                  </p>
                </div>
              </div>
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#C8A545]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#C8A545]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-file-list-3-line text-[#C8A545] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">Solicita tu Cotización</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    Cotización detallada y sin compromiso para cualquier servicio que necesites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl font-bold text-white">Servicios Especializados Para Tu Flota</h3>
          <p className="text-gray-400 text-sm max-w-md">
            Diagnóstico por computadora, DPF, auditorías DOT, transmisiones automáticas y estándar, y todo en mecánica general para camiones y coches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C8A545]/40 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={s.image}
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C8A545]/15 rounded-xl mb-4">
                  <i className={`${s.icon} text-[#C8A545] text-lg`}></i>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-[#C8A545] hover:bg-[#B8963A] text-black font-semibold px-10 py-4 rounded-full text-sm transition-colors cursor-pointer"
          >
            Ver Todos los Servicios <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}