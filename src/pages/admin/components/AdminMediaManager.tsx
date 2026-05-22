import { useState } from "react";
import MediaLightbox from "./MediaLightbox";
import type { MediaItem } from "@/hooks/useAdminMedia";

interface AdminMediaManagerProps {
  items: MediaItem[];
  saving: boolean;
  onCreate: (item: Omit<MediaItem, "id" | "created_at" | "updated_at">) => void;
  onUpdate: (id: number, updates: Partial<MediaItem>) => void;
  onRemove: (id: number) => void;
}

export default function AdminMediaManager({ items, saving, onCreate, onUpdate, onRemove }: AdminMediaManagerProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [edit, setEdit] = useState<Partial<MediaItem>>();
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<MediaItem>>({ type: "image", category: "general", is_active: true });
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean)));
  const allCategories = ["all", ...categories];

  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);

  const startEdit = (item: MediaItem) => {
    setEditingId(item.id);
    setEdit({ ...item });
  };

  const saveEdit = () => {
    if (editingId == null) return;
    onUpdate(editingId, edit);
    setEditingId(null);
  };

  const saveNew = () => {
    if (!newItem.name?.trim() || !newItem.url?.trim()) return;
    onCreate({
      name: newItem.name ?? "",
      url: newItem.url ?? "",
      type: (newItem.type as "image" | "video") ?? "image",
      category: newItem.category ?? "general",
      is_active: newItem.is_active ?? true,
      sort_order: 0,
    });
    setNewItem({ type: "image", category: "general", is_active: true });
    setAdding(false);
  };

  const handleDownload = (url: string, name: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = name.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".jpg";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const categoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      all: "Todas",
      hero: "Hero",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
      home: "Inicio",
      logo: "Logos",
      seo: "SEO",
      general: "General",
    };
    return labels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const usageLabel = (cat: string) => {
    const labels: Record<string, string> = {
      hero: "Usado en: Hero / Home",
      about: "Usado en: Página Nosotros",
      services: "Usado en: Página Servicios",
      contact: "Usado en: Página Contacto",
      home: "Usado en: Secciones Home",
      logo: "Usado en: Navbar, Footer, Login",
      seo: "Usado en: Meta tags / Social",
      general: "Uso general",
    };
    return labels[cat] || `Usado en: ${cat}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-white text-base font-bold flex items-center gap-2">
            <i className="ri-gallery-line text-[#C8A545]"></i>
            Galería de Medios
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            {items.length} {items.length === 1 ? "archivo" : "archivos"} en total — Click para expandir, descargar o editar
          </p>
        </div>
        <button
          onClick={() => setAdding(true)}
          disabled={saving}
          className="flex items-center gap-1.5 bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line text-sm"></i>
          Agregar Imagen
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-bold px-3.5 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
              filter === cat
                ? "bg-[#C8A545] text-black"
                : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
            }`}
          >
            {categoryLabel(cat)}
            {cat !== "all" && (
              <span className="ml-1.5 opacity-60">
                ({items.filter((i) => i.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Add Form */}
      {adding && (
        <div className="bg-[#151515] border border-white/10 rounded-xl p-5 space-y-4">
          <p className="text-white text-sm font-bold">Agregar Nueva Imagen</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Nombre</label>
              <input type="text" value={newItem.name ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))} placeholder="Ej: Hero Background" className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">URL de la imagen</label>
              <input type="text" value={newItem.url ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, url: e.target.value }))} placeholder="https://..." className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Categoría</label>
              <select value={newItem.category ?? "general"} onChange={(e) => setNewItem((p) => ({ ...p, category: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all">
                <option value="hero">Hero</option>
                <option value="home">Inicio</option>
                <option value="about">Nosotros</option>
                <option value="services">Servicios</option>
                <option value="contact">Contacto</option>
                <option value="logo">Logo</option>
                <option value="general">General</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Tipo</label>
              <select value={newItem.type ?? "image"} onChange={(e) => setNewItem((p) => ({ ...p, type: e.target.value as "image" | "video" }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all">
                <option value="image">Imagen</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <button onClick={() => setAdding(false)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancelar</button>
            <button onClick={saveNew} disabled={saving} className="bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer">Guardar</button>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#151515] border border-white/10 rounded-xl overflow-hidden hover:border-[#C8A545]/30 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div
                className="relative aspect-square bg-[#111111] cursor-pointer overflow-hidden"
                onClick={() => setLightbox(item)}
              >
                {item.url ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="ri-image-line text-4xl text-gray-700"></i>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2.5">
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(item); }}
                    className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <i className="ri-fullscreen-line"></i>
                    Expandir
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDownload(item.url, item.name); }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      title="Descargar"
                    >
                      <i className="ri-download-line text-sm"></i>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); startEdit(item); }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C8A545] hover:bg-[#B8963A] text-black transition-colors cursor-pointer"
                      title="Editar"
                    >
                      <i className="ri-pencil-line text-sm"></i>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setConfirmDelete(item.id); }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors cursor-pointer"
                      title="Eliminar"
                    >
                      <i className="ri-delete-bin-line text-sm"></i>
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-bold uppercase bg-black/70 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {categoryLabel(item.category)}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full backdrop-blur-sm ${
                    item.type === "video" ? "bg-red-500/20 text-red-400" : "bg-[#C8A545]/20 text-[#C8A545]"
                  }`}>
                    {item.type === "video" ? "VIDEO" : "IMG"}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-white text-xs font-bold truncate" title={item.name}>{item.name}</p>
                <p className="text-gray-500 text-[10px] mt-0.5 truncate">{usageLabel(item.category)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <i className="ri-image-2-line text-4xl text-gray-700 mb-3 block"></i>
          <p className="text-gray-500 text-sm">No hay archivos en esta categoría</p>
          <button
            onClick={() => setAdding(true)}
            className="mt-3 text-[#C8A545] text-xs font-bold hover:underline cursor-pointer"
          >
            Agregar tu primera imagen
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <MediaLightbox
          url={lightbox.url}
          name={lightbox.name}
          type={lightbox.type}
          onClose={() => setLightbox(null)}
          onDownload={() => handleDownload(lightbox.url, lightbox.name)}
        />
      )}

      {/* Edit Modal */}
      {editingId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setEditingId(null)}></div>
          <div className="relative z-10 bg-[#151515] border border-white/10 rounded-xl p-6 w-full max-w-md space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-white text-sm font-bold">Editar Imagen</p>
              <button onClick={() => setEditingId(null)} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer">
                <i className="ri-close-line"></i>
              </button>
            </div>

            {/* Preview */}
            {edit.url && (
              <div className="w-full h-40 rounded-lg overflow-hidden bg-[#111111]">
                <img src={edit.url} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}

            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Nombre</label>
              <input type="text" value={edit.name ?? ""} onChange={(e) => setEdit((p) => ({ ...p, name: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">URL (reemplazar imagen)</label>
              <input type="text" value={edit.url ?? ""} onChange={(e) => setEdit((p) => ({ ...p, url: e.target.value }))} placeholder="Pega la nueva URL de la imagen..." className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Categoría</label>
                <select value={edit.category ?? "general"} onChange={(e) => setEdit((p) => ({ ...p, category: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all">
                  <option value="hero">Hero</option>
                  <option value="home">Inicio</option>
                  <option value="about">Nosotros</option>
                  <option value="services">Servicios</option>
                  <option value="contact">Contacto</option>
                  <option value="logo">Logo</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Activo</label>
                <select value={edit.is_active ? "true" : "false"} onChange={(e) => setEdit((p) => ({ ...p, is_active: e.target.value === "true" }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all">
                  <option value="true">Sí — Visible</option>
                  <option value="false">No — Oculto</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <button onClick={() => setEditingId(null)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancelar</button>
              <button onClick={saveEdit} disabled={saving} className="bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer">Guardar Cambios</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setConfirmDelete(null)}></div>
          <div className="relative z-10 bg-[#151515] border border-white/10 rounded-xl p-6 w-full max-w-sm text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/10 mx-auto mb-3">
              <i className="ri-delete-bin-line text-red-400 text-xl"></i>
            </div>
            <p className="text-white text-sm font-bold">¿Eliminar esta imagen?</p>
            <p className="text-gray-500 text-xs mt-1">Esta acción no se puede deshacer</p>
            <div className="flex gap-2 justify-center mt-5">
              <button onClick={() => setConfirmDelete(null)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancelar</button>
              <button
                onClick={() => { onRemove(confirmDelete); setConfirmDelete(null); }}
                disabled={saving}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}