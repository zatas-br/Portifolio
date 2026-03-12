"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#ECEFF1] pt-10 pb-0">
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
                  placeholder="Seu nome"
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
                  placeholder="Como podemos te ajudar?"
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
                Conte-nos sobre seu projeto - seja um design, marketing, aplicação ou outro
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/speed.png" alt="Rápido" width={24} height={24} />
                  <h4 className="font-semibold text-lg">Resposta rápida</h4>
                </div>
                <p className="text-blue-100/70 text-xs leading-relaxed max-w-[250px]">
                  Nossa equipe responde em pouco tempo para tirar suas dúvidas.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/no_money.png" alt="Grátis" width={24} height={24} />
                  <h4 className="font-semibold text-lg">Não custa nada</h4>
                </div>
                <p className="text-blue-100/70 text-xs leading-relaxed max-w-[250px]">
                  Entrar em contato é totalmente gratuito. Peça um orçamento sem compromisso.
                </p>
              </div>
            </div>

            <div className="flex flex-row w-full">

              <div className="bg-[#f3f4f6] rounded-[16px] flex-shrink-0 flex items-center justify-center shadow-lg w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]">
                <div className="bg-[#1E1E1E] w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-[12px] flex items-center justify-center">
                  <Image
                    src="/images/identidade_visual/icon-zatas-white.svg"
                    alt="Zatas Logo"
                    width={82}
                    height={82}
                    className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-[82px] md:h-[82px]"
                  />
                </div>
              </div>

              <div className="bg-[#f3f4f6] rounded-[16px] flex flex-col justify-center gap-2 px-3 sm:px-5 py-3 sm:py-4 flex-1 shadow-lg min-w-0">
                <p className="text-gray-900 font-bold text-sm sm:text-base md:text-lg leading-tight">
                  Outras redes de contato
                </p>
                <div className="flex gap-1 sm:gap-2 flex-nowrap">
                  <SocialButton src="/images/icons_midia/whatsapp.png"  alt="WhatsApp"  href="https://wa.me/5516994418460" />
                  <SocialButton src="/images/icons_midia/email.png"     alt="Email"     href="mailto:contato@zatas.com.br" />
                  <SocialButton src="/images/icons_midia/instagram.png" alt="Instagram" href="https://www.instagram.com/zatas.tech" />
                  <SocialButton src="/images/icons_midia/linkedin.png"  alt="LinkedIn"  href="https://www.linkedin.com/company/zatas/about" />
                  <SocialButton src="/images/icons_midia/linktree.png"  alt="Linktree"  href="https://linktr.ee/zatas" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function SocialButton({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex-1">
      <div className="h-9 sm:h-11 md:h-12 w-full bg-white rounded-[10px] sm:rounded-[14px] flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <Image
          src={src}
          alt={alt}
          width={20}
          height={20}
          className="opacity-80 group-hover:opacity-100 transition-opacity sm:w-6 sm:h-6"
        />
      </div>
    </a>
  );
}