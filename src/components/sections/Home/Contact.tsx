"use client";

import Image from "next/image";

const socialLinks = [
  {
    src: "/images/icons_midia/whatsapp.png",
    alt: "WhatsApp",
    href: "https://wa.me/5516994418460",
    label: "WhatsApp"
  },
  {
    src: "/images/icons_midia/email.png",
    alt: "Email",
    href: "mailto:contato@zatas.com.br",
    label: "E-mail"
  },
  {
    src: "/images/icons_midia/instagram.png",
    alt: "Instagram",
    href: "https://www.instagram.com/zatas.tech",
    label: "Instagram"
  },
  {
    src: "/images/icons_midia/linkedin.png",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/zatas/about",
    label: "LinkedIn"
  },
  {
    src: "/images/icons_midia/linktree.png",
    alt: "Linktree",
    href: "https://linktr.ee/zatas",
    label: "Linktree"
  },
];

export default function ContactSection() {
  return (
    <section className="relative w-full bg-white pt-10 pb-0">
      <div className="bg-[#1e40af] rounded-tl-[80px] w-full px-4 py-20 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="bg-[#f3f4f6] rounded-[32px] p-8 md:p-10 shadow-2xl">
            <h3 className="text-xl text-gray-700 font-medium mb-6">
              Tem um projeto em mente?
            </h3>
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">Seu nome*</label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-[#e5e7eb] border border-transparent focus:bg-white focus:border-blue-500 rounded-xl px-5 py-3 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">Seu e-mail*</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-[#e5e7eb] border border-transparent focus:bg-white focus:border-blue-500 rounded-xl px-5 py-3 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className="w-full bg-[#e5e7eb] border border-transparent focus:bg-white focus:border-blue-500 rounded-xl px-5 py-3 outline-none transition-all placeholder:text-gray-400 text-gray-800 resize-none"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#1f2937] hover:bg-black text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg mt-2"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="text-white space-y-10 mt-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Vamos Conversar</h2>
              <div className="h-px w-full bg-blue-400/30 mb-4" />
              <p className="text-blue-100/90 text-sm md:text-base">
                Conte-nos sobre seu projeto — seja design, marketing, aplicação ou outro desafio digital.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/speed.png" alt="Resposta rápida" width={24} height={24} />
                  <h4 className="font-semibold text-lg">Resposta rápida</h4>
                </div>
                <p className="text-blue-100/70 text-xs leading-relaxed max-w-[250px]">
                  Nossa equipe responde em pouco tempo para tirar suas dúvidas.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/no_money.png" alt="Sem custo" width={24} height={24} />
                  <h4 className="font-semibold text-lg">Não custa nada</h4>
                </div>
                <p className="text-blue-100/70 text-xs leading-relaxed max-w-[250px]">
                  Entrar em contato é totalmente gratuito. Peça um orçamento sem compromisso.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 items-start">
              <div className="bg-[#f3f4f6] rounded-[12px] p-1 flex items-center justify-center shadow-lg">
                <div className="bg-[#111827] w-20 h-20 rounded-[10px] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Image
                    src="/images/identidade_visual/icon-zatas-white.svg"
                    alt="Zatas Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-[#f3f4f6] rounded-[12px] p-4 flex flex-col gap-2 shadow-lg">
                <p className="text-gray-900 font-bold text-sm">
                  Outras redes de contato
                </p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.alt}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="group flex flex-col items-center gap-1"
                    >
                      <div className="w-14 h-10 bg-white rounded-[20px] flex items-center justify-center shadow-xl/20 hover:shadow-md hover:bg-white hover:-translate-y-1 transition-all duration-300">
                        <Image
                          src={social.src}
                          alt={social.alt}
                          width={22}
                          height={22}
                          className="opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-gray-600 text-[10px] font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}