import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const { getValue } = useSiteContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />
      <main>
        {/* === BANNER "CONTACT US" === */}
        <section className="relative w-full h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden mt-20 md:mt-24">
          <img
            alt="Plascencia Road Services - Truck repair workshop"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/a715599d-5c07-44ab-b4b9-a2a8324c41ec_WhatsApp-Image-2026-05-20-at-11.06.01-PM-1.jpeg?v=0d9ca518a1589f57a9454f9b313ae285"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 bg-[#111111]/80 border border-[#C8A545]/40 rounded-lg px-10 py-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest">
              Contáctanos
            </h1>
          </div>
        </section>

        {/* === INFO BAR — 4 Columns === */}
        <section className="bg-[#1a1a1a] border-y border-[#C8A545]/20"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#C8A545]/10"
          >
            {/* Call Us */}
            <div className="flex-1 flex items-start gap-4 px-6 py-5"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C8A545]/15 shrink-0"
              >
                <i className="ri-phone-line text-[#C8A545] text-lg"
                ></i>
              </div>
              <div>
                <p className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest"
                >Llámanos Directamente</p>
                <a href={`tel:${getValue("contact", "contact_phone", "(951) 334-5236").replace(/\D/g, "")}`} className="text-white text-sm font-bold hover:text-[#C8A545] transition-colors cursor-pointer block mt-0.5"
                >{getValue("contact", "contact_phone", "(951) 334-5236")}</a>
                <p className="text-gray-500 text-[11px] mt-0.5"
                >Hablamos Español e Inglés</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex-1 flex items-start gap-4 px-6 py-5"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C8A545]/15 shrink-0"
              >
                <i className="ri-mail-line text-[#C8A545] text-lg"
                ></i>
              </div>
              <div>
                <p className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest"
                >Escríbenos</p>
                <a href={`mailto:${getValue("contact", "contact_email", "Olgapla1981@gmail.com")}`} className="text-white text-sm hover:text-[#C8A545] transition-colors cursor-pointer block mt-0.5"
                >{getValue("contact", "contact_email", "Olgapla1981@gmail.com")}</a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex-1 flex items-start gap-4 px-6 py-5"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C8A545]/15 shrink-0"
              >
                <i className="ri-share-line text-[#C8A545] text-lg"
                ></i>
              </div>
              <div>
                <p className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest"
                >Síguenos</p>
                <p className="text-white text-sm mt-0.5"
                >@plascenciards</p>
                <div className="flex items-center gap-2 mt-1"
                >
                  <a href="#" className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-[#C8A545]/20 transition-colors cursor-pointer"
                  >
                    <i className="ri-facebook-fill text-gray-400 text-xs"
                    ></i>
                  </a>
                  <a href="#" className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-[#C8A545]/20 transition-colors cursor-pointer"
                  >
                    <i className="ri-instagram-fill text-gray-400 text-xs"
                    ></i>
                  </a>
                  <a href="#" className="w-6 h-6 flex items-center justify-center rounded bg-white/5 hover:bg-[#C8A545]/20 transition-colors cursor-pointer"
                  >
                    <i className="ri-tiktok-fill text-gray-400 text-xs"
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex-1 flex items-start gap-4 px-6 py-5"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C8A545]/15 shrink-0"
              >
                <i className="ri-map-pin-line text-[#C8A545] text-lg"
                ></i>
              </div>
              <div>
                <p className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest"
                >Nuestra Ubicación</p>
                <p className="text-white text-sm font-bold mt-0.5"
                >{getValue("contact", "contact_address", "1566 Colorado Ave")}</p>
                <p className="text-gray-400 text-xs"
                >{getValue("contact", "contact_city", "San Bernardino, CA 92411")}</p>
                <a
                  href="https://maps.google.com/?q=1566+Colorado+Ave+San+Bernardino+CA+92411"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[#C8A545] text-[11px] hover:underline cursor-pointer mt-0.5 block"
                >
                  Ver Cómo Llegar →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === MAIN CONTENT: 2 Columns === */}
        <section className="py-16 bg-[#111111]"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6"
          >
            <div className="flex flex-col lg:flex-row gap-10 items-stretch"
            >
              {/* Left: Business Info */}
              <div className="w-full lg:w-[40%] flex"
              >
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between w-full"
                >
                  {/* Logo area */}
                  <div className="text-center mb-6"
                  >
                    <img
                      alt="Plascencia Road Services"
                      className="w-full h-24 object-contain"
                      src="https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/902ed810b7f121861759171e9d9f60da.png"
                    />
                    <h3 className="text-white font-extrabold text-lg"
                    >Plascencia Road Services</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed"
                    >
                      Servicios profesionales de reparación de camiones en San Bernardino, California. Sirviendo la zona por más de 15 años con auditorías DOT, DPF, diagnóstico por computadora, transmisiones y toda la mecánica general de camiones.
                    </p>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-[#111111] rounded-xl p-5 border border-white/5"
                  >
                    <h4 className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest mb-3"
                    >Horarios de Atención</h4>
                    <div className="flex justify-between text-sm mb-1"
                    >
                      <span className="text-gray-300"
                      >Lunes – Viernes</span>
                      <span className="text-white font-semibold"
                      >8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1"
                    >
                      <span className="text-gray-300"
                      >Sábado</span>
                      <span className="text-gray-400"
                      >Con Cita Previa</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2"
                    >
                      <span className="text-gray-300"
                      >Domingo</span>
                      <span className="text-gray-400"
                      >Solo Emergencias</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5"
                    >
                      <i className="ri-translate text-[#C8A545] text-xs"
                      ></i>
                      <span className="text-[#C8A545] text-[11px] font-medium"
                      >Español e Inglés</span>
                    </div>
                  </div>

                  {/* Service Areas */}
                  <div className="bg-[#111111] rounded-xl p-5 border border-white/5"
                  >
                    <h4 className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest mb-3"
                    >Áreas de Servicio</h4>
                    <div className="flex flex-wrap gap-2"
                    >
                      {["San Bernardino", "Riverside", "Ontario", "Fontana", "Rancho Cucamonga", "Rialto", "Colton", "Redlands", "Moreno Valley", "Chino", "Todo el Sur de CA"].map((area) => (
                        <span key={area} className="text-gray-300 text-[11px] bg-white/5 rounded px-2 py-1"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="w-full lg:w-[60%] flex"
              >
                <div className="bg-white rounded-2xl p-8 flex flex-col w-full"
                >
                  <div className="mb-6"
                  >
                    <p className="text-[#C8A545] text-[11px] font-bold uppercase tracking-widest mb-1"
                    >Envíanos un Mensaje</p>
                    <h2 className="text-[#111111] text-xl font-extrabold"
                    >Hablemos de Tu Reparación</h2>
                    <div className="w-12 h-1 bg-[#C8A545] rounded-full mt-2"
                    ></div>
                  </div>

                  {submitted ? (
                    <div className="text-center py-10"
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-[#C8A545]/15 rounded-full mx-auto mb-4"
                      >
                        <i className="ri-check-line text-[#C8A545] text-3xl"
                        ></i>
                      </div>
                      <h3 className="text-[#111111] text-xl font-bold mb-2"
                      >¡Mensaje Enviado!</h3>
                      <p className="text-gray-500 text-sm"
                      >Gracias por contactarnos. Te responderemos pronto.</p>
                    </div>
                  ) : (
                    <form
                      data-readdy-form="true"
                      id="contact-form"
                      action="https://readdy.ai/api/form/d87oliagmnqsqcm2iveg"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        <div>
                          <label className="block text-[#111111] text-xs font-semibold mb-1"
                          >Tu Nombre <span className="text-red-500"
                          >*</span>
                          </label>
                          <input
                            name="fullName"
                            placeholder="Ingresa tu nombre completo"
                            className="w-full bg-gray-50 border border-gray-200 text-[#111111] placeholder-gray-400 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#111111] text-xs font-semibold mb-1"
                          >Teléfono</label>
                          <input
                            name="phone"
                            placeholder="Ingresa tu número de teléfono"
                            className="w-full bg-gray-50 border border-gray-200 text-[#111111] placeholder-gray-400 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white transition-all"
                            type="tel"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        <div>
                          <label className="block text-[#111111] text-xs font-semibold mb-1"
                          >Correo Electrónico <span className="text-red-500"
                          >*</span>
                          </label>
                          <input
                            name="email"
                            placeholder="Ingresa tu correo electrónico"
                            className="w-full bg-gray-50 border border-gray-200 text-[#111111] placeholder-gray-400 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white transition-all"
                            required
                            type="email"
                          />
                        </div>
                        <div>
                          <label className="block text-[#111111] text-xs font-semibold mb-1"
                          >Servicio Necesitado</label>
                          <select
                            name="serviceNeeded"
                            className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all cursor-pointer"
                            defaultValue={preselectedService || ""}
                          >
                            <option value="" disabled
                            >Selecciona un Servicio</option>
                            <option value="Auditoría DOT — 90 Días o Anual"
                            >Auditoría DOT — 90 Días o Anual</option>
                            <option value="Diagnóstico por Computadora"
                            >Diagnóstico por Computadora</option>
                            <option value="Reprogramación de Computadoras"
                            >Reprogramación de Computadoras</option>
                            <option value="Cancelación de DPF"
                            >Cancelación de DPF</option>
                            <option value="Reinstalación de Sistemas DPF"
                            >Reinstalación de Sistemas DPF</option>
                            <option value="Transmisión Automática o Estándar"
                            >Transmisión Automática o Estándar</option>
                            <option value="Coche Automático o Estándar"
                            >Coche Automático o Estándar</option>
                            <option value="Reparación de Motor o Frenos"
                            >Reparación de Motor o Frenos</option>
                            <option value="Mecánica General"
                            >Mecánica General</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#111111] text-xs font-semibold mb-1"
                        >Información del Vehículo y Mensaje <span className="text-red-500"
                        >*</span> <span className="text-gray-400 font-normal"
                        >(0/500)</span>
                        </label>
                        <textarea
                          name="message"
                          placeholder="Describe tu vehículo (marca, modelo, año), el daño, y cualquier detalle específico sobre la reparación que necesitas..."
                          maxLength={500}
                          rows={5}
                          className="w-full bg-gray-50 border border-gray-200 text-[#111111] placeholder-gray-400 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-white transition-all resize-none"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="whitespace-nowrap w-full bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-1"
                      >
                        <i className="ri-send-plane-line text-base"
                        ></i>
                        Enviar Mensaje
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === MAP SECTION === */}
        <section className="bg-[#111111] pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10"
            >
              <iframe
                title="Plascencia Road Services - San Bernardino CA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305!2d-117.2948!3d34.1083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3537c2f4e2d7b%3A0x7e9c7a9e8f8d9e7f!2s1566%20Colorado%20Ave%2C%20San%20Bernardino%2C%20CA%2092411!5e0!3m2!1ses!2sus!4v1"
                width="100%"
                height={420}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* === CTA BANNER === */}
        <section className="relative py-20 overflow-hidden"
        >
          <div className="absolute inset-0"
          >
            <img
              alt="Plascencia Road Services - Reparación de camiones California"
              className="w-full h-full object-cover object-center"
              src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4c2cb224-38ed-423d-ae85-6d604f3a93c2_WhatsApp-Image-2026-05-19-at-9.14.18-PM.jpeg?v=a9886371504940232aad812dee48b827"
            />
            <div className="absolute inset-0 bg-[#0d0d0d]/85"
            ></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
            >¿Tu Camión se Quedó en la Carretera?</h2>
            <p className="text-gray-300 mt-4 text-base leading-relaxed max-w-xl mx-auto"
            >
              Llámanos ahora y llegamos lo más rápido posible. Atendemos emergencias en San Bernardino y áreas cercanas de California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                (512) 733-3148
              </a>
              <Link
                to="/services"
                className="whitespace-nowrap bg-white/10 hover:bg-white/20 border border-[#C8A545]/60 text-white font-bold px-10 py-4 rounded-full text-base transition-colors cursor-pointer text-center"
              >
                Ver Nuestros Servicios
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}