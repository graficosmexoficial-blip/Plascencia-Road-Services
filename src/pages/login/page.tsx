import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: signInError } = await signIn(email, password);
    setLoading(false);
    if (signInError) {
      setError(signInError.message === "Invalid login credentials" ? "Credenciales inválidas" : signInError.message);
      return;
    }
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img
            alt="Plascencia Road Services"
            className="h-16 mx-auto mb-6"
            src="https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/4270c338-c8d1-42d8-96aa-c469f53edf32_magnific_ponle-un-cambio-al-lado-d_PiEadmJ42C-1-3.png?v=70a45d494dab6c25ada7906d6dc3e6dd"
          />
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Website Manager
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Acceso para administradores
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0d0d0d] border border-white/15 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all"
              placeholder="admin@ejemplo.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0d0d0d] border border-white/15 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full whitespace-nowrap bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-50 text-black font-bold py-3.5 rounded-full text-sm transition-all cursor-pointer"
          >
            {loading ? "Entrando..." : "Iniciar Sesión"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          Plascencia Road Services — Admin Panel
        </p>
      </div>
    </div>
  );
}