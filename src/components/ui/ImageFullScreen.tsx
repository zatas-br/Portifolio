"use client";

import Image from "next/image";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

export default function FullScreenImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFullScreen = () => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    if (el.requestFullscreen) el.requestFullscreen();
    else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen();
  };

  const closeFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (document.fullscreenElement) document.exitFullscreen();
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleFullScreen}
      className="relative w-full h-full cursor-zoom-in group overflow-hidden rounded-3xl"
    >
      <style jsx>{`
        div:fullscreen {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(145, 8, 8, 0) !important;
        }
        div:fullscreen .img-wrapper {
          width: 80%;
          height: 80%;
          border-radius: 15px;
        }
        div:fullscreen img { 
          object-fit: contain !important; 
        }
        .close-btn { display: none; }
        div:fullscreen .close-btn {
          display: flex;
          position: absolute;
          top: 2rem;
          right: 2rem;
          z-index: 100;
        }
      `}</style>

      <button onClick={closeFullScreen} className="close-btn text-white bg-white/20 p-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-all">
        <IoClose size={32} />
      </button>

      <div className="img-wrapper relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}