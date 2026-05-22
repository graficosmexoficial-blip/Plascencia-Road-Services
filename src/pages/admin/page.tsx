import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSiteContent } from "@/hooks/useSiteContent";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminContentEditor from "./components/AdminContentEditor";
import AdminFAQList from "./components/AdminFAQList";
import AdminReviewList from "./components/AdminReviewList";
import AdminServiceList from "./components/AdminServiceList";
import AdminValueList from "./components/AdminValueList";
import AdminPerformanceList from "./components/AdminPerformanceList";
import AdminStepList from "./components/AdminStepList";
import AdminMediaManager from "./components/AdminMediaManager";

import { useAdminFAQs } from "@/hooks/useAdminFAQs";
import { useAdminReviews } from "@/hooks/useAdminReviews";
import { useAdminServices } from "@/hooks/useAdminServices";
import { useAdminValues } from "@/hooks/useAdminValues";
import { useAdminPerformance } from "@/hooks/useAdminPerformance";
import { useAdminSteps } from "@/hooks/useAdminSteps";
import { useAdminMedia } from "@/hooks/useAdminMedia";

interface FieldDef {
  key: string;
  label: string;
  multiline?: boolean;
  placeholder?: string;
}

interface SectionDef {
  id: string;
  title: string;
  subtitle: string;
  type: "content" | "faqs" | "reviews" | "services" | "values" | "performance" | "steps" | "media";
  fields?: FieldDef[];
}

const sectionDefs: SectionDef[] = [
  {
    id: "hero",
    title: "Hero & Stats",
    subtitle: "Edit text fields and click Save Changes",
    type: "content",
    fields: [
      { key: "hero_badge", label: "Hero Badge" },
      { key: "hero_title", label: "Hero Title" },
      { key: "hero_subtitle", label: "Hero Subtitle", multiline: true },
      { key: "hero_cta_text", label: "Hero CTA Button Text" },
      { key: "hero_phone", label: "Hero Phone Number" },
      { key: "hero_stat1_value", label: "Stat 1 Value" },
      { key: "hero_stat1_label", label: "Stat 1 Label" },
      { key: "hero_stat2_value", label: "Stat 2 Value" },
      { key: "hero_stat2_label", label: "Stat 2 Label" },
      { key: "hero_stat3_value", label: "Stat 3 Value" },
      { key: "hero_stat3_label", label: "Stat 3 Label" },
      { key: "hero_stat4_value", label: "Stat 4 Value" },
      { key: "hero_stat4_label", label: "Stat 4 Label" },
    ],
  },
  {
    id: "about",
    title: "About Us",
    subtitle: "Edit text fields and click Save Changes",
    type: "content",
    fields: [
      { key: "about_badge", label: "About Badge" },
      { key: "about_title", label: "About Title" },
      { key: "about_para1", label: "About Paragraph 1", multiline: true },
      { key: "about_para2", label: "About Paragraph 2", multiline: true },
    ],
  },
  {
    id: "cta",
    title: "CTA Section",
    subtitle: "Edit text fields and click Save Changes",
    type: "content",
    fields: [
      { key: "cta_badge", label: "CTA Badge" },
      { key: "cta_title", label: "CTA Title" },
      { key: "cta_subtitle", label: "CTA Subtitle", multiline: true },
      { key: "cta_button", label: "CTA Button Text" },
      { key: "cta_phone", label: "CTA Phone Number" },
    ],
  },
  {
    id: "contact",
    title: "Contact Info",
    subtitle: "Edit text fields and click Save Changes",
    type: "content",
    fields: [
      { key: "contact_phone", label: "Phone Number" },
      { key: "contact_email", label: "Email Address" },
      { key: "contact_address", label: "Street Address" },
      { key: "contact_city", label: "City / State / ZIP" },
      { key: "contact_social", label: "Social Handle" },
    ],
  },
  {
    id: "services",
    title: "Services",
    subtitle: "Manage services displayed on your website",
    type: "services",
  },
  {
    id: "faqs",
    title: "FAQs",
    subtitle: "Manage frequently asked questions",
    type: "faqs",
  },
  {
    id: "hiw",
    title: "How It Works",
    subtitle: "Edit the 4-step process shown on the homepage",
    type: "steps",
  },
  {
    id: "values",
    title: "Our Values",
    subtitle: "Values shown on the About Us page",
    type: "values",
  },
  {
    id: "performance",
    title: "Performance Bars",
    subtitle: "Edit the animated stats shown next to the video",
    type: "performance",
  },
  {
    id: "reviews",
    title: "Customer Reviews",
    subtitle: "Manage reviews displayed on your website",
    type: "reviews",
  },
  {
    id: "media",
    title: "Media Manager",
    subtitle: "Hover and click Change to upload a new file",
    type: "media",
  },
];

const defaultValues: Record<string, Record<string, string>> = {
  hero: {
    hero_badge: "San Bernardino, CA",
    hero_title: "Especialistas en Reparación de Camiones.",
    hero_subtitle:
      "Más de 15 años de experiencia. Diagnóstico por computadora, DPF, auditorías DOT, transmisiones automáticas y estándar, y mecánica general para camiones y coches en San Bernardino, California.",
    hero_cta_text: "Solicita tu Cotización Hoy",
    hero_phone: "(512) 733-3148",
    hero_stat1_value: "15+",
    hero_stat1_label: "Años de Experiencia",
    hero_stat2_value: "500+",
    hero_stat2_label: "Camiones Reparados",
    hero_stat3_value: "100%",
    hero_stat3_label: "Auditorías Aprobadas",
    hero_stat4_value: "24/7",
    hero_stat4_label: "Disponibilidad",
  },
  about: {
    about_badge: "Sobre Nosotros",
    about_title: "Especialistas de Confianza en Reparación de Camiones en California",
    about_para1:
      "Plascencia Road Services nació del sueño compartido de dos familias que decidieron unir fuerzas para crear algo más grande que un simple taller.",
    about_para2:
      "Con más de 15 años de experiencia, nos especializamos en diagnóstico por computadora, reprogramación de ECU, cancelación y reinstalación de sistemas DPF, transmisiones automáticas y estándar, auditorías DOT y mecánica general.",
  },
  cta: {
    cta_badge: "Solicita tu Cotización Hoy 👇",
    cta_title: "Cotización para Reparación de Camiones",
    cta_subtitle:
      "Obtén asesoría personalizada de nuestros especialistas sin compromiso. Hablemos sobre auditorías DOT, DPF, diagnóstico o cualquier reparación que necesites.",
    cta_button: "Habla con Nuestro Equipo",
    cta_phone: "(512) 733-3148",
  },
  contact: {
    contact_phone: "(951) 334-5236",
    contact_email: "Olgapla1981@gmail.com",
    contact_address: "1566 Colorado Ave",
    contact_city: "San Bernardino, CA 92411",
    contact_social: "@plascenciards",
  },
};

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const { content, loading: contentLoading, saving: contentSaving, saveContent } = useSiteContent();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("hero");
  const [formValues, setFormValues] = useState<Record<string, Record<string, string>>>();
  const [dirty, setDirty] = useState(false);

  // CRUD hooks
  const faqs = useAdminFAQs();
  const reviews = useAdminReviews();
  const services = useAdminServices();
  const values = useAdminValues();
  const performance = useAdminPerformance();
  const steps = useAdminSteps();
  const media = useAdminMedia();

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [authLoading, user, navigate]);

  // Initialize form values from content or defaults
  useEffect(() => {
    if (contentLoading) return;
    const merged: Record<string, Record<string, string>> = {};
    for (const section of Object.keys(defaultValues)) {
      merged[section] = {};
      for (const key of Object.keys(defaultValues[section])) {
        merged[section][key] = content?.[section]?.[key] ?? defaultValues[section][key];
      }
    }
    setFormValues(merged);
  }, [content, contentLoading]);

  const handleContentChange = useCallback((section: string, key: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [section]: {
        ...prev?.[section],
        [key]: value,
      },
    }));
    setDirty(true);
  }, []);

  const handleSaveContent = useCallback(async () => {
    if (!formValues) return;
    const updates: { section: string; key: string; value: string }[] = [];
    for (const section of Object.keys(formValues)) {
      for (const key of Object.keys(formValues[section])) {
        updates.push({
          section,
          key,
          value: formValues[section][key],
        });
      }
    }
    await saveContent(updates);
    setDirty(false);
  }, [formValues, saveContent]);

  const currentSection = sectionDefs.find((s) => s.id === activeSection)!;

  const isContentSaving = currentSection.type === "content" && (contentSaving || dirty);
  const isAnySaving =
    contentSaving ||
    faqs.saving ||
    reviews.saving ||
    services.saving ||
    values.saving ||
    performance.saving ||
    steps.saving ||
    media.saving;

  const handleSave = useCallback(async () => {
    if (currentSection.type === "content") {
      await handleSaveContent();
    }
  }, [currentSection.type, handleSaveContent]);

  if (authLoading || contentLoading) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="text-[#C8A545] text-sm font-bold animate-pulse">Cargando...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">
      <AdminSidebar activeSection={activeSection} onSelect={setActiveSection} />

      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        <AdminHeader
          sectionTitle={currentSection.title}
          sectionSubtitle={currentSection.subtitle}
          onSave={handleSave}
          saving={isAnySaving}
          hasChanges={isContentSaving}
        />

        <main className="flex-1 p-8 max-w-5xl">
          {currentSection.type === "content" && currentSection.fields && (
            <AdminContentEditor
              fields={currentSection.fields}
              values={formValues?.[currentSection.id] ?? {}}
              onChange={(key, val) => handleContentChange(currentSection.id, key, val)}
            />
          )}

          {currentSection.type === "faqs" && (
            <AdminFAQList
              items={faqs.items}
              saving={faqs.saving}
              onCreate={faqs.create}
              onUpdate={faqs.update}
              onRemove={faqs.remove}
            />
          )}

          {currentSection.type === "reviews" && (
            <AdminReviewList
              items={reviews.items}
              saving={reviews.saving}
              onCreate={reviews.create}
              onUpdate={reviews.update}
              onRemove={reviews.remove}
            />
          )}

          {currentSection.type === "services" && (
            <AdminServiceList
              items={services.items}
              saving={services.saving}
              onCreate={services.create}
              onUpdate={services.update}
              onRemove={services.remove}
            />
          )}

          {currentSection.type === "values" && (
            <AdminValueList
              items={values.items}
              saving={values.saving}
              onCreate={values.create}
              onUpdate={values.update}
              onRemove={values.remove}
            />
          )}

          {currentSection.type === "performance" && (
            <AdminPerformanceList
              items={performance.items}
              saving={performance.saving}
              onCreate={performance.create}
              onUpdate={performance.update}
              onRemove={performance.remove}
            />
          )}

          {currentSection.type === "steps" && (
            <AdminStepList
              items={steps.items}
              saving={steps.saving}
              onCreate={steps.create}
              onUpdate={steps.update}
              onRemove={steps.remove}
            />
          )}

          {currentSection.type === "media" && (
            <AdminMediaManager
              items={media.items}
              saving={media.saving}
              onCreate={media.create}
              onUpdate={media.update}
              onRemove={media.remove}
            />
          )}
        </main>
      </div>
    </div>
  );
}