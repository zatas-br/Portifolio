"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
  FaAd,
  FaSearch,
  FaPen,
} from "react-icons/fa";
import { MdDesignServices, MdBrandingWatermark } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { FaHashtag } from "react-icons/fa";
import { CATEGORIES_STATIC } from "@/src/data/projects";
import { usePortfolioAnimations } from "@/src/hooks/usePortfolioAnimations";
import { useTranslations } from "next-intl";

const categoryIcons: Record<string, React.ReactNode> = {
  desenvolvimento: <FaCode className="w-16 h-16" />,
  design: <FaPalette className="w-16 h-16" />,
  marketing: <FaBullhorn className="w-16 h-16" />,
};

const tagIcons: Record<string, React.ReactNode> = {
  Web: <FaLaptopCode className="w-3 h-3" />,
  Mobile: <FaMobileAlt className="w-3 h-3" />,
  APIs: <FaServer className="w-3 h-3" />,

  "UI/UX": <MdDesignServices className="w-3 h-3" />,
  Branding: <MdBrandingWatermark className="w-3 h-3" />,
  Identidade: <HiSparkles className="w-3 h-3" />,

  SEO: <FaSearch className="w-3 h-3" />,
  "Social Media": <FaHashtag className="w-3 h-3" />,
  "Redes Sociais": <FaHashtag className="w-3 h-3" />,
  Ads: <FaAd className="w-3 h-3" />,
  Anúncios: <FaAd className="w-3 h-3" />,
  Analytics: <FaChartLine className="w-3 h-3" />,
};

const categoryTagsOverride: Record<string, string[]> = {
  desenvolvimento: ["Web", "Mobile", "APIs"],
  design: ["UI/UX", "Branding", "Identidade"],
  marketing: ["SEO", "Ads", "Analytics"],
};

export default function ServicesLandingPage() {
  const t = useTranslations("ServicesLandingPage");
  const tCategories = useTranslations("Categories");

  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(cardsRef.current, 0.15);
  }, [animateEnter, animateFadeIn]);

  return (
    <div className="min-h-screen bg-surface">
      <div ref={headerRef} className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            <span className="text-text">{t("title1")} </span>
            <span className="text-primary-v2">{t("title2")}</span>
            <br />
            <span className="text-text">{t("title3")} </span>
            <span className="text-primary-v2 font-extrabold">
              {t("title4")}
            </span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto text-center leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES_STATIC.map((category, index) => {
            const title = tCategories(`${category.id}.title`);
            const description = tCategories(`${category.id}.description`);
            const tags = categoryTagsOverride[category.id] || [];
            return (
              <div
                key={category.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onClick={() => router.push(`/services/${category.id}`)}
                className="group cursor-pointer h-full"
              >
                <div className="bg-surface border-2 border-border rounded-3xl p-8 h-full hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                  <div className="text-primary-v2 mb-6 group-hover:scale-110 group-hover:text-primary-hover transition-all duration-300">
                    {categoryIcons[category.id]}
                  </div>
                  <h2 className="text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                    {title}
                  </h2>
                  <p className="text-lg text-text-muted mb-8 leading-relaxed h-[120px] overflow-hidden">
                    {description}
                  </p>
                  <div className="flex items-center gap-2 text-icons font-semibold cursor-pointer mb-8">
                    <span>{t("viewProjects")}</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="mt-auto pt-6 border-t border-border">
                    <div className="grid grid-cols-3 gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center justify-center gap-1.5 text-xs text-text-muted bg-surface-alt px-2 py-2 rounded-full h-[36px] whitespace-nowrap overflow-hidden text-ellipsis"
                          title={tag}
                        >
                          <span className="flex-shrink-0">{tagIcons[tag]}</span>
                          <span className="truncate">{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-20 text-center">
          <div className="bg-surface rounded-2xl p-12 border-2 border-border max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-text mb-4">
              {t("ctaTitle")}
            </h3>
            <p className="text-xl text-text-muted mb-8">{t("ctaSubtitle")}</p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-hover active:bg-primary-active transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              {t("ctaButton")}{" "}
              <FaArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
