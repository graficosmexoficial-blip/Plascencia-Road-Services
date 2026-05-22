import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  sort_order: number;
  is_active: boolean;
}

export function useSteps() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSteps = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_steps")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (!error && data) setSteps(data as Step[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSteps();
  }, [fetchSteps]);

  return { steps, loading };
}