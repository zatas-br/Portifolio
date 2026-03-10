"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedLogo from "../../ui/AnimatedLogo";
import Slogan from "../../ui/AnimatedSlogan";
import AnimatedButton from "../../ui/AnimatedButton";
import { useTranslations } from "next-intl";
import AnimatedCardService from "../../ui/AnimatedCardServices";
import { GiLightBulb } from "react-icons/gi";

const ServiceSection = () => {
    const t = useTranslations("Hero");

    return (
        <section className="w-full bg-final-home-gradient py-20 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] uppercase tracking-tight">
                    CONFIRA NOSSOS
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#2d3748] uppercase tracking-tight">
                    PRINCIPAIS SERVIÇOS
                </h3>
            </div>

            <div className="max-w-2xl mb-16">
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Além dos serviços abaixo, realizamos criação de soluções e softwares
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    sob demanda do cliente
                </p>
            </div>

            <div className="flex justify-center">
                <Link href="/services">
                    <AnimatedButton
                        variant="primary"
                    >
                        {"Ver Portfólio"}
                    </AnimatedButton>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <AnimatedCardService
                    iconUri="/images/CardServices/icon_Lamp.svg"
                    text="Estratégia personalizada para o seu negócio crescer"
                    activeColor="#f0705a"
                />

                <AnimatedCardService
                    iconUri="/images/CardServices/icon_Monitor.svg"
                    text="Estratégia personalizada para o seu negócio crescer"
                    activeColor="#f0705a"
                />

                <AnimatedCardService
                    iconUri="/images/CardServices/icon_Pincel.svg"
                    text="Estratégia personalizada para o seu negócio crescer"
                    activeColor="#f0705a"
                />

                <AnimatedCardService
                    iconUri="/images/CardServices/icon_Finance.svg"
                    text="Estratégia personalizada para o seu negócio crescer"
                    activeColor="#f0705a"
                />

                <AnimatedCardService
                    iconUri="/images/CardServices/icon_Search.svg"
                    text="Estratégia personalizada para o seu negócio crescer"
                    activeColor="#f0705a"
                />

                <AnimatedCardService
                    iconUri="/images/CardServices/icon_Globe.svg"
                    text="Estratégia personalizada para o seu negócio crescer"
                    activeColor="#f0705a"
                />


            </div>
        </section>
    );
};

export default ServiceSection;