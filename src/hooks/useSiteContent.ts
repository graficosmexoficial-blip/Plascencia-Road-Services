import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export interface SiteContentItem {
  id: number;
  section: string;
  key: string;
  value: string;
}

let globalCache: Record<string, Record<string, string>> | undefined;
let fetchPromise: Promise<void> | undefined;

export function useSiteContent() {
  const [content, setContent] = useState<Record<string, Record<string, string>>>(globalCache ?? {});
  const [loading, setLoading] = useState(!globalCache);
  const [saving, setSaving] = useState(false);

  const fetchContent = useCallback(async () => {
    if (fetchPromise) {
      await fetchPromise;
      setContent(globalCache ?? {});
      setLoading(false);
      return;
    }

    if (globalCache) {
      setContent(globalCache);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchPromise = (async () => {
      const { data, error } = await supabase.from("site_content").select("*");
      if (error) {
        console.error("Error fetching site content:", error);
        return;
      }
      const mapped: Record<string, Record<string, string>> = {};
      (data as SiteContentItem[]).forEach((item) => {
        if (!mapped[item.section]) mapped[item.section] = {};
        mapped[item.section][item.key] = item.value;
      });
      globalCache = mapped;
    })();

    await fetchPromise;
    setContent(globalCache ?? {});
    setLoading(false);
    fetchPromise = undefined;
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const getValue = useCallback(
    (section: string, key: string, fallback = "") => {
      return content[section]?.[key] ?? fallback;
    },
    [content]
  );

  const saveContent = useCallback(
    async (updates: { section: string; key: string; value: string }[]) => {
      setSaving(true);
      for (const update of updates) {
        const { data: existing } = await supabase
          .from("site_content")
          .select("id")
          .eq("section", update.section)
          .eq("key", update.key)
          .maybeSingle();

        if (existing) {
          await supabase
            .from("site_content")
            .update({ value: update.value, updated_at: new Date().toISOString() })
            .eq("id", existing.id);
        } else {
          await supabase.from("site_content").insert({
            section: update.section,
            key: update.key,
            value: update.value,
          });
        }
      }
      globalCache = undefined;
      await fetchContent();
      setSaving(false);
    },
    [fetchContent]
  );

  return { content, loading, saving, getValue, saveContent, refresh: fetchContent };
}