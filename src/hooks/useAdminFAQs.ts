import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export function useAdminFAQs() {
  const [items, setItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_faqs")
      .select("*")
      .order("sort_order", { ascending: true });
    if (!error && data) setItems(data as FAQItem[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const create = useCallback(async (question: string, answer: string) => {
    setSaving(true);
    const maxOrder = items.length > 0 ? Math.max(...items.map((i) => i.sort_order ?? 0)) : 0;
    const { data, error } = await supabase
      .from("site_faqs")
      .insert({ question, answer, sort_order: maxOrder + 1, is_active: true })
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => [...prev, data as FAQItem]);
      return data as FAQItem;
    }
    return null;
  }, [items]);

  const update = useCallback(async (id: number, updates: Partial<FAQItem>) => {
    setSaving(true);
    const { data, error } = await supabase
      .from("site_faqs")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    setSaving(false);
    if (!error && data) {
      setItems((prev) => prev.map((i) => (i.id === id ? (data as FAQItem) : i)));
      return data as FAQItem;
    }
    return null;
  }, []);

  const remove = useCallback(async (id: number) => {
    setSaving(true);
    const { error } = await supabase.from("site_faqs").delete().eq("id", id);
    setSaving(false);
    if (!error) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      return true;
    }
    return false;
  }, []);

  return { items, loading, saving, fetch, create, update, remove };
}