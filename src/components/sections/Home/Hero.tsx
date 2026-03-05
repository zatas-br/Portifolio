"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedLogo from "../../ui/AnimatedLogo";
import Slogan from "../../ui/AnimatedSlogan";
import AnimatedButton from "../../ui/AnimatedButton";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <div className="w-full bg-linear-to-b from-[var(--color-start-home-gradient)] to-[var(--color-final-home-gradient)]">
      
      <section className="h-200 w-full flex flex-col items-center justify-center relative z-10 px-6 text-center">
        <div className="mb-8 w-128 md:w-196">
          <AnimatedLogo />
        </div>
        <div className="mb-12">
          <Slogan />
        </div>
        <div className="flex justify-center">
          <Link href="/services">
            <AnimatedButton
              variant="primary"
            >
              {t("button1")}
            </AnimatedButton>
          </Link>
        </div>
      </section>

      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-5xl px-10">
          <Image 
            src="/images/fundo-passaro 1.svg" 
            alt="Pássaro Zatas"
            width={1200}
            height={800}
            className="w-full h-auto object-contain opacity-90"
            priority
          />
        </div>
      </section>

    </div>
  );
};

export default HeroSection;