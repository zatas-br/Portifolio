"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedLogo from "../../ui/AnimatedLogo";
import Slogan from "../../ui/AnimatedSlogan";
import AnimatedButton from "../../ui/AnimatedButton";
import { useTranslations } from "next-intl";

const ServiceSection = () => {
  const t = useTranslations("Hero");

  return (
    <div className="w-full bg-final-home-gradient">
      <section className="h-100 w-full flex flex-col items-center justify-center relative z-10 px-6 text-center">
        
      </section>
    </div>
  );
};

export default ServiceSection;