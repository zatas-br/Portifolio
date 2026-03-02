'use client'

import Link from 'next/link';
import { ABOUT_PAGE_DATA } from '@/src/data/about';

/**
 * Interface que define a estrutura de um item de serviço.
 * Cada serviço tem uma descrição, tags, imagem e texto alternativo.
 */
interface ServiceItem {
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

/**
 * Interface de configuração principal para a página Sobre.
 * Permite personalizar textos, links, vídeos e a lista de serviços.
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
 * Usado principalmente para destacar tecnologias ou áreas de atuação nos serviços.
 */
function Tag({ label }: { label: string }) {
  return (
    <span className="about-tag">
      {label}
      <style jsx>{`
        .about-tag {
          /* Para mudar a fonte das tags, altere font-family abaixo */
          font-family: var(--font-lora), serif;
          font-style: italic;
          font-weight: 400;
          /* Tamanho da fonte das tags (mínimo 13px, ideal 1.1vw, máximo 20px) */
          font-size: clamp(13px, 1.1vw, 20px);
          /* Cor do texto e da borda das tags */
          color: #0D47A1;
          border: 1.5px solid #0D47A1;
          border-radius: 9999px; /* Mantém o formato arredondado/pílula */
          padding: 4px 16px;
          display: inline-flex;
          align-items: center;
          line-height: 1.5;
          white-space: nowrap;
        }
      `}</style>
    </span>
  );
}

/**
 * COMPONENTE PRINCIPAL: AboutPage
 * Esta página apresenta a Zatas, sua visão, compromissos, serviços e história.
 * Os textos e dados são carregados de '@src/data/about', facilitando a manutenção.
 */
export default function AboutPage({ config }: { config?: Partial<AboutPageConfig> }) {
  // Combina a configuração padrão (vinda do arquivo de dados) com possíveis overrides passados via props.
  const cfg: AboutPageConfig = { ...ABOUT_PAGE_DATA, ...config };

  return (
    /*
       INÍCIO DA PÁGINA SOBRE (COMPANY PAGE)
       O layout é construído em seções. Os estilos (CSS) estão no final deste arquivo.
       Os textos são puxados de 'src/data/about.ts'.
    */
    <div className="about-root">

      {/*
          [1] SEÇÃO HERO (Banner Principal do topo)
          Exibe a imagem de impacto inicial.
      */}
      <section className="about-hero">
        <img
          src="/images/about/oque-ser-zatas.png"
          alt="O que é ser Zatas?"
          className="about-hero-img"
        />
      </section>

      {/*
          [2] SEÇÃO CARD SOBRE (Bloco com fundo escuro e card cinza)
          Contém a missão/visão da empresa e o vídeo institucional.
      */}
      <section className="about-card-section">
        <div className="about-card">

          {/* Lado Esquerdo: Textos, Pássaro Decorativo e Botão de Contato */}
          <div className="about-card-left">
            <div className="about-card-text">
              <div className="about-card-title-wrap">
                {/* Títulos principais da seção Sobre */}
                <h2 className="about-card-title">
                  SOBRE A ZATAS.<br />
                  IDEIAS GANHAM FORMA,<br />
                  ESTRATÉGIAS GANHAM FORÇA
                </h2>
                <p className="about-card-desc">
                  Somos uma empresa que une design, desenvolvimento e marketing para
                  transformar visão em posicionamento, presença e crescimento real.
                </p>
              </div>
            </div>

            {/* Imagem decorativa do pássaro Zatas */}
            <div className="about-card-bird">
              <img
                src="/images/about/fundo-passaro-card-sobre.png"
                alt=""
                aria-hidden
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Botão de Chamada para Ação (Call to Action) */}
            <div className="about-card-btn-wrap">
              <Link href={cfg.contactHref} className="about-card-btn">
                {cfg.contactButtonLabel}
              </Link>
            </div>
          </div>

          {/* Lado Direito: Área de Vídeo ou Placeholder */}
          <div className="about-card-right">
            {cfg.videoUrl ? (
              <video src={cfg.videoUrl} controls className="about-video" />
            ) : (
              <div className="about-video-placeholder">
                <div className="about-video-inline">
                  <span className="about-video-text">{cfg.videoLabel}</span>
                  <button className="about-play-btn" aria-label="Play">
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

      {/*
          [3] SEÇÃO DE CONTEÚDO (Time, Compromisso e Serviços)
          Área central da página com fundo claro.
      */}
      <section className="about-content-section">

        {/* Bloco: O Time Estratégico (Título e parágrafos descritivos) */}
        <h2 className="about-section-title about-strategic-title">
          {cfg.strategicTeamTitle}
        </h2>
        <div className="about-text-block">
          {/* Parágrafos de texto. Estilos em .about-body-text */}
          <p className="about-body-text">{cfg.strategicTeamDescription1}</p>
          <p className="about-body-text">{cfg.strategicTeamDescription2}</p>
        </div>

        {/* Bloco: Nosso Compromisso (Título e lista de itens) */}
        <h2 className="about-section-title about-section-gap-top">
          {cfg.commitmentTitle}
        </h2>
        <div className="about-text-block">
          {/* Mapeia e exibe os itens de compromisso vindos do arquivo de dados */}
          {cfg.commitmentItems.map((item, i) => (
            <p key={i} className="about-body-text" style={{ marginBottom: '2px' }}>{item}</p>
          ))}
          {/* Texto de rodapé do compromisso */}
          <p className="about-body-text" style={{ marginTop: '14px' }}>{cfg.commitmentFooter}</p>
        </div>

        {/* Serviços em Destaque: Lista mapeada de serviços */}
        <h2 className="about-section-title about-section-gap-top">
          {cfg.servicesTitle}
        </h2>

        <div className="about-services-list">
          {cfg.services.map((service, index) => (
            <div key={index} className="about-service-row">
              {/* Card de texto do serviço: Descrição e Tags */}
              <div className="about-service-card">
                <div className="about-service-card-inner">
                  <p className="about-service-desc">{service.description}</p>
                  <div className="about-service-tags">
                    {service.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Imagem representativa do serviço */}
              <div className="about-service-img-wrap">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="about-service-img"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Link para visualizar outros trabalhos */}
        <Link href={cfg.othersButtonHref} className="about-others-btn">
          {cfg.othersButtonLabel}
        </Link>

      </section>

      {/*
          [4] SEÇÃO NOSSA HISTÓRIA (Bloco final com imagem lateral)
          Apresenta a trajetória da Zatas com fundo azul escuro.
      */}
      <section className="about-history-section" style={{ paddingTop: '3vw' }}>
        <div className="about-history-card">
          {/* Imagem lateral da história */}
          <div className="about-history-img-wrap">
            <img
              src={cfg.historyImage}
              alt={cfg.historyImageAlt}
              className="about-history-img"
            />
          </div>
          {/* Bloco de texto com título, parágrafos e botão */}
          <div className="about-history-text">
            <h2 className="about-history-title">{cfg.historyTitle}</h2>
            <div className="about-history-paras">
              {cfg.historyParagraphs.map((p, i) => (
                <p key={i} className="about-history-para">{p}</p>
              ))}
            </div>
            <div className="about-history-btn-wrap">
              <Link href={cfg.historyButtonHref} className="about-history-btn">
                {cfg.historyButtonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*
          ESTILIZAÇÃO CSS (Styled JSX)
          Define todo o visual da página de forma responsiva.
      */}
      <style jsx global>{`

        /* ── Estilos Raiz ── */
        /* Aqui você define a cor de fundo de toda a página e a fonte principal. */
        .about-root {
          background-color: #ECEFF1; /* Cor de fundo global (Cinza azulado claro) */
          font-family: var(--font-montserrat), sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Hero (Banner Principal) ── */
        .about-hero {
          position: relative;
          width: 100%;
        }
        .about-hero-img {
          width: 100%;
          height: auto;
          display: block;
          max-height: calc(100vh - 80px);
          object-fit: cover;
          object-position: top center;
        }

        /* ── Seção Card Sobre ── */
        /* Configurações do bloco escuro que contém o card cinza. */
        .about-card-section {
          background-color: #263238; /* Azul marinho escuro de fundo */
          padding: 4vw 5.5vw 5.5vw;
        }
        /* O card cinza claro no centro da seção anterior. */
        .about-card {
          max-width: 1421px;
          margin: 0 auto;
          background-color: #F0F0F0; /* Cor do card cinza claro */
          border-radius: clamp(16px, 1.5vw, 24px); /* Arredondamento das bordas */
          overflow: hidden;
          display: grid;
          grid-template-columns: 80% 20%;
          box-shadow: 0 24px 64px rgba(0,0,0,0.3); /* Sombra do card */
          min-height: clamp(220px, 28vw, 420px);
        }
        .about-card-left {
          position: relative;
          padding: clamp(28px, 3.8vw, 60px) clamp(24px, 3.5vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: #F0F0F0;
        }
        .about-card-text {
          position: relative;
          z-index: 2;
        }
        .about-card-title-wrap {
          display: inline-block;
        }
        /* Título do Card: "SOBRE A ZATAS..." */
        .about-card-title {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          font-size: clamp(20px, 2.5vw, 38px); /* Tamanho de fonte responsivo */
          color: #263238; /* Cor do texto (Azul escuro) */
          line-height: 1.15;
          text-transform: uppercase;
          margin: 0 0 clamp(14px, 1.5vw, 20px) 0;
          white-space: nowrap;
        }
        /* Descrição logo abaixo do título no card. */
        .about-card-desc {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          font-size: clamp(12px, 1.05vw, 15px);
          color: #263238;
          line-height: 1.65;
          width: 100%;
          margin: 0;
        }
        .about-card-bird {
          position: absolute;
          bottom: 0;
          left: 25%;
          width: 75%;
          pointer-events: none;
          user-select: none;
          z-index: 1;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.08));
        }
        .about-card-btn-wrap {
          position: relative;
          z-index: 2;
        }
        .about-card-btn {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 400;
          font-size: clamp(14px, 1.15vw, 17px);
          background-color: #263238;
          color: #ffffff;
          padding: clamp(14px, 1.1vw, 18px) clamp(28px, 2.4vw, 40px);
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        .about-card-right {
          background-color: #B8D4E8;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: stretch;
        }
        .about-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-video-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1vw, 16px);
          width: 100%;
          height: 100%;
          padding: 24px;
        }
        .about-video-inline {
          display: flex;
          align-items: center;
          gap: clamp(6px, 0.6vw, 10px);
          flex-wrap: nowrap;
        }
        .about-video-text {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 500;
          font-size: clamp(11px, 1.1vw, 16px);
          color: #263238;
          white-space: nowrap;
        }
        .about-play-btn {
          width: clamp(32px, 2.8vw, 48px);
          height: clamp(32px, 2.8vw, 48px);
          background-color: rgba(255,255,255,0.85);
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          padding-left: 2px;
        }

        /* ── Seção de Conteúdo (Texto e Serviços) ── */
        /* Área branca/cinza claro onde ficam os textos estratégicos e lista de serviços. */
        .about-content-section {
          background-color: #ECEFF1;
          padding: 5.5vw 5vw 4vw 12.7vw; /* Margens internas para alinhar o conteúdo */
        }
        /* Títulos de seção: "TIME ESTRATÉGICO", "COMPROMISSO", "SERVIÇOS" */
        .about-section-title {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          font-size: clamp(22px, 3vw, 44px); /* Tamanho grande e responsivo */
          color: #263238;
          text-transform: uppercase;
          line-height: 1.15;
          margin: 0 0 clamp(16px, 1.8vw, 28px) 0;
          max-width: 42vw;
        }
        .about-strategic-title {
          max-width: 41.7vw;
        }
        .about-section-gap-top {
          margin-top: clamp(40px, 4.5vw, 72px);
        }
        .about-text-block {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1vw, 14px);
          max-width: 41.7vw;
        }
        /* Estilo dos parágrafos de texto comum na seção de conteúdo */
        .about-body-text {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          /* Altere o tamanho da fonte do corpo do texto aqui */
          font-size: clamp(12px, 1.1vw, 16px);
          color: #263238;
          line-height: 1.75; /* Espaçamento entre linhas */
          margin: 0;
        }

        /* ── Serviços ── */
        .about-services-list {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5.2vw, 75px);
          margin-top: clamp(28px, 3vw, 48px);
        }
        .about-service-row {
          display: grid;
          grid-template-columns: 1fr clamp(72px, 10vw, 144px) 1fr;
          align-items: start;
        }
        .about-service-card {
          grid-column: 1;
          aspect-ratio: 666 / 430;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          overflow: visible;
        }
        .about-service-card-inner {
          padding: 0;
          margin-top: 0;
        }
        .about-service-img-wrap {
          grid-column: 3;
          aspect-ratio: 666 / 430;
          overflow: hidden;
          border-radius: 0;
          box-shadow: 0 12px 40px rgba(0,0,0,0.22);
        }
        /* Descrição de cada serviço na lista */
        .about-service-desc {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          /* Altere o tamanho da descrição dos serviços aqui */
          font-size: clamp(12px, 1.4vw, 20px);
          color: #263238;
          line-height: 1.65;
          margin: 0 0 clamp(10px, 1vw, 16px) 0;
        }
        .about-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .about-service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-others-btn {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 400;
          font-size: clamp(13px, 1.1vw, 16px);
          color: #263238;
          border: 2px solid #263238;
          padding: clamp(10px, 0.9vw, 14px) clamp(22px, 2.2vw, 36px);
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          background-color: transparent;
          margin-top: clamp(32px, 3.5vw, 56px);
        }

        /* ── Nossa História ── */
        /* Seção final com fundo azul escuro e imagem lateral. */
        .about-history-section {
          background-color: #ECEFF1;
          padding: 0 5.5vw 6vw 5.5vw;
        }
        .about-history-card {
          width: 100%;
          max-width: 1421px;
          margin: 0 auto;
          aspect-ratio: 1433 / 546;
          background-color: #263238; /* Fundo do card da história */
          border-radius: clamp(16px, 1.5vw, 24px);
          overflow: hidden;
          display: grid;
          grid-template-columns: 51% 49%;
          box-shadow: 0 16px 48px rgba(0,0,0,0.2);
        }
        .about-history-img-wrap {
          width: 100%;
          height: 100%;
        }
        .about-history-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-history-text {
          padding: clamp(24px, 3.5vw, 56px) clamp(24px, 3vw, 48px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          box-sizing: border-box;
        }
        /* Título da seção História: "NOSSA HISTÓRIA" */
        .about-history-title {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          font-size: clamp(20px, 2.8vw, 44px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.15;
          margin: 0 0 clamp(10px, 1.3vw, 20px) 0;
        }
        /* Contêiner dos parágrafos da história */
        .about-history-paras {
          display: flex;
          flex-direction: column;
          gap: clamp(6px, 0.7vw, 10px);
          flex: 1;
        }
        /* Estilo de cada parágrafo de texto na história (fundo escuro) */
        .about-history-para {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          font-size: clamp(11px, 1.3vw, 18px); /* Tamanho do texto da história */
          color: #ffffff;
          line-height: 1.6;
          margin: 0;
        }
        .about-history-btn-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: clamp(12px, 1.2vw, 20px);
        }
        .about-history-btn {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 400;
          font-size: clamp(11px, 1vw, 15px);
          background-color: #ECEFF1;
          color: #263238;
          padding: clamp(8px, 0.75vw, 12px) clamp(16px, 1.6vw, 26px);
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        /* ── Responsividade Mobile (Telas menores que 900px) ── */
        /* Ajustes para garantir que o layout quebre corretamente em celulares e tablets. */
        @media (max-width: 900px) {
          .about-card {
            grid-template-columns: 1fr; /* Muda de 2 colunas para 1 coluna empilhada */
          }
          .about-card-right {
            min-height: 200px;
          }
          .about-content-section {
            padding: 40px 24px 32px 24px;
          }
          .about-section-title,
          .about-strategic-title {
            max-width: 100%;
            font-size: clamp(22px, 5vw, 32px);
          }
          .about-text-block {
            max-width: 100%;
          }
          .about-service-row {
            grid-template-columns: 1fr;
          }
          .about-service-img-wrap {
            grid-column: 1;
          }
          .about-history-section {
            padding: 0 24px 48px 24px;
          }
          .about-history-card {
            grid-template-columns: 1fr;
            aspect-ratio: auto;
          }
          .about-history-img-wrap {
            height: 220px;
          }
        }
      `}</style>

    </div>
  );
}
