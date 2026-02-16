"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Montserrat } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const steps = [
    {
        id: "01",
        title: "DESCOBERTA",
        description: "Diagnosticamos a situação atual, objetivos e entendemos a fundo o cenário do projeto.",
        image: "/images/img1.jpg", // Substitua pelos seus caminhos reais
        items: ["Diagnóstico de marca", "Entendimento de público", "Análise de mercado"]
    },
    {
        id: "02",
        title: "ESTRATÉGIA",
        description: "Transformamos os insights em um plano tático focado em resultados reais.",
        image: "/images/img2.jpg",
        items: ["Definição de canais", "Arquitetura da solução", "Métricas de sucesso"]
    },
    {
        id: "03",
        title: "PROTOTIPAGEM",
        description: "Criação visual, design de interface e fluxos de navegação.",
        image: "/images/img3.jpg",
        items: ["Wireframes", "UI Design", "Prototipagem interativa"]
    },
    {
        id: "04",
        title: "DESENVOLVIMENTO",
        description: "Codificação robusta e escalável seguindo as melhores práticas.",
        image: "/images/img4.jpg",
        items: ["Front-end", "Back-end", "Integração de APIs"]
    },
    {
        id: "05",
        title: "ENTREGA",
        description: "Lançamento oficial, monitoramento e evolução contínua.",
        image: "/images/img5.jpg",
        items: ["QA & Testes", "Deploy", "Treinamento"]
    },
];

export default function VerticalTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const diamondRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
        steps.forEach((_, index) => {
            ScrollTrigger.create({
                trigger: `.step-text-${index}`,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(`.step-image`, { opacity: 0, duration: 0.3 });
                        gsap.to(`.step-image-${index}`, { opacity: 1, duration: 0.3 });
                    }
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-final-home-gradient">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2 z-30">
                <div className="progress-line absolute top-0 left-0 w-full bg-blue-600 h-0" />
                <div
                    ref={logoRef}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-40 flex items-center justify-center"
                    style={{ top: '0%' }}
                >
                    <Image
                        src="/images/ZATAS_LOGO.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-y-0 flex items-center justify-center z-0 w-full select-none opacity-20">
                        <div className="relative w-full h-full max-w-[200px]">
                            <Image
                                src="/images/SEU_SUCESSO.png"
                                alt="Seu Sucesso"
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
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`step-image step-image-${index} absolute inset-0 w-full h-full`}
                                style={{
                                    opacity: index === 0 ? 1 : 0,
                                    transform: 'rotate(-45deg) scale(1.6)'
                                }}
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 flex flex-col pl-24 pr-12 pt-[10vh]">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`step-text-${index} min-h-[80vh] flex flex-col justify-center`}
                        >
                            
                            <h3 className={`text-4xl text-gray-900 mb-6 leading-tight uppercase ${montserrat.className}`}>
                                <span className="mb-2">0{index + 1}. </span>{step.title}
                            </h3>
                            <p className={`text-lg text-gray-400 mb-8 max-w-md leading-relaxed ${montserrat.className}`}>
                                {step.description}
                            </p>
                            <ul className="space-y-4">
                                {step.items.map((item, i) => (
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