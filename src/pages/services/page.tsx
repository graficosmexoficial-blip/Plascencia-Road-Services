import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useSiteContent } from "@/hooks/useSiteContent";

const topServices = [
  {
    icon: "ri-file-shield-line",
    title: "Auditorías DOT — 90 Días y Anuales",
    desc: "Inspecciones DOT completas. Nos quedamos en el lugar hasta que tu camión pase la auditoría.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/11592b82-17dd-44ac-b76a-8e0e1859045e_WhatsApp-Image-2026-05-19-at-10.02.50-PM.jpeg?v=3b2cae39fa1622316f192a9db7c2836e",
  },
  {
    icon: "ri-computer-line",
    title: "Diagnóstico por Computadora",
    desc: "Escaneo electrónico avanzado para identificar fallas exactas en motor, transmisión y sensores.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/8e5b46dd-a5d1-427d-9cd7-1ecd9d011be2_WhatsApp-Image-2026-05-19-at-9.14.34-PM.jpeg?v=6b8a4422b2b61e1537a788241e3277eb",
  },
  {
    icon: "ri-cpu-line",
    title: "Reprogramación de Computadoras",
    desc: "Actualización de ECU para camiones. Corregimos códigos de error y optimizamos rendimiento.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/6a427748-fce7-46d7-b790-7838d23fa15a_WhatsApp-Image-2026-05-19-at-9.46.07-PM.jpeg?v=b8dd4220ba16a5f31fa5e14f47807936",
  },
  {
    icon: "ri-filter-off-line",
    title: "Cancelación de DPF",
    desc: "Servicio especializado de eliminación de sistemas DPF con precisión para mantener tu motor óptimo.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/30adf11b-93b6-4e52-a341-421f3450c813_WhatsApp-Image-2026-05-19-at-9.13.56-PM.jpeg?v=2fcbc7ae9c4a5d41cb51a8ee55f7a6c6",
  },
  {
    icon: "ri-refresh-line",
    title: "Reinstalación de Sistemas DPF",
    desc: "Instalación profesional de sistemas DPF originales o aftermarket con calibración y verificación.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/11592b82-17dd-44ac-b76a-8e0e1859045e_WhatsApp-Image-2026-05-19-at-10.02.50-PM.jpeg?v=3b2cae39fa1622316f192a9db7c2836e",
  },
  {
    icon: "ri-settings-3-line",
    title: "Transmisiones Automáticas y Estándar",
    desc: "Reparación completa de cajas automáticas y estándar para camiones y coches pesados.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/5786fbb9-05d1-4fee-8bba-e70b8bf87820_WhatsApp-Image-2026-05-19-at-9.46.16-PM.jpeg?v=1d610cd878693926a8ba01513f494d5b",
  },
];

const bottomServices = [
  {
    icon: "ri-car-line",
    title: "Coches Automáticos y Estándar",
    desc: "Servicio completo para vehículos ligeros. Motor, transmisión, frenos, suspensión y sistemas eléctricos.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/5786fbb9-05d1-4fee-8bba-e70b8bf87820_WhatsApp-Image-2026-05-19-at-9.46.16-PM.jpeg?v=1d610cd878693926a8ba01513f494d5b",
  },
  {
    icon: "ri-hammer-line",
    title: "Reparación de Motor y Frenos",
    desc: "Motores diesel y gasolina para camiones pesados. Frenos de aire, balatas, discos y sistemas hidráulicos.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827",
  },
  {
    icon: "ri-tools-line",
    title: "Mecánica General de Camiones",
    desc: "De todo en general — carrocería, chasis, suspensión, dirección, eléctricos y aire acondicionado.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/6a427748-fce7-46d7-b790-7838d23fa15a_WhatsApp-Image-2026-05-19-at-9.46.07-PM.jpeg?v=b8dd4220ba16a5f31fa5e14f47807936",
  },
  {
    icon: "ri-flashlight-line",
    title: "Sistemas Eléctricos y Aire Acondicionado",
    desc: "Diagnóstico y reparación de sistemas eléctricos, cableado, baterías, alternadores y compresores de aire acondicionado para camiones pesados.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/50b173ed-941e-4568-b988-f900d940abfd_WhatsApp-Image-2026-05-20-at-11.05.58-PM-1.jpeg?v=aae1dcefc3d0b8e21100412adee6aaab",
  },
  {
    icon: "ri-exchange-line",
    title: "Suspensión y Dirección Hidráulica",
    desc: "Reparación completa de suspensiones neumáticas y mecánicas, dirección hidráulica, ballestas, amortiguadores y sistemas de levante.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/072f5714-d4e7-444f-be52-392307ed383c_WhatsApp-Image-2026-05-20-at-11.06.06-PM-4.jpeg?v=9af15a26a7c1521fad06a10a0063f767",
  },
  {
    icon: "ri-drop-line",
    title: "Cambio de Aceite y Mantenimiento Preventivo",
    desc: "Cambio de aceite, filtros, refrigerante y fluidos para mantener tu motor en óptimas condiciones y prolongar su vida útil.",
    image: "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/30adf11b-93b6-4e52-a341-421f3450c813_WhatsApp-Image-2026-05-19-at-9.13.56-PM.jpeg?v=2fcbc7ae9c4a5d41cb51a8ee55f7a6c6",
  },
];

function ServiceCard({ icon, title, desc, image }: {
  icon: string;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="group bg-[#111111] overflow-hidden transition-all duration-300 relative">
      <div className="relative w-full h-52 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={image}
        />
        <div className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-[#C8A545] rounded-full z-10">
          <i className={`${icon} text-black text-lg`}></i>
        </div>
        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <Link
            to={`/contact?service=${encodeURIComponent(title)}`}
            className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Solicitar Servicio <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-5">
        <h3 className="text-white font-bold text-base mb-2 whitespace-nowrap">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        <div className="mt-4 border-t border-[#C8A545]/40 pt-3">
          <div className="h-0.5 w-12 bg-[#C8A545]"></div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { getValue } = useSiteContent();
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden mt-20 md:mt-24">
          <img
            alt="Plascencia Road Services - Nuestros Servicios"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/11592b82-17dd-44ac-b76a-8e0e1859045e_WhatsApp-Image-2026-05-19-at-10.02.50-PM.jpeg?v=3b2cae39fa1622316f192a9db7c2836e"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 bg-[#111111]/80 border border-[#C8A545]/40 rounded-lg px-10 py-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest">
              {getValue("services", "services_page_title", "Nuestros Servicios")}
            </h1>
          </div>
        </section>

        {/* Services Section 1 */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <span className="text-[#C8A545] text-xs font-bold uppercase tracking-widest">
              Lo Que Ofrecemos
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
              Servicios Completos de Reparación para Todo Tipo de Vehículos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {topServices.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Middle CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Plascencia Road Services - Reparación de camiones California"
              className="w-full h-full object-cover object-center"
              src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827"
            />
            <div className="absolute inset-0 bg-[#0d0d0d]/85"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Obtén Tu Cotización de Reparación Hoy
            </h2>
            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Obtén asesoría personalizada de nuestros especialistas en camiones sin compromiso. Hablemos sobre las necesidades de tu vehículo hoy.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer text-center mt-8"
            >
              Habla con Nuestro Equipo <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </section>

        {/* Services Section 2 */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bottomServices.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Plascencia Road Services - Reparación de camiones pesados"
              className="w-full h-full object-cover object-center"
              src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/6a427748-fce7-46d7-b790-7838d23fa15a_WhatsApp-Image-2026-05-19-at-9.46.07-PM.jpeg?v=b8dd4220ba16a5f31fa5e14f47807936"
            />
            <div className="absolute inset-0 bg-[#0d0d0d]/80"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-6 text-center">
            <span className="text-[#C8A545] text-xs font-bold uppercase tracking-widest">
              San Bernardino, California
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-tight">
              ¿Listo para Restaurar Tu Vehículo?<br />
              <span className="text-[#C8A545]">Empecemos.</span>
            </h2>
            <p className="text-gray-300 mt-5 text-base leading-relaxed">
              Tu vehículo merece verse como nuevo. Ya sea que necesites una auditoría DOT, un servicio DPF, o una reparación completa de motor — nuestro equipo está listo. Obtén tu cotización hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer text-center"
              >
                Obtén Tu Cotización Hoy <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                (512) 733-3148
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}