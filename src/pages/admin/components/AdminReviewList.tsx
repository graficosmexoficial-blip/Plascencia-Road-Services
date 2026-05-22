import { useState } from "react";
import type { ReviewItem } from "@/hooks/useAdminReviews";

interface AdminReviewListProps {
  items: ReviewItem[];
  saving: boolean;
  onCreate: (item: Omit<ReviewItem, "id" | "created_at" | "updated_at">) => void;
  onUpdate: (id: number, updates: Partial<ReviewItem>) => void;
  onRemove: (id: number) => void;
}

function stars(n: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`${i < n ? "ri-star-fill text-yellow-400" : "ri-star-line text-gray-600"} text-xs`}></i>
  ));
}

export default function AdminReviewList({ items, saving, onCreate, onUpdate, onRemove }: AdminReviewListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [edit, setEdit] = useState<Partial<ReviewItem>>();
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<ReviewItem>>({ rating: 5, is_active: true });

  const startEdit = (item: ReviewItem) => {
    setEditingId(item.id);
    setEdit({ ...item });
  };

  const saveEdit = () => {
    if (editingId == null) return;
    onUpdate(editingId, edit);
    setEditingId(null);
  };

  const saveNew = () => {
    if (!newItem.name?.trim() || !newItem.text?.trim()) return;
    onCreate({
      rating: newItem.rating ?? 5,
      text: newItem.text ?? "",
      initials: newItem.initials ?? newItem.name?.charAt(0).toUpperCase() ?? "A",
      name: newItem.name ?? "",
      date_text: newItem.date_text ?? "",
      is_active: newItem.is_active ?? true,
      sort_order: 0,
    });
    setNewItem({ rating: 5, is_active: true });
    setAdding(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-base font-bold flex items-center gap-2">
            <i className="ri-star-line text-[#C8A545]"></i>
            Customer Reviews
          </h3>
          <p className="text-gray-500 text-xs mt-0.5">Manage reviews displayed on your website</p>
        </div>
        <button
          onClick={() => setAdding(true)}
          disabled={saving}
          className="flex items-center gap-1.5 bg-[#C8A545] hover:bg-[#B8963A] disabled:opacity-40 text-black text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          Add Review
        </button>
      </div>

      {adding && (
        <div className="bg-[#151515] border border-white/10 rounded-xl p-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Name</label>
              <input type="text" value={newItem.name ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Initials</label>
              <input type="text" maxLength={2} value={newItem.initials ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, initials: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Rating (1-5)</label>
              <input type="number" min={1} max={5} value={newItem.rating ?? 5} onChange={(e) => setNewItem((p) => ({ ...p, rating: parseInt(e.target.value) || 1 }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
            <div>
              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Date Text</label>
              <input type="text" value={newItem.date_text ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, date_text: e.target.value }))} placeholder="e.g. 2 weeks ago" className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Review Text</label>
            <textarea rows={3} value={newItem.text ?? ""} onChange={(e) => setNewItem((p) => ({ ...p, text: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all resize-none" />
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Name</label>
                    <input type="text" value={edit.name ?? ""} onChange={(e) => setEdit((p) => ({ ...p, name: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Initials</label>
                    <input type="text" maxLength={2} value={edit.initials ?? ""} onChange={(e) => setEdit((p) => ({ ...p, initials: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Rating (1-5)</label>
                    <input type="number" min={1} max={5} value={edit.rating ?? 5} onChange={(e) => setEdit((p) => ({ ...p, rating: parseInt(e.target.value) || 1 }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Date Text</label>
                    <input type="text" value={edit.date_text ?? ""} onChange={(e) => setEdit((p) => ({ ...p, date_text: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Review Text</label>
                  <textarea rows={3} value={edit.text ?? ""} onChange={(e) => setEdit((p) => ({ ...p, text: e.target.value }))} className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] transition-all resize-none" />
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
                    <span className="text-[#C8A545] text-sm font-bold">{item.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-white text-sm font-bold">{item.name}</h4>
                      <div className="flex items-center gap-0.5">{stars(item.rating ?? 5)}</div>
                    </div>
                    <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{item.text}</p>
                    <p className="text-gray-600 text-[10px] mt-1">{item.date_text}</p>
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
          <p className="text-gray-500 text-sm text-center py-8">No reviews yet. Click "Add Review" to create one.</p>
        )}
      </div>
    </div>
  );
}