"use client";

import { useTranslations } from "next-intl";
import AnimatedCardServiceCategory from "../../ui/AnimatedCardServiceCategory";
import AnimatedScrollProcessWork from "../../ui/AnimatedScrollProcessWork";

const categories = [
    {
        title: "Marketing",
        subtitle: "Impulsionamos seus números com estratégia",
        image: "/images/Marketing_Service_Image.png",
        type: "top" as const
    },
    {
        title: "Design",
        subtitle: "Nosso design comunica, conecta e converte",
        image: "/images/Design_Service_Image.png",
        type: "bottom" as const
    },
    {
        title: "Desenvolvimento",
        subtitle: "Desenvolvemos tecnologia que impulsiona resultados",
        image: "/images/Desenvolvimento_Service_Image.png",
        type: "top" as const
    }
];

const HowWorkingSection = () => {
    const t = useTranslations("Hero");

    return (
        <div>
            <section className="w-full bg-final-home-gradient py-20 flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight mb-4">
                        Como nossa equipe trabalha?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Design <span className="text-blue-500 font-medium italic">estratégico</span> e soluções digitais pensadas para transmitir confiança, clareza e profissionalismo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
                    {categories.map((cat, index) => (
                        <AnimatedCardServiceCategory
                            key={index}
                            title={cat.title}
                            subtitle={cat.subtitle}
                            uriImage={cat.image}
                            type={cat.type}
                        />
                    ))}
                </div>
            </div>
        </section>
        <AnimatedScrollProcessWork />
        </div>
    );
};

export default HowWorkingSection;