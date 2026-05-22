import { useState } from "react";
import { Link } from "react-router-dom";
import HeroImageSlider from "./HeroImageSlider";

export default function HeroSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) return;
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      form.reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
      <HeroImageSlider />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 bg-[#C8A545]/15 border border-[#C8A545]/40 text-[#C8A545] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                <i className="ri-map-pin-line"></i> San Bernardino, CA
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Especialistas en Reparación de Camiones.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Más de 15 años de experiencia. Diagnóstico por computadora, DPF, auditorías DOT, transmisiones automáticas y estándar, y mecánica general para camiones y coches en San Bernardino, California.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                Solicita tu Cotización Hoy
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2"
              >
                (512) 733-3148
              </a>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-extrabold text-[#C8A545]">15+</p>
                <p className="text-gray-400 text-sm mt-0.5">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#C8A545]">500+</p>
                <p className="text-gray-400 text-sm mt-0.5">Camiones Reparados</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#C8A545]">100%</p>
                <p className="text-gray-400 text-sm mt-0.5">Auditorías Aprobadas</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#C8A545]">24/7</p>
                <p className="text-gray-400 text-sm mt-0.5">Disponibilidad</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-[#0d0d0d]/90 backdrop-blur-sm border border-[#C8A545]/30 rounded-2xl p-8">
              <div className="mb-6 pb-5 border-b border-white/10">
                <h2 className="text-white text-2xl font-extrabold leading-snug">
                  Solicita tu Cotización
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Sin compromiso — te llamamos rápido
                </p>
              </div>

              {formStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#C8A545]/20 rounded-full">
                    <i className="ri-checkbox-circle-line text-[#C8A545] text-3xl"></i>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400 text-sm">
                    Te contactaremos pronto.
                  </p>
                </div>
              ) : (
                <form
                  data-readdy-form
                  id="hero-estimate-form"
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit}
                  action="https://readdy.ai/api/form/d8751evq2vmtkubdc91g"
                  method="POST"
                >
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Nombre Completo
                    </label>
                    <input
                      placeholder="Ingresa tu nombre completo"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white/10 transition-all"
                      required
                      name="fullName"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Teléfono
                    </label>
                    <input
                      placeholder="Ingresa tu número de teléfono"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white/10 transition-all"
                      required
                      type="tel"
                      name="phone"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      placeholder="Ingresa tu correo electrónico"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white/10 transition-all"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">
                      Servicio Necesitado
                    </label>
                    <select
                      name="serviceNeeded"
                      className="w-full bg-[#1a1a1a] border border-white/20 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all cursor-pointer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona un Servicio
                      </option>
                      <option value="Auditoría DOT — 90 Días o Anual">Auditoría DOT — 90 Días o Anual</option>
                      <option value="Diagnóstico por Computadora">Diagnóstico por Computadora</option>
                      <option value="Reprogramación de Computadoras">Reprogramación de Computadoras</option>
                      <option value="Cancelación de DPF">Cancelación de DPF</option>
                      <option value="Reinstalación de Sistemas DPF">Reinstalación de Sistemas DPF</option>
                      <option value="Transmisión Automática o Estándar">Transmisión Automática o Estándar</option>
                      <option value="Coche Automático o Estándar">Coche Automático o Estándar</option>
                      <option value="Reparación de Motor o Frenos">Reparación de Motor o Frenos</option>
                      <option value="Mecánica General">Mecánica General</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="whitespace-nowrap w-full bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-60 text-black font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-1"
                  >
                    <i className="ri-send-plane-line text-base"></i>
                    {formStatus === "submitting"
                      ? "Enviando..."
                      : "Solicitar Cotización"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <i className="ri-arrow-down-line text-white text-lg animate-bounce"></i>
      </div>
    </section>
  );
}