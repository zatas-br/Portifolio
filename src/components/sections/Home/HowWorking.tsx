"use client";

import { useTranslations } from "next-intl";
import AnimatedCardServiceCategory from "../../ui/AnimatedCardServiceCategory";
import AnimatedScrollProcessWork from "../../ui/AnimatedScrollProcessWork";
import { HOME_CATEGORIES } from "@/src/data/home";

const HowWorkingSection = () => {
    const t = useTranslations("HowWorking");

    return (
        <div>
            <section className="w-full bg-final-home-gradient py-20 flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-7xl mx-auto flex flex-col items-center">

                    <div className="text-center mb-16">
                        <h2 className="text-gray-900 uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight mb-4">
                            {t("title")}
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-[16px] font-light leading-relaxed">
                            {t.rich("description", {
                                italic: (chunks) => <span className="text-blue-500 font-medium italic">{chunks}</span>
                            })}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
                        {HOME_CATEGORIES.map((cat, index) => (
                            <AnimatedCardServiceCategory
                                key={index}
                                title={t(`categories.${cat.id}.title`)}
                                subtitle={t(`categories.${cat.id}.subtitle`)}
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
