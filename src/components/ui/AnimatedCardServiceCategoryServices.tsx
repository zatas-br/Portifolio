"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

interface CardProps {
  path: string;
  image: string;
  label: string;
  isServicePage?: boolean;
}

export default function AnimatedCardServiceCategoryServices({ path, image, label, isServicePage }: CardProps) {
  return (
    <Link href={path} className="group block w-full">
      <div className="relative flex flex-col">
        
        <div className={`w-full aspect-square bg-[#F9FBFC] rounded-[40px] overflow-hidden relative transition-all duration-500 group-hover:-translate-y-2 flex items-center justify-center border border-gray-100 ${
          isServicePage 
            ? "shadow-service-card group-hover:shadow-service-card-hover" 
            : "shadow-portfolio-card group-hover:shadow-portfolio-card-hover"
        }`}>
          <div className="relative w-full h-full p-1">
            <Image 
              src={image}
              alt={label}
              fill
              className={`object-contain transition-transform duration-700 ${
                isServicePage 
                  ? "p-2 scale-110 group-hover:scale-125" 
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