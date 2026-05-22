import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=15127333148&text&type=phone_number&app_absent=0";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const navLinks = [
    { label: "INICIO", to: "/" },
    { label: "NOSOTROS", to: "/about" },
    { label: "SERVICIOS", to: "/services" },
    { label: "CONTACTO", to: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d] shadow-lg"
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-28">
          <button onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <img
              alt="Plascencia Road Services"
              className="h-14 w-auto"
              src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4270c338-c8d1-42d8-96aa-c469f53edf32_magnific_ponle-un-cambio-al-lado-d_PiEadmJ42C-1-3.png?v=70a45d494dab6c25ada7906d6dc3e6dd"
            />
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-bold tracking-wider whitespace-nowrap transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-[#C8A545]"
                    : "text-white hover:text-[#C8A545]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black text-lg font-bold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              (512) 733-3148
            </a>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className="text-2xl ri-menu-line"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-bold tracking-wider whitespace-nowrap transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-[#C8A545]"
                    : "text-white hover:text-[#C8A545]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] text-black text-lg font-bold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer w-fit mt-2"
            >
              (512) 733-3148
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}