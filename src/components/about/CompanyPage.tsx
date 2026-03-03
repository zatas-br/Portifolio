'use client' 
 
import Link from 'next/link'; 
import { ABOUT_PAGE_DATA } from '@/src/data/about'; 
 
/** 
 * Interface que define a estrutura de um item de serviço. 
 */ 
interface ServiceItem { 
  description: string; 
  tags: string[]; 
  image: string; 
  imageAlt: string; 
} 
 
/** 
 * Interface de configuração principal para a página Sobre. 
 */ 
interface AboutPageConfig { 
  videoUrl: string | null; 
  videoLabel: string; 
  contactButtonLabel: string; 
  contactHref: string; 
  strategicTeamTitle: string; 
  strategicTeamDescription1: string; 
  strategicTeamDescription2: string; 
  commitmentTitle: string; 
  commitmentItems: string[]; 
  commitmentFooter: string; 
  servicesTitle: string; 
  services: ServiceItem[]; 
  othersButtonLabel: string; 
  othersButtonHref: string; 
  historyTitle: string; 
  historyParagraphs: string[]; 
  historyButtonLabel: string; 
  historyButtonHref: string; 
  historyImage: string; 
  historyImageAlt: string; 
} 
 
/** 
 * Componente Tag: Exibe uma etiqueta estilizada com fonte serifada e itálica. 
 */ 
function Tag({ label }: { label: string }) { 
  return ( 
    <span className="font-serif italic font-normal text-[clamp(13px,1.1vw,20px)] text-[#0D47A1] border-[1.2px] border-[#0D47A1] rounded-full px-5 py-0 inline-flex items-center leading-[1.5] whitespace-nowrap"> 
      {/*  
          - 'text-[clamp(13px,1.1vw,20px)]': Tamanho da fonte responsivo. 
          - 'text-[#0D47A1]': Cor do texto (Azul). 
          - 'border-[#0D47A1]': Cor da borda. 
      */} 
      {label} 
    </span> 
  ); 
} 
 
export default function AboutPage({ config }: { config?: Partial<AboutPageConfig> }) { 
  const cfg: AboutPageConfig = { ...ABOUT_PAGE_DATA, ...config }; 
 
  return ( 
    /* 'bg-[#ECEFF1]': Cor de fundo da página (Cinza muito claro) */ 
    <div className="bg-[#ECEFF1] font-sans min-h-screen overflow-x-hidden"> 
 
      {/* [1] SEÇÃO HERO (Imagem Inicial)  
           
          V V V V V V V V V V V V V V V V V V V V V V V V 
          é bem aqui: Para movimentar a imagem para CIMA ou para BAIXO. 
          - '-translate-y-[80px]': Aumente esse valor (ex: 120px) para SUBIR mais a imagem. 
          - Diminua (ex: 40px) para ela descer. 
          - 'overflow-hidden': Importante para não mostrar a sobra que sair da tela. 
          A A A A A A A A A A A A A A A A A A A A A A A A 
      */} 
      <section className="relative w-full bg-[#B8D4E8] overflow-hidden"> 
        <img 
          src="/images/about/oque-ser-zatas.png" 
          alt="O que é ser Zatas?" 
          className="w-full h-auto block max-h-[calc(100vh-80px)] object-cover transform -translate-y-111px]" 
        /> 
      </section> 
 
      {/* [2] SEÇÃO CARD SOBRE (Bloco Escuro com Card Cinza) */} 
      <section className="bg-[#263238] px-[5.5vw] pt-[4vw] pb-[5.5vw]"> 
        {/* 'bg-[#263238]': Cor de fundo escura da seção. */} 
         
        {/*  
            - 'max-w-[1421px]': Largura máxima do card. 
            - 'bg-[#F0F0F0]': Cor de fundo do card (Cinza claro). 
            - 'rounded-[clamp(16px,1.5vw,24px)]': Arredondamento das bordas. 
            - 'grid-cols-1 md:grid-cols-[1fr_auto]': 1 coluna no mobile, 2 colunas no desktop (texto e vídeo). 
        */} 
        <div className="max-w-[1421px] mx-auto bg-[#F0F0F0] rounded-[clamp(16px,1.5vw,24px)] overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto] shadow-[0_24px_64px_rgba(0,0,0,0.3)] min-h-[clamp(450px,55vw,850px)]"> 
 
          <div className="relative px-[clamp(24px,3.5vw,56px)] pt-[55px] pb-[40px] flex flex-col justify-between overflow-hidden bg-[#F0F0F0]"> 
             
            <div className="relative z-[2]"> 
              <div className="inline-block"> 
                {/*  
                    - 'text-[clamp(32px,4vw,52px)]': Tamanho do título. 
                    - 'text-[#263238]': Cor do título (Escuro). 
                */} 
                {/*  
                    - 'text-[clamp(32px,4vw,52px)]': Tamanho do título. 
                    - 'text-[#263238]': Cor do título (Escuro). 
                    - 'whitespace-nowrap': Evita quebra de linha automática. Se o texto for muito longo, remova essa classe ou reduza o número de caracteres para evitar que o texto saia do card. 
                */} 
                <h2 className="font-bold text-[clamp(32px,4vw,52px)] text-[#263238] leading-[1.1] uppercase mb-[clamp(15px,1.5vw,25px)] whitespace-nowrap"> 
                  SOBRE A ZATAS.<br /> 
                  IDEIAS GANHAM FORMA,<br /> 
                  ESTRATÉGIAS GANHAM FORÇA 
                </h2> 
 
                {/*  
                    - 'text-[clamp(20px,1.05vw,15px)]': Tamanho da descrição. 
                    - Tente manter este texto com no máximo 150-200 caracteres para manter o equilíbrio visual do card. 
                */} 
                <p className="font-light text-[clamp(20px,1.05vw,15px)] text-[#263238] leading-[1.35] w-full m-0"> 
                  Somos uma empresa que une design, desenvolvimento e marketing para<br /> 
                  transformar visão em posicionamento, presença e crescimento real. 
                </p> 
              </div> 
            </div> 
 
            {/* Imagem do pássaro de fundo no card */} 
            <div className="absolute bottom-0 left-[16%] w-[136%] pointer-events-none select-none z-[1] drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)]"> 
              <img 
                src="/images/about/fundo-passaro-card-sobre.png" 
                alt="" 
                aria-hidden 
                className="w-full h-auto block opacity-100" 
              /> 
            </div> 
 
            <div className="relative z-[2]"> 
              {/*  
                  - 'bg-[#263238]': Cor de fundo do botão. 
                  - 'text-white': Cor do texto do botão. 
              */} 
              <Link href={cfg.contactHref} className="font-normal text-[clamp(18px,1vw,22px)] bg-[#263238] text-white px-12 py-5 rounded-full inline-flex items-center no-underline hover:brightness-125 transition-all shadow-lg"> 
                {cfg.contactButtonLabel} 
              </Link> 
            </div> 
          </div> 
 
          {/* Lado do Vídeo/Placeholder */} 
          <div className="bg-[#B8D4E8] flex items-center justify-center self-stretch h-full aspect-[9/16] min-h-[400px] md:min-h-0 overflow-hidden"> 
            {/* 'bg-[#B8D4E8]': Cor de fundo da área do vídeo. */} 
            {cfg.videoUrl ? ( 
              <video src={cfg.videoUrl} controls className="w-full h-full object-cover" /> 
            ) : ( 
              <div className="flex flex-col items-center justify-center gap-[clamp(10px,1vw,16px)] w-full h-full p-6"> 
                <div className="flex items-center gap-[clamp(6px,0.6vw,10px)] flex-nowrap"> 
                  <span className="font-medium text-[clamp(11px,1.1vw,16px)] text-[#263238] whitespace-nowrap"> 
                    {cfg.videoLabel} 
                  </span> 
                  <button className="w-[clamp(32px,2.8vw,48px)] h-[clamp(32px,2.8vw,48px)] bg-white/85 rounded-full border-none flex items-center justify-center cursor-pointer flex-shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.15)] pl-0.5" aria-label="Play"> 
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none"> 
                      <path d="M1 1L13 8L1 15V1Z" fill="#263238" /> 
                    </svg> 
                  </button> 
                </div> 
              </div> 
            )} 
          </div> 
        </div> 
      </section> 
 
      {/* [3] SEÇÃO DE CONTEÚDO (Textos e Serviços) */} 
      <section className="bg-[#ECEFF1] pt-[2.5vw] pb-[4vw] pl-[12.7vw] pr-[12vw] max-[900px]:px-6 max-[900px]:pt-10 max-[900px]:pb-8"> 
        {/* 'pl-[12.7vw]': Margem esquerda larga para alinhar os textos. */} 
         
        {/* 'text-[clamp(22px,3vw,44px)]': Tamanho dos títulos de seção. */} 
        {/*  
            - 'text-[clamp(22px,3vw,44px)]': Tamanho dos títulos de seção. 
            - 'max-w-[42vw]': Largura máxima para forçar a quebra de linha. 
        */} 
        <h2 className="font-bold text-[clamp(22px,3vw,44px)] text-[#263238] uppercase leading-[1.15] mb-[clamp(50px,1.8vw,28px)] max-w-[55vw] max-[900px]:max-w-full"> 
          {cfg.strategicTeamTitle} 
        </h2> 
        {/* 'max-w-[41.7vw]': Limita a largura dos parágrafos para melhor leitura. */} 
        <div className="flex flex-col gap-[clamp(8px,1vw,14px)] max-w-[48.7vw] max-[900px]:max-w-full"> 
          <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] m-0"> 
            {cfg.strategicTeamDescription1} 
          </p> 
          <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] m-0"> 
            {cfg.strategicTeamDescription2} 
          </p> 
        </div> 
 
        <h2 className="font-bold text-[clamp(22px,3vw,44px)] text-[#263238] uppercase leading-[1.15] mb-[clamp(16px,1.8vw,28px)] mt-[clamp(40px,4.5vw,72px)]"> 
          {cfg.commitmentTitle} 
        </h2> 
        <div className="flex flex-col gap-[clamp(0px,0vw,6px)] max-w-[48.7vw] max-[900px]:max-w-full"> 
          {cfg.commitmentItems.map((item, i) => ( 
            <p key={i} className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] m-0 mb-[2px]"> 
              {item} 
            </p> 
          ))} 
          <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.75] m-0 mt-[14px]"> 
            {cfg.commitmentFooter} 
          </p> 
        </div> 
 
        <h2 className="font-bold text-[clamp(22px,3vw,44px)] text-[#263238] uppercase leading-[1.15] mb-[clamp(90px,1.8vw,28px)] mt-[clamp(40px,4.5vw,72px)]"> 
          {cfg.servicesTitle} 
        </h2> 
 
        <div className="flex flex-col gap-[clamp(40px,5.2vw,75px)] mt-[clamp(28px,3vw,48px)]"> 
          {/* 'gap-[clamp(40px,5.2vw,75px)]': Espaço entre cada linha de serviço. */} 
          {cfg.services.map((service, index) => ( 
            <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_clamp(72px,10vw,144px)_1fr] items-start"> 
              {/* 'md:grid-cols-[1fr_clamp(72px,10vw,144px)_1fr]': Layout de 3 colunas (texto, espaço vazio, imagem). */} 
               
              <div className="col-start-1 aspect-[666/430] bg-transparent flex flex-col justify-start items-start overflow-visible"> 
                <div className="p-0 mt-0"> 
                  <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] mb-[clamp(10px,1vw,16px)] max-w-[26.7vw] max-[900px]:max-w-full"> 
                    {service.description} 
                  </p> 
                  <div className="flex flex-wrap gap-2"> 
                    {service.tags.map((tag) => ( 
                      <Tag key={tag} label={tag} /> 
                    ))} 
                  </div> 
                </div> 
              </div> 
              <div className="md:col-start-3 aspect-[666/430] overflow-hidden rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.22)] max-[900px]:col-start-1"> 
                {/* 'aspect-[666/430]': Proporção da imagem. */} 
                <img 
                  src={service.image} 
                  alt={service.imageAlt} 
                  className="w-full h-full object-cover block" 
                /> 
              </div> 
            </div> 
          ))} 
        </div> 
 
        {/* Botão Outros Trabalhos */} 
        <Link 
          href={cfg.othersButtonHref} 
          className="font-normal text-[clamp(24px,1.1vw,16px)] text-white bg-[#263238] border-2 border-[#263238] px-[clamp(43px,2.2vw,36px)] py-[clamp(26px,0.9vw,14px)] rounded-full inline-flex items-center no-underline mt-[clamp(32px,3.5vw,56px)]"
        > 
          {cfg.othersButtonLabel} 
        </Link>
      </section> 
 
      {/* [4] SEÇÃO NOSSA HISTÓRIA (Card Escuro com Imagem e Texto) */} 
      <section className="bg-[#ECEFF1] px-[5.5vw] pb-[10vw] pt-[3vw] max-[900px]:px-6 max-[900px]:pb-12"> 
        <div className="w-full max-w-[1580px] mx-auto aspect-[1433/546] bg-[#263238] rounded-[clamp(16px,1.5vw,24px)] overflow-hidden grid grid-cols-1 md:grid-cols-[50%_50%] shadow-[0_16px_48px_rgba(0,0,0,0.2)] max-[900px]:aspect-auto"> 
          {/*  
              - 'bg-[#263238]': Cor de fundo do card história. 
              - 'grid-cols-[51%_49%]': Define que a imagem ocupa 51% e o texto 49% da largura. 
          */} 
          <div className="w-full h-full max-[900px]:h-[220px]"> 
            <img src={cfg.historyImage} alt={cfg.historyImageAlt} className="w-full h-full object-cover block" /> 
          </div> 
          <div className="px-[clamp(24px,3vw,48px)] py-[clamp(24px,3.5vw,56px)] flex flex-col justify-between h-full box-border text-white"> 
            {/* Título da História. Recomendado: Títulos curtos (até 2-3 palavras). */} 
            <h2 className="font-bold text-[clamp(22px,2.8vw,52px)] uppercase leading-[1.15] mb-[clamp(38px,1.3vw,20px)]"> 
              {cfg.historyTitle} 
            </h2> 
            {/*  
                - 'flex-1': Faz os parágrafos ocuparem o espaço disponível. 
                - 'gap-[clamp(6px,0.7vw,10px)]': Espaço entre parágrafos. 
            */} 
            <div className="flex flex-col gap-[clamp(16px,0.7vw,10px)] flex-1"> 
              {cfg.historyParagraphs.map((p, i) => ( 
                <p key={i} className="font-light text-[clamp(22px,1.3vw,18px)] leading-[1.3] m-0">{p}</p> 
              ))} 
            </div> 
            <div className="flex justify-end mt-[clamp(12px,1.2vw,20px)]"> 
              {/* Botão dentro do card de história */} 
              <Link href={cfg.historyButtonHref} className="font-normal text-[clamp(16px,1vw,18px)] bg-[#ffffff] text-[#263238] px-[clamp(16px,1.6vw,26px)] py-[clamp(8px,0.75vw,12px)] rounded-full"> 
                {/*  
                    - 'bg-[#ECEFF1]': Cor de fundo do botão (Cinza claro). 
                    - 'text-[#263238]': Cor do texto do botão (Escuro). 
                */} 
                {cfg.historyButtonLabel} 
              </Link> 
            </div> 
          </div> 
        </div> 
      </section> 
 
    </div> 
  ); 
}