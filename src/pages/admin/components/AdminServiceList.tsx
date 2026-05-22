import { useState } from "react";
import type { ServiceItem } from "@/hooks/useAdminServices";

interface AdminServiceListProps {
  items: ServiceItem[];
  saving: boolean;
  onCreate: (item: Omit<ServiceItem, "id" | "created_at" | "updated_at">) => void;
  onUpdate: (id: number, updates: Partial<ServiceItem>) => void;
  onRemove: (id: number) => void;
}

export default function AdminServiceList({ items, saving, onCreate, onUpdate, onRemove }: AdminServiceListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [edit, setEdit] = useState<Partial<ServiceItem>>();
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<ServiceItem>>({ is_active: true });

  const startEdit = (item: ServiceItem) => {
    setEditingId(item.id);
    setEdit({ ...item });
  };

  const saveEdit = () => {
    if (editingId == null) return;
    onUpdate(editingId, edit);
    setEditingId(null);
  };

  const saveNew = () => {
    if (!newItem.title?.trim()) return;
    onCreate({
      title: newItem.title ?? "",
      description: newItem.description ?? "",
      icon: newItem.icon ?? "ri-tools-line",
      image_url: newItem.image_url ?? "",
      is_active: newItem.is_active ?? true,
      sort_order: 0,
    });
    setNewItem({ is_active: true });
    setAdding(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-base font-bold flex items-center gap-2">
            <i className="ri-tools-line text-[#C8A545]"></i>
            Services
          </h3>
          <p className="text-gray-500 text-xs mt-0.5">Manage services displayed on your website</p>
        </div>
        <button
          onClick={() => setAdding(true)}
          disabled={saving}
          className="flex items-center gap-1.5 bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          Add Service
        </button>
      </div>

      {adding && (
        <div className="bg-[#151515] border border-white/10 rounded-xl p-5 space-y-4">
          <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Title</label>
            <input type="text" value={newItem.title ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, title: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
          </div>
          <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Description</label>
            <textarea rows={2} value={newItem.description ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, description: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Icon class</label>
              <input type="text" value={newItem.icon ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, icon: e.target.value }))} placeholder="e.g. ri-tools-line" className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Image URL</label>
              <input type="text" value={newItem.image_url ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, image_url: e.target.value }))} placeholder="https://..." className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setAdding(false)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancel</button>
            <button onClick={saveNew} disabled={saving} className="bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer">Save</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-[#151515] border border-white/10 rounded-xl p-5">
            {editingId === item.id ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Title</label>
                  <input type="text" value={edit.title ?? ""} onChange={(e) => setEdit((p) => ({ ...p, title: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Description</label>
                  <textarea rows={2} value={edit.description ?? ""} onChange={(e) => setEdit((p) => ({ ...p, description: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Icon class</label>
                    <input type="text" value={edit.icon ?? ""} onChange={(e) => setEdit((p) => ({ ...p, icon: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Image URL</label>
                    <input type="text" value={edit.image_url ?? ""} onChange={(e) => setEdit((p) => ({ ...p, image_url: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <button onClick={() => setEditingId(null)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancel</button>
                  <button onClick={saveEdit} disabled={saving} className="bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer">Save</button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#C8A545]/20 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon ?? "ri-tools-line"} text-[#C8A545]`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => startEdit(item)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer" title="Edit">
                    <i className="ri-pencil-line"></i>
                  </button>
                  <button onClick={() => onRemove(item.id)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer" title="Delete">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-8">No services yet. Click Add Service to create one.</p>
        )}
      </div>
    </div>
  );
}