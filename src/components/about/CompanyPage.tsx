'use client'

import Link from 'next/link';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceItem {
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

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

// ─── Default Config ───────────────────────────────────────────────────────────

const defaultConfig: AboutPageConfig = {
  videoUrl: null,
  videoLabel: 'Precisa de uma ideia?',
  contactButtonLabel: 'Entrar em contato',
  contactHref: '/contact',
  strategicTeamTitle:
    'O TIME ESTRATÉGICO PARA MARCAS QUE QUEREM CRESCER COM CLAREZA E DIREÇÃO.',
  strategicTeamDescription1:
    'Na Zatas, unimos design, desenvolvimento e marketing para transformar ideias em presença digital sólida. Trabalhamos com empresas que entendem que posicionamento não é detalhe — é estratégia.',
  strategicTeamDescription2:
    'Seja construindo uma identidade do zero, desenvolvendo um site de alta performance ou estruturando campanhas digitais, nosso foco é simples: criar soluções inteligentes, bem executadas e orientadas a resultado.',
  commitmentTitle: 'NOSSO COMPROMISSO',
  commitmentItems: [
    'Clareza no processo.',
    'Precisão na execução.',
    'Consistência no crescimento.',
  ],
  commitmentFooter:
    'Não acreditamos em promessas exageradas. Acreditamos em estratégia, método e evolução contínua.',
  servicesTitle: 'SERVIÇOS EM DESTAQUE',
  services: [
    {
      description:
        'Website institucional estratégico. Desenvolvimento completo com foco em performance, identidade visual forte e estrutura pensada para conversão.',
      tags: ['Responsive', 'UI Design', 'UX Strategy'],
      image: '/images/about/site-zatas.png',
      imageAlt: 'Criação de Website',
    },
    {
      description:
        'Solução completa desenvolvida sobre medida para sua necessidade, composta por aplicativo mobile e integração robusta.',
      tags: ['Android', 'IOS'],
      image: '/images/about/app-zatas.png',
      imageAlt: 'Aplicativo Mobile',
    },
    {
      description:
        'Rebranding e posicionamento digital. Criação de identidade moderna e consistente, alinhando comunicação, presença online e estratégia de marca.',
      tags: ['Visual Identity', 'Logo Design', 'Brand Strategy'],
      image: '/images/about/bykatino.png',
      imageAlt: 'Identidade Visual',
    },
    {
      description:
        'Design de impressos estratégicos. Desenvolvimento de materiais gráficos como cartões de visita, papelaria e peças institucionais com identidade visual forte, acabamento profissional e comunicação pensada para gerar credibilidade e impacto.',
      tags: ['Graphic Assets', 'Print'],
      image: '/images/about/zatas-cartao.png',
      imageAlt: 'Design de Impressos',
    },
    {
      description:
        'Campanhas estratégicas focadas em posicionamento, geração de leads e aumento de vendas. Planejamento completo com criativos, segmentação e análise de performance para maximizar resultados.',
      tags: ['Perfomance', 'Conversão'],
      image: '/images/about/potencialize-sua-marca.png',
      imageAlt: 'Campanhas de Marketing',
    },
    {
      description:
        'Gestão estratégica de redes sociais com foco em crescimento, autoridade e engajamento. Planejamento de conteúdo, identidade visual consistente e comunicação alinhada à marca.',
      tags: ['Engajamento', 'Branding', 'Conteúdo'],
      image: '/images/about/zatas-marketing.png',
      imageAlt: 'Redes Sociais',
    },
  ],
  othersButtonLabel: 'Outros trabalhos',
  othersButtonHref: '/services',
  historyTitle: 'NOSSA HISTÓRIA',
  historyParagraphs: [
    'A Zatas nasceu da união de profissionais com habilidades complementares e uma visão em comum: desenvolver soluções digitais inteligentes e estratégicas.',
    'Ao longo dos primeiros projetos, crescemos juntos, fortalecemos nossa experiência e decidimos elevar nosso nível de atuação, estruturando a empresa de forma profissional e focada em resultados.',
    'Hoje, a Zatas transforma desafios em soluções completas, unindo tecnologia, design e estratégia.',
  ],
  historyButtonLabel: 'Conhecer equipe',
  historyButtonHref: '/team',
  historyImage: '/images/about/nossa-historia.png',
  historyImageAlt: 'Nossa História - Zatas',
};

// ─── Tag ─────────────────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="about-tag">
      {label}
      <style jsx>{`
        .about-tag {
          font-family: var(--font-lora), serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(13px, 1.1vw, 20px);
          color: #0D47A1;
          border: 1.5px solid #0D47A1;
          border-radius: 9999px;
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

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AboutPage({ config }: { config?: Partial<AboutPageConfig> }) {
  const cfg: AboutPageConfig = { ...defaultConfig, ...config };

  return (
    <div className="about-root">

      {/* ══════════════════════════════════════════════════════════════
          HERO — imagem ocupa quase toda a viewport, revelando ~80px
          do fundo escuro da seção seguinte
      ══════════════════════════════════════════════════════════════ */}
      <section className="about-hero">
        <img
          src="/images/about/oque-ser-zatas.png"
          alt="O que é ser Zatas?"
          className="about-hero-img"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SOBRE A ZATAS — card branco sobre fundo #263238
      ══════════════════════════════════════════════════════════════ */}
      <section className="about-card-section">
        <div className="about-card">

          {/* Esquerda: texto + pássaro + botão */}
          <div className="about-card-left">
            <div className="about-card-text">
              <div className="about-card-title-wrap">
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

            {/* Pássaro sobreposto no centro-direita da coluna */}
            <div className="about-card-bird">
              <img
                src="/images/about/fundo-passaro-card-sobre.png"
                alt=""
                aria-hidden
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div className="about-card-btn-wrap">
              <Link href={cfg.contactHref} className="about-card-btn">
                {cfg.contactButtonLabel}
              </Link>
            </div>
          </div>

          {/* Direita: vídeo / placeholder */}
          <div className="about-card-right">
            {cfg.videoUrl ? (
              <video src={cfg.videoUrl} controls className="about-video" />
            ) : (
              <div className="about-video-placeholder">
                <div className="about-video-inline">
                  <span className="about-video-text">Precisa de uma ideia?</span>
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

      {/* ══════════════════════════════════════════════════════════════
          TIME ESTRATÉGICO · COMPROMISSO · SERVIÇOS
          padding-left proporcional (~17.5% da largura = ~250px em 1440px)
      ══════════════════════════════════════════════════════════════ */}
      <section className="about-content-section">

        {/* O Time Estratégico */}
        <h2 className="about-section-title about-strategic-title">
          {cfg.strategicTeamTitle}
        </h2>
        <div className="about-text-block">
          <p className="about-body-text">{cfg.strategicTeamDescription1}</p>
          <p className="about-body-text">{cfg.strategicTeamDescription2}</p>
        </div>

        {/* Nosso Compromisso */}
        <h2 className="about-section-title about-section-gap-top">
          {cfg.commitmentTitle}
        </h2>
        <div className="about-text-block">
          {cfg.commitmentItems.map((item, i) => (
            <p key={i} className="about-body-text" style={{ marginBottom: '2px' }}>{item}</p>
          ))}
          <p className="about-body-text" style={{ marginTop: '14px' }}>{cfg.commitmentFooter}</p>
        </div>

        {/* Serviços em Destaque */}
        <h2 className="about-section-title about-section-gap-top">
          {cfg.servicesTitle}
        </h2>

        <div className="about-services-list">
          {cfg.services.map((service, index) => (
            <div key={index} className="about-service-row">
              {/* Card de texto — mesmo tamanho da imagem, texto no topo */}
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
              {/* Imagem — direita */}
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

        {/* Botão outros trabalhos */}
        <Link href={cfg.othersButtonHref} className="about-others-btn">
          {cfg.othersButtonLabel}
        </Link>

      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOSSA HISTÓRIA
          Card proporcional: imagem ~51% | texto ~49%
      ══════════════════════════════════════════════════════════════ */}
      <section className="about-history-section" style={{ paddingTop: '3vw' }}>
        <div className="about-history-card">
          {/* Imagem — esquerda */}
          <div className="about-history-img-wrap">
            <img
              src={cfg.historyImage}
              alt={cfg.historyImageAlt}
              className="about-history-img"
            />
          </div>
          {/* Texto — direita */}
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

      {/* ══════════════════════════════════════════════════════════════
          STYLES — todas as medidas em unidades relativas
      ══════════════════════════════════════════════════════════════ */}
      <style jsx global>{`

        /* ── Root ── */
        .about-root {
          background-color: #ECEFF1;
          font-family: var(--font-montserrat), sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .about-hero {
          position: relative;
          width: 100%;
        }
        .about-hero-img {
          width: 100%;
          height: auto;
          display: block;
          /* Corta um pouco o fundo para revelar o escuro abaixo */
          max-height: calc(100vh - 80px);
          object-fit: cover;
          object-position: top center;
        }

        /* ── CARD SOBRE ── */
        .about-card-section {
          background-color: #263238;
          /* padding lateral ~5.5vw para dar margem igual ao Figma */
          padding: 4vw 5.5vw 5.5vw;
        }
        .about-card {
          max-width: 1421px;
          margin: 0 auto;
          background-color: #F0F0F0;
          border-radius: clamp(16px, 1.5vw, 24px);
          overflow: hidden;
          display: grid;
          /* Vídeo ocupa ~20% (metade dos 40% anteriores) */
          grid-template-columns: 80% 20%;
          box-shadow: 0 24px 64px rgba(0,0,0,0.3);
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
        /* Wrapper inline para que a desc herde a largura do título */
        .about-card-title-wrap {
          display: inline-block;
        }
        .about-card-title {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          font-size: clamp(20px, 2.5vw, 38px);
          color: #263238;
          line-height: 1.15;
          text-transform: uppercase;
          margin: 0 0 clamp(14px, 1.5vw, 20px) 0;
          /* white-space nowrap faz o título definir a largura do inline-block */
          white-space: nowrap;
        }
        .about-card-desc {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          font-size: clamp(12px, 1.05vw, 15px);
          color: #263238;
          line-height: 1.65;
          /* herda largura do pai inline-block = largura do título */
          width: 100%;
          margin: 0;
        }
        .about-card-bird {
          position: absolute;
          bottom: 0;
          /* Centraliza o pássaro mais ao centro da coluna, bem visível */
          left: 25%;
          width: 75%;
          pointer-events: none;
          user-select: none;
          z-index: 1;
          /* Garante que o pássaro apareça com destaque */
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
        /* Coluna direita: ocupa 40% do card (definido no grid), centraliza o conteúdo */
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
        /* Linha com texto + play + texto inline */
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

        /* ── CONTENT SECTION (textos + serviços) ── */
        .about-content-section {
          background-color: #ECEFF1;
          /* padding-left ~17.5vw = ~252px em 1440px */
          padding: 5.5vw 5vw 4vw 12.7vw;
        }
        .about-section-title {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          /* clamp: 26px telas pequenas → 44px em ~1440px */
          font-size: clamp(22px, 3vw, 44px);
          color: #263238;
          text-transform: uppercase;
          line-height: 1.15;
          margin: 0 0 clamp(16px, 1.8vw, 28px) 0;
          /* Limita a largura para forçar 2 linhas no título longo */
          max-width: 42vw;
        }
        .about-strategic-title {
          /* Título estratégico: 2 linhas — ~600px em 1440px = ~41.7vw */
          max-width: 41.7vw;
        }
        .about-section-gap-top {
          margin-top: clamp(40px, 4.5vw, 72px);
        }
        .about-text-block {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1vw, 14px);
          /* mesma largura ~600px */
          max-width: 41.7vw;
        }
        .about-body-text {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          font-size: clamp(12px, 1.1vw, 16px);
          color: #263238;
          line-height: 1.75;
          margin: 0;
        }

        /* ── SERVICES ── */
        .about-services-list {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5.2vw, 75px);
          margin-top: clamp(28px, 3vw, 48px);
        }
        .about-service-row {
          display: grid;
          /* gap entre card e imagem: 3× o anterior (~48px → ~144px) */
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
        .about-service-desc {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
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

        /* Botão Outros trabalhos */
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

        /* ── NOSSA HISTÓRIA ── */
        .about-history-section {
          background-color: #ECEFF1;
          /* Mesmas margens laterais da seção de conteúdo acima */
          padding: 0 5.5vw 6vw 5.5vw;
        }
        .about-history-card {
          width: 100%;
          max-width: 1421px;
          margin: 0 auto;
          /* Altura proporcional: 546/1433 ≈ 38% da largura */
          aspect-ratio: 1433 / 546;
          background-color: #263238;
          border-radius: clamp(16px, 1.5vw, 24px);
          overflow: hidden;
          display: grid;
          /* imagem ~51% | texto ~49% — igual ao Figma */
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
        .about-history-title {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          font-size: clamp(20px, 2.8vw, 44px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.15;
          margin: 0 0 clamp(10px, 1.3vw, 20px) 0;
        }
        .about-history-paras {
          display: flex;
          flex-direction: column;
          gap: clamp(6px, 0.7vw, 10px);
          flex: 1;
        }
        .about-history-para {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 300;
          font-size: clamp(11px, 1.3vw, 18px);
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

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-card {
            grid-template-columns: 1fr;
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