import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface AdminHeaderProps {
  sectionTitle: string;
  sectionSubtitle: string;
  onSave: () => void;
  saving: boolean;
  hasChanges: boolean;
}

export default function AdminHeader({
  sectionTitle,
  sectionSubtitle,
  onSave,
  saving,
  hasChanges,
}: AdminHeaderProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 bg-[#111111]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-white text-lg font-bold flex items-center gap-2">
          <i className="ri-settings-3-line text-[#C8A545]"></i>
          {sectionTitle}
        </h2>
        <p className="text-gray-500 text-xs mt-0.5">{sectionSubtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
        >
          <i className="ri-external-link-line"></i>
          Ver Sitio
        </a>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
        >
          <i className="ri-logout-box-line"></i>
          Cerrar Sesión
        </button>
        <button
          onClick={onSave}
          disabled={saving || !hasChanges}
          className="flex items-center gap-2 bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 disabled:cursor-not-allowed text-black text-sm font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          <i className="ri-save-line"></i>
          {saving ? "Guardando..." : "Guardar Cambios"}
        </button>
      </div>
    </header>
  );
}