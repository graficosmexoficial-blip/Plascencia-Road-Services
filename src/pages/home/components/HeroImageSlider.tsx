import { useRef, useEffect } from "react";

const videoUrl = "https://storage.readdy-site.link/project_files/e1ee72c3-9d55-4c39-a83d-fc5c0cc164bf/3c802e52-e51a-415f-91e5-7157873f98d4_42342.mp4?v=c1ac9ac42903deecde260271be7c3e71";

export default function HeroImageSlider() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // autoplay bloqueado por el navegador, nada que hacer
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/75 to-[#0d0d0d]/40 z-[2]"></div>
    </div>
  );
}