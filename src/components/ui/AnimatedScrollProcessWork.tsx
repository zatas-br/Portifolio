"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Montserrat } from "next/font/google";
import { useTranslations } from "next-intl";
import { HOME_WORK_STEPS } from "@/src/data/home";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function VerticalTimeline() {
    const t = useTranslations("WorkProcess");
    const tHome = useTranslations("HowWorking");
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const logoMobileRef = useRef<HTMLDivElement>(null);
    const diamondRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // ─── DESKTOP ───────────────────────────────────────────────
        mm.add("(min-width: 768px)", () => {
            const totalScroll = containerRef.current;

            gsap.to(".progress-line", {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: totalScroll,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            });

            gsap.to(logoRef.current, {
                top: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: totalScroll,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            });

            gsap.to(diamondRef.current, {
                rotation: 360 + 45,
                ease: "none",
                scrollTrigger: {
                    trigger: totalScroll,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });
        });

        // ─── MOBILE ────────────────────────────────────────────────
        // Sem coluna sticky — usa top/bottom direto no scroll da página
        mm.add("(max-width: 767px)", () => {
            const totalScroll = containerRef.current;

            gsap.to(".progress-line-mobile", {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: totalScroll,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                }
            });

            gsap.to(logoMobileRef.current, {
                top: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: totalScroll,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                }
            });
        });

        return () => mm.revert();
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-final-home-gradient">

            {/* ── Linha desktop (centro) ── */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 z-30 -translate-x-1/2">
                <div className="progress-line absolute top-0 left-0 w-full bg-blue-600 h-0" />
                <div
                    ref={logoRef}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-40 flex items-center justify-center"
                    style={{ top: '0%' }}
                >
                    <Image src="/images/ZATAS_LOGO.png" alt={tHome("logoAlt")} width={48} height={48} className="object-contain" />
                </div>
            </div>

            {/* ── Linha mobile (esquerda) ── */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-[1px] bg-gray-300 z-30">
                <div className="progress-line-mobile absolute top-0 left-0 w-full bg-blue-600 h-0" />
                <div
                    ref={logoMobileRef}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-40 flex items-center justify-center"
                    style={{ top: '0%' }}
                >
                    <Image src="/images/ZATAS_LOGO.png" alt={tHome("logoAlt")} width={32} height={32} className="object-contain" />
                </div>
            </div>

            <div className="flex w-full">

                {/* Coluna esquerda: diamante — hidden no mobile */}
                <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center overflow-hidden">
                    <div className="absolute inset-y-0 flex items-center justify-center z-0 w-full select-none opacity-20">
                        <div className="relative w-full h-full max-w-[200px]">
                            <Image
                                src="/images/SEU_SUCESSO.png"
                                alt={tHome("seuSucessoAlt")}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div
                        ref={diamondRef}
                        className="relative z-10 w-72 h-72 overflow-hidden shadow-2xl border-4 border-white bg-gray-100"
                        style={{ transform: 'rotate(45deg)', borderRadius: '40px' }}
                    >
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{ transform: 'rotate(-45deg) scale(1.6)' }}
                        >
                            <Image
                                src="/images/processo-trabalho.jpg"
                                alt={tHome("processWorkAlt")}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Coluna direita: texto */}
                <div className="w-full md:w-1/2 flex flex-col pl-16 md:pl-24 pr-8 md:pr-12 pt-[10vh]">
                    {HOME_WORK_STEPS.map((step, index) => (
                        <div
                            key={step.id}
                            className={`step-text-${index} min-h-[80vh] flex flex-col justify-center`}
                        >
                            <h3 className={`text-2xl md:text-4xl text-gray-900 mb-6 leading-tight uppercase ${montserrat.className}`}>
                                <span className="mb-2">0{index + 1}. </span>{t(`steps.${step.id}.title`)}
                            </h3>
                            <p className={`text-base md:text-lg text-gray-400 mb-8 max-w-md leading-relaxed ${montserrat.className}`}>
                                {t(`steps.${step.id}.description`)}
                            </p>
                            <ul className="space-y-4">
                                {(t.raw(`steps.${step.id}.items`) as string[]).map((item, i) => (
                                    <li key={i} className={`flex items-center text-gray-400 font-medium ${montserrat.className}`}>
                                        <span className="w-2 h-2 bg-dark-gray rotate-45 mr-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="h-[20vh]" />
                </div>
            </div>
        </section>
    );
}
