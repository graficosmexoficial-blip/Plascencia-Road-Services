import { useState } from "react";
import type { PerformanceItem } from "@/hooks/useAdminPerformance";

interface AdminPerformanceListProps {
  items: PerformanceItem[];
  saving: boolean;
  onCreate: (item: Omit<PerformanceItem, "id" | "created_at" | "updated_at">) => void;
  onUpdate: (id: number, updates: Partial<PerformanceItem>) => void;
  onRemove: (id: number) => void;
}

export default function AdminPerformanceList({ items, saving, onCreate, onUpdate, onRemove }: AdminPerformanceListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [edit, setEdit] = useState<Partial<PerformanceItem>>();
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<PerformanceItem>>({ is_active: true, percentage: 95 });

  const startEdit = (item: PerformanceItem) => {
    setEditingId(item.id);
    setEdit({ ...item });
  };

  const saveEdit = () => {
    if (editingId == null) return;
    onUpdate(editingId, edit);
    setEditingId(null);
  };

  const saveNew = () => {
    if (!newItem.label?.trim()) return;
    onCreate({
      label: newItem.label ?? "",
      percentage: Math.min(100, Math.max(0, newItem.percentage ?? 0)),
      is_active: newItem.is_active ?? true,
      sort_order: 0,
    });
    setNewItem({ is_active: true, percentage: 95 });
    setAdding(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-base font-bold flex items-center gap-2">
            <i className="ri-bar-chart-line text-[#C8A545]"></i>
            Performance Bars
          </h3>
          <p className="text-gray-500 text-xs mt-0.5">Edit the animated stats shown next to the video</p>
        </div>
        <button
          onClick={() => setAdding(true)}
          disabled={saving}
          className="flex items-center gap-1.5 bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          Add Bar
        </button>
      </div>

      {adding && (
        <div className="bg-[#151515] border border-white/10 rounded-xl p-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Label</label>
              <input type="text" value={newItem.label ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, label: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Percentage (0-100)</label>
              <input type="number" min={0} max={100} value={newItem.percentage ?? 0} onChange={(e) => setNewItem((p) => ({ ...p, percentage: parseInt(e.target.value) || 0 }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setAdding(false)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancel</button>
            <button onClick={saveNew} disabled={saving} className="bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer">Save</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={item.id} className="bg-[#151515] border border-white/10 rounded-xl p-5">
            {editingId === item.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Label</label>
                    <input type="text" value={edit.label ?? ""} onChange={(e) => setEdit((p) => ({ ...p, label: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Percentage (0-100)</label>
                    <input type="number" min={0} max={100} value={edit.percentage ?? 0} onChange={(e) => setEdit((p) => ({ ...p, percentage: parseInt(e.target.value) || 0 }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <button onClick={() => setEditingId(null)} className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">Cancel</button>
                  <button onClick={saveEdit} disabled={saving} className="bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer">Save</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="text-white text-sm font-bold">{item.label}</h4>
                    <span className="text-[#C8A545] text-sm font-bold">{item.percentage}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => startEdit(item)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer" title="Edit">
                      <i className="ri-pencil-line"></i>
                    </button>
                    <button onClick={() => onRemove(item.id)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer" title="Delete">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C8A545] rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-gray-600 text-[10px] mt-1.5">Order: {item.sort_order ?? idx + 1}</p>
              </div>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-8">No performance bars yet. Click "Add Bar" to create one.</p>
        )}
      </div>
    </div>
  );
}