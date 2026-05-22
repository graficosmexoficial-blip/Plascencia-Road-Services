import ContentField from "./ContentField";

interface FieldDef {
  key: string;
  label: string;
  multiline?: boolean;
  placeholder?: string;
}

interface AdminContentEditorProps {
  fields: FieldDef[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export default function AdminContentEditor({ fields, values, onChange }: AdminContentEditorProps) {
  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-8">
      {fields.map((field) => (
        <ContentField
          key={field.key}
          label={field.label}
          value={values[field.key] ?? ""}
          onChange={(val) => onChange(field.key, val)}
          multiline={field.multiline}
          placeholder={field.placeholder}
        />
      ))}
    </div>
  );
}