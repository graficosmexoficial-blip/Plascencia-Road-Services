import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface AdminSidebarProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

const sections = [
  { id: "hero", label: "Hero & Stats", icon: "ri-home-line" },
  { id: "about", label: "About Us", icon: "ri-user-line" },
  { id: "cta", label: "CTA Section", icon: "ri-phone-line" },
  { id: "contact", label: "Contact Info", icon: "ri-contacts-line" },
  { id: "services", label: "Services", icon: "ri-tools-line" },
  { id: "faqs", label: "FAQs", icon: "ri-question-line" },
  { id: "hiw", label: "How It Works", icon: "ri-route-line" },
  { id: "values", label: "Our Values", icon: "ri-heart-line" },
  { id: "performance", label: "Performance", icon: "ri-bar-chart-line" },
  { id: "reviews", label: "Reviews", icon: "ri-star-line" },
  { id: "media", label: "Media", icon: "ri-image-line" },
];

export default function AdminSidebar({ activeSection, onSelect }: AdminSidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-[#0d0d0d] border-r border-white/10 flex-shrink-0 h-screen sticky top-0 overflow-y-auto">
      <button
        onClick={() => navigate("/")}
        className="w-full p-5 flex items-center gap-3 text-left cursor-pointer hover:bg-white/5 transition-colors"
      >
        <img
          alt="Plascencia Road Services"
          className="h-8 w-auto"
          src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4270c338-c8d1-42d8-96aa-c469f53edf32_magnific_ponle-un-cambio-al-lado-d_PiEadmJ42C-1-3.png?v=70a45d494dab6c25ada7906d6dc3e6dd"
        />
        <div>
          <p className="text-white text-sm font-bold leading-tight">Website Manager</p>
          <p className="text-gray-500 text-[10px] uppercase tracking-wider">Admin Panel</p>
        </div>
      </button>

      <nav className="px-3 pb-4">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer mb-1 ${
              activeSection === s.id
                ? "bg-[#C8A545]/20 text-[#C8A545] border border-[#C8A545]/30"
                : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                activeSection === s.id ? "bg-[#C8A545]/20" : "bg-white/5"
              }`}
            >
              <i className={`${s.icon} text-base`}></i>
            </div>
            <span>{s.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-5 pb-6 mt-4">
        <div className="border-t border-white/10 pt-4">
          <p className="text-gray-600 text-[10px] leading-relaxed">
            <i className="ri-lightbulb-line mr-1"></i>
            Changes you make here are saved instantly to your website. Visitors will see updates in real time.
          </p>
        </div>
      </div>
    </aside>
  );
}