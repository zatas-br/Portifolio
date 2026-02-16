// ARQUIVO: src/components/ui/AnimatedCardServiceCategory.tsx

"use client";

import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

interface CardProps {
  id: string;
  path: string;
  image: string;
  label: string;
}

export default function AnimatedCardServiceCategory({ id, path, image, label }: CardProps) {
  return (
    <Link href={path} className="group block w-full">
      <div className="relative flex flex-col">
        
        {/* Container do Card - Drop Shadow para baixo e fundo claro */}
        <div className="w-full aspect-square bg-[#F9FBFC] rounded-[40px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] overflow-hidden relative transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center justify-center border border-gray-100">
          
          {/* Zoom na Imagem: Padding interno reduzido (p-1) para imagem maior */}
          <div className="relative w-full h-full p-1">
            <Image 
              src={image}
              alt={label}
              fill
              className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Textos e Barras */}
        <div className="mt-6 w-full px-1">
          <div className="flex flex-col">
            {/* Título do Serviço em #1E1E1E */}
            <h2 className="text-lg md:text-xl font-bold text-[#1E1E1E] transition-colors duration-300 group-hover:text-[#0D47A1] uppercase tracking-tight">
              {label}
            </h2>
            
            {/* Barra base #B2B2B2 e Barra de animação #0D47A1 */}
            <div className="h-[2px] w-full bg-[#B2B2B2] mt-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#0D47A1] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}