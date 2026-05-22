import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function FinalCTA() {
  const { getValue } = useSiteContent();

  return (
    <section className="relative py-24 overflow-hidden mb-16">
      <div className="absolute inset-0">
        <img
          alt="Plascencia Road Services - Reparación de camiones California"
          className="w-full h-full object-cover object-center"
          src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/85"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="text-[#C8A545] text-sm font-semibold uppercase tracking-widest">
          {getValue("finalcta", "finalcta_badge", "¿Tu Camión Necesita Ayuda?")}
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
          {getValue("finalcta", "finalcta_title", "Lo Devolvemos a la Carretera")}
        </h2>
        <p className="text-gray-300 mt-5 text-lg leading-relaxed">
          {getValue("finalcta", "finalcta_subtitle", "Desde auditorías DOT y diagnóstico por computadora hasta reparaciones de motor y DPF — estamos aquí para solucionarlo. Contáctanos hoy en San Bernardino, CA.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer text-center"
          >
            {getValue("finalcta", "finalcta_button", "Solicita tu Cotización")}
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
          >
            {getValue("finalcta", "finalcta_phone", "(512) 733-3148")}
          </a>
        </div>
      </div>
    </section>
  );
}