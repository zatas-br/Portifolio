"use client";

import { Lora } from "next/font/google";
import { forwardRef } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"]
});

interface TeamProps {
  imageSrc: string;
  name: string;
}

const TeamComponentIcon = forwardRef<HTMLDivElement, TeamProps>(({ imageSrc, name }, ref) => {
  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/20 shadow-2xl overflow-hidden relative bg-slate-200">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute -bottom-2 w-max px-4 py-1 rounded-xl
                   backdrop-blur-sm
                   shadow-sm flex items-center justify-center z-10"
        style={{ backgroundColor: "rgba(202, 202, 202, 0.11)" }}
      >
        <p className={`${lora.className} text-slate-800 text-[10px] md:text-xs font-medium whitespace-nowrap`}>
          {name}
        </p>
      </div>
    </div>
  );
});

TeamComponentIcon.displayName = "TeamComponentIcon";

export default TeamComponentIcon;