import { Link } from "react-router-dom";

export function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export function GoogleStars() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i} className="ri-star-fill text-yellow-400 text-xs"></i>
      ))}
    </div>
  );
}

interface GoogleReviewsBadgeProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export default function GoogleReviewsBadge({
  size = "md",
  showLabel = true,
  className = "",
}: GoogleReviewsBadgeProps) {
  const sizes = {
    sm: {
      star: "text-[10px]",
      text: "text-[11px]",
      rating: "text-sm",
      dot: "w-1.5 h-1.5",
      pad: "px-2 py-1",
      gap: "gap-1",
    },
    md: {
      star: "text-xs",
      text: "text-xs",
      rating: "text-base",
      dot: "w-2 h-2",
      pad: "px-3 py-1.5",
      gap: "gap-1.5",
    },
    lg: {
      star: "text-sm",
      text: "text-sm",
      rating: "text-lg",
      dot: "w-2.5 h-2.5",
      pad: "px-4 py-2",
      gap: "gap-2",
    },
  };

  const s = sizes[size];

  return (
    <Link
      to="/contact"
      className={`inline-flex items-center ${s.gap} bg-white border border-gray-200 rounded-full ${s.pad} hover:shadow-sm transition-shadow cursor-pointer ${className}`}
    >
      {/* Google G Logo */}
      <div className="flex items-center gap-1 shrink-0">
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white border border-gray-200 shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        {showLabel && (
          <span className={`${s.text} font-medium text-gray-700 hidden sm:inline`}>Reseñas</span>
        )}
      </div>

      <div className="w-px h-3.5 bg-gray-200"></div>

      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <i key={i} className={`${s.star} ri-star-fill text-yellow-400`}></i>
        ))}
      </div>

      {/* Rating number */}
      <span className={`${s.rating} font-bold text-gray-800`}>5.0</span>

      {/* Dot separator */}
      <div className={`${s.dot} rounded-full bg-gray-300`}></div>

      {/* Review count */}
      <span className={`${s.text} text-gray-500`}>30+ reseñas</span>
    </Link>
  );
}