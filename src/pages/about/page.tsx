import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useValues } from "@/hooks/useValues";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0";

const stats = [
  { num: "15", suffix: "+", label: "Años de", sublabel: "Experiencia" },
  { num: "500", suffix: "+", label: "Camiones", sublabel: "Reparados" },
  { num: "100", suffix: "%", label: "Satisfacción", sublabel: "Garantizada" },
];

const faqs = [
  {
    question: "¿Qué tipos de servicios de reparación de camiones ofrecen?",
    answer:
      "Ofrecemos una gama completa de servicios de reparación de camiones que incluye auditorías DOT (de 90 días y anuales), diagnóstico por computadora, reprogramación de ECU, cancelación y reinstalación de DPF, reparación de transmisiones automáticas y estándar, reparación de motor y frenos, y toda la mecánica general para cualquier marca o modelo.",
  },
  {
    question: "¿Cuánto tiempo toma una reparación típica de camión?",
    answer:
      "Los tiempos de reparación varían según el problema. Reparaciones menores como servicio de frenos o diagnóstico pueden tomar algunas horas. Reparaciones más complejas como reconstrucción de transmisiones o trabajo de motor pueden tomar de 1 a 3 días. Para auditorías DOT, nos quedamos hasta que tu camión pase — sin excusas.",
  },
  {
    question: "¿Trabajan con compañías de seguros?",
    answer:
      "Sí, trabajamos con la mayoría de las compañías de seguros principales. Podemos ayudarte a navegar el proceso de reclamos y proporcionar toda la documentación, fotos y estimados necesarios para hacer la reparación lo más fluida posible.",
  },
  {
    question: "¿Cómo obtengo una estimación para la reparación de mi camión?",
    answer:
      "Puedes solicitar una estimación gratis llenando nuestro formulario de contacto, llamándonos directamente, o enviándonos un mensaje por WhatsApp. Evaluaremos tu camión y te proporcionaremos un presupuesto detallado y honesto sin cargos ocultos.",
  },
  {
    question: "¿Atienden a clientes de habla hispana?",
    answer:
      "¡Absolutamente! Somos un equipo bilingüe y servimos con orgullo tanto a transportistas de habla inglesa como española en todo California. Cada cliente es tratado como familia.",
  },
  {
    question: "¿Qué hace diferente a Plascencia Road Services?",
    answer:
      "Somos un negocio familiar construido sobre la honestidad, el trabajo duro y un compromiso genuino con cada cliente. Con más de 15 años de experiencia, nos quedamos en el lugar hasta que tu camión pase su auditoría DOT, y nunca cobramos por reparaciones que no necesitas. Nuestro objetivo es devolver tu camión a la carretera — rápido y bien hecho.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { getValue } = useSiteContent();
  const { values, loading: valuesLoading } = useValues();

  const fallbackValues = [
    { id: 1, title: "Precios Competitivos y Honestos", icon: "ri-price-tag-3-line", description: "Ofrecemos presupuestos claros sin cargos ocultos." },
    { id: 2, title: "Servicio Profesional", icon: "ri-tools-line", description: "Mecánicos certificados con herramientas de diagnóstico de última generación." },
    { id: 3, title: "Calidad Garantizada", icon: "ri-shield-check-line", description: "Pruebas exhaustivas antes de cada entrega." },
    { id: 4, title: "Negocio Familiar de Confianza", icon: "ri-hand-heart-line", description: "Más de 15 años sirviendo a transportistas." },
    { id: 5, title: "Equipo Bilingüe", icon: "ri-translate-2", description: "Servimos en español e inglés." },
    { id: 6, title: "Todas las Marcas y Modelos", icon: "ri-truck-line", description: "Reparamos cualquier marca y modelo de camión." },
  ];

  const displayValues = values.length > 0 ? values : fallbackValues;

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <main>
        {/* ===== HERO: ABOUT US ===== */}
        <section className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden mt-20 md:mt-24">
          <img
            alt="Plascencia Road Services - Truck repair workshop"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 bg-[#111111]/80 border border-[#C8A545]/40 rounded-lg px-10 py-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest">
              Nosotros
            </h1>
          </div>
        </section>

        {/* ===== OUR STORY ===== */}
        <section className="py-16 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left: Story Text */}
              <div className="w-full lg:w-1/2">
                <span className="text-[#C8A545] text-[11px] font-bold uppercase tracking-[0.2em]">
                  Nuestra Historia
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
                  Especialistas de Confianza en Reparación de Camiones en San Bernardino
                </h2>
                <p className="text-gray-400 mt-5 text-[15px] leading-relaxed">
                  Plascencia Road Services es un taller de reparación de camiones de propiedad familiar con más de 15 años de
                  experiencia sirviendo a transportistas y flotas en todo el sur de California. Ubicados en San Bernardino,
                  nos especializamos en auditorías DOT, diagnóstico por computadora, sistemas DPF, transmisiones y toda la
                  mecánica general de camiones.
                </p>
                <p className="text-gray-400 mt-3 text-[15px] leading-relaxed">
                  Nuestro equipo bilingüe (español e inglés) está comprometido con entregar resultados excepcionales con
                  precios honestos e integridad en cada reparación. Trabajamos con compañías de seguros y te guiamos a través
                  de todo el proceso — desde tu estimado hasta la inspección final.
                </p>

                {/* Signature */}
                <p className="text-white font-bold text-sm mt-6 italic">
                  Plascencia Road Services
                </p>
                <p className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest">
                  EST. 2008 — San Bernardino, CA
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-6 mt-8">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center text-center">
                      <div className="w-[72px] h-[72px] flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#C8A545]/30 mb-2">
                        <div className="flex items-end">
                          <span className="text-2xl font-extrabold text-white">{s.num}</span>
                          <span className="text-lg font-extrabold text-[#C8A545] ml-0.5">{s.suffix}</span>
                        </div>
                      </div>
                      <p className="text-[#C8A545] text-[10px] font-bold uppercase tracking-wider">
                        {s.label}
                      </p>
                      <p className="text-[#C8A545] text-[10px] font-bold uppercase tracking-wider">
                        {s.sublabel}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full rounded-2xl overflow-hidden">
                  <img
                    alt="Plascencia Road Services - Truck repair workshop"
                    className="w-full h-[560px] md:h-[620px] object-cover object-center"
                    src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/9cd5263d-0f4f-46ef-8baa-26e068147f94_magnific_dame-esta-foto-en-la-medi_SOt8lAFUb8.png?v=9439d031f9d7e71d7febcde51c82eb52"
                  />
                </div>

                {/* EST. Badge */}
                <div className="absolute bottom-4 left-4 bg-[#C8A545] text-black font-extrabold text-xs uppercase tracking-wider px-3 py-2 rounded-lg">
                  <p className="text-[10px] font-bold">EST.</p>
                  <p>2008</p>
                  <p className="text-[9px] font-semibold mt-0.5">San Bernardino, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Plascencia Road Services - Truck repair background"
              className="w-full h-full object-cover object-center"
              src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827"
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {getValue("cta", "cta_title", "Obtén Tu Cotización de Reparación Hoy")}
            </h2>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              {getValue("cta", "cta_subtitle", "Obtén asesoría personalizada de nuestros especialistas en reparación de camiones sin compromiso. Hablemos sobre la reparación de tu vehículo hoy.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-8 py-3.5 rounded-full text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                Habla con Nuestro Equipo <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-8 py-3.5 rounded-full text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                (951) 334-5236
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Left: FAQ Accordion */}
              <div className="w-full lg:w-1/2">
                <span className="text-[#C8A545] text-[11px] font-bold uppercase tracking-[0.2em]">
                  {getValue("faqs", "faq_badge", "Preguntas Frecuentes")}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
                  {getValue("faqs", "faq_title", "Preguntas Comunes Sobre Plascencia Road Services")}
                </h2>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {getValue("faqs", "faq_subtitle", "Sabemos que reparar tu camión genera muchas preguntas. Aquí están algunas de las más comunes que nuestros clientes hacen antes de empezar.")}
                </p>

                <div className="mt-8 space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-white/10 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between text-left px-5 py-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors cursor-pointer"
                      >
                        <span
                          className={`text-sm font-semibold ${
                            openFaq === i ? "text-[#C8A545]" : "text-white"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-full shrink-0 ml-3 transition-all ${
                            openFaq === i
                              ? "bg-[#C8A545] text-black"
                              : "bg-white/10 text-gray-400"
                          }`}
                        >
                          <i
                            className={`${
                              openFaq === i ? "ri-subtract-line" : "ri-add-line"
                            } text-sm`}
                          ></i>
                        </div>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 py-4 bg-[#151515] border-t border-white/5">
                          <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="relative w-full rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <img
                    alt="Plascencia Road Services - Professional truck diagnostics"
                    className="w-full h-full object-cover object-center"
                    src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/19d47bcd-b3c8-407c-93c8-f82911ba27a2_magnific_este-soy-yo-y-mi-equipo-d_rleMKIuxtc-1-1.jpg?v=cfc7eb377def81c61fffa2d15e6da4ce"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR VALUES ===== */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Left: Image */}
              <div className="w-full lg:w-1/2 h-full flex flex-col self-stretch">
                <div className="relative w-full flex-1 rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[720px]">
                  <img
                    alt="Plascencia Road Services - Real project truck repair"
                    className="w-full h-full object-cover object-center"
                    src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/2a0c73de-7e95-4f4b-b17c-3f2f48f8e72d_magnific_este-soy-yo-y-mi-equipo-d_rleMKIuxtc-1-3.jpg?v=627253e2e6bf243fee08b744265acf27"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#C8A545] text-black font-bold text-xs uppercase tracking-wider px-3 py-2 rounded-lg">
                    REAL PROJECT — San Bernardino, CA
                  </div>
                </div>
              </div>

              {/* Right: Values List */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <span className="text-[#C8A545] text-[11px] font-bold uppercase tracking-[0.2em]">
                  Nuestros Valores
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
                  Lo Que Nos Diferencia de los Demás
                </h2>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  Cada taller de reparación puede prometer buenos resultados, pero lo que realmente nos define es cómo trabajamos.
                  En Plascencia Road Services, nuestra base se construye sobre un conjunto de valores fundamentales que guían
                  cada decisión, cada interacción y cada reparación que completamos.
                </p>

                <div className="mt-8 space-y-4">
                  {displayValues.map((v) => (
                    <div
                      key={v.id}
                      className="flex items-center gap-4 py-3 border-b border-white/5"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-[#C8A545]/15 rounded-full shrink-0">
                        <i className={`${v.icon} text-[#C8A545] text-lg`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-white text-sm font-semibold block">{v.title}</span>
                        {v.description && (
                          <span className="text-gray-500 text-xs block mt-0.5">{v.description}</span>
                        )}
                      </div>
                      <i className="ri-check-line text-[#C8A545] text-lg ml-auto shrink-0"></i>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to="/contact"
                    className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-7 py-3 rounded-full text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
                  >
                    Obtén Tu Cotización <i className="ri-arrow-right-line"></i>
                  </Link>
                  <Link
                    to="/services"
                    className="whitespace-nowrap bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold px-7 py-3 rounded-full text-sm transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
                  >
                    Ver Nuestro Trabajo <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}