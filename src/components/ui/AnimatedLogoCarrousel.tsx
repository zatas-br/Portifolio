'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

// Adicione aqui o caminho para as logos da imagem
const logos = [
  { src: "/images/carrousel/ef_engenharia.svg", alt: "EF Logo" },
  { src: "/images/carrousel/bykatino.svg", alt: "Bykatino" },
  { src: "/images/carrousel/dpj.svg", alt: "Fitness Logo" },
  { src: "/images/carrousel/aureni_fisioterapia.svg", alt: "Yoga Logo" },
  { src: "/images/carrousel/jaguar.svg", alt: "Panther" },
  { src: "/images/carrousel/varys_logo.svg", alt: "Varys" },
  { src: "/images/carrousel/jersey_hub.svg", alt: "Sport Logo" },
];

const AnimatedLogoCarrousel = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative flex overflow-hidden group py-10">
      <motion.div
        className="flex space-x-16 items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-20 flex justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedLogoCarrousel;