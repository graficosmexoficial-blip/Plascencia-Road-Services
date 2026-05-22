import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-[#C8A545]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              alt="Plascencia Road Services"
              className="h-16 w-auto object-contain"
              src="https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/902ed810b7f121861759171e9d9f60da.png"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en reparación de camiones, diagnóstico por computadora, sistemas DPF y auditorías DOT en San Bernardino, California. Más de 15 años de experiencia.
            </p>
            <div className="flex gap-3 mt-5 mb-5">
              <a
                href="https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer"
              >
                (512) 733-3148
              </a>
              <a
                href="mailto:Olgapla1981@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C8A545] transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-base"></i>
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Plascencia Road Services - San Bernardino CA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305!2d-117.2948!3d34.1083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3537c2f4e2d7b%3A0x7e9c7a9e8f8d9e7f!2s1566%20Colorado%20Ave%2C%20San%20Bernardino%2C%20CA%2092411!5e0!3m2!1ses!2sus!4v1"
                width="100%"
                height={160}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-[#C8A545] font-semibold uppercase text-xs tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A545] font-semibold uppercase text-xs tracking-widest mb-5">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Auditorías DOT — 90 Días y Anuales",
                "Diagnóstico por Computadora",
                "Reprogramación de Computadoras",
                "Cancelación de DPF",
                "Reinstalación de Sistemas DPF",
                "Transmisiones Automáticas y Estándar",
                "Coches Automáticos y Estándar",
                "Reparación de Motor y Frenos",
                "Mecánica General de Camiones",
                "Asistencia en Carretera",
                "Mantenimiento Preventivo",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A545] font-semibold uppercase text-xs tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-line text-[#C8A545]"></i>
                </div>
                <span className="text-gray-400 text-sm">
                  1566 Colorado Ave, San Bernardino, CA 92411
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-phone-line text-[#C8A545]"></i>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+19513345236" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer block">
                    (951) 334-5236
                  </a>
                  <a href="tel:+15127333148" className="text-gray-500 text-xs hover:text-[#C8A545] transition-colors cursor-pointer block">
                    Secundario: (512) 733-4148
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-mail-line text-[#C8A545]"></i>
                </div>
                <a href="mailto:Olgapla1981@gmail.com" className="text-gray-400 text-sm hover:text-[#C8A545] transition-colors cursor-pointer block">
                  Olgapla1981@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-time-line text-[#C8A545]"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Lunes – Viernes: 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-400 text-sm">Sábado – Domingo: Disponible para Emergencias</p>
                  <p className="text-[#C8A545] text-xs mt-1">Español e Inglés</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-medium">
            © 2026 Plascencia Road Services. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-white/50 text-xs font-medium">
              San Bernardino, CA — 15+ años de experiencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}