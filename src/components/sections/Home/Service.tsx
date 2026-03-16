"use client";

import Link from "next/link";
import AnimatedButton from "../../ui/AnimatedButton";
import { useTranslations } from "next-intl";
import AnimatedCardService from "../../ui/AnimatedCardServices";
import { HOME_SERVICE_CARDS } from "@/src/data/home";

const ServiceSection = () => {
    const t = useTranslations("Service");

    return (
        <section className="w-full bg-final-home-gradient py-20 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-6">
                <h2 className="text-[#2d3748] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[1.1] tracking-tight">
                    {t("title1")}
                </h2>
                <h3 className="text-[#2d3748] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[1.1] tracking-tight">
                    {t("title2")}
                </h3>
            </div>

            <div className="max-w-2xl mb-16">
                <p className="text-gray-500 text-[16px] font-light leading-relaxed">
                    {t("description1")}
                </p>
                <p className="text-gray-500 text-[16px] font-light leading-relaxed">
                    {t("description2")}
                </p>
            </div>

            <div className="flex justify-center">
                <Link href="/services">
                    <AnimatedButton
                        variant="primary"
                    >
                        {t("viewPortfolio")}
                    </AnimatedButton>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {HOME_SERVICE_CARDS.map((card) => (
                    <AnimatedCardService
                        key={card.id}
                        iconUri={card.iconUri}
                        text={t(`cards.${card.id}`)}
                        activeColor={card.activeColor}
                        iconAlt={t("cardIconAlt")}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;
