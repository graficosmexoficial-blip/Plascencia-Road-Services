import { useState, useEffect } from "react";

interface LightboxProps {
  url: string;
  name: string;
  type: string;
  onClose: () => void;
  onDownload: () => void;
}

export default function MediaLightbox({ url, name, type, onClose, onDownload }: LightboxProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-between mb-3">
          <p className="text-white text-sm font-bold truncate max-w-md">{name}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="flex items-center gap-1.5 bg-[#C8A545] hover:bg-[#B8963A] text-black text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-download-line"></i>
              Descargar
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-lg"></i>
            </button>
          </div>
        </div>
        <div className="w-full bg-[#111111] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center" style={{ maxHeight: "70vh" }}>
          {type === "video" ? (
            <video src={url} controls className="w-full max-h-[70vh] object-contain" />
          ) : (
            <img src={url} alt={name} className="w-full max-h-[70vh] object-contain" />
          )}
        </div>
        <p className="text-gray-500 text-xs mt-2">{type === "video" ? "Video" : "Imagen"}</p>
      </div>
    </div>
  );
}