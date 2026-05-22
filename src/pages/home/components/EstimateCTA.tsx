import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function EstimateCTA() {
  const { getValue } = useSiteContent();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Plascencia Road Services - Reparación de camiones varados California"
          className="w-full h-full object-cover object-center opacity-30"
          src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-[#C8A545] text-xs font-semibold uppercase tracking-widest border border-[#C8A545]/40 rounded-full px-4 py-1 mb-4">
          {getValue("cta", "cta_badge", "Solicita tu Cotización Hoy 👇")}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
          {getValue("cta", "cta_title", "Cotización para Reparación de Camiones")}
        </h2>
        <p className="text-white/60 mt-5 text-base leading-relaxed max-w-xl mx-auto">
          {getValue("cta", "cta_subtitle", "Obtén asesoría personalizada de nuestros especialistas sin compromiso. Hablemos sobre auditorías DOT, DPF, diagnóstico o cualquier reparación que necesites.")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2 text-center"
          >
            <i className="ri-message-3-line"></i>
            {getValue("cta", "cta_button", "Habla con Nuestro Equipo")}
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-8 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2 text-center"
          >
            {getValue("cta", "cta_phone", "(512) 733-3148")}
          </a>
        </div>
      </div>
    </section>
  );
}