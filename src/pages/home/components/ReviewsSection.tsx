import { useState } from "react";
import { GoogleLogo, GoogleStars } from "@/components/feature/GoogleReviewsBadge";
import { useSiteContent } from "@/hooks/useSiteContent";

const reviews = [
  {
    rating: 5,
    text: "Mi camión se quedó varado y Plascencia Road Services llegó rápido a San Bernardino. Lo repararon en el acto con diagnóstico por computadora y pude seguir mi ruta. Servicio excepcional.",
    initials: "CM",
    name: "Carlos M.",
    date: "Cliente Verificado · Marzo 2026",
  },
  {
    rating: 5,
    text: "Excelente trabajo en la auditoría DOT de mi tractocamión. Nos quedaron hasta que pasamos la inspección anual. Quedó como nuevo y el precio fue justo. Muy recomendados en California.",
    initials: "JR",
    name: "José R.",
    date: "Cliente Verificado · Enero 2026",
  },
  {
    rating: 5,
    text: "Llevé mi camión para cancelación de DPF y reprogramación de la computadora. El equipo sabe exactamente lo que hace. Mi camión nunca había funcionado tan bien. Confianza total.",
    initials: "LA",
    name: "Luis A.",
    date: "Cliente Verificado · Abril 2026",
  },
];

export default function ReviewsSection() {
  const [page, setPage] = useState(1);
  const { getValue } = useSiteContent();

  return (
    <section className="bg-[#0d0d0d] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Big Google header */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0">
              <GoogleLogo size={22} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Google Reviews</p>
              <p className="text-gray-400 text-xs">Opiniones verificadas de clientes reales</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {getValue("reviews", "reviews_title", "Lo Que Dicen Nuestros Clientes")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-6">
            {getValue("reviews", "reviews_subtitle", "Opiniones reales de transportistas y dueños de camiones en San Bernardino y California. Nos enorgullece nuestra reputación.")}
          </p>
          <div className="inline-flex items-center gap-4 bg-[#111111] border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-1">
              <i className="text-xl ri-star-fill text-yellow-400"></i>
              <i className="text-xl ri-star-fill text-yellow-400"></i>
              <i className="text-xl ri-star-fill text-yellow-400"></i>
              <i className="text-xl ri-star-fill text-yellow-400"></i>
              <i className="text-xl ri-star-fill text-yellow-400"></i>
            </div>
            <div className="text-left">
              <p className="text-white font-extrabold text-2xl">{getValue("reviews", "reviews_rating", "5.0")}</p>
              <p className="text-gray-500 text-xs">de 5 estrellas</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">{getValue("reviews", "reviews_count", "30+")}</p>
              <p className="text-gray-500 text-xs">reseñas verificadas</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 ml-2">
              <div className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
                <GoogleLogo size={14} />
              </div>
              <span className="text-gray-400 text-xs">Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {reviews.map((r) => (
            <div
              key={r.initials}
              className="bg-[#111111] border border-white/10 rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <i key={i} className="text-sm ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-full">
                  <div className="w-3.5 h-3.5 flex items-center justify-center bg-white rounded-full">
                    <GoogleLogo size={10} />
                  </div>
                  <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wide">
                    Google
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C8A545]/15 rounded-full shrink-0">
                  <span className="text-[#C8A545] text-sm font-bold">{r.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-10">
          <a
            href="https://www.google.com/search?q=Plascencia+Road+Services"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
              <GoogleLogo size={14} />
            </div>
            Déjanos una Reseña de 5 Estrellas en Google
          </a>
          <p className="text-gray-500 text-xs mt-3">
            Tu opinión nos ayuda a crecer y servirte mejor.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            disabled={page === 1}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                p === page
                  ? "bg-[#C8A545] text-black"
                  : "bg-white/5 hover:bg-white/10 text-gray-400"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            disabled={page === 4}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
            onClick={() => setPage((p) => Math.min(4, p + 1))}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}