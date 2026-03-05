"use client";

import Image from "next/image";

const logos = [
  { src: "/images/clients/ef_engenharia.svg", alt: "EF Engenharia" },
  { src: "/images/clients/bykatino.svg", alt: "ByKatino" },
  { src: "/images/clients/dpj.svg", alt: "DPJ Personal" },
  { src: "/images/clients/aureni_fisioterapia.svg", alt: "Aureni Fisioterapia" },
  { src: "/images/clients/jaguar.svg", alt: "Jaguar" },
  { src: "/images/clients/varys_logo.svg", alt: "Varys" },
  { src: "/images/clients/jersey_hub.svg", alt: "Jersey Hub" },
];

const doubled = [...logos, ...logos];

const AnimatedLogoCarrousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex py-10 w-max animate-logo-scroll">
        {doubled.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 mx-10 flex justify-center items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={112}
              height={56}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogoCarrousel;