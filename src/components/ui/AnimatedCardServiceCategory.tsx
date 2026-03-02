"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

interface CardProps {
  id: string;
  path: string;
  image: string;
  label: string;
  isServicePage?: boolean;
}

export default function AnimatedCardServiceCategory({ id, path, image, label, isServicePage }: CardProps) {
  return (
    <Link href={path} className="group block w-full">
      <div className="relative flex flex-col">
        
        <div className="w-full aspect-square bg-[#F9FBFC] rounded-[40px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.4)] overflow-hidden relative transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] flex items-center justify-center border border-white/40">
          
          <div className="relative w-full h-full p-0.5">
            <Image 
              src={image}
              alt={label}
              fill
              className={`object-contain transition-transform duration-700 ${
                isServicePage 
                  ? "p-2 scale-112 group-hover:scale-120" 
                  : "p-6 group-hover:scale-110"
              }`}
              priority
            />
          </div>
        </div>

        <div className="mt-6 w-full px-1">
          <div className="flex flex-col">
            <h2 className={`text-[#1E1E1E] transition-colors duration-300 group-hover:text-[#0D47A1] uppercase tracking-tight font-sans ${
              isServicePage 
                ? "text-sm font-normal" 
                : "text-lg md:text-xl font-bold"
            }`}>
              {label}
            </h2>
            
            <div className="h-[2px] w-full bg-[#B2B2B2] mt-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#0D47A1] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}