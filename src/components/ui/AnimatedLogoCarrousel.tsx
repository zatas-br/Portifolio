"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { HOME_CLIENT_LOGOS } from "@/src/data/home";

const AnimatedLogoCarrousel = () => {
  const t = useTranslations("Result");
  const doubled = [...HOME_CLIENT_LOGOS, ...HOME_CLIENT_LOGOS];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex py-10 w-max animate-logo-scroll">
        {doubled.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 w-28 mx-10 flex justify-center items-center"
          >
            <Image
              src={logo.src}
              alt={t(`clientLogos.${logo.id}`)}
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
