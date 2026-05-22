import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface ReviewItem {
  id: number;
  rating: number;
  text: string;
  initials: string;
  name: string;
  date_text: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export function useAdminReviews() {
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_reviews")
      .select("*")
      .order("sort_order", { ascending: true });
    if (!error && data) setItems(data as ReviewItem[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const create = useCallback(async (item: Omit<ReviewItem, "id" | "created_at" | "updated_at">) => {
    setSaving(true);
    const maxOrder = items.length > 0 ? Math.max(...items.map((i) => i.sort_order ?? 0)) : 0;
    const { data, error } = await supabase
      .from("site_reviews")
      .insert({ ...item, sort_order: maxOrder + 1 })
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => [...prev, data as ReviewItem]);
      return data as ReviewItem;
    }
    return null;
  }, [items]);

  const update = useCallback(async (id: number, updates: Partial<ReviewItem>) => {
    setSaving(true);
    const { data, error } = await supabase
      .from("site_reviews")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => prev.map((i) => (i.id === id ? (data as ReviewItem) : i)));
      return data as ReviewItem;
    }
    return null;
  }, []);

  const remove = useCallback(async (id: number) => {
    setSaving(true);
    const { error } = await supabase.from("site_reviews").delete().eq("id", id);
    setSaving(false);
    if (!error) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      return true;
    }
    return false;
  }, []);

  return { items, loading, saving, fetch, create, update, remove };
}