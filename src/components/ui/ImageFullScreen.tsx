"use client";

interface FullScreenImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export default function FullScreenImage({ src, alt, onClick }: FullScreenImageProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-full cursor-zoom-in overflow-hidden rounded-3xl group"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
          Ampliar
        </span>
      </div>
    </div>
  );
}