import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export function useAdminValues() {
  const [items, setItems] = useState<ValueItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_values")
      .select("*")
      .order("sort_order", { ascending: true });
    if (!error && data) setItems(data as ValueItem[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const create = useCallback(async (item: Omit<ValueItem, "id" | "created_at" | "updated_at">) => {
    setSaving(true);
    const maxOrder = items.length > 0 ? Math.max(...items.map((i) => i.sort_order ?? 0)) : 0;
    const { data, error } = await supabase
      .from("site_values")
      .insert({ ...item, sort_order: maxOrder + 1 })
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => [...prev, data as ValueItem]);
      return data as ValueItem;
    }
    return null;
  }, [items]);

  const update = useCallback(async (id: number, updates: Partial<ValueItem>) => {
    setSaving(true);
    const { data, error } = await supabase
      .from("site_values")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => prev.map((i) => (i.id === id ? (data as ValueItem) : i)));
      return data as ValueItem;
    }
    return null;
  }, []);

  const remove = useCallback(async (id: number) => {
    setSaving(true);
    const { error } = await supabase.from("site_values").delete().eq("id", id);
    setSaving(false);
    if (!error) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      return true;
    }
    return false;
  }, []);

  return { items, loading, saving, fetch, create, update, remove };
}