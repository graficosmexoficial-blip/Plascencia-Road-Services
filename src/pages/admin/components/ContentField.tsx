interface ContentFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  placeholder?: string;
}

export default function ContentField({
  label,
  value,
  onChange,
  multiline = false,
  placeholder = "",
}: ContentFieldProps) {
  return (
    <div className="mb-5">
      <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-[#1f1f1f] transition-all resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#C8A545] focus:bg-[#1f1f1f] transition-all"
        />
      )}
    </div>
  );
}