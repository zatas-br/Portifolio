'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { src: "/images/clients/ef_engenharia.svg", alt: "EF Logo" },
  { src: "/images/clients/bykatino.svg", alt: "Bykatino" },
  { src: "/images/clients/dpj.svg", alt: "Fitness Logo" },
  { src: "/images/clients/aureni_fisioterapia.svg", alt: "Yoga Logo" },
  { src: "/images/clients/jaguar.svg", alt: "Panther" },
  { src: "/images/clients/varys_logo.svg", alt: "Varys" },
  { src: "/images/clients/jersey_hub.svg", alt: "Sport Logo" },
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