import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image_url: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export function useAdminServices() {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_services")
      .select("*")
      .order("sort_order", { ascending: true });
    if (!error && data) setItems(data as ServiceItem[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const create = useCallback(async (item: Omit<ServiceItem, "id" | "created_at" | "updated_at">) => {
    setSaving(true);
    const maxOrder = items.length > 0 ? Math.max(...items.map((i) => i.sort_order ?? 0)) : 0;
    const { data, error } = await supabase
      .from("site_services")
      .insert({ ...item, sort_order: maxOrder + 1 })
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => [...prev, data as ServiceItem]);
      return data as ServiceItem;
    }
    return null;
  }, [items]);

  const update = useCallback(async (id: number, updates: Partial<ServiceItem>) => {
    setSaving(true);
    const { data, error } = await supabase
      .from("site_services")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => prev.map((i) => (i.id === id ? (data as ServiceItem) : i)));
      return data as ServiceItem;
    }
    return null;
  }, []);

  const remove = useCallback(async (id: number) => {
    setSaving(true);
    const { error } = await supabase.from("site_services").delete().eq("id", id);
    setSaving(false);
    if (!error) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      return true;
    }
    return false;
  }, []);

  return { items, loading, saving, fetch, create, update, remove };
}