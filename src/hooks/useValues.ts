import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
  sort_order: number;
  is_active: boolean;
}

export function useValues() {
  const [values, setValues] = useState<Value[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchValues = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_values")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (!error && data) setValues(data as Value[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchValues();
  }, [fetchValues]);

  return { values, loading };
}