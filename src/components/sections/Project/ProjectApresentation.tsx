"use client";

import { Montserrat, Lora } from "next/font/google";
import MobilePreviewIphone14 from "../../ui/Mockup/Iphone14";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"]
});

const ProjectApresentationSection = () => {

  return (
    <section className="flex justify-center w-full h-[100vh] w-full flex-wrap text-black p-8 md:px-16 gap-16">

      <div className="w-[40vw] h-full flex justify-center items-center">
        <MobilePreviewIphone14 >
          <iframe src="zatas.com.br" />
        </MobilePreviewIphone14>
      </div>

      <div className="w-[40vw] p-8 rounded-lg border border-gray-300 flex flex-col gap-8">
        <h1 className={`font-bold ${montserrat.className} text-3xl`}>Sobre o Projeto</h1>
        <p className={`font-normal ${montserrat.className} text-[14px]`}>ByKatino é uma marca de moda fitness que une movimento, elegância e bem-estar.  A identidade visual foi inspirada no trevo de quatro folhas, símbolo de equilíbrio, energia e positividade, traduzindo um estilo de vida ativo com estética sofisticada.A combinação de tipografia expressiva e uma paleta intensa e refinada constrói uma marca contemporânea, versátil e marcante, pensada para aplicações digitais e físicas.</p>
        <p className={`font-normal ${lora.className} text-[16px] text-text-blue`}>Tecnologias usadas</p>
        <div className="bg-blue-100 p-4 rounded-lg flex flex-col gap-4 h-[40vh] overflow-y-auto">
          <p>tecnologias</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectApresentationSection;