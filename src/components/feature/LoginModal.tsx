import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ADMIN_EMAIL = "adminroad@plascencia.local";
const ADMIN_PASSWORD = "plascencia123";

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("adminroad");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setError("");
      setUsername("adminroad");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      const email = username.includes("@") ? username : `${username}@plascencia.local`;

      // Try to sign in first
      const { error: signInError } = await signIn(email, password);

      // If user doesn't exist, try auto-signup and then sign in
      if (signInError?.message?.includes("Invalid login credentials")) {
        try {
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
          });

          if (!signUpError && signUpData.user) {
            // Sign up succeeded, now sign in
            const { error: retryError } = await signIn(email, password);
            if (!retryError) {
              setLoading(false);
              onClose();
              navigate("/admin");
              return;
            }
          }
        } catch {
          // Ignore auto-signup errors
        }
      }

      setLoading(false);

      if (signInError) {
        setError(
          signInError.message === "Invalid login credentials"
            ? "Usuario o contraseña incorrectos"
            : signInError.message
        );
        return;
      }

      onClose();
      navigate("/admin");
    },
    [username, password, signIn, onClose, navigate]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm mx-4 bg-[#151515] border border-white/10 rounded-2xl shadow-2xl animate-[fadeIn_0.2s_ease-out] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Cerrar"
        >
          <i className="ri-close-line text-lg"></i>
        </button>

        <div className="px-8 pt-10 pb-8">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img
              alt="Plascencia Road Services"
              className="h-14 w-auto"
              src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4270c338-c8d1-42d8-96aa-c469f53edf32_magnific_ponle-un-cambio-al-lado-d_PiEadmJ42C-1-3.png?v=70a45d494dab6c25ada7906d6dc3e6dd"
            />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Acceso de Administrador
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                className="w-full bg-[#1c1c1c] border border-white/10 text-white text-base rounded-xl px-5 py-4 outline-none focus:border-[#C8A545]/50 focus:bg-[#222] transition-all placeholder:text-gray-600"
                placeholder="adminroad"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={4}
                className="w-full bg-[#1c1c1c] border border-white/10 text-white text-base rounded-xl px-5 py-4 outline-none focus:border-[#C8A545]/50 focus:bg-[#222] transition-all placeholder:text-gray-600"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-50 text-black font-bold py-4 rounded-xl text-base transition-all cursor-pointer mt-2"
            >
              {loading ? "Entrando..." : "Entrar al Panel"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}