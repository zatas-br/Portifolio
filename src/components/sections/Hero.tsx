"use client";

import Link from "next/link";
import AnimatedLogo from "../ui/AnimatedLogo";
import Slogan from "../ui/AnimatedSlogan";
import AnimatedButton from "../ui/AnimatedButton";
import { FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <div className="h-full w-full bg-surface flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
        <div className="mb-8">
          <AnimatedLogo />
        </div>
        <div className="mb-12">
          <Slogan />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
          <Link href="/services" className="w-full sm:w-auto">
            <AnimatedButton
              variant="primary"
              icon={<span>→</span>}
              onClick={() => console.log("Ver Projetos")}
            >
              {t("button1")}
            </AnimatedButton>
          </Link>
          <AnimatedButton
            variant="secondary"
            icon={<FaInstagram size={18} />}
            onClick={() =>
              window.open("https://instagram.com/zatas.com.br", "_blank")
            }
          >
            {t("button2")}
          </AnimatedButton>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-surface/30" />
    </div>
  );
};

export default HeroSection;
