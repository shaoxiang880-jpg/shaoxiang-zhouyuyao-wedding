import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  placeholderClassName?: string;
}

/**
 * 智能图片组件
 * 素材未上传时显示优雅占位符，上传后自动显示
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  placeholder = "照片占位",
  placeholderClassName = "",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-ivory-200/40 border border-champagne-200/30 ${className} ${placeholderClassName}`}
      >
        <div className="text-center p-6">
          <svg
            className="w-10 h-10 mx-auto text-champagne-300/40 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-champagne-400/50 text-xs font-serif">{placeholder}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
    />
  );
}
