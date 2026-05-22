import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface PerformanceBar {
  id: number;
  label: string;
  percentage: number;
  sort_order: number;
  is_active: boolean;
}

export function usePerformanceBars() {
  const [bars, setBars] = useState<PerformanceBar[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBars = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_performance")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (!error && data) setBars(data as PerformanceBar[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBars();
  }, [fetchBars]);

  return { bars, loading };
}